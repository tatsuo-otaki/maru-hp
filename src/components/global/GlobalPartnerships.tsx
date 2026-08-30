"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { GLOBAL_COLOR } from "@/components/global/colors";
import { GLOBAL, type GLang } from "@/content/global";

export function GlobalPartnerships({ lang }: { lang: GLang }) {
  const reduced = usePrefersReducedMotion();
  return (
    <section className="border-t border-line bg-warm px-6 py-16 md:px-20 md:py-24">
      <Reveal className="mb-10">
        <div className="mb-4 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{GLOBAL.partnerships.label}</SectionLabel>
        </div>
        <h2 className="font-ja text-[1.375rem] leading-[1.4] font-normal text-navy md:text-[2.125rem]">
          {GLOBAL.partnerships.headline[lang]}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5">
        {GLOBAL.partnerships.models.map((m, i) => (
          <motion.div
            key={m.title}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduced ? undefined : { duration: 0.4, delay: i * 0.07 }}
            className="rounded-card border border-line px-5 py-6"
            style={{ borderLeftWidth: 3, borderLeftColor: GLOBAL_COLOR[m.color] }}
          >
            <p className="mb-2 font-en text-[11px] font-bold tracking-wide" style={{ color: GLOBAL_COLOR[m.color] }}>
              {m.title}
            </p>
            <p className="font-ja text-[12px] leading-loose font-light text-muted">{m.desc[lang]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
