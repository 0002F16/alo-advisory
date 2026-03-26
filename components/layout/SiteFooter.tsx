import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "UAE Market Entry", href: "/uae" },
  { label: "Saudi Market Entry", href: "/saudi" },
  { label: "Talent Strategy", href: "/talent" },
  { label: "About ALO", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 w-screen relative left-1/2 -translate-x-1/2 border-t border-white/5 bg-[#050c0f]">
      <div className="container px-6 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 md:gap-12">
          <div className="space-y-4 max-w-xs">
            <Image
              src="/footer-logo.png"
              alt="ALO Advisory Group logo"
              width={80}
              height={80}
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
            />
            <p className="text-[0.7rem] tracking-[0.26em] uppercase text-alo-muted">
              ALO Advisory Group
            </p>
            <div className="h-px w-10 bg-alo-gold/80" aria-hidden />
            <p className="text-sm text-alo-muted">
              Cross-border expansion architecture for UK-regulated firms
              entering the GCC. Licensing, governance and sequencing designed
              before legal spend begins.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[0.7rem] tracking-[0.26em] uppercase text-alo-muted">
              Navigation
            </p>
            <nav aria-label="Footer primary">
              <ul className="space-y-2">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="underline-link text-alo-muted hover:text-alo-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-alo-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-[0.7rem] tracking-[0.26em] uppercase text-alo-muted">
              Contact
            </p>
            <p className="text-sm text-alo-muted max-w-xs">
              To discuss GCC expansion, governance architecture or a specific
              licence pathway, contact the principal directly.
            </p>
            <div>
              <a
                href="mailto:Jamesemmanuel@aloadvisorygroup.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[0.8rem] text-alo-text transition-colors duration-slow ease-linear hover:border-alo-gold hover:bg-alo-gold hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-alo-gold"
              >
                Email ALO
                <span aria-hidden>↗</span>
              </a>
            </div>
            <p className="text-[0.7rem] text-alo-muted/80">
              Advisory only. This site does not constitute legal, tax or
              investment advice.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-[0.7rem] text-alo-muted">
          <p>
            © {year} ALO Advisory Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
