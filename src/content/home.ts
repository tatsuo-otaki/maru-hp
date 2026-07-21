/** トップページのコンテンツ（表示ロジックと分離。将来 CMS 化しやすい形） */

export const HERO = {
  missionLabel: "Mission",
  /** Hero 見出しは2行で表示する（docs/content-home.md） */
  missionLines: ["幸せに働ける人を", "世界中に増やす。"],
  subCopy: "楽しく働き、幸せをつくる。",
  description:
    "AI・システム開発、教育、仕事の機会づくりを通じて、誰もが自分らしく、幸せに働ける仕組みをつくります。",
  primaryCta: { label: "事業内容を見る", href: "/business" },
  secondaryCta: { label: "私たちについて", href: "/about" },
  serviceTags: [
    { num: "01", label: "AI開発", color: "text-teal" },
    { num: "02", label: "AI教育", color: "text-amber" },
    { num: "03", label: "社会参加", color: "text-navy" },
  ],
  photo: {
    // プレースホルダ写真。実写真に差し替え予定（next.config の remotePatterns も見直す）。
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=920&h=920&fit=crop&auto=format",
    alt: "多様なチームが自然光の中で協働する様子",
  },
} as const;

export const ABOUT = {
  label: "About",
  headingLines: ["技術と教育と仕事をつなぎ、", "新しい「働く」をつくる会社です。"],
  body: [
    "株式会社〇は、AI・システム開発、AI教育・人材育成、仕事と社会参加の仕組みづくりに取り組む会社です。",
    "私たちは、AIを導入することや、技術を教えることだけを目的としていません。",
    "技術によって新しい仕事を生み出し、教育によってその仕事を担える人を増やし、学んだ力を実際の仕事や社会参加につなげる。",
    "この循環をつくることで、場所や環境、身体的な条件にかかわらず、一人ひとりが自分の力を発揮できる社会を目指しています。",
  ],
  emphasis: "高い技術力と、誰も取り残さない仕組みを。",
  /** 3事業の予告（次セクションへの布石） */
  pillars: [
    {
      num: "01",
      label: "AI開発",
      desc: "企業や社会の課題を解決するシステムを企画・開発。",
      color: "var(--color-teal)",
    },
    {
      num: "02",
      label: "AI教育",
      desc: "AIを実装し、実際の仕事を遂行できる人材を育成。",
      color: "var(--color-amber)",
    },
    {
      num: "03",
      label: "社会参加",
      desc: "学んだ力を実務・就労・社会参加につなげる。",
      color: "var(--color-navy)",
    },
  ],
} as const;

export const BUSINESS = {
  label: "Business",
  headingLines: ["3つの事業をつなぎ、", "幸せに働ける人を増やします。"],
  intro:
    "開発、教育、仕事の機会を別々に提供するのではなく、一つの循環としてつなげることが、株式会社〇の特徴です。",
  items: [
    {
      num: "01",
      title: "AI・システム開発",
      en: "AI & System Development",
      color: "teal" as const,
      lead: "AIやデータを活用し、企業や社会が抱える課題を解決するシステムを企画・開発します。",
      works: [
        "AIシステム・AIエージェントの開発",
        "Webアプリケーション・業務システムの開発",
        "DX・業務効率化支援",
        "データ分析・データ活用",
        "AI導入の企画・実証実験",
        "既存業務やサービスへのAI組み込み",
      ],
      cta: { label: "AI・システム開発について", href: "/business#ai-development" },
    },
    {
      num: "02",
      title: "AI教育・人材育成",
      en: "AI Education & Training",
      color: "amber" as const,
      lead: "AIを使うだけでなく、AIを実装し、実際の仕事を遂行できる人材を育成します。",
      works: [
        "AIを活用したプログラミング教育",
        "AIエージェント・AIアプリの開発教育",
        "Python、Web開発、データ分析の技術教育",
        "実務を想定したプロジェクト型学習",
        "企業向けAI・DX人材育成",
        "学生・社会人・海外向けの教育",
      ],
      cta: { label: "AI教育・人材育成について", href: "/business#ai-education" },
    },
    {
      num: "03",
      title: "仕事と社会参加の仕組みづくり",
      en: "Social Participation Design",
      color: "navy" as const,
      lead: "教育、企業、地域、就労支援をつなぎ、誰もが学んだ力を仕事として発揮できる仕組みをつくります。",
      works: [
        "教育修了者への実務機会の提供",
        "企業案件と人材のマッチング",
        "地方人材への仕事の提供",
        "通勤が難しい人へのリモートワーク機会の提供",
        "就労継続支援A型・B型事業所との連携",
        "講師・高度人材による品質管理",
      ],
      cta: { label: "連携・協業について相談する", href: "/contact" },
    },
  ],
} as const;
