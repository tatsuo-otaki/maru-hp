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
  href: string;
  /** 外部リンク（別タブ） */
  external?: boolean;
};

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
      category: "メディア掲載",
      title: "クリエイターズステーション「風雲会社伝」にインタビューが掲載されました",
      outlet: "クリエイターズステーション",
      href: "https://www.creators-station.jp/interview/legends/32986",
      external: true,
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
  ] satisfies NewsItem[],
} as const;
