import type { Metadata } from "next";
import { PageSection } from "@/components/layout/PageSection";
import { Reveal } from "@/components/common/Reveal";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Book a Call, ALO Advisory Group",
  description:
    "Schedule a discovery call and review what to prepare before we speak."
};

const CALENDLY_URL = "https://calendly.com/nextrouteconsultancy/30min";

export default function CallPage() {
  return (
    <>
      <PageSection id="call" aria-label="Book a call" borderedTop>
        <div className="relative">
          <div className="relative grid gap-10 md:gap-12 lg:gap-16 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] items-start">
            <Reveal className="panel p-6 sm:p-7 md:p-8 space-y-6">
              <CalendlyPanel />
            </Reveal>
            <Reveal delay={80} className="panel p-6 sm:p-7 md:p-8">
              <WhatToPrepareBeforeCallPanel />
            </Reveal>
          </div>
        </div>
      </PageSection>
      <SiteFooter />
    </>
  );
}

function CalendlyPanel() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <p className="text-[0.7rem] tracking-[0.26em] uppercase text-alo-muted">
          Book a call
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-serif">
          Choose a time for a discovery call.
        </h1>
        <p className="text-sm sm:text-[0.95rem] text-alo-muted max-w-xl">
          Use the scheduler below to book a time that works for you.
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#050c0f] overflow-hidden">
        <div className="relative h-[720px] sm:h-[760px] md:h-[820px]">
          <iframe
            title="Calendly scheduling"
            src={CALENDLY_URL}
            className="absolute inset-0 h-full w-full"
            frameBorder="0"
          />
        </div>
      </div>

      <p className="text-[0.75rem] text-alo-muted/80 border-t border-white/5 pt-4">
        If you have trouble booking, email us and we’ll coordinate a time.
      </p>
    </div>
  );
}

function WhatToPrepareBeforeCallPanel() {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-2">
        <p className="text-[0.7rem] tracking-[0.26em] uppercase text-alo-muted">
          What to prepare
        </p>
        <h2 className="text-lg sm:text-xl md:text-[22px] font-serif">
          What to prepare before the call
        </h2>
        <div className="h-px w-10 bg-alo-gold/80" aria-hidden="true" />
      </div>

      <p className="text-sm sm:text-[0.95rem] text-alo-muted">
        A short outline on the points below helps us assess fit and suggest a
        practical pathway during the discovery call.
      </p>

      <ul className="space-y-4 text-sm sm:text-[0.95rem]">
        <li className="space-y-1.5">
          <p className="font-medium text-alo-text">Regulatory status</p>
          <p className="text-alo-muted">
            FCA (or other regulator) authorisation and your current permissions.
          </p>
        </li>
        <li className="space-y-1.5">
          <p className="font-medium text-alo-text">Target GCC market</p>
          <p className="text-alo-muted">
            Saudi, UAE, or another jurisdiction you’re considering.
          </p>
        </li>
        <li className="space-y-1.5">
          <p className="font-medium text-alo-text">Planned activities</p>
          <p className="text-alo-muted">
            The services you intend to deliver in-market.
          </p>
        </li>
        <li className="space-y-1.5">
          <p className="font-medium text-alo-text">Timeline</p>
          <p className="text-alo-muted">
            Early exploration vs a defined market-entry plan and timeframe.
          </p>
        </li>
      </ul>

      <p className="text-[0.75rem] text-alo-muted/80 border-t border-white/5 pt-4">
        Used only to assess fit. Not formal legal, tax or regulatory advice.
      </p>
    </div>
  );
}

