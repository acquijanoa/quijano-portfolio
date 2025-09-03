'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonLink from "./ButtonLink";
import { ArrowRight, FileDown, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-slate-50 to-white p-6 sm:p-10">
      {/* subtle gradient blob */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="grid gap-8 sm:grid-cols-[1.2fr,0.8fr] items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold tracking-tight">
            Álvaro C. Quijano-Angarita
          </h1>
          <p className="text-slate-700">
            Biostatistics PhD candidate at UNC–Chapel Hill focused on complex survey methods,
            Bayesian analysis, and data visualization for public health—emphasizing child mortality,
            disease mapping, and equity in Hispanic/Latino populations.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
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
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
            <Image
              src="/hero.jpg"
              alt="Cover: research, maps and data visualization"
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>

          {/* floating avatar */}
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 rounded-2xl border bg-white p-2 shadow-sm"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-xl">
              <Image
                src="/avatar.jpg"
                alt="Álvaro portrait"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
