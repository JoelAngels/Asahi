'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MicroLabel } from '../ui/MicroLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { PROJECTS } from '../../data/projects';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { staggerContainer, cardStaggerItem, fadeInUp } from '../../lib/animations';
import { spotlight } from '../../lib/spotlight';

export const Projects: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-paper-warm relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-blueprint mask-fade-y opacity-50" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <MicroLabel text="FLAGSHIP PROJECT PORTFOLIO" />
          <SectionHeading
            title="Signature Developments Taking Shape"
            subtitle="A closer look at the residential addresses ADL is delivering across the Nairobi metropolitan area — engineered end to end, from feasibility and design through to handover."
          />
        </motion.div>

        {PROJECTS.map((project) => (
          <article key={project.id}>
            {/* Featured dossier panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden bg-[#071009] shadow-[0_40px_90px_-50px_rgba(11,23,18,0.85)] grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="absolute inset-0 bg-blueprint-dark opacity-40" aria-hidden="true" />

              {/* Visual */}
              <div className="corner-ticks relative lg:col-span-6 min-h-[340px] sm:min-h-[420px] lg:min-h-[660px] overflow-hidden">
                <Image
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#071009] via-[#071009]/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#071009]"
                  aria-hidden="true"
                />

                {/* Status */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#071009]/70 backdrop-blur-xl border border-[#34D399]/30">
                  <span className="relative flex items-center justify-center w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-[#34D399] opacity-60 animate-ping" />
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Detail */}
              <div className="relative lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-white/50 mb-5">
                  <MapPin size={15} className="text-[#34D399] shrink-0" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                    {project.location}
                  </span>
                </div>

                <h3 className="font-display text-[2.1rem] sm:text-5xl lg:text-[3.2rem] font-semibold leading-[1.02] tracking-[-0.042em] text-white mb-4">
                  {project.name}
                </h3>

                <p className="text-[#34D399] font-semibold text-[0.95rem] sm:text-base mb-6 tracking-[-0.01em]">
                  {project.tagline}
                </p>

                <p className="text-white/55 text-[13.5px] sm:text-[0.95rem] leading-[1.75] font-light mb-5">
                  {project.summary}
                </p>
                <p className="text-white/45 text-[13px] sm:text-[0.9rem] leading-[1.75] font-light mb-9">
                  {project.overview}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 mb-9">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="relative pl-4">
                      <span className="absolute left-0 top-1 bottom-1 w-px bg-white/12" aria-hidden="true" />
                      <div className="font-display tabular text-2xl sm:text-[1.75rem] font-semibold text-white leading-none tracking-[-0.04em] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rule-fade-dark mb-7" />

                {/* Price + CTA */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 mb-2">
                      {project.priceLabel}
                    </div>
                    <div className="font-display text-3xl sm:text-[2.4rem] font-semibold text-white leading-none tracking-[-0.04em]">
                      {project.priceValue}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    onClick={() => scrollTo('#contact', -90)}
                    className="btn-lux btn-solid group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-white font-semibold text-[0.9rem] rounded-full min-h-[52px] shrink-0"
                  >
                    <span className="relative z-10">Enquire About {project.name}</span>
                    <ArrowRight
                      size={17}
                      className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Unit mix + features */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="lg:col-span-7"
              >
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted mb-4 px-1">
                  Unit Mix
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.unitTypes.map((unit) => (
                    <motion.div
                      key={unit.id}
                      variants={cardStaggerItem}
                      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                      onMouseMove={spotlight}
                      className="card-lux rounded-[1.25rem] p-6 group"
                    >
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div>
                          <div className="font-display text-[1.05rem] font-semibold tracking-tight text-ink leading-snug group-hover:text-[#1E5E33] transition-colors duration-300">
                            {unit.category}
                          </div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted mt-1.5">
                            {unit.variant}
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E5E33] bg-[#2F8B4E]/8 border border-[#2F8B4E]/15 px-3 py-1.5 rounded-full whitespace-nowrap">
                          {unit.size}
                        </span>
                      </div>

                      <div className="pt-4 border-t border-hairline flex items-baseline gap-2">
                        <span className="font-display tabular text-2xl font-semibold text-ink leading-none tracking-[-0.035em]">
                          {unit.units}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                          Units
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5"
              >
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted mb-4 px-1">
                  Key Features
                </h4>
                <div onMouseMove={spotlight} className="card-lux rounded-[1.25rem] p-7 h-[calc(100%-2rem)]">
                  <ul className="space-y-3.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#2F8B4E] shrink-0 mt-0.5" />
                        <span className="text-[13px] sm:text-[0.875rem] text-ink-soft leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Development & amenities gallery */}
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted mb-4 mt-10 px-1">
              The Development
            </h4>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {project.gallery.map((shot) => (
                <motion.figure
                  key={shot.src}
                  variants={cardStaggerItem}
                  whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                  className="relative rounded-[1.25rem] overflow-hidden aspect-[16/10] ring-1 ring-black/5 shadow-[0_20px_50px_-34px_rgba(11,23,18,0.7)] group"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 620px"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#071009]/75 via-[#071009]/5 to-transparent"
                    aria-hidden="true"
                  />
                  {shot.caption ? (
                    <figcaption className="absolute bottom-0 inset-x-0 p-5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-white/90">
                      {shot.caption}
                    </figcaption>
                  ) : null}
                </motion.figure>
              ))}
            </motion.div>

            <p className="text-[11.5px] text-ink-muted font-light mt-4 px-1">
              {project.galleryCaption}
            </p>

            {/* Interiors gallery */}
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted mb-4 mt-10 px-1">
              Inside the Residences
            </h4>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {project.interiors.map((shot) => (
                <motion.figure
                  key={shot.src}
                  variants={cardStaggerItem}
                  whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                  className="relative rounded-[1.25rem] overflow-hidden aspect-[4/3] ring-1 ring-black/5 shadow-[0_20px_50px_-34px_rgba(11,23,18,0.7)] group"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#071009]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  {shot.caption ? (
                    <figcaption className="absolute bottom-0 inset-x-0 p-4 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {shot.caption}
                    </figcaption>
                  ) : null}
                </motion.figure>
              ))}
            </motion.div>

            <p className="text-[11.5px] text-ink-muted font-light mt-4 px-1">
              {project.interiorsCaption}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
