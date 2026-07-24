import Image from "next/image";

type LogoProps = {
  /** 〇ロゴ画像のサイズ（px）。文字サイズに合わせて調整する */
  markSize?: number;
  className?: string;
};

/**
 * 会社名とロゴを一体化したブランドロックアップ。
 * 「株式会社」＋〇ロゴ画像（U+3007 の代わりに公式ロゴを使用）。
 * ※ 本文中の「株式会社〇」の〇は文字のまま。ここはブランド表記専用。
 */
export function Logo({ markSize = 20, className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 font-ja font-medium tracking-wide text-navy ${className}`}
    >
      株式会社
      <Image
        src="/maru-logo.png"
        alt="〇"
        width={markSize}
        height={markSize}
        className="inline-block"
        priority
      />
    </span>
  );
}
