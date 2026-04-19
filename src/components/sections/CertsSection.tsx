"use client"
import { useIsMobile } from "@/components/shared/useIsMobile"
import { FadeUp } from "@/components/shared/FadeUp"
import { certifications } from "@/data/certifications"

export function CertsSection() {
  const isMobile = useIsMobile()
  return (
    <section id="certs" style={{ padding: `${isMobile ? 56 : 72}px ${isMobile ? 20 : 40}px`, maxWidth: 1060, margin: "0 auto", width: "100%" }}>
      <FadeUp>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(242,242,247,0.3)", marginBottom: 14, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>Certifications</p>
        <h2 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 44 }}>
          Verified{" "}
          <span style={{ background: "linear-gradient(135deg,#60a5fa,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Credentials</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 16 }}>
          {certifications.map(cert => (
            <div key={cert.id}
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "22px 24px", display: "flex", alignItems: "center", gap: 16, transition: "all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}
              onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.025)" }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0, background: cert.bg, color: cert.color, fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif" }}>{cert.short}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "#f2f2f7", fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", lineHeight: 1.35, marginBottom: 4 }}>{cert.name}</div>
                <div style={{ fontSize: 11.5, color: "rgba(242,242,247,0.4)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>{cert.issuer} · {cert.year}</div>
              </div>
              <span style={{ fontSize: 16, color: "#10b981", flexShrink: 0 }}>✓</span>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
