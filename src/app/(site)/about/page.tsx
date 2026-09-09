import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/PageJsonLd";
import { Mission } from "@/components/home/Mission";
import { Vision } from "@/components/home/Vision";
import { EcosystemSection } from "@/components/about/EcosystemSection";
import { MaruMeaning } from "@/components/home/MaruMeaning";
import { Ceo } from "@/components/home/Ceo";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { ContactCta } from "@/components/home/ContactCta";

export const metadata: Metadata = pageMetadata({
  title: "私たちについて",
  description:
    "株式会社〇（maru Inc.）のMission・Vision・思想、代表メッセージ、会社概要をご紹介します。技術と教育と仕事をつなぎ、幸せに働ける人を世界中に増やします。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", path: "/" }, { name: "私たちについて", path: "/about" }]} />
      <Mission showCta={false} />
      <Vision />
      <EcosystemSection />
      <MaruMeaning />
      <Ceo />
      <CompanyOverview />
      <ContactCta />
    </>
  );
}
