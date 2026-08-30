/**
 * Maru Global（/global, /global/en, /global/fr）のコンテンツ。
 * 出典：Figma Make（fileKey uK5pZxspwam8UuTLH4rc5f）GlobalPage の `GL` / `GLOBAL_BUSINESSES` を移植。
 * 3言語のコピーはFigma側で既に自然な文体（ビジネス向けフランス語含む）で揃っているため、そのまま使用している。
 *
 * 色は既存デザイントークン（teal/amber/navy/muted）の範囲に限定する。
 * Figma は Global AI & Digital 用に独自の青（#5B7FA6）を使っていたが、
 * アクセントカラーを増やさない方針（brand-guide.md）に合わせ muted へ置き換えた。
 */

export type GLang = "ja" | "en" | "fr";
export type L3 = Record<GLang, string>;
export type GColor = "teal" | "amber" | "navy" | "muted";

export const GLOBAL_LANGS: { code: GLang; label: string; href: string }[] = [
  { code: "ja", label: "JA", href: "/global" },
  { code: "en", label: "EN", href: "/global/en" },
  { code: "fr", label: "FR", href: "/global/fr" },
];

export const GLOBAL = {
  learnMore: { ja: "詳しく見る", en: "Learn more", fr: "En savoir plus" } as L3,

  hero: {
    tag: "MARU GLOBAL",
    headlineLines: {
      ja: ["人と技術と機会を、", "国境を越えてつなぐ。"],
      en: ["Connecting people, technology,", "and opportunities across borders."],
      fr: ["Relier les personnes, les technologies", "et les opportunités au-delà des frontières."],
    } as Record<GLang, string[]>,
    lead: {
      ja: "Maru Globalは、人、企業、教育、技術、地域を国境を越えてつなぎ、新しい学び、仕事、事業、社会的価値を生み出します。",
      en: "Maru Global connects people, companies, education, technology and local communities across borders to create new learning opportunities, work, businesses and social value.",
      fr: "Maru Global connecte les personnes, les entreprises, l'éducation, la technologie et les communautés locales au-delà des frontières pour créer de nouvelles opportunités d'apprentissage, du travail, des entreprises et de la valeur sociale.",
    } as L3,
    nodes: [
      { key: "talent", label: { ja: "人材・学生", en: "Talent", fr: "Talents" } as L3, color: "teal" as GColor },
      { key: "technology", label: { ja: "テクノロジー", en: "Technology", fr: "Technologie" } as L3, color: "amber" as GColor },
      { key: "companies", label: { ja: "企業・機関", en: "Companies", fr: "Entreprises" } as L3, color: "teal" as GColor },
      { key: "opportunities", label: { ja: "機会・仕事", en: "Opportunities", fr: "Opportunités" } as L3, color: "amber" as GColor },
      { key: "education", label: { ja: "教育・研究", en: "Education", fr: "Éducation" } as L3, color: "teal" as GColor },
      { key: "communities", label: { ja: "地域・社会", en: "Communities", fr: "Communautés" } as L3, color: "muted" as GColor },
    ],
  },

  why: {
    label: "Why Global",
    headlineLines: {
      ja: ["世界には、まだつながっていない可能性がある。"],
      en: ["There are still possibilities", "that have not yet been connected."],
      fr: ["Il existe encore des possibilités", "qui ne sont pas encore connectées."],
    } as Record<GLang, string[]>,
    lead: {
      ja: "才能、技術、学び、企業、地域の課題。それぞれはすでに存在している。maruは、それらをつなぐことで、新しい価値を生み出す。",
      en: "Talent, technology, learning, companies, local challenges. They already exist everywhere. Maru creates new value by connecting them.",
      fr: "Les talents, la technologie, l'apprentissage, les entreprises, les défis locaux — ils existent déjà partout. Maru crée de la valeur en les connectant.",
    } as L3,
    left: {
      ja: ["人材・才能", "テクノロジー", "学生・学ぶ人", "企業・組織", "地域の課題"],
      en: ["Talent", "Technology", "Students", "Companies", "Local Challenges"],
      fr: ["Talents", "Technologie", "Étudiants", "Entreprises", "Défis locaux"],
    } as Record<GLang, string[]>,
    right: {
      ja: ["仕事・機会", "現地のニーズ", "教育・学習", "パートナー", "解決策"],
      en: ["Work", "Local Needs", "Education", "Partners", "Solutions"],
      fr: ["Travail", "Besoins locaux", "Éducation", "Partenaires", "Solutions"],
    } as Record<GLang, string[]>,
  },

  businesses: {
    label: "Businesses",
    headline: { ja: "5つのグローバル事業", en: "Five Global Businesses", fr: "Cinq activités mondiales" } as L3,
  },

  cycle: {
    label: "Global Cycle",
    headline: { ja: "Maru Globalが生み出す循環", en: "The Global Cycle", fr: "Le Cycle Mondial" } as L3,
    lead: {
      ja: "5つの事業は独立していません。つながり、学び、つくり、働き、共創する——その循環が社会に新しい価値を生み続けます。",
      en: "The five businesses are not separate. They form a cycle: connect, learn, build, work, co-create — continuously generating new value.",
      fr: "Les cinq activités ne sont pas séparées. Elles forment un cycle : connecter, apprendre, construire, travailler, co-créer — générant continuellement de la valeur.",
    } as L3,
    /** ペンタゴンの5ノード。順序は CONNECT→LEARN→BUILD→WORK→CO-CREATE 固定 */
    nodes: [
      { en: "CONNECT", label: { ja: "つながる", en: "Connect", fr: "Connecter" } as L3, biz: "Cross-border", color: "navy" as GColor },
      { en: "LEARN", label: { ja: "学ぶ", en: "Learn", fr: "Apprendre" } as L3, biz: "Education", color: "teal" as GColor },
      { en: "BUILD", label: { ja: "つくる", en: "Build", fr: "Construire" } as L3, biz: "AI & Digital", color: "muted" as GColor },
      { en: "WORK", label: { ja: "働く", en: "Work", fr: "Travailler" } as L3, biz: "Talent & Work", color: "amber" as GColor },
      { en: "CO-CREATE", label: { ja: "共創する", en: "Co-create", fr: "Co-créer" } as L3, biz: "Co-Creation", color: "teal" as GColor },
    ],
  },

  africa: {
    label: "Côte d'Ivoire",
    headline: {
      ja: "コートジボワールから、始まっています。",
      en: "Starting from Côte d'Ivoire.",
      fr: "À partir de la Côte d'Ivoire.",
    } as L3,
    lead: {
      ja: "西アフリカに位置するコートジボワール。首都アビジャンを拠点に、IUA（Institut Universitaire d'Abidjan）との連携を通じてAI・機械学習教育の実証を開始しています。日本とコートジボワールを結ぶ、双方向の価値創造が始まっています。",
      en: "Located in West Africa, Côte d'Ivoire is where our global journey begins. Based in Abidjan, we are launching AI and Machine Learning education initiatives through collaboration with IUA (Institut Universitaire d'Abidjan). A two-way value exchange between Japan and Côte d'Ivoire is just beginning.",
      fr: "Située en Afrique de l'Ouest, la Côte d'Ivoire est le point de départ de notre aventure mondiale. Basés à Abidjan, nous lançons des initiatives d'éducation en IA et en apprentissage automatique en collaboration avec l'IUA (Institut Universitaire d'Abidjan). Un échange de valeur bidirectionnel entre le Japon et la Côte d'Ivoire ne fait que commencer.",
    } as L3,
    items: {
      ja: ["IUAとのAI・機械学習教育", "現地学生・教育者との連携", "市場リサーチ・AI/DX需要分析", "日本×コートジボワールのビジネス機会"],
      en: ["AI / ML education with IUA", "Local students & educators", "Market research & AI/DX analysis", "Japanese–Ivorian business opportunities"],
      fr: ["Éducation IA/ML avec IUA", "Étudiants & éducateurs locaux", "Recherche de marché & analyse IA/DX", "Opportunités commerciales Japon–Côte d'Ivoire"],
    } as Record<GLang, string[]>,
    diagram: {
      japan: { ja: "日本", en: "Japan", fr: "Japon" } as L3,
      ci: { ja: "コートジボワール", en: "Côte d'Ivoire", fr: "Côte d'Ivoire" } as L3,
      ciSub: "Abidjan",
      ciPartner: "× IUA",
      topLabel: { ja: "技術・教育・資金", en: "Technology · Education · Funding", fr: "Technologie · Éducation · Financement" } as L3,
      bottomLabel: { ja: "人材・市場・現地ニーズ", en: "Talent · Market · Local Needs", fr: "Talents · Marché · Besoins locaux" } as L3,
    },
  },

  valueFlow: {
    label: "Philosophy",
    headlineLines: {
      ja: ["海外進出ではなく、", "価値が循環する関係をつくる。"],
      en: ["Not simply expansion.", "Relationships where value flows both ways."],
      fr: ["Pas seulement une expansion.", "Des relations où la valeur circule dans les deux sens."],
    } as Record<GLang, string[]>,
    lead: {
      ja: "私たちが目指しているのは、日本から海外へ一方的に価値を提供する「海外進出」ではありません。人・技術・教育・仕事が国境を越えて双方向に循環し、それぞれの地域に新しい価値が生まれる関係をつくることです。",
      en: "We are not pursuing one-directional expansion from Japan to overseas markets. Our goal is to build relationships where people, technology, education, and work circulate across borders in both directions, creating new value in each region.",
      fr: "Nous ne cherchons pas une expansion unilatérale du Japon vers l'étranger. Notre objectif est de construire des relations où les personnes, la technologie, l'éducation et le travail circulent dans les deux sens au-delà des frontières, créant une nouvelle valeur dans chaque région.",
    } as L3,
    pairs: [
      { left: { ja: "日本", en: "Japan", fr: "Japon" } as L3, right: { ja: "コートジボワール / 他地域", en: "Côte d'Ivoire / Other Regions", fr: "Côte d'Ivoire / Autres régions" } as L3 },
      { left: { ja: "技術・AI", en: "Technology & AI", fr: "Technologie & IA" } as L3, right: { ja: "現地のニーズ・課題", en: "Local Needs & Challenges", fr: "Besoins & défis locaux" } as L3 },
      { left: { ja: "人材・教育", en: "Talent & Education", fr: "Talents & Éducation" } as L3, right: { ja: "グローバルな仕事・機会", en: "Global Work & Opportunities", fr: "Travail & opportunités mondiales" } as L3 },
    ],
  },

  who: {
    label: "Who We Build With",
    headline: { ja: "ともにつくる人たち。", en: "Who we build with.", fr: "Avec qui nous construisons." } as L3,
    categories: [
      { color: "teal" as GColor, label: { ja: "大学・教育機関", en: "Universities & Schools", fr: "Universités & Écoles" } as L3 },
      { color: "amber" as GColor, label: { ja: "企業", en: "Companies", fr: "Entreprises" } as L3 },
      { color: "teal" as GColor, label: { ja: "スタートアップ", en: "Startups", fr: "Start-ups" } as L3 },
      { color: "muted" as GColor, label: { ja: "自治体・行政", en: "Governments & Municipalities", fr: "Gouvernements & Municipalités" } as L3 },
      { color: "teal" as GColor, label: { ja: "NGO・社会組織", en: "NGOs / Social Organizations", fr: "ONG / Organisations sociales" } as L3 },
      { color: "amber" as GColor, label: { ja: "投資家・資金提供", en: "Investors / Funding Organizations", fr: "Investisseurs / Financeurs" } as L3 },
      { color: "muted" as GColor, label: { ja: "研究者", en: "Researchers", fr: "Chercheurs" } as L3 },
      { color: "teal" as GColor, label: { ja: "学生", en: "Students", fr: "Étudiants" } as L3 },
      { color: "amber" as GColor, label: { ja: "プロフェッショナル", en: "Professionals", fr: "Professionnels" } as L3 },
      { color: "muted" as GColor, label: { ja: "地域コミュニティ", en: "Local Communities", fr: "Communautés locales" } as L3 },
    ],
  },

  partnerships: {
    label: "Partnership",
    headline: { ja: "参加のしかた", en: "Partnership Models", fr: "Modèles de partenariat" } as L3,
    models: [
      { color: "teal" as GColor, title: "Education Partner", desc: { ja: "AI教育やカリキュラム開発での連携", en: "Collaborate on AI education and curriculum development", fr: "Collaborer sur l'éducation IA et le développement de curriculum" } as L3 },
      { color: "amber" as GColor, title: "Business Partner", desc: { ja: "国際展開や共同事業の推進", en: "Drive international expansion and joint ventures", fr: "Développer l'expansion internationale et les coentreprises" } as L3 },
      { color: "teal" as GColor, title: "Technology Partner", desc: { ja: "AIや技術の共同開発・提供", en: "Co-develop and provide AI and digital solutions", fr: "Co-développer et fournir des solutions IA et numériques" } as L3 },
      { color: "muted" as GColor, title: "Local Partner", desc: { ja: "地域の課題解決と人材育成の支援", en: "Support local problem-solving and talent development", fr: "Soutenir la résolution de problèmes locaux et le développement des talents" } as L3 },
      { color: "teal" as GColor, title: "Impact Partner", desc: { ja: "社会課題への共同アプローチ", en: "Collaborate on social challenges and shared goals", fr: "Collaborer sur les défis sociaux et les objectifs communs" } as L3 },
      { color: "amber" as GColor, title: "Funding Partner", desc: { ja: "活動の資金・機会を提供する", en: "Provide funding and opportunities to grow the mission", fr: "Fournir des financements et des opportunités pour développer la mission" } as L3 },
    ],
  },

  roadmap: {
    label: "Roadmap",
    headline: { ja: "リサーチから、本当の共創へ。", en: "From research to real collaboration.", fr: "De la recherche à la collaboration réelle." } as L3,
    steps: [
      { label: { ja: "リサーチ", en: "Research", fr: "Recherche" } as L3, desc: { ja: "市場・課題・パートナー調査", en: "Market, needs & partners", fr: "Marché, besoins & partenaires" } as L3, active: true },
      { label: { ja: "パートナー", en: "Partner", fr: "Partenaire" } as L3, desc: { ja: "連携先の発掘・確立", en: "Find & establish partners", fr: "Trouver et établir des partenaires" } as L3, active: true },
      { label: { ja: "ユースケース", en: "Use Case", fr: "Cas d'usage" } as L3, desc: { ja: "具体的な活用事例設計", en: "Design concrete use cases", fr: "Concevoir des cas d'utilisation concrets" } as L3, active: false },
      { label: { ja: "パイロット", en: "Pilot", fr: "Pilote" } as L3, desc: { ja: "小規模の実証・検証", en: "Small-scale validation", fr: "Validation à petite échelle" } as L3, active: false },
      { label: { ja: "事業化", en: "Business Model", fr: "Modèle économique" } as L3, desc: { ja: "持続可能なモデルの設計", en: "Design a sustainable model", fr: "Concevoir un modèle durable" } as L3, active: false },
      { label: { ja: "スケール", en: "Scale", fr: "Mise à l'échelle" } as L3, desc: { ja: "他地域への展開", en: "Expand to other regions", fr: "Expansion vers d'autres régions" } as L3, active: false },
    ],
  },

  cta: {
    label: "Get Involved",
    headlineLines: {
      ja: ["国境を越えて、", "新しい価値を一緒につくりませんか。"],
      en: ["Let's build something", "across borders."],
      fr: ["Créons ensemble de nouvelles valeurs", "au-delà des frontières."],
    } as Record<GLang, string[]>,
    buttons: {
      ja: ["Maruと協力する", "プロジェクトを探る", "コートジボワールで活動する", "グローバル連携について話す"],
      en: ["Partner with Maru", "Explore a Project", "Work with us in Côte d'Ivoire", "Talk about Global Collaboration"],
      fr: ["S'associer avec Maru", "Explorer un projet", "Travailler avec nous en Côte d'Ivoire", "Parler de collaboration mondiale"],
    } as Record<GLang, string[]>,
  },
} as const;

export const GLOBAL_BUSINESSES = [
  {
    num: "01",
    en: "GLOBAL EDUCATION",
    color: "teal" as GColor,
    title: { ja: "Global Education", en: "Global Education", fr: "Éducation Mondiale" } as L3,
    lead: {
      ja: "国境を越えた学びの機会をつくる。",
      en: "Creating learning opportunities across borders.",
      fr: "Créer des opportunités d'apprentissage au-delà des frontières.",
    } as L3,
    flow: ["School", "Learning", "Skills"],
    keywords: {
      ja: ["AI教育", "オンライン学習", "カリキュラム開発"],
      en: ["AI Education", "Online Learning", "Curriculum"],
      fr: ["Éducation IA", "Apprentissage en ligne", "Curriculum"],
    } as Record<GLang, string[]>,
  },
  {
    num: "02",
    en: "GLOBAL TALENT & WORK",
    color: "amber" as GColor,
    title: { ja: "Global Talent & Work", en: "Global Talent & Work", fr: "Talents & Travail" } as L3,
    lead: {
      ja: "学びを、国境を越えた仕事へつなぐ。",
      en: "Connecting learning to global work opportunities.",
      fr: "Connecter l'apprentissage aux opportunités de travail mondiales.",
    } as L3,
    flow: ["Learning", "Experience", "Work"],
    keywords: {
      ja: ["人材マッチング", "リモートワーク", "雇用創出"],
      en: ["Talent Matching", "Remote Work", "Job Creation"],
      fr: ["Mise en relation", "Travail à distance", "Création d'emplois"],
    } as Record<GLang, string[]>,
  },
  {
    num: "03",
    en: "GLOBAL AI & DIGITAL",
    color: "muted" as GColor,
    title: { ja: "Global AI & Digital", en: "Global AI & Digital", fr: "IA & Numérique" } as L3,
    lead: {
      ja: "AIと技術で、地域の課題を解く。",
      en: "Using AI and technology to solve local challenges.",
      fr: "Utiliser l'IA et la technologie pour résoudre les défis locaux.",
    } as L3,
    flow: ["Challenge", "Technology", "Solution"],
    keywords: {
      ja: ["AI開発", "DX支援", "デジタルインフラ"],
      en: ["AI Development", "DX Support", "Digital Infrastructure"],
      fr: ["Développement IA", "Soutien DX", "Infrastructure numérique"],
    } as Record<GLang, string[]>,
  },
  {
    num: "04",
    en: "GLOBAL CO-CREATION",
    color: "teal" as GColor,
    title: { ja: "Global Co-Creation & Impact", en: "Global Co-Creation & Impact", fr: "Co-création & Impact" } as L3,
    lead: {
      ja: "企業、地域、社会が共につくる価値。",
      en: "Value created together by companies, communities and society.",
      fr: "Valeur créée ensemble par les entreprises, les communautés et la société.",
    } as L3,
    flow: ["Organizations", "Project", "Social Value"],
    keywords: {
      ja: ["社会イノベーション", "CSR", "インパクト"],
      en: ["Social Innovation", "CSR", "Impact"],
      fr: ["Innovation sociale", "RSE", "Impact"],
    } as Record<GLang, string[]>,
  },
  {
    num: "05",
    en: "CROSS-BORDER BUSINESS",
    color: "navy" as GColor,
    title: { ja: "Cross-border Business", en: "Cross-border Business", fr: "Commerce Transfrontalier" } as L3,
    lead: {
      ja: "日本と海外をつなぐ、新しい事業をつくる。",
      en: "Building new businesses bridging Japan and the world.",
      fr: "Construire de nouveaux modèles d'affaires reliant le Japon et le monde.",
    } as L3,
    flow: ["Country A", "↔ Maru ↔", "Country B"],
    keywords: {
      ja: ["市場参入", "ビジネスマッチング", "パートナーシップ"],
      en: ["Market Entry", "Business Matching", "Partnership"],
      fr: ["Entrée sur le marché", "Mise en relation", "Partenariat"],
    } as Record<GLang, string[]>,
  },
] as const;
