"use client";

import { YoutubeIcon } from "@/components/link/SocialIcons";
import type { LINKHUB } from "@/content/linkhub";
import { trackCardClick } from "@/lib/analytics";

type Item = (typeof LINKHUB)["latest"][number];

/**
 * 最新コンテンツ導線（YouTube / ブログ）の横長カード。
 * サムネイル画像は未確定のため、アイコンのプレースホルダーで表現している。
 */
export function LatestCard({ item }: { item: Item }) {
  const isVideo = item.key === "youtube";

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCardClick(item.cardType)}
      className="group flex items-center gap-4 rounded-card border border-line bg-white p-3 transition-colors hover:border-teal"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[3px] bg-surface text-navy">
        {isVideo ? (
          <YoutubeIcon className="h-6 w-6" />
        ) : (
          <span className="font-en text-[10px] font-semibold tracking-wide">BLOG</span>
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-en text-[9px] font-semibold tracking-[0.12em] text-teal uppercase">
          {item.label}
        </span>
        <span className="mt-1 block truncate font-ja text-[13.5px] font-medium text-navy">
          {item.title}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="shrink-0 text-navy/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-teal"
      >
        →
      </span>
    </a>
  );
}
