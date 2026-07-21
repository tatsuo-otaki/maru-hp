# 株式会社〇 コーポレートサイト

@AGENTS.md
@docs/requirements.md
@docs/site-map.md
@docs/content-home.md
@docs/brand-guide.md
@docs/motion-spec.md
@design-reference/figma-links.md

## プロジェクトの目的

株式会社〇（maru Inc.）のコーポレートサイトを構築する。

Mission：

「幸せに働ける人を世界中に増やす。」

補助コピー：

「楽しく働き、幸せをつくる。」

## 事業の3本柱

1. AI・システム開発
2. AI教育・人材育成
3. 仕事と社会参加の仕組みづくり

## デザイン方針

- 全体構造は Human × Technology
- ブランドモチーフは「〇」
- 写真とプロジェクト表現では地域、文化、人、教育、仕事の多様性を表す
- 高い技術力と、誰も取り残さない仕組みを両立する
- 明るくモダンで、信頼できるデザインにする
- サイバー感や AI 生成感を強くしすぎない
- 福祉団体だけに見える表現を避ける
- 一般的な IT 受託会社にも見えすぎない
- 100 年以上使用できる普遍性を重視する

## フォント

- 日本語：Noto Sans JP
- 英語、数字、UI：Inter

## 技術構成

- Next.js App Router（**注意：本プロジェクトは Next.js 16 系。従来と異なる破壊的変更あり。@AGENTS.md 参照**）
- TypeScript
- Tailwind CSS（**v4 系。CSS ベース設定。tailwind.config.js は標準では生成されない**）
- Framer Motion
- GSAP ScrollTrigger は特殊なスクロール演出に限定
- Next.js Image
- Vercel へのデプロイを想定

## 実装原則

- Figma を視覚仕様として参照する
- Figma Make の生成コードをそのままコピーしない
- 保守可能な React コンポーネントへ再構成する
- モバイルファーストを意識する
- Server Component を基本とする
- 動きが必要な部分だけ Client Component にする
- コンテンツをコンポーネント内部へ大量に直書きしない
- 再利用可能な UI とページ固有セクションを分ける
- セマンティック HTML を使用する
- 不要なライブラリを追加しない

## アニメーション原則

- 動きは情報理解とブランド表現のために使う
- 読むために待つ必要がある演出を避ける
- スクロールを奪わない
- Mobile では簡略化する
- prefers-reduced-motion に対応する
- 動きが無効でも内容を理解できるようにする

## アクセシビリティ

- キーボードで操作できる
- フォーカス状態を表示する
- 十分なコントラストを確保する
- 色だけで意味を伝えない
- 適切な見出し階層を使う
- 画像に適切な alt を設定する
- 装飾画像には空の alt を使用する

## 作業ルール

- 最初に既存コードと資料を読む
- 大きな変更を一度に実施しない
- セクション単位で実装する
- 実装前に計画を提示する
- 指定された対象以外を不用意に変更しない
- 各作業後に lint と build を実行する
- エラーを無視しない
- Figma との差異が必要な場合は、理由を説明する
- 作業単位ごとに Git コミット可能な状態を維持する
- デザインの改善案と仕様変更を混同しない

## 品質確認コマンド

```bash
npm run lint
npm run build
```

可能であれば、以下も確認する。

- TypeScript エラー
- Desktop / Tablet / Mobile
- Reduced Motion
- キーボード操作
- Lighthouse
- レイアウトシフト
