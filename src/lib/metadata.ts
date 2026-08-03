import type { Metadata } from "next";
import { SITE } from "@/lib/site";

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
