import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { CEO } from "@/content/home";

export function Ceo() {
  return (
    <Section id="ceo" className="relative overflow-hidden bg-surface">
      {/* 背景の薄い弧 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-20 -bottom-20 h-80 w-80 rounded-full border border-[rgba(15,31,61,0.05)]"
      />

      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
        {/* 左：円形写真プレースホルダ */}
        <Reveal className="shrink-0">
          <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full border-[1.5px] border-teal/30 bg-warm">
            <span
              aria-hidden="true"
              className="absolute -inset-2 rounded-full border border-teal/[0.18]"
            />
            <span className="font-ja text-[40px] text-muted/30">{CEO.photoMark}</span>
          </div>
        </Reveal>

        {/* 右：メッセージ */}
        <Reveal delay={0.1} className="md:flex-1">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
            <SectionLabel>{CEO.label}</SectionLabel>
          </div>
          <h2 className="mt-5 font-ja text-h2 font-medium leading-[1.55] text-navy">
            {CEO.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 font-ja text-body font-light leading-loose text-muted">
            {CEO.body}
          </p>
          <div className="mt-9 border-t border-line pt-5">
            <div className="font-ja text-[13px] font-medium text-navy">{CEO.name}</div>
            <div className="mt-1 font-en text-[9px] font-semibold uppercase tracking-[0.15em] text-muted">
              {CEO.role}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
