# Content spec template (V1)

Use this structure for each page so the agent can generate `app/<route>/page.tsx` consistently. Fill from your PDF or paste; the agent can also parse raw text into this format.

---

## Page: [Page name]

- **Route:** `/[route]` (e.g. `/saudi`, `/about`)
- **Title:** [Browser title]
- **Description:** [Meta description, 1–2 sentences]

### Hero (optional)

- **Eyebrow:** [Small label above headline, e.g. "Saudi Arabia"]
- **Headline:** [Main H1]
- **Subtext:** [Paragraph under headline]
- **Primary CTA:** [Label and link, e.g. "Book a call" → `/contact`]
- **Secondary CTA:** [Optional, e.g. "Download checklist" → `#anchor`]
- **Background:** [Image URL or "reuse hero from home"]

### Section: [Section name]

- **Section id:** [For anchor links, e.g. `focus-areas`]
- **Eyebrow:** [Optional]
- **Headline:** [H2]
- **Body:** [Paragraph(s)]
- **List / items:** [Bullet list or array of items]
- **CTA:** [Optional button/link]

### Section: [Next section]

- (Same fields as above; repeat as needed.)

### Final CTA (optional)

- **Headline:** [Short line]
- **Body:** [One sentence]
- **Primary CTA:** [Label and link]
- **Secondary CTA:** [Optional]

---

## Example (Saudi page)

## Page: Saudi Arabia

- **Route:** `/saudi`
- **Title:** Saudi Arabia expansion — ALO Advisory Group
- **Description:** Governance-led expansion architecture for UK firms entering the Kingdom. Licensing, structure and sequencing designed before execution.

### Hero

- **Eyebrow:** Saudi Arabia
- **Headline:** Primary institutional focus — Riyadh.
- **Subtext:** We design licensing, governance and operating pathways that align with local supervisory expectations before external counsel is briefed.
- **Primary CTA:** Discuss Saudi expansion → `/contact`
- **Secondary CTA:** GCC Readiness Checklist → `#gcc-readiness`
- **Background:** [Pexels or placeholder]

### Section: Focus areas

- **Section id:** `focus-areas`
- **Headline:** Where we add value
- **Body:** Our work in the Kingdom centres on three areas.
- **List / items:**
  - CMA and SAMA licensing pathway design
  - Governance and control framework alignment
  - Sequencing and local counsel coordination
- **CTA:** Book a discovery call → `/contact`

### Section: How we work (Saudi)

- **Section id:** `how-we-work`
- **Headline:** Process
- **Body:** Same four-step approach as on the home page: Strategic Discovery, Readiness Diagnostic, Expansion Architecture, Oversight Retainer.
- **CTA:** See How we work → `/#how-we-work`

### Final CTA

- **Headline:** Ready to explore Saudi expansion?
- **Body:** We respond with structure, not generic sales email.
- **Primary CTA:** Share your outline → `/contact`

---

Copy the "Page: [Page name]" block for each route. The agent will read this file and generate one `app/<route>/page.tsx` per page using `PageSection`, `SectionHeader`, `Reveal`, `Button`/`ButtonLink`, and existing layout/footer.
