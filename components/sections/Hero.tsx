'use client';

import React, { useRef, useEffect } from 'react';
import { motion, Variants } from 'motion/react';
import { ArrowRight, Droplets, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MicroLabel } from '../ui/MicroLabel';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { fadeInUp, staggerContainer } from '../../lib/animations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const headlineContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.15 } },
};

const headlineWord: Variants = {
  hidden: { y: '118%' },
  visible: { y: '0%', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

// Same copy, split so the middle phrase can carry the accent treatment.
const HEADLINE_SEGMENTS = [
  { text: 'Building the Future,', accent: false },
  { text: 'One Development', accent: true },
  { text: 'at a Time.', accent: false },
];

const HEADLINE_WORDS = HEADLINE_SEGMENTS.flatMap((segment) =>
  segment.text.split(' ').map((word) => ({ word, accent: segment.accent }))
);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    // Subtle GSAP ScrollTrigger Parallax Depth
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 12,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[94vh] flex items-center pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-paper"
    >
      {/* Engineering blueprint substrate */}
      <div className="absolute inset-0 bg-blueprint mask-fade-radial opacity-80" aria-hidden="true" />

      {/* Drifting ambient light */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-32 w-[46rem] h-[46rem] rounded-full bg-[radial-gradient(circle,rgba(47,139,78,0.16)_0%,transparent_62%)] blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 34, 0], opacity: [0.4, 0.62, 0.4] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-56 -left-40 w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14)_0%,transparent_62%)] blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 items-center">
          {/* Left Column: Corporate Value Proposition */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 lg:col-span-7"
          >
            <motion.div variants={fadeInUp}>
              <MicroLabel text="CIVIL ENGINEERING • REAL ESTATE • WATER MANAGEMENT" />
            </motion.div>

            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.7rem] xl:text-[4.3rem] font-semibold leading-[1.02] tracking-[-0.042em] text-ink mb-7"
            >
              {HEADLINE_WORDS.map((item, i) => (
                <React.Fragment key={`${item.word}-${i}`}>
                  <span className="inline-block overflow-hidden align-bottom pb-[0.13em] -mb-[0.13em]">
                    <motion.span
                      variants={headlineWord}
                      className={`inline-block ${item.accent ? 'text-gradient-brand' : ''}`}
                    >
                      {item.word}
                    </motion.span>
                  </span>
                  {i < HEADLINE_WORDS.length - 1 ? ' ' : ''}
                </React.Fragment>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-[1.075rem] text-ink-soft leading-[1.75] font-light max-w-2xl mb-9"
            >
              ASAHI Development Limited (ADL) engineers bankable property, civil infrastructure,
              and water systems that catalyze regional prosperity, strengthen community health,
              and create generational quality of life across East Africa.
            </motion.p>

            {/* CTAs with Spring Physics */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
            >
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                onClick={() => scrollTo('#contact', -90)}
                className="btn-lux btn-solid group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white font-semibold text-[0.95rem] rounded-full min-h-[54px]"
              >
                <span className="relative z-10">Partner With ADL</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                />
              </motion.button>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                onClick={() => scrollTo('#water', -90)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/70 backdrop-blur-xl border border-hairline text-ink font-semibold text-[0.95rem] rounded-full min-h-[54px] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_12px_30px_-20px_rgba(11,23,18,0.5)] hover:border-[#2F8B4E]/40 hover:text-[#1E5E33] transition-colors duration-300"
              >
                <Droplets size={18} className="text-[#2F8B4E]" />
                <span>Explore 16 Water Solutions</span>
              </motion.button>
            </motion.div>

            {/* Accreditations badge */}
            <motion.div variants={fadeInUp} className="mt-10 sm:mt-12">
              <div className="rule-fade mb-6" />
              <div className="flex items-center gap-4 sm:gap-6 flex-wrap text-[0.8rem] sm:text-sm text-ink-muted">
                <div className="flex items-center gap-2.5 font-semibold text-ink">
                  <span className="w-8 h-8 rounded-lg chip-icon flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} className="text-[#2F8B4E]" />
                  </span>
                  <span>FIDIC &amp; Eurocode Standard</span>
                </div>
                <span className="w-px h-4 bg-hairline hidden sm:block" />
                <span className="font-light">Incorporated in the Republic of Kenya</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Key Metrics & Architectural Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="md:col-span-5 lg:col-span-5 relative"
          >
            {/* Offset frame line — architectural drafting cue */}
            <div
              className="absolute -inset-3 sm:-inset-4 rounded-[2rem] border border-[#2F8B4E]/15 pointer-events-none"
              aria-hidden="true"
            />

            <motion.div
              initial={{ clipPath: 'inset(12% 0% 0% 0% round 1.75rem)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0% round 1.75rem)' }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="corner-ticks relative rounded-[1.75rem] overflow-hidden aspect-[4/3] md:aspect-[4/5] max-h-[520px] ring-1 ring-black/5 shadow-[0_40px_80px_-40px_rgba(11,23,18,0.6)]"
            >
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="Modern commercial infrastructure development"
                className="w-full h-full object-cover will-change-transform scale-105"
                loading="eager"
              />

              {/* Duotone grade + base scrim for badge legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#071009]/80 via-[#071009]/10 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 mix-blend-soft-light bg-gradient-to-br from-[#2F8B4E]/50 to-[#D4AF37]/25"
                aria-hidden="true"
              />

              {/* Floating Architectural Badge with Breathing Motion Animation */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/88 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-[0_20px_44px_-24px_rgba(11,23,18,0.8)] border border-white/60 flex items-center justify-between gap-3"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1E5E33] block">
                    Regional Impact
                  </span>
                  <div className="text-[0.9rem] sm:text-base font-bold text-ink mt-1 tracking-[-0.02em]">
                    Turnkey Urban &amp; Water Assets
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollTo('#property', -90)}
                  className="btn-lux btn-solid w-11 h-11 rounded-full text-white flex items-center justify-center shrink-0"
                  aria-label="View Property Solutions"
                >
                  <ArrowRight size={18} className="relative z-10" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
