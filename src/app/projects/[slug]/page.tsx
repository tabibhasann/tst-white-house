"use client";

import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowLeft, MapPin, Home, ArrowRight, Phone, Mail, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const projectsData: Record<string, {
  name: string;
  tagline: string;
  location: string;
  type: string;
  status: string;
  heroImage: string;
  images: string[];
  infoImage: string;
  description: string[];
  features: string[];
}> = {
  "tst-prime": {
    name: "TST Prime",
    tagline: "Where Premium Meets Prime",
    location: "Plot-41, Road-512, Sector-11, Jolshiri Abashon",
    type: "Residential",
    status: "Ongoing",
    heroImage: "/images/projects/prime/prime-2.jpg",
    images: [
      "/images/projects/prime/prime-1.png",
      "/images/projects/prime/prime-2.jpg",
      "/images/projects/prime/prime-3.png",
    ],
    infoImage: "/images/projects/prime/info.webp",
    description: [
      "TST Prime is our flagship residential project, strategically located in the heart of Jolshiri Abashon. This premium development brings together modern architectural excellence with smart living features.",
      "Every unit is designed to maximize natural light, cross-ventilation, and functional space utilization. Premium fittings, sustainable building materials, and cutting-edge security systems make TST Prime the definitive choice for discerning homebuyers.",
    ],
    features: [
      "Premium location in Jolshiri Abashon Sector-11",
      "Modern architectural design",
      "Smart home-ready infrastructure",
      "Advanced security systems",
      "Earthquake-resistant structure",
      "Dedicated parking facilities",
      "Community spaces and landscaping",
      "High-quality imported fittings",
    ],
  },
  "tst-prestige": {
    name: "TST Prestige",
    tagline: "Elegance Redefined",
    location: "Plot-005, Road-505C, Sector-16, Jolshiri Abashon",
    type: "Residential",
    status: "Ongoing",
    heroImage: "/images/projects/prestige/prestige-2.webp",
    images: [
      "/images/projects/prestige/prestige-1.webp",
      "/images/projects/prestige/prestige-2.webp",
      "/images/projects/prestige/prestige-3.webp",
    ],
    infoImage: "/images/projects/prestige/info.webp",
    description: [
      "TST Prestige embodies sophistication and refined living. Located in the prestigious Sector-16 of Jolshiri Abashon, this development offers an unmatched living experience.",
      "With meticulously planned layouts, premium materials, and attention to every detail, TST Prestige is designed for those who appreciate the finer things in life. Each apartment is a masterpiece of modern design and timeless elegance.",
    ],
    features: [
      "Prime Sector-16 location",
      "Spacious and elegant floor plans",
      "Premium imported fittings and finishes",
      "Lush green surroundings",
      "24/7 security surveillance",
      "Dedicated parking",
      "Modern amenities",
      "Seismic-resistant construction",
    ],
  },
  "tst-shopnil": {
    name: "TST Shopnil",
    tagline: "Dreams Taking Shape",
    location: "Plot-013, Road-501A, Sector-09, Jolshiri Abashon",
    type: "Residential",
    status: "Upcoming",
    heroImage: "/images/projects/shopnil/shopnil-1.webp",
    images: [
      "/images/projects/shopnil/shopnil-1.webp",
      "/images/projects/shopnil/shopnil-2.webp",
    ],
    infoImage: "/images/projects/shopnil/info.webp",
    description: [
      "TST Shopnil is our upcoming residential masterpiece in Sector-09 of Jolshiri Abashon. This project promises to set new benchmarks in luxury residential living.",
      "With innovative design concepts, premium construction materials, and a focus on sustainable living, TST Shopnil will offer a living experience that goes beyond expectations.",
    ],
    features: [
      "Strategic Sector-09 location",
      "Innovative architectural design",
      "Sustainable building practices",
      "Smart living features",
      "Premium quality construction",
      "Green spaces and amenities",
      "Comprehensive security systems",
      "Future-ready infrastructure",
    ],
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)]">
            Project Not Found
          </h1>
          <Link href="/projects" className="mt-4 inline-flex items-center gap-2 text-gold-500">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  const galleryCount = project.images.length;

  return (
    <>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {galleryCount > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.images[lightboxIndex]}
                alt={`${project.name} ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightboxIndex ? "bg-gold-500 w-6" : "bg-white/40 hover:bg-white/60"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero with Parallax */}
      <section ref={heroRef} className="relative h-[80vh] min-h-[600px] flex items-end overflow-hidden bg-black">
        <motion.div style={{ y: heroImgY, scale: heroScale }} className="absolute inset-0 opacity-40">
          <Image src={project.heroImage} alt={project.name} fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container-premium pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Projects
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${project.status === "Ongoing" ? "gold-gradient-bg text-white" : "bg-white/20 backdrop-blur-md text-white"}`}>
                {project.status}
              </span>
              <span className="text-white/60 text-sm flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> {project.type}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white">
              {project.name}
            </h1>
            <p className="mt-2 text-xl text-gold-300 font-display italic">{project.tagline}</p>
            <div className="mt-4 flex items-center gap-2 text-white/70">
              <MapPin className="w-4 h-4" /> {project.location}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Description */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">About the Project</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                Project <span className="gold-gradient-text">Overview</span>
              </h2>
              <div className="mt-8 space-y-4">
                {project.description.map((p, i) => (
                  <p key={i} className="text-[var(--text-secondary)] leading-relaxed">{p}</p>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox(0)}>
                <Image src={project.infoImage} alt={`${project.name} Info`} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-[var(--bg-secondary)] relative">
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: 'var(--section-divider)' }} />
        <div className="container-premium relative">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
              <span className="w-8 h-px bg-gold-500" /> Highlights <span className="w-8 h-px bg-gold-500" />
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Key Features
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {project.features.map((feature, i) => (
              <AnimatedSection key={feature} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl text-center h-full transition-all duration-700 hover:-translate-y-1" style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}>
                  <span className="text-gold-500 font-display text-2xl font-bold">0{i + 1}</span>
                  <p className="mt-3 text-sm text-[var(--text-secondary)] font-medium">{feature}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — Adaptive Layout */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">Visuals</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Project Gallery
            </h2>
          </AnimatedSection>

          {/* Adaptive grid: 2 images = 2 cols centered, 3 images = 3 cols */}
          <div className={`grid gap-6 ${galleryCount === 2 ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
            {project.images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="aspect-[4/3] rounded-2xl overflow-hidden group relative cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <Image src={img} alt={`${project.name} ${i + 1}`} width={600} height={450} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-tertiary)] relative">
        <div className="container-premium text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Interested in {project.name}?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
              Get in touch with us to learn more about availability, pricing, and floor plans.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+8801886773300" className="flex items-center gap-2 px-8 py-4 gold-gradient-bg text-white text-sm font-medium uppercase tracking-wider rounded-full">
                <Phone className="w-4 h-4" /> Call Us Now
              </a>
              <Link href="/contact" className="flex items-center gap-2 px-8 py-4 border border-[var(--border-color)] text-[var(--text-primary)] text-sm font-medium uppercase tracking-wider rounded-full hover:bg-gold-500/10 transition-all duration-500">
                <Mail className="w-4 h-4" /> Send Inquiry
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
