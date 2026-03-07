interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  align = "left"
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <header className={`flex flex-col gap-2 mb-10 md:mb-12 ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm tracking-[0.22em] uppercase text-alo-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl sm:text-5xl md:text-[3rem] lg:text-[3.25rem] font-serif leading-tight tracking-tight">
        {title}
      </h2>
      <div className="mt-3 h-px w-10 bg-alo-gold" aria-hidden="true" />
    </header>
  );
}

