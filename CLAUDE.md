# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start local dev server (Next.js 13, port 3000)
npm run build     # production build (outputs to /out as static export)
npm run lint      # ESLint (configured to not block builds)
```

There are no tests. The `export` script in package.json runs `next build && next export`, which is redundant with how Next 13 handles `output: "export"` — just use `npm run build`.

## Deployment

Pushing to `main` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`) that runs `npm run build`, then deploys the `/out` directory to GitHub Pages. The CNAME file sets the custom domain.

## Architecture

This is a **Next.js 13 static export** portfolio site (`output: "export"` in `next.config.js`). Because it's a static export, there are no server components with data fetching — everything is either static or `"use client"`.

### Data source

All project/case study data lives in a single file: `lib/content.ts`. The `caseStudies` array is the source of truth for every project card on the homepage and the "Up Next" navigation on project pages. Adding or reordering a project here propagates everywhere automatically via `UpNextSection` (which computes the next two projects in sequence) and the homepage grid.

### Page structure

- `app/layout.tsx` — root layout; sets fonts (Inter via `--font-sans`, Cormorant Garamond via `--font-serif`) and global metadata
- `app/page.tsx` — homepage; renders hero + case study grid from `caseStudies`
- `app/projects/[slug]/` — each case study is its own folder with a `page.tsx` that lazy-loads a `*Case.tsx` orchestrator, which composes named section components (e.g. `HeroSection`, `OverviewSection`, etc.)

### Component layers

- `components/` — shared layout primitives (`Container`, `Navbar`, `Footer`, `BackButton`) and reusable content blocks (`CaseStudyCard`, `ProjectMeta`, `UpNextSection`, `SectionHeading`)
- `components/ui/` — shadcn/ui primitives (Radix-based). These are auto-generated and generally should not be edited directly.

### Styling

Tailwind with a custom design system defined in `tailwind.config.ts`:
- `bg-cream` (`#F5F6F7`) is the primary page background
- `accent` (`#10B981`) is the brand green used for interactive states
- `ink` / `inkSecondary` are the primary text colors
- `--font-sans` / `--font-serif` CSS variables wire the two Google Fonts into Tailwind's `font-sans` / `font-serif` utilities
- The `noise-overlay` class (defined in `globals.css`) adds a subtle texture overlay; it appears on the main page wrapper and project image thumbnails

### Animation

Framer Motion is used throughout for entrance animations. The pattern is `initial={{ opacity: 0, y: 20 }}` + `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`. Hero sections additionally use `useScroll` + `useTransform` for parallax on scroll.
