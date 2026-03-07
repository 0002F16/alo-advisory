# Best practices: getting agentic AI to build from the content spec

This doc is for **building the V1 pages** from `docs/content-spec-v1.md` using an AI agent (e.g. Cursor Agent). Follow these practices so the agent stays on-spec and you get consistent, reviewable output.

---

## 1. Single source of truth

- **Always point the agent at the spec file.**  
  Example: *“Build the Saudi page using **docs/content-spec-v1.md** — use only the copy and structure defined there.”*
- Do not re-paste long content into chat or say “use the PDF.” The agent should read `content-spec-v1.md` so route names, headlines, CTAs and section IDs match exactly.
- If you change copy or structure, **edit the content spec first**, then ask the agent to rebuild (or update) the relevant page.

---

## 2. State constraints every time

Agents can drift. At the start of a build request, restate:

- **Do not modify:** Home (`app/page.tsx`) and Contact (`app/contact/page.tsx`).
- **Build only:** The pages in the plan table (Saudi, UAE, Services, Talent, About).
- **Use only:** Existing components (`PageSection`, `SectionHeader`, `Reveal`, `Button`, `ButtonLink`, `HeroBackground`, `SiteFooter`, etc.) and the design system (e.g. `.cursor/rules/website-v1-from-content.md`).

Example prompt:

*“Using **docs/content-spec-v1.md**, build the **Saudi** page only. Do not change the existing landing or contact pages. Use only existing layout and UI components; no new components. Copy must match the spec exactly.”*

---

## 3. Chunk the work: one page first, then the rest

- **Pilot with one page.**  
  Ask the agent to build **one** page (e.g. Saudi) from the spec. Review it (copy, layout, links, metadata). If it’s right, you’ve validated the pattern; if not, fix the prompt or the spec before scaling.
- **Then scale.**  
  Once the first page is approved: *“Build the remaining V1 pages (UAE, Services, Talent, About) from docs/content-spec-v1.md, same pattern as Saudi. Do not modify Home or Contact.”*
- **Optional:** You can ask for “all five new pages in one go” if you’re confident in the spec and the rule; one-page-first is safer and easier to debug.

---

## 4. Prompt patterns that work

Use clear, repeatable prompts. Examples:

| Goal | Example prompt |
|------|----------------|
| Build one page | *“Build the Saudi page from **docs/content-spec-v1.md**. Use existing components and the project’s design system. Do not modify Home or Contact.”* |
| Build all new pages | *“Build all new V1 pages (Saudi, UAE, Services, Talent, About) from **docs/content-spec-v1.md**. Follow the structure and copy in the spec. Use only existing components. Do not modify the landing or contact pages.”* |
| Fix one page | *“Update **app/saudi/page.tsx** so the copy and sections match **docs/content-spec-v1.md** exactly. Do not change any other files.”* |
| Align with rule | *“When building pages, follow **.cursor/rules/website-v1-from-content.md** and take all copy from **docs/content-spec-v1.md**.”* |

Always **name the spec file** and, when relevant, the **Cursor rule** so the agent loads the right context.

---

## 5. Copy: spec is law

- **No invented copy.**  
  Headlines, body text, list items and CTA labels must come from the content spec. If something is missing in the spec, add it there first, then ask for a rebuild.
- **Exact wording.**  
  Prefer “copy must match the spec word-for-word” in your prompt if you want no paraphrasing.
- **CTAs and links.**  
  The spec defines primary/secondary CTAs and targets (e.g. `/contact`, `#gcc-readiness`). Ask the agent to use those exactly so behaviour is consistent.

---

## 6. Validate after each run

- **Run the app:** `npm run dev` and open each new route.
- **Checklist per page:**  
  - Route and metadata (title, description) match the spec.  
  - All sections from the spec are present and in order.  
  - Copy matches the spec (no extra or missing lines).  
  - CTAs point to the right URLs/anchors.  
  - No new one-off components; only existing building blocks.
- **Nav:** Confirm Header links (Saudi, UAE, Services, Talent, About, Contact) work and don’t 404.

---

## 7. When the agent drifts

- **Invents copy or sections:**  
  *“Remove any copy or sections not in **docs/content-spec-v1.md**. Use only the content spec for this page.”*
- **Adds new components:**  
  *“Do not create new components. Use only **PageSection**, **SectionHeader**, **Reveal**, **Button**, **ButtonLink**, **SiteFooter** (and existing hero/layout) as in the Cursor rule.”*
- **Changes Home or Contact:**  
  *“Revert any changes to **app/page.tsx** and **app/contact/page.tsx**. They are out of scope.”*
- **Wrong route or file:**  
  *“The Saudi page must live in **app/saudi/page.tsx** and use the Saudi section of **docs/content-spec-v1.md**.”*

Point the agent back to the **spec file** and the **rule file**; short, direct prompts work best.

---

## 8. Order of operations (this project)

For this repo you don’t need a special build order:

1. **Content spec** — Done: `docs/content-spec-v1.md`.
2. **Plan** — Done: table at the top of the spec; only new pages are in scope.
3. **Build** — One page (e.g. Saudi) as pilot, then the rest (UAE, Services, Talent, About).
4. **Review** — Click through, compare to spec, fix with targeted prompts.

No new shared components are required; the agent only adds new **page** files under `app/`.

---

## 9. Summary

| Practice | Action |
|----------|--------|
| Single source of truth | Always reference `docs/content-spec-v1.md` in build prompts. |
| Constraints | Explicitly say “do not modify Home or Contact” and “use only existing components.” |
| Chunking | Build one page (e.g. Saudi) first; then the rest. |
| Prompts | Name the spec file and, if needed, the Cursor rule; use the prompt patterns above. |
| Copy | All copy from the spec; no invented or paraphrased content unless you ask. |
| Validation | Run `npm run dev`, check each route, compare to spec. |
| Correcting drift | Redirect to the spec and the rule; ask for targeted fixes. |

Using these practices with `docs/content-spec-v1.md` and `.cursor/rules/website-v1-from-content.md` keeps agentic AI output aligned with your plan and makes fixes quick and predictable.
