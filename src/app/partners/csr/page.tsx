import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Faq } from "@/components/ui/Faq";
import { SectionHead as Head } from "@/components/partners/SectionHead";
import { ContactCta } from "@/components/home/ContactCta";
import { CSR as C } from "@/content/partnerCsr";

const COLOR: Record<"teal" | "amber" | "navy", string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
};

export const metadata: Metadata = pageMetadata({
  title: "企業CSR共創パートナープログラム",
  description:
    "企業のCSR・社会貢献活動を、企画から実行・成果測定・報告まで支援。AI教育・地方創生・自治体実証・就労支援・国際人材育成を、企業の理念や重点課題に合わせて設計します。",
  path: "/partners/csr",
});

export default function CsrPage() {
  return (
    <>
      <PageHero
        label={C.hero.label}
        title={C.hero.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        lead={C.hero.lead}
      />

      {/* 重点メッセージ */}
      <Section>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-ja text-h3 font-medium leading-relaxed text-navy">{C.message}</p>
        </Reveal>
      </Section>

      {/* 概要 */}
      <Section className="bg-surface">
        <Head label="Overview" title={C.overview.heading} />
        <Reveal delay={0.1} className="max-w-3xl space-y-4">
          {C.overview.body.map((p) => (
            <p key={p} className="font-ja text-body font-light leading-loose text-muted">
              {p}
            </p>
          ))}
        </Reveal>
      </Section>

      {/* 大切にすること */}
      <Section>
        <Head label="Values" title={C.values.heading} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {C.values.items.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-card border border-line bg-white p-6">
                <h3 className="font-ja text-[15px] font-medium text-navy">{v.title}</h3>
                <p className="mt-2.5 font-ja text-[13px] leading-[1.85] text-muted">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 活動メニュー */}
      <Section className="bg-surface">
        <Head label="Menu" title={C.menu.heading} intro={C.menu.intro} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {C.menu.items.map((m, i) => {
            const c = COLOR[m.color];
            return (
              <Reveal key={m.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col rounded-card border border-line bg-white p-6">
                  <span className="mb-3 h-1.5 w-8 rounded-full" style={{ backgroundColor: c }} />
                  <h3 className="font-ja text-[15px] font-medium text-navy">{m.title}</h3>
                  <p className="mt-2.5 font-ja text-[12.5px] leading-[1.85] text-muted">{m.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 基本フロー */}
      <Section>
        <Head label="Flow" title={C.flow.heading} />
        <Reveal delay={0.1}>
          <ol className="space-y-0">
            {C.flow.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-4 border-l border-line pb-6 pl-6 last:pb-0">
                <span className="-ml-[calc(1.5rem+1px)] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal bg-warm font-en text-[11px] font-semibold text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1.5 font-ja text-[13.5px] leading-relaxed text-navy">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* 成果の測定と報告 */}
      <Section className="bg-surface">
        <Head label="Measurement" title={C.measure.heading} intro={C.measure.intro} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {C.measure.stages.map((s, i) => {
            const c = COLOR[s.color];
            return (
              <Reveal key={s.label} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-card border border-line bg-white p-6">
                  <div className="font-en text-[15px] font-bold" style={{ color: c }}>
                    {s.label}
                  </div>
                  <div className="mb-3 font-ja text-[11px] text-muted">{s.sub}</div>
                  <ul className="space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: c }} />
                        <span className="font-ja text-[12.5px] leading-relaxed text-muted">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.2} className="mt-6">
          <p className="font-ja text-[12px] leading-relaxed text-muted">{C.measure.note}</p>
          <ul className="mt-4 space-y-2">
            {C.measure.reports.map((r) => (
              <li key={r} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span className="font-ja text-[13px] leading-relaxed text-navy">{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* パートナー区分・表示 */}
      <Section>
        <Head label="Partners" title={C.partners.heading} intro={C.partners.tiersIntro} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {C.partners.tiers.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-card border border-line bg-white p-6">
                <h3 className="font-ja text-[15px] font-medium text-navy">{t.name}</h3>
                <p className="mt-2.5 font-ja text-[12.5px] leading-[1.85] text-muted">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {C.partners.displays.map((d) => (
              <li key={d} className="rounded-full border border-line bg-white px-4 py-1.5 font-ja text-[12px] text-navy">
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl font-ja text-[12px] leading-relaxed text-muted">
            {C.partners.displayNote}
          </p>
        </Reveal>
      </Section>

      {/* メリット */}
      <Section className="bg-surface">
        <Head label="Benefits" title={C.benefits.heading} />
        <Reveal delay={0.1}>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {C.benefits.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span className="font-ja text-[13px] leading-relaxed text-navy">{it}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 人権・倫理・表現のお約束 */}
      <Section>
        <Head label="Ethics" title={C.ethics.heading} />
        <Reveal delay={0.1} className="max-w-3xl rounded-card border border-line border-l-[3px] border-l-amber bg-surface p-6">
          <ul className="space-y-3">
            {C.ethics.items.map((n) => (
              <li key={n} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span className="font-ja text-[12.5px] leading-relaxed text-muted">{n}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 役割 */}
      <Section className="bg-surface">
        <Head label="Our Role" title={C.role.heading} />
        <Reveal delay={0.1}>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {C.role.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span className="font-ja text-[13px] leading-relaxed text-navy">{it}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section>
        <Head label="FAQ" title={C.faq.heading} />
        <Reveal delay={0.1} className="max-w-3xl">
          <Faq items={C.faq.items} />
        </Reveal>
      </Section>

      {/* CTA */}
      <Section className="bg-surface">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-ja text-[1.5rem] font-medium leading-[1.5] text-navy md:text-[2rem]">
            {C.cta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-ja text-body leading-relaxed text-muted">
            {C.cta.body}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-3xl">
          <ul className="flex flex-wrap justify-center gap-2.5">
            {C.cta.buttons.map((b) => (
              <li key={b}>
                <Link
                  href={C.cta.href}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-ja text-[12.5px] text-navy transition-colors hover:border-teal hover:text-teal"
                >
                  {b}
                  <span aria-hidden="true" className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-teal">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <ContactCta />
    </>
  );
}
