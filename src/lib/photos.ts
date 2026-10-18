import fs from "fs";
import path from "path";

/**
 * Reads images from public/images/<folder>/ at build time.
 * Caption comes from the file name: "2025-griffith-park-hike.jpg" -> "Griffith park hike".
 * Prefix a number to control order: "01-...", "02-...".
 */
export type FoundPhoto = { src: string; alt: string; caption: string; name: string };

const EXT = /\.(jpe?g|png|webp|avif)$/i;

function caption(file: string) {
  const base = file.replace(EXT, "").replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ").trim();
  if (!base || /^(img|dsc|pxl|photo|screenshot|image|whatsapp|copy)\b/i.test(base) || /^\d+$/.test(base)) return "";
  return base.charAt(0).toUpperCase() + base.slice(1);
}

export function photosIn(folder: string): FoundPhoto[] {
  const dir = path.join(process.cwd(), "public", "images", folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => ({ name: f, src: `/images/${folder}/${f}`, caption: caption(f), alt: caption(f) || "Photo" }));
}

/** First photo in public/images/story/ whose name starts with the given year. */
export function storyPhoto(year: string) {
  return photosIn("story").find((p) => p.name.startsWith(year)) ?? null;
}

/** Returns `src` if public/<src> exists, else `fallback`. Lets the site build before photos are added. */
export function asset(src: string, fallback: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src)) ? src : fallback;
}
