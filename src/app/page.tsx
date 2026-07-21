import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { SITE } from "@/lib/site";

/**
 * 基盤確認用の暫定トップページ。
 * Header / Footer は layout.tsx で表示される。
 * トップページ各セクションは以降のフェーズで実装する。
 */
export default function Home() {
  return (
    <Section>
      <p className="font-en text-label uppercase tracking-[0.2em] text-teal">
        Foundation Ready
      </p>
      <h1 className="mt-4 max-w-3xl font-ja text-hero font-medium text-navy">
        幸せに働ける人を
        <br />
        世界中に増やす。
      </h1>
      <p className="mt-6 max-w-xl font-ja text-body-lg font-light text-navy">
        これは基盤（トークン・フォント・共通UI・Header/Footer）の確認用ページです。
        Mission「{SITE.mission}」はレイアウトの土台の上に、次フェーズで Hero として実装します。
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button href="/about" variant="primary" arrow>
          私たちについて
        </Button>
        <Button href="/business" variant="secondary">
          事業内容を見る
        </Button>
        <TextLink href="/projects">プロジェクト・実績を見る</TextLink>
      </div>
    </Section>
  );
}
