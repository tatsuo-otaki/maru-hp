import type { Metadata } from "next";
import { Analytics } from "@/components/analytics/Analytics";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { ProfileHeader } from "@/components/link/ProfileHeader";
import { LatestCard } from "@/components/link/LatestCard";
import { CtaCard } from "@/components/link/CtaCard";
import { SocialRow } from "@/components/link/SocialRow";
import { LINKHUB } from "@/content/linkhub";
import { SITE } from "@/lib/site";

/**
 * SNSプロフィール（Instagram/YouTube/X/Facebook）からのみ到達する
 * 独立したリンクハブページ。グローバルナビには一切追加しない。
 * 検索エンジン・AI検索の評価対象から外すため noindex を明示する。
 */
export const metadata: Metadata = {
  title: "リンク集",
  robots: { index: false, follow: true },
};

export default function LinkHubPage() {
  return (
    <div className="min-h-screen bg-warm">
      <div className="mx-auto max-w-[420px] px-6 pb-14">
        <ProfileHeader />

        <section className="mt-2 space-y-3" aria-label="最新コンテンツ">
          {LINKHUB.latest.map((item) => (
            <LatestCard key={item.key} item={item} />
          ))}
        </section>

        <section className="mt-8 space-y-4" aria-label="お問い合わせ導線">
          {LINKHUB.ctas.map((item) => (
            <CtaCard key={item.key} item={item} />
          ))}
        </section>

        <div className="mt-10">
          <SocialRow />
        </div>

        <footer className="mt-10 flex flex-col items-center gap-2 border-t border-line pt-8 text-center">
          <a
            href="/contact"
            className="font-ja text-[13px] text-navy underline decoration-line underline-offset-4 hover:text-teal"
          >
            お問い合わせ
          </a>
          <p className="font-en text-[11px] text-muted">
            © {new Date().getFullYear()} {SITE.name} ({SITE.nameEn})
          </p>
        </footer>
      </div>

      <CookieConsent />
      <Analytics />
    </div>
  );
}
