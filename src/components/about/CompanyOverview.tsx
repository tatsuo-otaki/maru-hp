import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/content/company";

export function CompanyOverview() {
  return (
    <Section id="company" className="bg-surface">
      <Reveal className="mb-10">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
          <SectionLabel>Company</SectionLabel>
        </div>
        <h2 className="mt-5 font-ja text-[1.5rem] font-medium leading-[1.55] text-navy md:text-[2rem]">
          会社概要
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <dl className="border-t border-line">
          {COMPANY.overview.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-b border-line py-5 md:flex-row md:gap-8 md:py-6"
            >
              <dt className="shrink-0 font-ja text-[13px] font-medium text-navy md:w-40 md:pt-0.5">
                {row.label}
              </dt>
              <dd className="font-ja text-[14px] leading-[1.9] text-muted">
                {Array.isArray(row.value) ? (
                  <ul className="space-y-2">
                    {row.value.map((v) => (
                      <li key={v} className="flex items-start gap-2.5">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
