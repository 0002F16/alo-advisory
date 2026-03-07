"use client";

import Image from "next/image";
import { useState } from "react";

export function FounderPortrait() {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  if (showPlaceholder) {
    return (
      <div
        className="relative aspect-[3/4] w-full min-h-[400px] max-w-[340px] lg:min-h-[420px] lg:max-w-[400px] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-alo-panel to-alo-bg/80 flex items-center justify-center"
        aria-hidden
      >
        <span className="text-5xl sm:text-6xl font-serif text-alo-gold/60 tracking-widest">
          EJ
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[3/4] w-full min-h-[400px] max-w-[340px] lg:min-h-[420px] lg:max-w-[400px] rounded-xl overflow-hidden border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
      <Image
        src="/founder-portrait.jpg"
        alt="EJ Alo, Founder & Principal"
        fill
        className="object-cover transition-transform duration-slow ease-linear hover:scale-[1.02]"
        sizes="(max-width: 768px) 340px, (max-width: 1024px) 340px, 400px"
        onError={() => setShowPlaceholder(true)}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />
    </div>
  );
}
