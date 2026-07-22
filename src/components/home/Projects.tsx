"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { PROJECTS } from "@/content/home";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
} as const;

/** アクセント色を白と混ぜた淡いトーン（タグ背景など） */
function tint(color: string, pct: number) {
  return `color-mix(in srgb, ${color} ${pct}%, white)`;
}

export function Projects() {
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="projects" className="bg-surface">
      {/* 見出し */}
      <Reveal className="mb-12 md:mb-14">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{PROJECTS.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>
        <h2 className="mt-5 font-ja text-[1.5rem] font-medium leading-[1.55] text-navy md:text-[2.25rem]">
          {PROJECTS.heading}
        </h2>
        <p className="mt-4 max-w-[560px] font-ja text-body leading-relaxed text-muted">
          {PROJECTS.intro}
        </p>
      </Reveal>

      {/* Bento グリッド（先頭を feature として縦2行に） */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {PROJECTS.items.map((proj, i) => {
          const c = COLOR[proj.color];
          return (
            <motion.article
              key={proj.title}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={reduced ? undefined : { y: -4 }}
              transition={
                reduced
                  ? undefined
                  : { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }
              }
              className={`group cursor-pointer rounded-lg border border-line bg-white p-7 transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(15,31,61,0.1)] ${
                proj.feature ? "md:col-start-1 md:row-span-2" : ""
              }`}
            >
              {/* 円形サムネ（プレースホルダ） */}
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-surface"
                style={{ border: `1.5px solid ${tint(c, 30)}` }}
              >
                <span
                  className="h-6 w-6 rounded-full opacity-70"
                  style={{ backgroundColor: c }}
                />
              </div>
              {/* カテゴリタグ */}
              <div
                className="mb-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
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
                  {proj.cat}
                </span>
              </div>
              <h3
                className={`mb-2.5 font-ja font-medium leading-[1.5] text-navy ${
                  proj.feature ? "text-[18px]" : "text-[15px]"
                }`}
              >
                {proj.title}
              </h3>
              <p className="font-ja text-[12px] leading-[1.8] text-muted">
                {proj.desc}
              </p>
            </motion.article>
          );
        })}
      </div>

      <Reveal delay={reduced ? 0 : 0.3} className="mt-8">
        <TextLink href={PROJECTS.cta.href}>{PROJECTS.cta.label}</TextLink>
      </Reveal>
    </Section>
  );
}
