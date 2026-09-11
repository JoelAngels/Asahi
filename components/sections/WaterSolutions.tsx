'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MicroLabel } from '../ui/MicroLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { WATER_SOLUTIONS } from '../../data/waterSolutions';
import { WaterCategory } from '../../types';
import { Check } from 'lucide-react';
import { fadeInUp } from '../../lib/animations';
import { spotlight } from '../../lib/spotlight';

const FILTER_TABS: { label: string; value: WaterCategory }[] = [
  { label: 'All 16 Solutions', value: 'all' },
  { label: 'Potable Supply', value: 'supply' },
  { label: 'Wastewater & Sanitation', value: 'wastewater' },
  { label: 'Drainage & Stormwater', value: 'stormwater' },
  { label: 'Industrial Systems', value: 'industrial' },
];

export const WaterSolutions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<WaterCategory>('all');

  const filteredSolutions =
    activeFilter === 'all'
      ? WATER_SOLUTIONS
      : WATER_SOLUTIONS.filter((sol) => sol.category === activeFilter);

  return (
    <section
      id="water"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-paper-warm relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-[38rem] h-[38rem] rounded-full bg-[radial-gradient(circle,rgba(47,139,78,0.09)_0%,transparent_65%)] blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <MicroLabel text="WATER & WASTEWATER ENGINEERING" />
          <SectionHeading
            title="16 Turnkey Water Management Solutions"
            subtitle="Addressing East Africa's critical water lifecycle needs: from industrial SWRO desalination and borehole solar arrays to decentralized sewage treatment and urban flood protection."
          />
        </motion.div>

        {/* Filter Bar with Horizontal Momentum Scroll on Mobile */}
        <div className="overflow-x-auto pb-3 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-full text-[12px] sm:text-[13px] font-semibold transition-colors duration-300 flex items-center gap-1.5 focus:outline-none min-h-11 ${
                    isActive
                      ? 'text-white'
                      : 'text-ink-soft bg-white border border-hairline hover:border-[#2F8B4E]/35 hover:text-ink shadow-[0_1px_2px_rgba(11,23,18,0.03)]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="waterFilterPill"
                      className="absolute inset-0 bg-gradient-to-br from-[#37A05B] to-[#1E5E33] rounded-full shadow-[0_8px_20px_-8px_rgba(30,94,51,0.85)] -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  {isActive && <Check size={14} className="stroke-[2.5]" />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Solutions Grid with Layout Animations & AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSolutions.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                onMouseMove={spotlight}
                className="card-lux rounded-[1.35rem] p-6 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-[#2F8B4E] block mb-3">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-display text-[1rem] font-semibold tracking-tight text-ink mb-2.5 leading-snug group-hover:text-[#1E5E33] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-ink-soft leading-[1.7] font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline text-[11.5px]">
                  <div className="text-ink-muted mb-2 leading-snug font-light">
                    <span className="font-semibold text-ink-soft">Spec: </span>
                    {item.spec}
                  </div>
                  <div className="text-[#1E5E33] font-bold flex items-center justify-between gap-3">
                    <span>{item.impactMetric}</span>
                    <span className="text-[#2F8B4E]/25 group-hover:text-[#2F8B4E] transition-colors duration-500 font-mono">
                      ✓
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
