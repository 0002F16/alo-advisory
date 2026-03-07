# Website V1 page generation from content spec

When the user asks to build V1 pages from a content spec (e.g. `docs/content-spec-v1.md`) or from PDF-derived content:

## Stack and patterns

- **Framework:** Next.js 15 App Router, React 18, TypeScript, Tailwind.
- **Routes:** One page per route under `app/`, e.g. `app/saudi/page.tsx`, `app/about/page.tsx`.
- **Layout:** All pages use the root layout (`app/layout.tsx`) which includes `Header` and wraps `children` in `<main className="container px-6 md:px-8 lg:px-10">`. Do not duplicate full-page wrappers; use the same structure as `app/page.tsx` and `app/contact/page.tsx`.

## Components to reuse (do not recreate)

- `@/components/layout/PageSection` — sections with optional `id`, `aria-label`, `borderedTop`
- `@/components/common/SectionHeader` — `title`, optional `eyebrow`
- `@/components/common/Reveal` — wrap blocks for scroll reveal; optional `delay`
- `@/components/common/Button`, `@/components/common/ButtonLink` — primary/secondary/link variants
- `@/components/hero/HeroBackground` — pass `images={[url1, url2]}` for hero
- `@/components/layout/SiteFooter` — include at the end of each full page where the home/contact pages do
- `next/image` for images with proper `sizes` and `alt`

## Design tokens (Tailwind / globals.css)

- Background: `bg-alo-bg`
- Text: `text-alo-text`, `text-alo-muted`
- Accent: `alo-gold` (borders, links, CTAs)
- Panels: `bg-alo-panel`, `border-white/5`, `panel` class for card style
- Typography: `font-serif` for headings (already applied in base styles); keep existing `h1`/`h2`/`h3` and `p` usage

## Per-page requirements

1. **Metadata:** Export `metadata` with `title` and `description` for each page.
2. **Structure:** Prefer the same section patterns as the home page: hero (optional), then a sequence of `PageSection` blocks with `SectionHeader` and content. End with a final CTA section and `SiteFooter` where appropriate.
3. **Copy:** Take headlines, body, list items and CTA labels from the content spec only; do not invent copy.
4. **Links:** Use `ButtonLink` for internal links (e.g. `/contact`); use `Button` for buttons that don’t navigate (e.g. "Book a call" can link to `#contact` or `/contact` as per spec).
5. **Images:** Use placeholder URLs (e.g. existing Pexels URLs in the codebase) or a single hero image; no new image dependencies unless the user provides them.

## Workflow when user provides PDF or raw content

1. If the user provides a PDF or pasted content, first produce a **content spec** (following `docs/content-spec-template.md`) and a **plan** (table of pages and sections). Do not create page files until the user approves the plan.
2. After the user approves the plan, generate one `app/<route>/page.tsx` per planned page using the content spec and the components/patterns above.
3. Ensure the Header nav routes (`/saudi`, `/uae`, `/services`, `/talent`, `/about`, `/contact`) have corresponding pages so links work.

## V1 scope

- Focus on correct structure and copy from the spec.
- Reuse existing components and styles; avoid new animations or one-off layouts unless requested.
- Placeholder or existing stock images are acceptable; the user will refine later.
