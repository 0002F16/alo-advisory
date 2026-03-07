import type { ReactNode } from "react";

interface PageSectionProps {
  id?: string;
  "aria-label"?: string;
  borderedTop?: boolean;
  tight?: boolean;
  children: ReactNode;
}

export function PageSection({
  id,
  "aria-label": ariaLabel,
  borderedTop,
  tight,
  children
}: PageSectionProps) {
  const padding = tight ? "py-14 md:py-20" : "py-24 md:py-32";
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`${padding} ${borderedTop ? "border-t border-white/5" : ""}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

