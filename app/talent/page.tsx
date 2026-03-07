import type { Metadata } from "next";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";

const HERO_IMAGES = ["/hero-bg.jpg", "/hero-bg-2.jpg", "/hero-bg-3.jpg"];

const WHAT_WE_OFFER_ITEMS = [
  "Role scoping",
  "Compliance & governance hiring",
  "Structured onboarding plan",
  "Delivered via specialist talent capability"
];

export const metadata: Metadata = {
  title: "Operational Build & Talent Enablement — ALO Advisory Group",
  description:
    "Talent enablement as part of ALO Advisory Group — role scoping, compliance and governance hiring, structured onboarding. Integrated capability, no separate branding."
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
              <h1 className="mb-6">
                Operational Build & Talent Enablement
              </h1>
              <div
                className="h-px w-16 bg-alo-gold mb-8"
                aria-hidden="true"
              />
              <p className="max-w-xl">
                Talent enablement is an integrated capability within ALO
                Advisory Group — supporting governance and compliance hiring
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
          borderedTop
        >
          <Reveal>
            <SectionHeader title="What we offer" />
          </Reveal>
          <ul className="space-y-0 max-w-2xl">
            {WHAT_WE_OFFER_ITEMS.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <li className="py-4 border-b border-white/5 last:border-b-0 flex items-center gap-3">
                  <span
                    className="h-px w-8 bg-alo-gold/80 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-alo-text">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </PageSection>

        <PageSection
          id="positioning"
          aria-label="Positioning"
          borderedTop
        >
          <Reveal>
            <div className="panel p-6 sm:p-8 max-w-2xl border-l-4 border-alo-gold">
              <p className="text-alo-text">
                Never presented as a second company. No separate branding.
                Talent enablement is part of ALO Advisory Group.
              </p>
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
