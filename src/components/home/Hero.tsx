import Image from "next/image";
import { profile } from "@/content/profile";
import { asset } from "@/lib/photos";
import { SocialIcon } from "@/components/site/SocialIcon";
import { DataFieldLazy } from "@/components/three/DataFieldLazy";
import { HeroPhotos } from "./HeroPhotos";

export function Hero() {
  const portrait = asset(profile.photo, "/images/profile.jpg");
  const second = asset("/images/me/portrait.jpg", "");
  const shots = [
    { src: portrait, alt: "Portrait of Shazan Ansar Mohammed", position: "50% 30%" },
    ...(second ? [{ src: second, alt: "Shazan Ansar Mohammed", position: "50% 25%" }] : []),
  ];
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* 3D liquid orb behind the portrait */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 hidden lg:block"><DataFieldLazy /></div>
      </div>

      <div className="wrap grid items-center gap-10 pb-8 pt-8 sm:pb-16 sm:pt-16 lg:min-h-[calc(100svh-3.5rem)] lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <p className="enter chip !bg-card/80 text-[13px] backdrop-blur" style={{ ["--d" as string]: "0ms" }}>
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green opacity-70 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-green" />
            </span>
            Open to roles · Summer &amp; Fall 2027
          </p>

          <h1 className="enter display mt-6 text-[clamp(2.7rem,6.2vw,5.2rem)]" style={{ ["--d" as string]: "80ms" }}>
            Shazan Ansar <span className="grad-text">Mohammed</span>
          </h1>

          <p className="enter mt-5 text-[clamp(1.1rem,2vw,1.5rem)] font-semibold tracking-tight" style={{ ["--d" as string]: "150ms" }}>
            <span className="whitespace-nowrap">{profile.roles[0]}</span>
            {profile.roles.slice(1).map((r) => (
              <span key={r}>{" "}<span className="whitespace-nowrap text-dim"><span aria-hidden className="mr-2 text-faint">/</span>{r}</span></span>
            ))}
          </p>

          {profile.headline && (
            <p className="enter mt-6 max-w-[34ch] text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold leading-tight tracking-tight" style={{ ["--d" as string]: "220ms" }}>
              {profile.headline}
            </p>
          )}
          <p className="enter mt-4 max-w-[58ch] text-[17px] leading-relaxed text-dim" style={{ ["--d" as string]: "280ms" }}>{profile.bio}</p>

          <div className="enter mt-8 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "340ms" }}>
            <a href="#results" className="btn btn-primary">See the results</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>

          <div className="enter mt-8 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "400ms" }}>
            <ul className="flex gap-2" aria-label="Social profiles">
              {profile.social.map((s) => (
                <li key={s.key}>
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                     className="grid size-10 place-items-center rounded-full border border-line bg-card/80 text-dim backdrop-blur transition-colors hover:text-foreground">
                    <SocialIcon name={s.key} className="size-[17px]" />
                  </a>
                </li>
              ))}
            </ul>
            <a href={profile.venture.href} target="_blank" rel="noreferrer"
               className="flex items-center gap-2.5 rounded-full border border-line bg-card/80 py-1.5 pl-1.5 pr-4 text-sm backdrop-blur transition-colors hover:border-faint">
              <span className="relative size-7 overflow-hidden rounded-full bg-white">
                <Image src={profile.venture.logo} alt="" fill sizes="28px" className="object-cover" />
              </span>
              <span><span className="font-semibold">Founder</span> <span className="text-dim">· Wise Torch</span></span>
            </a>
          </div>
        </div>

        <div className="enter order-1 mx-auto w-full max-w-[230px] sm:max-w-[320px] lg:order-2 lg:col-span-5 lg:max-w-[420px]" style={{ ["--d" as string]: "120ms" }}>
          <div className="relative" data-orb-anchor>
            <div aria-hidden className="grad-bg absolute -inset-6 rounded-[48px] opacity-40 blur-3xl lg:hidden" />
            <HeroPhotos shots={shots} />
          </div>
        </div>
      </div>
    </section>
  );
}
