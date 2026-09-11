'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.06, y: -3 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          onClick={() => scrollTo(0)}
          aria-label="Back to Top"
          className="btn-lux btn-solid fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[90] text-white rounded-full px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-2 text-[12.5px] font-semibold border border-white/20 focus:outline-none"
        >
          <span className="hidden sm:inline relative z-10">Back to Top</span>
          <ArrowUp size={16} className="stroke-[2.5] relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
