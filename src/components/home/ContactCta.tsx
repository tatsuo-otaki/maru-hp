import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT_CTA } from "@/content/home";

export function ContactCta() {
  return (
    <Section id="cta" className="relative overflow-hidden bg-dark py-24 md:py-28">
      {/* 背景の〇 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-180px] right-[-200px] h-[640px] w-[640px] rounded-full border border-[rgba(45,139,125,0.08)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-20px] right-[-50px] h-80 w-80 rounded-full border border-[rgba(45,139,125,0.06)]"
      />

      <Reveal className="relative max-w-[720px]">
        <SectionLabel>{CONTACT_CTA.label}</SectionLabel>
        <h2 className="mt-6 font-ja text-[2rem] font-medium leading-[1.5] text-warm md:text-[2.75rem]">
          {CONTACT_CTA.headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-5 max-w-[480px] font-ja text-body font-light leading-relaxed text-warm/50">
          {CONTACT_CTA.body}
        </p>

        <div className="mt-12 flex flex-col gap-3.5 sm:flex-row">
          {CONTACT_CTA.buttons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className={`group flex min-w-[220px] items-center justify-between gap-4 rounded-btn px-6 py-4 transition-colors ${
                btn.primary
                  ? "bg-teal text-white hover:bg-navy"
                  : "border border-warm/20 text-warm hover:bg-white/[0.08]"
              }`}
            >
              <span>
                <span className="block font-ja text-[13px] font-medium leading-tight">
                  {btn.label}
                </span>
                <span className="mt-0.5 block font-en text-[9px] tracking-wide opacity-50">
                  {btn.sub}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="font-en text-[14px] transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
