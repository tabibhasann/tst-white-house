"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, ArrowUp } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Our Projects" },
    { href: "/why-us", label: "Why Us" },
    { href: "/about", label: "About Us" },
  ],
  resources: [
    { href: "/contact", label: "Contact Us" },
    { href: "/projects/tst-prime", label: "TST Prime" },
    { href: "/projects/tst-prestige", label: "TST Prestige" },
    { href: "/projects/tst-shopnil", label: "TST Shopnil" },
  ],
  concerns: [
    { href: "/concerns/building-materials", label: "Building Materials" },
    { href: "/concerns/agro", label: "Agro Commodities" },
    { href: "/concerns/mega-structure", label: "Mega Structure" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--bg-tertiary)] overflow-hidden">
      {/* Gold line separator */}
      <div className="h-px w-full gold-gradient-bg opacity-40" />

      <div className="container-premium pt-20 pb-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Info */}
          <AnimatedSection className="lg:col-span-4" delay={0}>
            <Image
              src="/images/logo-footer.png"
              alt="TST White House Ltd"
              width={200}
              height={60}
              className="h-14 w-auto mb-6"
            />
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-sm">
              TST White House Limited — Trusted Spaces for Tomorrow. Redefining
              luxury living through cutting-edge technology, sustainable
              practices, and forward-thinking design since 2023.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+8801886773300"
                className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-gold-500 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                (+880) 01886773300
              </a>
              <a
                href="mailto:info@tstwhitehouseltd.com"
                className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-gold-500 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-gold-500" />
                info@tstwhitehouseltd.com
              </a>
              <div className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                H-12/A, R-110, Gulshan 2, Dhaka, Bangladesh 1212
              </div>
            </div>
          </AnimatedSection>

          {/* Company Links */}
          <AnimatedSection className="lg:col-span-2 lg:col-start-6" delay={0.1}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Resources Links */}
          <AnimatedSection className="lg:col-span-2" delay={0.15}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-6">
              Projects
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Concerns Links */}
          <AnimatedSection className="lg:col-span-2" delay={0.2}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-6">
              Our Concerns
            </h4>
            <ul className="space-y-3">
              {footerLinks.concerns.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              <a
                href="https://www.facebook.com/tstwhitehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Row */}
        <div className="mt-16 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} TST White House Ltd. All Rights
            Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-[var(--text-muted)] hover:text-gold-500 transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:border-gold-500 transition-all duration-300 group-hover:-translate-y-1">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
