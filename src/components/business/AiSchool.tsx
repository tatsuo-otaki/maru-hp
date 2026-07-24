import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS_PAGE } from "@/content/business";

const { school } = BUSINESS_PAGE;

export function AiSchool() {
  return (
    <Section id="ai-school" className="relative overflow-hidden bg-surface">
      {/* 背景の薄い〇 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-180px] h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[rgba(45,139,125,0.06)]"
      />
      <Reveal className="relative max-w-2xl">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{school.label}</SectionLabel>
        </div>
        <h2 className="mt-5 font-ja text-[1.5rem] font-medium leading-[1.5] text-navy md:text-[2rem]">
          {school.heading}
        </h2>
        <p className="mt-5 font-ja text-body font-light leading-loose text-muted">
          {school.body}
        </p>
        <a
          href={school.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 rounded-btn bg-teal px-6 py-3 font-ja text-[13px] font-medium text-white transition-colors hover:bg-navy"
        >
          {school.cta.label}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            ↗
          </span>
        </a>
      </Reveal>
    </Section>
  );
}
