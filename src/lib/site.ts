/** サイト共通の定数・ナビゲーション定義（データと表示を分離） */

export const SITE = {
  name: "株式会社〇",
  nameEn: "maru Inc.",
  mission: "幸せに働ける人を世界中に増やす。",
  /** AI・しごと学校（既存の外部サイト） */
  schoolUrl: "https://mcie.jp/",
} as const;

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
  { label: "AI・しごと学校", href: SITE.schoolUrl, external: true },
  { label: "企業・自治体の方へ", href: "/partners" },
  { label: "プロジェクト・実績", href: "/projects" },
  { label: "お問い合わせ", href: "/contact" },
];

/** フッターのリンク */
export const FOOTER_ITEMS: NavItem[] = [
  { label: "私たちについて", href: "/about" },
  { label: "事業内容", href: "/business" },
  { label: "AI・しごと学校", href: SITE.schoolUrl, external: true },
  { label: "企業・自治体の方へ", href: "/partners" },
  { label: "プロジェクト・実績", href: "/projects" },
  { label: "ニュース・プレス", href: "/news" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
];
