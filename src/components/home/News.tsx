"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { NEWS } from "@/content/home";

const COLOR = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
} as const;

function tint(color: string, pct: number) {
  return `color-mix(in srgb, ${color} ${pct}%, white)`;
}

export function News() {
  const [active, setActive] = useState<string | null>(null);
  const items = active
    ? NEWS.items.filter((n) => n.cat === active)
    : NEWS.items;

  return (
    <Section id="news">
      <Reveal className="mb-12">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>{NEWS.label}</SectionLabel>
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        </div>
        <h2 className="mt-5 font-en text-[1.75rem] font-medium text-navy md:text-[2.25rem]">
          {NEWS.heading}
        </h2>
        <p className="mt-4 font-ja text-body leading-relaxed text-muted">
          {NEWS.intro}
        </p>
      </Reveal>

      {/* カテゴリチップ（絞り込み） */}
      <div className="mb-8 flex flex-wrap gap-2">
        {NEWS.categories.map((cat) => {
          const on = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(on ? null : cat)}
              aria-pressed={on}
              className={`rounded-full border px-3.5 py-1.5 font-ja text-[11px] transition-colors ${
                on
                  ? "border-teal bg-teal text-white"
                  : "border-line text-muted hover:text-navy"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ニュース一覧 */}
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="group flex items-center gap-4 border-b border-line py-5 transition-colors hover:bg-navy/[0.02] md:gap-5"
            >
              <span className="shrink-0 font-en text-[11px] tracking-wide text-muted">
                {item.date}
              </span>
              <span
                className="shrink-0 rounded-[10px] px-2.5 py-1 font-ja text-[9px] font-semibold"
                style={{ color: COLOR[item.color], backgroundColor: tint(COLOR[item.color], 10) }}
              >
                {item.cat}
              </span>
              <span className="font-ja text-[13px] leading-[1.5] text-navy">
                {item.title}
              </span>
              <span
                aria-hidden="true"
                className="ml-auto shrink-0 font-en text-[12px] text-muted transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </li>
        ))}
        {items.length === 0 && (
          <li className="py-8 text-center font-ja text-[13px] text-muted">
            該当するニュースはありません。
          </li>
        )}
      </ul>

      <div className="mt-7 flex flex-wrap gap-6">
        {NEWS.ctas.map((cta) =>
          cta.primary ? (
            <TextLink key={cta.label} href={cta.href}>
              {cta.label}
            </TextLink>
          ) : (
            <TextLink key={cta.label} href={cta.href} className="text-muted hover:text-navy">
              {cta.label}
            </TextLink>
          ),
        )}
      </div>
    </Section>
  );
}
