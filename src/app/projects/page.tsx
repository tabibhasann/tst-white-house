"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowUpRight, Home, MapPin } from "lucide-react";

const allProjects = [
  {
    name: "TST Prime",
    slug: "tst-prime",
    location: "Plot-41, Road-512, Sector-11, Jolshiri Abashon",
    type: "Residential",
    status: "Ongoing",
    image: "/images/projects/prime/prime-2.jpg",
    description: "A premium residential project featuring modern architecture and smart living solutions in one of Dhaka's most sought-after locations.",
  },
  {
    name: "TST Prestige",
    slug: "tst-prestige",
    location: "Plot-005, Road-505C, Sector-16, Jolshiri Abashon",
    type: "Residential",
    status: "Ongoing",
    image: "/images/projects/prestige/prestige-2.webp",
    description: "An elegant residential development that embodies sophistication and comfort, designed for discerning homeowners.",
  },
  {
    name: "TST Shopnil",
    slug: "tst-shopnil",
    location: "Plot-013, Road-501A, Sector-09, Jolshiri Abashon",
    type: "Residential",
    status: "Upcoming",
    image: "/images/projects/shopnil/shopnil-1.webp",
    description: "Our upcoming masterpiece that promises to set new benchmarks in luxury residential living.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero — blends seamlessly into content */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/hero/hero-1.jpg" alt="Projects" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--bg-primary)]" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-gold-300 mb-4 font-medium"
          >
            Our Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            Our <span className="gold-gradient-text">Projects</span>
          </motion.h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-premium">
          <div className="space-y-24">
            {allProjects.map((project, index) => (
              <AnimatedSection key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                        />
                        <div className="absolute top-6 left-6">
                          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${project.status === "Ongoing" ? "gold-gradient-bg text-white" : "bg-white/20 backdrop-blur-md text-white"}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-4">
                        <Home className="w-4 h-4" />
                        {project.type}
                      </div>
                      <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-gold-500 transition-colors duration-300">
                        {project.name}
                      </h2>
                      <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-6">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-gold-500 font-medium text-sm uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                        Explore Project <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
