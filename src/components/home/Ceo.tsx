import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { CEO } from "@/content/home";

export function Ceo() {
  return (
    <Section id="ceo" className="relative overflow-hidden bg-surface">
      {/* 背景の薄い弧 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-20 -bottom-20 h-80 w-80 rounded-full border border-[rgba(15,31,61,0.05)]"
      />

      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
        {/* 左：円形の代表写真 */}
        <Reveal className="shrink-0">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -inset-2 rounded-full border border-teal/[0.18]"
            />
            <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full border-[1.5px] border-teal/30">
              <Image
                src={CEO.photo.src}
                alt={CEO.photo.alt}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* 右：メッセージ */}
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
          <div className="mt-6 space-y-5">
            {CEO.body.map((para) => (
              <p
                key={para}
                className="font-ja text-body font-light leading-loose text-muted"
              >
                {para}
              </p>
            ))}
          </div>
          <div className="mt-9 border-t border-line pt-5">
            <div className="font-ja text-[13px] font-medium text-navy">{CEO.name}</div>
            <div className="mt-1 font-en text-[9px] font-semibold uppercase tracking-[0.15em] text-muted">
              {CEO.role}
            </div>
          </div>

          {/* プロフィール（経歴） */}
          <div className="mt-10">
            <h3 className="mb-4 flex items-center gap-2 font-en text-[9px] font-semibold uppercase tracking-[0.2em] text-teal">
              <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
              Profile
            </h3>
            <p className="font-ja text-[13px] font-light leading-loose text-muted">
              {CEO.profile.bio}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {CEO.profile.groups.map((group) => (
                <div key={group.heading}>
                  <div className="mb-3 font-ja text-[12px] font-medium text-navy">
                    {group.heading}
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                        <span className="font-ja text-[12px] leading-relaxed text-muted">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
