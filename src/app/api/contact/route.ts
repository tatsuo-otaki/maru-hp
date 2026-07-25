import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * お問い合わせ送信 API。
 * 必要な環境変数：
 *   RESEND_API_KEY … Resend の API キー
 *   CONTACT_TO     … 受信先メールアドレス（例：info@example.com）
 *   CONTACT_FROM   … 送信元（認証済みドメイン。例：株式会社〇 <noreply@example.com>）
 * ※ 送信元ドメインは Resend で DNS 認証が必要。
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  type?: string;
  message?: string;
  consent?: boolean;
  // ハニーポット（人間は入力しない。埋まっていたらスパムとみなす）
  website?: string;
  // Cloudflare Turnstile のトークン
  turnstileToken?: string;
};

/**
 * Cloudflare Turnstile のトークンを検証する。
 * TURNSTILE_SECRET_KEY が未設定なら検証をスキップ（開発時など）。
 * 戻り値：true = 通過（または検証スキップ）、false = 検証失敗。
 */
async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // キー未設定時は検証しない
  if (!token) return false;
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      },
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (e) {
    console.error("Turnstile verify failed:", e);
    return false;
  }
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "不正なリクエストです。" }, { status: 400 });
  }

  // ハニーポット：埋まっていれば成功を装って静かに破棄
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // サーバー側でも検証（クライアントを信頼しない）
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const type = (body.type ?? "").trim();
  const message = (body.message ?? "").trim();
  if (!name || !email || !type || !message || !EMAIL_RE.test(email) || body.consent !== true) {
    return NextResponse.json({ error: "入力内容をご確認ください。" }, { status: 422 });
  }

  // CAPTCHA（Cloudflare Turnstile）検証
  if (!(await verifyTurnstile(body.turnstileToken))) {
    return NextResponse.json(
      { error: "認証に失敗しました。ページを再読み込みして再度お試しください。" },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !to || !from) {
    console.error("Contact form: missing RESEND_API_KEY / CONTACT_TO / CONTACT_FROM");
    return NextResponse.json(
      { error: "送信設定が未完了です。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }

  const company = (body.company ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const text = [
    "Webサイトのお問い合わせフォームから送信がありました。",
    "",
    `■ お名前：${name}`,
    `■ 会社・団体名：${company || "（未入力）"}`,
    `■ メールアドレス：${email}`,
    `■ 電話番号：${phone || "（未入力）"}`,
    `■ お問い合わせ種別：${type}`,
    "",
    "■ お問い合わせ内容：",
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);

    // 1) 管理者への通知（返信すると問い合わせ者へ届くよう replyTo を設定）
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `【お問い合わせ】${type} - ${name}`,
      text,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "送信に失敗しました。時間をおいて再度お試しください。" },
        { status: 502 },
      );
    }

    // 2) 送信者への自動返信（ベストエフォート。失敗しても受付自体は成功扱い）
    //    返信先は監視中の受信アドレス（CONTACT_TO）にして、返信が届くようにする。
    const autoReply = [
      `${name} 様`,
      "",
      "この度は株式会社〇へお問い合わせいただき、誠にありがとうございます。",
      "以下の内容でお問い合わせを受け付けました。内容を確認のうえ、担当者より折り返しご連絡いたします。",
      "",
      "※ 本メールは自動送信です。数日経っても返信がない場合は、お手数ですが再度ご連絡ください。",
      "",
      "──────────────────",
      `お問い合わせ種別：${type}`,
      "お問い合わせ内容：",
      message,
      "──────────────────",
      "",
      "株式会社〇 / maru Inc.",
    ].join("\n");
    try {
      await resend.emails.send({
        from,
        to: email,
        replyTo: to,
        subject: "【株式会社〇】お問い合わせを受け付けました",
        text: autoReply,
      });
    } catch (e) {
      console.error("Auto-reply failed (non-fatal):", e);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact send failed:", e);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 502 },
    );
  }
}
