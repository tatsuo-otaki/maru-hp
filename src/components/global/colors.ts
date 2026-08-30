import type { GColor } from "@/content/global";

/** Maru Global セクション共通の色トークン変換（既存デザイントークンの範囲に限定） */
export const GLOBAL_COLOR: Record<GColor, string> = {
  teal: "var(--color-teal)",
  amber: "var(--color-amber)",
  navy: "var(--color-navy)",
  muted: "var(--color-muted)",
};

export const GLOBAL_COLOR_CLASS: Record<GColor, { text: string; bg: string; border: string }> = {
  teal: { text: "text-teal", bg: "bg-teal", border: "border-teal" },
  amber: { text: "text-amber", bg: "bg-amber", border: "border-amber" },
  navy: { text: "text-navy", bg: "bg-navy", border: "border-navy" },
  muted: { text: "text-muted", bg: "bg-muted", border: "border-muted" },
};
