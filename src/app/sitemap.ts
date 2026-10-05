import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { NEWS_PAGE } from "@/content/news";

/** 主要ページのサイトマップ */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const newsSlugPaths = NEWS_PAGE.items
    .filter((item) => item.slug)
    .map((item) => `/news/${item.slug}`);
  const paths = [
    "/",
    "/about",
    "/business",
    "/partners",
    "/partners/ai-training",
    "/partners/co-creation",
    "/partners/csr",
    "/news",
    ...newsSlugPaths,
    "/contact",
    "/privacy",
    "/global",
    "/global/en",
    "/global/fr",
  ];
  const now = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
