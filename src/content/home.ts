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

export const STEPS = {
  label: "How it works",
  heading: "学ぶだけで終わらせない。",
  intro:
    "AIを学び、技術を身につけても、実務経験や仕事の機会がなければ、その力を十分に発揮することはできません。株式会社〇は、学習から実務、就労、社会参加までをつなぐ仕組みをつくります。",
  emphasis: "AIを学び、仕事を生み出し、誰かの幸せにつなげる。",
  steps: [
    {
      num: "01",
      ja: "学ぶ",
      en: "Learn",
      desc: "AI、プログラミング、システム開発など、実際の仕事に必要な技術を身につけます。",
    },
    {
      num: "02",
      ja: "つくる",
      en: "Create",
      desc: "実務を想定した課題やプロジェクトに取り組み、自分の力で成果物をつくります。",
    },
    {
      num: "03",
      ja: "経験する",
      en: "Experience",
      desc: "講師や実務経験者の支援を受けながら、企業や社会の実際の課題に取り組みます。",
    },
    {
      num: "04",
      ja: "働く",
      en: "Work",
      desc: "企業案件、業務委託、採用、地域プロジェクトなど、一人ひとりに合った仕事や社会参加につなげます。",
    },
  ],
} as const;

export const CYCLE = {
  label: "Cycle",
  heading: "技術、教育、仕事が循環する社会へ。",
  center: "〇",
  /** 円周上のノード（angle は度・-90 が真上、時計回り） */
  nodes: [
    { angle: -90, label: "企業・社会の課題", sub: "Problems & Needs", color: "navy" as const },
    { angle: -18, label: "AI・システム開発", sub: "AI Development", color: "teal" as const },
    { angle: 54, label: "AI教育・人材育成", sub: "AI Education", color: "amber" as const },
    { angle: 126, label: "実務経験・就労機会", sub: "Real-World Work", color: "teal" as const },
    { angle: 198, label: "社会への価値創出", sub: "Social Value", color: "amber" as const },
  ],
} as const;

export const PROJECTS = {
  label: "Projects",
  heading: "理想を、実際の活動へ。",
  intro:
    "株式会社〇は、国内外の企業、教育機関、学生、技術者と連携しながら、AI開発と教育の実践を重ねています。",
  cta: { label: "プロジェクト・実績を見る", href: "/projects" },
  items: [
    {
      cat: "AI教育",
      color: "teal" as const,
      title: "メタバース情報工学学校",
      desc: "AI・プログラミング教育プログラムの開発と実施。国内外の学生100名以上が参加。",
      feature: true,
    },
    {
      cat: "AI開発",
      color: "amber" as const,
      title: "海外大学とのAI教育連携",
      desc: "東南アジアの大学との教育プログラム共同開発。",
      feature: false,
    },
    {
      cat: "社会参加",
      color: "navy" as const,
      title: "就労支援AI人材育成",
      desc: "就労継続支援事業所と連携し、AIスキルで就労機会を創出。",
      feature: false,
    },
    {
      cat: "AI開発",
      color: "amber" as const,
      title: "企業向けAI・DX支援",
      desc: "中小企業のAI導入・DX推進を一貫サポート。",
      feature: false,
    },
  ],
} as const;

export const MISSION = {
  label: "Mission",
  headingLines: ["幸せに働ける人を", "世界中に増やす。"],
  body: "働くことは、単にお金を得るための行為ではありません。自分の力を活かし、誰かの役に立ち、社会に価値を届けること。そして、その活動を通じて、自分自身も幸せを感じること。私たちは、一人ひとりが自分らしく働き、誰かの幸せをつくれる社会を目指します。",
  cta: { label: "株式会社〇の考えを知る", href: "/about" },
} as const;

export const VISION = {
  label: "Vision",
  heading: "私たちが実現する5つの変化",
  intro:
    "株式会社〇は、「働く」「組織」「経済」「教育」「相互理解」の5つの領域から、これからの社会のあり方を変えていきます。",
  cta: { label: "Mission・Visionを詳しく見る", href: "/about" },
  items: [
    {
      num: "01",
      title: "「働く」の概念を変える",
      en: "Redefine Work",
      desc: "お金のためだけに働くのではなく、自分の好きなことや得意なことを活かし、誰かの幸せや社会の価値につながる働き方を広げます。",
      color: "teal" as const,
    },
    {
      num: "02",
      title: "組織の概念を変える",
      en: "Reimagine Organizations",
      desc: "規模や利益だけではなく、社員、顧客、地域、社会にどれだけ幸福を生み出したかによって評価される組織を増やします。",
      color: "amber" as const,
    },
    {
      num: "03",
      title: "資本主義の次を作る",
      en: "Beyond Capitalism",
      desc: "資本主義の良さを活かしながら、その弊害を小さくし、お金だけではない価値や幸福も大切にされる新しい仕組みを考え、実践します。",
      color: "teal" as const,
    },
    {
      num: "04",
      title: "世界の教育格差をなくす",
      en: "Eliminate Education Gaps",
      desc: "住んでいる場所、経済状況、身体的な条件にかかわらず、誰もが質の高い教育を受け、未来の選択肢を広げられる環境をつくります。",
      color: "amber" as const,
    },
    {
      num: "05",
      title: "文化を超えた相互理解を作る",
      en: "Cross-Cultural Understanding",
      desc: "国や文化、言語、価値観の違いを越えて、お互いを知り、尊重し、思いやることのできる関係を育てます。",
      color: "navy" as const,
    },
  ],
} as const;
