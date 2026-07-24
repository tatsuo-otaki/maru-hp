/**
 * 企業・自治体の方へ（/partners）ハブページのコンテンツ
 * 出典：連携パートナー募集ほか各プログラム依頼書。
 * ※ 保証表現・公的認証を思わせる表現は使用しない方針。
 */

export type Accent = "teal" | "amber" | "navy";

export const PARTNERS_HUB = {
  hero: {
    label: "For Partners",
    titleLines: ["企業・自治体の皆さまと、", "教育から仕事までをつなぐ。"],
    lead: "株式会社〇・AI・しごと学校は、AI教育、実務実習、地域課題の解決、多様な人材への仕事の提供を通じて、企業・自治体・教育機関・就労支援機関・海外の人材と連携しています。学びを実務と仕事につなぎ、それぞれが価値を提供し合う循環をつくります。",
  },
  message:
    "教育だけで終わらせず、学びを実務と仕事につなげる。企業や自治体が持つ課題を、人材が成長する機会に変えていきます。",

  programsHeading: "3つのプログラム",
  programsIntro:
    "目的に合わせて、人材育成・共創・社会貢献の3つのプログラムをご用意しています。まだ具体的な計画が決まっていない段階からご相談いただけます。",
  programs: [
    {
      title: "企業協働型AI人材育成プログラム",
      en: "AI Talent Development",
      desc: "AIを学びたい人と、育成・採用・DXを進めたい企業をつなぐ実践型プログラム。企業の実際の課題を教材に、採用前に実務能力を確認できます。",
      href: "/partners/ai-training",
      color: "teal" as Accent,
    },
    {
      title: "実務実習・共創プロジェクト",
      en: "Co-Creation Projects",
      desc: "企業・自治体の実際の課題やアイデアを、学生と一緒に実証・PoC。完成品ではなく、課題を見つけ、考え、試した経験を実績にします。",
      href: "/partners/co-creation",
      color: "amber" as Accent,
    },
    {
      title: "企業CSR共創パートナープログラム",
      en: "CSR Co-Creation",
      desc: "企業のCSR・社会貢献活動を、企画から実行・成果測定・報告まで支援。企業の理念や重点課題に合わせて、実際の活動を設計します。",
      href: "/partners/csr",
      color: "navy" as Accent,
    },
  ],

  recruitHeading: "連携パートナー募集",
  recruitIntro:
    "AI教育、実務実習、地域課題の解決、多様な人材への仕事の提供を進めるため、さまざまな組織との連携を募集しています。小さな協力からご相談いただけます。",
  recruit: [
    {
      title: "地方の専門学校・教育機関の方",
      desc: "メタバースを活用したAI講義や、企業課題を題材とした実務実習を共同で実施します。",
      color: "teal" as Accent,
    },
    {
      title: "自治体の方",
      desc: "地域や行政の課題を、学生やAI人材とともに実証します。",
      color: "amber" as Accent,
    },
    {
      title: "就労継続支援A型事業所の方",
      desc: "AIの活用方法を学び、新しい仕事の獲得や業務の付加価値向上を目指します。",
      color: "navy" as Accent,
    },
    {
      title: "仕事を依頼したい企業の方",
      desc: "学生・A型事業所・国内外の人材と連携し、AI・IT・データ関連業務に対応します。",
      color: "teal" as Accent,
    },
    {
      title: "CSR・社会貢献活動を検討している企業の方",
      desc: "仕事、機器、課題、教育機会など、企業のリソースを人材育成や社会課題の解決に生かします。",
      color: "amber" as Accent,
    },
  ],

  cta: { label: "連携について相談する", href: "/contact" },
} as const;
