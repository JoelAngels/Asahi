'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import { COMPANY_INFO } from '../../data/companyInfo';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { scrollTo } = useSmoothScroll();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      scrollTo(href, -70);
    }, 280);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Frosted Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050B08]/65 backdrop-blur-md z-[950]"
            aria-hidden="true"
          />

          {/* Spring Slide-out Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 w-[86vw] max-w-[370px] h-[100dvh] bg-paper-warm z-[999] shadow-[-24px_0_60px_-20px_rgba(11,23,18,0.5)] flex flex-col justify-between p-6 sm:p-7 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 mb-7 border-b border-hairline">
                <Image
                  src="/asahi-logo.png"
                  alt="ASAHI Development Ltd"
                  width={1665}
                  height={464}
                  className="h-8 w-auto"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  aria-label="Close Navigation"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-hairline text-ink-soft hover:text-ink hover:border-[#2F8B4E]/35 transition-colors focus:outline-none"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Items with Staggered Motion */}
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.04, duration: 0.3 }}
                    whileTap={{ scale: 0.98, backgroundColor: '#EBF7EF' }}
                    className="flex items-center justify-between px-4 py-3.5 min-h-[50px] rounded-xl text-ink-soft font-semibold text-[13.5px] hover:bg-white hover:text-[#1E5E33] border border-transparent hover:border-hairline transition-all duration-300"
                  >
                    <span>{item.label}</span>
                    <span className="text-[#2F8B4E]/35 text-xs font-mono">→</span>
                  </motion.a>
                ))}
              </nav>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <motion.a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  whileTap={{ scale: 0.97 }}
                  className="btn-lux btn-solid w-full min-h-[52px] text-white font-semibold text-[13.5px] rounded-xl flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">Request Consultation</span>
                  <ArrowUpRight size={17} className="relative z-10" />
                </motion.a>
              </div>
            </div>

            {/* Contact Footer */}
            <div className="pt-6 mt-6 border-t border-hairline text-xs text-ink-soft space-y-3.5">
              <a
                href={COMPANY_INFO.contact.phoneHref}
                className="flex items-center gap-3 py-1 text-ink font-semibold hover:text-[#2F8B4E] transition-colors"
              >
                <Phone size={16} className="text-[#2F8B4E] shrink-0" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>
              <a
                href={COMPANY_INFO.contact.emailHref}
                className="flex items-center gap-3 py-1 text-ink-soft hover:text-[#2F8B4E] transition-colors truncate font-light"
              >
                <Mail size={16} className="text-[#2F8B4E] shrink-0" />
                <span className="truncate">{COMPANY_INFO.contact.email}</span>
              </a>
              <div className="flex items-start gap-3 py-1 text-ink-muted font-light">
                <MapPin size={16} className="text-[#2F8B4E] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                </span>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
