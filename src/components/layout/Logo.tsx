import Image from "next/image";

type LogoProps = {
  className?: string;
};

/**
 * 会社名とロゴを一体化したブランドロックアップ。
 * 「株式会社」＋〇ロゴ画像（U+3007 の代わりに公式ロゴを使用）。
 * ロゴの高さは文字の高さ（1em）に揃うよう CSS で制御する。
 * ※ 本文中の「株式会社〇」の〇は文字のまま。ここはブランド表記専用。
 */
export function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 font-ja font-medium tracking-wide text-navy ${className}`}
    >
      株式会社
      <Image
        src="/maru-logo.png"
        alt="〇"
        width={64}
        height={64}
        priority
        // 高さを文字高さ（1em）に一致させる。正方形なので幅も 1em。
        style={{ height: "1em", width: "1em" }}
      />
    </span>
  );
}
