import type { LINKHUB } from "@/content/linkhub";

type Item = (typeof LINKHUB)["ctas"][number];

/**
 * 個人向け（AI教育＝amber）／法人向け（AI開発＝teal・濃紺地）のCTAカード。
 * サイト内で既に使われている教育=amber／開発=teal の色分け（brand-guide.md）を踏襲し、
 * 個人と法人が一目で区別できるよう明/暗のコントラストもつけている。
 */
export function CtaCard({ item }: { item: Item }) {
  const isPersonal = item.variant === "personal";

  return (
    <a
      href={item.href}
      target={item.href.startsWith("/") ? undefined : "_blank"}
      rel={item.href.startsWith("/") ? undefined : "noopener noreferrer"}
      className={`group block rounded-card border p-6 transition-transform duration-200 hover:-translate-y-0.5 ${
        isPersonal
          ? "border-line bg-surface hover:border-amber"
          : "border-navy bg-dark hover:border-teal"
      }`}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full font-en text-[11px] font-semibold ${
          isPersonal ? "bg-amber/15 text-amber" : "bg-teal/20 text-teal"
        }`}
      >
        {item.number}
      </span>

      <p
        className={`mt-4 font-en text-[9px] font-semibold tracking-[0.12em] uppercase ${
          isPersonal ? "text-amber" : "text-teal"
        }`}
      >
        {item.eyebrow}
      </p>
      <h2 className={`mt-1.5 font-ja text-[18px] font-medium ${isPersonal ? "text-navy" : "text-white"}`}>
        {item.heading}
      </h2>
      <p className={`mt-2 font-ja text-[13px] leading-relaxed ${isPersonal ? "text-muted" : "text-white/70"}`}>
        {item.body}
      </p>

      <span
        className={`mt-5 inline-flex items-center justify-center gap-2 rounded-btn px-6 py-3 font-ja text-[12px] font-medium text-white ${
          isPersonal ? "bg-amber" : "bg-teal"
        }`}
      >
        {item.buttonLabel}
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </a>
  );
}
