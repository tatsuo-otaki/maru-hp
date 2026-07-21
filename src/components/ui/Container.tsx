import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * ページ共通の左右余白とコンテンツ最大幅を管理する。
 * 左右余白: Mobile 24px / Tablet 48px / Desktop 80px (docs/brand-guide.md)
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-6 md:px-12 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
