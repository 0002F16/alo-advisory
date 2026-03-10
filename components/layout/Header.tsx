"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/common/Button";
import { BrandLogo } from "@/components/common/BrandLogo";

const NAV_LINKS = [
  { label: "Saudi", href: "/saudi" },
  { label: "UAE", href: "/uae" },
  { label: "Services", href: "/services" },
  { label: "Talent", href: "/talent" },
  { label: "About", href: "/about" }
] as const;

const MOBILE_MENU_ID = "main-nav-mobile";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-[background-color,border-color] duration-slow ease-linear ${
          scrolled
            ? "bg-alo-bg border-b border-white/5 backdrop-blur-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container px-6 md:px-8 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            <div className="-ml-6 md:-ml-8 lg:-ml-10">
              <BrandLogo />
            </div>

            <nav
              aria-label="Main"
              className="hidden lg:flex lg:items-center lg:gap-8"
            >
              <ul className="flex items-center gap-8">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="underline-link"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="ml-4">
                <ButtonLink href="/contact" variant="primary">
                  Get in Touch
                </ButtonLink>
              </div>
            </nav>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls={MOBILE_MENU_ID}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 text-alo-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-alo-gold rounded"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-transform duration-slow ease-linear ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-opacity duration-slow ease-linear ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-transform duration-slow ease-linear ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id={MOBILE_MENU_ID}
        className={`fixed inset-0 z-40 lg:hidden bg-alo-bg transition-opacity duration-slow ease-linear ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "5rem" }}
        aria-hidden={!menuOpen}
      >
        <div className="container px-6 md:px-8 lg:px-10 flex flex-col h-full">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="underline-link text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-12 pb-8">
            <ButtonLink href="/contact" variant="primary" className="w-full sm:w-auto">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
