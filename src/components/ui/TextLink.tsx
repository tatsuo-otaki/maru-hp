import { type ReactNode } from "react";
import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** 右向き矢印を表示し、ホバーで右へ動かす */
  arrow?: boolean;
};

/**
 * Teal のテキストリンク。矢印はホバーで右へ動く。
 */
export function TextLink({
  href,
  children,
  className = "",
  arrow = true,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-ja text-[0.875rem] font-medium text-teal transition-colors hover:text-navy ${className}`}
    >
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </Link>
  );
}
