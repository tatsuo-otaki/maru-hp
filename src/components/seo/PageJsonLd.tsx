import { getSiteUrl } from "@/lib/site";

/** JSON-LD を <script> として出力する共通ヘルパー。 */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * FAQ の構造化データ（schema.org FAQPage）。
 * 検索のリッチリザルトに加え、AI/LLM が Q&A を抽出・引用しやすくなる。
 */
export function FaqJsonLd({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      }}
    />
  );
}

/**
 * 事業の構造化データ（schema.org Service）。
 * provider は StructuredData.tsx が出力する Organization の @id を参照する。
 */
export function ServiceJsonLd({
  items,
}: {
  items: readonly { name: string; description: string; path: string }[];
}) {
  const base = getSiteUrl();
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": items.map((it) => ({
          "@type": "Service",
          name: it.name,
          description: it.description,
          url: `${base}${it.path}`,
          areaServed: "JP",
          provider: { "@id": `${base}/#organization` },
        })),
      }}
    />
  );
}

/**
 * パンくずの構造化データ（schema.org BreadcrumbList）。
 * items は上位→下位の順（例：ホーム → 企業・自治体の方へ → 各ページ）。
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: readonly { name: string; path: string }[];
}) {
  const base = getSiteUrl();
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${base}${it.path === "/" ? "" : it.path}`,
        })),
      }}
    />
  );
}
