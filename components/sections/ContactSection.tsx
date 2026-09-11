'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MicroLabel } from '../ui/MicroLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { COMPANY_INFO } from '../../data/companyInfo';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { fadeInUp, staggerContainer, cardStaggerItem } from '../../lib/animations';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setRefCode(`ADL-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 750);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-paper relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-blueprint mask-fade-y opacity-45" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <MicroLabel text="GET IN TOUCH" />
          <SectionHeading
            title="Direct Commercial & Engineering Consultation"
            subtitle="Whether you require turnkey water treatment plants, master-planned residential advisory, or infrastructure contracting, speak directly with ADL's technical leadership."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start"
        >
          {/* Left Column: Office Coordinates */}
          <motion.div variants={cardStaggerItem} className="lg:col-span-5">
            <div className="card-lux rounded-[1.75rem] p-7 sm:p-9">
              <h3 className="font-display text-xl sm:text-[1.6rem] font-semibold tracking-[-0.03em] text-ink mb-8">
                ASAHI Headquarters
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl chip-icon flex items-center justify-center shrink-0 text-[#2F8B4E]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-ink mb-1.5 tracking-[-0.01em]">Physical Location</h4>
                    <p className="text-[12.5px] sm:text-[13px] text-ink-soft leading-[1.7] font-light">
                      {COMPANY_INFO.address.street}
                      <br />
                      {COMPANY_INFO.address.box}
                      <br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl chip-icon flex items-center justify-center shrink-0 text-[#2F8B4E]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-ink mb-1.5 tracking-[-0.01em]">Telephone & WhatsApp</h4>
                    <a
                      href={COMPANY_INFO.contact.phoneHref}
                      className="text-[12.5px] sm:text-[13px] font-bold text-[#1E5E33] link-underline"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl chip-icon flex items-center justify-center shrink-0 text-[#2F8B4E]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-ink mb-1.5 tracking-[-0.01em]">Email Inquiries</h4>
                    <a
                      href={COMPANY_INFO.contact.emailHref}
                      className="text-[12.5px] sm:text-[13px] text-ink-soft hover:text-[#2F8B4E] transition-colors truncate block"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl chip-icon flex items-center justify-center shrink-0 text-[#2F8B4E]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-ink mb-1.5 tracking-[-0.01em]">Operating Hours</h4>
                    <p className="text-[12.5px] sm:text-[13px] text-ink-soft font-light">
                      {COMPANY_INFO.contact.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div variants={cardStaggerItem} className="lg:col-span-7">
            <div className="card-lux rounded-[1.75rem] p-7 sm:p-9 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
                      className="w-20 h-20 rounded-full chip-icon text-[#2F8B4E] flex items-center justify-center mx-auto mb-7"
                    >
                      <CheckCircle2 size={38} />
                    </motion.div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink mb-3">
                      Inquiry Transmitted Successfully
                    </h3>
                    <p className="text-ink-soft text-sm sm:text-[0.95rem] font-light max-w-md mx-auto mb-7 leading-[1.75]">
                      Thank you for contacting ASAHI Development Limited. Our technical and
                      commercial advisory board will review your specifications and contact you
                      within 24 business hours.
                    </p>
                    <div className="inline-block bg-[#2F8B4E]/8 border border-[#2F8B4E]/20 text-[#1E5E33] font-mono font-bold px-5 py-2.5 rounded-full text-[12.5px] tracking-wide">
                      Reference: {refCode}
                    </div>
                    <div className="mt-8">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-[11.5px] font-semibold text-ink-muted hover:text-ink underline underline-offset-4 decoration-ink-muted/30 hover:decoration-ink transition-colors focus:outline-none"
                      >
                        Submit another technical inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink mb-1.5">
                        Request Technical or Commercial Advisory
                      </h3>
                      <p className="text-[12.5px] text-ink-muted font-light">
                        Complete the form below to connect directly with our engineering directors.
                      </p>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-ink-soft uppercase tracking-[0.16em] mb-2">
                        Full Name / Corporate Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eng. David Mwangi"
                        className="w-full px-4 py-3.5 rounded-xl border border-hairline bg-white text-ink text-base placeholder:text-ink-muted/55 shadow-[0_1px_2px_rgba(11,23,18,0.03)] focus:outline-none focus:ring-4 focus:ring-[#2F8B4E]/12 focus:border-[#2F8B4E]/60 transition-all duration-300 min-h-[52px]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-ink-soft uppercase tracking-[0.16em] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="corporate@domain.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-hairline bg-white text-ink text-base placeholder:text-ink-muted/55 shadow-[0_1px_2px_rgba(11,23,18,0.03)] focus:outline-none focus:ring-4 focus:ring-[#2F8B4E]/12 focus:border-[#2F8B4E]/60 transition-all duration-300 min-h-[52px]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-ink-soft uppercase tracking-[0.16em] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+254 700 000 000"
                          className="w-full px-4 py-3.5 rounded-xl border border-hairline bg-white text-ink text-base placeholder:text-ink-muted/55 shadow-[0_1px_2px_rgba(11,23,18,0.03)] focus:outline-none focus:ring-4 focus:ring-[#2F8B4E]/12 focus:border-[#2F8B4E]/60 transition-all duration-300 min-h-[52px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-ink-soft uppercase tracking-[0.16em] mb-2">
                        Primary Engagement Discipline
                      </label>
                      <select
                        defaultValue="water"
                        className="w-full px-4 py-3.5 rounded-xl border border-hairline bg-white text-ink text-base placeholder:text-ink-muted/55 shadow-[0_1px_2px_rgba(11,23,18,0.03)] focus:outline-none focus:ring-4 focus:ring-[#2F8B4E]/12 focus:border-[#2F8B4E]/60 transition-all duration-300 min-h-[52px]"
                      >
                        <option value="water">
                          Turnkey Water & Wastewater Treatment (16 Solutions)
                        </option>
                        <option value="property">Master-Planned Property & Estate Development</option>
                        <option value="infrastructure">Civil Engineering, Roads & Bridges</option>
                        <option value="consultancy">Construction & Project Consultancy Advisory</option>
                        <option value="ppp">Public-Private Partnership (PPP) Structuring</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-ink-soft uppercase tracking-[0.16em] mb-2">
                        Project Scope / Technical Requirements *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Briefly describe project location, estimated acreage or daily water capacity requirements, timeline, etc."
                        className="w-full px-4 py-3.5 rounded-xl border border-hairline bg-white text-ink text-base placeholder:text-ink-muted/55 shadow-[0_1px_2px_rgba(11,23,18,0.03)] focus:outline-none focus:ring-4 focus:ring-[#2F8B4E]/12 focus:border-[#2F8B4E]/60 transition-all duration-300 resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="btn-lux btn-solid w-full py-4 text-white font-semibold text-[0.95rem] rounded-full flex items-center justify-center gap-2 min-h-[54px] disabled:opacity-75 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Transmitting Specifications...</span>
                        </>
                      ) : (
                        <>
                          <Send size={17} />
                          <span>Submit Inquiry to ADL Leadership</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
