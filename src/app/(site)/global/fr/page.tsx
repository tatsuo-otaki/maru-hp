import type { Metadata } from "next";
import { globalPageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/PageJsonLd";
import { GlobalPageContent } from "@/components/global/GlobalPageContent";
import { GLOBAL } from "@/content/global";

export const metadata: Metadata = globalPageMetadata({
  lang: "fr",
  title: "Maru Global",
  description: GLOBAL.hero.lead.fr,
});

export default function GlobalFrPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Maru Global", path: "/global/fr" }]} />
      <GlobalPageContent lang="fr" />
    </>
  );
}
