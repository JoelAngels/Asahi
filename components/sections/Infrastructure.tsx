'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MicroLabel } from '../ui/MicroLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { Truck, Droplet, Zap, HardHat } from 'lucide-react';
import { staggerContainer, cardStaggerItem, fadeInUp } from '../../lib/animations';
import { spotlight } from '../../lib/spotlight';

export const Infrastructure: React.FC = () => {
  const items = [
    {
      icon: <Truck size={24} className="text-[#2F8B4E]" />,
      title: 'Highway, Road & Bridge Engineering',
      desc: 'Pavement design, geometric alignment, culverts, bridge spans, and heavy-duty arterial corridors engineered to East African Transport standards.',
      tag: 'Transportation',
    },
    {
      icon: <Droplet size={24} className="text-[#2F8B4E]" />,
      title: 'Bulk Hydraulic Utility Networks',
      desc: 'Large-diameter ductile iron and HDPE water transmission mains, gravity sewers, surge suppression tanks, and pump station automation.',
      tag: 'Hydraulics',
    },
    {
      icon: <HardHat size={24} className="text-[#2F8B4E]" />,
      title: 'Site Preparation & Major Earthworks',
      desc: 'Geotechnical soil stabilization, cut-and-fill balancing, rock blasting, slope retention, and deep foundations for high-density plots.',
      tag: 'Civil Earthworks',
    },
    {
      icon: <Zap size={24} className="text-[#2F8B4E]" />,
      title: 'Municipal Power & Utility Reticulation',
      desc: 'Underground medium-voltage duct banks, distribution substations, public LED street lighting arrays, and optical telecom conduit corridors.',
      tag: 'Utilities',
    },
  ];

  return (
    <section
      id="infrastructure"
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
          <MicroLabel text="CIVIL & MUNICIPAL INFRASTRUCTURE" />
          <SectionHeading
            title="Heavy Civil Works & Municipal Lifelines"
            subtitle="From high-capacity transport arteries to bulk earthworks and master utility networks, our engineering creates the backbone for thriving metropolitan zones."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardStaggerItem}
              whileHover={{ y: -10, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              onMouseMove={spotlight}
              className="card-lux rounded-[1.4rem] p-7 flex flex-col justify-between group"
            >
              <div>
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.12 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                  className="w-13 h-13 rounded-xl chip-icon flex items-center justify-center mb-6 text-[#2F8B4E]"
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-display text-[1.05rem] sm:text-[1.15rem] font-semibold tracking-tight text-ink mb-3 leading-snug group-hover:text-[#1E5E33] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-ink-soft leading-[1.7] text-[13px] sm:text-[0.875rem] font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-7 pt-4 border-t border-hairline flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-[#1E5E33] uppercase tracking-[0.14em]">
                <span>{item.tag}</span>
                <span className="text-[#2F8B4E]/25 group-hover:text-[#2F8B4E] group-hover:translate-x-1 transition-all duration-500">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
