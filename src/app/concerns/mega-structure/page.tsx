"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Landmark, Route, BrickWall, Phone } from "lucide-react";

export default function MegaStructurePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/concerns/highlight-2.webp" alt="Mega Structure" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--bg-primary)]" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-block text-xs uppercase tracking-[0.3em] text-gold-300 mb-4 font-medium">
            Our Concerns
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold">
            Mega <span className="gold-gradient-text">Structure</span>
          </motion.h1>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium max-w-4xl">
          <AnimatedSection className="text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              Building the <span className="gold-gradient-text">Infrastructure of Tomorrow</span>
            </h2>
            <p className="mt-8 text-lg text-[var(--text-secondary)] leading-relaxed">
              TST White House Ltd. is actively involved in large-scale infrastructure development — contributing to national progress through the construction of highways, bridges, and structural components that form the backbone of modern Bangladesh.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-[var(--bg-secondary)]">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">Capabilities</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">What We Build</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Route, title: "Highways", desc: "Modern highway construction with durable materials and engineering precision, connecting cities and communities." },
              { icon: Landmark, title: "Bridges", desc: "Structurally sound bridge construction that meets international safety standards and supports national connectivity." },
              { icon: BrickWall, title: "Girders & Components", desc: "Manufacturing and supply of structural girders and components for large-scale infrastructure projects." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="text-center p-10 rounded-3xl h-full transition-all duration-700 hover:-translate-y-1" style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}>
                  <div className="w-16 h-16 mx-auto rounded-2xl gold-gradient-bg flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-tertiary)]">
        <div className="container-premium text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Partner With Us on Infrastructure</h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">Let&apos;s discuss how we can contribute to your next mega project.</p>
            <a href="tel:+8801886773300" className="group relative inline-flex items-center gap-2 px-8 py-4 gold-gradient-bg text-white text-sm font-medium uppercase tracking-wider rounded-full overflow-hidden hover:shadow-[0_0_40px_rgba(163,117,7,0.4)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2"><Phone className="w-4 h-4" /> Contact Us</span>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
