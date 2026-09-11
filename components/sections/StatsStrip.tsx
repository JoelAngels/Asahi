'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { METRIC_STATS } from '../../data/stats';
import { staggerContainer, cardStaggerItem } from '../../lib/animations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const StatsStrip: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          METRIC_STATS.forEach((stat, idx) => {
            const el = numberRefs.current[idx];
            if (!el) return;

            const counterObj = { val: 0 };
            gsap.fromTo(
              counterObj,
              { val: 0 },
              {
                val: stat.value,
                duration: 1.8,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent = Math.round(counterObj.val).toString();
                },
              }
            );
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats-strip"
      className="relative bg-[#071009] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Development render substrate, graded down behind the figures */}
      <div className="absolute inset-0 opacity-[0.38]" aria-hidden="true">
        <Image
          src="/05-rooftop-terrace-sunset.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_62%]"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#071009] via-[#071009]/80 to-[#071009]"
        aria-hidden="true"
      />

      {/* Blueprint substrate + horizon glow */}
      <div className="absolute inset-0 bg-blueprint-dark mask-fade-y opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] rounded-full bg-[radial-gradient(ellipse,rgba(47,139,78,0.22)_0%,transparent_65%)] blur-xl pointer-events-none"
        aria-hidden="true"
      />
      {/* Hairline edges */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#34D399]/35 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-8"
        >
          {METRIC_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              variants={cardStaggerItem}
              className="relative group pl-5 sm:pl-7"
            >
              {/* Vertical rule that lights up on hover */}
              <span
                className="absolute left-0 top-1 bottom-1 w-px bg-white/12 overflow-hidden"
                aria-hidden="true"
              >
                <span className="absolute inset-0 bg-gradient-to-b from-[#34D399] to-[#2F8B4E] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </span>

              <div className="font-display tabular text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-semibold text-white leading-[0.95] tracking-[-0.045em] mb-3 flex items-baseline">
                <span
                  ref={(el) => {
                    numberRefs.current[idx] = el;
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-[#34D399] text-2xl sm:text-3xl font-semibold ml-0.5">
                  {stat.suffix}
                </span>
              </div>

              <div className="text-[0.82rem] sm:text-[0.9rem] font-semibold text-white/95 mb-2 leading-snug tracking-[-0.015em]">
                {stat.label}
              </div>
              <p className="text-[11px] sm:text-xs text-white/45 leading-relaxed font-light">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
