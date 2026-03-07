import type { Metadata } from "next";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { SiteFooter } from "@/components/layout/SiteFooter";

const ENGAGEMENT_STEPS = [
  "1) Strategic Discovery — Free — 30 minutes",
  "2) Readiness Diagnostic — £3,000–£5,000 fixed fee",
  "3) Expansion Architecture — £15,000–£25,000 fixed fee",
  "4) Oversight Retainer — £2,500–£4,000 per month (min 3 months)"
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
  title: "Engagement Model & Services — ALO Advisory Group",
  description:
    "Strategic Discovery (free), Readiness Diagnostic, Expansion Architecture and Oversight Retainer. Clear pricing and scope for GCC expansion."
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <PageSection id="intro" aria-label="Engagement model intro">
          <Reveal>
            <SectionHeader title="Engagement Model" />
            <p className="text-alo-muted max-w-xl mb-8">
              A simple four-step model: discovery, diagnostic, architecture,
              oversight. Clear scope and pricing so you know what you're buying.
            </p>
            <ButtonLink href="/contact" variant="primary">
              Book a Discovery Call
            </ButtonLink>
          </Reveal>
        </PageSection>
        <PageSection
          id="engagement-model"
          aria-label="Engagement model"
          borderedTop
        >
          <Reveal>
            <SectionHeader title="Engagement model" />
          </Reveal>
          <div className="space-y-4">
            {ENGAGEMENT_STEPS.map((step, index) => (
              <Reveal key={step} delay={index * 80}>
                <div className="panel px-6 py-5 sm:px-8 sm:py-6">
                  <p className="text-alo-text font-medium">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/contact" variant="primary">
              Book a Discovery Call
            </ButtonLink>
          </div>
        </PageSection>

        <PageSection
          id="oversight-included"
          aria-label="What's included in Oversight Retainer"
          borderedTop
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal>
              <div className="panel p-6 sm:p-7">
                <h3 className="text-xl font-serif text-alo-text mb-4">
                  What's included in Oversight Retainer
                </h3>
                <ul className="space-y-2 text-alo-muted text-sm sm:text-[0.95rem]">
                  {OVERSIGHT_INCLUDED.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div id="not-included" className="panel p-6 sm:p-7">
                <h3 className="text-xl font-serif text-alo-text mb-4">
                  What's not included
                </h3>
                <ul className="space-y-2 text-alo-muted text-sm sm:text-[0.95rem]">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item}>• {item}</li>
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
        >
          <Reveal>
            <div className="panel px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-2xl sm:text-[28px] font-serif">
                  Ready to start with a discovery call?
                </h2>
                <p>
                  Free 30-minute Strategic Discovery — no commitment.
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
