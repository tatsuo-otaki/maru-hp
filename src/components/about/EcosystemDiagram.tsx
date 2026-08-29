"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { ECOSYSTEM, type EcosystemNode } from "@/content/ecosystem";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  muted: "var(--color-muted)",
} as const;

const CX = 450;
const CY = 390;
/** 中心の「株式会社〇」ロゴ円の半径 */
const CENTER_R = 70;

type Anchor = "start" | "end" | "middle";
type PositionedNode = EcosystemNode & { x: number; y: number; lx: number; ly: number; anchor: Anchor };

function computeNodes(): PositionedNode[] {
  return ECOSYSTEM.nodes.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    const x = CX + n.radius * Math.cos(rad);
    const y = CY + n.radius * Math.sin(rad);
    const lr = n.radius + 62;
    const lx = CX + lr * Math.cos(rad);
    const ly = CY + lr * Math.sin(rad);
    const cosA = Math.cos(rad);
    const anchor: Anchor = cosA > 0.25 ? "start" : cosA < -0.25 ? "end" : "middle";
    return { ...n, x, y, lx, ly, anchor };
  });
}

/** 2点間を中心から外向きにやや膨らませた二次ベジェ曲線にする（周辺ノード同士の関係線用） */
function curvePath(x1: number, y1: number, x2: number, y2: number, k = 0.2) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = mx - CX;
  const dy = my - CY;
  const dist = Math.hypot(dx, dy) || 1;
  const ux = dx / dist;
  const uy = dy / dist;
  const bow = Math.hypot(x2 - x1, y2 - y1) * k;
  const ctrlX = mx + ux * bow;
  const ctrlY = my + uy * bow;
  return {
    d: `M ${x1} ${y1} Q ${ctrlX} ${ctrlY} ${x2} ${y2}`,
    midX: 0.25 * x1 + 0.5 * ctrlX + 0.25 * x2,
    midY: 0.25 * y1 + 0.5 * ctrlY + 0.25 * y2,
  };
}

/** アクセシビリティ用：図の内容をテキストでも伝える（sr-only） */
function EcosystemTextAlternative({ nodes }: { nodes: PositionedNode[] }) {
  const labelOf = (id: string) => nodes.find((n) => n.id === id)?.lines.join("") ?? id;
  const peerConnections = ECOSYSTEM.connections.filter((c) => c.from !== "center");

  return (
    <ul className="sr-only">
      {nodes.map((n) => (
        <li key={n.id}>
          {n.lines.join("")}({n.keyword})は、株式会社〇とつながっています。
        </li>
      ))}
      {peerConnections.map((c) => (
        <li key={`${c.from}-${c.to}`}>
          {labelOf(c.from)}と{labelOf(c.to)}は{c.label ? `「${c.label}」で` : ""}つながっています。
        </li>
      ))}
    </ul>
  );
}

export function EcosystemDiagram() {
  const reduced = usePrefersReducedMotion();
  const nodes = computeNodes();
  // SVG 要素への whileInView は iOS Safari で発火しないため、HTML コンテナで検知する（Cycle.tsx と同じ対策）。
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "0px 0px -15% 0px" });

  const centerConnections = ECOSYSTEM.connections.filter((c) => c.from === "center");
  const peerConnections = ECOSYSTEM.connections.filter((c) => c.from !== "center");

  // 循環する感覚を出すための小さな走行ドット（負荷を抑え、代表的な2本のみ）
  const floatSpokes = centerConnections.filter((c) => c.to === "company" || c.to === "education");

  return (
    <div ref={wrapRef} className="relative mx-auto hidden max-w-[900px] md:block">
      <svg
        viewBox="0 0 900 780"
        className="block h-auto w-full overflow-visible"
        role="img"
        aria-label="株式会社〇を中心に、学生、卒業生、企業、応援者、自治体、教育機関、福祉・就労支援、CSR・社会貢献企業がゆるやかにつながり合うネットワーク図。中心だけでなく、学生と卒業生、学生と企業、企業と地域なども互いにつながっている。"
      >
        {/* 背景の薄い〇（ブランドモチーフ） */}
        <circle cx={CX} cy={CY} r={360} fill="none" stroke="rgba(15,31,61,0.035)" strokeWidth="1" />

        {/* 中心スポーク（株式会社〇 ↔ 各ノード） */}
        {centerConnections.map((c, i) => {
          const n = nodes.find((x) => x.id === c.to)!;
          return (
            <motion.line
              key={`c-${c.to}`}
              x1={CX}
              y1={CY}
              x2={n.x}
              y2={n.y}
              stroke={COLOR[n.color]}
              strokeWidth="1.2"
              opacity="0.28"
              initial={reduced ? false : { pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : undefined}
              transition={reduced ? undefined : { duration: 1.1, ease: "easeInOut", delay: 0.15 + i * 0.07 }}
            />
          );
        })}

        {/* 周辺ノード同士の関係線（曲線・淡く） */}
        {peerConnections.map((c, i) => {
          const from = nodes.find((x) => x.id === c.from)!;
          const to = nodes.find((x) => x.id === c.to)!;
          const curve = curvePath(from.x, from.y, to.x, to.y);
          return (
            <g key={`${c.from}-${c.to}`}>
              <motion.path
                d={curve.d}
                fill="none"
                stroke={COLOR[to.color]}
                strokeWidth="1"
                opacity="0.16"
                initial={reduced ? false : { pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : undefined}
                transition={
                  reduced ? undefined : { duration: 1, ease: "easeInOut", delay: 1.0 + i * 0.09 }
                }
              />
              {c.label && (
                <motion.text
                  x={curve.midX}
                  y={curve.midY}
                  textAnchor="middle"
                  fontFamily="var(--font-ja)"
                  fontSize="11"
                  fill="var(--color-navy)"
                  opacity="0"
                  initial={false}
                  animate={inView ? { opacity: 0.55 } : undefined}
                  transition={reduced ? undefined : { duration: 0.6, delay: 1.6 + i * 0.09 }}
                >
                  {c.label}
                </motion.text>
              )}
            </g>
          );
        })}

        {/* 走行ドット（循環している感覚。負荷の低い2本のみ、reduced-motion では非表示） */}
        {!reduced &&
          floatSpokes.map((c) => {
            const n = nodes.find((x) => x.id === c.to)!;
            return (
              <circle key={`float-${c.to}`} r="3" fill={COLOR[n.color]} opacity="0.7">
                <animateMotion
                  path={`M ${CX} ${CY} L ${n.x} ${n.y}`}
                  dur="5.5s"
                  begin={c.to === "company" ? "0s" : "2.4s"}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}

        {/* 中心：株式会社〇 */}
        <motion.g
          style={{ transformOrigin: `${CX}px ${CY}px` }}
          animate={reduced ? undefined : { scale: [1, 1.015, 1] }}
          transition={reduced ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx={CX} cy={CY} r={CENTER_R} fill="var(--color-surface)" stroke="rgba(15,31,61,0.1)" strokeWidth="1.5" />
          <image href="/maru-mark.png" x={CX - 30} y={CY - 40} width={60} height={60} />
          <text
            x={CX}
            y={CY + 42}
            textAnchor="middle"
            fontFamily="var(--font-ja)"
            fontSize="12"
            fontWeight="500"
            fill="var(--color-navy)"
          >
            株式会社〇
          </text>
        </motion.g>

        {/* ノード */}
        {nodes.map((n, i) => (
          <motion.g
            key={`node-${n.id}`}
            initial={reduced ? false : { opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : undefined}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            transition={reduced ? undefined : { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.08 }}
          >
            <circle cx={n.x} cy={n.y} r={9} fill={COLOR[n.color]} opacity="0.92" />
            <circle cx={n.x} cy={n.y} r={14} fill="none" stroke={COLOR[n.color]} strokeWidth="1" opacity="0.22" />
          </motion.g>
        ))}

        {/* ラベル */}
        {nodes.map((n, i) => {
          const isAbove = n.ly < CY;
          return (
            <motion.g
              key={`label-${n.id}`}
              initial={reduced ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : undefined}
              transition={reduced ? undefined : { duration: 0.5, delay: 0.5 + i * 0.08 }}
            >
              <line
                x1={n.x + (n.lx - n.x) * 0.5}
                y1={n.y + (n.ly - n.y) * 0.5}
                x2={n.lx - (n.lx - n.x) * 0.12}
                y2={n.ly - (n.ly - n.y) * 0.12}
                stroke={COLOR[n.color]}
                strokeWidth="1"
                opacity="0.22"
              />
              <text
                x={n.lx}
                y={isAbove ? n.ly - 8 - (n.lines.length - 1) * 15 : n.ly + 6}
                textAnchor={n.anchor}
                fontFamily="var(--font-en)"
                fontSize="9"
                fontWeight="600"
                fill={COLOR[n.color]}
                letterSpacing="1.2"
                opacity="0.85"
              >
                {n.keyword.toUpperCase()}
              </text>
              {n.lines.map((line, li) => (
                <text
                  key={line}
                  x={n.lx}
                  y={(isAbove ? n.ly + 8 : n.ly + 24) + li * 16 - (isAbove ? (n.lines.length - 1) * 16 : 0)}
                  textAnchor={n.anchor}
                  fontFamily="var(--font-ja)"
                  fontSize="13"
                  fontWeight="500"
                  fill="var(--color-navy)"
                >
                  {line}
                </text>
              ))}
            </motion.g>
          );
        })}
      </svg>

      <EcosystemTextAlternative nodes={nodes} />
    </div>
  );
}
