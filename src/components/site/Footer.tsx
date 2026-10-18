import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { profile } from "@/content/profile";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex items-center gap-4">
          <span className="grad-ring !p-[2px]">
            <span className="relative block size-14 overflow-hidden rounded-full border-2 border-background">
              <Image src={profile.photo} alt="" fill sizes="56px" className="object-cover" />
            </span>
          </span>
          <div>
            <p className="text-xl font-bold tracking-tight">{profile.name}</p>
            <p className="text-sm text-dim">{profile.roles.join(" · ")}</p>
            <p className="mt-0.5 text-sm text-dim">{profile.location}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex flex-wrap gap-2" aria-label="Social profiles">
            {profile.social.map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                   className="press grid size-11 place-items-center rounded-full border border-line bg-card text-dim transition-colors hover:text-foreground">
                  <SocialIcon name={s.key} className="size-5" />
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="press grid size-11 place-items-center rounded-full border border-line bg-card text-dim transition-colors hover:text-foreground">
                <SocialIcon name="email" className="size-5" />
              </a>
            </li>
          </ul>
          <a href="#top" className="press inline-flex items-center gap-1.5 text-sm text-dim hover:text-foreground">
            Back to top <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </div>
      <div className="wrap flex flex-wrap items-center justify-between gap-2 border-t border-line py-6 text-xs text-dim">
        <p>{profile.email}</p>
      </div>
    </footer>
  );
}
