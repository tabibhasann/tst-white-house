"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--bg-tertiary)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-tertiary)] via-[var(--bg-tertiary)]/80 to-[var(--bg-tertiary)]" />
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4 font-medium"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--text-primary)]"
          >
            Contact <span className="gold-gradient-text">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Info */}
            <AnimatedSection>
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
                Reach Out
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
                Let&apos;s Build Something
                <br />
                <span className="gold-gradient-text">Together</span>
              </h2>
              <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
                Whether you&apos;re interested in our residential projects, trading
                services, or partnership opportunities, we&apos;d love to hear from
                you. Our team is ready to assist with any inquiries.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Phone</h3>
                    <a href="tel:+8801886773300" className="text-[var(--text-muted)] hover:text-gold-500 transition-colors">
                      (+880) 01886773300
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Email</h3>
                    <a href="mailto:info@tstwhitehouseltd.com" className="text-[var(--text-muted)] hover:text-gold-500 transition-colors">
                      info@tstwhitehouseltd.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Head Office</h3>
                    <p className="text-[var(--text-muted)]">
                      House 12, Road 12, Block D, Niketan,
                      <br />
                      Gulshan-1, Dhaka-1212
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Office Hours</h3>
                    <p className="text-[var(--text-muted)]">
                      Saturday – Thursday: 10 AM – 6 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Social</h3>
                    <a
                      href="https://www.facebook.com/tstwhitehouse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-gold-500 transition-colors"
                    >
                      facebook.com/tstwhitehouse
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2}>
              <form className="space-y-6 p-8 md:p-12 rounded-3xl gold-border" style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}>
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Send us a message
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-gold-500 focus:shadow-[0_0_0_3px_rgba(163,117,7,0.1)] transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-gold-500 focus:shadow-[0_0_0_3px_rgba(163,117,7,0.1)] transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-gold-500 focus:shadow-[0_0_0_3px_rgba(163,117,7,0.1)] transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-gold-500 focus:shadow-[0_0_0_3px_rgba(163,117,7,0.1)] transition-all duration-300"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-gold-500 focus:shadow-[0_0_0_3px_rgba(163,117,7,0.1)] transition-all duration-300">
                    <option value="">Select a topic</option>
                    <option value="project">Project Inquiry</option>
                    <option value="materials">Building Materials</option>
                    <option value="agro">Agro Commodities</option>
                    <option value="career">Career Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-gold-500 focus:shadow-[0_0_0_3px_rgba(163,117,7,0.1)] transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 gold-gradient-bg text-white font-medium uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(163,117,7,0.3)] transition-all duration-500"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-[400px] bg-[var(--bg-secondary)] flex items-center justify-center">
        <div className="text-center text-[var(--text-muted)]">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-gold-500" />
          <p className="font-display text-xl font-semibold text-[var(--text-primary)]">
            House 12, Road 12, Block D, Niketan, Gulshan-1, Dhaka-1212
          </p>
          <p className="text-sm mt-2">
            Visit us at our head office or contact us for directions
          </p>
        </div>
      </section>
    </>
  );
}
