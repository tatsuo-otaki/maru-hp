import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/PageJsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT } from "@/content/contact";

export const metadata: Metadata = pageMetadata({
  title: "お問い合わせ",
  description:
    "AI・システム開発、DX、AI教育・人材育成、企業・自治体との連携、CSR、取材・メディア掲載など、幅広いご相談を受け付けています。株式会社〇（maru Inc.）へのお問い合わせはこちら。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", path: "/" }, { name: "お問い合わせ", path: "/contact" }]} />
      <PageHero
        label={CONTACT.hero.label}
        title={CONTACT.hero.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        lead={CONTACT.hero.lead}
      />

      <Section>
        <div className="mx-auto max-w-2xl">
          <ContactForm />

          {/* メディア向け・営業に関する補助文 */}
          <div className="mt-8 space-y-2 rounded-card border border-line bg-surface px-5 py-4 font-ja text-[12.5px] leading-relaxed text-muted">
            <p>{CONTACT.mediaNote}</p>
            <p>{CONTACT.salesNote}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
