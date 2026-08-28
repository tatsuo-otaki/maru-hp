import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/PageJsonLd";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Faq } from "@/components/ui/Faq";
import { SectionHead as Head } from "@/components/partners/SectionHead";
import { ContactCta } from "@/components/home/ContactCta";
import { CO_CREATION as C } from "@/content/partnerCoCreation";

const COLOR: Record<"teal" | "amber" | "navy", string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
};

export const metadata: Metadata = pageMetadata({
  title: "実務実習・共創プロジェクト",
  description:
    "企業・自治体の実際の課題やアイデアを、AI・しごと学校の学生と一緒に実証・PoC。完成品ではなく、課題を見つけ、考え、試し、検証した経験を学生の実績にします。",
  path: "/partners/co-creation",
});

export default function CoCreationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", path: "/" },
          { name: "企業・自治体の方へ", path: "/partners" },
          { name: "実務実習・共創プロジェクト", path: "/partners/co-creation" },
        ]}
      />
      <FaqJsonLd items={C.faq.items} />
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

      {/* 実務実習とは */}
      <Section className="bg-surface">
        <Head label="Overview" title={C.overview.heading} />
        <Reveal delay={0.1} className="mb-8 max-w-3xl space-y-4">
          {C.overview.body.map((p) => (
            <p key={p} className="font-ja text-body font-light leading-loose text-muted">
              {p}
            </p>
          ))}
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {C.overview.formats.map((f, i) => (
            <Reveal key={f.title} delay={0.1 + i * 0.06}>
              <div className="h-full rounded-card border border-line bg-white p-6">
                <h3 className="font-ja text-[15px] font-medium text-navy">{f.title}</h3>
                <p className="mt-2.5 font-ja text-[13px] leading-[1.85] text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 目的 */}
      <Section>
        <Head label="Purpose" title={C.purpose.heading} />
        <Reveal delay={0.1} className="max-w-3xl">
          <p className="font-ja text-body font-light leading-loose text-muted">{C.purpose.body}</p>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {C.purpose.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span className="font-ja text-[13px] leading-relaxed text-navy">{o}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 関係図 */}
      <Section className="bg-surface">
        <Head label="Co-Creation" title={C.relation.heading} intro={C.relation.intro} />
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
                      <li key={r} className="font-ja text-[12px] leading-relaxed text-muted">{r}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 実証実験・課題の例 */}
      <Section>
        <Head label="Examples" title={C.examples.heading} intro={C.examples.intro} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[C.examples.company, C.examples.gov].map((col, i) => (
            <Reveal key={col.heading} delay={i * 0.08}>
              <div className="h-full rounded-card border border-line bg-white p-6">
                <h3 className="mb-4 font-ja text-[15px] font-medium text-navy">{col.heading}</h3>
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

      {/* ご提供いただきたいもの */}
      <Section className="bg-surface">
        <Head label="Resources" title={C.resources.heading} intro={C.resources.intro} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {C.resources.groups.map((g, i) => {
            const c = COLOR[g.color];
            return (
              <Reveal key={g.title} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-card border border-line bg-white p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c }} />
                    <h3 className="font-ja text-[14px] font-medium text-navy">{g.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {g.items.map((it) => (
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
      </Section>

      {/* 費用と提供リソース */}
      <Section>
        <Head label="Cost" title={C.cost.heading} />
        <Reveal delay={0.1} className="max-w-3xl rounded-card border border-line border-l-[3px] border-l-teal bg-surface p-6">
          <ul className="space-y-3">
            {C.cost.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span className="font-ja text-[12.5px] leading-relaxed text-muted">{it}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* メリット */}
      <Section className="bg-surface">
        <Head label="Benefits" title={C.benefits.heading} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {C.benefits.groups.map((g, i) => {
            const c = COLOR[g.color];
            return (
              <Reveal key={g.audience} delay={(i % 2) * 0.08}>
                <div className="flex h-full flex-col rounded-card border border-line bg-white p-6">
                  <div
                    className="mb-4 inline-block self-start rounded-full px-3 py-1 font-ja text-[12px] font-medium"
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
                  <p className="mt-4 border-t border-line pt-3 font-ja text-[11.5px] leading-relaxed text-muted">
                    {g.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 流れ */}
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
          <p className="mt-6 font-ja text-[12px] leading-relaxed text-muted">{C.flow.note}</p>
        </Reveal>
      </Section>

      {/* 想定期間 */}
      <Section className="bg-surface">
        <Head label="Duration" title={C.periods.heading} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {C.periods.items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-card border border-line bg-white p-6">
                <div className="font-en text-[13px] font-semibold text-teal">{p.span}</div>
                <h3 className="mt-2 font-ja text-[15px] font-medium text-navy">{p.title}</h3>
                <p className="mt-2 font-ja text-[12.5px] leading-[1.85] text-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-6 font-ja text-[12px] leading-relaxed text-muted">{C.periods.note}</p>
        </Reveal>
      </Section>

      {/* 成果物 */}
      <Section>
        <Head label="Deliverables" title={C.deliverables.heading} intro={C.deliverables.intro} />
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap gap-2.5">
            {C.deliverables.items.map((it) => (
              <li key={it} className="rounded-full border border-line bg-white px-4 py-2 font-ja text-[12.5px] text-navy">
                {it}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 情報管理 */}
      <Section className="bg-surface">
        <Head label="Notes" title={C.notes.heading} />
        <Reveal delay={0.1} className="max-w-3xl rounded-card border border-line border-l-[3px] border-l-amber bg-white p-6">
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

      {/* 役割 */}
      <Section>
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
                  <h3 className="font-ja text-[15px] font-medium leading-[1.6] text-navy">{cta.heading}</h3>
                  <div className="mt-auto flex flex-col gap-2 pt-5">
                    {cta.buttons.map((b) => (
                      <Link
                        key={b.label}
                        href={b.href}
                        className="group inline-flex items-center gap-1.5 font-ja text-[13px] font-medium"
                        style={{ color: c }}
                      >
                        {b.label}
                        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
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
