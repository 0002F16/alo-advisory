import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "full" | "compact";
  className?: string;
}

export function BrandLogo({
  variant = "full",
  className
}: BrandLogoProps) {
  const containerClasses =
    "inline-flex items-center gap-2 sm:gap-3" +
    (className ? ` ${className}` : "");

  const logoSizeClasses =
    variant === "compact"
      ? "h-8 w-8"
      : "h-8 sm:h-9 w-32 sm:w-40";

  return (
    <Link
      href="/"
      className={containerClasses}
      aria-label="ALO Advisory Group — home"
    >
      <div className={`relative ${logoSizeClasses}`}>
        <Image
          src="/alo-logo.png"
          alt="ALO Advisory Group logo"
          fill
          sizes="(max-width: 640px) 140px, 180px"
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}

