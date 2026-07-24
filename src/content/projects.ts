/**
 * プロジェクト・実績データ（/projects）
 * 出典：代表スキルシート／メタバース情報工学学校クラウドファンディング。
 * 守秘のため相手先は概要表記に留めている。
 */

export type ProjectCategory =
  | "AI・システム開発"
  | "AI教育"
  | "データ分析・社会実装";

/** カテゴリ → アクセント色（トークン名） */
export const PROJECT_CATEGORY_COLOR: Record<ProjectCategory, "teal" | "amber" | "navy"> = {
  "AI・システム開発": "teal",
  "AI教育": "amber",
  "データ分析・社会実装": "navy",
};

export type ProjectItem = {
  title: string;
  category: ProjectCategory;
  period: string;
  summary: string;
  tags: string[];
  /** 数字などの実績ハイライト（任意） */
  highlight?: string;
};

export const PROJECTS_PAGE = {
  hero: {
    label: "Projects",
    titleLines: ["理想を、実際の活動へ。"],
    lead: "株式会社〇および代表が手がけてきた、AI・システム開発、AI教育、データ活用の実績の一部をご紹介します。国内外の企業・自治体・教育機関と連携しながら、実践を重ねています。（守秘のため、一部は概要のみ記載しています）",
  },
  items: [
    {
      title: "メタバース情報工学学校",
      category: "AI教育",
      period: "2025 —",
      summary:
        "場所や年齢に縛られず学べる、メタバース×AIの実践的IT教育機関を開校。AI開発者・データサイエンティストの育成コースを提供し、地方在住や育児中の方の学びと就労を支えています。",
      tags: ["メタバース", "AI教育", "Python"],
      highlight: "クラウドファンディングで目標の613%（約123万円・43名支援）を達成",
    },
    {
      title: "バックオフィスDX推進（AI・RPA・データ分析）",
      category: "AI・システム開発",
      period: "2026",
      summary:
        "約17,000人規模の企業のバックオフィス業務をDX。契約書処理の自動化やスクレイピングツール、業務データ分析など、複数の自動化・データドリブン施策を設計・実装しました。",
      tags: ["Python", "Dify / LLM", "AWS"],
    },
    {
      title: "エッジAI×VLM リアルタイム映像解析基盤",
      category: "AI・システム開発",
      period: "2026",
      summary:
        "防犯カメラ映像を Jetson 上で解析する基盤を設計・実装。YOLO による高速検出と VLM による高精度解析を二段構成で組み合わせ、実際の町での実証まで担当しました。",
      tags: ["Jetson", "YOLO", "VLM"],
    },
    {
      title: "Security AI Agent の開発（クラウド×LLM×セキュリティ）",
      category: "AI・システム開発",
      period: "2025",
      summary:
        "AWS SecurityLake と OpenSearch を基盤に、セキュリティアラートの一次対応を自動化するAIエージェントを開発。LLM を用いたインシデント分類・危険度判定ロジックを設計しました。",
      tags: ["AWS", "LLM", "OpenSearch"],
    },
    {
      title: "AIによるSNS向け動画自動生成基盤",
      category: "AI・システム開発",
      period: "2025",
      summary:
        "生成AIと Remotion / FFmpeg を組み合わせ、動画の自動生成・編集パイプラインを構築。従来は手作業だった編集・投稿の工程を大幅に効率化しました。",
      tags: ["OpenAI Vision", "Remotion", "Python"],
    },
    {
      title: "海外大学院生へのAI講義（メタバース活用）",
      category: "AI教育",
      period: "2024 – 2025",
      summary:
        "コートジボワール・アビジャンの大学院生に向けて、メタバース／オンラインで AI・機械学習を講義。学習管理システムを用いた連携指導とフォローアップまで一貫して担当しました。",
      tags: ["AI", "メタバース", "LMS"],
    },
    {
      title: "製造業向け画像認識アプリの開発",
      category: "AI・システム開発",
      period: "2024",
      summary:
        "良品／不良品判定の画像認識モデルを開発し、Jetson へデプロイ。複数製品の動画からリアルタイムに推論できる仕組みを、PoC から簡易運用環境の構築まで一貫して担当しました。",
      tags: ["YOLO", "Anomalib", "Jetson"],
    },
    {
      title: "自治体のデータ分析（観光施策）",
      category: "データ分析・社会実装",
      period: "2024",
      summary:
        "地方自治体と大学の共同研究として、来訪者の属性・期間などのデータを統計分析。可視化とレポートを通じて、観光施策の立案に直接活用されました。",
      tags: ["Python", "統計分析", "データ可視化"],
    },
    {
      title: "法人向けAI・機械学習研修",
      category: "AI教育",
      period: "2020 —",
      summary:
        "企業向けに Python・AI・機械学習の実践研修を、東京・大阪・オンラインで実施。ハンズオン教材と個別フォローアップ体制で、受講者の定着を支えました。",
      tags: ["Python", "scikit-learn", "企業研修"],
      highlight: "受講者満足度90%超を達成",
    },
    {
      title: "デジタルツイン＆自動運転のPoC",
      category: "AI・システム開発",
      period: "2023 – 2024",
      summary:
        "大手研究機関との共同 PoC として、デジタルツイン／自動運転シナリオを構築。NVIDIA Jetson 上でエッジAIの精度・速度を最適化し、学生チームの技術教育も担当しました。",
      tags: ["Jetson", "YOLO", "TensorRT"],
    },
  ] satisfies ProjectItem[],
} as const;
