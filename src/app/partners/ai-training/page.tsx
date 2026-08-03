import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Faq } from "@/components/ui/Faq";
import { SectionHead as Head } from "@/components/partners/SectionHead";
import { ContactCta } from "@/components/home/ContactCta";
import { AI_TRAINING as C } from "@/content/partnerAiTraining";

const COLOR: Record<"teal" | "amber" | "navy", string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
};

export const metadata: Metadata = pageMetadata({
  title: "企業協働型AI人材育成プログラム",
  description:
    "AIを学びたい人と、育成・採用・DXを進めたい企業をつなぐ実践型プログラム。企業の実際の課題を教材に、学びながら働く仕組みで、教育を実務と仕事へつなげます。",
  path: "/partners/ai-training",
});

export default function AiTrainingPage() {
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
          <p className="font-ja text-h3 font-medium leading-relaxed text-navy">
            {C.message}
          </p>
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

      {/* 重点対象 */}
      <Section>
        <Head label="For Whom" title={C.audience.heading} intro={C.audience.intro} />
        <Reveal delay={0.1}>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {C.audience.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span className="font-ja text-[13px] leading-relaxed text-navy">{it}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 背景と課題 */}
      <Section className="bg-surface">
        <Head label="Background" title={C.challenges.heading} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[C.challenges.company, C.challenges.learner].map((col, i) => (
            <Reveal key={col.heading} delay={i * 0.08}>
              <div className="h-full rounded-card border border-line bg-white p-6">
                <h3 className="mb-4 font-ja text-[15px] font-medium text-navy">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      <span className="font-ja text-[13px] leading-relaxed text-muted">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4者の循環 */}
      <Section>
        <Head label="Relation" title={C.relation.heading} intro={C.relation.intro} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {C.relation.parties.map((party, i) => {
            const c = COLOR[party.color];
            return (
              <Reveal key={party.name} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-card border border-line bg-white p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c }} />
                    <h3 className="font-ja text-[14px] font-medium text-navy">{party.name}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {party.roles.map((r) => (
                      <li key={r} className="font-ja text-[12px] leading-relaxed text-muted">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 特徴 */}
      <Section className="bg-surface">
        <Head label="Features" title={C.features.heading} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {C.features.items.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-card border border-line bg-white p-6">
                <h3 className="font-ja text-[15px] font-medium text-navy">{f.title}</h3>
                <p className="mt-2.5 font-ja text-[13px] leading-[1.85] text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3段階の導入モデル */}
      <Section>
        <Head label="Models" title={C.stages.heading} intro={C.stages.intro} />
        <div className="space-y-5">
          {C.stages.items.map((s, i) => {
            const c = COLOR[s.color];
            return (
              <Reveal key={s.num} delay={i * 0.06}>
                <div className="rounded-card border border-line bg-white p-7">
                  <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                    <div className="flex items-center gap-4 md:w-64 md:shrink-0">
                      <span className="font-en text-[2rem] font-bold leading-none" style={{ color: c }}>
                        {s.num}
                      </span>
                      <h3 className="font-ja text-[17px] font-medium leading-snug text-navy">
                        {s.title}
                      </h3>
                    </div>
                    <div className="md:flex-1">
                      <p className="font-ja text-[13px] leading-[1.9] text-muted">{s.desc}</p>
                      <ul className="mt-3 space-y-2">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5">
                            <span className="mt-[3px] font-en text-[12px]" style={{ color: c }}>―</span>
                            <span className="font-ja text-[12.5px] leading-relaxed text-muted">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* メリット */}
      <Section className="bg-surface">
        <Head label="Benefits" title={C.benefits.heading} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {C.benefits.groups.map((g, i) => {
            const c = COLOR[g.color];
            return (
              <Reveal key={g.audience} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-card border border-line bg-white p-6">
                  <div
                    className="mb-4 inline-block rounded-full px-3 py-1 font-ja text-[12px] font-medium"
                    style={{ color: c, backgroundColor: `color-mix(in srgb, ${c} 10%, white)` }}
                  >
                    {g.audience}
                  </div>
                  <ul className="space-y-2.5">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: c }} />
                        <span className="font-ja text-[12.5px] leading-relaxed text-muted">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 採用参加枠 */}
      <Section>
        <Head label="Hiring" title={C.recruitFrame.heading} />
        <Reveal delay={0.1} className="max-w-3xl">
          <p className="font-ja text-body leading-loose text-muted">{C.recruitFrame.body}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {C.recruitFrame.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-teal/40 px-3 py-1 font-ja text-[12px] text-teal"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 流れ */}
      <Section className="bg-surface">
        <Head label="Flow" title={C.flow.heading} />
        <Reveal delay={0.1}>
          <ol className="space-y-0">
            {C.flow.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-4 border-l border-line pb-6 pl-6 last:pb-0">
                <span className="-ml-[calc(1.5rem+1px)] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal bg-warm font-en text-[11px] font-semibold text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1.5 font-ja text-[13.5px] leading-relaxed text-navy">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* 想定プロジェクト例 */}
      <Section>
        <Head label="Examples" title={C.projectExamples.heading} intro={C.projectExamples.intro} />
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap gap-2.5">
            {C.projectExamples.items.map((it) => (
              <li
                key={it}
                className="rounded-full border border-line bg-white px-4 py-2 font-ja text-[12.5px] text-navy"
              >
                {it}
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

      {/* ご留意事項 */}
      <Section>
        <Head label="Notes" title={C.notes.heading} />
        <Reveal delay={0.1} className="max-w-3xl rounded-card border border-line border-l-[3px] border-l-amber bg-surface p-6">
          <ul className="space-y-3">
            {C.notes.items.map((n) => (
              <li key={n} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span className="font-ja text-[12.5px] leading-relaxed text-muted">{n}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <Head label="FAQ" title={C.faq.heading} />
        <Reveal delay={0.1} className="max-w-3xl">
          <Faq items={C.faq.items} />
        </Reveal>
      </Section>

      {/* 対象別 CTA */}
      <Section>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {C.ctas.map((cta, i) => {
            const c = COLOR[cta.color];
            return (
              <Reveal key={cta.audience} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col rounded-card border border-line bg-white p-6">
                  <div className="mb-3 font-en text-[9px] font-semibold uppercase tracking-[0.18em]" style={{ color: c }}>
                    {cta.audience}
                  </div>
                  <h3 className="font-ja text-[15px] font-medium leading-[1.6] text-navy">
                    {cta.heading}
                  </h3>
                  <div className="mt-auto flex flex-col gap-2 pt-5">
                    {cta.buttons.map((b) => (
                      <Link
                        key={b.label}
                        href={b.href}
                        className="group inline-flex items-center gap-1.5 font-ja text-[13px] font-medium"
                        style={{ color: c }}
                      >
                        {b.label}
                        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
