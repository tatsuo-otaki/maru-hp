"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Google Analytics 4（同意ゲート付き）。
 * Cookie 同意が "accepted" のときだけ gtag.js を読み込む。
 * 「拒否する」や未選択の場合は一切ロードしない（計測しない）。
 * バナーの選択（cookie-consent イベント）にもその場で反応する。
 *
 * ※ SPA のページ遷移計測は GA4 の「拡張計測機能（ブラウザ履歴イベント）」に依存。
 *   GA4 側で有効（デフォルト有効）であれば手動送信は不要。
 */
const CONSENT_KEY = "maru:cookie-consent";

export function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // バナーでの選択に即応（"rejected" のときは読み込まない）
    const onConsent = (e: Event) => {
      if ((e as CustomEvent).detail === "accepted") setEnabled(true);
    };
    window.addEventListener("cookie-consent", onConsent);

    // 既に同意済みなら有効化（初期判定は次tickで反映）
    let accepted = false;
    try {
      accepted = localStorage.getItem(CONSENT_KEY) === "accepted";
    } catch {
      // localStorage 不可なら無効のまま
    }
    const t = accepted ? setTimeout(() => setEnabled(true), 0) : undefined;

    return () => {
      window.removeEventListener("cookie-consent", onConsent);
      if (t) clearTimeout(t);
    };
  }, []);

  if (!enabled || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
