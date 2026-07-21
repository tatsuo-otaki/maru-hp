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

## スクロール演出の方針【決定：通常スクロール + フェード】

Figma Make のデスクトップ版は 400vh/600vh の Sticky スクロールジャックを含むが、
要件・CLAUDE.md の「スクロールを奪わない／読むために待たせない」を優先し、**採用しない**。

- 事業セクション：Sticky（400vh）を廃止 → 通常縦スクロール + `whileInView` フェードイン。
- Vision セクション：Sticky（600vh）を廃止 → 通常縦スクロールのリスト表示。
- Hero 離脱時の〇拡大：長い scroll-jack はしない。Hero 内の 8s 浮遊のみ、または
  短く完結するスクロール連動（数十vh 以内）に留める。
- 接続線の `pathLength` 描画など「短く完結する」演出は可。
- GSAP ScrollTrigger は原則不使用（本方針では登場箇所なし）。

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
