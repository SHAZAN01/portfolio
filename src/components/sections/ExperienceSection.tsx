"use client"
import { useIsMobile } from "@/components/shared/useIsMobile"
import { FadeUp } from "@/components/shared/FadeUp"
import { experiences } from "@/data/experience"

export function ExperienceSection() {
  const isMobile = useIsMobile()
  return (
    <section id="experience" style={{ padding: `${isMobile ? 56 : 72}px ${isMobile ? 20 : 40}px`, maxWidth: 1060, margin: "0 auto", width: "100%" }}>
      <FadeUp>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(242,242,247,0.3)", marginBottom: 14, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>Experience</p>
        <h2 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 48 }}>
          {"Where I've "}
          <span style={{ background: "linear-gradient(135deg,#60a5fa,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Worked</span>
        </h2>

        <div style={{ position: "relative", paddingLeft: 28 }}>
          <div style={{ position: "absolute", left: 5, top: 8, bottom: 0, width: 1, background: "linear-gradient(to bottom,rgba(59,130,246,0.5),transparent)" }} />

          {experiences.map((exp, idx) => (
            <FadeUp key={exp.id} delay={idx * 0.08}>
              <div style={{ position: "relative", marginBottom: 52 }}>
                <div style={{ position: "absolute", left: -31, top: 6, width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(5,5,8,1)", background: exp.current ? "#10b981" : "#3b82f6", boxShadow: exp.current ? "0 0 14px rgba(16,185,129,0.5)" : "none" }} />

                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "24px 28px" }}>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                    <div>
                      <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", color: "#f2f2f7", marginBottom: 6 }}>{exp.company}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 500, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", background: exp.current ? "rgba(16,185,129,0.1)" : "rgba(59,130,246,0.1)", border: exp.current ? "1px solid rgba(16,185,129,0.2)" : "1px solid rgba(59,130,246,0.18)", color: exp.current ? "#10b981" : "#3b82f6" }}>
                          {exp.current ? "Current" : "Past"}
                        </span>
                        <span style={{ fontSize: 13, color: "rgba(242,242,247,0.6)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>{exp.role}</span>
                        <span style={{ fontSize: 12, color: "rgba(242,242,247,0.3)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>{exp.period}</span>
                      </div>
                    </div>
                    {exp.links && exp.links.length > 0 && (
                      <div style={{ display: "flex", gap: 8 }}>
                        {exp.links.map((link: {label: string, url: string}) => (
                          <a key={link.label} href={link.url} target="_blank" rel="noreferrer"
                            style={{ fontSize: 11, padding: "5px 12px", borderRadius: 8, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#93c5fd", textDecoration: "none", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500, transition: "all 0.2s" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.18)" }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(59,130,246,0.1)" }}
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bullets */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                    {exp.bullets.map((b: {text: string, metric?: string}, i: number) => (
                      <li key={i} style={{ fontSize: 13.5, color: "rgba(242,242,247,0.58)", paddingLeft: 18, position: "relative", lineHeight: 1.65, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                        <span style={{ position: "absolute", left: 0, color: "#3b82f6", fontSize: 16, lineHeight: 1.3 }}>›</span>
                        {b.text}
                        {b.metric && <span style={{ color: "#10b981", fontWeight: 600, marginLeft: 4 }}>— {b.metric}</span>}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.techStack.map((t: string) => (
                      <span key={t} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 8, background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.12)", color: "rgba(147,197,253,0.8)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
