/** サイト共通の定数・ナビゲーション定義（データと表示を分離） */

export const SITE = {
  name: "株式会社〇",
  nameEn: "maru Inc.",
  mission: "幸せに働ける人を世界中に増やす。",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** グローバルナビ（ヘッダー） */
export const NAV_ITEMS: NavItem[] = [
  { label: "私たちについて", href: "/about" },
  { label: "事業内容", href: "/business" },
  { label: "プロジェクト・実績", href: "/projects" },
  { label: "会社情報", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
];

/** フッターのリンク */
export const FOOTER_ITEMS: NavItem[] = [
  { label: "私たちについて", href: "/about" },
  { label: "事業内容", href: "/business" },
  { label: "プロジェクト・実績", href: "/projects" },
  { label: "ニュース・プレス", href: "/news" },
  { label: "会社情報", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
];
