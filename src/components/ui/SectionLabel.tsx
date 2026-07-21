import { type ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

/**
 * セクション頭の英字ラベル（例: ABOUT / MISSION）。Inter・レタースペース広め・Teal。
 */
export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-en text-label font-semibold uppercase tracking-[0.2em] text-teal ${className}`}
    >
      {children}
    </span>
  );
}
