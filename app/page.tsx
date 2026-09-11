'use client';

import { useState } from 'react';
import { SmoothScrollProvider } from '@/context/SmoothScrollContext';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Header } from '@/components/layout/Header';
import { MobileNav } from '@/components/layout/MobileNav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { CompanyProfile } from '@/components/sections/CompanyProfile';
import { PropertySolutions } from '@/components/sections/PropertySolutions';
import { Projects } from '@/components/sections/Projects';
import { Infrastructure } from '@/components/sections/Infrastructure';
import { WaterSolutions } from '@/components/sections/WaterSolutions';
import { Consultancy } from '@/components/sections/Consultancy';
import { ClosingBanner } from '@/components/sections/ClosingBanner';
import { ContactSection } from '@/components/sections/ContactSection';
import { BackToTop } from '@/components/ui/BackToTop';

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div
        id="top"
        className="min-h-screen bg-paper text-ink font-sans antialiased selection:bg-[#2F8B4E] selection:text-white overflow-x-hidden"
      >
        {/* Dynamic Top Reading Progress with Spring Smoothing */}
        <ScrollProgress />

        {/* Primary Sticky Header */}
        <Header onOpenMobileNav={() => setMobileNavOpen(true)} />

        {/* Slide-out Mobile Drawer */}
        <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

        {/* Main Page Content Assembly */}
        <main>
          <Hero />
          <StatsStrip />
          <CompanyProfile />
          <PropertySolutions />
          <Projects />
          <Infrastructure />
          <WaterSolutions />
          <Consultancy />
          <ClosingBanner />
          <ContactSection />
        </main>

        {/* Corporate Accreditation Footer */}
        <Footer />

        {/* Floating Scroll-to-Top Button */}
        <BackToTop />
      </div>
    </SmoothScrollProvider>
  );
}
