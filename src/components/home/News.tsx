import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { NEWS } from "@/content/home";
import { NEWS_PAGE, NEWS_CATEGORY_COLOR } from "@/content/news";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
} as const;

function tint(color: string, pct: number) {
  return `color-mix(in srgb, ${color} ${pct}%, white)`;
}

// トップでは実データ（/news）の先頭5件を表示（一覧と同期）
const latest = NEWS_PAGE.items.slice(0, 5);

export function News() {
  return (
    <Section id="news">
      <Reveal className="mb-12">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{NEWS.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>
        <h2 className="mt-5 font-en text-[1.75rem] font-medium text-navy md:text-[2.25rem]">
          {NEWS.heading}
        </h2>
        <p className="mt-4 font-ja text-body leading-relaxed text-muted">
          {NEWS.intro}
        </p>
      </Reveal>

      {/* ニュース一覧（/news と同一データ・同一表示） */}
      <ul className="border-t border-line">
        {latest.map((item) => {
          const c = COLOR[NEWS_CATEGORY_COLOR[item.category]];
          const rowClass =
            "group flex flex-col gap-2 border-b border-line py-5 md:flex-row md:items-center md:gap-5";
          const inner = (
            <>
              <div className="flex shrink-0 items-center gap-3 md:w-56">
                <span
                  className="rounded-[10px] px-2.5 py-1 font-ja text-[9px] font-semibold"
                  style={{ color: c, backgroundColor: tint(c, 10) }}
                >
                  {item.category}
                </span>
                {(item.year || item.outlet) && (
                  <span className="font-en text-[11px] tracking-wide text-muted">
                    {item.year ?? item.outlet}
                  </span>
                )}
              </div>
              <span className="font-ja text-[13px] leading-[1.6] text-navy">
                {item.title}
                {item.year && item.outlet && (
                  <span className="ml-2 font-ja text-[11px] text-muted">
                    — {item.outlet}
                  </span>
                )}
              </span>
              {item.href && (
                <span
                  aria-hidden="true"
                  className="ml-auto hidden shrink-0 font-en text-[12px] text-muted transition-transform duration-200 group-hover:translate-x-0.5 md:inline"
                >
                  {item.external ? "↗" : "→"}
                </span>
              )}
            </>
          );
          return (
            <li key={item.title}>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`${rowClass} transition-colors hover:bg-navy/[0.02]`}
                >
                  {inner}
                </a>
              ) : (
                <div className={rowClass}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-7 flex flex-wrap gap-6">
        {NEWS.ctas.map((cta) =>
          cta.primary ? (
            <TextLink key={cta.label} href={cta.href}>
              {cta.label}
            </TextLink>
          ) : (
            <TextLink key={cta.label} href={cta.href} className="text-muted hover:text-navy">
              {cta.label}
            </TextLink>
          ),
        )}
      </div>
    </Section>
  );
}
