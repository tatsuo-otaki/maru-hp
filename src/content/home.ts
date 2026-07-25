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
  heading: "私たちの3つの事業",
  items: [
    {
      num: "01",
      slug: "ai-development",
      title: "AI・システム開発",
      en: "AI & System Development",
      tag: "AIと技術で、企業・社会の課題を解決するシステムをつくります",
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
      roles: [
        "企業や社会から実際の課題を受け、技術力で解決する",
        "教育で育成した人材が参加できる仕事を生み出す",
        "現場で必要な技術やスキルを教育へ還元する",
        "実務経験者が品質を担保する",
      ],
      cta: { label: "AI・システム開発について", href: "/business#ai-development" },
    },
    {
      num: "02",
      slug: "ai-education",
      title: "AI教育・人材育成",
      en: "AI Education & Training",
      tag: "AIを実装し、実際の仕事を遂行できる人材を育てます",
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
      roles: [
        "高度なAI人材を育成し、教育格差を縮小する",
        "場所や環境に左右されず学べる機会を提供する",
        "企業や社会が必要とする人材を育成する",
        "教育から実務への接続を可能にする",
      ],
      cta: { label: "AI教育・人材育成について", href: "/business#ai-education" },
    },
    {
      num: "03",
      slug: "social",
      title: "仕事と社会参加の仕組みづくり",
      en: "Social Participation Design",
      tag: "学びを仕事へつなぎ、誰もが力を発揮できる環境をつくります",
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
      roles: [
        "「学んだが仕事がない」という問題を減らす",
        "地方や就労に制約がある人にも高度な仕事を届ける",
        "企業の社会貢献と事業活動の両立を実現する",
        "教育・就労・企業・地域を循環させる",
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
  cta: { label: "プロジェクト・実績を見る", href: "/business#projects" },
  items: [
    {
      cat: "AI教育",
      color: "amber" as const,
      title: "メタバース情報工学学校",
      desc: "場所や年齢に縛られず学べる、メタバース×AIの実践的IT教育機関を開校。クラウドファンディングで目標の613%を達成。",
      feature: true,
    },
    {
      cat: "AI開発",
      color: "teal" as const,
      title: "バックオフィスDX推進",
      desc: "約17,000人規模の企業のバックオフィス業務を、AI・RPA・データ分析でDX。",
      feature: false,
    },
    {
      cat: "データ分析",
      color: "navy" as const,
      title: "自治体のデータ分析（観光施策）",
      desc: "自治体×大学の共同研究として来訪者データを分析し、観光施策の立案に活用。",
      feature: false,
    },
    {
      cat: "AI開発",
      color: "teal" as const,
      title: "エッジAI×VLM 映像解析基盤",
      desc: "防犯カメラ映像を Jetson 上で解析。YOLO＋VLM の二段構成で高精度・軽量に。",
      feature: false,
    },
    {
      cat: "AI教育",
      color: "navy" as const,
      title: "海外大学院生へのAI講義",
      desc: "海外の大学院と連携し、メタバースを活用してAI・機械学習の実践的な講義を提供。",
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
  heading: "〇が変えたい5つの世界",
  intro:
    "株式会社〇は、「働く」「組織」「経済」「教育」「相互理解」の5つの領域から、これからの社会のあり方を変えていきます。",
  cta: { label: "5つのVisionを詳しく見る", href: "/about#vision" },
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

export const MARU_MEANING = {
  label: "The Name",
  headingLines: ["世界中の誰もが知っている、", "一つの記号から。"],
  body: "私たちは、会社名を「〇」と名付けました。「〇」は、言語や文化が違っても、多くの人が認識できる普遍的な記号です。円は、人と人とのつながり、循環、調和を表します。また、日本では、正解、肯定、良い状態を表す記号でもあります。国境や文化を越えて人と人がつながり、お互いの違いを認めながら、一緒に幸せをつくっていく。「〇」には、私たちが目指す社会への思いを込めています。",
  cta: { label: "〇に込めた思いを読む", href: "/about#maru" },
  /** トップページ用の短い要約 */
  short:
    "「〇」は、言語や文化が違っても、多くの人が認識できる普遍的な記号です。円は、人と人とのつながり、循環、調和を表します。",
  center: "〇",
  /** 正六角形の頂点（360×360 の座標系）に配置する意味語 */
  words: [
    { word: "つながり", x: 180, y: 30, size: 14 },
    { word: "循環", x: 308, y: 106, size: 16 },
    { word: "調和", x: 308, y: 254, size: 15 },
    { word: "肯定", x: 180, y: 330, size: 14 },
    { word: "多様性", x: 52, y: 254, size: 14 },
    { word: "堅牢性", x: 52, y: 106, size: 14 },
  ],
} as const;

export const PARTNER = {
  label: "Partner",
  /** 対象を明示するオーバーライン */
  audience: "企業・自治体・教育機関・就労支援機関の皆さまへ",
  headingLines: ["技術や仕事を、", "社会をより良くする力へ。"],
  body: "株式会社〇では、企業、自治体、教育機関、就労支援事業所などとの連携を進めています。AI開発やDX支援のご依頼だけでなく、人材育成、地方創生、教育支援、就労機会の創出など、さまざまな形で共同プロジェクトを実施できます。",
  /** 連携メニューの見出し */
  chipsHeading: "こんな連携・ご相談ができます",
  chips: [
    "AI・システム開発を依頼する",
    "業務や仕事を発注する",
    "AI人材育成を共同で行う",
    "地方創生プロジェクトを実施する",
    "就労支援事業所と連携する",
    "教育プログラムへ協賛する",
    "人材を採用・業務委託する",
    "CSR活動として参加する",
  ],
  emphasis: "社会貢献だから選ばれるのではなく、高い品質の仕事を依頼した結果、社会貢献にもつながる。",
  cta: { label: "連携について相談する", href: "/contact" },
} as const;

export const CEO = {
  label: "Message",
  headingLines: ["働くことを通じて、", "幸せな人を増やしたい。"],
  body: [
    "AIの進化によって、私たちの働き方や、仕事に求められる価値は大きく変わろうとしています。仮に、いつかお金を得るための労働が減ったとしても、人のために何かをすることや、誰かの幸せをつくる行為は、なくならないと考えています。",
    "これからは、たくさんのお金を得ることだけではなく、どれだけ多くの人に幸福を届けられたかが、一人ひとりの夢や、企業の価値になる時代が来るかもしれません。もちろん、幸せの形は人それぞれです。お金を稼ぎたい人も、自分の好きなことを仕事にしたい人も、誰かの役に立ちたい人も、それぞれの目標を尊重します。",
    "AIやプログラミングを学んでも、仕事や経験の機会がなければ、その力を十分に活かせません。私は、この「学んだのに、活かす場がない」という壁をなくしたいと考えてきました。だからこそ株式会社〇は、開発・教育・仕事の機会づくりを切り離さず、ひとつの循環として運営しています。技術で仕事を生み出し、教育で担い手を育て、仕組みで実際の仕事へつなぐ。この循環こそが、私たちの原点です。",
    "住んでいる場所や身体的な条件、これまでの経歴にかかわらず、誰もが自分の力を発揮できる。そんな「誰も取り残さない仕組み」と、企業や社会に本当に必要とされる「高い技術力」。私たちは、この両立を何よりも大切にしています。",
    "株式会社〇は、技術、教育、仕事を通じて、一人ひとりが自分らしく働ける選択肢を増やします。そして、100年、500年と続く会社として、時代が変わっても、人と社会の幸福をつくり続けたいと考えています。",
  ],
  name: "大瀧 達生",
  role: "代表取締役 / CEO — 株式会社〇",
  photoMark: "〇",
  photo: {
    src: "/ceo-otaki.png",
    alt: "株式会社〇 代表取締役 大瀧 達生",
  },
  /** 代表プロフィール（技術力・講師経験を軸にまとめたもの） */
  profile: {
    bio: "国産航空機 MRJ の立ち上げチームで機械設計・公差解析・工場設計に携わったのち、RAKUDO を創業。3Dプリンター・XR・CG・AI など先端技術の事業を手がけ、株式会社〇を設立。現在は、セキュリティエージェントや LLM を組み込んだAI動画編集システム、VLM を Jetson AGX Orin に実装した防犯カメラなど、高度なAI・システム開発を自ら手がけながら、企業・自治体・商工会議所・各種イベントで数多くのAI・データサイエンス・プログラミングの講師や登壇を務めています。",
    groups: [
      {
        heading: "開発・技術",
        items: [
          "国産航空機 MRJ 立ち上げチーム（機械設計・公差解析・工場設計）",
          "NHK『凄ワザ！』夢かなえますSP 開発リーダー",
          "セキュリティエージェント／LLM を組み込んだAI動画編集システムの開発",
          "VLM を Jetson AGX Orin に実装した防犯カメラの開発",
          "独自暗号通貨の発行とDAO運営（相互学習DAO「EXDAO」／地方創生DAO「WAN DAO」）",
        ],
      },
      {
        heading: "講師・登壇・メディア",
        items: [
          "企業向けAI・Python・C言語 講師（東京・大阪・オンラインで各30名規模）",
          "愛知産業科学総合センター AI講師／名古屋デザイン&テクノロジー AI数学教師",
          "名古屋・小牧の商工会議所、名古屋青年会議所でのメタバース・AI講義",
          "Web解析士協会イベント（300名規模）でのデータサイエンス講義",
          "ZIP-FM「Startup [N]」出演ほか、多数の登壇・メディア出演",
        ],
      },
    ],
  },
  /** トップページ用の引用（本文からの抜粋） */
  excerpt:
    "これからは、たくさんのお金を得ることだけではなく、どれだけ多くの人に幸福を届けられたかが、一人ひとりの夢や、企業の価値になる時代が来るかもしれません。",
  cta: { label: "メッセージを読む", href: "/about#ceo" },
} as const;

export const NEWS = {
  label: "News & Press",
  heading: "News & Press",
  intro:
    "株式会社〇および代表のメディア掲載、イベント登壇、プロジェクトなどをご紹介します。",
  // 一覧の記事データは content/news.ts（NEWS_PAGE）に集約。トップはその先頭数件を表示。
  ctas: [
    { label: "ニュース一覧を見る", href: "/news", primary: true },
    { label: "報道・メディア関係者の方へ", href: "/contact", primary: false },
  ],
} as const;

export const CONTACT_CTA = {
  label: "Contact",
  headingLines: ["一緒に、新しい「働く」を", "つくりませんか。"],
  body: "AI・システム開発、DX、AI教育、人材育成、地方創生、就労支援、CSR、海外教育など、幅広いご相談を受け付けています。まだ具体的な企画が決まっていない段階でも、お気軽にご相談ください。",
  buttons: [
    { label: "お問い合わせ", sub: "Contact Form", href: "/contact", primary: true },
    { label: "私たちについて", sub: "About maru", href: "/about", primary: false },
  ],
} as const;
