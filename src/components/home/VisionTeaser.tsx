"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { VISION } from "@/content/home";

type Accent = "teal" | "amber" | "navy";
const COLOR: Record<Accent, string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * トップ用の Vision 簡易版（Figma Make 準拠）。
 * 5つを横並びカードストリップで見せ（説明は省略）、詳細は /about#vision の本編へ。
 * モバイルは横スクロール。
 */
export function VisionTeaser() {
  const reduced = usePrefersReducedMotion();

  const anim = (
    initial: Record<string, number | string>,
    whileInView: Record<string, number | string>,
    transition: Record<string, unknown>,
    viewport?: Record<string, unknown>,
  ) =>
    reduced
      ? {}
      : { initial, whileInView, viewport: { once: true, ...viewport } as const, transition };

  return (
    <section
      id="vision-teaser"
      className="bg-surface py-16 md:py-24"
    >
      {/* 見出し */}
      <motion.div
        className="mb-9 px-6 md:mb-14 md:px-20"
        {...anim({ opacity: 0, y: 16 }, { opacity: 1, y: 0 }, { duration: 0.6, ease: EASE })}
      >
        <SectionLabel>{VISION.label}</SectionLabel>
        <h2 className="mt-3.5 font-ja text-[1.625rem] font-light leading-[1.4] text-navy md:text-[2.25rem]">
          {VISION.heading}
        </h2>
      </motion.div>

      {/* カードストリップ（モバイルは横スクロール） */}
      <div className="flex gap-0.5 overflow-x-auto px-6 [scrollbar-width:none] md:overflow-visible md:px-20">
        {VISION.items.map((vis, i) => {
          const c = COLOR[vis.color as Accent];
          return (
            <motion.div
              key={vis.num}
              className="flex min-w-[200px] flex-none flex-col border border-line bg-warm p-7 transition-shadow duration-200 hover:shadow-[0_10px_28px_rgba(15,31,61,0.09)] md:min-w-0 md:flex-1 md:p-8"
              whileHover={reduced ? undefined : { y: -4 }}
              {...anim({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, {
                duration: 0.55,
                ease: EASE,
                delay: i * 0.08,
              }, { amount: 0.15 })}
            >
              {/* 上：番号＋色アクセントバー */}
              <div className="mb-6 flex items-center justify-between md:mb-7">
                <span
                  className="font-en text-[11px] font-bold tracking-[0.15em]"
                  style={{ color: c }}
                >
                  {vis.num}
                </span>
                <span
                  aria-hidden="true"
                  className="h-0.5 w-7 opacity-50"
                  style={{ backgroundColor: c }}
                />
              </div>

              {/* タイトル */}
              <h3 className="flex-1 font-ja text-[15px] font-medium leading-[1.65] text-navy md:text-[17px]">
                {vis.title}
              </h3>

              {/* 英字ラベル */}
              <div className="mt-4 font-en text-[8px] font-semibold uppercase tracking-[0.15em] text-muted opacity-60 md:mt-6">
                {vis.en}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* フッターリンク */}
      <motion.div
        className="mt-9 flex justify-end px-6 md:px-20"
        {...anim({ opacity: 0 }, { opacity: 1 }, { duration: 0.5, delay: 0.4 })}
      >
        <Link
          href={VISION.cta.href}
          className="group inline-flex items-center gap-2 border-b border-teal/40 pb-0.5 font-ja text-[13px] font-medium text-teal"
        >
          5つのVisionをすべて見る
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
