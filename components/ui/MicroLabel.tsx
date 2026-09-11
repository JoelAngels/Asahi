'use client';

import React from 'react';
import { motion } from 'motion/react';

interface MicroLabelProps {
  text: string;
  light?: boolean;
}

export const MicroLabel: React.FC<MicroLabelProps> = ({ text, light = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center gap-2.5 mb-5 pl-2.5 pr-4 py-1.5 rounded-full border backdrop-blur-sm ${
        light
          ? 'border-white/15 bg-white/6 text-[#A7F3D0]'
          : 'border-[#2F8B4E]/20 bg-[#2F8B4E]/6 text-[#1E5E33]'
      }`}
    >
      <span className="relative flex items-center justify-center w-2 h-2">
        <span
          className={`absolute inline-flex w-full h-full rounded-full opacity-60 animate-ping ${
            light ? 'bg-[#34D399]' : 'bg-[#2F8B4E]'
          }`}
        />
        <span
          className={`relative inline-flex w-1.5 h-1.5 rounded-full ${
            light ? 'bg-[#34D399]' : 'bg-[#2F8B4E]'
          }`}
        />
      </span>
      <span className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-[1.4]">
        {text}
      </span>
    </motion.div>
  );
};
