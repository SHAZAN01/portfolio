import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SurveyBanner } from "@/components/layout/SurveyBanner"
import { HeroSection } from "@/components/sections/HeroSection"
import { MarqueeSection } from "@/components/sections/MarqueeSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { BannerSection } from "@/components/sections/BannerSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { PublicationsSection } from "@/components/sections/PublicationsSection"
import { CertsSection } from "@/components/sections/CertsSection"
import { ContactSection } from "@/components/sections/ContactSection"

const Divider = () => (
  <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)", margin: "0 40px" }} />
)

export default function Home() {
  return (
    <>
      <Navbar />
      <SurveyBanner />
      <main style={{ width: "100%", overflowX: "hidden" }}>
        <HeroSection />
        <MarqueeSection />
        <Divider />
        <AboutSection />
        <BannerSection />
        <ExperienceSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <PublicationsSection />
        <Divider />
        <CertsSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
