# Typography Hierarchy

Source of truth: home page ([app/page.tsx](../app/page.tsx)). Apply consistently across all pages except the contact page.

## Hero Section

| Element     | Classes                                                                             | Notes                      |
| ----------- | ----------------------------------------------------------------------------------- | -------------------------- |
| Eyebrow     | `text-sm tracking-[0.22em] uppercase text-alo-muted`                                | Small label above headline |
| H1          | `text-6xl sm:text-7xl md:text-[4.5rem] lg:text-[5rem] leading-tight tracking-tight` | Main headline              |
| Subtext     | `text-xl sm:text-2xl md:text-3xl text-alo-muted max-w-xl`                           | Supporting paragraph       |
| Scroll hint | `text-[0.6rem] tracking-[0.2em] uppercase`                                          | "Scroll" / "View plans"    |

## Section Header (SectionHeader component)

| Element | Classes                                                                                         |
| ------- | ----------------------------------------------------------------------------------------------- |
| Eyebrow | `text-sm tracking-[0.22em] uppercase text-alo-muted`                                            |
| H2      | `text-4xl sm:text-5xl md:text-[3rem] lg:text-[3.25rem] font-serif leading-tight tracking-tight` |

## CTA Section

| Element | Classes                                                                          |
| ------- | -------------------------------------------------------------------------------- |
| H2      | `text-3xl sm:text-4xl md:text-[2.25rem] font-serif leading-tight tracking-tight` |
| Body    | `text-lg sm:text-xl text-alo-muted`                                              |

## Body / Content Text

| Context                 | Classes                                                                     |
| ----------------------- | --------------------------------------------------------------------------- |
| Body text (primary)     | `text-base sm:text-lg leading-relaxed text-alo-muted`                       |
| Body text (secondary)   | `text-sm sm:text-base leading-relaxed text-alo-muted`                        |
| Coverage row H3         | `text-3xl sm:text-4xl md:text-[2.5rem] font-serif text-alo-text`            |
| Coverage row body       | `text-lg sm:text-xl text-alo-muted`                                         |
| Card title              | `text-xl sm:text-2xl font-serif text-alo-text leading-tight tracking-tight` |
| Card title (hero bento) | `text-2xl sm:text-3xl md:text-4xl font-serif text-alo-text`                |

## Base (globals.css)

- `p` default: `text-sm sm:text-base leading-relaxed text-alo-muted`
- CTA sections use explicit `text-lg sm:text-xl` (override base)
