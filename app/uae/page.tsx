import type { Metadata } from "next";
import Image from "next/image";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { SiteFooter } from "@/components/layout/SiteFooter";

const HERO_SKYLINE_IMAGE =
  "https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1920";

const SECTIONS = [
  {
    id: "licence-category",
    title: "Licence category alignment",
    body: "Map activities to DFSA/FSRA categories. Define licence type and scope, documented and aligned with regulator expectations.",
  },
  {
    id: "controlled-functions",
    title: "Controlled functions",
    body: "Identify and design controlled functions before application. Fit within governance and substance framework.",
  },
  {
    id: "substance-requirements",
    title: "Substance requirements",
    body: "Physical presence, governance, and booking model set before execution. Avoid last-minute remediation.",
  },
  {
    id: "execution-sequencing",
    title: "Execution sequencing",
    body: "Phased plan for DIFC and ADGM. Clear timelines and decision points. One plan for team and advisers.",
  },
];

export const metadata: Metadata = {
  title: "UAE Expansion Architecture, ALO Advisory Group",
  description:
    "Structured financial centre entry design for DIFC and ADGM. Licence category alignment, controlled functions and substance requirements, designed before execution."
};

export default function UaePage() {
  return (
    <>
      {/* Hero: typographic split, Saudi-style design */}
      <header
        className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 min-h-[88vh] flex flex-col justify-center overflow-hidden"
        aria-label="UAE expansion hero"
      >
        {/* Background: UAE skyline */}
        <Image
          src={HERO_SKYLINE_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Gold overlay */}
        <div
          className="absolute inset-0 bg-alo-gold/40"
          aria-hidden
        />
        {/* Gradient: transition into default bg */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-alo-bg/60 to-alo-bg"
          aria-hidden
        />

        <div className="container relative z-10 px-6 md:px-8 lg:px-10 pt-20 pb-24 md:pt-24 md:pb-32">
          <div>
            <div className="max-w-3xl">
              <Reveal>
                <p className="text-xs tracking-[0.28em] uppercase text-alo-gold/90 mb-5">
                  United Arab Emirates
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[3.6rem] leading-[1.12] tracking-tight font-serif text-alo-text mb-6">
                  UAE Expansion Architecture: Structured Financial Centre Entry
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
                  Structured financial centre entry design across DIFC and
                  ADGM. Activities, controlled functions and governance mapped
                  to regulator expectations, locked before execution.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <ButtonLink href="/contact" variant="primary">
                  Book UAE Discovery Call
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      <main>
        <PageSection id="what-we-deliver" aria-label="What we deliver">
          <Reveal>
            <SectionHeader
              eyebrow="Our UAE offer"
              title="What we deliver"
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-6">
            {SECTIONS.map((section, index) => (
              <Reveal key={section.id} delay={index * 60}>
                <article
                  id={section.id}
                  className={`group relative overflow-hidden rounded-xl border border-white/5 bg-alo-panel/60 p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out hover:border-alo-gold/30 hover:bg-alo-panel/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_0_1px_rgba(198,167,94,0.1)] ${index === 3 ? "md:col-span-2" : ""}`}
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
          id="contact"
          aria-label="Final call to action"
          borderedTop
        >
          <Reveal>
            <div className="panel px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-2xl sm:text-[28px] font-serif">
                  UAE expansion, designed before execution.
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
