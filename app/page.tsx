import Image from "next/image";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button, ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";

const HERO_HEADLINE =
  "Cross-Border Expansion Into the GCC. Designed Before Execution.";
const HERO_SUBTEXT =
  "We design regulatory expansion architecture for UK firms entering key GCC jurisdictions.";

const HERO_IMAGES = ["/hero-bg.jpg", "/hero-bg-2.jpg", "/hero-bg-3.jpg"];

export default function Page() {
  return (
    <>
      <header className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 pt-16 md:pt-24 pb-24 md:pb-32 min-h-[70vh] flex flex-col justify-center overflow-hidden">
        {/* Full-bleed background: cycling images with slow zoom + overlay */}
        <HeroBackground images={HERO_IMAGES} />
        <div className="absolute inset-0 bg-alo-bg/70" aria-hidden />
        <div className="container relative z-10 px-6 md:px-8 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm tracking-[0.22em] uppercase text-alo-muted mb-4">
                ALO Advisory Group
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-[4.5rem] lg:text-[5rem] mb-6 whitespace-pre-line leading-tight tracking-tight">
                {HERO_HEADLINE}
              </h1>
              <div
                className="h-px w-16 bg-alo-gold mb-8"
                aria-hidden="true"
              />
              <p className="text-xl sm:text-2xl md:text-3xl whitespace-pre-line max-w-xl text-alo-muted">
                {HERO_SUBTEXT}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Button type="button">
                  Book a Discovery Call
                </Button>
                <ButtonLink href="#gcc-readiness" variant="secondaryLink">
                  Download GCC Readiness Checklist
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
        <a
          href="#what-we-do"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-alo-gold/80 hover:text-alo-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-alo-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-alo-bg rounded-full"
          aria-label="Scroll to content"
        >
          <span className="text-[0.6rem] tracking-[0.2em] uppercase">
            Scroll
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
            aria-hidden
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </header>

      <main>
        <WhatWeDoSection />
        <CoverageSection />
        <HowWeWorkSection />
        <EngagementsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

// Bento: hero = Expansion Architecture (priority); supporting pillars = typography-led.
const WHAT_WE_DO_HERO = {
  title: "Expansion Architecture",
  subheading:
    "We design licensing structure, entity setup and sequencing so execution follows a single blueprint. No guesswork, no overlap. The plan is locked before legal spend begins.",
  image:
    "https://images.pexels.com/photos/4427630/pexels-photo-4427630.jpeg?auto=compress&cs=tinysrgb&w=800"
};

const WHAT_WE_DO_SUPPORTING: Array<{ title: string; subheading: string }> = [
  {
    title: "Readiness Diagnostic",
    subheading:
      "Assess governance, compliance and operational readiness before you commit to a licence pathway."
  },
  {
    title: "Specialist Coordination",
    subheading:
      "Align legal, tax and local counsel around one expansion plan to avoid overlap and gaps."
  },
  {
    title: "Execution Oversight",
    subheading:
      "Oversee delivery against the agreed architecture so outcomes match the design."
  }
];

function WhatWeDoSection() {
  return (
    <PageSection id="what-we-do" aria-label="What we do" tight>
      <Reveal>
        <SectionHeader title="What We Do" />
      </Reveal>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-3 md:gap-5 md:auto-rows-fr">
        {/* Hero: Expansion Architecture — spans full left column */}
        <Reveal className="md:row-span-3 min-h-[320px] md:min-h-0">
          <article className="panel overflow-hidden flex flex-col h-full min-h-[320px] md:min-h-0 transition-all duration-slow ease-linear hover:border-white/10 hover:border-l-alo-gold/50 group">
            <div className="relative flex-1 min-h-[200px] md:min-h-[260px] overflow-hidden bg-alo-panel">
              <Image
                src={WHAT_WE_DO_HERO.image}
                alt=""
                fill
                className="object-cover transition-transform duration-slow ease-linear group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-alo-bg/80 via-alo-bg/20 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-alo-text leading-tight tracking-tight max-w-md">
                  {WHAT_WE_DO_HERO.title}
                </h3>
                <div
                  className="mt-3 h-px w-12 bg-alo-gold shrink-0"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 p-5 sm:p-6 md:p-6 flex-shrink-0 border-t border-white/5">
              <p className="text-alo-muted text-base sm:text-lg leading-relaxed">
                {WHAT_WE_DO_HERO.subheading}
              </p>
            </div>
          </article>
        </Reveal>
        {/* Supporting pillars: text-led bento cells */}
        {WHAT_WE_DO_SUPPORTING.map((pillar, index) => (
          <Reveal key={pillar.title} delay={(index + 1) * 60}>
            <article className="panel flex flex-col justify-center p-5 sm:p-6 transition-all duration-slow ease-linear hover:border-white/10 hover:border-l-alo-gold/30 border border-white/5">
              <h3 className="text-lg sm:text-xl font-serif text-alo-text leading-tight tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-2 text-alo-muted text-sm sm:text-base leading-relaxed">
                {pillar.subheading}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}

function CoverageSection() {
  return (
    <PageSection id="coverage" aria-label="GCC coverage" tight>
      <div className="mt-10 space-y-0">
        {/* Saudi Arabia row: full-width, image left / content right */}
        <Reveal>
          <div className="relative w-screen left-1/2 -translate-x-1/2">
            <article className="grid min-h-[340px] lg:min-h-[440px] md:grid-cols-2">
              <div className="relative h-80 md:h-auto overflow-hidden bg-alo-panel">
                <Image
                  src="https://images.pexels.com/photos/167404/pexels-photo-167404.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Riyadh financial district skyline at dusk"
                  fill
                  className="object-cover scale-105 md:scale-100 md:hover:scale-[1.03] transition-transform duration-slow ease-linear"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/25 to-transparent"
                  aria-hidden
                />
              </div>
              <div className="flex items-center bg-[#071a1c] border-t border-b border-white/5 md:border-y-0 md:border-l md:border-white/10">
                <div className="w-full max-w-xl mx-auto px-8 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
                  <p className="text-sm tracking-[0.26em] uppercase text-alo-muted mb-3">
                    Saudi Arabia
                  </p>
                  <h3 className="text-3xl sm:text-4xl md:text-[2.5rem] font-serif text-alo-text mb-4">
                    Saudi expansion, designed for Riyadh
                  </h3>
                  <p className="text-lg sm:text-xl text-alo-muted max-w-lg">
                    Governance-led expansion for firms building presence in the
                    Kingdom. We design licensing and operating pathways aligned
                    with supervisory expectations, before you brief external
                    counsel.
                  </p>
                  <div className="mt-6">
                    <ButtonLink
                      href="#contact"
                    variant="primary"
                    className="text-sm sm:text-base"
                  >
                    Discuss Saudi expansion
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Reveal>

        {/* UAE row: full-width, content left / image right */}
        <Reveal delay={80}>
          <div className="relative w-screen left-1/2 -translate-x-1/2">
            <article className="grid min-h-[340px] lg:min-h-[440px] md:grid-cols-2">
              <div className="flex items-center bg-[#071a1c] border-t border-b border-white/5 md:border-y-0 md:border-r md:border-white/10">
                <div className="w-full max-w-xl mx-auto px-8 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
                  <p className="text-sm tracking-[0.26em] uppercase text-alo-muted mb-3">
                    United Arab Emirates
                  </p>
                  <h3 className="text-3xl sm:text-4xl md:text-[2.5rem] font-serif text-alo-text mb-4">
                    One blueprint for Dubai &amp; Abu Dhabi
                  </h3>
                  <p className="text-lg sm:text-xl text-alo-muted max-w-lg">
                    Entry design across DIFC and ADGM. We map activities,
                    controlled functions and governance to regulator expectations
                    in a single blueprint for UAE hubs.
                  </p>
                  <div className="mt-6">
                    <ButtonLink
                      href="#contact"
                    variant="primary"
                    className="text-sm sm:text-base"
                  >
                    Explore UAE options
                    </ButtonLink>
                  </div>
                </div>
              </div>
              <div className="relative h-80 md:h-auto overflow-hidden bg-alo-panel">
                <Image
                  src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Dubai skyline with financial district towers"
                  fill
                  className="object-cover scale-105 md:scale-100 md:hover:scale-[1.03] transition-transform duration-slow ease-linear"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tl from-black/60 via-black/25 to-transparent"
                  aria-hidden
                />
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}

const HOW_WE_WORK_PHASES = [
  {
    phase: "Discovery",
    value:
      "We align on your ambitions, constraints and timeline so every next step is built on clarity."
  },
  {
    phase: "Readiness",
    value:
      "We assess governance, compliance and operations so you know where you stand before committing to a pathway."
  },
  {
    phase: "Architecture",
    value:
      "We design licensing, structure and sequencing so execution follows a single blueprint."
  },
  {
    phase: "Oversight",
    value:
      "We stay aligned with delivery so outcomes match the design."
  }
];

function HowWeWorkSection() {
  return (
    <PageSection id="how-we-work" aria-label="How we work" tight>
      <Reveal>
        <SectionHeader
          eyebrow="A clear sequence, tailored to your situation."
          title="How We Work"
        />
      </Reveal>
      <ol className="relative grid grid-cols-1 gap-0">
        {/* Vertical sequence line */}
        <div
          className="absolute left-[1.125rem] top-0 bottom-0 w-px bg-gradient-to-b from-alo-gold/40 via-alo-gold/20 to-transparent sm:left-8"
          aria-hidden
        />
        {HOW_WE_WORK_PHASES.map((item, index) => (
          <Reveal key={item.phase} delay={index * 80}>
            <li className="relative flex gap-6 sm:gap-8 py-8 sm:py-10 first:pt-0 last:pb-0">
              {/* Step node on the line */}
              <div
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-alo-gold/60 bg-alo-bg text-[0.7rem] font-medium tracking-wider text-alo-gold sm:h-10 sm:w-10"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2 pt-0.5">
                <h3 className="text-xl sm:text-2xl font-serif text-alo-text leading-tight tracking-tight">
                  {item.phase}
                </h3>
                <p className="text-alo-muted text-base sm:text-lg leading-relaxed max-w-xl">
                  {item.value}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </PageSection>
  );
}

const REPRESENTATIVE_CASES: Array<{
  title: string;
  image: string;
  subheadings: string[];
}> = [
  {
    title: "UK Wealth Advisory → Saudi",
    image:
      "https://images.pexels.com/photos/5668886/pexels-photo-5668886.jpeg?auto=compress&cs=tinysrgb&w=600",
    subheadings: [
      "Designed licence mapping assumptions",
      "Governance alignment",
      "Sequencing roadmap",
      "Counsel brief pack",
      "Outcome: Blueprint approved before legal submission"
    ]
  },
  {
    title: "UK Fintech → UAE",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    subheadings: [
      "Activity mapping to DFSA categories",
      "Controlled function design",
      "Structured engagement plan",
      "Outcome: Clear regulator pathway defined pre-legal"
    ]
  },
  {
    title: "Cross-Border Governance Uplift",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    subheadings: [
      "Operating model design",
      "Compliance structure",
      "Risk register",
      "Outcome: Internal readiness improved before submission"
    ]
  }
];

function EngagementsSection() {
  return (
    <PageSection
      id="engagements"
      aria-label="Representative engagements"
      tight
    >
      <Reveal>
        <SectionHeader
          eyebrow="Representative and anonymised engagements."
          title="Case Studies"
        />
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8">
        {REPRESENTATIVE_CASES.map((caseStudy, index) => (
          <Reveal key={caseStudy.title} delay={index * 80}>
            <article className="group panel flex flex-col overflow-hidden transition-all duration-slow ease-linear hover:border-white/10 hover:border-t-alo-gold/40">
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-alo-panel">
                <Image
                  src={caseStudy.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-slow ease-linear group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-alo-bg/70 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                  <span className="text-[0.65rem] tracking-[0.22em] uppercase text-alo-gold/90 font-medium">
                    Case Study {index + 1}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 sm:p-6 flex-1 min-h-0">
                <h3 className="text-xl sm:text-2xl font-serif text-alo-text leading-tight tracking-tight">
                  {caseStudy.title}
                </h3>
                <div
                  className="h-px w-10 bg-alo-gold/80 shrink-0"
                  aria-hidden="true"
                />
                <ul className="space-y-3 text-base sm:text-lg text-alo-muted">
                  {caseStudy.subheadings.map((item) => {
                    const isOutcome = item.startsWith("Outcome:");
                    if (isOutcome) {
                      const [, rest] = item.split("Outcome:");
                      return (
                        <li
                          key={item}
                          className="pt-2 border-t border-white/5 text-alo-text"
                        >
                          <span className="font-medium text-alo-gold/90">
                            Outcome
                          </span>
                          <span className="text-alo-muted">{rest}</span>
                        </li>
                      );
                    }
                    return (
                      <li
                        key={item}
                        className="font-medium text-alo-text/90 text-base"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}

function FinalCtaSection() {
  return (
    <PageSection
      id="contact"
      aria-label="Final call to action"
      tight
    >
      <Reveal>
        <div className="panel px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-[2.25rem] font-serif leading-tight tracking-tight">
              Cross-border expansion, designed before execution.
            </h2>
            <p className="text-lg sm:text-xl text-alo-muted">
              Licensing pathway, structure, governance and sequencing locked
              before legal spend begins.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Button type="button">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </Reveal>
    </PageSection>
  );
}

