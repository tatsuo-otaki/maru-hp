"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** 表示開始の遅延（秒） */
  delay?: number;
};

/**
 * ビューポート進入時に一度だけフェード＋上移動で表示する汎用ラッパー。
 * motion-spec.md の Section Entrance（opacity 0→1 / y 28→0 / 0.55s）に準拠。
 * reduced-motion では素の要素として静止表示する。
 * Server Component から children を渡して使える。
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
