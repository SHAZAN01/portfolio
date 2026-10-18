import { Hero } from "@/components/home/Hero";
import { Results } from "@/components/home/Results";
import { Flagship } from "@/components/home/Flagship";
import { Research } from "@/components/home/Research";
import { People } from "@/components/home/People";
import { Skills } from "@/components/home/Skills";
import { Experience } from "@/components/home/Experience";
import { Life } from "@/components/home/Life";
import { Collaborate } from "@/components/home/Collaborate";
import { profile } from "@/content/profile";
import { asset } from "@/lib/photos";

export default function HomePage() {
  const mentor = asset("/images/me/mentoring.jpg", "");
  return (
    <>
      <Hero />
      <Results />
      <Flagship />
      <Research />
      <People banner={profile.banner} mentorPhoto={mentor || undefined} />
      <Skills />
      <Experience />
      <Life />
      <Collaborate />
    </>
  );
}
