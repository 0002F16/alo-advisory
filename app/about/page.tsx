import type { Metadata } from "next";
import Image from "next/image";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { SiteFooter } from "@/components/layout/SiteFooter";

const FOUNDER_PARAGRAPHS = [
  "James Emmanuel is the Founder of Alo Advisory Group, a cross-border expansion advisory firm focused on helping regulated organisations expand into new international markets through structured regulatory architecture and disciplined programme delivery.",
  "Over the course of his career, James has worked across risk, regulatory, and enterprise delivery environments, supporting complex programmes within large organisations operating in highly regulated industries. His work has involved coordinating senior stakeholders, compliance teams, and operational functions to deliver initiatives where governance, regulatory alignment, and execution discipline are essential.",
  "Drawing on this experience, Alo Advisory Group was established to support firms navigating the complexities of international expansion. The firm focuses on designing licensing pathways, governance structures, and execution sequencing before implementation begins, enabling organisations to approach new markets with greater clarity, structure, and reduced regulatory risk."
];

export const metadata: Metadata = {
  title: "Built From Risk & Regulatory Delivery, ALO Advisory Group",
  description:
    "Founder background in risk and regulatory project delivery, governance programmes and cross-border sequencing. We design and oversee expansion architecture; we do not provide legal or tax advice."
};

export default function AboutPage() {
  return (
    <>
      {/* Hero: typographic/editorial, distinct from home (no image cycling) */}
      <header
        className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 min-h-[70vh] flex flex-col justify-center overflow-hidden"
        aria-label="About ALO hero"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b36] to-alo-bg"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23C6A75E' fill-opacity='1'/%3E%3C/svg%3E")`,
          }}
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
                delivery. Structure and sequence are locked before legal spend
                begins.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ButtonLink href="/call" variant="primary" className="inline-flex">
                Book a Discovery Call
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </header>

      <main>
        <PageSection id="who-we-are" aria-label="Who we are">
          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(320px,480px)] lg:gap-16 lg:items-start">
            <div className="space-y-6">
              <Reveal>
                <SectionHeader title="Who We Are" />
              </Reveal>
              <Reveal delay={80}>
                <p className="text-alo-text text-base sm:text-lg max-w-2xl leading-relaxed">
                  ALO Advisory Group was founded from deep experience in risk and
                  regulatory project delivery. We exist because expansion into the
                  GCC, particularly Saudi Arabia and the UAE, often fails when firms
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
                  before legal spend begins, so your advisers execute against a
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
            <SectionHeader title="About the Founder" />
          </Reveal>

          {/* Editorial founder layout — no portrait */}
          <div className="mt-10 max-w-3xl">
            {/* Name block */}
            <Reveal delay={80}>
              <div className="flex items-end gap-6 mb-10">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-serif text-alo-text leading-none mb-2">
                    James Emmanuel
                  </h3>
                  <p className="text-xs tracking-[0.28em] uppercase text-alo-gold">
                    Founder, Alo Advisory Group
                  </p>
                </div>
                <div className="flex-1 h-px bg-alo-gold/30 mb-1" aria-hidden="true" />
              </div>
            </Reveal>

            {/* Bio paragraphs */}
            <div className="space-y-7">
              {FOUNDER_PARAGRAPHS.map((para, i) => (
                <Reveal key={i} delay={120 + i * 60}>
                  <p className="text-alo-text text-base sm:text-lg leading-relaxed">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </PageSection>

        <PageSection id="contact" aria-label="Final call to action" borderedTop>
          <Reveal>
            <div className="panel px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-[2.25rem] font-serif leading-tight tracking-tight">
                  Cross-border expansion, designed before execution.
                </h2>
                <p className="text-lg sm:text-xl text-alo-muted">
                  Licensing pathway, structure, governance and sequencing
                  locked before legal spend begins.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <ButtonLink href="/call" variant="primary">
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
