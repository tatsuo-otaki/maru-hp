import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ContactCta } from "@/components/home/ContactCta";
import { PROJECTS_PAGE } from "@/content/projects";

export const metadata: Metadata = {
  title: "プロジェクト・実績",
  description:
    "株式会社〇および代表が手がけてきた、AI・システム開発、AI教育、データ活用の実績。国内外の企業・自治体・教育機関と連携しながら、実践を重ねています。",
};

export default function ProjectsPage() {
  const { hero } = PROJECTS_PAGE;
  return (
    <>
      <PageHero
        label={hero.label}
        title={hero.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        lead={hero.lead}
      />
      <ProjectGrid />
      <ContactCta />
    </>
  );
}
