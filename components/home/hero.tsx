"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, ShieldCheck, Globe2 } from "lucide-react";
import { company } from "@/lib/content/company";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/section";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-x-hidden overflow-y-hidden bg-brand-cream dark:bg-background">
      <div className="bg-grid-fade absolute inset-0 opacity-70" />
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-20 h-[280px] w-[280px] rounded-full bg-gradient-warm opacity-40 blur-3xl sm:h-[420px] sm:w-[420px]"
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-24 h-[300px] w-[300px] rounded-full bg-gradient-magenta opacity-30 blur-3xl sm:h-[480px] sm:w-[480px]"
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative grid min-h-[100svh] items-center gap-10 pt-24 pb-16 sm:gap-12 sm:pt-28 lg:grid-cols-2 lg:gap-16 lg:pt-32">
        <div className="min-w-0">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={120}
              height={120}
              priority
              className="mb-5 size-16 object-contain sm:mb-6 sm:size-20 md:size-28"
            />
            <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-brand-pink uppercase sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
              {company.tagline}
            </p>
            <h1 className="font-display text-4xl leading-[1.08] break-words sm:text-5xl md:text-6xl lg:text-7xl">
              SN Factory
            </h1>
            <p className="mt-3 font-display text-xl leading-snug text-muted-foreground sm:mt-2 sm:text-2xl md:text-3xl lg:text-4xl">
              Global Import, Distribution &amp;{" "}
              <span className="text-gradient-brand">Professional Installation Solutions</span>
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              SN Factory provides premium vehicle parts, lift and hoist systems, and quality home
              accessories sourced from trusted international manufacturers with professional
              installation and nationwide support.
            </p>
            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
              <ButtonLink
                href="/contact"
                variant="gradient"
                size="lg"
                className="w-full min-h-11 sm:w-auto"
              >
                Request a Quote
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="outline"
                size="lg"
                className="w-full min-h-11 sm:w-auto"
              >
                Contact Us
              </ButtonLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-2xl shadow-brand-purple/20 sm:rounded-[2rem] md:aspect-[5/6]">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=1400&fit=crop"
              alt="Import, distribution and installation operations"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </div>

          <motion.div
            className="glass absolute top-3 left-2 max-w-[160px] rounded-2xl p-3 sm:top-6 sm:-left-2 sm:max-w-[200px] sm:p-4 md:-left-6"
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Award className="mb-2 size-4 text-brand-orange sm:size-5" />
            <p className="text-xs font-semibold sm:text-sm">Trusted Import Partner</p>
            <p className="text-[10px] text-muted-foreground sm:text-xs">Automotive · Lifts · Home</p>
          </motion.div>

          <motion.div
            className="glass absolute right-2 bottom-3 max-w-[170px] rounded-2xl p-3 sm:right-2 sm:-bottom-4 sm:max-w-[220px] sm:p-4 md:-right-4 md:bottom-10"
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-2 flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand-pink sm:size-5" />
              <Globe2 className="size-4 text-brand-purple sm:size-5" />
            </div>
            <p className="text-xs font-semibold sm:text-sm">18+ countries sourced</p>
            <p className="text-[10px] text-muted-foreground sm:text-xs">Install & after-sales support</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
