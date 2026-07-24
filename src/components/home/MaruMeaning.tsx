"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { MARU_MEANING } from "@/content/home";

export function MaruMeaning() {
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="maru" className="relative overflow-hidden bg-surface">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-20">
        {/* 左：〇と意味語の図 */}
        <motion.svg
          viewBox="0 0 360 360"
          className="block w-[300px] shrink-0 md:w-[360px]"
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={reduced ? undefined : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          role="img"
          aria-label="〇に込めた意味：つながり、循環、調和、肯定、多様性、ご縁"
        >
          <circle cx={180} cy={180} r={174} fill="none" stroke="rgba(45,139,125,0.22)" strokeWidth="1.5" />
          <circle cx={180} cy={180} r={152} fill="none" stroke="rgba(45,139,125,0.09)" strokeWidth="1" />

          <g transform="translate(180,180)">
            <motion.g
              animate={reduced ? undefined : { rotate: [0, 2, -1, 0] }}
              transition={
                reduced ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }
              }
            >
              {/* 中央の〇は公式ロゴ画像を使用 */}
              <image href="/maru-logo.png" x={-46} y={-46} width={92} height={92} />
            </motion.g>
          </g>

          {MARU_MEANING.words.map((w, i) => (
            <motion.text
              key={w.word}
              x={w.x}
              y={w.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="var(--font-ja)"
              fontSize={w.size}
              fontWeight="500"
              fill="var(--color-teal)"
              opacity="0.82"
              letterSpacing="0.04em"
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 0.82 }}
              viewport={{ once: true }}
              transition={
                reduced
                  ? undefined
                  : { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.07 }
              }
            >
              {w.word}
            </motion.text>
          ))}
        </motion.svg>

        {/* 右：本文 */}
        <Reveal delay={0.1} className="md:flex-1">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
            <SectionLabel>{MARU_MEANING.label}</SectionLabel>
          </div>
          <h2 className="mt-5 font-ja text-[1.5rem] font-medium leading-[1.55] text-navy md:text-[2rem]">
            {MARU_MEANING.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 font-ja text-body font-light leading-loose text-muted">
            {MARU_MEANING.body}
          </p>
          <div className="mt-8">
            <TextLink href={MARU_MEANING.cta.href}>{MARU_MEANING.cta.label}</TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
