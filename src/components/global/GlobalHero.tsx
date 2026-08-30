"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { LangSwitcher } from "@/components/global/LangSwitcher";
import { GLOBAL_COLOR } from "@/components/global/colors";
import { GLOBAL, type GLang } from "@/content/global";

const CX = 175;
const CY = 172;
const R = 105;
const NODE_R = 16;

type Anchor = "start" | "end" | "middle";

function computeHeroNodes() {
  const nodes = GLOBAL.hero.nodes;
  return nodes.map((n, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / nodes.length;
    const x = CX + R * Math.cos(angle);
    const y = CY + R * Math.sin(angle);
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const anchor: Anchor = cosA > 0.35 ? "start" : cosA < -0.35 ? "end" : "middle";
    const labelDX = anchor === "start" ? 22 : anchor === "end" ? -22 : 0;
    const labelDY = anchor === "middle" ? (sinA > 0 ? 30 : -20) : 4;
    return { ...n, x, y, anchor, labelDX, labelDY };
  });
}

/** ノード→中心のスポークを、中心から見て外向きにわずかに膨らませる（Global Cycle と同じ考え方） */
function spokePath(n: { x: number; y: number }) {
  const mx = (n.x + CX) / 2;
  const my = (n.y + CY) / 2;
  const outX = mx - CX;
  const outY = my - CY;
  const outDist = Math.hypot(outX, outY) || 1;
  const bow = 8;
  const ctrlX = mx + (outX / outDist) * bow;
  const ctrlY = my + (outY / outDist) * bow;
  return `M${n.x} ${n.y} Q${ctrlX} ${ctrlY} ${CX} ${CY}`;
}

/**
 * Maru Global ヒーロー。
 * 右側の「人・企業・教育・地域が中心へつながる」ネットワーク図は、意味をテキストでも
 * 伝えるため sr-only リストを併設し、iOS Safari 対策として親 div で useInView を検知する
 * （Cycle.tsx / EcosystemDiagram.tsx と同じパターン）。
 */
export function GlobalHero({ lang }: { lang: GLang }) {
  const reduced = usePrefersReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "0px 0px -10% 0px" });
  const nodes = computeHeroNodes();

  return (
    <header className="relative overflow-hidden bg-warm px-6 pt-16 pb-16 md:px-20 md:pt-24 md:pb-24">
      {[220, 340, 460].map((r) => (
        <div
          key={r}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-[-30%] -translate-y-1/2 rounded-full border border-teal/[0.05]"
          style={{ width: r * 2, height: r * 2 }}
        />
      ))}

      <div className="relative flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16">
        {/* 左：テキスト */}
        <div className="flex-1">
          <div className="mb-5 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
              <span className="font-en text-label font-semibold tracking-[0.2em] text-teal uppercase">
                {GLOBAL.hero.tag}
              </span>
            </div>
            <LangSwitcher lang={lang} />
          </div>

          <h1 className="mb-6 font-ja text-[1.75rem] leading-[1.4] font-normal text-navy md:text-[3rem]">
            {GLOBAL.hero.headlineLines[lang].map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mb-9 max-w-[520px] font-ja text-[13px] leading-loose font-light text-muted">
            {GLOBAL.hero.lead[lang]}
          </p>

          <a
            href="#global-cta"
            className="group inline-flex items-center gap-2 rounded-btn bg-teal px-6 py-3 font-ja text-[12px] font-medium text-white transition-colors hover:bg-navy"
          >
            {GLOBAL.learnMore[lang]}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* 右：ネットワーク図（Desktopのみ） */}
        <div ref={wrapRef} className="hidden shrink-0 md:block">
          <svg viewBox="0 0 350 344" width={350} height={344} role="img" aria-label={heroDiagramLabel(lang)}>
            <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(45,139,125,0.07)" strokeWidth={1} strokeDasharray="4 8" />
            {nodes.map((n, i) => (
              <motion.path
                key={n.key}
                d={spokePath(n)}
                fill="none"
                stroke={GLOBAL_COLOR[n.color]}
                strokeOpacity={0.35}
                strokeWidth={1.2}
                initial={reduced ? false : { pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : undefined}
                transition={reduced ? undefined : { duration: 1, delay: i * 0.12 }}
              />
            ))}
            {nodes.map((n) => (
              <g key={n.key}>
                <circle cx={n.x} cy={n.y} r={NODE_R} fill={GLOBAL_COLOR[n.color]} fillOpacity={0.08} stroke={GLOBAL_COLOR[n.color]} strokeOpacity={0.4} strokeWidth={1} />
                <circle cx={n.x} cy={n.y} r={4.5} fill={GLOBAL_COLOR[n.color]} opacity={0.7} />
                <text
                  x={n.x + n.labelDX}
                  y={n.y + n.labelDY}
                  textAnchor={n.anchor}
                  fontFamily="var(--font-ja)"
                  fontSize={9}
                  fontWeight={500}
                  fill="var(--color-navy)"
                >
                  {n.label[lang]}
                </text>
              </g>
            ))}
            <circle cx={CX} cy={CY} r={34} fill="var(--color-warm)" stroke="var(--color-teal)" strokeOpacity={0.4} strokeWidth={1.5} />
            <image href="/maru-mark.png" x={CX - 20} y={CY - 20} width={40} height={40} />
          </svg>
          <ul className="sr-only">
            {nodes.map((n) => (
              <li key={n.key}>{n.label[lang]}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

function heroDiagramLabel(lang: GLang): string {
  if (lang === "en")
    return "Diagram: talent, technology, companies, opportunities, education and communities all connect through Maru Global.";
  if (lang === "fr")
    return "Schéma : talents, technologie, entreprises, opportunités, éducation et communautés se connectent via Maru Global.";
  return "図：人材、テクノロジー、企業、機会、教育、地域社会がMaru Globalを中心につながる様子";
}
