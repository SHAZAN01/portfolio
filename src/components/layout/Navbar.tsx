"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

const links = [
  { href: "hero", label: "Home" },
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "skills", label: "Skills" },
  { href: "publications", label: "Research" },
  { href: "contact", label: "Contact" },
]

export function Navbar() {
  const [active, setActive] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      for (const l of [...links].reverse()) {
        const el = document.getElementById(l.href)
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(l.href); break }
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: isMobile ? "10px 16px" : "12px 24px" }}>
        <div style={{
          maxWidth: 1060, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: isMobile ? "8px 14px" : "6px 6px 6px 8px",
          borderRadius: 9999,
          background: scrolled ? "rgba(5,5,8,0.95)" : "rgba(5,5,8,0.7)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          {/* Left: banner + logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {!isMobile && (
              <div style={{ width: 100, height: 32, borderRadius: 6, overflow: "hidden", opacity: 0.85 }}>
                <Image src="/images/banner.jpg" alt="SAM" width={100} height={32} style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }} />
              </div>
            )}
            <button onClick={() => go("hero")} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif", fontSize: isMobile ? 16 : 15, fontWeight: 700, color: "#f2f2f7", background: "none", border: "none", cursor: "pointer", letterSpacing: "-0.02em" }}>
              SAM
            </button>
          </div>

          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 2 }}>
              {links.map(({ href, label }) => (
                <button key={href} onClick={() => go(href)} style={{
                  background: active === href ? "rgba(139,92,246,0.18)" : "transparent",
                  border: active === href ? "1px solid rgba(139,92,246,0.3)" : "1px solid transparent",
                  color: active === href ? "#c4b5fd" : "rgba(242,242,247,0.6)",
                  fontSize: 13, padding: "7px 14px", borderRadius: 9999,
                  cursor: "pointer", transition: "all 0.2s",
                }}>{label}</button>
              ))}
            </div>
          )}

          {/* Right: open to work + mobile menu */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: isMobile ? 11 : 12, padding: isMobile ? "6px 10px" : "8px 16px", borderRadius: 9999, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.22)", color: "#10b981", fontWeight: 600, whiteSpace: "nowrap" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981", display: "inline-block", flexShrink: 0 }} />
              {isMobile ? "Hiring" : "Open to Work"}
            </div>
            {/* Hamburger for mobile */}
            {isMobile && (
              <button onClick={() => setMenuOpen(!menuOpen)}
                style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "#f2f2f7", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}
              >{menuOpen ? "✕" : "☰"}</button>
            )}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobile && menuOpen && (
          <div style={{
            maxWidth: 1060, margin: "8px auto 0",
            background: "rgba(5,5,8,0.97)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16, padding: "8px",
            display: "flex", flexDirection: "column", gap: 2,
          }}>
            {links.map(({ href, label }) => (
              <button key={href} onClick={() => go(href)} style={{
                background: active === href ? "rgba(139,92,246,0.15)" : "transparent",
                border: "none",
                color: active === href ? "#c4b5fd" : "rgba(242,242,247,0.7)",
                fontSize: 15, padding: "12px 16px", borderRadius: 10,
                cursor: "pointer", textAlign: "left", fontWeight: active === href ? 600 : 400,
              }}>{label}</button>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
