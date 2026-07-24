import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { CEO } from "@/content/home";

/**
 * トップ用の代表メッセージダイジェスト。写真＋見出し＋引用1文で、
 * 全文は /about#ceo の本編へ誘導する。
 */
export function CeoTeaser() {
  return (
    <Section id="ceo-teaser" className="relative overflow-hidden">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
        {/* 円形の代表写真 */}
        <Reveal className="shrink-0">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -inset-2 rounded-full border border-teal/[0.18]"
            />
            <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full border-[1.5px] border-teal/30 md:h-[220px] md:w-[220px]">
              <Image
                src={CEO.photo.src}
                alt={CEO.photo.alt}
                fill
                sizes="(max-width: 768px) 180px, 220px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* 見出し＋引用 */}
        <Reveal delay={0.1} className="md:flex-1">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
            <SectionLabel>{CEO.label}</SectionLabel>
          </div>
          <h2 className="mt-5 font-ja text-h2 font-medium leading-[1.55] text-navy">
            {CEO.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <blockquote className="mt-6 border-l-2 border-teal pl-4 font-ja text-body font-light leading-loose text-muted">
            {CEO.excerpt}
          </blockquote>
          <div className="mt-7 flex items-center gap-4">
            <TextLink href={CEO.cta.href}>{CEO.cta.label}</TextLink>
            <span className="font-ja text-[12px] text-muted">
              {CEO.name}（{CEO.role.split(" — ")[0]}）
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
