import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/PageJsonLd";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { ContactCta } from "@/components/home/ContactCta";
import { NEWS_PAGE, NEWS_CATEGORY_COLOR } from "@/content/news";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
} as const;

function tint(color: string, pct: number) {
  return `color-mix(in srgb, ${color} ${pct}%, white)`;
}

function findItem(slug: string) {
  return NEWS_PAGE.items.find((item) => "slug" in item && item.slug === slug);
}

export function generateStaticParams() {
  return NEWS_PAGE.items
    .filter((item): item is typeof item & { slug: string } => !!item.slug)
    .map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = findItem(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.title,
    description: item.excerpt ?? item.title,
    path: `/news/${slug}`,
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = findItem(slug);
  if (!item) notFound();

  const { default: Body } = await import(`@/content/news/${slug}.mdx`);
  const c = COLOR[NEWS_CATEGORY_COLOR[item.category]];
  const dateLabel = item.date
    ? new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "long", day: "numeric" }).format(
        new Date(item.date),
      )
    : undefined;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", path: "/" },
          { name: "ニュース・プレス", path: "/news" },
          { name: item.title, path: `/news/${slug}` },
        ]}
      />
      <article className="border-b border-line">
        <Container className="py-16 md:py-24">
          <div className="flex items-center gap-3">
            <span
              className="rounded-[10px] px-2.5 py-1 font-ja text-[9px] font-semibold"
              style={{ color: c, backgroundColor: tint(c, 10) }}
            >
              {item.category}
            </span>
            {(dateLabel || item.outlet) && (
              <span className="font-en text-[11px] tracking-wide text-muted">
                {[dateLabel, item.outlet].filter(Boolean).join(" ・ ")}
              </span>
            )}
          </div>
          <h1 className="mt-5 max-w-2xl font-ja text-[1.75rem] font-medium leading-[1.5] text-navy md:text-[2.25rem]">
            {item.title}
          </h1>
        </Container>
      </article>

      <Section>
        <div className="mx-auto max-w-[680px]">
          <Body />
          <div className="mt-14">
            <TextLink href="/news">ニュース・プレス一覧へ戻る</TextLink>
          </div>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
