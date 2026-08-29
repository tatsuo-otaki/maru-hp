/**
 * 「つながりから、より良い社会へ。」セクション（/about、Vision の直後）のデータ。
 * 出典：Figma Make（fileKey uK5pZxspwam8UuTLH4rc5f）EcosystemSection のノード座標・接続関係を、
 * このプロジェクトの角度＋半径ベースの円環表現（Cycle.tsx と同じ流儀）に変換して保持している。
 * ノードはあえて正円上に均等配置していない（Figma側の「有機的な配置」という指定を踏襲）。
 */

export type EcosystemNodeId =
  | "students"
  | "csr"
  | "alumni"
  | "company"
  | "supporter"
  | "local"
  | "education"
  | "welfare";

export type EcosystemColor = "teal" | "amber" | "muted";

export type EcosystemNode = {
  id: EcosystemNodeId;
  /** 1〜2行のラベル */
  lines: string[];
  /** ノード脇に添える短いキーワード */
  keyword: string;
  /** 度。-90 が真上、時計回り（CYCLE.nodes と同じ規約） */
  angle: number;
  /** 中心からの半径（px、ベース viewBox 基準） */
  radius: number;
  color: EcosystemColor;
};

export type EcosystemConnection = {
  from: EcosystemNodeId | "center";
  to: EcosystemNodeId;
  /** 一部の関係線にのみ添える短い言葉。すべてには付けない（情報過多を避ける） */
  label?: string;
};

export type EcosystemMobileStep =
  | { type: "node"; label: string; sub: string; color: EcosystemColor }
  | { type: "connector"; label: string; sub: string };

export type EcosystemCta = {
  label: string;
  href: string;
};

export const ECOSYSTEM = {
  label: "Ecosystem",
  headingLines: ["つながりから、", "より良い社会へ。"],
  lead: "人と人。人と仕事。企業と地域。学びと社会。\nそれぞれが持つ力をつなぐことで、新しい可能性は生まれる。",
  body: [
    "株式会社〇は、誰か一人が支える社会ではなく、それぞれの人や組織が持つものを持ち寄り、互いに価値を生み出せる社会をつくりたいと考えています。AIや教育、仕事づくりは、そのための手段のひとつです。",
    "人がつながり、挑戦が生まれ、その結果がまた次の誰かの可能性につながっていく。そんな循環を、少しずつ社会の中に増やしていきます。",
  ],

  /** 中心ノード（株式会社〇）を囲む8ノード */
  nodes: [
    { id: "students", lines: ["学生・学ぶ人"], keyword: "挑戦・成長", angle: -139, radius: 271, color: "teal" },
    { id: "csr", lines: ["CSR・社会貢献企業"], keyword: "共創・支援", angle: -96, radius: 231, color: "amber" },
    { id: "alumni", lines: ["卒業生・働く人"], keyword: "経験・知識", angle: -44, radius: 260, color: "teal" },
    { id: "company", lines: ["企業・仕事を", "つくる人"], keyword: "課題・仕事・採用", angle: -1, radius: 292, color: "amber" },
    { id: "supporter", lines: ["応援者・", "サポーター"], keyword: "応援・参加", angle: 39, radius: 255, color: "muted" },
    { id: "local", lines: ["自治体・地域"], keyword: "地域課題・人材", angle: 95, radius: 221, color: "muted" },
    { id: "education", lines: ["教育機関"], keyword: "学び・人材育成", angle: 146, radius: 273, color: "teal" },
    { id: "welfare", lines: ["福祉・就労支援"], keyword: "多様性・社会参加", angle: -178, radius: 315, color: "muted" },
  ] satisfies EcosystemNode[],

  /** 接続関係。中心↔各ノード（8本）＋ 周辺同士（8本、うち5本にのみ言葉を添える） */
  connections: [
    { from: "center", to: "students" },
    { from: "center", to: "csr" },
    { from: "center", to: "alumni" },
    { from: "center", to: "company" },
    { from: "center", to: "supporter" },
    { from: "center", to: "local" },
    { from: "center", to: "education" },
    { from: "center", to: "welfare" },
    { from: "students", to: "alumni", label: "出会い" },
    { from: "alumni", to: "education", label: "学び" },
    { from: "students", to: "company", label: "実務" },
    { from: "welfare", to: "csr", label: "共創" },
    { from: "welfare", to: "company", label: "循環" },
    { from: "company", to: "local" },
    { from: "education", to: "company" },
    { from: "supporter", to: "students" },
  ] satisfies EcosystemConnection[],

  /** Mobile 用の縦ストーリー（ノード4＋コネクタ3の交互構成） */
  mobileSteps: [
    { type: "node", label: "学ぶ・挑戦する", sub: "学生・挑戦者", color: "teal" },
    { type: "connector", label: "出会い・つながり", sub: "株式会社〇が橋渡し" },
    { type: "node", label: "仕事・課題を持ち寄る", sub: "企業・自治体・支援者", color: "amber" },
    { type: "connector", label: "協働・共創", sub: "実務・学び・実証" },
    { type: "node", label: "経験・価値を生む", sub: "教育機関・福祉・地域", color: "teal" },
    { type: "connector", label: "循環・つながる", sub: "また次の人へ" },
    { type: "node", label: "次の可能性へ", sub: "新しい社会が育つ", color: "teal" },
  ] satisfies EcosystemMobileStep[],

  message: {
    headingLines: ["誰かが支える社会から、", "みんなで価値を生み出す社会へ。"],
    body: [
      "学生だから支援される。企業だから仕事を与える。地域だから課題を抱える。",
      "そんな一方向の関係ではなく、一人ひとり、ひとつひとつの組織が持っているものをつなぎ、それぞれが誰かの力になれる関係を増やしていく。株式会社〇は、そんな社会をつくりたいと考えています。",
    ],
  },

  /** CTA 4方向。すべて既存ページへ接続する（架空URLは作らない） */
  ctas: [
    { label: "学ぶ・挑戦する", href: "/partners/ai-training" },
    { label: "仕事や課題を持ち寄る", href: "/contact" },
    { label: "一緒に取り組む", href: "/partners/co-creation" },
    { label: "応援する", href: "/partners/csr" },
  ] satisfies EcosystemCta[],
} as const;
