'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MicroLabel } from '../ui/MicroLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { CONSULTANCY_SERVICES } from '../../data/consultancy';
import { CheckCircle } from 'lucide-react';
import { staggerContainer, cardStaggerItem, fadeInUp } from '../../lib/animations';
import { spotlight } from '../../lib/spotlight';

export const Consultancy: React.FC = () => {
  return (
    <section
      id="consultancy"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-paper relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-blueprint mask-fade-y opacity-50" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <MicroLabel text="STRATEGIC & TECHNICAL ADVISORY" />
          <SectionHeading
            title="9 Disciplines of Construction & Property Consultancy"
            subtitle="From concept viability and statutory county permitting to FIDIC construction supervision and PPP concession structuring, ADL guides capital safely across the project lifecycle."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {CONSULTANCY_SERVICES.map((serv, index) => (
            <motion.div
              key={serv.id}
              variants={cardStaggerItem}
              whileHover={{ y: -10, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              onMouseMove={spotlight}
              className="card-lux rounded-[1.4rem] p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E5E33] bg-[#2F8B4E]/8 border border-[#2F8B4E]/15 px-3 py-1.5 rounded-full">
                    {serv.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold tabular text-ink-muted/50 group-hover:text-[#B48D1E] transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-[1.05rem] sm:text-[1.15rem] font-semibold tracking-tight text-ink mb-3 leading-snug group-hover:text-[#1E5E33] transition-colors duration-300">
                  {serv.title}
                </h3>
                <p className="text-[13px] sm:text-[0.875rem] text-ink-soft leading-[1.7] font-light">
                  {serv.scope}
                </p>
              </div>

              <div className="mt-7 pt-4 border-t border-hairline flex items-start gap-2.5">
                <CheckCircle size={15} className="text-[#2F8B4E] shrink-0 mt-0.5" />
                <span className="text-[11.5px] font-semibold text-ink-soft leading-snug">
                  {serv.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
