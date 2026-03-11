"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Wheat, Droplets, Bean, Phone } from "lucide-react";

export default function AgroPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-[var(--bg-tertiary)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-tertiary)] via-[var(--bg-tertiary)] to-[var(--bg-primary)]" />
        <div className="relative z-10 text-center px-6">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4 font-medium">
            Our Concerns
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--text-primary)]">
            Essential <span className="gold-gradient-text">Agro Commodities</span>
          </motion.h1>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium max-w-4xl">
          <AnimatedSection className="text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              Nourishing the Nation with <span className="gold-gradient-text">Quality Commodities</span>
            </h2>
            <p className="mt-8 text-lg text-[var(--text-secondary)] leading-relaxed">
              Beyond real estate, TST White House Ltd. plays a vital role in Bangladesh&apos;s agro commodity sector. We trade essential food commodities — ensuring quality, reliability, and timely delivery to meet the nation&apos;s growing demands.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-[var(--bg-secondary)]">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">Our Products</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">What We Trade</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Wheat, title: "Sugar", desc: "Premium quality sugar sourced and distributed to meet industrial and consumer demands across Bangladesh." },
              { icon: Bean, title: "Red Lentils", desc: "Essential protein-rich lentils — a staple of Bangladeshi cuisine — traded with consistency and quality assurance." },
              { icon: Droplets, title: "Edible Oil", desc: "High-grade edible oils for cooking and food processing, sourced from trusted suppliers worldwide." },
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Interested in Agro Trading?</h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">Reach out for partnership opportunities and bulk trading inquiries.</p>
            <a href="tel:+8801886773300" className="group relative inline-flex items-center gap-2 px-8 py-4 gold-gradient-bg text-white text-sm font-medium uppercase tracking-wider rounded-full overflow-hidden hover:shadow-[0_0_40px_rgba(163,117,7,0.4)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2"><Phone className="w-4 h-4" /> Get in Touch</span>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
