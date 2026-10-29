import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // 親ディレクトリの lockfile を誤ってワークスペースルートに選ばないよう明示する
  turbopack: {
    root: __dirname,
  },
  // ニュース記事本文（src/content/news/*.mdx）を扱うため .md/.mdx を有効化
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    // /link ページのブログカードで maru のブログ（aiiot.jp）のアイキャッチ画像を表示するため
    remotePatterns: [{ protocol: "https", hostname: "aiiot.jp" }],
  },
  /**
   * コーポレートサイト刷新前、maru.nagoya は旧WordPressブログ（現在は aiiot.jp）の
   * 記事をそのまま配信していた。検索・AIが参照している旧URLの評価を維持するため、
   * 残存パスを aiiot.jp の同じパスへ301で転送する。
   * aiiot.jp はパーマリンク設定の都合で index.php を経由するパスのみ有効なため、
   * /category, /tag, /feed は index.php を補って転送する（/wp-content は index.php 不要）。
   */
  async redirects() {
    return [
      { source: "/index.php/:path*", destination: "https://aiiot.jp/index.php/:path*", permanent: true },
      { source: "/wp-content/:path*", destination: "https://aiiot.jp/wp-content/:path*", permanent: true },
      { source: "/category/:path*", destination: "https://aiiot.jp/index.php/category/:path*", permanent: true },
      { source: "/tag/:path*", destination: "https://aiiot.jp/index.php/tag/:path*", permanent: true },
      { source: "/feed", destination: "https://aiiot.jp/index.php/feed", permanent: true },
      { source: "/feed/:path*", destination: "https://aiiot.jp/index.php/feed/:path*", permanent: true },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
