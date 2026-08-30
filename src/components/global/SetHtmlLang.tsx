"use client";

import { useEffect } from "react";
import type { GLang } from "@/content/global";

/**
 * <html lang> を英語・フランス語ページでだけ切り替える。
 * root layout の <html lang="ja"> はサイト全体で共有されており、そこへ
 * headers() 等でパス判定を持ち込むとサイト全体が動的レンダリングになってしまうため、
 * ここではクライアント側でこのページのときだけ上書きする（アンマウント時に "ja" へ戻す）。
 */
export function SetHtmlLang({ lang }: { lang: GLang }) {
  useEffect(() => {
    if (lang === "ja") return;
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [lang]);

  return null;
}
