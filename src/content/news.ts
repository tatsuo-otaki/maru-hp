/**
 * ニュース・プレス（/news）データ
 * 現時点はメディア掲載・イベント登壇の実績（外部リンク）を中心に掲載。
 * お知らせ・プレスリリースの内部記事は今後追加予定。
 */

export type NewsCategory =
  | "お知らせ"
  | "プレスリリース"
  | "プロジェクト"
  | "イベント・登壇"
  | "メディア掲載";

export const NEWS_CATEGORY_COLOR: Record<NewsCategory, "teal" | "amber" | "navy"> = {
  "お知らせ": "teal",
  "プレスリリース": "amber",
  "プロジェクト": "teal",
  "イベント・登壇": "navy",
  "メディア掲載": "amber",
};

export type NewsItem = {
  category: NewsCategory;
  title: string;
  /** 媒体・主催など */
  outlet?: string;
  /** 年（判明分のみ） */
  year?: string;
  /** リンク先（無い場合は非リンク表示。slug がある場合は省略可） */
  href?: string;
  /** 外部リンク（別タブ） */
  external?: boolean;
  /** 自社の記事詳細ページ（/news/{slug}）を持つ場合に設定。本文は src/content/news/{slug}.mdx */
  slug?: string;
  /** ISO日付（例 "2026-10-05"）。slug付き記事の公開日として使用 */
  date?: string;
  /** 一覧・OGP descriptionに使う簡易要約（任意） */
  excerpt?: string;
};

/**
 * 項目のリンク先を1箇所で決定する。
 * href が明示されていれば最優先（既存の外部リンク項目の挙動を維持）、
 * なければ slug から自社記事詳細ページへのリンクを組み立てる。
 */
export function newsLink(item: NewsItem): { href: string; external: boolean } | null {
  if (item.href) return { href: item.href, external: !!item.external };
  if (item.slug) return { href: `/news/${item.slug}`, external: false };
  return null;
}

export const NEWS_PAGE = {
  hero: {
    label: "News & Press",
    titleLines: ["News & Press"],
    lead: "株式会社〇および代表のメディア掲載、イベント登壇、プロジェクトなどをご紹介します。取材・出演・講演などのご相談も承っています。",
  },
  /** 報道・メディア関係者向けの導線 */
  mediaNote:
    "取材、インタビュー、講演、寄稿、番組出演などのご相談は、お問い合わせよりお気軽にご連絡ください。",
  items: [
    {
      category: "お知らせ",
      title: "ニュース・プレスページをリニューアルしました",
      slug: "renewal-news-press",
      date: "2026-10-05",
      excerpt:
        "お知らせやプレスリリースを、詳細記事としてご覧いただけるようになりました。",
    },
    {
      category: "メディア掲載",
      title: "NHK「凄ワザ！夢かなえますSP」に開発リーダーとして出演しました",
      outlet: "NHK",
    },
    {
      category: "メディア掲載",
      title: "ZIP-FM「Startup [N]」に出演しました",
      outlet: "ZIP-FM / YouTube",
      href: "https://www.youtube.com/watch?v=fj-d4dFoi2I",
      external: true,
    },
    {
      category: "メディア掲載",
      title: "ウズラ技研 YouTube に出演しました",
      outlet: "YouTube",
      href: "https://www.youtube.com/watch?v=pq-3rHZW2yw",
      external: true,
    },
    {
      category: "メディア掲載",
      title: "名古屋デザイン&テクノロジー専門学校のインタビューに掲載されました",
      outlet: "名古屋デザイン&テクノロジー専門学校",
      href: "https://www.nca.ac.jp/campuslife/interview_course.html",
      external: true,
    },
    {
      category: "イベント・登壇",
      title: "日本Web解析士協会のイベント（300名規模）でデータサイエンスを講義しました",
      outlet: "日本Web解析士協会 / YouTube",
      href: "https://www.youtube.com/watch?v=JRvbvgSPZ-Y",
      external: true,
    },
    {
      category: "イベント・登壇",
      title: "NAGOYA CONNECT「Web3.0」に登壇しました",
      outlet: "NAGOYA CONNECT",
      href: "https://peatix.com/event/3342331?lang=ja-jp",
      external: true,
    },
    {
      category: "イベント・登壇",
      title: "中部圏オープンイノベーションピッチ「Cent Pitch」に登壇しました",
      outlet: "Nagoya Garage",
      href: "https://garage-nagoya.or.jp/news/p14562/",
      external: true,
    },
    {
      category: "イベント・登壇",
      title: "NAGOYA BOOST 10000（第一回）で講師を務めました",
      outlet: "NAGOYA BOOST 10000",
      year: "2018",
      href: "https://nagoyaboost.jp/2018/program.html",
      external: true,
    },
    {
      category: "イベント・登壇",
      title: "Nagoya 100人カイギ に登壇しました",
      outlet: "100人カイギ",
      href: "https://100ninkaigi.com/area/nagoya",
      external: true,
    },
    {
      category: "イベント・登壇",
      title: "IoT縛りの勉強会！IoTLT vol.1（名古屋）を開催しました",
      outlet: "クリエイトベースカナヤマ",
      href: "http://www.cre8.nagoya/a175",
      external: true,
    },
    {
      category: "メディア掲載",
      title: "クリエイターズステーション「風雲会社伝」にインタビューが掲載されました",
      outlet: "クリエイターズステーション",
      href: "https://www.creators-station.jp/interview/legends/32986",
      external: true,
    },
  ] satisfies NewsItem[],
} as const;
