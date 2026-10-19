"use client";

import { profile } from "@/content/profile";
import { SocialIcon } from "@/components/site/SocialIcon";
import { ContactForm } from "./ContactForm";

const intents = [
  { label: "Data Scientist roles", text: "Data science, AI architecture, or data engineering.", topic: "Job or internship" },
  { label: "Founding engineer", text: "Early-stage team with data and AI at the core.", topic: "Founding engineer role" },
  { label: "Co-founder chat", text: "An idea that needs a technical partner.", topic: "Co-founder conversation" },
  { label: "Research", text: "NMT, LLM evaluation, low-resource languages.", topic: "Research collaboration" },
];

export function Collaborate() {
  const choose = (topic: string) => {
    window.dispatchEvent(new CustomEvent("contact-topic", { detail: topic }));
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="reveal text-center">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="display mx-auto mt-3 max-w-[14ch] text-[clamp(2.8rem,7.5vw,6rem)]">
            Let&apos;s <span className="grad-text">talk.</span>
          </h2>
          <p className="lede mx-auto mt-5 text-center">Hiring a data scientist, building a startup, or working on language AI?</p>
        </div>

        <ul className="mt-10 hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {intents.map((x) => (
            <li key={x.topic}>
              <button onClick={() => choose(x.topic)} className="grad-border card-sm h-full w-full p-5 text-left transition-transform hover:-translate-y-0.5">
                <span className="block text-lg font-bold tracking-tight">{x.label}</span>
                <span className="mt-1 block text-sm text-dim">{x.text}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="hidden sm:block lg:col-span-4">
            <p className="font-semibold">Find me online</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-1">
              {profile.social.map((s) => (
                <li key={s.key}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="card-sm flex items-center gap-3 p-3.5 transition-transform hover:-translate-y-0.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-card-2"><SocialIcon name={s.key} className="size-5" /></span>
                    <span className="min-w-0">
                      <span className="block font-semibold">{s.label}</span>
                      <span className="block truncate text-sm text-dim">{s.handle}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${profile.email}`} className="card-sm flex items-center gap-3 p-3.5 transition-transform hover:-translate-y-0.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue text-white"><SocialIcon name="email" className="size-5" /></span>
                  <span className="min-w-0">
                    <span className="block font-semibold">Email</span>
                    <span className="block truncate text-sm text-dim">{profile.email}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div id="contact-form" className="scroll-mt-24 lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
