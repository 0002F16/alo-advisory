import type { ReactNode } from "react";

interface PageSectionProps {
  id?: string;
  "aria-label"?: string;
  borderedTop?: boolean;
  children: ReactNode;
}

export function PageSection({
  id,
  "aria-label": ariaLabel,
  borderedTop,
  children
}: PageSectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`py-24 md:py-32 ${borderedTop ? "border-t border-white/5" : ""}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

