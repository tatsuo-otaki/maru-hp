"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { GLOBAL, type GLang } from "@/content/global";

export function GlobalValueFlow({ lang }: { lang: GLang }) {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-dark px-6 py-18 md:px-20 md:py-27">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-80px] bottom-[-80px] h-[440px] w-[440px] rounded-full border border-white/[0.04]"
      />
      <Reveal className="relative max-w-[680px]">
        <div className="mb-7 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal/55" />
          <SectionLabel className="text-teal/80">{GLOBAL.valueFlow.label}</SectionLabel>
        </div>
        <h2 className="mb-5 font-ja text-[1.375rem] leading-[1.45] font-normal text-warm md:text-[2.5rem]">
          {GLOBAL.valueFlow.headlineLines[lang].map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mb-12 max-w-[580px] font-ja text-[13px] leading-loose font-light text-warm/50">
          {GLOBAL.valueFlow.lead[lang]}
        </p>

        <div className="flex flex-col gap-4">
          {GLOBAL.valueFlow.pairs.map((pair, i) => (
            <motion.div
              key={pair.left.en}
              initial={reduced ? false : { opacity: 0, x: -12 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={reduced ? undefined : { duration: 0.4, delay: i * 0.1 }}
              className="flex flex-wrap items-center gap-4"
            >
              <span className="min-w-[100px] rounded-[3px] border border-white/15 px-4 py-1.5 text-center font-ja text-[13px] font-medium text-warm md:min-w-[160px]">
                {pair.left[lang]}
              </span>
              <span aria-hidden="true" className="font-en text-[14px] font-light text-teal/80">
                ↔
              </span>
              <span className="min-w-[100px] rounded-[3px] border border-white/15 px-4 py-1.5 text-center font-ja text-[13px] font-medium text-warm md:min-w-[200px]">
                {pair.right[lang]}
              </span>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
