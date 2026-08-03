import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple タッチアイコン：Warm White 地に本来色（ネイビー）の 〇 リング。
 *  ※ iOS は透過を黒背景にするため、透過ではなくブランド地色を敷く。 */
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
          background: "#F8F6F2",
        }}
      >
        <div
          style={{
            width: 104,
            height: 104,
            borderRadius: "50%",
            border: "18px solid #0F1F3D",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
