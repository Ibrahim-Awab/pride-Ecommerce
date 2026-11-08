import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name}: Tailored Menswear from Pakistan`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1b1a18",
          color: "#f7f4ee",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 120, letterSpacing: 48, marginRight: -48 }}>PRIDE</div>
        <div style={{ width: 80, height: 1, background: "#a8875a", margin: "36px 0" }} />
        <div style={{ fontSize: 26, letterSpacing: 10, textTransform: "uppercase", color: "#c9ae84" }}>
          Tailored Menswear · Pakistan
        </div>
      </div>
    ),
    size,
  );
}
