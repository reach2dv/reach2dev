"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" aria-label="Vardhnam Consulting — Growth Never Stops">
          <Image src="/images/vardhnam-logo.png" alt="Vardhnam Consulting" width={536} height={193} priority className="h-14 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.filter((l) => l.href !== "#contact").map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/75 transition hover:text-brand-dark">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-0.5 w-5 bg-ink before:absolute before:-top-1.5 before:h-0.5 before:w-5 before:bg-ink after:absolute after:top-1.5 after:h-0.5 after:w-5 after:bg-ink" />
        </button>
      </Container>

      {open && (
        <nav id="mobile-navigation" className="border-t border-black/5 bg-white lg:hidden" aria-label="Mobile">
          <Container className="flex flex-col py-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-foreground/80">
                {l.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
