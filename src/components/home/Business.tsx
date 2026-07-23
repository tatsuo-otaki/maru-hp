"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { BUSINESS } from "@/content/home";

type Accent = "teal" | "amber" | "navy";
const COLOR: Record<Accent, string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function Business() {
  const reduced = usePrefersReducedMotion();

  // reduced-motion 時はアニメーションを外して静止表示にする
  const anim = (
    initial: Record<string, number | string>,
    whileInView: Record<string, number | string>,
    transition: Record<string, unknown>,
  ) =>
    reduced
      ? {}
      : { initial, whileInView, viewport: { once: true } as const, transition };

  return (
    <section id="business" className="bg-warm">
      {/* セクション見出し */}
      <div className="border-b border-line px-6 pt-16 pb-12 md:px-20 md:pt-24 md:pb-[72px]">
        <SectionLabel>{BUSINESS.label}</SectionLabel>
        <motion.h2
          className="mt-4 font-ja text-[1.875rem] font-light leading-[1.4] text-navy md:text-[2.75rem]"
          {...anim({ opacity: 0, y: 18 }, { opacity: 1, y: 0 }, {
            duration: 0.75,
            ease: EASE,
          })}
        >
          {BUSINESS.heading}
        </motion.h2>
      </div>

      {BUSINESS.items.map((biz, i) => {
        const c = COLOR[biz.color as Accent];
        const zebra = i % 2 === 0 ? "bg-warm" : "bg-surface";
        return (
          <Fragment key={biz.num}>
            {/* カード間の縦ダッシュコネクター */}
            {i > 0 && (
              <div
                className={`flex h-12 items-center pl-6 md:h-20 md:pl-[148px] ${zebra}`}
                aria-hidden="true"
              >
                <motion.span
                  className="block w-px origin-top"
                  style={{ height: 52, backgroundColor: c }}
                  {...anim({ scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: 0.5 }, {
                    duration: 0.55,
                    ease: "easeOut",
                  })}
                />
              </div>
            )}

            {/* カード本体 */}
            <div className={`relative overflow-hidden border-t border-line ${zebra}`}>
              {/* ゴースト番号（大きな透かし） */}
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute right-[-20px] bottom-[-40px] select-none font-en font-extrabold leading-none text-[rgba(15,31,61,0.028)]"
                style={{ fontSize: 300 }}
                {...anim({ scale: 1.18, opacity: 0 }, { scale: 1, opacity: 1 }, {
                  duration: 1.2,
                  ease: EASE,
                })}
              >
                {biz.num}
              </motion.span>

              {/* タイトルゾーン（上・即座に読める） */}
              <div className="relative z-10 flex items-end gap-5 border-b border-line px-6 pt-8 pb-7 md:gap-10 md:px-20 md:pt-[52px] md:pb-11">
                {/* 番号＋アクセントバー */}
                <div className="flex shrink-0 flex-col pb-1">
                  <motion.span
                    className="mb-3 block w-0.5 origin-top"
                    style={{ height: 28, backgroundColor: c }}
                    {...anim({ scaleY: 0 }, { scaleY: 1 }, { duration: 0.45 })}
                  />
                  <motion.span
                    className="block font-en text-[2rem] font-bold leading-none md:text-[2.75rem]"
                    style={{ color: c }}
                    {...anim({ scale: 1.2, y: 8, opacity: 0 }, { scale: 1, y: 0, opacity: 1 }, {
                      duration: 0.65,
                      ease: EASE,
                      delay: 0.05,
                    })}
                  >
                    {biz.num}
                  </motion.span>
                </div>

                {/* タイトル＋ラベル */}
                <div className="flex-1">
                  <motion.div
                    className="mb-3.5 font-en text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: c }}
                    {...anim({ opacity: 0, y: 6 }, { opacity: 1, y: 0 }, {
                      duration: 0.45,
                      delay: 0.04,
                    })}
                  >
                    {biz.en}
                  </motion.div>
                  <motion.h3
                    className="font-ja text-[1.75rem] font-medium leading-[1.3] text-navy md:text-[3.25rem]"
                    {...anim({ opacity: 0, y: 16 }, { opacity: 1, y: 0 }, {
                      duration: 0.7,
                      ease: EASE,
                      delay: 0.1,
                    })}
                  >
                    {biz.title}
                  </motion.h3>
                  <motion.p
                    className="mt-3 font-ja text-[13.5px] font-light leading-[1.75] text-muted"
                    {...anim({ opacity: 0 }, { opacity: 1 }, { duration: 0.5, delay: 0.28 })}
                  >
                    {biz.tag}
                  </motion.p>
                </div>
              </div>

              {/* 詳細ゾーン（下） */}
              <div className="relative z-10 px-6 pt-6 pb-10 md:px-20 md:pt-11 md:pb-16">
                <div className="max-w-[620px]">
                  <motion.p
                    className="mb-8 font-ja text-[15.5px] font-light leading-[2.05] text-muted"
                    {...anim({ opacity: 0, y: 10 }, { opacity: 1, y: 0 }, {
                      duration: 0.6,
                      delay: 0.1,
                    })}
                  >
                    {biz.lead}
                  </motion.p>

                  {/* 取り組み 2列 */}
                  <div className="mb-9 grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
                    {biz.works.map((item, ii) => (
                      <motion.div
                        key={item}
                        className="flex items-start gap-2.5"
                        {...anim({ opacity: 0, x: -8 }, { opacity: 1, x: 0 }, {
                          duration: 0.4,
                          delay: 0.15 + ii * 0.07,
                        })}
                      >
                        <span
                          className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full"
                          style={{ backgroundColor: c }}
                        />
                        <span className="font-ja text-[13.5px] leading-[1.8] text-navy">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={biz.cta.href}
                    className="group inline-flex items-center gap-2 border-b pb-[3px] font-ja text-[13px] font-medium"
                    style={{ color: c, borderColor: `color-mix(in srgb, ${c} 33%, transparent)` }}
                    {...anim({ opacity: 0 }, { opacity: 1 }, { duration: 0.5, delay: 0.55 })}
                  >
                    {biz.cta.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}

      <div className="h-px bg-line" />
    </section>
  );
}
