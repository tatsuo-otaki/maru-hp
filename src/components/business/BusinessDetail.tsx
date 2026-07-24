import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS } from "@/content/home";

type Accent = "teal" | "amber" | "navy";
const COLOR: Record<Accent, string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
};

/** 3事業の詳細（各アンカー付き・主な取り組み＋役割）。/business で使用。 */
export function BusinessDetail() {
  return (
    <>
      {BUSINESS.items.map((biz, i) => {
        const c = COLOR[biz.color as Accent];
        // 交互に背景を変えてメリハリをつける
        const bg = i % 2 === 0 ? "bg-warm" : "bg-surface";
        return (
          <Section
            key={biz.num}
            id={biz.slug}
            className={`relative overflow-hidden border-t border-line ${bg}`}
          >
            <div className="grid gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
              {/* 左：番号・タイトル・リード */}
              <Reveal>
                <div className="flex items-center gap-4">
                  <span
                    className="font-en text-[2.5rem] font-bold leading-none"
                    style={{ color: c }}
                  >
                    {biz.num}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-8 w-0.5"
                    style={{ backgroundColor: c }}
                  />
                </div>
                <div
                  className="mt-5 font-en text-[9px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: c }}
                >
                  {biz.en}
                </div>
                <h2 className="mt-2 font-ja text-[1.5rem] font-medium leading-[1.4] text-navy md:text-[1.875rem]">
                  {biz.title}
                </h2>
                <p className="mt-4 font-ja text-body font-light leading-loose text-muted">
                  {biz.lead}
                </p>
              </Reveal>

              {/* 右：主な取り組み＋役割 */}
              <Reveal delay={0.1}>
                <div>
                  <h3 className="mb-4 flex items-center gap-2 font-ja text-[14px] font-medium text-navy">
                    <span
                      aria-hidden="true"
                      className="h-4 w-1 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                    主な取り組み
                  </h3>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {biz.works.map((w) => (
                      <li key={w} className="flex items-start gap-2.5">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: c }}
                        />
                        <span className="font-ja text-[13px] leading-relaxed text-navy">
                          {w}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-9 mb-4 flex items-center gap-2 font-ja text-[14px] font-medium text-navy">
                    <span
                      aria-hidden="true"
                      className="h-4 w-1 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                    この事業の役割
                  </h3>
                  <ul className="space-y-2.5">
                    {biz.roles.map((r) => (
                      <li key={r} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-[3px] font-en text-[12px]"
                          style={{ color: c }}
                        >
                          ―
                        </span>
                        <span className="font-ja text-[13px] leading-relaxed text-muted">
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={biz.cta.href}
                    className="group mt-8 inline-flex items-center gap-2 border-b pb-0.5 font-ja text-[13px] font-medium"
                    style={{
                      color: c,
                      borderColor: `color-mix(in srgb, ${c} 33%, transparent)`,
                    }}
                  >
                    {biz.cta.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </Section>
        );
      })}
    </>
  );
}
