"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { GLOBAL_COLOR } from "@/components/global/colors";
import { GLOBAL, type GLang } from "@/content/global";

export function GlobalWhoWeWork({ lang }: { lang: GLang }) {
  const reduced = usePrefersReducedMotion();
  return (
    <section className="bg-surface px-6 py-16 md:px-20 md:py-24">
      <Reveal className="mb-10">
        <div className="mb-4 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{GLOBAL.who.label}</SectionLabel>
        </div>
        <h2 className="font-ja text-[1.375rem] leading-[1.4] font-normal text-navy md:text-[2.125rem]">
          {GLOBAL.who.headline[lang]}
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        {GLOBAL.who.categories.map((cat, i) => (
          <motion.div
            key={cat.label.en}
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={reduced ? undefined : { duration: 0.35, delay: i * 0.04 }}
            className="flex items-center gap-2.5 rounded-card border border-line bg-white p-4"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: GLOBAL_COLOR[cat.color] }}
            />
            <span className="font-ja text-[10.5px] leading-[1.5] text-navy md:text-[11px]">{cat.label[lang]}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
