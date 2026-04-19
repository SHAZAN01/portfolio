"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { profile } from "@/data/profile"

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

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "12px 24px" }}>
      <div style={{
        maxWidth: 1060, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "6px 6px 6px 8px", borderRadius: 9999,
        background: scrolled ? "rgba(5,5,8,0.92)" : "rgba(5,5,8,0.65)",
        backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.08)", transition: "background 0.3s",
        overflow: "hidden",
      }}>
        {/* Banner image as left side of navbar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <div style={{ width: 120, height: 36, borderRadius: 8, overflow: "hidden", flexShrink: 0, opacity: 0.85 }}>
            <Image src="/images/banner.jpg" alt="Shazan Ansar" width={120} height={36} style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }} />
          </div>
          <button onClick={() => go("hero")} style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif",
            fontSize: 15, fontWeight: 700, color: "#f2f2f7",
            background: "none", border: "none", cursor: "pointer", letterSpacing: "-0.02em"
          }}>SAM</button>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 2 }}>
          {links.map(({ href, label }) => (
            <button key={href} onClick={() => go(href)} style={{
              background: active === href ? "rgba(139,92,246,0.18)" : "transparent",
              border: active === href ? "1px solid rgba(139,92,246,0.3)" : "1px solid transparent",
              color: active === href ? "#c4b5fd" : "rgba(242,242,247,0.6)",
              fontSize: 13, padding: "7px 14px", borderRadius: 9999,
              cursor: "pointer", transition: "all 0.2s",
              fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
            }}
            onMouseEnter={e => { if (active !== href) e.currentTarget.style.color = "#f2f2f7" }}
            onMouseLeave={e => { if (active !== href) e.currentTarget.style.color = "rgba(242,242,247,0.6)" }}
            >{label}</button>
          ))}
        </div>

        {/* Open to work */}
        <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, padding: "8px 16px", borderRadius: 9999, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.22)", color: "#10b981", fontWeight: 600, flexShrink: 0 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981", display: "inline-block" }} />
          Open to Work
        </div>
      </div>
    </nav>
  )
}
