import { SITE, getSiteUrl } from "@/lib/site";

/**
 * LLM 向けのサイト要約（/llms.txt）。
 * 参考：https://llmstxt.org/ 。AI/LLM が会社の概要・主要ページ・関連サイトを
 * 素早く正確に把握できるよう、Markdown で簡潔にまとめる。
 */
export function GET() {
  const url = getSiteUrl();
  const body = `# ${SITE.name}（${SITE.nameEn}）

> ${SITE.mission} AI・システム開発、AI教育・人材育成、仕事と社会参加の仕組みづくりを通じて、誰もが自分らしく幸せに働ける社会をつくる会社。

${SITE.name}（読み：まる、英語：${SITE.nameEn}）は、開発・教育・仕事の機会づくりを別々ではなく一つの循環としてつなぎます。技術で仕事を生み、教育で担い手を育て、仕組みで実際の仕事・社会参加につなげます。会社名の「〇」（漢数字の零）は、国や文化を越えたつながり・循環・調和を表す普遍的な記号です。

## 主要ページ
- [私たちについて](${url}/about): Mission・5つのVision・代表メッセージ・会社概要
- [事業内容](${url}/business): 3つの事業（AI・システム開発／AI教育・人材育成／仕事と社会参加の仕組みづくり）と実績
- [企業・自治体の方へ](${url}/partners): 人材育成・共創・CSRの各プログラムと連携パートナー募集
- [ニュース・プレス](${url}/news): メディア掲載・イベント登壇
- [お問い合わせ](${url}/contact): 各種ご相談・取材の窓口

## プログラム詳細
- [企業協働型AI人材育成プログラム](${url}/partners/ai-training)
- [実務実習・共創プロジェクト](${url}/partners/co-creation)
- [企業CSR共創パートナープログラム](${url}/partners/csr)

## 関連サイト
- [ブログ（maru - 楽しく働く）](${SITE.blogUrl})
- [AI・しごと学校](${SITE.schoolUrl})

## 会社情報
- 社名: ${SITE.name}（${SITE.nameEn}）
- 代表: 代表取締役 大瀧 達生
- 設立: 2021年8月27日
- 所在地: 愛知県名古屋市西区名駅2-4-3 ウエスタンビル3F
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
