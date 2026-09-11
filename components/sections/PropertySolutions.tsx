'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MicroLabel } from '../ui/MicroLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { staggerContainer, cardStaggerItem, fadeInUp } from '../../lib/animations';
import { spotlight } from '../../lib/spotlight';

export const PropertySolutions: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="property"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-paper-warm relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <MicroLabel text="REAL ESTATE & URBAN DEVELOPMENT" />
          <SectionHeading
            title="Transformative Property Developments"
            subtitle="Delivering bankable residential master plans, mixed-use commercial towers, and smart industrial logistics facilities built for long-term capital appreciation."
          />
        </motion.div>

        {/* 2-Column Split: Residential vs Commercial */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10"
        >
          {/* Residential */}
          <motion.div
            variants={cardStaggerItem}
            whileHover={{ y: -10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            onMouseMove={spotlight}
            className="card-lux rounded-[1.75rem] overflow-hidden flex flex-col group"
          >
            <div className="h-64 sm:h-80 overflow-hidden relative">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                alt="Modern sustainable residential property"
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#071009]/55 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-xl text-ink px-3.5 py-2 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase border border-white/70 shadow-[0_8px_20px_-12px_rgba(11,23,18,0.7)]">
                Residential Estates
              </div>
            </div>

            <div className="p-7 sm:p-9 grow flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl sm:text-[1.6rem] font-semibold tracking-[-0.03em] text-ink mb-4 group-hover:text-[#1E5E33] transition-colors duration-300">
                  Integrated Master-Planned Communities
                </h3>
                <p className="text-ink-soft leading-[1.75] text-sm sm:text-[0.98rem] font-light mb-7">
                  We design and construct master-planned residential environments centered on
                  walkable streets, solar infrastructure, rainwater harvesting, and centralized
                  community management.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Subdivision planning & arterial internal roads',
                    'Dedicated decentralized wastewater treatment (STP)',
                    'Underground three-phase power & optical fiber reticulation',
                    'Perimeter security automation & smart gate control',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13px] sm:text-[0.875rem] text-ink-soft">
                      <CheckCircle2 size={18} className="text-[#2F8B4E] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#contact', -75)}
                className="inline-flex items-center gap-2 text-[#1E5E33] font-bold text-[0.875rem] hover:text-[#2F8B4E] transition-colors text-left link-underline self-start"
              >
                <span>Inquire About Residential Partnerships</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* Commercial & Industrial */}
          <motion.div
            variants={cardStaggerItem}
            whileHover={{ y: -10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            onMouseMove={spotlight}
            className="card-lux rounded-[1.75rem] overflow-hidden flex flex-col group"
          >
            <div className="h-64 sm:h-80 overflow-hidden relative">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1000&auto=format&fit=crop"
                alt="Commercial and industrial logistics development"
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#071009]/55 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-xl text-ink px-3.5 py-2 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase border border-white/70 shadow-[0_8px_20px_-12px_rgba(11,23,18,0.7)]">
                Commercial & Industrial
              </div>
            </div>

            <div className="p-7 sm:p-9 grow flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl sm:text-[1.6rem] font-semibold tracking-[-0.03em] text-ink mb-4 group-hover:text-[#1E5E33] transition-colors duration-300">
                  Commercial Parks & Logistics Hubs
                </h3>
                <p className="text-ink-soft leading-[1.75] text-sm sm:text-[0.98rem] font-light mb-7">
                  Engineering institutional-grade corporate offices, light manufacturing facilities,
                  temperature-controlled cold chains, and bonded logistics warehouses.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'High floor-load capacity & clear-span steel structures',
                    'Dedicated heavy axle loading (Class 1) asphalt pavements',
                    'Industrial water treatment & fire suppression ring mains',
                    'Green building certification compliance (EDGE / LEED)',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13px] sm:text-[0.875rem] text-ink-soft">
                      <CheckCircle2 size={18} className="text-[#2F8B4E] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#contact', -75)}
                className="inline-flex items-center gap-2 text-[#1E5E33] font-bold text-[0.875rem] hover:text-[#2F8B4E] transition-colors text-left link-underline self-start"
              >
                <span>Explore Commercial Development</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
