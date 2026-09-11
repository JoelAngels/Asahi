'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-progress"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2.5px',
        background: 'linear-gradient(90deg, #2F8B4E 0%, #10B981 60%, #D4AF37 100%)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 1000,
        pointerEvents: 'none',
        boxShadow: '0 0 10px rgba(47, 139, 78, 0.45)',
      }}
      aria-hidden="true"
    />
  );
};
