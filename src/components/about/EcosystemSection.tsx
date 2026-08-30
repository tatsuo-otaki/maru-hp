import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { EcosystemDiagram } from "@/components/about/EcosystemDiagram";
import { EcosystemMobileDiagram } from "@/components/about/EcosystemMobileDiagram";
import { EcosystemMobileFlow } from "@/components/about/EcosystemMobileFlow";
import { ECOSYSTEM } from "@/content/ecosystem";

/**
 * 「つながりから、より良い社会へ。」セクション。
 * 事業の相関図ではなく、株式会社〇がどんな社会をつくりたいかを伝えることが目的。
 * /about の Vision（〇が変えたい5つの世界）の直後に配置し、
 * 「なぜ株式会社〇はいろいろな活動をするのか」への答えとして機能させる。
 */
export function EcosystemSection() {
  return (
    <div id="ecosystem">
      {/* A. 世界観 + B. エコシステム図 */}
      <section className="bg-warm py-16 md:py-24">
        <Reveal className="mx-auto max-w-[720px] px-6 text-center md:px-20">
          <div className="flex items-center justify-center gap-2.5">
            <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
            <SectionLabel>{ECOSYSTEM.label}</SectionLabel>
            <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          </div>
          <h2 className="mt-5 font-ja text-[1.75rem] font-light leading-[1.4] text-navy md:text-[2.75rem]">
            {ECOSYSTEM.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-7 max-w-[460px] font-ja text-[14px] leading-loose text-muted">
            {ECOSYSTEM.lead.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="mx-auto mt-6 max-w-[560px] space-y-4">
            {ECOSYSTEM.body.map((p) => (
              <p key={p} className="font-ja text-body font-light leading-loose text-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 px-6 md:mt-16 md:px-12 lg:px-20">
          <EcosystemDiagram />
          <EcosystemMobileDiagram />
        </div>
        <div className="mt-10 md:hidden">
          <EcosystemMobileFlow />
        </div>
      </section>

      {/* C. 世界観メッセージ + D. Mission接続 + CTA */}
      <section className="relative overflow-hidden bg-dark py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-160px] left-[-180px] h-[560px] w-[560px] rounded-full border border-[rgba(45,139,125,0.07)]"
        />

        <Reveal className="relative mx-auto max-w-[680px] px-6 text-center md:px-20">
          <h3 className="font-ja text-[1.5rem] font-medium leading-[1.55] text-warm md:text-[2.125rem]">
            {ECOSYSTEM.message.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <div className="mx-auto mt-6 max-w-[560px] space-y-3.5">
            {ECOSYSTEM.message.body.map((p) => (
              <p key={p} className="font-ja text-[13.5px] font-light leading-loose text-warm/55">
                {p}
              </p>
            ))}
          </div>

          {/* CTA 4方向 */}
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ECOSYSTEM.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className="group flex items-center justify-between gap-3 rounded-btn border border-warm/20 px-5 py-3.5 text-left text-warm transition-colors hover:bg-white/[0.08]"
              >
                <span className="font-ja text-[13px] font-medium">{cta.label}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
