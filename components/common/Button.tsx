import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondaryLink";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = ButtonBaseProps & {
  href: string;
};

function baseClasses(variant: Variant) {
  if (variant === "primary") {
    return [
      "inline-flex items-center justify-center rounded-full border border-alo-gold",
      "px-5 sm:px-6 py-2.5 text-sm sm:text-[0.95rem] font-medium tracking-wide",
      "text-alo-text bg-transparent",
      "transition-[background-color,color,border-color] duration-slow ease-linear",
      "hover:bg-alo-gold hover:text-black hover:border-alo-gold",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-alo-gold"
    ].join(" ");
  }

  return "underline-link";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${baseClasses(variant)} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "secondaryLink",
  className = ""
}: LinkButtonProps) {
  if (variant === "secondaryLink") {
    return (
      <Link
        href={href}
        className={`${baseClasses(variant)} ${className}`.trim()}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses("primary")} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}

