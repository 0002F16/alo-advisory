import type { Metadata } from "next";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";

const HERO_IMAGES = ["/hero-bg.jpg", "/hero-bg-2.jpg", "/hero-bg-3.jpg"];

const WHAT_WE_DELIVER_ITEMS = [
  "Licence category alignment",
  "Controlled functions",
  "Substance requirements",
  "Execution sequencing"
];

export const metadata: Metadata = {
  title: "UAE Expansion Architecture — ALO Advisory Group",
  description:
    "Structured financial centre entry design for DIFC and ADGM. Licence category alignment, controlled functions and substance requirements — designed before execution."
};

export default function UaePage() {
  return (
    <>
      <header className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 pt-16 md:pt-24 pb-24 md:pb-32 min-h-[70vh] flex flex-col justify-center overflow-hidden">
        <HeroBackground images={HERO_IMAGES} />
        <div className="absolute inset-0 bg-alo-bg/70" aria-hidden />
        <div className="container relative z-10 px-6 md:px-8 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.22em] uppercase text-alo-muted mb-4">
                United Arab Emirates
              </p>
              <h1 className="mb-6">
                UAE Expansion Architecture — Structured Financial Centre Entry
              </h1>
              <div
                className="h-px w-16 bg-alo-gold mb-8"
                aria-hidden="true"
              />
              <p className="max-w-xl">
                Structured financial centre entry design across DIFC and ADGM.
                We map activities, controlled functions and governance
                constructs to regulator expectations.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
                <ButtonLink href="/contact" variant="primary">
                  Book UAE Discovery Call
                </ButtonLink>
                <ButtonLink href="/#gcc-readiness" variant="secondaryLink">
                  Download GCC Readiness Checklist
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <main>
        <PageSection
          id="what-we-deliver"
          aria-label="What we deliver"
          borderedTop
        >
          <Reveal>
            <SectionHeader title="What we deliver" />
          </Reveal>
          <p className="text-alo-muted mb-8 max-w-xl">
            Our UAE offer centres on four areas.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {WHAT_WE_DELIVER_ITEMS.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <div className="panel p-5 sm:p-6 border-l-4 border-alo-gold/50">
                  <p className="text-alo-text">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/contact" variant="primary">
              Book UAE Discovery Call
            </ButtonLink>
          </div>
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
                  UAE expansion — designed before execution.
                </h2>
                <p>
                  We respond with structure, not generic sales email.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <ButtonLink href="/contact" variant="primary">
                  Book UAE Discovery Call
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
