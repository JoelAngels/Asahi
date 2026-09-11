'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { NAV_ITEMS } from '../../data/navigation';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

export const Footer: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href, -75);
  };

  return (
    <footer className="relative bg-[#050B08] text-white/80 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div
        className="absolute -top-32 left-1/4 w-[40rem] h-[28rem] rounded-full bg-[radial-gradient(ellipse,rgba(47,139,78,0.13)_0%,transparent_65%)] blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="relative w-11 h-11 rounded-[14px] overflow-hidden bg-gradient-to-br from-[#37A05B] via-[#2F8B4E] to-[#143D22] flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_20px_-8px_rgba(47,139,78,0.9)] ring-1 ring-[#D4AF37]/30">
                A
              </div>
              <div>
                <span className="font-display font-bold text-base sm:text-lg text-white tracking-[-0.03em]">
                  ASAHI <span className="text-[#34D399]">Development</span>
                </span>
                <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-semibold m-0 mt-1">
                  Limited • Kenya
                </p>
              </div>
            </div>
            <p className="text-[12.5px] sm:text-[13px] text-white/50 leading-[1.75] font-light mb-7 max-w-sm">
              {COMPANY_INFO.description}
            </p>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-[10.5px] text-white/65 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              <span>Registered Civil & Property Developers • Kenya</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-bold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-[12.5px] sm:text-[13px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-white/55 hover:text-[#34D399] transition-colors duration-300 inline-block py-0.5 link-underline font-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Summary */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-bold mb-5">
              Core Capabilities
            </h4>
            <ul className="space-y-3 text-[12.5px] sm:text-[13px] text-white/50 font-light">
              <li className="hover:text-white/85 transition-colors duration-300">Residential Master-Planned Estates</li>
              <li className="hover:text-white/85 transition-colors duration-300">Commercial Parks & Logistics Hubs</li>
              <li className="hover:text-white/85 transition-colors duration-300">Civil Arterial Roads & Storm Drainage</li>
              <li className="hover:text-white/85 transition-colors duration-300">Industrial SWRO Desalination & STPs</li>
              <li className="hover:text-white/85 transition-colors duration-300">Transaction & Concessional PPP Advisory</li>
            </ul>
          </div>

          {/* Direct Nairobi Office */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-bold mb-5">
              Nairobi Office
            </h4>
            <div className="space-y-4 text-[12.5px] sm:text-[13px] text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPin size={17} className="text-[#34D399] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.box}
                  <br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={17} className="text-[#34D399] shrink-0" />
                <a
                  href={COMPANY_INFO.contact.phoneHref}
                  className="font-bold text-[#34D399] link-underline"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={17} className="text-[#34D399] shrink-0" />
                <a
                  href={COMPANY_INFO.contact.emailHref}
                  className="hover:text-[#34D399] transition-colors duration-300 truncate font-light"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="rule-fade-dark mb-7" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-white/35 font-light">
          <p>© {new Date().getFullYear()} ASAHI Development Limited. All rights reserved.</p>
          <p>Engineered with Lenis, GSAP & Motion</p>
        </div>
      </div>
    </footer>
  );
};
