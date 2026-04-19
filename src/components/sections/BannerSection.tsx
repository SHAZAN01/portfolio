"use client"
import Image from "next/image"

export function BannerSection() {
  return (
    <div style={{ width: "100%", position: "relative", overflow: "hidden" }}>
      <Image
        src="/images/banner.jpg"
        alt="Shazan Ansar"
        width={1920}
        height={400}
        style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
        priority
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,8,0.4) 0%, transparent 30%, transparent 70%, rgba(5,5,8,0.4) 100%)" }} />
    </div>
  )
}
