import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

/** パートナー系ページ共通のセクション見出し（英字ラベル＋タイトル＋任意リード）。 */
export function SectionHead({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-10">
      <div className="flex items-center gap-2.5">
        <span aria-hidden="true" className="h-px w-[18px] bg-teal" />
        <SectionLabel>{label}</SectionLabel>
      </div>
      <h2 className="mt-4 font-ja text-[1.5rem] font-medium text-navy md:text-[2rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 max-w-2xl font-ja text-body leading-relaxed text-muted">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
