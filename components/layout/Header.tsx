'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

interface HeaderProps {
  onOpenMobileNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileNav }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('company');
  const { lenis, scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = lenis ? lenis.scroll : window.scrollY;
      setScrolled(currentScroll > 40);

      // Section spy
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const scrollPos = currentScroll + 180;

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (id && scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (lenis) {
      lenis.on('scroll', handleScroll);
    }
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lenis) {
        lenis.off('scroll', handleScroll);
      }
    };
  }, [lenis]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href, -90);
  };

  return (
    <motion.header
      id="site-header"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-0 left-0 w-full z-[900]"
    >
      <div
        className={`transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? 'px-3 sm:px-5 pt-3 sm:pt-4' : 'px-0 pt-0'
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? 'max-w-7xl rounded-2xl sm:rounded-full border border-hairline bg-white/72 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_18px_44px_-24px_rgba(11,23,18,0.45)] px-3.5 sm:px-4 py-2.5'
              : 'max-w-7xl rounded-none border border-transparent bg-transparent px-4 sm:px-6 lg:px-8 py-5'
          }`}
        >
          {/* Brand Identity */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="flex items-center gap-3 group select-none"
          >
            <motion.div
              whileHover={{ rotate: 6, scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 16 }}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] flex items-center justify-center text-white font-bold text-lg overflow-hidden bg-gradient-to-br from-[#37A05B] via-[#2F8B4E] to-[#143D22] shadow-[0_6px_18px_-6px_rgba(30,94,51,0.8)] ring-1 ring-[#D4AF37]/30"
            >
              <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/28 to-transparent" />
              <span className="relative">A</span>
            </motion.div>
            <div>
              <div
                className={`font-display font-bold tracking-[-0.03em] leading-none text-ink transition-all duration-500 ${
                  scrolled ? 'text-[0.95rem] sm:text-base' : 'text-base sm:text-lg'
                }`}
              >
                ASAHI{' '}
                <span className="font-medium text-[#2F8B4E]">Development</span>
              </div>
              <div className="text-[9px] sm:text-[10px] text-ink-muted font-semibold tracking-[0.2em] uppercase mt-1">
                Limited • Kenya
              </div>
            </div>
          </a>

          {/* Desktop Navigation with Smooth Motion Sliding Indicator */}
          <nav
            id="desktop-nav"
            className={`hidden lg:flex items-center gap-0.5 rounded-full p-1 transition-all duration-500 ${
              scrolled
                ? 'bg-[#0B1712]/[0.045] border border-transparent'
                : 'bg-white/55 backdrop-blur-xl border border-hairline shadow-[0_8px_24px_-18px_rgba(11,23,18,0.5)]'
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const isMatch = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-2 text-[11.5px] font-semibold rounded-full whitespace-nowrap transition-colors duration-300 z-10 ${
                    isMatch ? 'text-white' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {isMatch && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full -z-10 bg-gradient-to-br from-[#37A05B] to-[#1E5E33] shadow-[0_6px_16px_-8px_rgba(30,94,51,0.9)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}

            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-lux btn-solid ml-1.5 text-white px-4 py-2 rounded-full text-[11.5px] font-bold flex items-center gap-1.5 whitespace-nowrap"
            >
              <span className="relative z-10">Consult ADL</span>
              <ArrowUpRight size={13} className="relative z-10" />
            </motion.a>
          </nav>

          {/* Mobile Header Right: Call & Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileTap={{ scale: 0.95 }}
              className="btn-lux btn-solid text-white text-[11px] font-bold px-3.5 py-2.5 rounded-xl flex items-center gap-1 whitespace-nowrap"
            >
              <span className="relative z-10">Consult</span>
              <ArrowUpRight size={12} className="relative z-10" />
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={onOpenMobileNav}
              aria-label="Open Mobile Navigation"
              className="w-11 h-11 flex items-center justify-center bg-white/80 backdrop-blur-xl border border-hairline rounded-xl text-ink shadow-[0_6px_18px_-12px_rgba(11,23,18,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F8B4E]/50"
            >
              <Menu size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
