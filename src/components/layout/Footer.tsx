import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FOOTER_ITEMS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-warm">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        {/* ブランド + Mission */}
        <div className="max-w-sm">
          <div className="font-ja text-lg font-medium text-navy">
            株式会社<span className="text-teal">〇</span>
            <span className="ml-2 font-en text-sm text-muted">/ {SITE.nameEn}</span>
          </div>
          <p className="mt-4 font-ja text-h3 font-medium leading-relaxed text-navy">
            {SITE.mission}
          </p>
        </div>

        {/* リンク */}
        <nav aria-label="フッターナビゲーション">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
            {FOOTER_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-ja text-[0.8125rem] text-muted transition-colors hover:text-teal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="flex items-center justify-between border-t border-line py-6">
        <p className="font-en text-caption text-muted">
          © {new Date().getFullYear()} {SITE.nameEn}
        </p>
      </Container>
    </footer>
  );
}
