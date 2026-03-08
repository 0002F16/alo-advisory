import type { Metadata } from "next";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { SiteFooter } from "@/components/layout/SiteFooter";

const OFFERINGS = [
  {
    id: "regulatory-pathway",
    title: "Regulatory pathway design",
    body: "Map activities to CMA and SAMA. Define licence pathway and submission sequence, documented and aligned with supervisory priorities.",
  },
  {
    id: "structure-governance",
    title: "Structure & governance",
    body: "Entity, board, and governance frameworks set before counsel. Operating model, delegated authorities, and compliance ownership locked.",
  },
  {
    id: "sequencing-roadmap",
    title: "Sequencing roadmap",
    body: "Phased plan: pre-application, parallel tracks, post-approval. Clear timelines and decision points. One plan for team and advisers.",
  },
];

const RISK_CONTROL_BODY =
  "Saudi entries often fail on misaligned mapping, governance gaps, and bad sequencing. We build architecture to avoid them—design-first, not reaction. Clear handoffs, decision rights, and checkpoints keep the expansion aligned from discovery through post-licence.";

export const metadata: Metadata = {
  title: "Saudi Expansion Architecture, ALO Advisory Group",
  description:
    "Governance-led expansion architecture for UK firms entering the Kingdom. Regulatory pathway design, structure, governance, sequencing and risk control, before legal spend begins.",
};

export default function SaudiPage() {
  return (
    <>
      {/* Hero: typographic split, no cycling images, distinct from landing */}
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
                  Saudi Expansion Architecture: Governance, Sequencing and Risk
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
                  are locked before legal spend begins, so execution follows a
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
                Primary institutional focus: Riyadh
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
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 md:items-stretch lg:gap-6">
            {OFFERINGS.map((section, index) => (
              <Reveal key={section.id} delay={index * 60} className="md:h-full">
                <article
                  id={section.id}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-alo-panel/60 p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out hover:border-alo-gold/30 hover:bg-alo-panel/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_0_1px_rgba(198,167,94,0.1)] md:h-full"
                >
                  <span
                    className="absolute top-6 right-6 text-[0.65rem] font-medium tracking-[0.2em] text-alo-gold/50 transition-colors duration-300 group-hover:text-alo-gold/80"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px w-12 bg-alo-gold/70 mb-5" aria-hidden />
                  <h3 className="text-xl sm:text-[1.35rem] font-serif text-alo-text mb-3 pr-12">
                    {section.title}
                  </h3>
                  <p className="text-alo-muted text-[0.95rem] leading-relaxed">
                    {section.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </PageSection>

        <PageSection
          id="risk-control"
          aria-label="Failure points and drift prevention"
          tighter
        >
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-white/5 bg-alo-panel/40 px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
              <div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-alo-gold/60 via-alo-gold/40 to-alo-gold/60"
                aria-hidden
              />
              <div className="pl-6 sm:pl-8">
                <h2 className="text-xl sm:text-2xl font-serif text-alo-text mb-5">
                  Failure points and drift prevention
                </h2>
                <div className="h-px w-12 bg-alo-gold/70 mb-6" aria-hidden />
                <p className="text-alo-muted text-[0.95rem] sm:text-base leading-relaxed max-w-2xl">
                  {RISK_CONTROL_BODY}
                </p>
              </div>
            </div>
          </Reveal>
        </PageSection>

        <PageSection
          id="contact"
          aria-label="Final call to action"
        >
          <Reveal>
            <div className="panel px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-2xl sm:text-[28px] font-serif">
                  Saudi expansion, designed before execution.
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
