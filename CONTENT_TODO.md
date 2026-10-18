# Content checklist (private, not shown on the site)

Things only you can supply or confirm. The site hides anything unverified instead of guessing.

## Confirm
- [ ] **Wise Torch link**: set to instagram.com/wise.torch. Fix in `src/content/profile.ts` (`venture.href`) if different.
- [ ] **MGIT details**: degree name and years (Experience shows "Undergraduate"), and what the Idea Incubator role involved (`src/content/experience.ts`, `src/content/story.ts`).
- [ ] **Threads handle**: I assumed `@shazan_ansar` (same as Instagram). Fix in `src/content/profile.ts` if different.
- [ ] **Project descriptions from GitHub**: written from your READMEs in `src/content/projects.ts`. Check wording.
- [ ] **Author order** for ICAI 2026 and the J.UCS survey. Edit `authors` in `src/content/research.ts` (you're listed first in both; change if wrong).
- [ ] **Your contribution** to the ICAI paper. `content/projects/llm-post-editing.mdx` currently only says "Co-author". Add what you built.
- [ ] **Skill evidence**: check each tool → source link in `src/content/skills.ts` is something you'd defend in an interview.

## Links to add when live
- [ ] RANLP 2025 paper URL → `url` in `src/content/research.ts` and `links` in `clinical-translation.mdx`
- [ ] ICAI 2026 / Springer CCIS DOI → same places for `llm-post-editing`
- [ ] GitHub repo links for any public projects (`links:` in each `.mdx`)

## Metrics currently hidden (set `verified: true` once you can back them up)
- [ ] Clinical translation: "+32% BLEU vs baseline" (`clinical-translation.mdx`)
- [ ] Lakehouse: "−40% data latency" (`lakehouse-realtime.mdx`)
- [ ] RAG assistant: "−35% response latency" (`rag-analytics-assistant.mdx`)

## Files to keep in `public/`
- [ ] `public/images/profile.jpg` (your photo)
- [ ] `public/images/wisetorch.png` (Wise Torch logo)
- [ ] `public/resume.pdf` (latest résumé)

## Personal (optional, makes "Life" section yours)
- [ ] Books you're reading / favourites → `src/content/life.ts` (`items` under Reading)
- [ ] Trails, cafés, places, films → same file
- [ ] Photos → see PHOTOS.md (drop files in folders, nothing else)

## Not yet included
- [ ] `chronos-mlops-system` (README is empty): add a description and I'll include it, or add it to `src/content/projects.ts`.
- [ ] NextWork AWS projects: couldn't read that page; send titles if you want them in the index.
