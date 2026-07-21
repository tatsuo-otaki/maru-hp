# モーション仕様

> Figma Make（fileKey `uK5pZxspwam8UuTLH4rc5f`）の `MOTION_TABLE` と実装から抽出。
> ※ Make は `motion/react`（Framer Motion）を使用。本プロジェクトも Framer Motion を使う。

## 共通原則

- 動きは情報理解とブランド表現（〇・接続・循環）のために使う。
- 読むために待たせる演出を避ける。スクロールを奪わない。
- Mobile では簡略化（基本 fade-in のみ）。
- `prefers-reduced-motion` に対応し、動きが無効でも内容を理解できるようにする。
- GSAP ScrollTrigger は複雑なスクロール演出に限定。基本は Framer Motion / CSS。

## モーション一覧（Figma Make より）

| 名称 | 用途 | duration | easing | 備考 |
| --- | --- | --- | --- | --- |
| Button Hover | bg / color 変化 | 0.22s | ease | whileHover |
| Card Hover | translateY(-4px)・影強調 | 0.22s | ease | whileHover |
| Section Entrance | opacity 0→1、y 28→0 | 0.55s | [0.16, 1, 0.3, 1] | whileInView once |
| Hero Text Reveal | 行ごと y 100%→0 クリップ | 0.95s | [0.16, 1, 0.3, 1] | delay 0.18s / 行 |
| Circle Floating | y 0→-14→0 浮遊 | 8s | easeInOut | repeat Infinity |
| Scroll Circle Scale | scale 1→2.9（Hero 離脱時） | scroll | useTransform | useScroll offset |
| Vision Transition | opacity + y 切り替え | 0.52s | [0.16, 1, 0.3, 1] | AnimatePresence wait |
| SVG Path Drawing | 接続線を段階的に描画 | 0.85s | easeInOut | pathLength 0→1 |
| Mouse Parallax | 〇・写真が数 px 連動 | spring | stiffness:22 damping:16 | useSpring |
| Cursor Dot | カーソル追従〇 | spring | stiffness:180 damping:22 | fixed / mixBlendMode:multiply |

## Hero（Phase 7 実装対象）

- Mission を行単位で自然に表示（Hero Text Reveal：0.95s / 行あたり delay 0.18s / ease [0.16,1,0.3,1]）。
- 補助コピーと CTA は少し遅れて表示。
- 背景の大きな〇（880px, border 1px, opacity 6%）を非常にゆっくり浮遊（8s repeat）。
- PC では軽いポインター追従（useSpring stiffness:22 damping:16）。Mobile では無効。
- `prefers-reduced-motion` では静止表示。
- CursorDot（カーソル追従〇, mixBlendMode:multiply）は PC のみ・任意。

## ⚠️ 要協議：スクロールジャック演出

Figma Make のデスクトップ版は以下の重いスクロール演出を含む。要件・CLAUDE.md の
「スクロールを奪わない／読むために待たせない」と衝突しうるため、実装方針を決める必要がある。

- 事業セクション：400vh の Sticky + 三角 SVG スクロール演出
- Vision セクション：600vh の Sticky スクロールスナップ
- Hero 離脱時：〇が scale 1→2.9 に拡大

方針候補：
1. Make の演出を尊重し、Desktop のみ GSAP ScrollTrigger で忠実に再現（重い・保守コスト高）
2. Sticky スクロールを廃し、通常縦スクロール + whileInView フェードに簡略化（原則優先・推奨）
3. 折衷：〇の拡大や接続線描画など「短く完結する」演出のみ採用し、長時間の scroll-jack は不採用

## 各セクション（Make に無い要件セクションは今後追記）

- 株式会社〇とは：（Make 未実装 / 要デザイン）
- 教育から仕事につなげる仕組み（STEP 1-4）：（Make 未実装 / 要デザイン）
- 技術・教育・仕事の循環（循環図）：SVG Path Drawing の応用候補
- プロジェクト・実績：Bento グリッド + Card Hover
- Mission：（Make 未実装の独立セクション / 要デザイン）
- 5つのVision：Vision Transition（上記 scroll-jack 要協議）
- 〇に込めた思い：（Make 未実装 / 要デザイン）
- 企業・自治体との連携：（Make 未実装 / 要デザイン）
- 代表メッセージ：（Make 未実装 / 要デザイン）
- News & Press：Section Entrance
- Contact CTA：Section Entrance + Button Hover
