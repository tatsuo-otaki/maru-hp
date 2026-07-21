import { type ReactNode, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "headerCta";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-btn font-ja text-[0.75rem] font-medium leading-none transition-colors px-6 py-3";

const variants: Record<Variant, string> = {
  // Primary: Deep Navy → hover Teal
  primary: "bg-navy text-white hover:bg-teal",
  // Secondary: 透明 + ボーダー
  secondary: "border border-line text-navy hover:bg-navy/5",
  // Header CTA: Teal → hover Navy
  headerCta: "bg-teal text-white hover:bg-navy",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** 右向き矢印を表示し、ホバーで右へ動かす */
  arrow?: boolean;
};

type AnchorProps = BaseProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof BaseProps | "href"
  >;

type ButtonElementProps = BaseProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseProps
  >;

type ButtonProps = AnchorProps | ButtonElementProps;

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-1"
    >
      →
    </span>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  arrow = false,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorRest } = rest as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}
