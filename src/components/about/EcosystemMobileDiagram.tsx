"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { ECOSYSTEM } from "@/content/ecosystem";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  muted: "var(--color-muted)",
} as const;

const CX = 200;
const CY = 210;
const R = 100;
const LABEL_R = R + 32;
const CENTER_R = 42;

type Anchor = "start" | "end" | "middle";

/**
 * 8ノードを均等な円周上に配置する（Desktop版の「有機的な非対称配置」とは別に、
 * 狭い画面でも文字が重ならず・はみ出さず読めることを優先したレイアウト）。
 */
function computeMobileNodes() {
  const nodes = ECOSYSTEM.nodes;
  return nodes.map((n, i) => {
    const angle = (-90 + (i * 360) / nodes.length) * (Math.PI / 180);
    const x = CX + R * Math.cos(angle);
    const y = CY + R * Math.sin(angle);
    const lx = CX + LABEL_R * Math.cos(angle);
    const ly = CY + LABEL_R * Math.sin(angle);
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const anchor: Anchor = cosA > 0.35 ? "start" : cosA < -0.35 ? "end" : "middle";
    return { ...n, x, y, lx, ly, anchor, isAbove: sinA < -0.35 };
  });
}

/** 中心への線を、中心から見て外向きにわずかに膨らませる（Cycle.tsx と同じ考え方） */
function spokePath(n: { x: number; y: number }) {
  const mx = (n.x + CX) / 2;
  const my = (n.y + CY) / 2;
  const outX = mx - CX;
  const outY = my - CY;
  const outDist = Math.hypot(outX, outY) || 1;
  const bow = 7;
  const ctrlX = mx + (outX / outDist) * bow;
  const ctrlY = my + (outY / outDist) * bow;
  return `M${n.x} ${n.y} Q${ctrlX} ${ctrlY} ${CX} ${CY}`;
}

/**
 * Mobile用の簡易ネットワーク図。Desktop版（EcosystemDiagram）を縮小コピーするのではなく、
 * 狭い画面でも見切れず視認できるよう均等配置・中心スポークのみに簡略化している。
 * 詳細な関係性（誰と誰が「出会い」「学び」でつながるか等）は下の EcosystemMobileFlow が担う。
 */
export function EcosystemMobileDiagram() {
  const reduced = usePrefersReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "0px 0px -10% 0px" });
  const nodes = computeMobileNodes();
  const centerConnections = ECOSYSTEM.connections.filter((c) => c.from === "center");

  return (
    <div ref={wrapRef} className="relative mx-auto max-w-[360px] md:hidden">
      <svg
        viewBox="0 0 400 420"
        className="block h-auto w-full overflow-visible"
        role="img"
        aria-label="株式会社〇を中心に、学生、卒業生、企業、応援者、自治体、教育機関、福祉・就労支援、CSR・社会貢献企業がつながるネットワーク図。"
      >
        <circle cx={CX} cy={CY} r={R + 34} fill="none" stroke="rgba(15,31,61,0.035)" strokeWidth="1" />

        {centerConnections.map((c, i) => {
          const n = nodes.find((x) => x.id === c.to)!;
          return (
            <motion.path
              key={`m-c-${c.to}`}
              d={spokePath(n)}
              stroke={COLOR[n.color]}
              strokeWidth="1.2"
              opacity="0.28"
              fill="none"
              initial={reduced ? false : { pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : undefined}
              transition={reduced ? undefined : { duration: 0.9, ease: "easeInOut", delay: 0.12 + i * 0.06 }}
            />
          );
        })}

        <circle cx={CX} cy={CY} r={CENTER_R} fill="var(--color-surface)" stroke="rgba(15,31,61,0.1)" strokeWidth="1.5" />
        <image href="/maru-mark.png" x={CX - 18} y={CY - 24} width={36} height={36} />
        <text x={CX} y={CY + 26} textAnchor="middle" fontFamily="var(--font-ja)" fontSize="9" fontWeight="500" fill="var(--color-navy)">
          株式会社〇
        </text>

        {nodes.map((n, i) => (
          <motion.g
            key={`m-node-${n.id}`}
            initial={reduced ? false : { opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : undefined}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            transition={reduced ? undefined : { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.06 }}
          >
            <circle cx={n.x} cy={n.y} r={7} fill={COLOR[n.color]} opacity="0.92" />
            <circle cx={n.x} cy={n.y} r={11} fill="none" stroke={COLOR[n.color]} strokeWidth="1" opacity="0.22" />
          </motion.g>
        ))}

        {nodes.map((n, i) => (
          <motion.g
            key={`m-label-${n.id}`}
            initial={reduced ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : undefined}
            transition={reduced ? undefined : { duration: 0.4, delay: 0.3 + i * 0.06 }}
          >
            {n.lines.map((line, li) => (
              <text
                key={line}
                x={n.lx}
                y={n.ly + (n.isAbove ? -((n.lines.length - 1 - li) * 13) : li * 13)}
                textAnchor={n.anchor}
                dominantBaseline="middle"
                fontFamily="var(--font-ja)"
                fontSize="10"
                fontWeight="500"
                fill="var(--color-navy)"
              >
                {line}
              </text>
            ))}
          </motion.g>
        ))}
      </svg>

      <ul className="sr-only">
        {nodes.map((n) => (
          <li key={`m-sr-${n.id}`}>
            {n.lines.join("")}({n.keyword})は、株式会社〇とつながっています。
          </li>
        ))}
      </ul>
    </div>
  );
}
