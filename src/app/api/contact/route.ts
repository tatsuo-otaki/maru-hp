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
};

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
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact send failed:", e);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 502 },
    );
  }
}
