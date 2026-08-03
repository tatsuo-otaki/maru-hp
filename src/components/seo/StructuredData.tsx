import { SITE, getSiteUrl } from "@/lib/site";

/**
 * サイト共通の構造化データ（JSON-LD / schema.org）。
 * Organization と WebSite を出力し、検索エンジン・AI/LLM が
 * 「株式会社〇とは何者で、何をし、関連サイトはどこか」を正確に理解できるようにする。
 * 会社情報の出典：src/content/company.ts。
 */
export function StructuredData() {
  const url = getSiteUrl();

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: SITE.name,
        alternateName: ["maru Inc.", "maru", "まる"],
        url,
        logo: `${url}/maru-mark.png`,
        description:
          "AI・システム開発、AI教育・人材育成、仕事と社会参加の仕組みづくりを通じて、誰もが自分らしく幸せに働ける社会をつくる会社。",
        slogan: SITE.mission,
        foundingDate: "2021-08-27",
        founder: {
          "@type": "Person",
          name: "大瀧 達生",
          jobTitle: "代表取締役",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "JP",
          addressRegion: "愛知県",
          addressLocality: "名古屋市西区",
          streetAddress: "名駅2-4-3 ウエスタンビル3F",
        },
        // 関連する公式サイト（ブログ・AI・しごと学校）
        sameAs: [SITE.blogUrl, SITE.schoolUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: SITE.name,
        alternateName: SITE.nameEn,
        url,
        inLanguage: "ja",
        publisher: { "@id": `${url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // 構造化データは信頼できる自前の値のみ。XSS 対象データは含めない。
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
