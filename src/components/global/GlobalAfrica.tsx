"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { GLOBAL, type GLang } from "@/content/global";

/**
 * Côte d'Ivoire は「これから進出予定」ではなく「既に活動が始まっている最初の拠点」として書く。
 * 図は日本↔コートジボワールの双方向の矢印のみで、支援する／されるという上下関係を持たせない。
 */
export function GlobalAfrica({ lang }: { lang: GLang }) {
  const reduced = usePrefersReducedMotion();
  const d = GLOBAL.africa.diagram;

  return (
    <section id="global-africa" className="border-t border-line bg-warm px-6 py-16 md:px-20 md:py-24">
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-20">
        <Reveal className="flex-1">
          <div className="mb-5 flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-[18px] bg-amber" />
            <SectionLabel className="text-amber">{GLOBAL.africa.label}</SectionLabel>
          </div>
          <h2 className="mb-5 font-ja text-[1.375rem] leading-[1.45] font-normal text-navy md:text-[2.125rem]">
            {GLOBAL.africa.headline[lang]}
          </h2>
          <p className="mb-7 max-w-[500px] font-ja text-[13px] leading-loose font-light text-muted">
            {GLOBAL.africa.lead[lang]}
          </p>
          <ul className="flex flex-col gap-2.5">
            {GLOBAL.africa.items[lang].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span aria-hidden="true" className="mt-2 h-[7px] w-[7px] shrink-0 rounded-full bg-amber" />
                <span className="font-ja text-[13px] leading-relaxed text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* 日本 ↔ コートジボワール（双方向） */}
        <div className="hidden shrink-0 md:block">
          <svg viewBox="0 0 340 220" width={340} height={220} role="img" aria-label={africaDiagramLabel(lang)}>
            <g>
              <circle cx={62} cy={110} r={40} fill="var(--color-teal)" fillOpacity={0.06} stroke="var(--color-teal)" strokeOpacity={0.4} strokeWidth={1} />
              <text x={62} y={105} textAnchor="middle" fontFamily="var(--font-ja)" fontSize={10} fontWeight={600} fill="var(--color-navy)">
                {d.japan[lang]}
              </text>
              <text x={62} y={118} textAnchor="middle" fontFamily="var(--font-en)" fontSize={7.5} fill="var(--color-muted)">
                Japan
              </text>
            </g>

            <motion.path
              d="M 102 110 Q 170 80 238 110"
              fill="none"
              stroke="var(--color-teal)"
              strokeOpacity={0.4}
              strokeWidth={1.2}
              initial={reduced ? false : { pathLength: 0 }}
              whileInView={reduced ? undefined : { pathLength: 1 }}
              viewport={{ once: true }}
              transition={reduced ? undefined : { duration: 0.9, delay: 0.2 }}
            />
            <motion.path
              d="M 238 110 Q 170 140 102 110"
              fill="none"
              stroke="var(--color-amber)"
              strokeOpacity={0.4}
              strokeWidth={1.2}
              initial={reduced ? false : { pathLength: 0 }}
              whileInView={reduced ? undefined : { pathLength: 1 }}
              viewport={{ once: true }}
              transition={reduced ? undefined : { duration: 0.9, delay: 0.4 }}
            />

            <circle cx={170} cy={110} r={28} fill="var(--color-warm)" stroke="var(--color-teal)" strokeOpacity={0.35} strokeWidth={1} />
            <image href="/maru-mark.png" x={152} y={93} width={36} height={36} />

            <g>
              <circle cx={278} cy={110} r={40} fill="var(--color-amber)" fillOpacity={0.06} stroke="var(--color-amber)" strokeOpacity={0.4} strokeWidth={1} />
              <text x={278} y={102} textAnchor="middle" fontFamily="var(--font-en)" fontSize={7.5} fontWeight={600} fill="var(--color-navy)">
                {d.ci[lang]}
              </text>
              <text x={278} y={113} textAnchor="middle" fontFamily="var(--font-en)" fontSize={7} fill="var(--color-muted)">
                {d.ciSub}
              </text>
              <text x={278} y={124} textAnchor="middle" fontFamily="var(--font-en)" fontSize={7} fill="var(--color-amber)">
                {d.ciPartner}
              </text>
            </g>

            <text x={170} y={72} textAnchor="middle" fontFamily="var(--font-en)" fontSize={7} fill="var(--color-teal)" opacity={0.8}>
              {d.topLabel[lang]}
            </text>
            <text x={170} y={155} textAnchor="middle" fontFamily="var(--font-en)" fontSize={7} fill="var(--color-amber)" opacity={0.8}>
              {d.bottomLabel[lang]}
            </text>
          </svg>
          <p className="sr-only">
            {d.japan[lang]} ⇄ {d.ci[lang]}: {d.topLabel[lang]} / {d.bottomLabel[lang]}
          </p>
        </div>
      </div>
    </section>
  );
}

function africaDiagramLabel(lang: GLang): string {
  if (lang === "en") return "Diagram: Japan and Côte d'Ivoire connected in both directions through Maru.";
  if (lang === "fr") return "Schéma : le Japon et la Côte d'Ivoire connectés dans les deux sens via Maru.";
  return "図：日本とコートジボワールがmaruを介して双方向につながる様子";
}
