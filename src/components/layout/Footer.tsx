"use client"
import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "44px 40px", textAlign: "center" }}>
      <p style={{ fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif", fontSize: 22, fontWeight: 600, marginBottom: 10, background: "linear-gradient(135deg,#60a5fa 0%,#a78bfa 40%,#ec4899 80%,#f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        {profile.name}
      </p>
      <p style={{ fontSize: 13, color: "rgba(242,242,247,0.35)", marginBottom: 4 }}>
        AI · ML · Data Engineer · California, US
      </p>
      <p style={{ fontSize: 12, color: "rgba(242,242,247,0.2)", marginTop: 8 }}>
        © 2025 Shazan Ansar Mohammed — All rights reserved
      </p>
    </footer>
  )
}
