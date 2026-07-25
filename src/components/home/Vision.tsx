"use client";

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
 * 5つのVision。Figma Make の新デザイン（ロックしないエディトリアル縦リスト）。
 * 縦のアクセント線がスクロールで伸び、番号は左から・内容は右からスライドインする。
 */
export function Vision() {
  const reduced = usePrefersReducedMotion();

  const anim = (
    initial: Record<string, number | string>,
    whileInView: Record<string, number | string>,
    transition: Record<string, unknown>,
    viewport?: Record<string, unknown>,
  ) =>
    reduced
      ? {}
      : {
          initial,
          whileInView,
          viewport: { once: true, ...viewport } as const,
          transition,
        };

  return (
    <section id="vision" className="bg-surface">
      {/* セクション見出し */}
      <div className="border-b border-line px-6 pt-16 pb-12 md:px-20 md:pt-24 md:pb-[72px]">
        <SectionLabel>{VISION.label}</SectionLabel>
        <motion.h2
          className="mt-4 font-ja text-[1.75rem] font-light leading-[1.4] text-navy md:text-[2.75rem]"
          {...anim({ opacity: 0, y: 18 }, { opacity: 1, y: 0 }, { duration: 0.75, ease: EASE })}
        >
          {VISION.heading}
        </motion.h2>
      </div>

      {/* 縦線付きのエディトリアル行 */}
      <div className="relative">
        {/* 縦アクセント線（スクロールで下へ伸びる） */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-[23px] w-px origin-top bg-teal/20 md:left-[159px]"
          {...anim({ scaleY: 0 }, { scaleY: 1 }, { duration: 2.4, ease: EASE }, {
            margin: "-10%",
          })}
        />

        <ol>
          {VISION.items.map((vis) => {
            const c = COLOR[vis.color as Accent];
            return (
              <li
                key={vis.num}
                className="relative flex min-h-[220px] items-center border-b border-line px-6 py-14 md:px-20 md:py-20"
              >
                {/* 縦線上のドット */}
                <motion.span
                  aria-hidden="true"
                  className="absolute left-[17px] z-[2] h-[13px] w-[13px] rounded-full border-2 border-surface md:left-[153px]"
                  style={{ backgroundColor: c }}
                  {...anim({ scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }, {
                    duration: 0.35,
                    delay: 0.15,
                  })}
                />

                {/* ゴースト番号（左からスライド・PCのみ） */}
                <motion.span
                  aria-hidden="true"
                  className="hidden shrink-0 select-none pl-20 font-en text-[100px] font-extralight leading-none text-navy/[0.07] md:block md:w-[200px]"
                  {...anim({ x: -36, opacity: 0 }, { x: 0, opacity: 1 }, {
                    duration: 0.75,
                    ease: EASE,
                  }, { margin: "-40px" })}
                >
                  {vis.num}
                </motion.span>

                {/* 内容（右からフェードイン） */}
                <motion.div
                  className="flex-1 pl-8 md:pl-0"
                  {...anim({ x: 28, opacity: 0 }, { x: 0, opacity: 1 }, {
                    duration: 0.75,
                    ease: EASE,
                    delay: 0.1,
                  }, { margin: "-40px" })}
                >
                  <div
                    className="mb-3.5 font-en text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: c }}
                  >
                    Vision {vis.num} — {vis.en}
                  </div>
                  <h3 className="mb-4 font-ja text-[1.25rem] font-medium leading-[1.55] text-navy md:text-[1.875rem]">
                    {vis.title}
                  </h3>
                  <p className="max-w-[580px] font-ja text-[15px] font-light leading-[2.05] text-muted">
                    {vis.desc}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
