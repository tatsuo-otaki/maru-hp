import type { Metadata } from "next";
import { globalPageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/PageJsonLd";
import { GlobalPageContent } from "@/components/global/GlobalPageContent";
import { GLOBAL } from "@/content/global";

export const metadata: Metadata = globalPageMetadata({
  lang: "ja",
  title: "Maru Global",
  description: GLOBAL.hero.lead.ja,
});

export default function GlobalJaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", path: "/" }, { name: "Maru Global", path: "/global" }]} />
      <GlobalPageContent lang="ja" />
    </>
  );
}
