"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { ThemeToggle } from "./ThemeToggle";
import { SocialIcon } from "./SocialIcon";
import { profile } from "@/content/profile";

const links = [
  { id: "results", label: "Results" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "people", label: "People" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const navSocial = profile.social.filter((s) => ["linkedin", "github", "instagram", "threads"].includes(s.key));

export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!onHome) return;
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const top = () => { if (window.scrollY < window.innerHeight * 0.5) setActive(""); };
    window.addEventListener("scroll", top, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", top); };
  }, [onHome]);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className="glass sticky top-0 z-50 border-b border-line">
      <div className="wrap flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
          <span className="grad-ring !p-[2px]"><span className="relative block size-7 overflow-hidden rounded-full border-2 border-background"><Image src={profile.photo} alt="" fill sizes="28px" className="object-cover" /></span></span>
          Shazan Ansar
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={href(l.id)}
              aria-current={active === l.id ? "true" : undefined}
              className={`rounded-full px-3 py-1.5 text-[13px] transition-colors ${
                active === l.id ? "bg-card-2 text-foreground" : "text-dim hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="mr-1 hidden items-center md:flex">
            {navSocial.map((s) => (
              <a key={s.key} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                 className="grid size-9 place-items-center rounded-full text-dim transition-colors hover:bg-card-2 hover:text-foreground">
                <SocialIcon name={s.key} className="size-[17px]" />
              </a>
            ))}
          </div>
          <a href={profile.resumeUrl} className="btn btn-primary hidden !px-4 !py-1.5 !text-[13px] sm:inline-flex">Resume</a>
          <ThemeToggle />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className="grid size-9 place-items-center rounded-full hover:bg-card-2 xl:hidden" aria-label="Open menu">
              <Menu className="size-[18px]" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
              <Dialog.Content className="glass fixed inset-x-3 top-3 z-[80] max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-[28px] border border-line p-6 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-lg font-semibold">Menu</Dialog.Title>
                  <Dialog.Close className="grid size-9 place-items-center rounded-full bg-card-2" aria-label="Close menu"><X className="size-4" /></Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">Sections and social links</Dialog.Description>
                <nav aria-label="Mobile" className="mt-4 grid grid-cols-2 gap-2">
                  {links.map((l) => (
                    <a key={l.id} href={href(l.id)} onClick={() => setOpen(false)}
                       className="rounded-2xl bg-card px-4 py-3.5 text-[17px] font-semibold tracking-tight">
                      {l.label}
                    </a>
                  ))}
                  <a href={profile.resumeUrl} className="grad-bg rounded-2xl px-4 py-3.5 text-[17px] font-semibold text-white">Resume</a>
                </nav>
                <p className="mt-6 text-sm text-dim">Find me on</p>
                <div className="mt-2 grid grid-cols-5 gap-2">
                  {profile.social.map((s) => (
                    <a key={s.key} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                       className="grid aspect-square place-items-center rounded-2xl bg-card">
                      <SocialIcon name={s.key} className="size-6" />
                    </a>
                  ))}
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
