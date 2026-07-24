"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

/** 汎用 FAQ アコーディオン。details/summary ではなく状態管理でアニメーション可能に。 */
export function Faq({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="font-ja text-[14px] font-medium text-navy">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className={`shrink-0 font-en text-[14px] text-teal transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                ＋
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 font-ja text-[13px] leading-loose text-muted">
                {item.a}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
