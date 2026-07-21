"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): boolean {
  // SSR では動きあり(false)を初期値とする
  return false;
}

/**
 * ユーザーが「視差効果を減らす」を有効にしているかを返す。
 * useSyncExternalStore で購読するため SSR 安全で、effect 内の同期 setState を避ける。
 * Client Component 側のアニメーション分岐に使う。
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
