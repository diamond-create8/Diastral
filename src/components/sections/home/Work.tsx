// src/components/sections/home/Work.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'
import { CASE_STUDIES } from '@/data/work'
import type { CaseStudy } from '@/types'
import Image from 'next/image'


// ─── Project Thumbnail (CSS-only abstract visual) ─────────────────────────────
// These serve as premium visual stand-ins until real project imagery exists.
// ─── Project Thumbnail ─────────────────────────────────────────────────────────
function Thumbnail({ slug, client }: { slug: string; client: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={`/images/work/${slug}/Hero.png`}
        alt={`${client} — project preview`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 480px"
      />
    </div>
  )
}

  

// ─── Case Study Card ──────────────────────────────────────────────────────────
function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 md:grid-cols-[38fr_62fr] overflow-hidden rounded-xl"
      style={{
        backgroundColor: '#141414',
        border:          '1px solid rgba(255,255,255,0.06)',
        minHeight:       '340px',
      }}
    >
      {/* ── Visual Area ── */}
      <div className="relative min-h-[220px] md:min-h-0 overflow-hidden">
        <Thumbnail slug={study.slug} client={study.client} />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: 'rgba(14,14,14,0.75)' }}
        >
          <span
            className="font-sans text-xs font-semibold tracking-[0.12em] uppercase flex items-center gap-2"
            style={{ color: 'rgba(255,215,0,0.85)' }}
          >
            View Case Study
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5H11M7.5 3L11 6.5L7.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="flex flex-col justify-between p-8 lg:p-10">
        {/* Top: meta + title + excerpt */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
                <span
                  className="font-sans text-xs font-medium tracking-wide uppercase"
                  style={{ color: 'rgba(255,215,0,0.6)' }}
                >
                  {study.category}
                </span>
                {study.locked && (
                  <span
                    className="font-sans text-[10px] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      color:           'rgba(255,255,255,0.4)',
                      border:          '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    Coming Soon
                  </span>
                )}
          </div>

          <h3
            className="font-display font-bold text-white transition-colors duration-200 group-hover:text-white"
            style={{
              fontSize:      'clamp(1.25rem, 2vw, 1.5rem)',
              letterSpacing: '-0.025em',
              lineHeight:    1.25,
            }}
          >
            {study.title}
          </h3>

          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.38)', maxWidth: '32rem' }}
          >
            {study.excerpt}
          </p>
        </div>

        {/* Bottom: metrics + link */}
        <div className="mt-8">
          {/* Metrics */}
          {study.results && (
            <div
              className="grid grid-cols-3 mb-8 pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              {study.results.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-1 pr-4">
                  <span
                    className="font-display font-bold"
                    style={{
                      fontSize:      'clamp(1.375rem, 2.5vw, 1.75rem)',
                      letterSpacing: '-0.03em',
                      color:         '#FAFAFA',
                      lineHeight:    1,
                    }}
                  >
                    {metric.value}
                  </span>
                  <span
                    className="font-sans text-[11px] leading-snug"
                    style={{ color: 'rgba(255,255,255,0.3)' }}
                  >
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Link */}
          <Link
            href={`/work/${study.slug}`}
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.08em] uppercase transition-colors duration-200 text-white/30 hover:text-[#FFD700]"
          >
            Read the full case study
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5H11M7.5 3L11 6.5L7.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Work Section ─────────────────────────────────────────────────────────────
export function Work() {
  const featured = CASE_STUDIES.filter((c) => c.featured)

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#0E0E0E' }}
      aria-labelledby="work-heading"
    >
      <Container>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <p className="eyebrow mb-4">Selected Work</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="work-heading"
                className="font-display font-bold text-white"
                style={{
                  fontSize:      'clamp(2rem, 4vw, 3.25rem)',
                  letterSpacing: '-0.035em',
                  lineHeight:    1.08,
                }}
              >
                Our Latest Work
                <br />
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/40 hover:text-white/75 transition-colors duration-200 shrink-0"
            >
              View all work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7H12M8.5 3.5L12 7L8.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {featured.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

      </Container>
    </section>
  )
}