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
