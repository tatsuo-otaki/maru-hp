"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/**
 * Cookie 同意バナー。
 * 初回訪問時に下部からスライドインし、選択を localStorage に保存する。
 * 現状アクセス解析は未導入のため、ここでは「同意状態の保存」のみを行う。
 * 将来 Google Analytics 等を入れる場合は、下記キーが "accepted" のときだけ
 * ロードするようにする（cookie-consent イベントでも通知）。
 */
const STORAGE_KEY = "maru:cookie-consent"; // "accepted" | "rejected"

type Consent = "accepted" | "rejected";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CookieConsent() {
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage 不可の環境では毎回確認を表示
    }
    if (stored === "accepted" || stored === "rejected") return;
    // ページ表示が落ち着いてから、そっと出す
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  function choose(value: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // 保存できなくても UI は閉じる
    }
    setVisible(false);
    // 将来のアナリティクス連携用（必要時に購読する）
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
  }

  if (!visible) return null;

  return (
    <motion.div
      role="region"
      aria-label="Cookie の使用に関する同意"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:px-6 md:pb-6"
    >
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-card border border-line bg-white p-5 shadow-[0_14px_44px_rgba(15,31,61,0.16)] md:flex-row md:items-center md:gap-6 md:p-6">
            {/* テキスト */}
            <div className="flex-1">
              <div className="mb-1.5 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-3.5 w-3.5 shrink-0 rounded-full border-[1.5px] border-teal"
                />
                <h2 className="font-ja text-[14px] font-medium text-navy">
                  Cookie の使用について
                </h2>
              </div>
              <p className="font-ja text-[12.5px] leading-relaxed text-muted">
                当サイトでは、サイトの利便性向上とアクセス解析のために Cookie を使用します。「同意する」を選ぶと解析用 Cookie の利用に同意したものとみなします。詳しくは
                <Link
                  href="/privacy"
                  className="text-teal underline underline-offset-2 hover:text-navy"
                >
                  プライバシーポリシー
                </Link>
                をご覧ください。
              </p>
            </div>

            {/* ボタン */}
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="rounded-btn border border-line px-5 py-2.5 font-ja text-[13px] font-medium text-navy transition-colors hover:bg-navy/5"
              >
                拒否する
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-btn bg-teal px-5 py-2.5 font-ja text-[13px] font-medium text-white transition-colors hover:bg-navy"
              >
                同意する
              </button>
            </div>
          </div>
    </motion.div>
  );
}
