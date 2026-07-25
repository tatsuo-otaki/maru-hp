"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { PARTNERS_HUB, type Accent } from "@/content/partners";

const COLOR: Record<Accent, string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
};

const EASE = [0.16, 1, 0.3, 1] as const;

/** 交互背景（warm / surface）。バンドとコネクターで共有 */
const zebra = (n: number) => (n % 2 === 0 ? "bg-warm" : "bg-surface");

/**
 * 3つのプログラムを全幅の帯（バンド）で見せる編集的レイアウト。
 * トップの Business セクションと同じビジュアル言語（巨大ゴースト番号・
 * 縦アクセント・zebra 背景・縦ダッシュコネクタ）。
 */
export function ProgramBands() {
  const reduced = usePrefersReducedMotion();

  // reduced-motion 時はアニメーションを外して静止表示にする
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
    <section id="programs" className="bg-warm">
      {/* セクション見出し */}
      <motion.div
        className="border-b border-line px-6 pt-16 pb-11 md:px-20 md:pt-24 md:pb-[52px]"
        {...anim({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, { duration: 0.6, ease: EASE })}
      >
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>Programs</SectionLabel>
        </div>
        <h2 className="mt-4 font-ja text-[1.75rem] font-medium leading-[1.4] text-navy md:text-[2.625rem]">
          {PARTNERS_HUB.programsHeading}
        </h2>
        <p className="mt-4 max-w-[560px] font-ja text-body font-light leading-relaxed text-muted">
          {PARTNERS_HUB.programsIntro}
        </p>
      </motion.div>

      {PARTNERS_HUB.programs.map((prog, i) => {
        const c = COLOR[prog.color];
        const num = String(i + 1).padStart(2, "0");
        return (
          <div key={prog.title}>
            {/* バンド間の縦ダッシュコネクター（直前バンドの背景の上に置く） */}
            {i > 0 && (
              <div className={`flex justify-center ${zebra(i - 1)}`} aria-hidden="true">
                <motion.span
                  className="block w-0.5 origin-top"
                  style={{ height: 52, backgroundColor: c, opacity: 0.5 }}
                  {...anim({ scaleY: 0 }, { scaleY: 1 }, { duration: 0.45, ease: EASE }, { amount: 0.5 })}
                />
              </div>
            )}

            {/* バンド本体 */}
            <motion.div
              className={`relative overflow-hidden border-t border-line px-6 pt-12 pb-14 md:px-20 md:pt-16 md:pb-[72px] ${zebra(i)}`}
              {...anim({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, { duration: 0.65, ease: EASE }, { amount: 0.1 })}
            >
              {/* 巨大ゴースト番号（透かし） */}
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute right-[-16px] bottom-[-16px] select-none font-en text-[160px] font-extrabold leading-none md:right-10 md:bottom-[-20px] md:text-[300px]"
                style={{ color: c, opacity: 0.028 }}
                {...anim({ opacity: 0, scale: 1.15 }, { opacity: 0.028, scale: 1 }, {
                  duration: 0.9,
                  ease: EASE,
                  delay: 0.1,
                }, { amount: 0.1 })}
              >
                {num}
              </motion.span>

              {/* 本体レイアウト（左：番号 ／ 右：内容） */}
              <div className="relative z-10 flex flex-col gap-7 md:flex-row md:gap-[72px]">
                {/* 左：番号カラム */}
                <div className="flex shrink-0 items-start gap-4 md:w-[100px]">
                  <span
                    aria-hidden="true"
                    className="mt-1 block w-0.5 shrink-0 md:mt-1.5"
                    style={{ height: 28, backgroundColor: c }}
                  />
                  <motion.span
                    className="block font-en text-[2rem] font-bold leading-none tracking-[-0.02em] md:text-[2.75rem]"
                    style={{ color: c }}
                    {...anim({ opacity: 0 }, { opacity: 1 }, { duration: 0.5, delay: 0.2 })}
                  >
                    {num}
                  </motion.span>
                </div>

                {/* 右：内容 */}
                <div className="min-w-0 flex-1">
                  {/* 対象（誰のためか：先頭に大きめのチップで明示） */}
                  <div className="mb-5">
                    <span
                      className="inline-flex items-center gap-2 rounded-btn px-3.5 py-1.5 font-ja text-[12.5px] font-medium"
                      style={{ color: c, backgroundColor: `color-mix(in srgb, ${c} 12%, white)` }}
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: c }}
                      />
                      {prog.forWhom}
                    </span>
                  </div>

                  {/* EN キッカー */}
                  <div
                    className="mb-2 font-en text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: c }}
                  >
                    {prog.en}
                  </div>

                  {/* プログラム名（何を提供するか：主タイトル） */}
                  <h3 className="max-w-[15em] font-ja text-[1.5rem] font-medium leading-[1.45] text-navy md:text-[2rem]">
                    {prog.title}
                  </h3>

                  {/* 引きコピー（価値の一言：リード） */}
                  <p className="mt-4 max-w-[540px] font-ja text-[15px] font-medium leading-[1.75] text-navy md:text-[17px]">
                    {prog.catch}
                  </p>

                  {/* 説明 */}
                  <p className="mt-3 mb-6 max-w-[560px] font-ja text-[13px] font-light leading-[1.9] text-muted">
                    {prog.desc}
                  </p>

                  {/* 要点（2列） */}
                  <div className="mb-8 grid max-w-[620px] grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-8 md:gap-y-2">
                    {prog.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: c }}
                        />
                        <span className="font-ja text-[13px] leading-[1.7] text-navy">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={prog.href}
                    className="group inline-flex items-center gap-2 border-b pb-[3px] font-ja text-[13px] font-medium"
                    style={{ color: c, borderColor: `color-mix(in srgb, ${c} 33%, transparent)` }}
                  >
                    詳しく見る
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
