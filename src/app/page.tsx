"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  MapPin,
  Clock,
  Star,
  Heart,
  Home,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    name: "TST Prime",
    slug: "tst-prime",
    location: "Plot-41, Road-512, Sector-11, Jolshiri Abashon",
    size: "2800 sqft",
    type: "Residential",
    status: "Ongoing",
    image: "/images/projects/prime/prime-2.jpg",
  },
  {
    name: "TST Prestige",
    slug: "tst-prestige",
    location: "Plot-005, Road-505C, Sector-16, Jolshiri Abashon",
    size: "2850 sqft",
    type: "Residential",
    status: "Ongoing",
    image: "/images/projects/prestige/prestige-2.webp",
  },
  {
    name: "TST Shopnil",
    slug: "tst-shopnil",
    location: "Plot-013, Road-501A, Sector-09, Jolshiri Abashon",
    size: "2850 sqft",
    type: "Residential",
    status: "Upcoming",
    image: "/images/projects/shopnil/shopnil-1.webp",
  },
];

const strengths = [
  {
    icon: Cpu,
    title: "Smart & Sustainable",
    description:
      "Advanced air purification, renewable energy sources, and eco-friendly materials that reduce your environmental footprint.",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description:
      "Live at the heart of Jolshiri Abashon — stunning views, vibrant communities, and a premium lifestyle with short commutes.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Flawless execution and transparent communication to ensure your dream home is delivered on schedule, every time.",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: Star,
    title: "Quality at Core",
    description:
      "Pioneering real estate with an unwavering commitment to excellence, shaping the future of living through innovation.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description:
      "Personalized service and long-term relationships built on trust, transparency, and genuine care for our clients.",
    gradient: "from-rose-500/10 to-red-500/10",
  },
];

const galleryImages = [
  "/images/gallery/prime-1.webp",
  "/images/gallery/prestige-1.webp",
  "/images/gallery/shopnil-1.webp",
  "/images/gallery/prime-2.webp",
  "/images/gallery/prestige-2.webp",
  "/images/gallery/shopnil-2.webp",
  "/images/gallery/prime-3.webp",
  "/images/gallery/prestige-3.webp",
  "/images/gallery/prime-4.webp",
  "/images/gallery/shopnil-3.webp",
];

export default function HomePage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const landownerRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroTextY = useTransform(heroProgress, [0, 1], ["0%", "80%"]);

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyImgY = useTransform(storyProgress, [0, 1], ["10%", "-10%"]);

  const { scrollYProgress: landProgress } = useScroll({
    target: landownerRef,
    offset: ["start end", "end start"],
  });
  const landBuildingY = useTransform(landProgress, [0, 1], ["20%", "-15%"]);
  const landTextY = useTransform(landProgress, [0, 1], ["0%", "-30%"]);
  const landScale = useTransform(landProgress, [0, 1], [1.1, 1]);
  const landPoolY = useTransform(landProgress, [0, 1], ["0%", "50%"]);
  const landPoolOpacity = useTransform(landProgress, [0, 0.5, 1], [0.6, 0.3, 0]);
  const landOverlayOpacity = useTransform(landProgress, [0, 0.3], [0.85, 0.6]);
  const landBottomHeight = useTransform(landProgress, [0, 1], ["120px", "200px"]);
  const landGoldLineScale = useTransform(landProgress, [0.3, 0.6], [0, 1]);

  return (
    <>
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-black">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 opacity-50"
        >
          <Image
            src="/images/hero/hero-1.jpg"
            alt="TST White House - The New Way of Building"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Premium dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroTextY }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] text-gold-300 mb-6 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Trusted Spaces for Tomorrow
              <Sparkles className="w-3.5 h-3.5" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9]"
          >
            THE NEW WAY
            <br />
            <span className="gold-gradient-text">
              OF BUILDING
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg md:text-xl text-white/70 max-w-xl font-light"
          >
            Transform your dreams into reality with every real estate solution
            and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/projects"
              className="group relative px-8 py-4 gold-gradient-bg text-white text-sm font-medium uppercase tracking-wider rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(163,117,7,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="group px-8 py-4 border border-white/30 text-white text-sm font-medium uppercase tracking-wider rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/60"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="w-1 h-1.5 bg-white/60 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ ABOUT / STORY — PARALLAX TEXT REVEAL ═══════════════ */}
      <section
        ref={storyRef}
        className="relative section-padding bg-[var(--bg-primary)] overflow-hidden"
      >
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
                <span className="w-8 h-px bg-gold-500" />
                Our Story
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-[var(--text-primary)]">
                We Build Stories
                <br />
                <span className="gold-gradient-text">That Last</span>
              </h2>
              <p className="mt-8 text-lg text-[var(--text-secondary)] leading-relaxed">
                We are not just building lifeless structures. Our philosophy is
                to create spaces that inspire and energize the people living
                inside them.
              </p>
              <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
                TST White House Ltd., established in 2023 in Dhaka, Bangladesh,
                is a visionary real estate development company founded on the
                values of Trust, Symbol, and Tranquility (TST). At the forefront
                of modern urban growth, we focus on delivering premium
                residential and commercial projects that redefine luxury living.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 mt-10 text-gold-500 font-medium text-sm uppercase tracking-wider"
              >
                <span className="relative">
                  Learn More About Us
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <motion.div
                  style={{ y: storyImgY }}
                  className="aspect-[4/5] rounded-3xl overflow-hidden"
                >
                  <Image
                    src="/images/about/about-bg.webp"
                    alt="TST White House - We Build Stories That Last"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/30 to-transparent" />
                </motion.div>
                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 p-6 md:p-8 rounded-2xl card-elevated gold-border backdrop-blur-sm"
                  style={{ background: "var(--card-bg)" }}
                >
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <span className="block text-3xl md:text-4xl font-display font-bold gold-gradient-text">
                        3+
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                        Projects
                      </span>
                    </div>
                    <div className="w-px h-10 bg-[var(--border-color)]" />
                    <div className="text-center">
                      <span className="block text-3xl md:text-4xl font-display font-bold gold-gradient-text">
                        2023
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                        Founded
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS SECTION ═══════════════ */}
      <section className="section-padding bg-[var(--bg-secondary)] relative">
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: "var(--section-divider)" }} />
        <div className="container-premium relative">
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
              <span className="w-8 h-px bg-gold-500" />
              Portfolio
              <span className="w-8 h-px bg-gold-500" />
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
              Our Projects
            </h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each project is a testament to our commitment to excellence,
              innovation, and the art of refined living.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 0.15}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-black/40 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-6 right-6">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                          project.status === "Ongoing"
                            ? "gold-gradient-bg text-white shadow-lg shadow-gold-500/20"
                            : "bg-white/20 backdrop-blur-md text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-3 font-medium">
                        <Home className="w-3.5 h-3.5" />
                        {project.type} &middot; {project.size}
                      </div>
                      <h3 className="font-display text-3xl font-bold text-white mb-2">
                        {project.name}
                      </h3>
                      <p className="text-white/80 text-sm flex items-center gap-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        {project.location}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-gold-300 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                        View Project
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Hover shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 via-transparent to-gold-500/10" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-gold-500/60 text-gold-500 text-sm font-medium uppercase tracking-wider rounded-full hover:bg-gold-500 hover:text-white hover:border-gold-500 hover:shadow-[0_0_30px_rgba(163,117,7,0.3)] transition-all duration-500"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ OUR APPROACH — EQUAL CARDS + HOVER ═══════════════ */}
      <section className="section-padding bg-[var(--bg-primary)] relative">
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: "var(--section-divider)" }} />
        <div className="container-premium relative">
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
              <span className="w-8 h-px bg-gold-500" />
              Our Unique Approach
              <span className="w-8 h-px bg-gold-500" />
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
              Development. Interior. Furniture.
            </h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              We help you with every aspect to transform a place that you just
              own, to a place that you live in.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Development",
                desc: "From foundation to finishing, we build with precision, using cutting-edge construction techniques and premium materials.",
                img: "/images/approach/development-1.webp",
              },
              {
                title: "Interior",
                desc: "Thoughtfully designed interiors that balance aesthetics with functionality, creating spaces you truly love.",
                img: "/images/approach/interior-1.png",
              },
              {
                title: "Furniture",
                desc: "Curated furniture solutions that complement your space, bringing comfort and style to every corner.",
                img: "/images/approach/furniture-1.webp",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="group relative h-full">
                  {/* Fixed equal height container */}
                  <div className="relative h-[500px] md:h-[560px] rounded-3xl overflow-hidden cursor-pointer">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-[1.2s] ease-out group-hover:scale-110"
                    />
                    {/* Overlay that darkens on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/90 group-hover:via-black/40 transition-all duration-700" />

                    {/* Number & title always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="text-gold-400 text-xs font-mono tracking-widest">
                        0{i + 1}
                      </span>
                      <h3 className="mt-2 font-display text-3xl font-bold text-white">
                        {item.title}
                      </h3>
                      {/* Description reveals on hover */}
                      <div className="overflow-hidden">
                        <p className="mt-3 text-white/60 text-sm leading-relaxed max-h-0 group-hover:max-h-24 transition-all duration-700 ease-out">
                          {item.desc}
                        </p>
                      </div>
                      {/* Animated line */}
                      <div className="mt-4 h-px bg-gradient-to-r from-gold-500 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                    </div>

                    {/* Top corner glow on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ LANDOWNER — DRAMATIC CINEMATIC EXPERIENCE ═══════════════ */}
      <section
        ref={landownerRef}
        className="relative h-screen overflow-hidden"
      >
        {/* Layer 1: Building with dramatic parallax and scale */}
        <motion.div
          style={{ y: landBuildingY, scale: landScale }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/about/land-owner-home.webp"
            alt="Premium residence with pool"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Layer 2: Floating pool glow effect */}
        <motion.div
          style={{ y: landPoolY, opacity: landPoolOpacity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-gold-500/20 via-blue-500/10 to-transparent blur-3xl z-[1]"
        />

        {/* Layer 3: Dark gradient overlay with animated reveal */}
        <motion.div
          style={{ opacity: landOverlayOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-[2]"
        />

        {/* Layer 4: Animated bottom blend */}
        <motion.div
          style={{ height: landBottomHeight }}
          className="absolute bottom-0 left-0 right-0 z-[3] bg-gradient-to-t from-[var(--bg-secondary)] via-[var(--bg-secondary)]/80 to-transparent"
        />

        {/* Layer 5: Floating particles */}
        <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Text content with dramatic reveal */}
        <div className="relative z-10 container-premium h-full flex items-center">
          <motion.div style={{ y: landTextY }} className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-300 font-semibold"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-gold-300/60"
              />
              If You Are A Landowner
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
            >
              {["Give Your Lands", "A Value Of", "Their Worth"].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line === "Their Worth" ? (
                    <span className="gold-gradient-text">{line}</span>
                  ) : (
                    line
                  )}
                  <br />
                </motion.div>
              ))}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed"
            >
              Partner with us to transform your land into premium developments
              that maximize value and create lasting legacies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 mt-10 px-10 py-4 gold-gradient-bg text-white text-sm font-medium uppercase tracking-wider rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Partner With Us
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative gold line at bottom */}
        <motion.div
          style={{ scaleX: landGoldLineScale }}
          className="absolute bottom-0 left-0 w-full h-1 gold-gradient-bg z-[4] origin-left"
        />
      </section>

      {/* ═══════════════ STRENGTHS — BENTO GRID ═══════════════ */}
      <section className="section-padding bg-[var(--bg-secondary)] relative">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
              <span className="w-8 h-px bg-gold-500" />
              Why Choose Us
              <span className="w-8 h-px bg-gold-500" />
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
              What You Can <span className="gold-gradient-text">Expect</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              We hold ourselves to the highest standards in every aspect of our
              work — from location selection to final delivery.
            </p>
          </AnimatedSection>

          {/* Bento-style grid: 2 large on top, 3 on bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {strengths.map((s, i) => (
              <AnimatedSection
                key={s.title}
                delay={i * 0.1}
                className={
                  i < 2
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
                }
              >
                <div
                  className={`group relative p-8 md:p-10 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-1 ${
                    i < 2 ? "min-h-[240px]" : "min-h-[220px]"
                  }`}
                  style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
                >
                  {/* Colored gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />
                  {/* Gold accent line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-shadow duration-500">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ GALLERY MARQUEE ═══════════════ */}
      <section className="py-24 bg-[var(--bg-primary)] overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: "var(--section-divider)" }} />
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
            <span className="w-8 h-px bg-gold-500" />
            Gallery
            <span className="w-8 h-px bg-gold-500" />
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            A Glimpse of Excellence
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="flex animate-marquee gap-6">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="group flex-shrink-0 w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden relative"
              >
                <Image
                  src={img}
                  alt={`Gallery ${(i % galleryImages.length) + 1}`}
                  width={320}
                  height={427}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PARTNERS ═══════════════ */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
              <span className="w-8 h-px bg-gold-500" />
              Trusted By
              <span className="w-8 h-px bg-gold-500" />
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Our Partners
            </h2>
          </AnimatedSection>

          <AnimatedSection className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {[
              { src: "/images/partners/advanced-insight.png", alt: "Advanced Insight" },
              { src: "/images/partners/majesto.png", alt: "Majesto Limited" },
              { src: "/images/partners/wlogo.png", alt: "Partner" },
            ].map((partner) => (
              <div
                key={partner.alt}
                className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-700 hover:scale-105"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={140}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ CONTACT SECTION ═══════════════ */}
      <section className="section-padding bg-[var(--bg-primary)] relative" id="contact">
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: "var(--section-divider)" }} />
        <div className="container-premium relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
                <span className="w-8 h-px bg-gold-500" />
                Let&apos;s Connect
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
                How Can We{" "}
                <span className="gold-gradient-text">Help?</span>
              </h2>
              <p className="mt-6 text-[var(--text-secondary)] text-lg">
                Whether you&apos;re looking for your dream home, exploring
                investment opportunities, or want to partner with us, we&apos;d
                love to hear from you.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "(+880) 01886773300",
                    href: "tel:+8801886773300",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@tstwhitehouseltd.com",
                    href: "mailto:info@tstwhitehouseltd.com",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "H-12/A, R-110, Gulshan 2, Dhaka 1212",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="group flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-shadow duration-500">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[var(--text-primary)] font-medium hover:text-gold-500 transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[var(--text-primary)] font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div
                className="p-8 md:p-12 rounded-3xl gold-border"
                style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
              >
                <form className="space-y-5">
                  {[
                    { type: "text", placeholder: "Your Name" },
                    { type: "email", placeholder: "Your Email" },
                    { type: "tel", placeholder: "Your Phone" },
                  ].map((field) => (
                    <input
                      key={field.placeholder}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-5 py-4 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-gold-500 focus:shadow-[0_0_0_3px_rgba(163,117,7,0.1)] transition-all duration-300"
                    />
                  ))}
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-5 py-4 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-gold-500 focus:shadow-[0_0_0_3px_rgba(163,117,7,0.1)] transition-all duration-300 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 gold-gradient-bg text-white font-medium uppercase tracking-wider rounded-2xl hover:shadow-[0_0_30px_rgba(163,117,7,0.3)] transition-all duration-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
