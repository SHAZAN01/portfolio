"use client"
import { useIsMobile } from "@/components/shared/useIsMobile"
import { useState, useMemo } from "react"
import { FadeUp } from "@/components/shared/FadeUp"
import { projects, ProjectCategory } from "@/data/projects"

const CATS: ("All" | ProjectCategory)[] = [
  "All","NLP","Data Engineering","MLOps","RAG & LLM","Analytics","Cloud","Real-Time Systems",
]

const CAT_COLORS: Record<string, string> = {
  "NLP": "#a78bfa",
  "Data Engineering": "#60a5fa",
  "MLOps": "#f472b6",
  "RAG & LLM": "#22d3ee",
  "Analytics": "#fbbf24",
  "Cloud": "#34d399",
  "Real-Time Systems": "#fb7185",
}

export function ProjectsSection() {
  const isMobile = useIsMobile()
  const [activeCat, setActiveCat] = useState<"All" | ProjectCategory>("All")
  const [search, setSearch] = useState("")

  const filtered = useMemo(() =>
    projects.filter(p => {
      const mc = activeCat === "All" || p.cat === activeCat
      const q = search.toLowerCase()
      const ms = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.stack.some(s => s.toLowerCase().includes(q))
      return mc && ms
    }), [activeCat, search])

  return (
    <section id="projects" style={{ padding: `${isMobile ? 56 : 72}px ${isMobile ? 20 : 40}px`, maxWidth: 1060, margin: "0 auto", width: "100%" }}>
      <FadeUp>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(242,242,247,0.3)", marginBottom: 14 }}>Projects</p>
        <h2 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 32 }}>
          What I&apos;ve{" "}
          <span style={{ background: "linear-gradient(135deg,#22d3ee,#6ee7b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Built</span>
        </h2>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          {CATS.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              fontSize: 12, padding: "7px 16px", borderRadius: 9999, cursor: "pointer", transition: "all 0.2s",
              background: activeCat === cat ? "rgba(34,211,238,0.12)" : "transparent",
              border: activeCat === cat ? "1px solid rgba(34,211,238,0.35)" : "1px solid rgba(255,255,255,0.09)",
              color: activeCat === cat ? "#67e8f9" : "rgba(242,242,247,0.55)",
              fontWeight: activeCat === cat ? 600 : 400,
            }}>{cat}</button>
          ))}
        </div>

        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search projects, tech, category…"
          style={{ width: 300, fontSize: 13, padding: "10px 18px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "#f2f2f7", outline: "none", marginBottom: 8, display: "block" }}
        />
        <p style={{ fontSize: 11, color: "rgba(242,242,247,0.28)", marginBottom: 28, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          {filtered.length} projects
        </p>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 16, width: "100%" }}>
          {filtered.map(p => (
            <div key={p.id} style={{
              borderRadius: 18, padding: "24px 24px 20px", display: "flex", flexDirection: "column",
              background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.25s", minWidth: 0, position: "relative",
            }}
            onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(139,92,246,0.25)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "rgba(255,255,255,0.045)" }}
            onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.028)" }}
            >
              {/* GitHub link top right */}
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={{ position: "absolute", top: 16, right: 16, width: 28, height: 28, borderRadius: 7, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.2s", fontSize: 12, color: "rgba(242,242,247,0.6)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#f2f2f7" }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(242,242,247,0.6)" }}
                >↗</a>
              )}

              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10, color: CAT_COLORS[p.cat] || "#60a5fa" }}>
                {p.cat}
              </div>
              <div style={{ fontSize: 14.5, fontWeight: 600, marginBottom: 10, lineHeight: 1.35, color: "#f2f2f7", fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif", letterSpacing: "-0.015em", paddingRight: p.github ? 36 : 0 }}>
                {p.name}
              </div>
              <div style={{ fontSize: 13, color: "rgba(242,242,247,0.52)", lineHeight: 1.68, marginBottom: 14, flex: 1 }}>
                {p.desc}
              </div>
              {p.metric && (
                <div style={{ fontSize: 11.5, fontWeight: 600, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.18)", color: "#34d399", padding: "4px 10px", borderRadius: 8, display: "inline-block", marginBottom: 12 }}>
                  ↑ {p.metric}
                </div>
              )}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {p.stack.slice(0,5).map(t => (
                  <span key={t} style={{ fontSize: 11, padding: "3px 9px", borderRadius: 6, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(242,242,247,0.45)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
