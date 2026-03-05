import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button, ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";

const HERO_HEADLINE =
  "Cross-Border Expansion Into the GCC — Designed Before Execution.";
const HERO_SUBTEXT =
  "We design regulatory expansion architecture for UK firms entering key GCC jurisdictions.\nLicensing pathway, structure, governance and sequencing — locked before legal spend begins.";

export default function Page() {
  return (
    <>
      <header className="relative w-screen left-1/2 -translate-x-1/2 pt-16 md:pt-24 pb-24 md:pb-32 min-h-[70vh] flex flex-col justify-center">
        {/* Full-bleed background: hero image + overlay for text contrast */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero-bg.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-alo-bg/70" aria-hidden />
        <div className="container relative z-10 px-6 md:px-8 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.22em] uppercase text-alo-muted mb-4">
                ALO Advisory Group
              </p>
              <h1 className="mb-6 whitespace-pre-line">{HERO_HEADLINE}</h1>
              <div
                className="h-px w-16 bg-alo-gold mb-8"
                aria-hidden="true"
              />
              <p className="whitespace-pre-line max-w-xl">
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
    </>
  );
}

function WhatWeDoSection() {
  const pillars = [
    {
      title: "Readiness Diagnostic",
      detail:
        "Readiness Diagnostic"
    },
    {
      title: "Expansion Architecture",
      detail:
        "Expansion Architecture"
    },
    {
      title: "Specialist Coordination",
      detail:
        "Specialist Coordination"
    },
    {
      title: "Execution Oversight",
      detail:
        "Execution Oversight"
    }
  ];

  return (
    <PageSection id="what-we-do" aria-label="What we do">
      <Reveal>
        <SectionHeader title="What We Do" />
      </Reveal>
      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 80}>
            <article className="panel p-6 sm:p-7 flex flex-col gap-3">
              <h3 className="text-lg sm:text-xl font-serif text-alo-text">
                {pillar.title}
              </h3>
              <div className="h-px w-10 bg-white/10" aria-hidden="true" />
              <p className="text-alo-muted text-sm sm:text-[0.95rem]">
                {pillar.detail}
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
    <PageSection id="coverage" aria-label="GCC coverage" borderedTop>
      <Reveal>
        <SectionHeader title="Coverage" />
      </Reveal>
      <div className="panel p-6 sm:p-7">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:divide-x md:divide-white/10">
          <div className="space-y-3 pr-0 md:pr-8">
            <h3 className="text-lg sm:text-xl font-serif text-alo-text">
              Saudi Arabia (Primary Focus)
            </h3>
            <p>Governance-led institutional expansion architecture.</p>
          </div>
          <div className="space-y-3 pt-6 md:pt-0 md:pl-8">
            <h3 className="text-lg sm:text-xl font-serif text-alo-text">
              United Arab Emirates (Secondary Focus)
            </h3>
            <p>Structured financial centre entry design.</p>
          </div>
        </div>
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
                    <div className="w-8 h-8 bg-alo-panel border border-white/20 flex items-center justify-center text-xs tracking-[0.18em] uppercase text-alo-muted">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <p className="text-sm sm:text-[0.95rem] text-alo-text">
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
                <div className="w-7 h-7 bg-alo-panel border border-white/20 flex items-center justify-center text-[0.65rem] tracking-[0.18em] uppercase text-alo-muted">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <p className="text-sm text-alo-text">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

function EngagementsSection() {
  const cases = [
    {
      title: "Case Study 1 – UK Wealth Advisory → Saudi",
      items: [
        "Designed licence mapping assumptions",
        "Governance alignment",
        "Sequencing roadmap",
        "Counsel brief pack",
        "Outcome: Blueprint approved before legal submission"
      ]
    },
    {
      title: "Case Study 2 – UK Fintech → UAE",
      items: [
        "Activity mapping to DFSA categories",
        "Controlled function design",
        "Structured engagement plan",
        "Outcome: Clear regulator pathway defined pre-legal"
      ]
    },
    {
      title: "Case Study 3 – Cross-Border Governance Uplift",
      items: [
        "Operating model design",
        "Compliance structure",
        "Risk register",
        "Outcome: Internal readiness improved before submission"
      ]
    }
  ];

  return (
    <PageSection
      id="engagements"
      aria-label="Representative engagements"
      borderedTop
    >
      <Reveal>
        <SectionHeader
          eyebrow="Representative and anonymised engagements."
          title="Representative Engagements"
        />
      </Reveal>
      <div className="space-y-6">
        {cases.map((caseStudy, index) => (
          <Reveal key={caseStudy.title} delay={index * 80}>
            <article className="panel p-6 sm:p-7">
              <h3 className="text-lg sm:text-xl font-serif text-alo-text mb-4">
                {caseStudy.title}
              </h3>
              <ul className="space-y-2 text-sm sm:text-[0.95rem] text-alo-muted">
                {caseStudy.items.map((item) => {
                  const isOutcome = item.startsWith("Outcome:");
                  if (isOutcome) {
                    const [, rest] = item.split("Outcome:");
                    return (
                      <li key={item}>
                        <span className="font-medium text-alo-text">
                          Outcome:
                        </span>
                        <span>{rest}</span>
                      </li>
                    );
                  }
                  return <li key={item}>• {item}</li>;
                })}
              </ul>
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
            <h2 className="text-2xl sm:text-[28px] font-serif">
              Cross-border expansion, designed before execution.
            </h2>
            <p>
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
              className="text-sm"
            >
              Download GCC Readiness Checklist
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </PageSection>
  );
}

