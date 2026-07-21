import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT } from "@/content/home";

/** 3事業を予告する三角モチーフ（装飾） */
function PillarMotif() {
  const [ai, edu, social] = ABOUT.pillars;
  const vertices = [
    { ...ai, x: 120, y: 34, lx: 120, ly: 12 },
    { ...edu, x: 44, y: 158, lx: 44, ly: 188 },
    { ...social, x: 196, y: 158, lx: 196, ly: 188 },
  ];
  return (
    <svg
      viewBox="0 0 240 205"
      className="h-auto w-[220px]"
      aria-hidden="true"
      role="presentation"
    >
      {/* 三角の接続線 */}
      <path
        d="M120 34 L44 158 L196 158 Z"
        fill="none"
        stroke="var(--color-line)"
        strokeWidth={1}
      />
      {vertices.map((v) => (
        <g key={v.num}>
          <circle
            cx={v.x}
            cy={v.y}
            r={20}
            fill="none"
            stroke={v.color}
            strokeWidth={1.5}
          />
          <circle cx={v.x} cy={v.y} r={6} fill={v.color} />
          <text
            x={v.lx}
            y={v.ly}
            textAnchor="middle"
            className="font-ja"
            fontSize={10}
            fill="var(--color-muted)"
          >
            {v.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function About() {
  return (
    <Section id="about" fullWidth className="relative overflow-hidden">
      {/* 背景の薄い大円弧 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[220px] -top-[260px] h-[560px] w-[560px] rounded-full border border-[rgba(15,31,61,0.05)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[260px] top-1/3 h-[520px] w-[520px] rounded-full border border-[rgba(45,139,125,0.05)]"
      />

      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* 左：見出し＋強調＋モチーフ */}
          <Reveal>
            <SectionLabel>{ABOUT.label}</SectionLabel>
            <h2 className="mt-5 font-ja text-[1.75rem] font-medium leading-[1.55] text-navy lg:text-[2.125rem]">
              {ABOUT.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-8 border-l-2 border-teal pl-4 font-ja text-h3 font-medium leading-relaxed text-navy">
              {ABOUT.emphasis}
            </p>

            <div className="mt-12 hidden md:block">
              <PillarMotif />
            </div>
          </Reveal>

          {/* 右：本文 */}
          <Reveal delay={0.1} className="md:pt-2">
            <div className="space-y-5">
              <p className="font-ja text-body-lg font-light leading-loose text-navy">
                {ABOUT.body[0]}
              </p>
              {ABOUT.body.slice(1).map((para) => (
                <p
                  key={para}
                  className="font-ja text-body leading-loose text-muted"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* モバイルではモチーフを本文下に置く */}
            <div className="mt-10 md:hidden">
              <PillarMotif />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
