import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { PRIVACY } from "@/content/privacy";

export const metadata: Metadata = pageMetadata({
  title: "プライバシーポリシー",
  description:
    "株式会社〇（maru Inc.）のプライバシーポリシー。個人情報の取得・利用目的・第三者提供・安全管理・お問い合わせ窓口について記載しています。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label={PRIVACY.hero.label}
        title={PRIVACY.hero.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        lead={PRIVACY.hero.lead}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="mb-10 font-en text-[12px] text-muted">{PRIVACY.updated}</p>

          <div className="space-y-9">
            {PRIVACY.sections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="mb-3 font-ja text-[15px] font-medium text-navy">
                  {sec.heading}
                </h2>
                {sec.body.map((p) => (
                  <p
                    key={p}
                    className="font-ja text-[13px] leading-loose text-muted"
                  >
                    {p}
                  </p>
                ))}
                {"list" in sec && sec.list && (
                  <ul className="mt-3 space-y-2">
                    {sec.list.map((li) => (
                      <li key={li} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                        <span className="font-ja text-[13px] leading-relaxed text-muted">
                          {li}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {sec.heading.startsWith("9.") && (
                  <div className="mt-4">
                    <TextLink href="/contact">お問い合わせ</TextLink>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* 事業者情報 */}
          <div className="mt-12 rounded-card border border-line bg-surface p-6">
            <h2 className="mb-4 font-ja text-[14px] font-medium text-navy">
              {PRIVACY.operator.heading}
            </h2>
            <dl className="space-y-2.5">
              {PRIVACY.operator.rows.map((row) => (
                <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-6">
                  <dt className="shrink-0 font-ja text-[12px] font-medium text-navy sm:w-24">
                    {row.label}
                  </dt>
                  <dd className="font-ja text-[13px] text-muted">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>
    </>
  );
}
