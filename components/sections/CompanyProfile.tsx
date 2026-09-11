'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MicroLabel } from '../ui/MicroLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { CORE_STRENGTHS } from '../../data/strengths';
import { COMPANY_INFO } from '../../data/companyInfo';
import { ShieldCheck, Compass, TrendingUp, Droplets, Award, Leaf, Target, Eye } from 'lucide-react';
import { staggerContainer, cardStaggerItem, fadeInUp } from '../../lib/animations';
import { spotlight } from '../../lib/spotlight';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={22} className="text-[#2F8B4E]" />,
  Compass: <Compass size={22} className="text-[#2F8B4E]" />,
  TrendingUp: <TrendingUp size={22} className="text-[#2F8B4E]" />,
  Droplets: <Droplets size={22} className="text-[#2F8B4E]" />,
  Award: <Award size={22} className="text-[#2F8B4E]" />,
  Leaf: <Leaf size={22} className="text-[#2F8B4E]" />,
};

export const CompanyProfile: React.FC = () => {
  return (
    <section id="company" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <MicroLabel text="CORPORATE PROFILE & STRATEGY" />
          <SectionHeading
            title="Engineered for Generations of Prosperity"
            subtitle="At ASAHI Development Limited, we combine high-level financial engineering with rigorous civil discipline to deliver transformative infrastructure across Kenya and East Africa."
          />
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-24"
        >
          {/* Mission */}
          <motion.div
            variants={cardStaggerItem}
            whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            onMouseMove={spotlight}
            className="card-lux rounded-[1.6rem] p-7 sm:p-10 group"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
              className="w-14 h-14 rounded-2xl chip-icon flex items-center justify-center mb-7 text-[#2F8B4E]"
            >
              <Target size={24} />
            </motion.div>
            <h3 className="font-display text-xl sm:text-[1.6rem] font-semibold tracking-[-0.03em] text-ink mb-4 group-hover:text-[#1E5E33] transition-colors duration-300">
              Our Strategic Mission
            </h3>
            <p className="text-ink-soft leading-[1.75] text-sm sm:text-[0.98rem] font-light">
              {COMPANY_INFO.mission}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={cardStaggerItem}
            whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            onMouseMove={spotlight}
            className="card-lux rounded-[1.6rem] p-7 sm:p-10 group"
          >
            <motion.div
              whileHover={{ rotate: -10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
              className="w-14 h-14 rounded-2xl chip-icon-gold flex items-center justify-center mb-7 text-[#B48D1E]"
            >
              <Eye size={24} />
            </motion.div>
            <h3 className="font-display text-xl sm:text-[1.6rem] font-semibold tracking-[-0.03em] text-ink mb-4 group-hover:text-[#B48D1E] transition-colors duration-300">
              Our Long-Term Vision
            </h3>
            <p className="text-ink-soft leading-[1.75] text-sm sm:text-[0.98rem] font-light">
              {COMPANY_INFO.vision}
            </p>
          </motion.div>
        </motion.div>

        {/* 6 Core Strengths Section */}
        <div id="strengths">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-[10px] sm:text-[11px] font-bold text-[#2F8B4E] tracking-[0.18em] uppercase block mb-2.5">
              Competitive Edge
            </span>
            <h3 className="font-display text-2xl sm:text-[2.1rem] font-semibold tracking-[-0.035em] text-ink">
              Our 6 Core Capabilities & Strengths
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {CORE_STRENGTHS.map((item) => (
              <motion.div
                key={item.id}
                variants={cardStaggerItem}
                whileHover={{ y: -10, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                onMouseMove={spotlight}
                className="card-lux rounded-[1.4rem] p-7 flex flex-col justify-between group"
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                    className="w-12 h-12 rounded-xl chip-icon flex items-center justify-center mb-6 text-[#2F8B4E]"
                  >
                    {ICON_MAP[item.iconName] || <ShieldCheck size={22} className="text-[#2F8B4E]" />}
                  </motion.div>
                  <h4 className="font-display text-[1.05rem] sm:text-[1.15rem] font-semibold tracking-[-0.025em] text-ink mb-2.5 leading-snug group-hover:text-[#1E5E33] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-[13px] sm:text-[0.875rem] text-ink-soft leading-[1.7] font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-hairline text-[10px] sm:text-[11px] font-bold text-[#1E5E33] tracking-[0.14em] uppercase flex items-center justify-between gap-3">
                  <span>{item.metric}</span>
                  <span className="text-[#2F8B4E]/25 group-hover:text-[#2F8B4E] transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
