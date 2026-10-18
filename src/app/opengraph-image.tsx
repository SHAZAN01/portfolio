import { ImageResponse } from "next/og";

export const alt = "Shazan Ansar Mohammed: data engineer and NLP researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#000", color: "#f5f5f7", padding: 80, fontFamily: "sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", right: -160, top: -160, width: 620, height: 620, borderRadius: 620, background: "linear-gradient(120deg,#2997ff,#a855f7,#ec4899,#ff9f0a)", opacity: 0.35, filter: "blur(80px)" }} />
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1a6" }}>shazan.dev</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>Shazan Ansar</div>
          <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -4, lineHeight: 1, backgroundImage: "linear-gradient(100deg,#2997ff,#a855f7,#ec4899,#ff9f0a)", backgroundClip: "text", color: "transparent" }}>Mohammed.</div>
          <div style={{ fontSize: 34, marginTop: 28, color: "#a1a1a6" }}>Data engineer and NLP researcher. 3 papers on LLMs and translation.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#30d158" }}><div style={{ width: 14, height: 14, borderRadius: 14, background: "#30d158" }} />Open to 2027 internships</div>
      </div>
    ),
    size
  );
}
