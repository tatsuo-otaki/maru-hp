"use client";

import Image from "next/image";
import { trackCardClick } from "@/lib/analytics";

type Item = {
  key: string;
  label: string;
  title: string;
  href: string;
  cardType: string;
  /** 記事のアイキャッチ画像URL（取得できない場合は undefined / null） */
  imageUrl?: string | null;
};

/**
 * 最新コンテンツ導線（ブログ）のカード。
 * アイキャッチ画像を上部に大きく表示し、タイトルは省略せず全文表示する。
 * 画像が取得できない場合はアイコンのプレースホルダーにフォールバックする。
 */
export function LatestCard({ item }: { item: Item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCardClick(item.cardType)}
      className="group block overflow-hidden rounded-card border border-line bg-white transition-colors hover:border-teal"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="420px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
            <span className="font-en text-[11px] font-semibold tracking-wide text-navy">BLOG</span>
          </div>
        )}
      </div>

      <div className="flex items-start gap-3 p-4">
        <div className="min-w-0 flex-1">
          <span className="block font-en text-[9px] font-semibold tracking-[0.12em] text-teal uppercase">
            {item.label}
          </span>
          <span className="mt-1.5 block font-ja text-[14px] leading-snug font-medium text-navy">
            {item.title}
          </span>
        </div>
        <span
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-navy/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-teal"
        >
          →
        </span>
      </div>
    </a>
  );
}
