"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { GLOBAL, type GLang } from "@/content/global";

export function GlobalWhy({ lang }: { lang: GLang }) {
  const reduced = usePrefersReducedMotion();
  const left = GLOBAL.why.left[lang];
  const right = GLOBAL.why.right[lang];

  const itemAnim = (dir: -1 | 1, i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, x: 12 * dir },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true } as const,
          transition: { duration: 0.4, delay: i * 0.07 },
        };

  return (
    <section className="bg-surface px-6 py-16 md:px-20 md:py-24">
      <Reveal className="mb-12 md:mb-14">
        <div className="mb-5 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{GLOBAL.why.label}</SectionLabel>
        </div>
        <h2 className="mb-4 max-w-[720px] font-ja text-[1.375rem] leading-[1.45] font-normal text-navy md:text-[2.375rem]">
          {GLOBAL.why.headlineLines[lang].map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="max-w-[560px] font-ja text-[13px] leading-loose font-light text-muted">{GLOBAL.why.lead[lang]}</p>
      </Reveal>

      <div className="flex max-w-[820px] flex-col items-stretch gap-6 md:flex-row md:items-center md:gap-0">
        {/* 左：既に存在するもの */}
        <div className="flex flex-1 flex-col gap-2.5">
          {left.map((item, i) => (
            <motion.div
              key={item}
              {...itemAnim(-1, i)}
              className="flex items-center justify-start gap-2.5 md:justify-end"
            >
              <span className="font-ja text-[13px] font-medium text-navy">{item}</span>
              <span aria-hidden="true" className="h-[7px] w-[7px] shrink-0 rounded-full bg-teal" />
            </motion.div>
          ))}
        </div>

        {/* 中心：Maru（CONNECTION） */}
        <div className="flex shrink-0 flex-col items-center px-0 py-2 md:px-8">
          <div className="hidden h-15 w-15 items-center justify-center rounded-full border-[1.5px] border-teal/35 bg-warm md:flex">
            <Image src="/maru-mark.png" alt="" width={38} height={38} className="h-[38px] w-[38px] object-contain" />
          </div>
          <span className="mt-2 hidden font-en text-[8px] font-semibold tracking-[0.12em] text-teal uppercase md:block">
            Connection
          </span>
          <div aria-hidden="true" className="h-10 w-px bg-teal/25 md:hidden" />
        </div>

        {/* 右：新しく生まれるもの */}
        <div className="flex flex-1 flex-col gap-2.5">
          {right.map((item, i) => (
            <motion.div key={item} {...itemAnim(1, i)} className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-[7px] w-[7px] shrink-0 rounded-full bg-amber" />
              <span className="font-ja text-[13px] font-medium text-navy">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
