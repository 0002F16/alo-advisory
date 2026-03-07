import Image from "next/image";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button, ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";

const HERO_HEADLINE =
  "Cross-Border Expansion Into the GCC — Designed Before Execution.";
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

// Stock images: Pexels (free to use). Replace with your own when ready.
const WHAT_WE_DO_PILLARS: Array<{
  title: string;
  subheading: string;
  image?: string;
}> = [
  {
    title: "Readiness Diagnostic",
    subheading:
      "Assess governance, compliance and operational readiness before you commit to a licence pathway.",
    image:
      "https://images.pexels.com/photos/5668886/pexels-photo-5668886.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Expansion Architecture",
    subheading:
      "Design licensing structure, entity setup and sequencing so execution follows a clear blueprint.",
    image:
      "https://images.pexels.com/photos/4427630/pexels-photo-4427630.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Specialist Coordination",
    subheading:
      "Align legal, tax and local counsel around a single expansion plan to avoid overlap and gaps.",
    image:
      "https://images.pexels.com/photos/4491490/pexels-photo-4491490.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Execution Oversight",
    subheading:
      "Oversee delivery against the agreed architecture so outcomes match the design.",
    image:
      "https://images.pexels.com/photos/10031281/pexels-photo-10031281.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

function WhatWeDoSection() {
  return (
    <PageSection id="what-we-do" aria-label="What we do">
      <Reveal>
        <SectionHeader title="What We Do" />
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-[repeat(4,minmax(0,1fr))] md:gap-5 md:items-stretch">
        {WHAT_WE_DO_PILLARS.map((pillar, index) => (
          <Reveal
            key={pillar.title}
            delay={index * 80}
            className="min-h-0 flex flex-col"
          >
            <article className="panel overflow-hidden flex flex-col h-full transition-all duration-slow ease-linear hover:border-white/10 hover:border-l-alo-gold/40 group">
              <div className="relative aspect-[2/3] w-full shrink-0 overflow-hidden bg-alo-panel flex-none">
                {pillar.image ? (
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-slow ease-linear group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                ) : null}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-alo-bg/20 via-transparent to-alo-bg/40"
                  aria-hidden
                />
                {!pillar.image ? (
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-alo-gold/10"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1 min-h-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-alo-text">
                  {pillar.title}
                </h3>
                <div
                  className="h-px w-8 bg-alo-gold/80 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-alo-muted text-lg sm:text-xl leading-relaxed">
                  {pillar.subheading}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}

function CoverageSection() {
  return (
    <PageSection id="coverage" aria-label="GCC coverage" borderedTop>
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
                <div className="w-full max-w-xl mx-auto px-6 py-10 sm:px-10 sm:py-12 lg:px-16">
                  <p className="text-sm tracking-[0.26em] uppercase text-alo-muted mb-3">
                    Saudi Arabia
                  </p>
                  <h3 className="text-3xl sm:text-4xl md:text-[2.5rem] font-serif text-alo-text mb-4">
                    Primary institutional focus — Riyadh
                  </h3>
                  <p className="text-lg sm:text-xl text-alo-muted max-w-lg">
                    Governance-led expansion architecture for firms seeking a
                    durable presence in the Kingdom. We design licensing,
                    governance and operating pathways that align with local
                    supervisory expectations before external counsel is briefed.
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
                <div className="w-full max-w-xl mx-auto px-6 py-10 sm:px-10 sm:py-12 lg:px-16">
                  <p className="text-sm tracking-[0.26em] uppercase text-alo-muted mb-3">
                    United Arab Emirates
                  </p>
                  <h3 className="text-3xl sm:text-4xl md:text-[2.5rem] font-serif text-alo-text mb-4">
                    Secondary focus — Dubai &amp; Abu Dhabi
                  </h3>
                  <p className="text-lg sm:text-xl text-alo-muted max-w-lg">
                    Structured financial centre entry design across DIFC and
                    ADGM. We map activities, controlled functions and governance
                    constructs to regulator expectations, creating a single
                    expansion blueprint across UAE hubs.
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

function HowWeWorkSection() {
  const steps = [
    "Strategic Discovery (Free)",
    "Readiness Diagnostic (Fixed Fee)",
    "Expansion Architecture (Fixed Fee)",
    "Oversight Retainer (Monthly)"
  ];

  return (
    <PageSection id="how-we-work" aria-label="How we work" borderedTop>
      <Reveal>
        <SectionHeader title="How We Work" />
      </Reveal>
      <div className="hidden md:block">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />
            <ol className="relative z-10 grid grid-cols-4 gap-8">
              {steps.map((label, index) => (
                <li key={label} className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-alo-panel border border-white/20 flex items-center justify-center text-sm tracking-[0.18em] uppercase text-alo-muted">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl text-alo-text">
                    {label}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="border-l border-white/10 pl-5 space-y-6">
          {steps.map((label, index) => (
            <div key={label} className="relative pl-1">
              <div className="absolute -left-5 top-1">
                <div className="w-7 h-7 bg-alo-panel border border-white/20 flex items-center justify-center text-xs tracking-[0.18em] uppercase text-alo-muted">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <p className="text-lg sm:text-xl text-alo-text">{label}</p>
            </div>
          ))}
        </div>
      </div>
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
      borderedTop
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
      borderedTop
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
            <ButtonLink
              href="#gcc-readiness"
              variant="secondaryLink"
              className="text-base"
            >
              Download GCC Readiness Checklist
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </PageSection>
  );
}

