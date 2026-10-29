#!/usr/bin/env node
/**
 * IndexNow（https://www.indexnow.org/）への更新通知スクリプト。
 *
 * IndexNow はBing・Seznam等が対応する更新通知プロトコルで、事前申請は不要。
 * public/{key}.txt （中身はキーそのもの）を置いておけば、そのキーで通知できる。
 * このリポジトリでは public/ 直下にキーファイルを配置済みなので、
 * このスクリプトはそのファイルを読み取るだけで動く。
 *
 * 使い方:
 *   node scripts/indexnow.mjs
 *     → sitemap.xml に載っている全URLを通知する
 *   node scripts/indexnow.mjs https://www.maru.nagoya/news/xxx
 *     → 指定したURLのみ通知する（更新したページだけ知らせたいとき）
 *
 * 環境変数:
 *   SITE_URL  通知対象サイトのベースURL（省略時 https://www.maru.nagoya）
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const publicDir = join(__dirname, "..", "public");
const siteUrl = process.env.SITE_URL ?? "https://www.maru.nagoya";

function findIndexNowKey() {
  const file = readdirSync(publicDir).find((name) => /^[0-9a-f]{8,128}\.txt$/.test(name));
  if (!file) {
    throw new Error("IndexNowのキーファイルが public/ に見つかりません（<key>.txt の形式）");
  }
  return readFileSync(join(publicDir, file), "utf8").trim();
}

async function fetchSitemapUrls() {
  const res = await fetch(`${siteUrl}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml の取得に失敗しました: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const key = findIndexNowKey();
  const argUrls = process.argv.slice(2);
  const urlList = argUrls.length > 0 ? argUrls : await fetchSitemapUrls();

  if (urlList.length === 0) {
    console.log("通知するURLがありません。");
    return;
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(siteUrl).host,
      key,
      keyLocation: `${siteUrl}/${key}.txt`,
      urlList,
    }),
  });

  console.log(`IndexNow: ${urlList.length}件のURLを通知しました -> HTTP ${res.status}`);
  if (!res.ok) {
    console.error(await res.text());
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
