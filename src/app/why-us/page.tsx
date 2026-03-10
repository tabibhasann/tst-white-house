"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Palette, Sun, Wind, Shield, Leaf, Building2, Sofa } from "lucide-react";

const allPillarItems = [
  {
    pillar: "Functional Design",
    number: "01",
    icon: Palette,
    title: "Color",
    desc: "We carefully select palettes that promote well-being and harmony. Colors influence mood and energy — our designs use nature-inspired tones and balanced contrasts to create calming yet invigorating living environments.",
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    pillar: "Functional Design",
    number: "02",
    icon: Sun,
    title: "Light",
    desc: "Natural light transforms a space. Our architects maximize daylight entry through strategic window placement, reflective surfaces, and open layouts that reduce dependency on artificial lighting while enhancing comfort.",
    accent: "from-yellow-500/20 to-amber-500/20",
  },
  {
    pillar: "Functional Design",
    number: "03",
    icon: Wind,
    title: "Clean Air",
    desc: "Healthy homes start with clean air. We integrate cross-ventilation designs, air purification systems, and green spaces that ensure every breath you take at home is fresh and revitalizing.",
    accent: "from-teal-500/20 to-emerald-500/20",
  },
  {
    pillar: "Quality Materials",
    number: "04",
    icon: Shield,
    title: "Durability",
    desc: "We source and use only the finest construction materials that stand the test of time. From reinforced foundations to weather-resistant finishes, every component is chosen for maximum longevity and structural integrity.",
    accent: "from-blue-500/20 to-indigo-500/20",
  },
  {
    pillar: "Quality Materials",
    number: "05",
    icon: Leaf,
    title: "Sustainability",
    desc: "Building responsibly means building for the future. Our commitment to sustainable materials and green building practices reduces environmental impact while maintaining the highest quality standards.",
    accent: "from-emerald-500/20 to-green-500/20",
  },
  {
    pillar: "Aesthetics",
    number: "06",
    icon: Building2,
    title: "Exterior",
    desc: "First impressions matter. Our exteriors blend contemporary architecture with timeless elegance — featuring clean lines, premium facades, and landscaped surroundings that make every project a landmark.",
    accent: "from-purple-500/20 to-violet-500/20",
  },
  {
    pillar: "Aesthetics",
    number: "07",
    icon: Sofa,
    title: "Interior",
    desc: "Where luxury meets livability. Our interiors feature thoughtful spatial planning, premium finishes, and designer touches that transform apartments into personalized sanctuaries of comfort and style.",
    accent: "from-rose-500/20 to-pink-500/20",
  },
];

export default function WhyUsPage() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(allPillarItems.length - 1) * 100 / allPillarItems.length}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-2.webp"
          alt="Why TST White House"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
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
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-shadow-hero"
          >
            Why <span className="gold-gradient-text text-shadow-gold">TST White House</span>
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

      {/* ═══ Horizontal Scroll Pillars ═══ */}
      <div ref={horizontalRef} className="relative" style={{ height: `${allPillarItems.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-[var(--bg-secondary)]">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-[var(--bg-tertiary)]">
            <motion.div style={{ width: progressWidth }} className="h-full gold-gradient-bg" />
          </div>

          {/* Sticky header */}
          <div className="absolute top-8 left-0 right-0 z-10 container-premium">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
                Our Pillars
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* Cards container */}
          <motion.div
            style={{ x }}
            className="flex items-center h-full gap-8 pl-[10vw] pr-[10vw]"
          >
            {allPillarItems.map((item, i) => (
              <div
                key={item.title}
                className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] xl:w-[38vw] h-[70vh] max-h-[600px]"
              >
                <div
                  className="group relative w-full h-full rounded-3xl overflow-hidden p-10 md:p-14 flex flex-col justify-between transition-all duration-700"
                  style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
                >
                  {/* Accent gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Gold top line */}
                  <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Pillar label */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-shadow duration-500">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-gold-500 font-semibold">
                        {item.pillar}
                      </span>
                    </div>

                    {/* Large number */}
                    <span className="font-display text-8xl md:text-9xl font-bold text-[var(--border-color)] leading-none select-none">
                      {item.number}
                    </span>

                    {/* Title */}
                    <h3 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description at bottom */}
                  <div className="relative z-10">
                    <div className="w-16 h-0.5 gold-gradient-bg rounded-full mb-6 group-hover:w-24 transition-all duration-700" />
                    <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Commitments CTA */}
      <section className="section-padding bg-[var(--bg-tertiary)] relative overflow-hidden">
        <div className="container-premium text-center">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              Our Commitment
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--text-primary)]">
              Building Trust,
              <br />
              <span className="gold-gradient-text">Delivering Excellence</span>
            </h2>
            <p className="mt-8 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
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
                className="px-8 py-4 border border-[var(--border-color)] text-[var(--text-primary)] text-sm font-medium uppercase tracking-wider rounded-full hover:bg-gold-500/10 transition-all duration-500"
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
