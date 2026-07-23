import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

type PageHeroProps = {
  /** 英字ラベル（例: About / Business） */
  label: string;
  /** 見出し（日本語） */
  title: ReactNode;
  /** リード文 */
  lead?: ReactNode;
};

/**
 * 下層ページ共通のヒーロー。Warm White 基調＋背景に薄い〇モチーフ。
 * 静的な Server Component。
 */
export function PageHero({ label, title, lead }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* 背景の薄い〇 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-160px] h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[rgba(15,31,61,0.05)] md:h-[560px] md:w-[560px]"
      />
      <Container className="relative py-16 md:py-24">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-5 font-ja text-[2rem] font-medium leading-[1.4] text-navy md:text-[2.75rem]">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl font-ja text-body-lg font-light leading-loose text-muted">
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
