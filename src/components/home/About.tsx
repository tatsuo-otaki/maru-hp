import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT } from "@/content/home";

/** 3事業（枠なし・3カラム・縦罫線・中央揃え。モバイルは行レイアウト＋横罫線） */
function Pillars() {
  return (
    <div className="mx-auto grid max-w-[820px] grid-cols-1 md:grid-cols-3">
      {ABOUT.pillars.map((p, i) => (
        <div
          key={p.num}
          className={`flex flex-col items-center p-7 text-center max-md:flex-row max-md:items-start max-md:gap-4 max-md:p-5 max-md:text-left ${
            i < ABOUT.pillars.length - 1
              ? "border-line max-md:border-b md:border-r"
              : ""
          }`}
        >
          <span
            className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full md:mb-3.5"
            style={{ border: `1.5px solid ${p.color}` }}
          >
            <span
              className="font-en text-[13px] font-medium"
              style={{ color: p.color }}
            >
              {p.num}
            </span>
          </span>
          <div>
            <div className="mb-1.5 font-ja text-[15px] font-medium text-navy">
              {p.label}
            </div>
            <div className="font-ja text-[11px] leading-[1.8] text-muted">
              {p.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function About() {
  return (
    <Section id="about" fullWidth className="relative overflow-hidden">
      {/* 背景の薄い同心円（ブランドモチーフ） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(15,31,61,0.05)] md:h-[880px] md:w-[880px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(15,31,61,0.04)] md:block"
      />

      <Container className="relative">
        <Reveal className="flex flex-col items-center">
          {/* ラベル（左右に teal ルール） */}
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-5 bg-teal" />
            <SectionLabel>{ABOUT.label}</SectionLabel>
            <span aria-hidden="true" className="h-px w-5 bg-teal" />
          </div>

          {/* 見出し（2行） */}
          <h2 className="mt-8 text-center font-ja text-[1.625rem] font-medium leading-[1.55] text-navy md:text-[2.375rem]">
            {ABOUT.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* 本文（単一の中央段落） */}
          <p className="mt-8 max-w-[560px] text-center font-ja text-body leading-loose text-muted md:mt-10">
            {ABOUT.body.join("")}
          </p>

          {/* 強調（上下ボーダーの帯） */}
          <div className="mt-8 flex justify-center max-md:w-full md:mt-11">
            <div className="border-y border-line py-[18px] max-md:w-full md:px-12">
              <p className="text-center font-ja text-h3 font-medium text-navy">
                {ABOUT.emphasis}
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3事業 */}
        <Reveal delay={0.1} className="mt-12 md:mt-14">
          <Pillars />
        </Reveal>
      </Container>
    </Section>
  );
}
