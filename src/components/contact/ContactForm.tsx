"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CONTACT } from "@/content/contact";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  consent: boolean;
};

type Status = "idle" | "sending" | "error";

type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initial: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  type: "",
  message: "",
  consent: false,
};

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "お名前を入力してください。";
  if (!f.email.trim()) e.email = "メールアドレスを入力してください。";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "メールアドレスの形式が正しくありません。";
  if (!f.type) e.type = "お問い合わせ種別を選択してください。";
  if (!f.message.trim()) e.message = "お問い合わせ内容を入力してください。";
  if (!f.consent) e.consent = "個人情報の取り扱いへの同意が必要です。";
  return e;
}

const fieldBase =
  "w-full rounded-btn border bg-white px-4 py-3 font-ja text-[14px] text-navy placeholder:text-muted/60 focus:outline-none focus-visible:border-teal";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [website, setWebsite] = useState(""); // ハニーポット

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (status === "sending") return;
    const e = validate(fields);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      // 最初のエラー項目へフォーカスを移す
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, website }),
      });
      if (!res.ok) throw new Error("request failed");
      setSubmitted(true);
    } catch {
      setStatus("error");
    }
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-line bg-white p-8 text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-teal text-teal">
          ✓
        </span>
        <h2 className="font-ja text-[18px] font-medium text-navy">
          {CONTACT.success.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-md font-ja text-[13px] leading-loose text-muted">
          {CONTACT.success.body}
        </p>
      </div>
    );
  }

  const err = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 font-ja text-[12px] text-amber">
        {errors[k]}
      </p>
    ) : null;
  const invalid = (k: keyof Fields) => (errors[k] ? true : undefined);
  const describedBy = (k: keyof Fields) => (errors[k] ? `${k}-error` : undefined);

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      {/* ハニーポット（スクリーンリーダー・視覚から隠す。ボットのみ入力） */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {/* 氏名 */}
      <div>
        <label htmlFor="name" className="mb-1.5 block font-ja text-[13px] font-medium text-navy">
          お名前 <span className="text-amber">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={invalid("name")}
          aria-describedby={describedBy("name")}
          className={`${fieldBase} ${errors.name ? "border-amber" : "border-line"}`}
        />
        {err("name")}
      </div>

      {/* 会社・団体名 */}
      <div>
        <label htmlFor="company" className="mb-1.5 block font-ja text-[13px] font-medium text-navy">
          会社・団体名
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          value={fields.company}
          onChange={(e) => update("company", e.target.value)}
          className={`${fieldBase} border-line`}
        />
      </div>

      {/* メール・電話（2列） */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block font-ja text-[13px] font-medium text-navy">
            メールアドレス <span className="text-amber">*</span>
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={invalid("email")}
            aria-describedby={describedBy("email")}
            className={`${fieldBase} ${errors.email ? "border-amber" : "border-line"}`}
          />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block font-ja text-[13px] font-medium text-navy">
            電話番号
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={`${fieldBase} border-line`}
          />
        </div>
      </div>

      {/* 問い合わせ種別 */}
      <div>
        <label htmlFor="type" className="mb-1.5 block font-ja text-[13px] font-medium text-navy">
          お問い合わせ種別 <span className="text-amber">*</span>
        </label>
        <select
          id="type"
          value={fields.type}
          onChange={(e) => update("type", e.target.value)}
          aria-invalid={invalid("type")}
          aria-describedby={describedBy("type")}
          className={`${fieldBase} appearance-none ${errors.type ? "border-amber" : "border-line"}`}
        >
          <option value="">選択してください</option>
          {CONTACT.typeGroups.map((g) => (
            <optgroup key={g.label} label={g.label}>
              {g.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        {err("type")}
      </div>

      {/* 内容 */}
      <div>
        <label htmlFor="message" className="mb-1.5 block font-ja text-[13px] font-medium text-navy">
          お問い合わせ内容 <span className="text-amber">*</span>
        </label>
        <textarea
          id="message"
          rows={7}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={invalid("message")}
          aria-describedby={describedBy("message")}
          className={`${fieldBase} resize-y leading-relaxed ${errors.message ? "border-amber" : "border-line"}`}
        />
        {err("message")}
      </div>

      {/* 同意 */}
      <div>
        <label className="flex items-start gap-2.5">
          <input
            type="checkbox"
            checked={fields.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={invalid("consent")}
            aria-describedby={describedBy("consent")}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--color-teal)]"
          />
          <span className="font-ja text-[13px] leading-relaxed text-navy">
            {CONTACT.consent.text}
            <Link href={CONTACT.consent.href} className="text-teal underline underline-offset-2">
              {CONTACT.consent.linkLabel}
            </Link>
          </span>
        </label>
        {err("consent")}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-btn border border-amber/50 bg-amber/5 px-4 py-3 font-ja text-[13px] text-navy">
          送信に失敗しました。時間をおいて再度お試しください。何度も失敗する場合は、お手数ですが別の方法でご連絡ください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-btn bg-navy px-8 py-3.5 font-ja text-[13px] font-medium text-white transition-colors hover:bg-teal disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "送信中…" : "この内容で送信する"}
      </button>
    </form>
  );
}
