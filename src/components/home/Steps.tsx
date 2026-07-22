"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { STEPS } from "@/content/home";

export function Steps() {
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="steps" className="relative overflow-hidden bg-surface">
      {/* 背景の薄い〇 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[-160px] h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-[rgba(15,31,61,0.04)]"
      />

      {/* 見出し */}
      <Reveal className="relative mb-12 text-center md:mb-16">
        <div className="flex items-center justify-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{STEPS.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>
        <h2 className="mt-5 font-ja text-[1.5rem] font-medium leading-[1.55] text-navy md:text-[2.25rem]">
          {STEPS.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] font-ja text-body leading-relaxed text-muted">
          {STEPS.intro}
        </p>
      </Reveal>

      {/* タイムライン */}
      <div className="relative">
        {/* 接続線（PC のみ・pathLength で描画）。ノード円の中心 y=32px に合わせる */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-8 right-[calc(12.5%+4px)] left-[calc(12.5%+4px)] z-0 hidden h-0.5 md:block"
        >
          <svg
            className="block h-0.5 w-full"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="var(--color-teal)"
              strokeWidth="0.4"
              strokeDasharray="2 3"
              opacity="0.4"
              initial={reduced ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={
                reduced
                  ? undefined
                  : { duration: 1.2, ease: "easeInOut", delay: 0.3 }
              }
            />
          </svg>
        </div>

        <ol className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {STEPS.steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={reduced ? 0 : 0.2 + i * 0.1}
              className="flex flex-col items-center text-center"
            >
              <li className="flex flex-col items-center">
                {/* ノード円 */}
                <span className="relative z-20 mb-5 flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-teal bg-white shadow-[0_2px_12px_rgba(45,139,125,0.12)]">
                  <span className="font-en text-[8px] font-semibold uppercase tracking-[0.15em] text-teal">
                    STEP
                  </span>
                  <span className="font-en text-[14px] font-bold text-teal">
                    {step.num}
                  </span>
                </span>
                <span className="mb-2 font-en text-[8px] font-semibold uppercase tracking-[0.18em] text-teal">
                  {step.en}
                </span>
                <span className="mb-3 font-ja text-[18px] font-medium text-navy">
                  {step.ja}
                </span>
                <p className="max-w-[220px] font-ja text-[12px] leading-[1.85] text-muted">
                  {step.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* 強調 */}
      <Reveal delay={reduced ? 0 : 0.3} className="mt-14 text-center">
        <p className="font-ja text-body-lg font-medium text-navy">
          {STEPS.emphasis}
        </p>
      </Reveal>
    </Section>
  );
}
