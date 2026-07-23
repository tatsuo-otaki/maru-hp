"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ハッシュ付きURL（/about#vision 等）で対象要素まで確実にスクロールする。
 * Next.js App Router はハードロード時にアニメーションや遅延レイアウトの影響で
 * ハッシュスクロールを取りこぼすことがあるため、マウント後に自前で補正する。
 * scroll-margin-top（globals.css）で sticky ヘッダー分のオフセットは吸収される。
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));

    // ルーター側のトップスクロールに勝つよう、少し遅らせて数回スクロールする。
    // 要素が未レンダリングの場合はリトライする。
    const timers: number[] = [];
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
      return !!el;
    };
    [0, 60, 160, 320].forEach((delay) => {
      timers.push(window.setTimeout(scrollToTarget, delay));
    });

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [pathname]);

  return null;
}
