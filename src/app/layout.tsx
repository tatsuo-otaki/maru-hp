import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { SITE, getSiteUrl } from "@/lib/site";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const description =
  "株式会社〇（maru Inc.）は、AI・システム開発、AI教育・人材育成、仕事と社会参加の仕組みづくりを通じて、誰もが自分らしく幸せに働ける社会をつくります。";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE.name} | ${SITE.mission}`,
    template: `%s | ${SITE.name}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "ja_JP",
    url: "/",
    title: `${SITE.name} | ${SITE.mission}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.mission}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-warm text-navy">
        <HashScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
