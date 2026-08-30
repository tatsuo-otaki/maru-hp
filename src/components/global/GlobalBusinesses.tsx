"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { GLOBAL_COLOR } from "@/components/global/colors";
import { GLOBAL, GLOBAL_BUSINESSES, type GLang } from "@/content/global";

/**
 * 5つのグローバル事業。独立したサービスではなく循環としてつながっていることを示すため、
 * カード間に色付きの縦コネクターを挟む（Business.tsx と同じ意匠）。
 */
export function GlobalBusinesses({ lang }: { lang: GLang }) {
  const reduced = usePrefersReducedMotion();
  return (
    <section id="global-businesses">
      <div className="border-b border-line bg-warm px-6 pt-16 pb-10 md:px-20 md:pt-24 md:pb-13">
        <Reveal>
          <div className="mb-4 flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
            <SectionLabel>{GLOBAL.businesses.label}</SectionLabel>
          </div>
          <h2 className="font-ja text-[1.5rem] leading-[1.4] font-normal text-navy md:text-[2.375rem]">
            {GLOBAL.businesses.headline[lang]}
          </h2>
        </Reveal>
      </div>

      {GLOBAL_BUSINESSES.map((biz, i) => {
        const c = GLOBAL_COLOR[biz.color];
        const zebra = i % 2 === 0 ? "bg-warm" : "bg-surface";
        const prevZebra = i > 0 && (i - 1) % 2 === 0 ? "bg-warm" : "bg-surface";
        return (
          <Fragment key={biz.num}>
            {i > 0 && (
              <div className={`flex h-10 items-center justify-center ${prevZebra}`} aria-hidden="true">
                <span className="block h-8 w-0.5" style={{ backgroundColor: c, opacity: 0.35 }} />
              </div>
            )}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={reduced ? undefined : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden border-t border-line ${zebra} px-6 py-10 md:px-20 md:py-14`}
              style={{ borderLeft: `4px solid ${c}` }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 bottom-[-16px] font-en text-[7.5rem] font-extrabold tabular-nums select-none md:right-8 md:text-[13rem]"
                style={{ color: c, opacity: 0.07 }}
              >
                {biz.num}
              </span>

              <div className="relative z-10 flex flex-col gap-5 md:flex-row md:gap-16">
                <div className="flex shrink-0 items-start gap-3.5 md:w-22 md:flex-col">
                  <span className="mt-1 block h-6 w-0.5 shrink-0" style={{ backgroundColor: c }} />
                  <span className="font-en text-[1.75rem] leading-none font-bold tabular-nums md:text-[2.375rem]" style={{ color: c }}>
                    {biz.num}
                  </span>
                </div>

                <div className="flex-1">
                  <span
                    className="mb-2.5 block font-en text-[8px] font-semibold tracking-[0.18em] uppercase"
                    style={{ color: c }}
                  >
                    {biz.en}
                  </span>
                  <h3 className="mb-3.5 font-ja text-[1.125rem] leading-[1.45] font-medium text-navy md:text-[1.625rem]">
                    {biz.lead[lang]}
                  </h3>

                  <div className="mb-4.5 flex flex-wrap items-center gap-1.5">
                    {biz.flow.map((step, si) => (
                      <Fragment key={step}>
                        {si > 0 && (
                          <span aria-hidden="true" className="font-en text-[11px] text-muted">
                            →
                          </span>
                        )}
                        <span
                          className="rounded-[2px] border px-2.5 py-1 font-en text-[10px] font-semibold"
                          style={{
                            color: c,
                            borderColor: `color-mix(in srgb, ${c} 55%, transparent)`,
                            backgroundColor: `color-mix(in srgb, ${c} 12%, transparent)`,
                          }}
                        >
                          {step}
                        </span>
                      </Fragment>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {biz.keywords[lang].map((k) => (
                      <span
                        key={k}
                        className="rounded-[2px] px-2.5 py-1 font-ja text-[10px] font-medium text-navy"
                        style={{ backgroundColor: `color-mix(in srgb, ${c} 10%, transparent)` }}
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Fragment>
        );
      })}

      <motion.div
        initial={reduced ? false : { scaleX: 0 }}
        whileInView={reduced ? undefined : { scaleX: 1 }}
        viewport={{ once: true }}
        transition={reduced ? undefined : { duration: 0.6 }}
        className="h-px origin-left bg-line"
      />
    </section>
  );
}
