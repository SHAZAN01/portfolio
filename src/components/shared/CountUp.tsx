"use client"
import { useEffect, useRef, useState } from "react"

export function CountUp({
  to,
  suffix = "",
  duration = 1800,
  isFloat = false,
}: {
  to: number
  suffix?: string
  duration?: number
  isFloat?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || !ref.current) return
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      const val = isFloat ? (eased * to).toFixed(1) : Math.floor(eased * to)
      if (ref.current) ref.current.textContent = val + suffix
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, to, suffix, duration, isFloat])

  return (
    <span ref={ref}>
      {isFloat ? to.toFixed(1) : 0}{suffix}
    </span>
  )
}