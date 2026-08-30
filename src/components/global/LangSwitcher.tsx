import Link from "next/link";
import { GLOBAL_LANGS, type GLang } from "@/content/global";

/**
 * Maru Global の言語切替（JA / EN / FR）。
 * /global・/global/en・/global/fr は独立したルートなので、通常のリンクとして実装する
 * （クライアント側の状態切り替えではない＝各言語が個別にインデックスされ、SEO的に正しい）。
 */
export function LangSwitcher({ lang, dark = false }: { lang: GLang; dark?: boolean }) {
  return (
    <nav aria-label="Language / Langue / 言語切替" className="flex items-center gap-1">
      {GLOBAL_LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <Link
            key={l.code}
            href={l.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 font-en text-[10px] font-semibold tracking-wide uppercase transition-colors ${
              active
                ? "bg-teal text-white"
                : dark
                  ? "text-warm/55 hover:text-white"
                  : "text-muted hover:text-navy"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
