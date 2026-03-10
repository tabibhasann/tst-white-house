"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Package, Truck, Globe, Phone } from "lucide-react";

export default function BuildingMaterialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/concerns/highlight-1.webp" alt="Building Materials" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-block text-xs uppercase tracking-[0.3em] text-gold-300 mb-4 font-medium">
            Our Concerns
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold">
            Building <span className="gold-gradient-text">Materials</span>
          </motion.h1>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">Trading Division</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
                Premium Construction <span className="gold-gradient-text">Materials</span>
              </h2>
              <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
                TST White House Ltd. is a leading importer and supplier of high-quality construction materials in Bangladesh. Our trading division specializes in sourcing premium materials from around the globe to meet the demanding standards of modern construction.
              </p>
              <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
                We import Dubai black stone (GABBRO) with a supply capacity of 100,000 metric tons per month. Our comprehensive materials catalog also includes Bitumen, Indian Pakur Stone, and local sand — all quality-verified to ensure structural excellence.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image src="/images/concerns/highlight-1.webp" alt="Building Materials" fill className="object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Materials */}
      <section className="section-padding bg-[var(--bg-secondary)]">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">What We Supply</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Our Materials</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Dubai GABBRO", desc: "Premium black stone imported directly from Dubai. 100,000 metric tons monthly capacity." },
              { icon: Package, title: "Bitumen", desc: "High-grade bitumen for road construction and waterproofing applications." },
              { icon: Truck, title: "Indian Pakur Stone", desc: "Quality stone from India for construction and finishing purposes." },
              { icon: Package, title: "Local Sand", desc: "Sourced and quality-verified local sand for all construction needs." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl h-full transition-all duration-700 hover:-translate-y-1" style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}>
                  <item.icon className="w-8 h-8 text-gold-500 mb-4" />
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">Portfolio</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Recent Highlights</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["/images/concerns/highlight-1.webp", "/images/concerns/highlight-2.webp"].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="aspect-[16/10] rounded-3xl overflow-hidden">
                  <Image src={img} alt={`Highlight ${i + 1}`} width={800} height={500} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.2s] ease-out" />
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Need Construction Materials?</h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">Contact us for bulk orders, pricing, and delivery information.</p>
            <a href="tel:+8801886773300" className="inline-flex items-center gap-2 px-8 py-4 gold-gradient-bg text-white text-sm font-medium uppercase tracking-wider rounded-full">
              <Phone className="w-4 h-4" /> Contact Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
