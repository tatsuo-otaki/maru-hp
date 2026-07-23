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
 * トップ用の Vision ダイジェスト。5つのタイトルだけを並べ、
 * 詳細（各項目の説明）は /about#vision の本編へ誘導する。
 */
export function VisionTeaser() {
  return (
    <Section className="bg-surface">
      <Reveal className="mb-10 text-center">
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

      <Reveal delay={0.1} className="mx-auto max-w-3xl">
        <ol className="border-t border-line">
          {VISION.items.map((v) => (
            <li
              key={v.num}
              className="flex items-center gap-4 border-b border-line py-4 md:gap-6"
            >
              <span
                className="font-en text-[1.25rem] font-light leading-none text-navy/25 md:text-[1.5rem]"
                aria-hidden="true"
              >
                {v.num}
              </span>
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: COLOR[v.color] }}
              />
              <span className="font-ja text-[15px] font-medium text-navy md:text-[17px]">
                {v.title}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="mt-10 text-center">
        <TextLink href={VISION.cta.href}>{VISION.cta.label}</TextLink>
      </Reveal>
    </Section>
  );
}
