"use client"
import { useIsMobile } from "@/components/shared/useIsMobile"
import { FadeUp } from "@/components/shared/FadeUp"
import Image from "next/image"
import { profile } from "@/data/profile"

export function AboutSection() {
  const isMobile = useIsMobile()
  return (
    <section id="about" style={{ padding: isMobile ? '56px 20px' : '72px 40px', maxWidth: 1060, margin: "0 auto", width: "100%" }}>
      <FadeUp>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(242,242,247,0.3)", marginBottom: 14, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>About</p>
        <h2 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 40 }}>
          {"Engineer. "}
          <span style={{ background: "linear-gradient(135deg,#a78bfa,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Researcher.</span>
          {" Builder."}
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 380px", gap: 48, alignItems: "start" }}>
          <div>
            {profile.bio.map((p, i) => (
              <p key={i} style={{ fontSize: 15, color: "rgba(242,242,247,0.6)", lineHeight: 1.9, marginBottom: 16, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 300 }}>{p}</p>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Education", content: (
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", color: "#f2f2f7" }}>M.S. Computer Science</div>
                  <div style={{ fontSize: 12, color: "rgba(242,242,247,0.4)", marginTop: 3, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>Cal State Dominguez Hills · 2024–Present</div>
                  <div style={{ fontSize: 12, color: "#10b981", marginTop: 4, fontWeight: 600, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>GPA: 4.0 / 4.0</div>
                </div>
              )},
              { label: "Location", content: <div style={{ fontSize: 14, color: "#f2f2f7", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>California, United States</div> },
              { label: "Contact", content: (
                <div>
                  <div style={{ fontSize: 13, color: "#f2f2f7", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>{profile.email}</div>
                  <div style={{ fontSize: 12, color: "rgba(242,242,247,0.4)", marginTop: 3, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>{profile.phone}</div>
                </div>
              )},
              { label: "Open to Roles", content: (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                  {profile.targetRoles.map(r => (
                    <span key={r} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 8, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)", color: "rgba(147,197,253,0.9)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>{r}</span>
                  ))}
                </div>
              )},
            ].map(({ label, content }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "16px 20px" }}>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(242,242,247,0.3)", marginBottom: 8, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500 }}>{label}</div>
                {content}
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
