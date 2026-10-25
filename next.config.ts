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
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
