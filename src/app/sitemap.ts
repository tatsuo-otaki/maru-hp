import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { NEWS_PAGE } from "@/content/news";

/** 主要ページのサイトマップ */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  // ニュース記事はビルド時刻ではなく、実際の公開日（date）を lastmod に使う
  const newsEntries: MetadataRoute.Sitemap = NEWS_PAGE.items
    .filter((item) => item.slug)
    .map((item) => ({
      url: `${base}/news/${item.slug}`,
      lastModified: item.date ? new Date(item.date) : now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const staticPaths = [
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
    "/global",
    "/global/en",
    "/global/fr",
  ];
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  return [...staticEntries, ...newsEntries];
}
