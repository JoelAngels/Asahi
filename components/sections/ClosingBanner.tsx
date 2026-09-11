'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const ClosingBanner: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <section className="bg-[#071009] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Flagship render substrate, heavily scrimmed */}
      <div className="absolute inset-0 opacity-[0.28]" aria-hidden="true">
        <Image
          src="/01-building-exterior-sunset.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#071009] via-[#071009]/90 to-[#071009]"
        aria-hidden="true"
      />

      {/* Animated Ambient Radial Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#2F8B4E] to-[#D4AF37] rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-blueprint-dark mask-fade-y opacity-50" aria-hidden="true" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#34D399]/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span
            variants={fadeInUp}
            className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#34D399] inline-block mb-5"
          >
            Transforming East Africa
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-[1.9rem] sm:text-4xl lg:text-[3.2rem] font-semibold leading-[1.06] tracking-[-0.04em] mb-6 text-white"
          >
            Ready to Engineer Resilient, High-Yield Property & Infrastructure?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-[1.05rem] text-white/60 leading-[1.75] font-light max-w-2xl mx-auto mb-10"
          >
            Connect directly with our senior partners and engineering directors to evaluate
            feasibility, structure investments, or commission turnkey water and civil assets.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('#contact', -75)}
              className="btn-lux btn-solid group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white font-semibold text-[0.95rem] rounded-full min-h-[54px]"
            >
              <span className="relative z-10">Initiate Direct Consultation</span>
              <ArrowRight size={18} className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={COMPANY_INFO.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/8 backdrop-blur-xl text-white border border-white/15 rounded-full font-semibold text-[0.95rem] hover:bg-white hover:text-ink hover:border-white transition-all duration-500 min-h-[54px]"
            >
              <Phone size={17} className="text-[#34D399]" />
              <span>Call {COMPANY_INFO.contact.phone}</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
