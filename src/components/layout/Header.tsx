"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { NAV_ITEMS, SITE } from "@/lib/site";

const links = NAV_ITEMS.filter((item) => item.href !== "/contact");
const contact = NAV_ITEMS.find((item) => item.href === "/contact");

export function Header() {
  const [open, setOpen] = useState(false);

  // Escape でメニューを閉じる。開いている間は背景スクロールを止める。
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-warm/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        {/* ロゴ / 社名 */}
        <Link href="/" aria-label={`${SITE.name} ホームへ`}>
          <Logo className="text-lg" />
        </Link>

        {/* Desktop ナビ */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="グローバルナビゲーション">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-1 font-ja text-[0.8125rem] text-navy transition-colors hover:text-teal"
            >
              {item.label}
              {item.external && (
                <span aria-hidden="true" className="text-[0.7em] text-muted">
                  ↗
                </span>
              )}
            </Link>
          ))}
          {contact && (
            <Button href={contact.href} variant="headerCta">
              {contact.label}
            </Button>
          )}
        </nav>

        {/* Mobile ハンバーガー */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-navy transition-all duration-200 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-navy transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-navy transition-all duration-200 ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile メニュー */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="モバイルナビゲーション"
          className="border-t border-line bg-warm lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center gap-1 rounded-btn py-3 font-ja text-[0.9375rem] text-navy transition-colors hover:text-teal"
                onClick={() => setOpen(false)}
              >
                {item.label}
                {item.external && (
                  <span aria-hidden="true" className="text-[0.7em] text-muted">
                    ↗
                  </span>
                )}
              </Link>
            ))}
            {contact && (
              <Button
                href={contact.href}
                variant="headerCta"
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                {contact.label}
              </Button>
            )}
          </Container>
        </nav>
      )}
    </header>
  );
}
