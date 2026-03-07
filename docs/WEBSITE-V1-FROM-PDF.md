# Website V1 from PDF — Agentified Workflow

This doc describes how to go from a **PDF of page content** → **parsed content** → **plan** → **V1 of all pages**, and what best practices to follow.

---

## 1. High-level flow

```
PDF (page content)  →  Parse / paste  →  Content spec (per page)  →  Plan  →  Agent builds V1 pages
```

- **You provide:** A PDF (or Word/Notion export) with copy for each page.
- **Parse step:** Extract text (see options below).
- **Content spec:** One structured file per page (or one doc with all pages) so the agent knows headlines, body, CTAs, etc.
- **Plan:** A short checklist of pages and sections to build (you approve once).
- **Agent:** Generates V1 pages using existing components and design system; you iterate later.

---

## 2. How to get content from the PDF

### Option A — Paste (fastest for V1)

1. Open the PDF, select all (Cmd+A), copy.
2. Paste into a single Markdown file, e.g. `docs/content-from-pdf.md`.
3. Add simple headings for each page, e.g. `## Home`, `## Saudi`, `## About`.
4. Share that file with the agent and say: *“Use docs/content-from-pdf.md to create a content spec and then a plan for all pages.”*

### Option B — Script (repeatable)

- Use a small Node script with a PDF library to extract text.
- **Recommended lib:** `pdf-parse` (no native deps).
- Example (add to repo if you want):

```bash
npm install pdf-parse
```

```js
// scripts/extract-pdf-text.js
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = process.argv[2] || path.join(__dirname, '../content/site-content.pdf');
const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then((data) => {
  const outPath = path.join(__dirname, '../docs/content-from-pdf.md');
  fs.writeFileSync(outPath, `# Extracted from PDF\n\n${data.text}`, 'utf8');
  console.log(`Wrote ${data.numpages} pages to ${outPath}`);
});
```

- Run: `node scripts/extract-pdf-text.js path/to/your.pdf`
- Then use `docs/content-from-pdf.md` as in Option A.

### Option C — AI / Cursor

- Attach the PDF in Cursor and ask: *“Extract all text and structure it by page/section into a single Markdown file.”*
- Save the result as `docs/content-from-pdf.md` and proceed.

---

## 3. Content spec (so the agent builds consistently)

After you have raw text, the agent should turn it into a **content spec** — one place that defines, per page:

- **Page route** (e.g. `/`, `/saudi`, `/about`)
- **Page title & meta description**
- **Sections:** each with optional headline, subhead, body copy, list items, CTAs, image placeholders.

Use the template in **`docs/content-spec-template.md`** (and the example there). The agent should:

1. Parse your `content-from-pdf.md` (or pasted content).
2. Fill one content spec file (e.g. `docs/content-spec-v1.md`) with one block per page.
3. Show you the **plan** (list of pages + main sections) before writing code.

---

## 4. The plan (checklist before coding)

Before the agent creates any page, get a short plan you can approve. It should look like:

| Page   | Route     | Sections (V1)                    | Notes        |
|--------|-----------|-----------------------------------|--------------|
| Home   | `/`       | Hero, What we do, Coverage, CTA   | Already done |
| Saudi  | `/saudi`  | Hero, Focus areas, Process, CTA   | From PDF p.2 |
| UAE    | `/uae`    | Hero, DIFC/ADGM, Process, CTA     | From PDF p.3 |
| Services | `/services` | Overview, Offerings, CTA       | From PDF p.4 |
| Talent | `/talent` | Hero, Roles, How to apply, CTA    | From PDF p.5 |
| About  | `/about`  | Story, Team, Values, CTA          | From PDF p.6 |
| Contact| `/contact`| Form + sidebar                   | Already done |

- **Best practice:** Agree on this table (and any “skip for V1” items) before the agent generates files. One round of plan feedback saves a lot of rework.

---

## 5. Best practices for agentified V1

1. **Content-first**  
   Lock the content spec (from PDF) before building. Changing copy in one place and regenerating is easier than editing inside components.

2. **Reuse, don’t reinvent**  
   The agent should use your existing building blocks:
   - `PageSection`, `SectionHeader`, `Reveal`, `Button`, `ButtonLink`
   - `HeroBackground` (or a simple hero with one image)
   - `SiteFooter`, `Header` (nav is already there)
   - Design tokens: `alo-bg`, `alo-text`, `alo-gold`, `alo-muted`, `alo-panel`

3. **One page per route**  
   One `app/<route>/page.tsx` per row in the plan. Shared layout and nav stay as they are.

4. **V1 = structure + copy, not polish**  
   - Real copy from the PDF in the right sections.
   - Placeholder images (or existing Pexels-style URLs) are fine.
   - No complex animations or custom layouts unless you explicitly ask. You can refine later.

5. **Header nav**  
   Your `Header` already links to `/saudi`, `/uae`, `/services`, `/talent`, `/about`, `/contact`. The plan should create those routes so links work.

6. **Metadata**  
   Each page should export `metadata` (title, description) for SEO, following the pattern in `app/layout.tsx` and `app/page.tsx`.

7. **No backend for V1**  
   Contact form can stay client-only (as now). No CMS or API until you decide to add them.

---

## 6. Step-by-step: what to do

1. **You:** Add the PDF (or paste/export) and get raw text into `docs/content-from-pdf.md` (or attach the PDF in chat).
2. **You (to agent):**  
   *“Parse docs/content-from-pdf.md (or this PDF) and create a content spec for all website pages. Then give me a one-table plan of pages and sections for V1. Don’t build any pages until I approve the plan.”*
3. **Agent:** Produces `docs/content-spec-v1.md` and the plan table (as above).
4. **You:** Approve or edit the plan (e.g. “drop Talent for V1”, “merge Saudi and UAE into one page”).
5. **You (to agent):**  
   *“Build V1 for all pages in the plan using the content spec. Use existing components and design system. Home and Contact already exist; create the rest.”*
6. **Agent:** Creates `app/saudi/page.tsx`, `app/uae/page.tsx`, etc., and fills them from the content spec.
7. **You:** Run `npm run dev`, click through, then iterate on copy and layout later.

---

## 7. Where things live

| Item              | Location / action |
|-------------------|-------------------|
| Raw PDF text      | `docs/content-from-pdf.md` (paste or script) |
| Content spec      | `docs/content-spec-v1.md` (agent fills from PDF) |
| Plan table        | In chat or `docs/plan-v1.md` (optional) |
| Page components   | `app/<route>/page.tsx` |
| Shared components | `components/` (reuse only; add new ones only when needed) |
| Cursor rule       | `.cursor/rules/website-v1-from-content.md` (agent behaviour for V1 builds) |

---

## 8. Optional: PDF script and npm script

If you use the Node script:

- Add `scripts/extract-pdf-text.js` as in section 2.
- In `package.json`, add:  
  `"extract-pdf": "node scripts/extract-pdf-text.js"`  
- Then: `npm run extract-pdf -- path/to/your.pdf`

---

Once you have the PDF (or `content-from-pdf.md`) and the plan approved, you can say: *“Build all V1 pages from docs/content-spec-v1.md”* and the agent will follow this workflow and the Cursor rule.
