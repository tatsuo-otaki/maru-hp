import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/PageJsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { BusinessDetail } from "@/components/business/BusinessDetail";
import { Steps } from "@/components/home/Steps";
import { Cycle } from "@/components/home/Cycle";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { AiSchool } from "@/components/business/AiSchool";
import { ContactCta } from "@/components/home/ContactCta";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Faq } from "@/components/ui/Faq";
import { SectionHead } from "@/components/partners/SectionHead";
import { BUSINESS_PAGE } from "@/content/business";
import { BUSINESS } from "@/content/home";

export const metadata: Metadata = pageMetadata({
  title: "事業内容",
  description:
    "AI・システム開発、AI教育・人材育成、仕事と社会参加の仕組みづくり。株式会社〇は、開発・教育・仕事の機会づくりを一つの循環としてつなぎ、これまでの実績とともに、幸せに働ける人を増やします。",
  path: "/business",
});

export default function BusinessPage() {
  const { hero } = BUSINESS_PAGE;
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", path: "/" }, { name: "事業内容", path: "/business" }]} />
      <ServiceJsonLd
        items={BUSINESS.items.map((biz) => ({
          name: biz.title,
          description: biz.lead,
          path: `/business#${biz.slug}`,
        }))}
      />
      <FaqJsonLd items={BUSINESS_PAGE.faq.items} />
      <PageHero
        label={hero.label}
        title={hero.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        lead={hero.lead}
      />
      <BusinessDetail />
      <Steps />
      <Cycle />
      <ProjectGrid />
      <AiSchool />

      <Section id="faq" className="bg-surface">
        <SectionHead label="FAQ" title={BUSINESS_PAGE.faq.heading} />
        <Reveal delay={0.1} className="max-w-3xl">
          <Faq items={BUSINESS_PAGE.faq.items} />
        </Reveal>
      </Section>

      <ContactCta />
    </>
  );
}
