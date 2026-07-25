import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/home/ContactCta";
import { PARTNERS_HUB, type Accent } from "@/content/partners";

const COLOR: Record<Accent, string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
};

export const metadata: Metadata = {
  title: "企業・自治体の方へ",
  description:
    "株式会社〇・AI・しごと学校は、AI教育・実務実習・地域課題の解決を通じて、企業・自治体・教育機関・就労支援機関と連携します。人材育成・共創・CSRの各プログラムと連携パートナー募集のご案内。",
};

export default function PartnersPage() {
  const p = PARTNERS_HUB;
  return (
    <>
      <PageHero
        label={p.hero.label}
        title={p.hero.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        lead={p.hero.lead}
      />

      {/* 重点メッセージ */}
      <Section>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-ja text-h3 font-medium leading-relaxed text-navy">
            {p.message}
          </p>
        </Reveal>
      </Section>

      {/* 3つのプログラム */}
      <Section className="bg-surface">
        <Reveal className="mb-10">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
            <SectionLabel>Programs</SectionLabel>
          </div>
          <h2 className="mt-4 font-ja text-[1.5rem] font-medium text-navy md:text-[2rem]">
            {p.programsHeading}
          </h2>
          <p className="mt-4 max-w-2xl font-ja text-body leading-relaxed text-muted">
            {p.programsIntro}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {p.programs.map((prog, i) => {
            const c = COLOR[prog.color];
            return (
              <Reveal key={prog.title} delay={i * 0.06}>
                <Link
                  href={prog.href}
                  className="group flex h-full flex-col rounded-card border border-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[color:var(--hover)] hover:shadow-[0_10px_28px_rgba(15,31,61,0.09)]"
                  style={{ ["--hover" as string]: c }}
                >
                  {/* 対象（誰向けか一目で） */}
                  <span
                    className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 font-ja text-[11px] font-medium"
                    style={{ color: c, backgroundColor: `color-mix(in srgb, ${c} 10%, white)` }}
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                    {prog.forWhom}
                  </span>

                  {/* 引きのコピー（ぱっと見の価値） */}
                  <p className="font-ja text-[17px] font-medium leading-[1.55] text-navy">
                    {prog.catch}
                  </p>

                  {/* プログラム名＋英字ラベル */}
                  <div className="mt-3 border-t border-line pt-3">
                    <div
                      className="font-en text-[9px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: c }}
                    >
                      {prog.en}
                    </div>
                    <h3 className="mt-1 font-ja text-[13.5px] font-medium leading-[1.5] text-navy">
                      {prog.title}
                    </h3>
                  </div>

                  <p className="mt-3 font-ja text-[12.5px] leading-[1.85] text-muted">
                    {prog.desc}
                  </p>

                  {/* 要点（3つの価値） */}
                  <ul className="mt-4 space-y-1.5">
                    {prog.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 font-ja text-[12px] leading-[1.6] text-navy"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[6px] h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: c }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <span
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 font-ja text-[12px] font-medium"
                    style={{ color: c }}
                  >
                    詳しく見る
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 連携パートナー募集 */}
      <Section>
        <Reveal className="mb-10">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
            <SectionLabel>Recruit Partners</SectionLabel>
          </div>
          <h2 className="mt-4 font-ja text-[1.5rem] font-medium text-navy md:text-[2rem]">
            {p.recruitHeading}
          </h2>
          <p className="mt-4 max-w-2xl font-ja text-body leading-relaxed text-muted">
            {p.recruitIntro}
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.recruit.map((r, i) => {
            const c = COLOR[r.color];
            return (
              <Reveal key={r.title} delay={(i % 3) * 0.06}>
                <li className="flex h-full flex-col rounded-card border border-line bg-white p-6">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                    <h3 className="font-ja text-[14px] font-medium leading-snug text-navy">
                      {r.title}
                    </h3>
                  </div>
                  <p className="font-ja text-[12.5px] leading-[1.85] text-muted">
                    {r.desc}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.1} className="mt-9">
          <Button href={p.cta.href} variant="primary" arrow>
            {p.cta.label}
          </Button>
        </Reveal>
      </Section>

      <ContactCta />
    </>
  );
}
