"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { GLOBAL, type GLang } from "@/content/global";

/** Current Focus / Next Steps。Research → Partner → Use Case → Pilot → Business Model → Scale */
export function GlobalRoadmap({ lang }: { lang: GLang }) {
  const reduced = usePrefersReducedMotion();
  const steps = GLOBAL.roadmap.steps;

  return (
    <section className="bg-surface px-6 py-16 md:px-20 md:py-24">
      <Reveal className="mb-11">
        <div className="mb-4 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{GLOBAL.roadmap.label}</SectionLabel>
        </div>
        <h2 className="font-ja text-[1.375rem] leading-[1.4] font-normal text-navy md:text-[2.125rem]">
          {GLOBAL.roadmap.headline[lang]}
        </h2>
      </Reveal>

      {/* Mobile：縦 */}
      <div className="flex flex-col md:hidden">
        {steps.map((step, i) => (
          <div key={step.label.en}>
            <motion.div
              initial={reduced ? false : { opacity: 0, x: -10 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={reduced ? undefined : { duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-3.5 py-1"
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[1.5px] ${
                  step.active ? "border-teal bg-teal/10" : "border-muted/40 bg-muted/5"
                }`}
              >
                <span className={`block h-[7px] w-[7px] rounded-full ${step.active ? "bg-teal" : "bg-muted/50"}`} />
              </span>
              <div className="pt-1">
                <p className={`font-ja text-[13px] ${step.active ? "font-semibold text-navy" : "font-normal text-muted"}`}>
                  {step.label[lang]}
                </p>
                <p className="font-ja text-[11px] font-light text-muted">{step.desc[lang]}</p>
              </div>
            </motion.div>
            {i < steps.length - 1 && <div aria-hidden="true" className="ml-[15px] h-5 w-0.5 bg-teal/25" />}
          </div>
        ))}
      </div>

      {/* Desktop：横トラック */}
      <div className="relative hidden md:block">
        <div aria-hidden="true" className="absolute top-5 right-0 left-0 h-px bg-line" />
        <div className="grid" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.label.en}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reduced ? undefined : { duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <span
                className={`relative z-10 mb-3.5 flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] ${
                  step.active ? "border-teal bg-teal/10" : "border-muted/40 bg-warm"
                }`}
              >
                <span className={`block h-[9px] w-[9px] rounded-full ${step.active ? "bg-teal" : "bg-muted/40"}`} />
              </span>
              <p className={`mb-1 font-ja text-[11px] ${step.active ? "font-semibold text-navy" : "font-normal text-muted"}`}>
                {step.label[lang]}
              </p>
              <p className="font-ja text-[9.5px] leading-relaxed font-light text-muted">{step.desc[lang]}</p>
              {step.active && (
                <span className="mt-2 rounded-[2px] border border-teal/55 px-1.5 py-0.5 font-en text-[7.5px] font-semibold tracking-[0.1em] text-teal uppercase">
                  Now
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
