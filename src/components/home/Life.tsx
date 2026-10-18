import { BookOpen, Mountain, Coffee, Plane, Clapperboard, Languages } from "lucide-react";
import { interests } from "@/content/life";
import { photosIn } from "@/lib/photos";
import { profile } from "@/content/profile";
import { PhotoRing } from "./PhotoRing";

function TennisBall({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" /><path d="M5.5 5.5c3 3 3 10 0 13M18.5 5.5c-3 3-3 10 0 13" />
    </svg>
  );
}
const ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  books: BookOpen, tennis: TennisBall, hiking: Mountain, cafes: Coffee, travel: Plane, films: Clapperboard,
};

export function Life() {
  const photos = photosIn("life").slice(0, 16);
  return (
    <section id="life" className="section" aria-labelledby="life-title">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Life</p>
            <h2 id="life-title" className="h-section mt-3">Off the <span className="grad-text grad-aurora">clock.</span></h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            {interests.map((it) => {
              const Icon = ICON[it.key];
              return <li key={it.key} className="chip !bg-card"><Icon className="size-4 text-ember" />{it.title}</li>;
            })}
          </ul>
        </div>

        {photos.length > 2 && (
          <div className="reveal mt-6"><PhotoRing photos={photos} /></div>
        )}

        <p className="reveal mt-5 flex items-center gap-2 text-sm text-dim">
          <Languages className="size-4" aria-hidden /> Speaks {profile.spoken.join(", ")}.
        </p>
      </div>
    </section>
  );
}
