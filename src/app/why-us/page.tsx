"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Palette, Sun, Wind, Shield, Leaf, Building2, Sofa } from "lucide-react";

const pillars = [
  {
    category: "Functional Design",
    categoryIcon: Building2,
    items: [
      {
        icon: Palette,
        title: "Color",
        desc: "We carefully select palettes that promote well-being and harmony. Colors influence mood and energy — our designs use nature-inspired tones and balanced contrasts to create calming yet invigorating living environments.",
      },
      {
        icon: Sun,
        title: "Light",
        desc: "Natural light transforms a space. Our architects maximize daylight entry through strategic window placement, reflective surfaces, and open layouts that reduce dependency on artificial lighting while enhancing comfort.",
      },
      {
        icon: Wind,
        title: "Clean Air",
        desc: "Healthy homes start with clean air. We integrate cross-ventilation designs, air purification systems, and green spaces that ensure every breath you take at home is fresh and revitalizing.",
      },
    ],
  },
  {
    category: "Quality Materials",
    categoryIcon: Shield,
    items: [
      {
        icon: Shield,
        title: "Durability",
        desc: "We source and use only the finest construction materials that stand the test of time. From reinforced foundations to weather-resistant finishes, every component is chosen for maximum longevity and structural integrity.",
      },
      {
        icon: Leaf,
        title: "Sustainability",
        desc: "Building responsibly means building for the future. Our commitment to sustainable materials and green building practices reduces environmental impact while maintaining the highest quality standards.",
      },
    ],
  },
  {
    category: "Aesthetics",
    categoryIcon: Sofa,
    items: [
      {
        icon: Building2,
        title: "Exterior",
        desc: "First impressions matter. Our exteriors blend contemporary architecture with timeless elegance — featuring clean lines, premium facades, and landscaped surroundings that make every project a landmark.",
      },
      {
        icon: Sofa,
        title: "Interior",
        desc: "Where luxury meets livability. Our interiors feature thoughtful spatial planning, premium finishes, and designer touches that transform apartments into personalized sanctuaries of comfort and style.",
      },
    ],
  },
];

export default function WhyUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/hero/hero-2.webp"
            alt="Why TST White House"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-gold-300 mb-4 font-medium"
          >
            Homes Personalized
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            Why <span className="gold-gradient-text">TST White House</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg text-white/60 max-w-xl mx-auto"
          >
            We don&apos;t just build homes — we craft personalized living
            experiences that inspire, comfort, and endure.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              Creating spaces that{" "}
              <span className="gold-gradient-text">inspire and energize</span>{" "}
              the people living inside them.
            </h2>
            <p className="mt-8 text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              Our approach to real estate goes beyond construction. We focus on
              three core pillars — Functional Design, Quality Materials, and
              Aesthetics — to deliver homes that are as beautiful as they are
              practical.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      {pillars.map((pillar, pi) => (
        <section
          key={pillar.category}
          className={`section-padding ${pi % 2 === 0 ? "bg-[var(--bg-secondary)]" : "bg-[var(--bg-primary)]"}`}
        >
          <div className="container-premium">
            <AnimatedSection className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center">
                  <pillar.categoryIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
                  {pillar.category}
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                {pillar.category}
              </h2>
            </AnimatedSection>

            <div className={`grid grid-cols-1 ${pillar.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-8`}>
              {pillar.items.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.15}>
                  <div className="group p-8 md:p-10 rounded-3xl gold-border hover:border-gold-500/40 transition-all duration-500 hover:premium-shadow h-full" style={{ background: "var(--card-bg)" }}>
                    <item.icon className="w-10 h-10 text-gold-500 mb-6" />
                    <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Commitments CTA */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        <div className="container-premium text-center">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              Our Commitment
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building Trust,
              <br />
              <span className="gold-gradient-text">Delivering Excellence</span>
            </h2>
            <p className="mt-8 text-lg text-white/50 max-w-2xl mx-auto">
              Every project we undertake is a promise kept. A commitment to
              quality, transparency, and the relentless pursuit of creating
              homes that exceed expectations.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/projects"
                className="px-8 py-4 gold-gradient-bg text-white text-sm font-medium uppercase tracking-wider rounded-full hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-500"
              >
                <span className="flex items-center gap-2">
                  View Our Projects
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/20 text-white text-sm font-medium uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-500"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
