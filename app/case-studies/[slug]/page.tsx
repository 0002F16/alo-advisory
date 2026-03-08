import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getCaseStudyBySlug,
  getOtherCaseStudies,
  CASE_STUDY_SLUGS
} from "@/lib/case-studies";
import { PageSection } from "@/components/layout/PageSection";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";
import { SiteFooter } from "@/components/layout/SiteFooter";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return { title: "Case Study | ALO Advisory Group" };
  return {
    title: `${caseStudy.title} | ALO Advisory Group`,
    description: caseStudy.summary
  };
}

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  const others = getOtherCaseStudies(slug);

  return (
    <>
      <article>
        {/* Hero image */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 mt-8 overflow-hidden">
          <div className="relative aspect-[21/9] min-h-[220px] md:min-h-[280px] lg:min-h-[340px] bg-alo-panel">
            <Image
              src={caseStudy.image}
              alt={caseStudy.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-alo-bg via-alo-bg/40 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
              <Reveal>
                <p className="text-[0.65rem] tracking-[0.22em] uppercase text-alo-gold/90 font-medium mb-2">
                  Case Study
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-alo-text leading-tight tracking-tight max-w-3xl">
                  {caseStudy.title}
                </h1>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Article content */}
        <PageSection aria-label="Case study content" tight>
          <div className="max-w-2xl space-y-8 md:space-y-10">
            {/* Intro */}
            <Reveal>
              <div className="space-y-4">
                {caseStudy.article.intro.map((para, i) => (
                  <p
                    key={i}
                    className="text-lg sm:text-xl text-alo-muted leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Highlights */}
            <Reveal delay={60}>
              <ul className="space-y-5">
                {caseStudy.article.highlights.map((item, i) => (
                  <li key={i} className="relative pl-6 border-l border-white/10">
                    {item.emphasized ? (
                      <p className="text-xl sm:text-2xl font-serif text-alo-text leading-snug">
                        {item.text}
                      </p>
                    ) : (
                      <p className="text-base sm:text-lg text-alo-muted leading-relaxed">
                        {item.text}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Conclusion */}
            <Reveal delay={80}>
              <div className="panel px-6 py-6 sm:px-8 sm:py-8 border-l-4 border-l-alo-gold/80">
                <p className="text-sm tracking-[0.2em] uppercase text-alo-gold mb-3">
                  Outcome
                </p>
                <p className="text-xl sm:text-2xl font-serif text-alo-text leading-snug max-w-xl">
                  {caseStudy.article.conclusion}
                </p>
              </div>
            </Reveal>
          </div>
        </PageSection>
      </article>

      {/* Other case study cards */}
      <PageSection id="more-case-studies" aria-label="More case studies" tight>
        <Reveal>
          <p className="text-sm tracking-[0.22em] uppercase text-alo-muted mb-6">
            More case studies
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-8">
          {others.map((other, index) => (
            <Reveal key={other.slug} delay={index * 80}>
              <Link
                href={`/case-studies/${other.slug}`}
                className="group panel flex flex-col overflow-hidden transition-all duration-slow ease-linear hover:border-white/10 hover:border-t-alo-gold/40 cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-alo-panel">
                  <Image
                    src={other.image}
                    alt={other.imageAlt}
                    fill
                    className="object-cover transition-transform duration-slow ease-linear group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-alo-bg/70 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1 min-h-0">
                  <h3 className="text-xl sm:text-2xl font-serif text-alo-text leading-tight tracking-tight group-hover:text-alo-gold transition-colors">
                    {other.title}
                  </h3>
                  <div
                    className="h-px w-10 bg-alo-gold/80 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-base sm:text-lg text-alo-muted line-clamp-2">
                    {other.summary}
                  </p>
                  <span className="text-sm tracking-[0.18em] uppercase text-alo-gold/80 mt-auto">
                    Read case study →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection aria-label="Call to action" tight>
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
              <Button type="button">Book a Discovery Call</Button>
            </div>
          </div>
        </Reveal>
      </PageSection>

      <SiteFooter />
    </>
  );
}
