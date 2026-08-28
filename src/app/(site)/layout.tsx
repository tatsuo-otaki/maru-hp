import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { Analytics } from "@/components/analytics/Analytics";
import { StructuredData } from "@/components/seo/StructuredData";

/**
 * コーポレートサイト本体（グローバルナビあり）のレイアウト。
 * /link などの独立ページはこのグループの外に置き、Header/Footer等を読み込まない。
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StructuredData />
      <HashScroll />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
      <Analytics />
    </>
  );
}
