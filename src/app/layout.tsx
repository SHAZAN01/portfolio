import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Motion } from "@/components/site/Motion";
import { ScrollField } from "@/components/site/ScrollField";
import { profile } from "@/content/profile";

const description =
  "Shazan Ansar Mohammed: data science, data engineering, and NLP research on machine translation with large language models. Open to 2027 internships and startup conversations.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: "Shazan Ansar Mohammed · Data, ML and NLP", template: "%s · Shazan Ansar Mohammed" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shazan Ansar Mohammed",
    description,
    url: profile.siteUrl,
    siteName: "shazan.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Shazan Ansar Mohammed", description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
  ],
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: "Graduate Researcher, NLP and Machine Translation",
  affiliation: { "@type": "CollegeOrUniversity", name: profile.education.school },
  sameAs: profile.social.map((s) => s.href),
  knowsAbout: ["Data science", "Data engineering", "Machine learning", "Natural language processing", "Machine translation"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
        <ThemeProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-blue focus:px-4 focus:py-2 focus:text-white">
            Skip to content
          </a>
          <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
          <Motion />
          <ScrollField />
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
