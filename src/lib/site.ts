/** サイト共通の定数・ナビゲーション定義（データと表示を分離） */

export const SITE = {
  name: "株式会社〇",
  nameEn: "maru Inc.",
  mission: "幸せに働ける人を世界中に増やす。",
  /** AI・しごと学校（既存の外部サイト） */
  schoolUrl: "https://www.ai-career-academy.com/",
  /** maru のブログ（既存の外部サイト） */
  blogUrl: "https://aiiot.jp/",
} as const;

/**
 * Google Analytics 4 の測定ID（公開値。ブラウザに露出する前提の値）。
 * Cookie 同意（accepted）時のみ読み込む。環境変数で上書き可能。
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-40DF1ZJG9J";

/**
 * サイトの公開 URL（末尾スラッシュなし）。
 * 優先順位：NEXT_PUBLIC_SITE_URL（独自ドメイン設定用）
 *   → Vercel 本番ドメイン（自動）→ ローカル。
 * OGP / sitemap / canonical の絶対 URL に使う。
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export type NavItem = {
  label: string;
  href: string;
  /** 外部サイトへのリンク（別タブで開く） */
  external?: boolean;
};

/**
 * グローバルナビ（ヘッダー）
 * ※ 会社概要は「私たちについて(/about)」に統合。AI・しごと学校は外部サイト。
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "私たちについて", href: "/about" },
  { label: "事業内容", href: "/business" },
  { label: "企業・自治体の方へ", href: "/partners" },
  { label: "Global", href: "/global" },
  { label: "AI・しごと学校", href: SITE.schoolUrl, external: true },
  { label: "ブログ", href: SITE.blogUrl, external: true },
  { label: "お問い合わせ", href: "/contact" },
];

/** フッターのリンク */
export const FOOTER_ITEMS: NavItem[] = [
  { label: "私たちについて", href: "/about" },
  { label: "事業内容", href: "/business" },
  { label: "企業・自治体の方へ", href: "/partners" },
  { label: "Global", href: "/global" },
  { label: "AI・しごと学校", href: SITE.schoolUrl, external: true },
  { label: "ブログ", href: SITE.blogUrl, external: true },
  { label: "ニュース・プレス", href: "/news" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
];
