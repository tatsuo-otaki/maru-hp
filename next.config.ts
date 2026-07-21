import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 親ディレクトリの lockfile を誤ってワークスペースルートに選ばないよう明示する
  turbopack: {
    root: __dirname,
  },
  images: {
    // Hero のプレースホルダ写真（Unsplash）。実写真に差し替えたら削除してよい。
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
