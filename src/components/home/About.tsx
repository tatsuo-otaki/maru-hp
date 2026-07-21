import { Fragment } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT } from "@/content/home";

/** 3事業を予告する接続カード（読みやすい実文字＋色付き円） */
function PillarCards() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
      {ABOUT.pillars.map((p, i) => (
        <Fragment key={p.num}>
          <div className="flex-1 rounded-card border border-line bg-white/40 p-6">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full border-2"
              style={{ borderColor: p.color }}
            >
              <span className="font-en text-sm font-semibold" style={{ color: p.color }}>
                {p.num}
              </span>
            </span>
            <h3 className="mt-4 font-ja text-h3 font-medium text-navy">
              {p.label}
            </h3>
            <p className="mt-2 font-ja text-caption leading-relaxed text-muted">
              {p.desc}
            </p>
          </div>
          {i < ABOUT.pillars.length - 1 && (
            <div
              aria-hidden="true"
              className="hidden h-px w-10 self-center bg-line md:block"
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function About() {
  return (
    <Section id="about" fullWidth className="relative overflow-hidden">
      {/* 背景の薄い大〇（ブランドモチーフ） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-[rgba(15,31,61,0.045)]"
      />

      <Container className="relative">
        {/* 見出し・本文・強調（中央寄せ） */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>{ABOUT.label}</SectionLabel>
          <h2 className="mt-5 font-ja text-[1.75rem] font-medium leading-[1.55] text-navy lg:text-[2.125rem]">
            {ABOUT.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-8 space-y-4">
            <p className="font-ja text-body-lg font-light leading-loose text-navy">
              {ABOUT.body[0]}
            </p>
            {ABOUT.body.slice(1).map((para) => (
              <p key={para} className="font-ja text-body leading-loose text-muted">
                {para}
              </p>
            ))}
          </div>

          {/* 強調（左右に teal のルール） */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span aria-hidden="true" className="h-px w-8 bg-teal" />
            <p className="font-ja text-h3 font-medium text-navy">
              {ABOUT.emphasis}
            </p>
            <span aria-hidden="true" className="h-px w-8 bg-teal" />
          </div>
        </Reveal>

        {/* 3事業カード */}
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl">
          <PillarCards />
        </Reveal>
      </Container>
    </Section>
  );
}
