import type { Metadata } from "next";
import { globalPageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/PageJsonLd";
import { GlobalPageContent } from "@/components/global/GlobalPageContent";
import { GLOBAL } from "@/content/global";

export const metadata: Metadata = globalPageMetadata({
  lang: "en",
  title: "Maru Global",
  description: GLOBAL.hero.lead.en,
});

export default function GlobalEnPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Maru Global", path: "/global/en" }]} />
      <GlobalPageContent lang="en" />
    </>
  );
}
