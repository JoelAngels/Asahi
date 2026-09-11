'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
};

const wordReveal: Variants = {
  hidden: { y: '115%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  light = false,
  centered = false,
}) => {
  const words = title.split(' ');

  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <motion.h2
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className={`font-display text-[1.75rem] leading-[1.08] sm:text-4xl lg:text-[2.9rem] font-semibold tracking-[-0.035em] mb-5 ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {words.map((word, i) => (
          <React.Fragment key={`${word}-${i}`}>
            <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
              <motion.span variants={wordReveal} className="inline-block">
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        ))}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        className={`h-[3px] w-16 rounded-full mb-6 origin-left bg-gradient-to-r from-[#2F8B4E] via-[#34D399] to-[#D4AF37] ${
          centered ? 'mx-auto origin-center' : ''
        }`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className={`text-[0.95rem] sm:text-lg leading-[1.7] font-light ${
            light ? 'text-slate-300/90' : 'text-ink-soft'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
