"use client"
import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer
      className="border-t py-12 text-center"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <p
        className="text-2xl font-bold mb-3"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          background: "linear-gradient(135deg,#60a5fa 0%,#a78bfa 40%,#ec4899 80%,#f97316 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {profile.name}
      </p>
      <p className="text-sm mb-1" style={{ color: "var(--text3)" }}>
        AI · ML · Data Engineer · California, US
      </p>
      <p className="text-xs mt-3" style={{ color: "var(--text3)" }}>
        Built with Next.js 15 · Tailwind v4 · shadcn/ui · Framer Motion · Three.js
      </p>
      <p className="text-xs mt-1" style={{ color: "var(--text3)" }}>
        © 2025 Shazan Ansar Mohammed — All rights reserved
      </p>
    </footer>
  )
}