'use client';

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ButtonLink from "./ButtonLink";
import { ArrowRight, FileDown, Linkedin } from "lucide-react";
import { useRef } from "react";

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduce = useReducedMotion();

  // Track scroll within the hero to drive parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // when the top hits top → 0, when bottom hits top → 1
  });

  // Background moves slower; foreground moves slightly
  const bgY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -120]);      // slower layer
  const fgY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -40]);       // text drift
  const fgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.85]);

  return (
    <section
      ref={containerRef}
      className="relative h-[72vh] min-h-[520px] w-full overflow-hidden rounded-3xl border bg-slate-950 text-white"
      aria-label="Intro hero"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 will-change-transform"
        aria-hidden
      >
        {/* Background image */}
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        {/* Soft gradient overlays for polish/readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/10 to-slate-900/70" />
        <div className="pointer-events-none absolute -top-48 -right-32 h-[520px] w-[520px] rounded-full bg-sky-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-56 -left-24 h-[520px] w-[520px] rounded-full bg-emerald-300/10 blur-3xl" />
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        style={{ y: fgY, opacity: fgOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-5xl items-center px-6"
      >
        <div className="space-y-5">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Álvaro C. Quijano-Angarita
          </h1>

          <p className="max-w-2xl text-slate-100/90">
            Biostatistics PhD candidate at UNC–Chapel Hill focused on complex survey methods,
            Bayesian analysis, and data visualization for public health—emphasizing child mortality,
            disease mapping, and equity in Hispanic/Latino populations.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <ButtonLink href="/research">
              See my research <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="/cv">
              View / download CV <FileDown size={16} />
            </ButtonLink>
            <ButtonLink href="https://www.linkedin.com/in/acquijanoa" external>
              LinkedIn <Linkedin size={16} />
            </ButtonLink>
          </div>
        </div>

        {/* Floating avatar card (optional, keeps it premium but minimal) */}
        <div className="ml-auto hidden sm:block">
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
            <Image
              src="/avatar.jpg"
              alt="Álvaro portrait"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
