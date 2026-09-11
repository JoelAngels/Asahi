import { Variants } from 'motion/react';

// Refined architectural cubic-bezier easing
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: easeOutExpo,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const cardStaggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: easeOutExpo,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: easeOutExpo,
    },
  },
};

export const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

export const microBounce = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    y: -2,
    transition: { type: 'spring', stiffness: 400, damping: 18 },
  },
  tap: {
    scale: 0.97,
    transition: { type: 'spring', stiffness: 500, damping: 20 },
  },
};

export const cardHoverMotion = {
  rest: {
    y: 0,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
    transition: { duration: 0.3, ease: easeOutExpo },
  },
  hover: {
    y: -8,
    boxShadow: '0 16px 36px rgba(15, 23, 42, 0.08)',
    transition: { duration: 0.3, ease: easeOutExpo },
  },
};
