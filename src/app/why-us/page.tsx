"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Palette, Sun, Wind, Shield, Leaf, Building2, Sofa } from "lucide-react";

const pillars = [
  {
    category: "Functional Design",
    categoryIcon: Building2,
    number: "01",
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
    number: "02",
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
    number: "03",
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

function PillarShowcase({ pillar, index }: { pillar: typeof pillars[number]; index: number }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const numberY = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);

  const isReversed = index % 2 === 1;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden"
      style={{ background: index % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-primary)" }}
    >
      {/* Massive parallax background number */}
      <motion.div
        style={{ y: numberY }}
        className={`absolute ${isReversed ? "left-0 md:left-10" : "right-0 md:right-10"} top-1/2 -translate-y-1/2 pointer-events-none select-none`}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[30vw] md:text-[22vw] font-bold leading-none opacity-[0.04]"
          style={{ color: "var(--text-primary)" }}
        >
          {pillar.number}
        </motion.span>
      </motion.div>

      {/* Animated vertical accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute ${isReversed ? "right-6 md:right-16" : "left-6 md:left-16"} top-16 bottom-16 w-px origin-top`}
        style={{ background: "linear-gradient(to bottom, transparent, rgba(163,117,7,0.3), transparent)" }}
      />

      {/* Floating decorative dots */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute ${isReversed ? "left-[20%]" : "right-[20%]"} top-[25%] w-2 h-2 rounded-full bg-gold-500/30`}
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className={`absolute ${isReversed ? "right-[30%]" : "left-[30%]"} bottom-[20%] w-3 h-3 rounded-full bg-gold-500/20`}
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className={`absolute ${isReversed ? "left-[40%]" : "right-[40%]"} top-[60%] w-4 h-4 border border-gold-500/20 rounded-sm`}
      />

      <div className="container-premium relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Pillar info side */}
          <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
            {/* Icon + horizontal line */}
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 h-16 rounded-2xl gold-gradient-bg flex items-center justify-center shadow-lg shadow-gold-500/20">
                <pillar.categoryIcon className="w-8 h-8 text-white" />
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent"
              />
            </motion.div>

            {/* Pillar label */}
            <div className="overflow-hidden mb-2">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold"
              >
                Pillar {pillar.number}
              </motion.span>
            </div>

            {/* Category name - dramatic reveal from below */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 120 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] leading-[0.95]"
              >
                {pillar.category}
              </motion.h2>
            </div>

            {/* Growing gold underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "5rem" } : {}}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-1 gold-gradient-bg rounded-full mt-8"
            />
          </div>

          {/* Cards side */}
          <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
            {pillar.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isReversed ? -60 : 60, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="group relative p-7 rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
                >
                  {/* Hover gold accents */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.02] to-gold-500/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all duration-500">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-gold-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--bg-primary)]" />
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

      {/* Intro with animated text */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              Creating spaces that{" "}
              <span className="gold-gradient-text">inspire and energize</span>{" "}
              the people living inside them.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto"
          >
            Our approach to real estate goes beyond construction. We focus on
            three core pillars — Functional Design, Quality Materials, and
            Aesthetics — to deliver homes that are as beautiful as they are
            practical.
          </motion.p>
          {/* Animated divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-1 gold-gradient-bg rounded-full mt-12 mx-auto"
          />
        </div>
      </section>

      {/* Full-Screen Pillar Showcases */}
      {pillars.map((pillar, i) => (
        <PillarShowcase key={pillar.category} pillar={pillar} index={i} />
      ))}

      {/* Commitments CTA */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -top-32 w-64 h-64 border border-gold-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -left-20 -bottom-20 w-48 h-48 border border-gold-500/10 rounded-full"
        />

        <div className="container-premium text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
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
                className="group relative px-8 py-4 gold-gradient-bg text-white text-sm font-medium uppercase tracking-wider rounded-full overflow-hidden hover:shadow-[0_0_40px_rgba(163,117,7,0.4)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
