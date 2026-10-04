# Shivam Singh · Console Portfolio

Terminal-inspired personal portfolio for [Shivam Singh](https://github.com/sks710931), Staff Software Engineer.

The job experience timeline and terminal `experience` command use the exact roles, dates, responsibilities, and core technologies from the supplied `Profile (1).pdf` LinkedIn export. Project summaries, skills, and education use the earlier supplied resume, with the installation identity harness updated from follow-up context. The project cards use conversational summaries. Gleason project contributions are grouped across the tenure because the resume does not date each project separately.

## Run

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm typecheck
pnpm build
pnpm start
```

The site is a Next.js App Router application. The home page is rendered on the server for every request, then the browser hydrates the interactive terminal, navigation, and theme controls.

## Terminal

Type commands in the console: `help`, `whoami`, `about`, `skills`, `experience`, `systems`, `education`, `contact`, `linkedin`, `github`, `resume`, `theme`, `ls`, `clear`.

Up/down walks history. Tab autocompletes. The terminal only runs these commands — it does not execute a shell.

## Source of truth

- `src/data/portfolio.ts` — profile, career, stack
- `src/components/Terminal.tsx` — command interpreter
- `src/App.tsx` — page interface
- `src/app/` — Next.js routes, metadata, sitemap, and robots rules
- `public/resume.pdf` — supplied resume with the GEMS collaboration wording corrected, linked from the page and terminal
- `public/profile.pdf` — printable portfolio PDF with corrected GEMS collaboration wording, retained for existing direct links

## Deployment

Live site: https://shivamsingh.dev (redirects to https://www.shivamsingh.dev).

Vercel project: `shivamsinghdotdev` in `cryptobabys-projects`. Vercel builds it as a Next.js app. `vercel.json` permanently redirects the apex host to `https://www.shivamsingh.dev/`. Both custom-domain hostnames are assigned to this project.

## Social previews

`src/app/layout.tsx` sets the Open Graph and Twitter large-image metadata. Wide is the preferred link preview; a square alternative is also declared in Open Graph. Twitter explicitly uses the wide card. Portrait and story versions are downloadable assets for social posts; each uses a layout suited to its proportions.

| Format | File | Pixels |
| --- | --- | --- |
| Wide | `public/social-preview.png` | 1734 × 907 |
| Square | `public/social-preview-square.png` | 1254 × 1254 |
| Portrait | `public/social-preview-portrait.png` | 1122 × 1402 |
| Story | `public/social-preview-story.png` | 941 × 1672 |

All files are PNGs served directly from the canonical `https://www.shivamsingh.dev/` domain without JavaScript or authentication. Open Graph dimensions match the actual images.

## Fonts and audits

The app serves DM Sans, Space Grotesk, and Space Mono locally from `public/fonts/`, with the upstream SIL Open Font License notices beside the WOFF2 files. Critical fonts are preloaded; the app does not request Google Fonts during page rendering. Run Lighthouse against a production build in a clean browser profile with extensions disabled.
