"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { NEWS_PAGE, NEWS_CATEGORY_COLOR, newsLink, type NewsCategory } from "@/content/news";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
} as const;

function tint(color: string, pct: number) {
  return `color-mix(in srgb, ${color} ${pct}%, white)`;
}

export function NewsList() {
  const [active, setActive] = useState<NewsCategory | null>(null);

  // 掲載されているカテゴリのみをチップに出す
  const categories = useMemo(() => {
    const set = new Set<NewsCategory>();
    NEWS_PAGE.items.forEach((n) => set.add(n.category));
    return [...set];
  }, []);

  const items = active
    ? NEWS_PAGE.items.filter((n) => n.category === active)
    : NEWS_PAGE.items;

  return (
    <Section>
      {/* カテゴリ絞り込み */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={`rounded-full border px-3.5 py-1.5 font-ja text-[11px] transition-colors ${
            active === null
              ? "border-navy bg-navy text-white"
              : "border-line text-muted hover:text-navy"
          }`}
        >
          すべて
        </button>
        {categories.map((cat) => {
          const on = active === cat;
          const c = COLOR[NEWS_CATEGORY_COLOR[cat]];
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(on ? null : cat)}
              aria-pressed={on}
              className="rounded-full border px-3.5 py-1.5 font-ja text-[11px] transition-colors"
              style={
                on
                  ? { backgroundColor: c, borderColor: c, color: "white" }
                  : { borderColor: "var(--color-line)", color: "var(--color-muted)" }
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 一覧 */}
      <ul className="border-t border-line">
        {items.map((item) => {
          const c = COLOR[NEWS_CATEGORY_COLOR[item.category]];
          const link = newsLink(item);
          const rowClass =
            "group flex flex-col gap-2 border-b border-line py-5 md:flex-row md:items-center md:gap-5";
          const inner = (
            <>
              <div className="flex shrink-0 items-center gap-3 md:w-56">
                <span
                  className="rounded-[10px] px-2.5 py-1 font-ja text-[9px] font-semibold"
                  style={{ color: c, backgroundColor: tint(c, 10) }}
                >
                  {item.category}
                </span>
                {(item.year || item.outlet) && (
                  <span className="font-en text-[11px] tracking-wide text-muted">
                    {item.year ?? item.outlet}
                  </span>
                )}
              </div>
              <span className="font-ja text-[13px] leading-[1.6] text-navy">
                {item.title}
                {item.year && item.outlet && (
                  <span className="ml-2 font-ja text-[11px] text-muted">
                    — {item.outlet}
                  </span>
                )}
              </span>
              {link && (
                <span
                  aria-hidden="true"
                  className="ml-auto hidden shrink-0 font-en text-[12px] text-muted transition-transform duration-200 group-hover:translate-x-0.5 md:inline"
                >
                  {link.external ? "↗" : "→"}
                </span>
              )}
            </>
          );
          return (
            <li key={item.title}>
              {link ? (
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`${rowClass} transition-colors hover:bg-navy/[0.02]`}
                >
                  {inner}
                </a>
              ) : (
                <div className={rowClass}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>

      {/* 報道・メディア関係者向け */}
      <div className="mt-10 rounded-card border border-line bg-surface px-6 py-5">
        <div className="font-ja text-[13px] font-medium text-navy">
          報道・メディア関係者の方へ
        </div>
        <p className="mt-2 font-ja text-[12.5px] leading-relaxed text-muted">
          {NEWS_PAGE.mediaNote}
        </p>
        <div className="mt-3">
          <TextLink href="/contact">お問い合わせ</TextLink>
        </div>
      </div>
    </Section>
  );
}
