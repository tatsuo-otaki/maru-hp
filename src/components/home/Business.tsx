import { Fragment } from "react";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS } from "@/content/home";

type Accent = "teal" | "amber" | "navy";

/** 事業カラー名 → CSS 変数（インライン style で境界色・番号色などに使う） */
const accentVar: Record<Accent, string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
};

/** カード間の循環コネクター（前の事業→次の事業へ、点線で接続） */
function Connector({ from, to }: { from: Accent; to: Accent }) {
  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-0 px-5 py-3 md:px-12"
    >
      <div className="flex w-12 shrink-0 justify-center md:w-[60px]">
        <svg width="2" height="28" className="block">
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="28"
            stroke={accentVar[to]}
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="ml-3.5 flex items-center gap-1.5">
        <span
          className="h-1.5 w-1.5 rounded-full border-[1.5px]"
          style={{ borderColor: accentVar[from] }}
        />
        <span className="h-px w-7 bg-navy/15" />
        <span
          className="h-1.5 w-1.5 rounded-full border-[1.5px]"
          style={{ borderColor: accentVar[to] }}
        />
      </div>
    </div>
  );
}

export function Business() {
  return (
    <Section id="business" className="relative overflow-hidden">
      {/* 背景の薄い〇 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-160px] h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-[rgba(15,31,61,0.04)] md:right-[-200px] md:h-[800px] md:w-[800px]"
      />

      {/* セクション見出し */}
      <Reveal className="relative mb-9 text-center md:mb-14">
        <div className="flex items-center justify-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{BUSINESS.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>
        <h2 className="mt-5 font-ja text-[1.5rem] font-medium leading-[1.55] text-navy md:text-[2.25rem]">
          {BUSINESS.headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] font-ja text-body leading-relaxed text-muted">
          {BUSINESS.intro}
        </p>
      </Reveal>

      {/* 縦積み横長カード */}
      <div className="relative flex flex-col">
        {BUSINESS.items.map((biz, i) => {
          const accent = biz.color as Accent;
          return (
            <Fragment key={biz.num}>
              <Reveal delay={i * 0.05}>
                <article className="flex flex-col items-start gap-6 rounded-[6px] border border-line bg-white p-7 md:flex-row md:gap-12 md:p-10">
                  {/* 左：番号＋事業名＋リード */}
                  <div className="w-full shrink-0 md:w-[36%]">
                    <div className="mb-4 flex items-center gap-4">
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 md:h-[60px] md:w-[60px]"
                        style={{ borderColor: accentVar[accent] }}
                      >
                        <span
                          className="font-en text-[14px] font-semibold md:text-[17px]"
                          style={{ color: accentVar[accent] }}
                        >
                          {biz.num}
                        </span>
                      </span>
                      <div>
                        <div
                          className="mb-1 font-en text-[8px] font-semibold uppercase tracking-[0.18em]"
                          style={{ color: accentVar[accent] }}
                        >
                          {biz.en}
                        </div>
                        <h3 className="font-ja text-[15px] font-medium leading-snug text-navy md:text-[18px]">
                          {biz.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-ja text-[13px] leading-[1.9] text-muted">
                      {biz.lead}
                    </p>
                  </div>

                  {/* 右：取り組みリスト＋CTA */}
                  <div className="w-full border-line md:flex-1 md:border-l md:pl-12">
                    <ul className="mb-6 grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
                      {biz.works.map((w) => (
                        <li key={w} className="flex items-start gap-2.5">
                          <span
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: accentVar[accent] }}
                          />
                          <span className="font-ja text-[12px] leading-[1.75] text-navy">
                            {w}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={biz.cta.href}
                      className="group inline-flex items-center gap-2 border-b pb-0.5 font-ja text-[12px] font-medium transition-opacity hover:opacity-70"
                      style={{ color: accentVar[accent], borderColor: accentVar[accent] }}
                    >
                      {biz.cta.label}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </article>
              </Reveal>

              {i < BUSINESS.items.length - 1 && (
                <Connector
                  from={accent}
                  to={BUSINESS.items[i + 1].color as Accent}
                />
              )}
            </Fragment>
          );
        })}

        {/* 循環インジケータ */}
        <div className="flex items-center gap-2 px-5 py-3.5 opacity-45 md:px-12">
          <div className="flex w-12 shrink-0 justify-center md:w-[60px]">
            <span className="h-2 w-2 rounded-full border-[1.5px] border-navy" />
          </div>
          <svg width="80" height="12" className="block" aria-hidden="true">
            <path
              d="M 0 6 Q 40 0 80 6"
              fill="none"
              stroke="var(--color-teal)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          </svg>
          <span className="font-en text-[8px] uppercase tracking-[0.15em] text-teal">
            循環 / Cycle
          </span>
        </div>
      </div>
    </Section>
  );
}
