import { SITE } from "@/lib/site";

type LogoProps = {
  className?: string;
};

/**
 * 会社名のブランドロックアップ。
 * 「〇」は漢数字の零（U+3007）の文字をそのまま使用する。
 * 文字として扱うことで、字面の高さ・ベースラインが「株式会社」と完全に揃う。
 * ※ SITE.name（= "株式会社〇"）を単一ソースとし、U+3007 の取り違えを防ぐ。
 */
export function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center font-ja font-medium tracking-wide text-navy ${className}`}
    >
      {SITE.name}
    </span>
  );
}
