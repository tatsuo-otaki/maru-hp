"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

type Parallax = { x: MotionValue<number>; y: MotionValue<number> };

/**
 * カーソル位置に応じて数 px 連動する視差用の spring 値を返す。
 * PC（pointer: fine）かつ reduced-motion 無効時のみ動く。タッチ端末では静止。
 * motion value を返すだけなので再レンダーを起こさない。
 */
export function useMouseParallax(range = 12): Parallax {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 22, damping: 16 });
  const sy = useSpring(y, { stiffness: 22, damping: 16 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      x.set(nx * range);
      y.set(ny * range);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y, range]);

  return { x: sx, y: sy };
}
