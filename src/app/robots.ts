import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

/**
 * AI検索・引用用、および学習用のAIボットを個別に明示する。
 * `*` への Allow: / だけでも許可はされるが、将来 WAF/Bot Control や
 * 追加の Disallow を入れる際に「AIボットは意図的に許可している」ことが
 * コードから読み取れるよう、個別に列挙しておく。
 */
const AI_USER_AGENTS = [
  // AI検索・引用用
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  // 学習用（認知を広げる段階のため許可）
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  // API エンドポイント・SNSプロフィール専用のリンクハブはクロール不要
  const disallow = ["/api/", "/link"];

  return {
    rules: [
      ...AI_USER_AGENTS.map((userAgent) => ({ userAgent, allow: "/", disallow })),
      { userAgent: "*", allow: "/", disallow },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
