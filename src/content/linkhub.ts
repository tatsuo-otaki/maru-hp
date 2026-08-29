/**
 * /link（リンクハブページ）専用データ。
 * SNSプロフィール（Instagram/YouTube/X/Facebook）からのみ到達する独立ページで使用する。
 * リンク先URLは仮のものを含む。差し替え時はこのファイルのみ更新すればよい。
 */

const UTM_MEDIUM = "utm_source=linkhub&utm_medium=bio";

/** 各リンクの計測用 UTM パラメータ付き URL を組み立てる */
function withUtm(url: string, content: string): string {
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

export const LINKHUB = {
  profile: {
    name: "株式会社〇",
    nameEn: "maru Inc.",
    tagline: "AI・システム開発 ／ AI・しごと学校",
  },

  /** 最新コンテンツ導線（YouTube / ブログ） */
  latest: [
    {
      key: "youtube",
      label: "最新 YouTube 動画",
      title: "最新動画をチェックする",
      ...linkItem("https://www.youtube.com/channel/UCm_Bd32WmHHMNBQWv1f2R0w", "youtube_latest"),
    },
    {
      key: "blog",
      label: "最新ブログ記事",
      title: "最新記事をチェックする",
      ...linkItem("https://aiiot.jp/", "blog_latest"),
    },
  ],

  /** 個人向け / 法人向け CTA カード（色分け必須） */
  ctas: [
    {
      key: "school",
      variant: "personal" as const,
      number: "01",
      eyebrow: "個人の方へ ／ AI教育",
      heading: "学びたい方へ",
      body: "未経験からAIを仕事にする、実践型オンラインスクール。",
      buttonLabel: "AIしごと学校 入学案内",
      ...linkItem("https://mcie.jp/", "school"),
    },
    {
      key: "business",
      variant: "corporate" as const,
      number: "02",
      eyebrow: "企業・法人の方へ ／ AI開発",
      heading: "企業・法人の方へ",
      body: "AI・システム開発、DX支援のご相談を承ります。",
      buttonLabel: "開発のご相談はこちら",
      ...linkItem("/contact", "business"),
    },
  ],

  /** SNSアイコン行 */
  socials: [
    { key: "instagram", label: "Instagram", ...linkItem("https://www.instagram.com/maru.ai.tech/", "sns_instagram") },
    { key: "x", label: "X", ...linkItem("https://x.com/tatsuo1020", "sns_x") },
    { key: "facebook", label: "Facebook", ...linkItem("https://www.facebook.com/maruaiiot", "sns_facebook") },
    {
      key: "youtube",
      label: "YouTube",
      ...linkItem("https://www.youtube.com/channel/UCm_Bd32WmHHMNBQWv1f2R0w", "sns_youtube"),
    },
  ],
} as const;
