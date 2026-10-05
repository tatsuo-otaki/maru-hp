import type { MDXComponents } from "mdx/types";
import { TextLink } from "@/components/ui/TextLink";

/**
 * ニュース記事本文（src/content/news/*.mdx）のグローバルスタイル。
 * ブランドトークン（Noto Sans JP / Navy / Teal）に準拠し、
 * 見出しは本文側 h2 から開始する運用（h1 は記事タイトルが担う）。
 */
const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-12 font-ja text-[1.375rem] font-medium leading-[1.5] text-navy md:text-[1.5rem]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-ja text-[1.0625rem] font-medium leading-[1.5] text-navy">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 font-ja text-body-lg font-light leading-loose text-navy">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 space-y-2 border-l-2 border-line pl-5 font-ja text-body-lg font-light leading-loose text-navy">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-5 font-ja text-body-lg font-light leading-loose text-navy">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-2 border-teal pl-5 font-ja text-body-lg font-light italic leading-loose text-muted">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-line" />,
  strong: ({ children }) => <strong className="font-medium text-navy">{children}</strong>,
  a: ({ href, children }) => {
    if (/^https?:\/\//.test(href ?? "")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-teal underline underline-offset-2 hover:text-navy"
        >
          {children}
          <span className="sr-only">（外部リンク・別タブで開きます）</span>
        </a>
      );
    }
    return (
      <TextLink href={href ?? "#"} arrow={false} className="!inline">
        {children}
      </TextLink>
    );
  },
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element -- 記事本文の画像は寸法が可変のため next/image を強制しない
    <img
      {...props}
      loading="lazy"
      className="mt-6 w-full rounded-[4px] border border-line"
      alt={props.alt ?? ""}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
