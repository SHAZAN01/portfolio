"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import { profile } from "@/data/profile"
import { CountUp } from "@/components/shared/CountUp"
import { useIsMobile } from "@/components/shared/useIsMobile"

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), { ssr: false })

const metrics = [
  { to: 32, suffix: "%", label: "BLEU Score Improvement", color: "#06b6d4", isFloat: false },
  { to: 40, suffix: "%", label: "Data Latency Reduction", color: "#3b82f6", isFloat: false },
  { to: 4.0, suffix: "", label: "GPA · M.S. CS", color: "#8b5cf6", isFloat: true },
  { to: 40, suffix: "+", label: "Projects Built", color: "#f59e0b", isFloat: false },
]

const socials = [
  { name: "LinkedIn", handle: "shazan-ansar", href: "https://www.linkedin.com/in/shazan-ansar/", iconBg: "#0a66c2",
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name: "GitHub", handle: "SHAZAN01", href: "https://github.com/SHAZAN01", iconBg: "#1a1a1a",
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
  { name: "Medium", handle: "@shazanansar", href: "https://medium.com/@shazanansar", iconBg: "#000",
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg> },
  { name: "Instagram", handle: "shazan_ansar", href: "https://instagram.com/shazan_ansar", iconBg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
]

const wtStyle: React.CSSProperties = {
  marginTop: 16,
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  background: "rgba(10,10,18,0.9)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
  padding: "9px 14px",
  textDecoration: "none",
  backdropFilter: "blur(16px)",
}

function WiseTorchBadge() {
  return (
    <a href="https://instagram.com/shazan_ansar" target="_blank" rel="noreferrer" style={wtStyle}>
      <div style={{ width: 30, height: 30, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
        <Image src="/images/wisetorch.png" alt="Wise Torch" width={30} height={30} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: "#f2f2f7", lineHeight: 1.3 }}>Wise Torch</div>
        <div style={{ fontSize: 11, color: "rgba(242,242,247,0.4)", lineHeight: 1.3 }}>Founder</div>
      </div>
    </a>
  )
}

export function HeroSection() {
  const isMobile = useIsMobile()
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: isMobile ? 100 : 130, paddingBottom: isMobile ? 60 : 80, overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/images/banner.jpg" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.2 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(5,5,8,0.88) 0%,rgba(5,5,8,0.92) 60%,rgba(5,5,8,0.98) 100%)" }} />
      </div>
      <div style={{ position: "fixed", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(79,70,229,0.13),transparent 65%)", top: -300, left: -200, zIndex: 0, pointerEvents: "none" }} />

      <HeroCanvas />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1060, margin: "0 auto", padding: isMobile ? "0 20px" : "0 40px", width: "100%" }}>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: isMobile ? 24 : 40 }}>
          {["AI · ML Engineer", "M.S. CS · GPA 4.0", "RANLP 2025 Co-Author", "California, US"].map(tag => (
            <span key={tag} style={{ fontSize: isMobile ? 10 : 12, padding: isMobile ? "4px 10px" : "6px 16px", borderRadius: 9999, background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.11)", color: "rgba(242,242,247,0.65)" }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Main layout */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 110px" : "1fr 260px", gap: isMobile ? 16 : 60, alignItems: "start", marginBottom: isMobile ? 28 : 52 }}>

          <div>
            {/* Name */}
            <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", fontSize: isMobile ? "clamp(2.8rem,12vw,4rem)" : "clamp(3.2rem,7vw,6.5rem)", fontWeight: 300, letterSpacing: "-0.045em", lineHeight: 1, color: "#f5f5f7", marginBottom: 0 }}>
              Shazan Ansar
            </div>
            <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", fontSize: isMobile ? "clamp(2.8rem,12vw,4rem)" : "clamp(3.2rem,7vw,6.5rem)", fontWeight: 300, letterSpacing: "-0.045em", lineHeight: 1, marginBottom: isMobile ? 20 : 28, background: "linear-gradient(135deg,#60a5fa 0%,#a78bfa 38%,#ec4899 70%,#fb923c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Mohammed
            </div>

            <p style={{ fontSize: isMobile ? 14 : 15, color: "rgba(242,242,247,0.58)", fontWeight: 300, lineHeight: 1.75, marginBottom: isMobile ? 24 : 32 }}>
              {profile.tagline} End-to-end ML pipelines, multilingual NLP, and production-grade data platforms.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 16, alignItems: "center" }}>
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 7, height: isMobile ? 36 : 42, padding: isMobile ? "0 10px" : "0 16px", borderRadius: 9999, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)" }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)" }}
                >
                  <div style={{ width: isMobile ? 20 : 24, height: isMobile ? 20 : 24, borderRadius: 6, background: s.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.svg}</div>
                  {!isMobile && (
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 500, color: "rgba(242,242,247,0.9)", lineHeight: 1.15 }}>{s.name}</div>
                      <div style={{ fontSize: 10.5, color: "rgba(242,242,247,0.38)", lineHeight: 1.15 }}>{s.handle}</div>
                    </div>
                  )}
                  {isMobile && <span style={{ fontSize: 11, color: "rgba(242,242,247,0.7)", fontWeight: 500 }}>{s.name}</span>}
                </a>
              ))}
              <a href={profile.social.email}
                style={{ height: isMobile ? 36 : 42, padding: isMobile ? "0 14px" : "0 22px", borderRadius: 9999, display: "inline-flex", alignItems: "center", fontSize: isMobile ? 12 : 13, fontWeight: 600, letterSpacing: "0.04em", background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", textDecoration: "none" }}
              >Hire Me</a>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <button onClick={() => scrollTo("projects")}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: isMobile ? "11px 20px" : "13px 28px", borderRadius: 9999, fontSize: isMobile ? 13 : 14, fontWeight: 500, color: "#fff", background: "linear-gradient(135deg,#2563eb,#7c3aed)", border: "none", cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}
              >View Projects →</button>
              <a href={profile.social.email}
                style={{ display: "inline-flex", alignItems: "center", padding: isMobile ? "11px 18px" : "13px 24px", borderRadius: 9999, fontSize: isMobile ? 13 : 14, fontWeight: 500, background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.3)", color: "#67e8f9", textDecoration: "none" }}
              >Get in Touch</a>
              <a href="/resume.pdf" download
                style={{ display: "inline-flex", alignItems: "center", padding: isMobile ? "11px 18px" : "13px 24px", borderRadius: 9999, fontSize: isMobile ? 13 : 14, fontWeight: 600, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.35)", color: "#34d399", textDecoration: "none" }}
              >↓ Resume</a>
            </div>
          </div>

          {/* Photo — shown on both mobile and desktop */}
          {
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: 240, height: 240, borderRadius: "50%", padding: 3, background: "linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)" }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "#0a0a10" }}>
                  <Image src="/images/profile.jpg" alt="Shazan Ansar Mohammed" width={240} height={240} style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "50%" }} />
                </div>
              </div>
              <WiseTorchBadge />
            </div>
          }
        </div>

        {/* Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ textAlign: "center", padding: isMobile ? "20px 12px" : "26px 20px", background: "rgba(10,10,16,0.75)", borderRight: (i % 2 === 0) ? "1px solid rgba(255,255,255,0.08)" : "none", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif", fontSize: isMobile ? "2rem" : "2.8rem", fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6, color: m.color }}>
                <CountUp to={m.to} suffix={m.suffix} isFloat={m.isFloat} />
              </div>
              <div style={{ fontSize: isMobile ? 10 : 12, lineHeight: 1.5, color: "rgba(242,242,247,0.4)" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
