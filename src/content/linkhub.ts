/**
 * /link（リンクハブページ）専用データ。
 * SNSプロフィール（Instagram/YouTube/X/Facebook）からのみ到達する独立ページで使用する。
 * リンク先URLは仮のものを含む。差し替え時はこのファイルのみ更新すればよい。
 */

const UTM_MEDIUM = "utm_source=linkhub&utm_medium=bio";

/** 各リンクの計測用 UTM パラメータ付き URL を組み立てる */
export function withUtm(url: string, content: string): string {
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}${UTM_MEDIUM}&utm_content=${content}`;
}

/**
 * href（UTM付きURL）と cardType を同じ値から生成する。
 * cardType はカードクリック時に GA4 へ送る card_click イベントの card_type パラメータで、
 * utm_content と同じ値にして GA4側の集計とUTM計測を一致させる（analytics.trackCardClick参照）。
 */
function linkItem(url: string, cardType: string) {
  return { cardType, href: withUtm(url, cardType) };
}

/**
 * 公式SNSの素のURL（UTMなし）。
 * schema.org の sameAs（src/components/seo/StructuredData.tsx）にも使うため、
 * UTM付きリンクとは別に公開している。
 */
export const SOCIAL_URLS = {
  instagram: "https://www.instagram.com/maru.ai.tech/",
  x: "https://x.com/tatsuo1020",
  facebook: "https://www.facebook.com/maruaiiot",
  youtube: "https://www.youtube.com/channel/UCm_Bd32WmHHMNBQWv1f2R0w",
} as const;

export const LINKHUB = {
  profile: {
    name: "株式会社〇",
    nameEn: "maru Inc.",
    tagline: "AI・システム開発 ／ AI・しごと学校",
  },

  /**
   * 最新コンテンツ導線（ブログ）。
   * YouTube動画は未公開のため一旦非表示。公開再開時は "youtube" エントリを復活させる。
   */
  latest: [
    {
      key: "blog",
      label: "最新ブログ記事",
      title: "最新記事をチェックする",
      ...linkItem("https://aiiot.jp/", "blog_latest"),
    },
  ],

  /** 個人向け / 法人向け / コーポレートサイト CTA カード（色分け必須） */
  ctas: [
    {
      key: "school",
      variant: "personal" as const,
      eyebrow: "個人の方へ ／ AI教育",
      heading: "学びたい方へ",
      body: "未経験からAIを仕事にする、実践型オンラインスクール。",
      buttonLabel: "AIしごと学校 入学案内",
      ...linkItem("https://www.ai-career-academy.com/", "school"),
    },
    {
      key: "business",
      variant: "corporate" as const,
      eyebrow: "企業・法人の方へ ／ AI開発",
      heading: "企業・法人の方へ",
      body: "AI・システム開発、DX支援のご相談を承ります。",
      buttonLabel: "開発のご相談はこちら",
      ...linkItem("/contact", "business"),
    },
    {
      key: "home",
      variant: "site" as const,
      eyebrow: "コーポレートサイト",
      heading: "株式会社〇について\n詳しく知る",
      body: "Mission・事業内容・プロジェクト実績など、会社の詳しい情報はこちら。",
      buttonLabel: "ホームページを見る",
      ...linkItem("/", "home"),
    },
  ],

  /** SNSアイコン行 */
  socials: [
    { key: "instagram", label: "Instagram", ...linkItem(SOCIAL_URLS.instagram, "sns_instagram") },
    { key: "x", label: "X", ...linkItem(SOCIAL_URLS.x, "sns_x") },
    { key: "facebook", label: "Facebook", ...linkItem(SOCIAL_URLS.facebook, "sns_facebook") },
    { key: "youtube", label: "YouTube", ...linkItem(SOCIAL_URLS.youtube, "sns_youtube") },
  ],
} as const;
