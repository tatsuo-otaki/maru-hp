import Image from "next/image";
import { LINKHUB } from "@/content/linkhub";

/**
 * リンクハブ上部のプロフィール表示。
 * 実写真は未確定のため、ブランドモチーフ「〇」を使った円形プレースホルダーにしている。
 * 背景の同心円装飾は brand-guide.md の「背景弧」仕様（opacity 4–8%）に合わせている。
 */
export function ProfileHeader() {
  const { profile } = LINKHUB;

  return (
    <header className="relative flex flex-col items-center pt-14 pb-8 text-center">
      {/* 背景の同心円装飾（〇モチーフ） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[340px] w-[340px] -translate-x-1/2 rounded-full border border-navy/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 left-1/2 -z-10 h-[240px] w-[240px] -translate-x-1/2 rounded-full border border-teal/[0.08]"
      />

      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-white shadow-card">
        <Image
          src="/maru-mark.png"
          alt={profile.name}
          fill
          sizes="96px"
          className="object-contain p-3"
          priority
        />
      </div>

      <p className="mt-5 font-ja text-[14px] font-medium text-navy">{profile.name}</p>
      <p className="mt-1 font-en text-[11px] tracking-wide text-muted">{profile.nameEn}</p>
      <p className="mt-3 font-ja text-[13px] text-muted">{profile.tagline}</p>
    </header>
  );
}
