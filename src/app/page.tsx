"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";
import PastelBackground from "@/components/PastelBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <PastelBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden text-black z-10">
        {/* Overlay Content */}
        <div className="z-10 text-center px-4 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-4 text-center text-black"
          >
            LMST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-base tracking-[0.3em] font-normal text-gray-600"
          >
            Logic, Matter, Space and Time
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 text-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-wide">PHILOSOPHY</h2>
            </div>
            <div className="space-y-8 text-lg font-light leading-relaxed text-gray-800">
              <p>
                <strong className="font-bold text-black">Logic</strong> is the framework. We derive form from function, analyzing the constraints of reality to build structures that are inherently rational yet boundless in their potential.
              </p>
              <p>
                <strong className="font-bold text-black">Matter</strong> is the medium. We respect the physical world, selecting materials that speak to the senses and endure the elements, grounding our abstract ideas in tangible reality.
              </p>
              <p>
                <strong className="font-bold text-black">Space</strong> is the canvas. We do not just fill emptiness; we sculpt it. We create voids that are as significant as the solids, defining how light and air move through our creations.
              </p>
              <p>
                <strong className="font-bold text-black">Time</strong> is the dimension. Our architecture is not static. It evolves with the changing light of day and the passing of seasons, designed to age gracefully and remain relevant across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="py-24 text-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold tracking-wide">SELECTED WORKS</h2>
            <Link href="/projects" className="text-sm border-b border-black pb-1 hover:opacity-50 transition-opacity">
              VIEW ALL
            </Link>
          </div>

          <ProjectCarousel />
        </div>
      </section>
    </div>
  );
}
