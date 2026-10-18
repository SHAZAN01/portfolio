# shazan.dev

Personal site of Shazan Ansar Mohammed. Next.js 16 (App Router), React 19, Tailwind CSS 4, MDX case studies, Resend contact form.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # typecheck + lint
npm run build      # production build
```

## Where content lives (edit these, not components)
| What | File |
|---|---|
| Name, headline, links, availability, education | `src/content/profile.ts` |
| Papers, thesis, Norris project, mentoring | `src/content/research.ts` |
| Flagship projects + chart data | `src/content/flagship.ts` |
| Certifications | `src/content/certifications.ts` |
| Jobs | `src/content/experience.ts` |
| Skills (grouped) | `src/content/skills.ts` |
| Hobbies | `src/content/life.ts` |
| Photos | drop files into folders, see `PHOTOS.md` |
| All projects (GitHub + others) | `src/content/projects.ts` |
| Full case studies | `content/projects/*.mdx` |

**Add a case study:** copy any `.mdx` in `content/projects/`, change `slug`, `title`, `order`. Set `featured: true` to show it in Selected work.
**Add a paper:** add an object to `publications` in `research.ts`. Use `status`: `published`, `to-appear`, `under-review`, or `in-progress`.
**Metrics** only appear when `verified: true`. **Links** only appear when `href` isn't empty.
**Résumé:** replace `public/resume.pdf`. `/resume` redirects to it.

## Contact form
Copy `.env.example` values into Vercel → Project → Settings → Environment Variables. `RESEND_FROM_EMAIL` must use a domain verified in Resend. Until configured, the form tells visitors to email directly (it never fakes success).

## Design notes
- Order: hero → proven results → flagship projects → research → skills (role tabs) → experience & credentials → life → contact.
- Hero background: GPU point-field (React Three Fiber + custom shader), loaded after the page is idle, paused off-screen, skipped without WebGL or with reduced motion.
- Charts: Recharts (the engine behind shadcn/ui charts). Tabs: Radix (shadcn/ui primitive).
