"use client"
import { useState, useMemo } from "react"
import { FadeUp } from "@/components/shared/FadeUp"
import { projects, ProjectCategory } from "@/data/projects"
import { useIsMobile } from "@/components/shared/useIsMobile"

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
    <section id="projects" style={{ padding: isMobile ? "56px 20px" : "80px 40px", maxWidth: 1060, margin: "0 auto", width: "100%" }}>
      <FadeUp>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(242,242,247,0.3)", marginBottom: 12 }}>Projects</p>
        <h2 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif", fontSize: isMobile ? "2rem" : "clamp(2rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 28 }}>
          {"What I've "}
          <span style={{ background: "linear-gradient(135deg,#22d3ee,#6ee7b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Built</span>
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 14 }}>
          {CATS.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              fontSize: isMobile ? 11 : 12, padding: isMobile ? "5px 12px" : "7px 16px",
              borderRadius: 9999, cursor: "pointer", transition: "all 0.2s",
              background: activeCat === cat ? "rgba(34,211,238,0.12)" : "transparent",
              border: activeCat === cat ? "1px solid rgba(34,211,238,0.35)" : "1px solid rgba(255,255,255,0.09)",
              color: activeCat === cat ? "#67e8f9" : "rgba(242,242,247,0.55)",
              fontWeight: activeCat === cat ? 600 : 400,
            }}>{cat}</button>
          ))}
        </div>

        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search projects…"
          style={{ width: isMobile ? "100%" : 300, fontSize: 13, padding: "10px 16px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "#f2f2f7", outline: "none", marginBottom: 8, display: "block" }}
        />

        <p style={{ fontSize: 11, color: "rgba(242,242,247,0.28)", marginBottom: 24, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          {filtered.length} projects
        </p>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 14, width: "100%" }}>
          {filtered.map(p => (
            <div key={p.id} style={{
              borderRadius: 16, padding: "22px 22px 18px",
              display: "flex", flexDirection: "column",
              background: "rgba(255,255,255,0.028)",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.25s", minWidth: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(139,92,246,0.25)"; e.currentTarget.style.background = "rgba(255,255,255,0.045)" }}
            onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.028)" }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8, color: CAT_COLORS[p.cat] || "#60a5fa" }}>
                {p.cat}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, lineHeight: 1.35, color: "#f2f2f7", fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif", letterSpacing: "-0.01em" }}>
                {p.name}
              </div>
              <div style={{ fontSize: 13, color: "rgba(242,242,247,0.52)", lineHeight: 1.65, marginBottom: 12, flex: 1 }}>
                {p.desc}
              </div>
              {p.metric && (
                <div style={{ fontSize: 11, fontWeight: 600, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.18)", color: "#34d399", padding: "4px 10px", borderRadius: 8, display: "inline-block", marginBottom: 10 }}>
                  ↑ {p.metric}
                </div>
              )}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {p.stack.slice(0,5).map(t => (
                  <span key={t} style={{ fontSize: 10.5, padding: "2px 8px", borderRadius: 6, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(242,242,247,0.4)" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
