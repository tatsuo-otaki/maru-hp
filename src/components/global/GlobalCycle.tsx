"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { GLOBAL_COLOR } from "@/components/global/colors";
import { GLOBAL, type GLang } from "@/content/global";

const CX = 210;
const CY = 192;
const R = 140;
const NODE_R = 28;

const NODES = GLOBAL.cycle.nodes.map((n, i) => {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
  return { ...n, x: Math.round(CX + R * Math.cos(angle)), y: Math.round(CY + R * Math.sin(angle)) };
});

function arrowPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy) || 1;
  // 弦の中点を中心から見た外向き方向へ押し出す（内側にへこませず、円に近い弧にする）
  const outX = mx - CX;
  const outY = my - CY;
  const outDist = Math.hypot(outX, outY) || 1;
  const bow = 26;
  const ctrlX = mx + (outX / outDist) * bow;
  const ctrlY = my + (outY / outDist) * bow;
  const sx = from.x + ((to.x - from.x) / dist) * NODE_R;
  const sy = from.y + ((to.y - from.y) / dist) * NODE_R;
  const ex = to.x - ((to.x - from.x) / dist) * NODE_R;
  const ey = to.y - ((to.y - from.y) / dist) * NODE_R;
  return `M${sx.toFixed(1)} ${sy.toFixed(1)} Q${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
}

/**
 * Global Cycle：CONNECT → LEARN → BUILD → WORK → CO-CREATE → (CONNECTへ戻る)。
 * 「何がどう循環しているか」が一目で分かることを優先し、複雑な装飾は避けた。
 * Desktop はペンタゴン状のSVG、Mobile は縦の物語として構造自体を変える。
 */
export function GlobalCycle({ lang }: { lang: GLang }) {
  const reduced = usePrefersReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "0px 0px -12% 0px" });

  return (
    <section className="bg-surface px-6 py-16 md:px-20 md:py-24">
      <Reveal className="mb-12 md:mb-14">
        <div className="mb-4.5 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{GLOBAL.cycle.label}</SectionLabel>
        </div>
        <h2 className="mb-3.5 font-ja text-[1.375rem] leading-[1.4] font-normal text-navy md:text-[2.25rem]">
          {GLOBAL.cycle.headline[lang]}
        </h2>
        <p className="max-w-[560px] font-ja text-[13px] leading-loose font-light text-muted">{GLOBAL.cycle.lead[lang]}</p>
      </Reveal>

      {/* Mobile：縦フロー */}
      <ol className="mx-auto max-w-[300px] md:hidden">
        {NODES.map((n, i) => (
          <li key={n.en}>
            <div className="flex items-center gap-3.5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px]"
                style={{ backgroundColor: `color-mix(in srgb, ${GLOBAL_COLOR[n.color]} 12%, transparent)`, borderColor: `color-mix(in srgb, ${GLOBAL_COLOR[n.color]} 55%, transparent)` }}
              >
                <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: GLOBAL_COLOR[n.color], opacity: 0.7 }} />
              </span>
              <div>
                <p className="font-en text-[13px] font-bold tracking-wide" style={{ color: GLOBAL_COLOR[n.color] }}>
                  {n.en}
                </p>
                <p className="font-ja text-[11px] text-muted">
                  {n.label[lang]} — {n.biz}
                </p>
              </div>
            </div>
            {i < NODES.length - 1 && (
              <div aria-hidden="true" className="my-1.5 ml-[19px] h-7 w-0.5 bg-teal/25" />
            )}
          </li>
        ))}
      </ol>

      {/* Desktop：ペンタゴンSVG */}
      <div ref={wrapRef} className="hidden justify-center md:flex">
        <svg
          viewBox="0 0 420 400"
          width={420}
          height={400}
          role="img"
          aria-label={cycleDiagramLabel(lang)}
        >
          <defs>
            <marker id="global-cycle-arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <path d="M0 0 L6 2 L0 4z" fill="var(--color-teal)" fillOpacity={0.5} />
            </marker>
          </defs>

          {NODES.map((n, i) => {
            const next = NODES[(i + 1) % NODES.length];
            return (
              <motion.path
                key={`arrow-${n.en}`}
                d={arrowPath(n, next)}
                fill="none"
                stroke="var(--color-teal)"
                strokeOpacity={0.35}
                strokeWidth={1.2}
                markerEnd="url(#global-cycle-arrow)"
                initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
                transition={reduced ? undefined : { duration: 0.9, delay: 0.25 + i * 0.15, ease: "easeInOut" }}
              />
            );
          })}

          <circle cx={CX} cy={CY} r={48} fill="var(--color-warm)" stroke="var(--color-teal)" strokeOpacity={0.3} strokeWidth={1} />
          <image href="/maru-mark.png" x={CX - 22} y={CY - 26} width={44} height={44} />
          <text x={CX} y={CY + 28} textAnchor="middle" fontFamily="var(--font-en)" fontSize={7.5} fontWeight={600} fill="var(--color-teal)" letterSpacing="0.1em">
            MARU GLOBAL
          </text>

          {NODES.map((n, i) => (
            <motion.g
              key={n.en}
              initial={reduced ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : undefined}
              transition={reduced ? undefined : { duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <circle cx={n.x} cy={n.y} r={NODE_R} fill={GLOBAL_COLOR[n.color]} fillOpacity={0.06} stroke={GLOBAL_COLOR[n.color]} strokeOpacity={0.5} strokeWidth={1.2} />
              <circle cx={n.x} cy={n.y} r={20} fill="var(--color-warm)" />
              <circle cx={n.x} cy={n.y} r={5} fill={GLOBAL_COLOR[n.color]} opacity={0.7} />
              <text x={n.x} y={n.y + 40} textAnchor="middle" fontFamily="var(--font-en)" fontSize={9} fontWeight={700} fill={GLOBAL_COLOR[n.color]}>
                {n.en}
              </text>
              <text x={n.x} y={n.y + 52} textAnchor="middle" fontFamily="var(--font-ja)" fontSize={8} fill="var(--color-muted)">
                {n.label[lang]}
              </text>
              <text x={n.x} y={n.y + 63} textAnchor="middle" fontFamily="var(--font-en)" fontSize={7} fill={GLOBAL_COLOR[n.color]} opacity={0.65}>
                {n.biz}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
      <ul className="sr-only">
        {NODES.map((n, i) => (
          <li key={`sr-${n.en}`}>
            {n.en}（{n.label[lang]} / {n.biz}）
            {i < NODES.length - 1 ? " → " : ` → ${NODES[0].en}`}
          </li>
        ))}
      </ul>
    </section>
  );
}

function cycleDiagramLabel(lang: GLang): string {
  if (lang === "en") return "Diagram: a cycle of Connect, Learn, Build, Work and Co-create, looping back to Connect.";
  if (lang === "fr") return "Schéma : un cycle Connecter, Apprendre, Construire, Travailler et Co-créer, qui revient à Connecter.";
  return "図：つながる・学ぶ・つくる・働く・共創するが循環し、再びつながるへ戻る様子";
}
