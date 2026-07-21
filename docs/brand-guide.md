# ブランドガイド（Design Foundations）

> Figma Make（Corporate Site Design Concepts）の `DesignFoundationsPage` から抽出した実値。
> 出典：Figma Make fileKey `uK5pZxspwam8UuTLH4rc5f` / `src/app/App.tsx`。
> ※ Figma Make のプロトタイプはデスクトップ専用（`minWidth: 960`）。Mobile 値は同ファイル内の
> 「Responsive Rules」「Mobile 390px Preview」表からの指定であり、実装時に最適化する。

## コンセプト

- 全体構造：Human × Technology
- ブランドモチーフ：Universal Circle（〇）
- 写真・プロジェクト表現：Living Network

## カラー

| 用途 | 名称 | 値 |
| --- | --- | --- |
| ベース背景 | Warm White (`bg`) | `#F8F6F2` |
| 文字 / 主要UI | Deep Navy (`fg`) | `#0F1F3D` |
| アクセント（主） | Teal (`accent`) | `#2D8B7D` |
| アクセント（副） | Amber (`amber`) | `#C4873C` |
| サーフェス（カード等） | Surface | `#EEF2F8` |
| 補助テキスト | Muted | `#6B7A8D` |
| ボーダー | Border | `rgba(15,31,61,0.09)` |
| ダーク面 | Dark | `#0A1629` |

- 使用ルール：Warm White を中心に、Deep Navy を文字・主要UI、Teal / Amber はアクセントに限定。
- フォーカスリング：`accent`（#2D8B7D）の 40% 不透明、3px offset。

## タイポグラフィ

- 日本語 / UI：Noto Sans JP（400・500 中心 / 300 は軽い本文）
- 英語・数字・UI：Inter（500・600 ラベル / 300 は大きな数字）

### タイプスケール（Desktop / Mobile px）

| 名称 | フォント | weight | Desktop | Mobile | line-height | letter-spacing |
| --- | --- | --- | --- | --- | --- | --- |
| Hero | Noto Sans JP | 500 | 56 | 34 | 1.55 | normal |
| H1 | Noto Sans JP | 500 | 44 | 32 | 1.5 | normal |
| H2 | Noto Sans JP | 500 | 28 | 22 | 1.5 | normal |
| H3 | Noto Sans JP | 500 | 18 | 16 | 1.5 | normal |
| Body Large | Noto Sans JP | 300 | 16 | 15 | 2.0 | normal |
| Body | Noto Sans JP | 400 | 14 | 13 | 1.9 | normal |
| Caption | Noto Sans JP | 300 | 11 | 11 | 1.75 | normal |
| English Label | Inter | 600 | 9 | 9 | 1 | 3px |
| Navigation | Inter | 500 | 9 | — | 1 | 1.5px |
| Button | Noto Sans JP | 500 | 12 | 13 | 1 | normal |

## 余白 / スペーシング

- ベーススケール（px）：`4, 8, 12, 16, 24, 32, 48, 64, 80, 120`
- 左右余白：Desktop `80px` / Tablet `48px` / Mobile `24px`
- セクション上下：Desktop `80–100px` / Mobile `48–56px`
- カード内余白：`32–36px`／カード間 Gap：`14–24px`
- グリッド Gap：`14px`（Bento）/ `24px`（card）
- ナビ高さ：`64px`

## ボタン

- 角丸：全ボタン共通 `3px`（シャープでもピルでもない、控えめな角丸）
- Primary：bg `#0F1F3D` / 文字白 → hover で bg Teal
- Secondary：透明背景 + ボーダー / 文字 Navy → hover `rgba(15,31,61,0.04)`
- Text Link：Teal 文字、矢印付き
- Header CTA：bg Teal / 文字白 → hover bg Navy
- ホバー時、ボタン内の矢印を 3–4px 右へアニメーション（矢印は常に animate）

## カード

- 角丸 `4px`、背景 Surface（`#EEF2F8`）、ボーダー Border
- ホバー：`translateY(-4px)` + 影 `0 10px 28px rgba(15,31,61,0.09)` + 背景白 + ボーダー Teal
- 番号バッジ：直径 `48px` の円、hover で Teal 塗り

## 円モチーフ「〇」

| 種類 | サイズ | スタイル | 用途 |
| --- | --- | --- | --- |
| Hero 〇 | 880px | border 1px / opacity 6% | ヒーロー背景装飾・スクロールで拡大 |
| 接続円 | 72–120px | border 1.5–2px / teal or amber | 事業・ビジョン間の関係 |
| 番号バッジ | 42–56px | hover で solid 塗り | 事業 01/02/03 |
| リスト〇 | 6–10px | solid / アクセント | 箇条書き |
| 写真マスク | 240–480px | border-radius 50% | ヒーロー写真・プロフィール |
| 背景弧 | 300–720px | border 1px / opacity 4–8% | セクション背景のサブ装飾 |

## 写真ルール

- 円形マスク（240–480px）で扱う。人物・地域・教育・仕事の多様性を表す（Living Network）。
- 一般的な採用サイト風・AI生成画像の羅列を避ける。

## レスポンシブ

- ブレークポイント：Desktop `≥ 1024px` / Tablet `768–1023px` / Mobile `< 768px`
- 確認幅：1440 / 1024 / 768 / 390

### 要素別レスポンシブ指針（Figma Make「Responsive Rules」より）

| 要素 | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| ヘッダー | 横並びリンク + CTA | リンク2件 + CTA | ロゴ + ハンバーガー |
| ヒーロー | 左テキスト / 右円形写真（2列） | 左テキスト / 右小さめ写真 | テキスト上・写真下（縦） |
| 見出し | Hero 56 / H2 28 | Hero 44 / H2 24 | Hero 34 / H2 22 |
| 左右余白 | 80px | 48px | 24px |
| 事業セクション | Sticky + 三角 SVG（400vh） | タブ切り替え | 縦スタックカード |
| Vision | Sticky スクロール（600vh） | Sticky（簡略） | 通常縦スクロールリスト |
| プロジェクト | Bento（2fr 1fr 1fr） | 2カラム | 1カラム |
| アニメーション | フル実装 | ほぼフル（一部軽量） | fade-in のみ |
| 写真 | 460px 円形 | 320px 円形 | 240px 円形・下配置 |
| CTA | 横並び2ボタン | 横並び | 縦スタック・全幅 |

> ⚠️ 注意：Figma Make は事業セクションを 400vh Sticky、Vision を 600vh Sticky の
> スクロールジャック演出で構成している。これは要件・CLAUDE.md の「スクロールを奪わない」
> 「読むために待たせない」方針と衝突しうる。実装方針は要協議（motion-spec.md 参照）。
