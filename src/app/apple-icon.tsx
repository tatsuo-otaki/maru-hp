import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple タッチアイコン：ネイビー地に 〇（Warm White のリング） */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F1F3D",
        }}
      >
        <div
          style={{
            width: 104,
            height: 104,
            borderRadius: "50%",
            border: "18px solid #F8F6F2",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
