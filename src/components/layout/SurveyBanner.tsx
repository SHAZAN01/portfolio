"use client"
import { useState, useEffect } from "react"

export function SurveyBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: "linear-gradient(135deg, rgba(37,99,235,0.95), rgba(124,58,237,0.95))",
      backdropFilter: "blur(12px)",
      padding: "12px 24px",
      display: "flex", alignItems: "center", justifyContent: "center", gap: 20,
      flexWrap: "wrap",
      animation: "bannerDown 0.4s ease",
      borderBottom: "1px solid rgba(255,255,255,0.15)",
    }}>
      <style>{`
        @keyframes bannerDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 9999, background: "rgba(255,255,255,0.2)", color: "#fff", letterSpacing: "0.08em" }}>RESEARCH</span>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.92)", fontWeight: 400 }}>
          Thesis survey on NLP, AI agents, and AI in finance. Share your expertise.
        </span>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <a href="mailto:shazanansar@gmail.com?subject=Thesis Survey"
          style={{ fontSize: 12, fontWeight: 600, padding: "7px 16px", borderRadius: 8, background: "#fff", color: "#2563eb", textDecoration: "none", transition: "opacity 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.88" }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1" }}
        >Contribute →</a>
        <button onClick={() => setDismissed(true)} style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
      </div>
    </div>
  )
}
