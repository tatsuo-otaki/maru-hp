import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Container を挟まず全幅レイアウトにする */
  fullWidth?: boolean;
};

/**
 * セクションの上下余白を一元管理する。
 * 上下: Mobile 56px / Desktop 96px (docs/brand-guide.md: 48–56 / 80–100)
 */
export function Section({
  children,
  id,
  className = "",
  containerClassName = "",
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-14 md:py-24 ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
