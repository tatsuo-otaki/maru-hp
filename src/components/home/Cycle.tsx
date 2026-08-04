"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { CYCLE } from "@/content/home";

const COLOR = {
  navy: "var(--color-navy)",
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
} as const;

const CX = 380;
const CY = 340;
const R = 210;

type Anchor = "start" | "end" | "middle";

function computeNodes() {
  return CYCLE.nodes.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    const nx = CX + R * Math.cos(rad);
    const ny = CY + R * Math.sin(rad);
    const lr = R + 72;
    const lx = CX + lr * Math.cos(rad);
    const ly = CY + lr * Math.sin(rad);
    const cosA = Math.cos(rad);
    const anchor: Anchor = cosA > 0.25 ? "start" : cosA < -0.25 ? "end" : "middle";
    return { ...n, nx, ny, lx, ly, anchor };
  });
}

/** 隣接ノード間の中点角度（フロー矢印の位置） */
function computeArrowAngles() {
  return CYCLE.nodes.map((n, i) => {
    const next = CYCLE.nodes[(i + 1) % CYCLE.nodes.length];
    const a1 = n.angle;
    let a2 = next.angle;
    if (a2 < a1) a2 += 360;
    return (a1 + a2) / 2;
  });
}

export function Cycle() {
  const reduced = usePrefersReducedMotion();
  const nodes = computeNodes();
  const arrowAngles = computeArrowAngles();
  // スクロール検知は HTML コンテナで行う（SVG 要素への IntersectionObserver は
  // iOS WebKit で発火しないため、ここに whileInView を持たせない）。
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <Section id="cycle" className="relative overflow-hidden">
      {/* 背景の薄い大リング */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(15,31,61,0.03)]"
      />

      {/* 見出し */}
      <Reveal className="relative mb-12 text-center md:mb-14">
        <div className="flex items-center justify-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{CYCLE.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>
        <h2 className="mt-5 font-ja text-[1.5rem] font-medium leading-[1.55] text-navy md:text-[2.25rem]">
          {CYCLE.heading}
        </h2>
      </Reveal>

      <div ref={wrapRef} className="flex justify-center overflow-visible">
        <svg
          viewBox="0 0 760 680"
          // aspect-ratio を明示。iOS Safari は flex 内の SVG 高さを viewBox から
          // 正しく推定できず箱が潰れる（図が途中で切れる）ため、比率を固定する。
          className="block h-auto w-full max-w-[760px] overflow-visible aspect-[760/680]"
          role="img"
          aria-label="技術・教育・仕事が循環する図。企業・社会の課題、AI・システム開発、AI教育・人材育成、実務経験・就労機会、社会への価値創出が円環でつながる。"
        >
          {/* 外周ガイドリング */}
          <circle
            cx={CX}
            cy={CY}
            r={R + 44}
            fill="none"
            stroke="rgba(15,31,61,0.04)"
            strokeWidth="1"
          />

          {/* メインの周回円（スクロールインで描画） */}
          <motion.circle
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke="var(--color-teal)"
            strokeWidth="1.5"
            opacity="0.22"
            initial={reduced ? false : { pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : undefined}
            transition={
              reduced ? undefined : { duration: 2, ease: "easeInOut", delay: 0.2 }
            }
          />

          {/* フロー矢印（隣接ノード中点・ゆっくり明滅） */}
          {arrowAngles.map((midDeg, i) => {
            const midRad = (midDeg * Math.PI) / 180;
            const ax = CX + R * Math.cos(midRad);
            const ay = CY + R * Math.sin(midRad);
            const rot = midDeg + 90;
            return (
              <motion.polygon
                key={i}
                points={`${ax},${ay - 7} ${ax + 6},${ay + 5} ${ax - 6},${ay + 5}`}
                fill="var(--color-teal)"
                transform={`rotate(${rot}, ${ax}, ${ay})`}
                initial={{ opacity: 0 }}
                animate={reduced ? { opacity: 0.5 } : { opacity: [0.35, 0.7, 0.35] }}
                transition={
                  reduced
                    ? undefined
                    : {
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.48,
                      }
                }
              />
            );
          })}

          {/* 中央の〇 */}
          <circle
            cx={CX}
            cy={CY}
            r={62}
            fill="var(--color-surface)"
            stroke="rgba(15,31,61,0.1)"
            strokeWidth="1.5"
          />
          <text
            x={CX}
            y={CY + 16}
            textAnchor="middle"
            fontFamily="var(--font-ja)"
            fontSize="44"
            fontWeight="300"
            fill="var(--color-navy)"
            opacity="0.85"
          >
            {CYCLE.center}
          </text>

          {/* ノード円 */}
          {nodes.map((n, i) => (
            <motion.g
              key={`node-${i}`}
              initial={reduced ? false : { opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              style={{ transformOrigin: `${n.nx}px ${n.ny}px` }}
              transition={
                reduced
                  ? undefined
                  : { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }
              }
            >
              <circle cx={n.nx} cy={n.ny} r={22} fill={COLOR[n.color]} opacity="0.9" />
              <circle
                cx={n.nx}
                cy={n.ny}
                r={30}
                fill="none"
                stroke={COLOR[n.color]}
                strokeWidth="1"
                opacity="0.2"
              />
            </motion.g>
          ))}

          {/* ラベル */}
          {nodes.map((n, i) => {
            const isAbove = n.ly < CY;
            return (
              <motion.g
                key={`label-${i}`}
                initial={reduced ? false : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : undefined}
                transition={reduced ? undefined : { duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <line
                  x1={n.nx + (n.lx - n.nx) * 0.55}
                  y1={n.ny + (n.ly - n.ny) * 0.55}
                  x2={n.lx - (n.lx - n.nx) * 0.18}
                  y2={n.ly - (n.ly - n.ny) * 0.18}
                  stroke={COLOR[n.color]}
                  strokeWidth="1"
                  opacity="0.25"
                />
                <text
                  x={n.lx}
                  y={isAbove ? n.ly - 8 : n.ly + 6}
                  textAnchor={n.anchor}
                  fontFamily="var(--font-en)"
                  fontSize="9"
                  fontWeight="600"
                  fill={COLOR[n.color]}
                  letterSpacing="1.5"
                  opacity="0.8"
                >
                  {n.sub.toUpperCase()}
                </text>
                <text
                  x={n.lx}
                  y={isAbove ? n.ly + 10 : n.ly + 24}
                  textAnchor={n.anchor}
                  fontFamily="var(--font-ja)"
                  fontSize="14"
                  fontWeight="500"
                  fill="var(--color-navy)"
                >
                  {n.label}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>
    </Section>
  );
}
