import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import type { GLang } from "@/content/global";

/**
 * 下層ページ共通のメタデータを組み立てる。
 * - canonical をページ自身に設定（トップへの誤った正規化を防ぐ）
 * - OGP / Twitter のタイトル・説明をページ個別に設定
 *
 * ※ Next では、ページ側で openGraph を定義するとルート layout の openGraph を
 *   丸ごと上書きし、画像・site_name・locale・type が失われる。そのため
 *   ここで OGP を完全形として再宣言する（画像はサイト共通の /opengraph-image）。
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const ogTitle = `${title} | ${SITE.name}`;
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: ogTitle }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "ja_JP",
      url: path,
      title: ogTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images,
    },
  };
}

const GLOBAL_PATHS: Record<GLang, string> = { ja: "/global", en: "/global/en", fr: "/global/fr" };
const OG_LOCALE: Record<GLang, string> = { ja: "ja_JP", en: "en_US", fr: "fr_FR" };

/**
 * /global（3言語）専用のメタデータ。pageMetadata() と役割は同じだが、
 * hreflang（alternates.languages）と言語別の og:locale を追加で持たせる。
 */
export function globalPageMetadata({
  lang,
  title,
  description,
}: {
  lang: GLang;
  title: string;
  description: string;
}): Metadata {
  const path = GLOBAL_PATHS[lang];
  const ogTitle = `${title} | ${SITE.name}`;
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: ogTitle }];
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        ja: GLOBAL_PATHS.ja,
        en: GLOBAL_PATHS.en,
        fr: GLOBAL_PATHS.fr,
        "x-default": GLOBAL_PATHS.ja,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: OG_LOCALE[lang],
      url: path,
      title: ogTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images,
    },
  };
}
