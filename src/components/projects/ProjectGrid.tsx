import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS_PAGE, PROJECT_CATEGORY_COLOR } from "@/content/projects";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
} as const;

function tint(color: string, pct: number) {
  return `color-mix(in srgb, ${color} ${pct}%, white)`;
}

export function ProjectGrid() {
  const { hero } = PROJECTS_PAGE;
  return (
    <Section id="projects" className="bg-surface">
      {/* 見出し */}
      <Reveal className="mb-12 md:mb-14">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{hero.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>
        <h2 className="mt-5 font-ja text-[1.5rem] font-medium leading-[1.55] text-navy md:text-[2.25rem]">
          {hero.titleLines.join("")}
        </h2>
        <p className="mt-4 max-w-[640px] font-ja text-body leading-relaxed text-muted">
          {hero.lead}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS_PAGE.items.map((p, i) => {
          const c = COLOR[PROJECT_CATEGORY_COLOR[p.category]];
          return (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col rounded-card border border-line bg-white p-6">
                {/* カテゴリ＋時期 */}
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
                    style={{ backgroundColor: tint(c, 10) }}
                  >
                    <span
                      className="h-[5px] w-[5px] rounded-full"
                      style={{ backgroundColor: c }}
                    />
                    <span
                      className="font-en text-[8px] font-semibold uppercase tracking-[0.08em]"
                      style={{ color: c }}
                    >
                      {p.category}
                    </span>
                  </span>
                  <span className="font-en text-[11px] tracking-wide text-muted">
                    {p.period}
                  </span>
                </div>

                <h3 className="font-ja text-[16px] font-medium leading-[1.5] text-navy">
                  {p.title}
                </h3>
                <p className="mt-3 font-ja text-[12.5px] leading-[1.85] text-muted">
                  {p.summary}
                </p>

                {/* 実績ハイライト（あれば） */}
                {p.highlight && (
                  <p
                    className="mt-3 border-l-2 pl-3 font-ja text-[12px] font-medium leading-relaxed text-navy"
                    style={{ borderColor: c }}
                  >
                    {p.highlight}
                  </p>
                )}

                {/* 技術タグ */}
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-line px-2 py-0.5 font-en text-[10px] text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
