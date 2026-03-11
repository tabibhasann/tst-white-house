"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Palette, Sun, Wind, Shield, Leaf, Building2, Sofa, Sparkles } from "lucide-react";

const pillars = [
  {
    category: "Functional Design",
    categoryIcon: Building2,
    gradient: "from-amber-500/20 to-orange-500/20",
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
    gradient: "from-blue-500/20 to-indigo-500/20",
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
    gradient: "from-purple-500/20 to-pink-500/20",
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <>
      {/* Hero with dramatic reveal */}
      <section className="relative h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/hero-2.webp"
            alt="Why TST White House"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 w-16 h-16 border-2 border-gold-500/30 rounded-full"
            />
            <motion.span className="inline-block text-xs uppercase tracking-[0.3em] text-gold-300 mb-6 font-medium">
              Homes Personalized
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Why <span className="gold-gradient-text">TST White House</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            We don&apos;t just build homes — we craft personalized living
            experiences that inspire, comfort, and endure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/40 text-xs uppercase tracking-widest flex items-center gap-2"
            >
              <span>Scroll to explore</span>
              <Sparkles className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro with dramatic reveal */}
      <section className="section-padding bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="container-premium max-w-4xl text-center">
          <AnimatedSection>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight"
            >
              Creating spaces that{" "}
              <span className="gold-gradient-text">inspire and energize</span>{" "}
              the people living inside them.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto"
            >
              Our approach to real estate goes beyond construction. We focus on
              three core pillars — Functional Design, Quality Materials, and
              Aesthetics — to deliver homes that are as beautiful as they are
              practical.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Super impressive pillar cards with 3D effects */}
      <section className="section-padding bg-[var(--bg-secondary)] relative overflow-hidden" ref={containerRef}>
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container-premium">
          <div className="space-y-32">
            {pillars.map((pillar, pi) => (
              <div key={pillar.category} className="relative">
                {/* Category header with reveal */}
                <AnimatedSection>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 mb-16"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl gold-gradient-bg flex items-center justify-center shadow-lg shadow-gold-500/20"
                    >
                      <pillar.categoryIcon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
                        Pillar 0{pi + 1}
                      </span>
                      <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                        {pillar.category}
                      </h2>
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Cards with 3D hover effect */}
                <div className={`grid grid-cols-1 ${pillar.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-8`}>
                  {pillar.items.map((item, i) => (
                    <AnimatedSection key={item.title} delay={i * 0.2}>
                      <motion.div
                        initial={{ opacity: 0, y: 60, rotateX: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative"
                        style={{ perspective: 1000 }}
                      >
                        {/* Card */}
                        <div className="relative p-8 md:p-10 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl h-full" style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}>
                          {/* Animated gradient background */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                          />

                          {/* Gold corner glow */}
                          <motion.div
                            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"
                          />

                          {/* Content */}
                          <div className="relative z-10">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-6 shadow-lg"
                            >
                              <item.icon className="w-7 h-7 text-white" />
                            </motion.div>

                            <motion.h3
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                              className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-gold-500 transition-colors"
                            >
                              {item.title}
                            </motion.h3>

                            <p className="text-[var(--text-muted)] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          {/* Bottom accent line */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                            className="absolute bottom-0 left-0 h-1 gold-gradient-bg rounded-full"
                          />
                        </div>
                      </motion.div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments CTA with dramatic reveal */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-premium text-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
                Our Commitment
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Building Trust,
              <br />
              <span className="gold-gradient-text">Delivering Excellence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-lg text-white/50 max-w-2xl mx-auto"
            >
              Every project we undertake is a promise kept. A commitment to
              quality, transparency, and the relentless pursuit of creating
              homes that exceed expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="px-10 py-4 gold-gradient-bg text-white text-sm font-medium uppercase tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(163,117,7,0.4)] transition-all duration-500 inline-flex items-center gap-2"
                >
                  View Our Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="px-10 py-4 border border-white/20 text-white text-sm font-medium uppercase tracking-wider rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-500"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
