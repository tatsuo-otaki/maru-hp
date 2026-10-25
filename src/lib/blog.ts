import { SITE } from "@/lib/site";

/**
 * maru のブログ（WordPress, aiiot.jp）の最新記事を取得する。
 * このWordPress環境は pretty permalink が無効なため、REST API・記事URLともに
 * index.php を経由するパスのみが有効（例: /index.php/wp-json/...）。
 */
/**
 * _fields でレスポンスを絞ると _embedded（アイキャッチ画像）が
 * WordPress側で一緒に除外されてしまうため、_fields は指定しない。
 * 1記事分のみの取得なのでレスポンスサイズは問題にならない。
 */
const WP_API_URL = `${SITE.blogUrl}index.php/wp-json/wp/v2/posts?per_page=1&_embed=wp:featuredmedia`;

export type LatestBlogPost = {
  title: string;
  href: string;
  /** アイキャッチ画像のURL（未設定の記事の場合は null） */
  imageUrl: string | null;
};

type WpMediaSize = { source_url: string; width: number; height: number };

type WpPost = {
  link: string;
  title: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      media_details?: { sizes?: Record<string, WpMediaSize> };
    }>;
  };
};

/** アイキャッチ画像から、カード表示に適したサイズのURLを選ぶ（なければ元画像） */
function pickThumbnailUrl(post: WpPost): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  return media.media_details?.sizes?.medium_large?.source_url ?? media.source_url;
}

/** WordPressが返すHTMLエンティティ（&#8217; 等）をデコードする */
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec: string) => String.fromCodePoint(Number(dec)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

/**
 * 最新記事のタイトル・URLを取得する。
 * 取得に失敗した場合（API変更・ネットワーク断など）は null を返し、
 * 呼び出し側で固定リンクへフォールバックする。
 */
export async function getLatestBlogPost(): Promise<LatestBlogPost | null> {
  try {
    const res = await fetch(WP_API_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const posts: WpPost[] = await res.json();
    const post = posts[0];
    if (!post) return null;

    return {
      title: decodeHtmlEntities(post.title.rendered),
      href: post.link,
      imageUrl: pickThumbnailUrl(post),
    };
  } catch {
    return null;
  }
}
