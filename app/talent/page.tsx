import type { Metadata } from "next";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";

const HERO_IMAGES = ["/hero-bg.jpg", "/hero-bg-2.jpg", "/hero-bg-3.jpg"];

function IconRoleScope() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v18M3 12h18M8 8l8 8M16 8l-8 8" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function IconGovernance() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconOnboarding() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 19v-3h4v3M4 14v-3h4v3M4 9V6h4v3M14 19v-3h6v3M14 14v-3h6v3M14 9V6h6v3" />
    </svg>
  );
}

function IconCapability() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M12 12v4M10 14h4" />
    </svg>
  );
}

const TALENT_ICONS = [
  IconRoleScope,
  IconGovernance,
  IconOnboarding,
  IconCapability
] as const;

type TalentSection = {
  id: string;
  number: string;
  title: string;
  description: string;
  detail?: string[];
};

const TALENT_SECTIONS: TalentSection[] = [
  {
    id: "role-scoping",
    number: "01",
    title: "Role scoping",
    description:
      "Define the right roles and responsibilities before you hire. We align role design with your target operating model and regulatory expectations so every hire carries clear accountability.",
    detail: [
      "Role design aligned to licence and governance requirements",
      "Accountability mapping and handover boundaries",
      "Specifications that support rigorous hiring and onboarding"
    ]
  },
  {
    id: "compliance-governance-hiring",
    number: "02",
    title: "Compliance & governance hiring",
    description:
      "Identify and place governance, compliance and risk talent that meets regulator expectations. From MLRO and Compliance Officer to board-ready non-execs, we support hiring that strengthens your control environment.",
    detail: [
      "Regulator-aligned profiles and assessment criteria",
      "Governance, compliance and risk specialist recruitment",
      "Fit-for-purpose hiring once approval is secured"
    ]
  },
  {
    id: "structured-onboarding",
    number: "03",
    title: "Structured onboarding plan",
    description:
      "Get new hires to full effectiveness faster. We design and support structured onboarding—induction, training, handover and first 90-day milestones—so governance and compliance roles land cleanly.",
    detail: [
      "Induction and regulatory training sequencing",
      "Handover and knowledge transfer protocols",
      "First 90-day milestones and sign-off"
    ]
  },
  {
    id: "specialist-talent-capability",
    number: "04",
    title: "Delivered via specialist talent capability",
    description:
      "Talent support is delivered by ALO's specialist talent capability: same standards, same confidentiality, no separate brand. Integrated into your expansion programme, not bolted on.",
    detail: [
      "Single point of contact within ALO Advisory Group",
      "Confidential, regulator-aware process",
      "Aligned to your licensing and governance timeline"
    ]
  }
];

export const metadata: Metadata = {
  title: "Operational Build & Talent Enablement, ALO Advisory Group",
  description:
    "Talent enablement as part of ALO Advisory Group: role scoping, compliance and governance hiring, structured onboarding. Integrated capability, no separate branding."
};

export default function TalentPage() {
  return (
    <>
      <header className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 pt-16 md:pt-24 pb-24 md:pb-32 min-h-[70vh] flex flex-col justify-center overflow-hidden">
        <HeroBackground images={HERO_IMAGES} />
        <div className="absolute inset-0 bg-alo-bg/70" aria-hidden />
        <div className="container relative z-10 px-6 md:px-8 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.22em] uppercase text-alo-muted mb-4">
                Talent
              </p>
              <h1 className="mb-8">
                Operational Build & Talent Enablement
              </h1>
              <p className="max-w-xl">
                Talent enablement is an integrated capability within ALO
                Advisory Group, supporting governance and compliance hiring
                once regulatory approval is secured.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
                <ButtonLink href="/contact" variant="primary">
                  Get in touch
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <main>
        <PageSection
          id="what-we-offer"
          aria-label="What we offer"
          smallGapBelow
        >
          <Reveal>
            <SectionHeader
              eyebrow="How we support you"
              title="What we offer"
            />
          </Reveal>
          <p className="max-w-2xl text-alo-muted text-sm sm:text-base leading-relaxed mb-16 md:mb-20">
            Talent enablement runs through four connected areas: scoping roles,
            hiring for compliance and governance, onboarding with structure, and
            delivery via a dedicated specialist capability—all under the ALO
            Advisory Group umbrella.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {TALENT_SECTIONS.map((section, index) => {
              const Icon = TALENT_ICONS[index];
              return (
                <Reveal key={section.id} delay={index * 80}>
                  <article
                    id={section.id}
                    aria-labelledby={`${section.id}-title`}
                    className="panel flex h-full flex-col p-6 sm:p-8 border-l-4 border-l-alo-gold/50 transition-all duration-slow ease-linear hover:border-l-alo-gold/80 hover:shadow-[0_20px_56px_rgba(0,0,0,0.5)]"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-alo-gold/10 text-alo-gold mb-5"
                      aria-hidden
                    >
                      {Icon ? <Icon /> : null}
                    </div>
                    <span
                      className="font-serif text-xl text-alo-gold/50 tracking-tight"
                      aria-hidden="true"
                    >
                      {section.number}
                    </span>
                    <h2
                      id={`${section.id}-title`}
                      className="mt-2 font-serif text-xl sm:text-2xl text-alo-text leading-tight tracking-tight"
                    >
                      {section.title}
                    </h2>
                    <p className="mt-4 text-alo-muted text-sm leading-relaxed flex-1">
                      {section.description}
                    </p>
                    <ul className="mt-5 space-y-2" role="list">
                      {section.detail?.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-alo-muted text-[0.9rem] leading-relaxed"
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-alo-gold/70"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </PageSection>

        <PageSection
          id="contact"
          aria-label="Final call to action"
          smallGapAbove
        >
          <Reveal>
            <div className="panel px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-2xl sm:text-[28px] font-serif">
                  Need governance or compliance talent for your expansion?
                </h2>
                <p>
                  We scope roles and support hiring once approval is secured.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <ButtonLink href="/contact" variant="primary">
                  Get in touch
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
