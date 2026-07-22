import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { VISION } from "@/content/home";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
} as const;

/**
 * 5つのVision。Figma Make は 600vh のスクロールジャックだが、
 * 「スクロールを奪わない」方針により通常縦スクロールのリストで表示する。
 */
export function Vision() {
  return (
    <Section id="vision" className="relative overflow-hidden bg-surface">
      {/* 見出し */}
      <Reveal className="mb-14 text-center">
        <div className="flex items-center justify-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{VISION.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>
        <h2 className="mt-5 font-ja text-[1.5rem] font-medium leading-[1.55] text-navy md:text-[2.25rem]">
          {VISION.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] font-ja text-body leading-relaxed text-muted">
          {VISION.intro}
        </p>
      </Reveal>

      {/* 5つの変化のリスト */}
      <ol className="mx-auto max-w-4xl">
        {VISION.items.map((v, i) => (
          <Reveal key={v.num} delay={i * 0.05}>
            <li className="flex flex-col gap-4 border-t border-line py-8 md:flex-row md:items-baseline md:gap-10 md:py-10">
              {/* 大きな番号＋色リング */}
              <div className="flex shrink-0 items-center gap-4 md:w-40">
                <span
                  className="font-en text-[3.5rem] font-light leading-none text-navy/10 md:text-[5rem]"
                  aria-hidden="true"
                >
                  {v.num}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden h-2.5 w-2.5 rounded-full md:block"
                  style={{ backgroundColor: COLOR[v.color] }}
                />
              </div>

              {/* 内容 */}
              <div className="md:flex-1">
                <div
                  className="mb-2 font-en text-[9px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: COLOR[v.color] }}
                >
                  {v.en}
                </div>
                <h3 className="font-ja text-h3 font-medium text-navy">
                  {v.title}
                </h3>
                <p className="mt-3 max-w-2xl font-ja text-body leading-loose text-muted">
                  {v.desc}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12 text-center">
        <TextLink href={VISION.cta.href}>{VISION.cta.label}</TextLink>
      </Reveal>
    </Section>
  );
}
