import type { Metadata } from "next"
import { Outfit, DM_Sans } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300","400","500","600","700","800","900"],
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300","400","500","600"],
  display: "swap",
})

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  title: "Shazan Ansar Mohammed — AI/ML & Data Engineer",
  description: "Data and Machine Learning Engineer specializing in end-to-end ML pipelines, multilingual NLP, and production-grade data platforms. M.S. CS @ CSUDH · GPA 4.0 · RANLP 2025.",
  keywords: ["AI Engineer","ML Engineer","Data Engineer","NLP","Python","AWS","PyTorch"],
  authors: [{ name: "Shazan Ansar Mohammed" }],
  openGraph: {
    title: "Shazan Ansar Mohammed — AI/ML & Data Engineer",
    description: "Building intelligent systems that work in the real world.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: "var(--font-dm), DM Sans, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
