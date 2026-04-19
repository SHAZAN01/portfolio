"use client"
import { useIsMobile } from "@/components/shared/useIsMobile"
import { useRef, useEffect, useState } from "react"
import { FadeUp } from "@/components/shared/FadeUp"
import { skillGroups, skillBars } from "@/data/skills"

const BAR_GRADIENTS = [
  "linear-gradient(90deg,#3b82f6,#8b5cf6)",
  "linear-gradient(90deg,#f97316,#fbbf24)",
  "linear-gradient(90deg,#ec4899,#a78bfa)",
  "linear-gradient(90deg,#06b6d4,#3b82f6)",
  "linear-gradient(90deg,#8b5cf6,#ec4899)",
  "linear-gradient(90deg,#10b981,#06b6d4)",
  "linear-gradient(90deg,#f472b6,#fb923c)",
  "linear-gradient(90deg,#3b82f6,#10b981)",
]

const GROUP_ACCENTS: Record<string,string> = {
  "Programming & Data": "#3b82f6",
  "ML & AI": "#a78bfa",
  "Data Engineering": "#22d3ee",
  "Cloud & MLOps": "#34d399",
  "Analytics & Viz": "#fbbf24",
}

function AnimatedBar({ pct, gradient }: { pct: number; gradient: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [w, setW] = useState(0)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setW(pct), 200) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [pct])
  return (
    <div ref={ref} style={{ flex: 1, height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.1)" }}>
      <div style={{ height: "100%", borderRadius: 9999, background: gradient, width: w + "%", transition: "width 2s cubic-bezier(0.2,1,0.3,1)", boxShadow: w > 0 ? `0 0 12px ${gradient.includes("3b82f6") ? "rgba(59,130,246,0.4)" : "rgba(139,92,246,0.3)"}` : "none" }} />
    </div>
  )
}

export function SkillsSection() {
  const isMobile = useIsMobile()
  return (
    <section id="skills" style={{ padding: isMobile ? '48px 20px' : '72px 40px', maxWidth: 1060, margin: "0 auto", width: "100%" }}>
      <FadeUp>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(242,242,247,0.3)", marginBottom: 14 }}>Skills</p>
        <h2 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 48 }}>
          Technical{" "}
          <span style={{ background: "linear-gradient(135deg,#fbbf24,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Expertise</span>
        </h2>

        {/* Skill groups — high contrast cards */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 18, marginBottom: 56 }}>
          {Object.entries(skillGroups).map(([group, chips]) => {
            const accent = GROUP_ACCENTS[group] || "#60a5fa"
            return (
              <div key={group} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, padding: "24px 22px", borderTop: `2px solid ${accent}` }}>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: accent, marginBottom: 18, fontWeight: 700 }}>{group}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {chips.map(chip => (
                    <span key={chip} style={{ fontSize: 12.5, padding: "6px 13px", borderRadius: 9, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(242,242,247,0.88)", cursor: "default", transition: "all 0.2s", fontWeight: 400 }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; e.currentTarget.style.color = "#f2f2f7"; e.currentTarget.style.borderColor = accent }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(242,242,247,0.88)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)" }}
                    >{chip}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Proficiency bars — high contrast */}
        <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "32px 36px" }}>
          <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(242,242,247,0.5)", marginBottom: 28, fontWeight: 600 }}>Proficiency</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {skillBars.map((bar, i) => (
              <div key={bar.label} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span style={{ fontSize: 13, color: "rgba(242,242,247,0.75)", width: 148, textAlign: "right", flexShrink: 0, fontWeight: 500 }}>{bar.label}</span>
                <AnimatedBar pct={bar.pct} gradient={BAR_GRADIENTS[i % BAR_GRADIENTS.length]} />
                <span style={{ fontSize: 13, color: "rgba(242,242,247,0.65)", width: 40, textAlign: "right", flexShrink: 0, fontWeight: 600 }}>{bar.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
