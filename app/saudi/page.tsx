import type { Metadata } from "next";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { SiteFooter } from "@/components/layout/SiteFooter";

const SECTIONS = [
  {
    id: "regulatory-pathway",
    title: "Regulatory pathway design",
    body: "We map your intended activities to CMA and SAMA expectations, then define a clear licence pathway and submission sequence. No guesswork—a documented route from current state to authorised presence in the Kingdom, aligned with local supervisory priorities and timelines.",
  },
  {
    id: "structure-governance",
    title: "Structure & governance",
    body: "Entity structure, board composition, and governance frameworks are designed to meet Saudi standards before you engage local counsel. We lock operating model, delegated authorities, and compliance ownership so execution follows a single blueprint and avoids costly rework.",
  },
  {
    id: "sequencing-roadmap",
    title: "Sequencing roadmap",
    body: "Expansion fails when steps are out of order. We produce a phased roadmap: what must be true before application, what runs in parallel, and what follows approval. Timelines, dependencies, and decision points are explicit so your team and advisers work to one plan.",
  },
  {
    id: "failure-points",
    title: "Common failure points",
    body: "We address the patterns that derail Saudi entries: misaligned activity mapping, governance gaps that surface in review, and sequencing that triggers delay or rejection. Our architecture is built to avoid these failure points by design, not by reaction.",
  },
  {
    id: "prevent-drift",
    title: "How we prevent drift",
    body: "Plans drift when ownership is unclear or when legal and execution run ahead of the agreed architecture. We define clear handoffs, decision rights, and checkpoints so the expansion stays aligned with the design—from discovery through to post-licence operation.",
  },
];

export const metadata: Metadata = {
  title: "Saudi Expansion Architecture — ALO Advisory Group",
  description:
    "Governance-led expansion architecture for UK firms entering the Kingdom. Regulatory pathway design, structure, governance, sequencing and risk control — before legal spend begins.",
};

export default function SaudiPage() {
  return (
    <>
      {/* Hero: typographic split, no cycling images — distinct from landing */}
      <header
        className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 min-h-[88vh] flex flex-col justify-center overflow-hidden"
        aria-label="Saudi expansion hero"
      >
        {/* Background: deep gradient + diagonal gold accent (no photo) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#060a0c] via-alo-bg to-[#0a1218]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23C6A75E' fill-opacity='1'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-alo-gold/50 to-transparent"
          aria-hidden
        />
        <div
          className="absolute top-1/2 right-0 w-[40vw] max-w-[480px] h-[1px] bg-alo-gold/30 origin-right rotate-[-12deg] hidden lg:block"
          aria-hidden
        />

        <div className="container relative z-10 px-6 md:px-8 lg:px-10 pt-20 pb-24 md:pt-24 md:pb-32">
          <div className="grid lg:grid-cols-[1fr_auto] lg:gap-16 xl:gap-24 items-end">
            <div className="max-w-3xl">
              <Reveal>
                <p className="text-xs tracking-[0.28em] uppercase text-alo-gold/90 mb-5">
                  Saudi Arabia
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[3.6rem] leading-[1.12] tracking-tight font-serif text-alo-text mb-6">
                  Saudi Expansion Architecture — Governance, Sequencing and Risk
                  Control
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <div
                  className="h-px w-20 bg-alo-gold mb-8"
                  aria-hidden="true"
                />
              </Reveal>
              <Reveal delay={200}>
                <p className="text-alo-muted text-base sm:text-lg max-w-xl leading-relaxed mb-10">
                  We design the regulatory and governance architecture for UK
                  firms entering the Kingdom. Pathway, structure, and sequence
                  are locked before legal spend begins—so execution follows a
                  single blueprint.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <ButtonLink href="/contact" variant="primary">
                  Book Saudi Discovery Call
                </ButtonLink>
              </Reveal>
            </div>
            <Reveal delay={240} className="hidden lg:block lg:pb-2">
              <p className="text-sm tracking-[0.2em] uppercase text-alo-muted/80 max-w-[220px] text-right">
                Primary institutional focus — Riyadh
              </p>
            </Reveal>
          </div>
        </div>
      </header>

      <main>
        <PageSection id="what-we-deliver" aria-label="What we deliver">
          <Reveal>
            <SectionHeader
              eyebrow="Our Saudi offer"
              title="What we deliver"
            />
          </Reveal>
          <div className="space-y-0">
            {SECTIONS.map((section, index) => (
              <Reveal key={section.id} delay={index * 60}>
                <article
                  id={section.id}
                  className="border-l-2 border-alo-gold/50 pl-6 sm:pl-8 py-8 sm:py-10 group hover:border-alo-gold/80 transition-colors duration-slow"
                >
                  <h3 className="text-xl sm:text-2xl font-serif text-alo-text mb-4">
                    {section.title}
                  </h3>
                  <p className="text-alo-muted max-w-2xl leading-relaxed">
                    {section.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={320}>
            <div className="mt-12">
              <ButtonLink href="/contact" variant="primary">
                Book Saudi Discovery Call
              </ButtonLink>
            </div>
          </Reveal>
        </PageSection>

        <PageSection
          id="contact"
          aria-label="Final call to action"
          borderedTop
        >
          <Reveal>
            <div className="panel px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-2xl sm:text-[28px] font-serif">
                  Saudi expansion — designed before execution.
                </h2>
                <p>
                  We respond with structure, not generic sales email.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <ButtonLink href="/contact" variant="primary">
                  Book Saudi Discovery Call
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </PageSection>
      </main>
      <SiteFooter />
    </>
  );
}
