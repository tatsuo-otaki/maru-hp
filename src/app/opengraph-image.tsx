import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} | ${SITE.mission}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const WARM = "#F8F6F2";
const NAVY = "#0F1F3D";
const TEAL = "#2D8B7D";
const MUTED = "#6B7A8D";

const missionLines = ["幸せに働ける人を", "世界中に増やす。"];

/**
 * Noto Sans JP を Google Fonts からサブセット取得する。
 * 描画に使う文字だけを &text= で要求するので軽量。
 * 取得できない場合は null（英語フォールバックに切り替える）。
 */
async function loadJaFont(): Promise<ArrayBuffer | null> {
  const text = [...missionLines.join(""), ...SITE.name, ...`${SITE.nameEn} MISSION`].join("");
  const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&text=${encodeURIComponent(
    text,
  )}`;
  try {
    const css = await (await fetch(url)).text();
    const match = css.match(/src:\s*url\((.+?)\)\s*format\(['"]?(?:opentype|truetype)['"]?\)/);
    if (!match) return null;
    const res = await fetch(match[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const fontData = await loadJaFont();

  // 共通の装飾リング（〇モチーフ）
  const ring = (
    <div
      style={{
        position: "absolute",
        top: -160,
        right: -160,
        width: 620,
        height: 620,
        borderRadius: "50%",
        border: `2px solid ${TEAL}`,
        opacity: 0.28,
      }}
    />
  );

  if (!fontData) {
    // フォント取得に失敗した場合の英語フォールバック（ビルドを止めない）
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: WARM,
            padding: 80,
            position: "relative",
            color: NAVY,
          }}
        >
          {ring}
          <div style={{ fontSize: 30, letterSpacing: 8, color: TEAL }}>maru Inc.</div>
          <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24 }}>
            Happy work for everyone.
          </div>
        </div>
      ),
      { ...size },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: WARM,
          padding: 80,
          position: "relative",
          fontFamily: "Noto Sans JP",
          color: NAVY,
        }}
      >
        {ring}
        <div style={{ fontSize: 26, letterSpacing: 10, color: TEAL }}>MISSION</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {missionLines.map((line) => (
            <div key={line} style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.3 }}>
              {line}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 30, color: MUTED }}>
          {`${SITE.name}　/　${SITE.nameEn}`}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Noto Sans JP", data: fontData, weight: 500, style: "normal" }],
    },
  );
}
