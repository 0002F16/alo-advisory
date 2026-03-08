import type { Metadata } from "next";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";

type EngagementPlan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  description: string;
  isFeatured?: boolean;
  badgeLabel?: string;
};

const ENGAGEMENT_PLANS: EngagementPlan[] = [
  {
    id: "strategic-discovery",
    name: "Strategic Discovery",
    tagline: "Free 30-minute session",
    price: "Free",
    description:
      "Clarify expansion objectives, regulatory landscape and next steps. No commitment.",
    badgeLabel: "Start here"
  },
  {
    id: "readiness-diagnostic",
    name: "Readiness Diagnostic",
    tagline: "Gap analysis & roadmap",
    price: "£3,000–£5,000",
    priceNote: "fixed fee",
    description:
      "Assess governance, compliance and operational readiness before committing to a licence pathway."
  },
  {
    id: "expansion-architecture",
    name: "Expansion Architecture",
    tagline: "Full blueprint design",
    price: "£15,000–£25,000",
    priceNote: "fixed fee",
    description:
      "Licensing structure, entity setup and sequencing so execution follows a single blueprint.",
    isFeatured: true,
    badgeLabel: "Ideal"
  },
  {
    id: "oversight-retainer",
    name: "Oversight Retainer",
    tagline: "Ongoing delivery oversight",
    price: "Custom",
    description:
      "1–2 coordination calls, action log, alignment review, regulator tracking and monthly executive update."
  }
];

const OVERSIGHT_INCLUDED = [
  "1–2 coordination calls per month",
  "Action log + sequencing control",
  "Alignment review (not legal advice)",
  "Regulator query tracking",
  "Risk register maintenance",
  "Monthly executive update",
  "Optional talent enablement support"
];

const NOT_INCLUDED = [
  "Legal drafting",
  "Tax advice",
  "Acting as MLRO / Compliance Officer",
  "Unlimited meetings",
  "Any regulated activity"
];

export const metadata: Metadata = {
  title: "Engagement Model & Services, ALO Advisory Group",
  description:
    "Strategic Discovery (free), Readiness Diagnostic, Expansion Architecture and Oversight Retainer. Clear pricing and scope for GCC expansion."
};

const SERVICES_HERO_IMAGES = [
  "https://images.pexels.com/photos/5668886/pexels-photo-5668886.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

export default function ServicesPage() {
  return (
    <>
      <header
        id="intro"
        aria-label="Engagement model hero"
        className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 pt-16 md:pt-24 pb-28 md:pb-36 min-h-[55vh] flex flex-col justify-center overflow-hidden"
      >
        <HeroBackground images={SERVICES_HERO_IMAGES} />
        <div
          className="absolute inset-0 bg-gradient-to-b from-alo-bg/85 via-alo-bg/75 to-alo-bg"
          aria-hidden
        />
        <div className="container relative z-10 px-6 md:px-8 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.28em] uppercase text-alo-gold/90 mb-5">
                Engagement Model
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-serif text-alo-text leading-[1.1] tracking-tight mb-6">
                Clear scope. Clear pricing.
              </h1>
              <div
                className="h-px w-14 bg-alo-gold/80 mb-8"
                aria-hidden="true"
              />
              <p className="text-lg sm:text-xl md:text-2xl text-alo-muted max-w-xl leading-relaxed mb-10">
                A simple four-step model: discovery, diagnostic, architecture,
                oversight. You know exactly what you&apos;re buying before we
                begin.
              </p>
              <ButtonLink href="/contact" variant="primary">
                Book a Discovery Call
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <a
          href="#engagement-model"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-alo-gold/70 hover:text-alo-gold transition-colors duration-slow focus:outline-none focus-visible:ring-2 focus-visible:ring-alo-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-alo-bg rounded-full"
          aria-label="Scroll to engagement model"
        >
          <span className="text-[0.6rem] tracking-[0.22em] uppercase">
            View plans
          </span>
          <svg
            width="20"
            height="20"
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
        <PageSection
          id="engagement-model"
          aria-label="Engagement model"
          borderedTop
        >
          <Reveal>
            <SectionHeader
              eyebrow="Choose your starting point"
              title="Engagement model"
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ENGAGEMENT_PLANS.map((plan, index) => (
              <Reveal key={plan.id} delay={index * 80} className="h-full">
                <article
                  className={`panel flex h-full flex-col p-6 sm:p-7 transition-all duration-slow ease-linear hover:border-white/10 hover:border-l-alo-gold/50 ${
                    plan.isFeatured
                      ? "relative z-10 md:scale-[1.04] border-2 border-alo-gold/50 bg-alo-panel shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(198,167,94,0.25)] hover:border-alo-gold/60 hover:shadow-[0_28px_88px_rgba(0,0,0,0.75),0_0_0_1px_rgba(198,167,94,0.35)]"
                      : ""
                  }`}
                >
                  <div className="min-h-[1.75rem] mb-4 flex items-center">
                    {plan.badgeLabel ? (
                      <span
                        className={`text-[0.65rem] font-medium tracking-[0.2em] uppercase text-alo-gold ${
                          plan.isFeatured
                            ? "rounded-full bg-alo-gold/15 px-2.5 py-1"
                            : ""
                        }`}
                      >
                        {plan.badgeLabel}
                      </span>
                    ) : null}
                  </div>
                  <h3 className={`font-serif text-alo-text leading-tight tracking-tight ${plan.isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-alo-muted">{plan.tagline}</p>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className={`font-serif text-alo-gold tracking-tight ${plan.isFeatured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
                      {plan.price}
                    </span>
                    {plan.priceNote ? (
                      <span className="text-sm text-alo-muted">
                        {plan.priceNote}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-alo-muted text-sm sm:text-[0.95rem] leading-relaxed flex-1">
                    {plan.description}
                  </p>
                  <div
                    className="mt-6 pt-6 border-t border-white/5 flex-shrink-0"
                    aria-hidden
                  />
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                    className="mt-4 w-full sm:w-auto"
                  >
                    Book a Call
                  </ButtonLink>
                </article>
              </Reveal>
            ))}
          </div>
        </PageSection>

        <PageSection
          id="oversight-included"
          aria-label="What's included in Oversight Retainer"
          tighter
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <Reveal>
              <div className="panel overflow-hidden border-l-4 border-l-alo-gold/60 p-6 sm:p-8 transition-all duration-slow ease-linear hover:border-l-alo-gold/80 hover:shadow-[0_20px_64px_rgba(0,0,0,0.7)]">
                <p className="text-[0.65rem] tracking-[0.22em] uppercase text-alo-gold/90 mb-3">
                  In scope
                </p>
                <h3 className="text-xl sm:text-2xl font-serif text-alo-text leading-tight tracking-tight mb-1">
                  What&apos;s included
                </h3>
                <div className="h-px w-12 bg-alo-gold/50 mt-4 mb-6" aria-hidden />
                <ul className="space-y-4" role="list">
                  {OVERSIGHT_INCLUDED.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-alo-muted text-sm sm:text-[0.95rem] leading-relaxed"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-alo-gold/80"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div
                id="not-included"
                className="panel border border-white/5 p-6 sm:p-8 transition-all duration-slow ease-linear hover:border-white/10"
              >
                <p className="text-[0.65rem] tracking-[0.22em] uppercase text-alo-muted/80 mb-3">
                  Out of scope
                </p>
                <h3 className="text-xl sm:text-2xl font-serif text-alo-text leading-tight tracking-tight mb-1">
                  What&apos;s not included
                </h3>
                <div className="h-px w-12 bg-white/10 mt-4 mb-6" aria-hidden />
                <ul className="space-y-4" role="list">
                  {NOT_INCLUDED.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-alo-muted/90 text-sm sm:text-[0.95rem] leading-relaxed"
                    >
                      <span
                        className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center text-alo-muted/50 text-[10px] font-medium"
                        aria-hidden
                      >
                        ×
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </PageSection>

        <PageSection
          id="contact"
          aria-label="Final call to action"
          borderedTop
          tightBottom
        >
          <Reveal>
            <div className="panel px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-2xl sm:text-[28px] font-serif">
                  Ready to start with a discovery call?
                </h2>
                <p>
                  Free 30-minute Strategic Discovery, no commitment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <ButtonLink href="/contact" variant="primary">
                  Book a Discovery Call
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
