import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/PageJsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/home/ContactCta";
import { ProgramBands } from "@/components/partners/ProgramBands";
import { PARTNERS_HUB, type Accent } from "@/content/partners";

const COLOR: Record<Accent, string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
};

export const metadata: Metadata = pageMetadata({
  title: "企業・自治体の方へ",
  description:
    "株式会社〇・AI・しごと学校は、AI教育・実務実習・地域課題の解決を通じて、企業・自治体・教育機関・就労支援機関と連携します。人材育成・共創・CSRの各プログラムと連携パートナー募集のご案内。",
  path: "/partners",
});

export default function PartnersPage() {
  const p = PARTNERS_HUB;
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", path: "/" }, { name: "企業・自治体の方へ", path: "/partners" }]} />
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

      {/* 3つのプログラム（全幅バンド） */}
      <ProgramBands />

      {/* 連携パートナー募集（プログラムのバンドと区別するため面と区切り線を変える） */}
      <Section className="border-t border-line bg-surface">
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
