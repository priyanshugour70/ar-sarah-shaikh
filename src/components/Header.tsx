"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-bg-cream)]/95 backdrop-blur-sm shadow-sm"
          : "bg-[var(--color-bg-cream)]"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl lg:text-3xl text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors z-50"
          >
            Sarah Shaikh
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs xl:text-sm tracking-widest uppercase transition-colors py-2 ${
                    pathname === link.href
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-medium)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-text-dark)] z-50 relative"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[var(--color-bg-cream)] z-40 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
                className={`transform transition-all duration-300 ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  href={link.href}
                  className={`text-lg tracking-widest uppercase py-2 block ${
                    pathname === link.href
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-dark)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
