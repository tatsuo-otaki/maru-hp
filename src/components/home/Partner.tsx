import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PARTNER } from "@/content/home";

export function Partner() {
  return (
    <Section
      id="partner"
      className="relative overflow-hidden border-y border-teal/20 bg-[color-mix(in_srgb,var(--color-teal)_9%,var(--color-warm))]"
    >
      {/* 背景の〇（ティール地で少し強めに） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-200px] h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-teal/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-120px] h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-teal/10"
      />

      <Reveal className="relative mb-10 md:mb-12">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{PARTNER.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>
        {/* 対象を明示（誰に向けたセクションか一目で伝える） */}
        <p className="mt-5 font-ja text-[13px] font-medium text-teal">
          {PARTNER.audience}
        </p>
        <h2 className="mt-2 font-ja text-[1.5rem] font-medium leading-[1.55] text-navy md:text-[2.25rem]">
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

      {/* 連携メニュー（「できること」を明快なアクションカードで見せる） */}
      <Reveal delay={0.1} className="relative mb-10">
        <h3 className="mb-5 flex items-center gap-2 font-ja text-[15px] font-medium text-navy">
          <span aria-hidden="true" className="h-4 w-1 rounded-full bg-teal" />
          {PARTNER.chipsHeading}
        </h3>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER.chips.map((chip) => (
            <li key={chip}>
              <a
                href={PARTNER.cta.href}
                className="group flex h-full items-center justify-between gap-3 rounded-card border border-line bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:shadow-[0_8px_24px_rgba(15,31,61,0.08)]"
              >
                <span className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal transition-transform duration-200 group-hover:scale-125"
                  />
                  <span className="font-ja text-[13px] leading-snug text-navy">
                    {chip}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-en text-[13px] text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-teal"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 強調＋強い誘導ボタン */}
      <Reveal delay={0.2} className="relative">
        <div className="mb-8 max-w-[680px] rounded border border-line border-l-[3px] border-l-teal bg-white px-6 py-5">
          <p className="font-ja text-body font-medium leading-[1.75] text-navy">
            {PARTNER.emphasis}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button href={PARTNER.cta.href} variant="primary" arrow>
            {PARTNER.cta.label}
          </Button>
          <span className="font-ja text-[12px] text-muted">
            まずはお気軽にご相談ください。
          </span>
        </div>
      </Reveal>
    </Section>
  );
}
