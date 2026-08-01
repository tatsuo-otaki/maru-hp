import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 親ディレクトリの lockfile を誤ってワークスペースルートに選ばないよう明示する
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
