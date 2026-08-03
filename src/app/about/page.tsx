import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Mission } from "@/components/home/Mission";
import { Vision } from "@/components/home/Vision";
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
      <PageHero
        label="About"
        title={
          <>
            技術と教育と仕事をつなぎ、
            <br />
            新しい「働く」をつくる。
          </>
        }
        lead="株式会社〇は、AI・システム開発、AI教育・人材育成、仕事と社会参加の仕組みづくりに取り組む会社です。技術によって新しい仕事を生み出し、教育によってその仕事を担える人を増やし、学んだ力を実際の仕事や社会参加につなげます。"
      />
      <Mission showCta={false} />
      <Vision />
      <MaruMeaning />
      <Ceo />
      <CompanyOverview />
      <ContactCta />
    </>
  );
}
