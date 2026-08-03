import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { NewsList } from "@/components/news/NewsList";
import { ContactCta } from "@/components/home/ContactCta";
import { NEWS_PAGE } from "@/content/news";

export const metadata: Metadata = pageMetadata({
  title: "ニュース・プレス",
  description:
    "株式会社〇および代表のメディア掲載、イベント登壇、プロジェクトなどのお知らせ。取材・出演・講演のご相談も承っています。",
  path: "/news",
});

export default function NewsPage() {
  const { hero } = NEWS_PAGE;
  return (
    <>
      <PageHero
        label={hero.label}
        title={hero.titleLines.map((line) => (
          <span key={line} className="block font-en">
            {line}
          </span>
        ))}
        lead={hero.lead}
      />
      <NewsList />
      <ContactCta />
    </>
  );
}
