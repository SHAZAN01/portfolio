# Photos

## One command
```bash
bash scripts/add-photos.sh ~/Desktop/shazan-career
```
Resizes, compresses, renames, and places every photo. Re-run any time.

## Where they appear
| Your file | Location | Shape |
|---|---|---|
| portrait.JPG | First screen, right | 4:5 portrait |
| conference-icai-2026.jpeg | ICAI paper card | 16:10 |
| ranlp-2025.jpeg | RANLP paper card | 16:10 |
| tennis, hike, california, sunset, book, tennis2, hike2, pool | Life strip | square |

All photos are cropped to the same shape per section and framed toward the upper-middle, where faces usually are.

## If a face is cut off
Change the framing in one place:
- Portrait: `src/components/home/Hero.tsx` → `objectPosition: "50% 22%"`
- Paper photos: `src/components/home/Research.tsx` → `objectPosition: "50% 30%"`
- Life squares: `src/components/home/Life.tsx` → `objectPosition: "50% 30%"`

First number = left↔right (0% left, 100% right). Second = top↔bottom (0% top, 100% bottom). To show more of the top of the photo, lower the second number.
