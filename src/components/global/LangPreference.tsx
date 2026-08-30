"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { GLang } from "@/content/global";

const STORAGE_KEY = "maru_global_lang";
const SUPPORTED: GLang[] = ["ja", "en", "fr"];

function detectPreferredLang(): GLang {
  const candidates = navigator.languages && navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  for (const raw of candidates) {
    const short = raw.toLowerCase().split("-")[0];
    if ((SUPPORTED as string[]).includes(short)) return short as GLang;
  }
  return "ja";
}

function remember(lang: GLang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // localStorage が使えない環境では何もしない（機能を諦めるだけで、動作は壊さない）
  }
}

/**
 * Maru Global の言語自動判定・記憶。
 *
 * 当初は proxy.ts（サーバー側）で Accept-Language を見て自動リダイレクトしていたが、
 * 本番（AWS CloudFront + Amplify）では /global のレスポンスがURL単位でエッジキャッシュされ、
 * ヘッダーごとに出し分けられない（Vary: Accept-Language 非対応）ため機能しなかった。
 * そのためクライアント側（このコンポーネント）で判定する。
 *
 * - /global（ja）に初めて来た訪問者だけ、ブラウザの言語設定を見て英語・フランス語が
 *   優先されていれば該当ページへ案内する。
 * - 一度でも記録されていれば（自動判定済み、または手動で言語を選択済み）、
 *   以降 /global への直接アクセスは常に日本語のまま表示する（自動判定で上書きしない）。
 * - /global/en・/global/fr では、閲覧しているという事実そのものを記録する。
 */
export function LangPreference({ lang }: { lang: GLang }) {
  const router = useRouter();

  useEffect(() => {
    if (lang !== "ja") {
      remember(lang);
      return;
    }

    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // 無視
    }

    if (stored) {
      remember("ja");
      return;
    }

    const detected = detectPreferredLang();
    if (detected === "ja") {
      remember("ja");
      return;
    }

    router.replace(`/global/${detected}`);
  }, [lang, router]);

  return null;
}
