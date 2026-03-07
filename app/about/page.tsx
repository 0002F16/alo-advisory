import type { Metadata } from "next";
import Image from "next/image";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { FounderPortrait } from "@/components/about/FounderPortrait";
import { SiteFooter } from "@/components/layout/SiteFooter";

const FOUNDER_ITEMS = [
  "Risk and regulatory project delivery",
  "Governance programmes",
  "Structured enterprise implementation",
  "Cross-border sequencing discipline"
];

const FOUNDER_STATEMENTS = [
  "Expansion architecture designed before execution—so legal spend follows a blueprint, not guesswork.",
  "We do not provide legal or tax advice. Legal and tax services are delivered by licensed specialists. ALO Advisory Group designs and oversees expansion architecture."
];

export const metadata: Metadata = {
  title: "Built From Risk & Regulatory Delivery — ALO Advisory Group",
  description:
    "Founder background in risk and regulatory project delivery, governance programmes and cross-border sequencing. We design and oversee expansion architecture; we do not provide legal or tax advice."
};

export default function AboutPage() {
  return (
    <>
      {/* Hero: typographic/editorial — distinct from home (no image cycling) */}
      <header
        className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 min-h-[70vh] flex flex-col justify-center overflow-hidden"
        aria-label="About ALO hero"
      >
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

        <div className="container relative z-10 px-6 md:px-8 lg:px-10 pt-20 pb-24 md:pt-24 md:pb-32 flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <p className="text-sm tracking-[0.28em] uppercase text-alo-gold/90 mb-5">
                About Us
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-5xl sm:text-6xl md:text-[4rem] lg:text-[4.5rem] leading-[1.08] tracking-tight font-serif text-alo-text mb-8">
                Built From Risk & Regulatory Delivery
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <div className="h-px w-20 bg-alo-gold mb-10 mx-auto" aria-hidden="true" />
            </Reveal>
            <Reveal delay={200}>
              <p className="text-alo-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                ALO Advisory Group designs expansion architecture for UK firms
                entering the GCC. Our approach is rooted in risk and regulatory
                delivery—structure and sequence are locked before legal spend
                begins.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ButtonLink href="/contact" variant="primary" className="inline-flex">
                Book a Discovery Call
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </header>

      <main>
        <PageSection id="who-we-are" aria-label="Who we are" borderedTop>
          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(320px,480px)] lg:gap-16 lg:items-start">
            <div className="space-y-6">
              <Reveal>
                <SectionHeader title="Who We Are" />
              </Reveal>
              <Reveal delay={80}>
                <p className="text-alo-text text-base sm:text-lg max-w-2xl leading-relaxed">
                  ALO Advisory Group was founded from deep experience in risk and
                  regulatory project delivery. We exist because expansion into the
                  GCC—particularly Saudi Arabia and the UAE—often fails when firms
                  rush to legal and tax counsel without a clear architecture.
                  Governance, licensing pathway, and sequencing must be designed
                  first. We design that architecture and oversee execution against
                  it.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-alo-text text-base sm:text-lg max-w-2xl leading-relaxed">
                  We deliver four pillars: Readiness Diagnostic, Expansion
                  Architecture, Specialist Coordination, and Execution Oversight.
                  Each is designed to lock structure, governance, and sequence
                  before legal spend begins—so your advisers execute against a
                  blueprint.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <ButtonLink href="/services" variant="primary">
                  Explore our services
                </ButtonLink>
              </Reveal>
            </div>
            <Reveal delay={200} className="shrink-0">
              {/* Bento grid: big image, two small images */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-alo-panel">
                  <Image
                    src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt=""
                    fill
                    className="object-cover transition-transform duration-slow ease-linear hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
                    aria-hidden
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-alo-panel">
                  <Image
                    src="https://images.pexels.com/photos/4491490/pexels-photo-4491490.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt=""
                    fill
                    className="object-cover transition-transform duration-slow ease-linear hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 50vw, 240px"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
                    aria-hidden
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-alo-panel">
                  <Image
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt=""
                    fill
                    className="object-cover transition-transform duration-slow ease-linear hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 50vw, 240px"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
                    aria-hidden
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </PageSection>

        <PageSection id="founder" aria-label="Founder" borderedTop>
          <Reveal>
            <SectionHeader title="About our Founder" />
          </Reveal>
          <div className="grid gap-10 md:grid-cols-[340px_1fr] lg:grid-cols-[400px_1fr] lg:gap-16 items-start">
            <Reveal delay={80} className="shrink-0">
              <FounderPortrait />
            </Reveal>
            <div className="min-w-0 space-y-8">
              <Reveal delay={120}>
                <div>
                  <h3 className="text-2xl sm:text-[28px] font-serif text-alo-text mb-2">
                    EJ Alo
                  </h3>
                  <p className="text-xs tracking-[0.22em] uppercase text-alo-muted">
                    Founder & Principal
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-alo-muted text-sm">Experience in:</p>
                <ul className="space-y-2 max-w-xl mt-2">
                  {FOUNDER_ITEMS.map((item, index) => (
                    <li key={item} className="text-alo-text flex items-start gap-3">
                      <span
                        className="h-px w-6 bg-alo-gold/80 shrink-0 mt-2.5"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <div className="space-y-4">
                  {FOUNDER_STATEMENTS.map((statement) => (
                    <blockquote
                      key={statement.slice(0, 40)}
                      className="border-l-4 border-alo-gold pl-5 sm:pl-6 not-italic"
                    >
                      <p className="text-alo-text text-sm sm:text-base leading-relaxed">
                        {statement}
                      </p>
                    </blockquote>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </PageSection>

        <PageSection id="contact" aria-label="Final call to action" borderedTop>
          <Reveal>
            <div className="panel px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-2xl sm:text-[28px] font-serif">
                  Cross-border expansion, designed before execution.
                </h2>
                <p>
                  Licensing pathway, structure, governance and sequencing
                  locked before legal spend begins.
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
