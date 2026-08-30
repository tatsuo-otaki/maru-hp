import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Maru Global（/global）専用のプロキシ。適用範囲は matcher で /global 系のみに限定しており、
 * 他のページの静的生成・レンダリングには一切影響しない（ページを描画する前にリダイレクトする
 * だけで、root layout での headers() 読み取りのような「サイト全体が動的化する」問題は起きない）。
 *
 * 挙動：
 * - 初回訪問（Cookie未保存）で /global（日本語）に来た場合のみ、ブラウザの Accept-Language を見て
 *   英語・フランス語が優先されていれば /global/en・/global/fr へ自動的に案内する。
 * - 一度でも Cookie が保存されていれば（自動判定済み、または言語切替での手動選択済み）、
 *   以降 /global への直接アクセスは常に日本語をそのまま表示する（自動判定で上書きしない）。
 * - /global/en・/global/fr への直接アクセス・手動選択時は、その言語を Cookie に記憶する。
 * - Next.js の <Link> によるプリフェッチ（実際のクリックではない裏読み込み）では
 *   Cookie を変更しない。
 */

const COOKIE = "maru_global_lang";
const SUPPORTED = ["ja", "en", "fr"] as const;
type SupportedLang = (typeof SUPPORTED)[number];
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function isPrefetch(request: NextRequest): boolean {
  return (
    request.headers.get("next-router-prefetch") !== null ||
    request.headers.get("purpose") === "prefetch" ||
    request.headers.get("sec-purpose")?.includes("prefetch") === true
  );
}

function detectLang(acceptLanguage: string | null): SupportedLang {
  if (!acceptLanguage) return "ja";
  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";q=");
      const q = qPart ? Number.parseFloat(qPart) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isNaN(q) ? 1 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    const short = tag.split("-")[0];
    if ((SUPPORTED as readonly string[]).includes(short)) return short as SupportedLang;
  }
  return "ja";
}

export function proxy(request: NextRequest) {
  if (isPrefetch(request)) return NextResponse.next();

  const { pathname } = request.nextUrl;

  if (pathname === "/global/en" || pathname === "/global/fr") {
    const lang: SupportedLang = pathname === "/global/en" ? "en" : "fr";
    const res = NextResponse.next();
    res.cookies.set(COOKIE, lang, { maxAge: COOKIE_MAX_AGE, path: "/global" });
    return res;
  }

  if (pathname === "/global") {
    const hasCookie = request.cookies.has(COOKIE);
    if (!hasCookie) {
      const detected = detectLang(request.headers.get("accept-language"));
      if (detected !== "ja") {
        const url = request.nextUrl.clone();
        url.pathname = `/global/${detected}`;
        const res = NextResponse.redirect(url);
        res.cookies.set(COOKIE, detected, { maxAge: COOKIE_MAX_AGE, path: "/global" });
        return res;
      }
    }
    const res = NextResponse.next();
    res.cookies.set(COOKIE, "ja", { maxAge: COOKIE_MAX_AGE, path: "/global" });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/global", "/global/en", "/global/fr"],
};
