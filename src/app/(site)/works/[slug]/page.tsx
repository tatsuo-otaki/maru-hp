import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/PageJsonLd";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { ContactCta } from "@/components/home/ContactCta";
import { PROJECTS_PAGE, PROJECT_CATEGORY_COLOR } from "@/content/projects";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
} as const;

function tint(color: string, pct: number) {
  return `color-mix(in srgb, ${color} ${pct}%, white)`;
}

function findItem(slug: string) {
  return PROJECTS_PAGE.items.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return PROJECTS_PAGE.items
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
    description: item.summary,
    path: `/works/${slug}`,
  });
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = findItem(slug);
  if (!item || !item.detail) notFound();

  const c = COLOR[PROJECT_CATEGORY_COLOR[item.category]];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", path: "/" },
          { name: "プロジェクト・実績", path: "/business#projects" },
          { name: item.title, path: `/works/${slug}` },
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
            <span className="font-en text-[11px] tracking-wide text-muted">{item.period}</span>
          </div>
          <h1 className="mt-5 max-w-2xl font-ja text-[1.75rem] font-medium leading-[1.5] text-navy md:text-[2.25rem]">
            {item.title}
          </h1>
          <p className="mt-5 max-w-2xl font-ja text-body leading-loose text-muted">
            {item.summary}
          </p>
        </Container>
      </article>

      <Section>
        <div className="mx-auto max-w-[680px]">
          {item.highlight && (
            <p
              className="rounded-card border-l-2 bg-surface p-5 font-ja text-[14px] font-medium leading-relaxed text-navy"
              style={{ borderColor: c }}
            >
              {item.highlight}
            </p>
          )}

          <div className="mt-10 space-y-10">
            <div>
              <h2 className="font-ja text-[13px] font-semibold text-navy">課題</h2>
              <p className="mt-3 font-ja text-body font-light leading-loose text-muted">
                {item.detail.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-ja text-[13px] font-semibold text-navy">やったこと</h2>
              <p className="mt-3 font-ja text-body font-light leading-loose text-muted">
                {item.detail.action}
              </p>
            </div>
            <div>
              <h2 className="font-ja text-[13px] font-semibold text-navy">結果</h2>
              <p className="mt-3 font-ja text-body font-light leading-loose text-muted">
                {item.detail.result}
              </p>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <li
                key={t}
                className="rounded border border-line px-2 py-0.5 font-en text-[10px] text-muted"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <TextLink href="/business#projects">プロジェクト・実績一覧へ戻る</TextLink>
          </div>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
