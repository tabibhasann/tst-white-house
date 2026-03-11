"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountUp } from "@/components/CountUp";
import { ArrowRight, Building2, Truck, Wheat, HardHat } from "lucide-react";

const directors = [
  {
    name: "Tahmina Afrose Tanna",
    title: "Chairman",
    image: "/images/team/chairman.png",
    bio: "Tahmina Afrose Tanna leads TST White House Ltd. with a vision rooted in innovation, sustainability, and excellence. With over a decade of experience in real estate and business management, she drives the company's strategic direction and ensures each project reflects the highest standards of quality and trust.",
  },
  {
    name: "Golam Murshed",
    title: "Managing Director",
    image: "/images/team/md.jpg",
    bio: "As Managing Director, Golam Murshed brings deep industry expertise and operational acumen to TST White House Ltd. His leadership ensures the seamless execution of projects, combining technical precision with a client-first approach that defines the company's success.",
  },
];

const verticals = [
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Premium residential projects in prime locations across Dhaka, combining modern design with sustainable living.",
    link: "/projects",
    gradient: "from-amber-500/10 to-yellow-500/10",
  },
  {
    icon: HardHat,
    title: "Mega Structures",
    desc: "Large-scale infrastructure projects including highways, bridges, and girders that shape the nation's growth.",
    link: "/concerns/mega-structure",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: Truck,
    title: "Building Materials",
    desc: "Import and supply of premium construction materials including Dubai GABBRO black stone, Bitumen, and more.",
    link: "/concerns/building-materials",
    gradient: "from-emerald-500/10 to-green-500/10",
  },
  {
    icon: Wheat,
    title: "Agro Commodities",
    desc: "Trading of essential agro products — sugar, red lentils, and edible oil — serving national needs.",
    link: "/concerns/agro",
    gradient: "from-orange-500/10 to-red-500/10",
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black"
      >
        <motion.div style={{ y: heroImgY, scale: heroScale }} className="absolute inset-0 opacity-30">
          <Image
            src="/images/about/about-bg.webp"
            alt="About TST White House"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--bg-primary)]" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-300 mb-4 font-medium"
          >
            <span className="w-8 h-px bg-gold-300/60" />
            Redefining Homes
            <span className="w-8 h-px bg-gold-300/60" />
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            About <span className="gold-gradient-text">TST White House</span>
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
                <span className="w-8 h-px bg-gold-500" />
                Our Philosophy
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight">
                Build. Decorate.
                <br />
                <span className="gold-gradient-text">Experience.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  TST White House Ltd. is a leading Bangladeshi real estate company
                  dedicated to redefining modern living. With expertise spanning
                  real estate development, mega structures, and trading of building
                  materials and agro commodities, we deliver innovative solutions
                  that shape the future of urban development.
                </p>
                <p>
                  Founded in 2023 and headquartered in Dhaka, we stand at the
                  forefront of Bangladesh&apos;s growth story. Our name embodies our
                  core values — Trust, Symbol, and Tranquility — principles that
                  guide every project we undertake and every relationship we build.
                </p>
                <p>
                  We are not just building lifeless structures. Our philosophy is to
                  create spaces that inspire and energize the people living inside
                  them. From architectural design to interior finishing, every detail
                  reflects our commitment to excellence.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats row */}
          <AnimatedSection className="mt-20 md:mt-28">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { end: 2023, suffix: "", label: "Founded", duration: 1.5 },
                { end: 3, suffix: "+", label: "Projects", duration: 1 },
                { end: 4, suffix: "", label: "Business Verticals", duration: 1 },
                { end: 100, suffix: "%", label: "Commitment", duration: 1.2 },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="text-center p-6 rounded-2xl"
                  style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
                >
                  <span className="block text-3xl md:text-4xl font-display font-bold gold-gradient-text">
                    <CountUp end={stat.end} suffix={stat.suffix} duration={stat.duration} />
                  </span>
                  <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Business Verticals */}
      <section className="section-padding bg-[var(--bg-secondary)] relative">
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: "var(--section-divider)" }} />
        <div className="container-premium relative">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
              <span className="w-8 h-px bg-gold-500" />
              What We Do
              <span className="w-8 h-px bg-gold-500" />
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Our Business Verticals
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <Link href={item.link} className="group block h-full">
                  <div
                    className="h-full p-8 rounded-3xl relative overflow-hidden transition-all duration-700 hover:-translate-y-1"
                    style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-shadow duration-500">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] text-gold-500 font-semibold uppercase tracking-wider">
                        0{i + 1}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold text-[var(--text-primary)] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-gold-500 text-sm font-medium group-hover:gap-2 transition-all duration-300">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section-padding bg-[var(--bg-primary)] relative">
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: "var(--section-divider)" }} />
        <div className="container-premium relative">
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
              <span className="w-8 h-px bg-gold-500" />
              Leadership
              <span className="w-8 h-px bg-gold-500" />
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
              Board of Directors
            </h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in real
              estate, business management, and strategic vision.
            </p>
          </AnimatedSection>

          <div className="space-y-16 md:space-y-24 max-w-5xl mx-auto">
            {directors.map((director, i) => (
              <AnimatedSection key={director.name} delay={i * 0.2}>
                <div className="group grid grid-cols-1 md:grid-cols-5 gap-0 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-1" style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}>
                  {/* Portrait */}
                  <div className={`relative md:col-span-2 aspect-[3/4] md:aspect-auto md:min-h-[400px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-none" />
                    {/* Gold accent corner */}
                    <div className={`absolute top-0 ${i % 2 === 1 ? "right-0" : "left-0"} w-24 h-24`}>
                      <div className={`absolute top-0 ${i % 2 === 1 ? "right-0" : "left-0"} w-full h-full bg-gradient-to-br from-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${i % 2 === 1 ? "rounded-bl-full" : "rounded-br-full"}`} />
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`md:col-span-3 p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <span className="text-gold-500 text-xs tracking-widest uppercase font-semibold">
                      {director.title}
                    </span>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                      {director.name}
                    </h3>
                    <div className="mt-4 w-16 h-0.5 gold-gradient-bg rounded-full group-hover:w-24 transition-all duration-700" />
                    <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
                      {director.bio}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
              <span className="w-8 h-px bg-gold-500" />
              Trusted By
              <span className="w-8 h-px bg-gold-500" />
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-[var(--text-primary)]">
              Our Partners
            </h2>
          </AnimatedSection>
          <AnimatedSection className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {[
              { src: "/images/partners/advanced-insight.png", alt: "Advanced Insight" },
              { src: "/images/partners/majesto.png", alt: "Majesto Limited" },
              { src: "/images/partners/wlogo.png", alt: "Partner" },
            ].map((p) => (
              <div key={p.alt} className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-700 hover:scale-105">
                <Image src={p.src} alt={p.alt} width={140} height={60} className="h-12 md:h-16 w-auto object-contain" />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
