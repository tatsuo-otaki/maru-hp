import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { PARTNER } from "@/content/home";

export function Partner() {
  return (
    <Section id="partner" className="relative overflow-hidden">
      {/* 背景の薄い〇 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-200px] h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-[rgba(15,31,61,0.04)]"
      />

      <Reveal className="relative mb-12">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{PARTNER.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>
        <h2 className="mt-5 font-ja text-[1.5rem] font-medium leading-[1.55] text-navy md:text-[2.25rem]">
          {PARTNER.headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-4 max-w-[580px] font-ja text-body leading-relaxed text-muted">
          {PARTNER.body}
        </p>
      </Reveal>

      {/* 連携方法チップ */}
      <Reveal delay={0.1} className="relative mb-12">
        <ul className="flex flex-wrap gap-3">
          {PARTNER.chips.map((chip) => (
            <li
              key={chip}
              className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              <span className="font-ja text-[12px] text-navy">{chip}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 強調 */}
      <Reveal delay={0.2} className="relative">
        <div className="mb-7 max-w-[680px] rounded border border-line border-l-[3px] border-l-teal bg-surface px-6 py-5">
          <p className="font-ja text-body font-medium leading-[1.75] text-navy">
            {PARTNER.emphasis}
          </p>
        </div>
        <TextLink href={PARTNER.cta.href}>{PARTNER.cta.label}</TextLink>
      </Reveal>
    </Section>
  );
}
