/**
 * gtag.js への直接送信ヘルパー。
 * Cookie未同意などで Analytics コンポーネントが gtag.js を読み込んでいない場合は
 * window.gtag が存在しないため何もしない（計測しない）。
 */
type Gtag = (...args: unknown[]) => void;

/** カードクリックを card_click イベントとしてGA4へ送る（ai-analytics-automation側の集計と対応） */
export function trackCardClick(cardType: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "card_click", { card_type: cardType });
  }
}
