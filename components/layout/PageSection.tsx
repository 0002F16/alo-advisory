import type { ReactNode } from "react";

interface PageSectionProps {
  id?: string;
  "aria-label"?: string;
  borderedTop?: boolean;
  tight?: boolean;
  tighter?: boolean;
  tightBottom?: boolean;
  smallGapAbove?: boolean;
  minimalGapAbove?: boolean;
  smallGapBelow?: boolean;
  children: ReactNode;
}

export function PageSection({
  id,
  "aria-label": ariaLabel,
  borderedTop,
  tight,
  tighter,
  tightBottom,
  smallGapAbove,
  minimalGapAbove,
  smallGapBelow,
  children
}: PageSectionProps) {
  let pt = "pt-24 md:pt-32";
  let pb = "pb-24 md:pb-32";
  if (tighter) {
    pt = "pt-8 md:pt-12";
    pb = "pb-8 md:pb-12";
  } else if (tight) {
    pt = "pt-14 md:pt-20";
    pb = "pb-14 md:pb-20";
  }
  if (tightBottom) {
    pb = tighter ? "pb-4 md:pb-6" : tight ? "pb-7 md:pb-10" : "pb-12 md:pb-16";
  }
  if (minimalGapAbove) pt = "pt-0";
  else if (smallGapAbove) pt = "pt-6 md:pt-8";
  if (smallGapBelow) pb = "pb-6 md:pb-8";
  const paddingClass = `${pt} ${pb}`;
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`${paddingClass} ${borderedTop ? "border-t border-white/5" : ""}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

