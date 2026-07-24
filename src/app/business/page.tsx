import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BusinessDetail } from "@/components/business/BusinessDetail";
import { Steps } from "@/components/home/Steps";
import { Cycle } from "@/components/home/Cycle";
import { AiSchool } from "@/components/business/AiSchool";
import { ContactCta } from "@/components/home/ContactCta";
import { BUSINESS_PAGE } from "@/content/business";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "AI・システム開発、AI教育・人材育成、仕事と社会参加の仕組みづくり。株式会社〇は、開発・教育・仕事の機会づくりを一つの循環としてつなぎ、幸せに働ける人を増やします。",
};

export default function BusinessPage() {
  const { hero } = BUSINESS_PAGE;
  return (
    <>
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
      <AiSchool />
      <ContactCta />
    </>
  );
}
