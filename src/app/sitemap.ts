import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

/** 主要ページのサイトマップ（詳細ページは今後データ確定時に追加） */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = [
    "/",
    "/about",
    "/business",
    "/partners",
    "/partners/ai-training",
    "/partners/co-creation",
    "/partners/csr",
    "/news",
    "/contact",
    "/privacy",
  ];
  const now = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
