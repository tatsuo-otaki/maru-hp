"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { ECOSYSTEM } from "@/content/ecosystem";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  muted: "var(--color-muted)",
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Mobile 用の縦ストーリー型フロー。
 * PCのネットワーク図をそのまま縮小せず、「出会う→挑戦する→学ぶ・経験する→次の可能性へ」という
 * 時系列の物語として再構成する（ノードとコネクタが交互に並ぶ）。SVGではなくHTMLで組むため、
 * 読み上げ・検索エンジンからもそのまま内容を理解できる。
 */
export function EcosystemMobileFlow() {
  const reduced = usePrefersReducedMotion();

  const anim = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" } as const,
          transition: { duration: 0.5, ease: EASE, delay },
        };

  return (
    <ol className="relative mx-auto max-w-[420px] px-6 py-4 md:hidden">
      {/* 縦の接続線 */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-4 bottom-4 left-[27px] w-px bg-line"
      />

      {ECOSYSTEM.mobileSteps.map((step, i) => {
        if (step.type === "connector") {
          return (
            <motion.li key={`${step.label}-${i}`} className="relative py-5 pl-14" {...anim(i * 0.06)}>
              <span
                aria-hidden="true"
                className="absolute top-1/2 left-[23px] h-2 w-2 -translate-y-1/2 rounded-full border border-line bg-warm"
              />
              <p className="font-ja text-[12.5px] font-medium text-navy">{step.label}</p>
              <p className="mt-0.5 font-ja text-[11.5px] text-muted">{step.sub}</p>
            </motion.li>
          );
        }
        const c = COLOR[step.color];
        return (
          <motion.li key={`${step.label}-${i}`} className="relative py-3 pl-14" {...anim(i * 0.06)}>
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-[19px] h-[13px] w-[13px] -translate-y-1/2 rounded-full border-2 border-warm"
              style={{ backgroundColor: c }}
            />
            <div className="rounded-card border border-line bg-white p-5 shadow-card">
              <p className="font-ja text-[15px] font-medium text-navy">{step.label}</p>
              <p className="mt-1.5 font-ja text-[12.5px] text-muted">{step.sub}</p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
