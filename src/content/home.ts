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
