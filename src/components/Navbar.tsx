"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  Phone,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Our Projects" },
  { href: "/why-us", label: "Why Us" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  {
    href: "#",
    label: "Our Concerns",
    children: [
      { href: "/concerns/building-materials", label: "Building Materials" },
      { href: "/concerns/agro", label: "Essential Agro Commodities" },
      { href: "/concerns/mega-structure", label: "Mega Structure" },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl shadow-lg shadow-black/[0.04]"
            : "bg-transparent"
        }`}
        style={scrolled ? { backgroundColor: 'color-mix(in srgb, var(--bg-primary) 92%, transparent)' } : undefined}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="TST White House Ltd"
                width={160}
                height={50}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 ${
                        scrolled
                          ? "text-[var(--text-primary)] hover:text-gold-500"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 py-3 rounded-2xl shadow-xl overflow-hidden border border-[var(--border-color)]" style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-hover-shadow)' }}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-3 text-sm text-[var(--text-secondary)] hover:text-gold-500 hover:bg-gold-500/5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300 animated-underline ${
                      scrolled
                        ? "text-[var(--text-primary)] hover:text-gold-500"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Phone */}
              <a
                href="tel:+8801886773300"
                className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-[var(--text-secondary)]"
                      : "text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>01886773300</span>
              </a>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`p-2.5 rounded-full transition-all duration-300 ${
                    scrolled
                      ? "text-[var(--text-secondary)] hover:bg-gold-500/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2.5 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-[var(--text-primary)]"
                    : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden" style={{ background: 'var(--bg-primary)' }}
          >
            <div className="flex flex-col h-full pt-28 px-8">
              <div className="space-y-1">
                {navLinks.map((link, i) =>
                  link.children ? (
                    <div key={link.label}>
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="py-4 border-b border-[var(--border-color)]"
                      >
                        <span className="text-sm uppercase tracking-wider text-[var(--text-muted)] font-medium">
                          {link.label}
                        </span>
                        <div className="mt-3 space-y-2 pl-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block text-lg text-[var(--text-secondary)] hover:text-gold-500 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-4 text-2xl font-display font-medium text-[var(--text-primary)] hover:text-gold-500 transition-colors border-b border-[var(--border-color)]"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              <div className="mt-auto pb-10">
                <a
                  href="tel:+8801886773300"
                  className="flex items-center gap-2 text-gold-500 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  (+880) 01886773300
                </a>
                <p className="mt-3 text-sm text-[var(--text-muted)]">
                  info@tstwhitehouseltd.com
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
