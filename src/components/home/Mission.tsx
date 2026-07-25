"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { MISSION } from "@/content/home";

/**
 * Mission セクション。
 * ホームでは /about への導線を表示するが、/about 本編では自ページを
 * 指す循環リンクになるため showCta={false} で非表示にする。
 */
export function Mission({ showCta = true }: { showCta?: boolean }) {
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="mission" className="relative overflow-hidden py-24 text-center md:py-32">
      {/* 背景の薄い〇（ゆっくり呼吸） */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(15,31,61,0.045)]"
        animate={reduced ? undefined : { scale: [1, 1.015, 1] }}
        transition={
          reduced ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <Reveal className="relative mx-auto max-w-[600px]">
        <div className="flex items-center justify-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{MISSION.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>

        <h2 className="mt-8 font-ja text-[2rem] font-medium leading-[1.55] text-navy md:text-[2.75rem]">
          {MISSION.headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="mx-auto mt-9 font-ja text-body font-light leading-loose text-muted">
          {MISSION.body}
        </p>

        {showCta && (
          <div className="mt-12 flex justify-center">
            <TextLink href={MISSION.cta.href}>{MISSION.cta.label}</TextLink>
          </div>
        )}
      </Reveal>
    </Section>
  );
}
