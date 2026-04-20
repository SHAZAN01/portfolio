"use client"
import { useIsMobile } from "@/components/shared/useIsMobile"
import { FadeUp } from "@/components/shared/FadeUp"
import Image from "next/image"

const links = [
  { label: "LinkedIn", handle: "shazan-ansar", href: "https://www.linkedin.com/in/shazan-ansar/", iconBg: "#0a66c2", iconColor: "#fff", icon: "in" },
  { label: "GitHub", handle: "SHAZAN01", href: "https://github.com/SHAZAN01", iconBg: "#1a1a1a", iconColor: "#fff", icon: "GH" },
  { label: "Email", handle: "shazanansar@gmail.com", href: "mailto:shazanansar@gmail.com", iconBg: "rgba(59,130,246,0.1)", iconColor: "#60a5fa", icon: "@" },
  { label: "Medium", handle: "@shazanansar", href: "https://medium.com/@shazanansar", iconBg: "#000", iconColor: "#fff", icon: "M" },
  { label: "Instagram", handle: "shazan_ansar", href: "https://instagram.com/shazan_ansar", iconBg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", iconColor: "#fff", icon: "IG" },
  { label: "Discord", handle: "insightshazan", href: "#", iconBg: "rgba(88,101,242,0.12)", iconColor: "#818cf8", icon: "DC" },
]

export function ContactSection() {
  const isMobile = useIsMobile()
  const cardStyle = {
    display: "flex", alignItems: "center", gap: 14,
    borderRadius: 14, padding: "18px 20px",
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.07)",
    color: "#f2f2f7", textDecoration: "none",
    transition: "all 0.25s",
  } as React.CSSProperties

  const ce = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)"
    e.currentTarget.style.background = "rgba(255,255,255,0.045)"
    e.currentTarget.style.transform = "translateY(-2px)"
  }
  const cl = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)"
    e.currentTarget.style.background = "rgba(255,255,255,0.025)"
    e.currentTarget.style.transform = "translateY(0)"
  }

  return (
    <section id="contact" style={{ padding: isMobile ? '56px 20px' : '72px 40px', maxWidth: 1060, margin: "0 auto", width: "100%" }}>
      <FadeUp>

        {/* Top row: heading + photo */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 48 }}>
          <div>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(242,242,247,0.3)", marginBottom: 14, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>Contact</p>
            <h2 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 16 }}>
              {"Let's "}
              <span style={{ background: "linear-gradient(135deg,#60a5fa 0%,#a78bfa 40%,#ec4899 80%,#f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Connect</span>
            </h2>
            <p style={{ fontSize: 14.5, color: "rgba(242,242,247,0.55)", lineHeight: 1.8, maxWidth: 440, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 300 }}>
              Open to full-time roles, research collaborations, and conversations about AI, ML, and data engineering. Based in California, available remote or on-site.
            </p>
          </div>

          {/* Photo in contact */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: 130, height: 130, borderRadius: 20, overflow: "hidden", border: "2px solid rgba(255,255,255,0.08)" }}>
              <Image src="/images/profile.jpg" alt="Shazan Ansar Mohammed" width={130} height={130} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
            <div style={{ marginTop: 10, textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#f2f2f7", fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif" }}>Shazan Ansar</div>
              <div style={{ fontSize: 11, color: "rgba(242,242,247,0.4)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>California, US</div>
            </div>
          </div>
        </div>

        {/* Survey CTA */}
        <div style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.12),rgba(139,92,246,0.12))", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 16, padding: "24px 28px", marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#f2f2f7", fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", marginBottom: 6 }}>Thesis Research Survey</div>
            <p style={{ fontSize: 13.5, color: "rgba(242,242,247,0.6)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", lineHeight: 1.6, maxWidth: 500 }}>
              Conducting a survey for my thesis on NLP, AI, curated agents, and AI in finance. Share your expert knowledge and insights. Your input shapes real research.
            </p>
          </div>
          <a href="mailto:shazanansar@gmail.com?subject=Thesis Survey - NLP/AI Research"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", borderRadius: 10, fontSize: 13, fontWeight: 600, background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", textDecoration: "none", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", whiteSpace: "nowrap", flexShrink: 0 }}
          >
            Share Your Knowledge →
          </a>
        </div>

        {/* Social grid */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)", gap: 12, marginBottom: 16 }}>
          {links.map(link => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              style={cardStyle} onMouseEnter={ce} onMouseLeave={cl}
            >
              <div style={{ width: 42, height: 42, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, background: link.iconBg, color: link.iconColor, fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif" }}>
                {link.icon}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", color: "#f2f2f7" }}>{link.label}</div>
                <div style={{ fontSize: 12, marginTop: 2, color: "rgba(242,242,247,0.38)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>{link.handle}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Open to work strip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, borderRadius: 14, padding: "18px 22px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", color: "#f2f2f7" }}>Shazan Ansar Mohammed</div>
            <div style={{ fontSize: 12, marginTop: 3, color: "rgba(242,242,247,0.35)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>AI · ML · Data Engineer · California, US</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, padding: "8px 16px", borderRadius: 9999, fontWeight: 600, background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#10b981", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: "#10b981", boxShadow: "0 0 8px #10b981", display: "inline-block" }} />
            Open to Work — Full Time
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
