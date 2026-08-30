"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GLOBAL, type GLang } from "@/content/global";

/** 4つのCTAは架空のURLを作らず、既存ページ／同ページ内アンカーへ接続する */
const CTA_HREFS = ["/contact", "/business#projects", "#global-africa", "/contact"];

export function GlobalCta({ lang }: { lang: GLang }) {
  const buttons = GLOBAL.cta.buttons[lang];

  return (
    <section id="global-cta" className="relative overflow-hidden border-t border-line bg-warm px-6 py-18 md:px-20 md:py-27">
      {[110, 200].map((r) => (
        <div
          key={r}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-[-25%] -translate-y-1/2 rounded-full border border-teal/[0.06]"
          style={{ width: r * 2, height: r * 2 }}
        />
      ))}

      <Reveal className="relative max-w-[680px]">
        <div className="mb-6 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{GLOBAL.cta.label}</SectionLabel>
        </div>
        <h2 className="mb-10 font-ja text-[1.5rem] leading-[1.4] font-normal text-navy md:text-[2.75rem]">
          {GLOBAL.cta.headlineLines[lang].map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="flex flex-wrap gap-2.5">
          {buttons.map((btn, i) => (
            <motion.div key={btn} whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <Link
                href={CTA_HREFS[i]}
                className={`inline-flex items-center gap-1.5 rounded-btn border px-5 py-3 font-ja text-[12px] font-medium ${
                  i === 0 ? "border-teal bg-teal text-white" : "border-line text-navy hover:bg-navy/5"
                }`}
              >
                {btn}
                <span aria-hidden="true" className="font-en text-[11px]">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
