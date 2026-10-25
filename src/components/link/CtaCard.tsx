"use client";

import type { LINKHUB } from "@/content/linkhub";
import { trackCardClick } from "@/lib/analytics";

type Item = (typeof LINKHUB)["ctas"][number];

/**
 * 個人向け（AI教育＝amber）／法人向け（AI開発＝teal・濃紺地）／
 * コーポレートサイト（navy）のCTAカード。
 * サイト内で既に使われている教育=amber／開発=teal の色分け（brand-guide.md）を踏襲し、
 * 見た目だけで3種類が区別できるようにしている。
 * スマホで片手でも読みやすいよう、本文・ボタンの文字サイズは大きめに設定している。
 */
export function CtaCard({ item }: { item: Item }) {
  const isPersonal = item.variant === "personal";
  const isCorporate = item.variant === "corporate";

  return (
    <a
      href={item.href}
      target={item.href.startsWith("/") ? undefined : "_blank"}
      rel={item.href.startsWith("/") ? undefined : "noopener noreferrer"}
      onClick={() => trackCardClick(item.cardType)}
      className={`group block rounded-card border p-6 transition-transform duration-200 hover:-translate-y-0.5 ${
        isPersonal
          ? "border-line bg-surface hover:border-amber"
          : isCorporate
            ? "border-navy bg-dark hover:border-teal"
            : "border-navy/20 bg-white hover:border-navy"
      }`}
    >
      <p
        className={`font-en text-[12px] font-semibold tracking-[0.1em] uppercase ${
          isPersonal ? "text-amber" : isCorporate ? "text-teal" : "text-navy/60"
        }`}
      >
        {item.eyebrow}
      </p>
      <h2
        className={`mt-2 font-ja text-[22px] leading-snug font-semibold ${
          isCorporate ? "text-white" : "text-navy"
        }`}
      >
        {item.heading}
      </h2>
      <p
        className={`mt-2.5 font-ja text-[15px] leading-relaxed ${
          isPersonal ? "text-muted" : isCorporate ? "text-white/70" : "text-muted"
        }`}
      >
        {item.body}
      </p>

      <span
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-btn px-6 py-4 font-ja text-[17px] font-semibold text-white ${
          isPersonal ? "bg-amber" : isCorporate ? "bg-teal" : "bg-navy"
        }`}
      >
        {item.buttonLabel}
        <span
          aria-hidden="true"
          className="text-[20px] transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </a>
  );
}
