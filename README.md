# Shivam Singh · Console Portfolio

Terminal-inspired personal portfolio for [Shivam Singh](https://github.com/sks710931), Staff Software Engineer.

Content is drawn from the LinkedIn profile export. Engineering focus areas describe domains of experience — they are not published client case studies.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run typecheck
npm run build
npm run preview
```

Deploy `dist/` to any static host. No backend.

## Terminal

Type commands in the console: `help`, `whoami`, `about`, `skills`, `experience`, `systems`, `education`, `contact`, `linkedin`, `github`, `resume`, `theme`, `ls`, `clear`.

Up/down walks history. Tab autocompletes. The terminal only runs these commands — it does not execute a shell.

## Source of truth

- `src/data/portfolio.ts` — profile, career, stack
- `src/components/Terminal.tsx` — command interpreter
- `src/App.tsx` — page
- `public/profile.pdf` — original LinkedIn export
