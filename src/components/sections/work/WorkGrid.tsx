// src/components/sections/work/WorkGrid.tsx
'use client'

import { useState }  from 'react'
import Link           from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Container }  from '@/components/layout/Container'
import { FadeIn }     from '@/components/motion/FadeIn'
import { CASE_STUDIES } from '@/data/work'
import { cn }         from '@/lib/utils'

const FILTERS = ['All',]

export function WorkGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((s) => s.tags.some((t) => t.includes(active.replace(' Dev', ''))))

  return (
    <>
      {/* ── Header ── */}
      <div
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ backgroundColor: '#0E0E0E' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,215,0,0.05) 0%, transparent 70%)',
          }}
        />
        <Container>
          <div className="max-w-[44rem]">
            <FadeIn>
              <p className="eyebrow mb-5">Selected Work</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1
                className="font-display font-bold text-white mb-6"
                style={{
                  fontSize:      'clamp(2.75rem, 6vw, 5rem)',
                  letterSpacing: '-0.04em',
                  lineHeight:    1.04,
                }}
              >
                Work that
                <br />
                <span style={{ color: 'rgba(250,250,250,0.35)' }}>
                  speaks for itself.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.36}>
              <p
                className="font-sans"
                style={{
                  fontSize:   '1.0625rem',
                  lineHeight: '1.78',
                  color:      'rgba(255,255,255,0.4)',
                  maxWidth:   '32rem',
                }}
              >
                View our work and case studies 
                to see how we’ve helped businesses like yours grow and succeed in the digital world.
              </p>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* ── Filter Bar ── */}
      <div
        className="sticky top-16 z-30 py-4"
        style={{
          backgroundColor: 'rgba(14,14,14,0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  'shrink-0 px-4 h-8 rounded-full font-sans text-xs font-medium transition-all duration-200',
                  active === f
                    ? 'text-[#0E0E0E]'
                    : 'text-white/40 hover:text-white/70'
                )}
                style={
                  active === f
                    ? { backgroundColor: '#FFD700' }
                    : { backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }
                }
              >
                {f}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Case Study Grid ── */}
      <section
        className="section-padding"
        style={{ backgroundColor: '#0E0E0E' }}
      >
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {filtered.map((study) => (
                <Link
                  key={study.id}
                  href={`/work/${study.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 px-7 py-6 rounded-xl transition-all duration-200"
                  style={{
                    backgroundColor: '#141414',
                    border:          '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.11)'
                    e.currentTarget.style.backgroundColor = '#181818'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.backgroundColor = '#141414'
                  }}
                >
                  {/* Year */}
                  <span
                    className="font-mono text-xs hidden md:block"
                    style={{ color: 'rgba(255,255,255,0.2)' }}
                  >
                    {study.year}
                  </span>

                  {/* Main */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-sans text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: 'rgba(255,215,0,0.07)',
                            color:           'rgba(255,215,0,0.6)',
                            border:          '1px solid rgba(255,215,0,0.1)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      {study.locked && (
                        <span
                          className="font-sans text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            color:           'rgba(255,255,255,0.35)',
                            border:          '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <h2
                      className="font-display font-bold text-white group-hover:text-white/90"
                      style={{
                        fontSize:      'clamp(1.125rem, 2vw, 1.375rem)',
                        letterSpacing: '-0.02em',
                        lineHeight:    1.25,
                      }}
                    >
                      {study.title}
                    </h2>
                    <p
                      className="font-sans text-sm"
                      style={{ color: 'rgba(255,255,255,0.35)' }}
                    >
                      {study.client}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    width="18" height="18" viewBox="0 0 18 18" fill="none"
                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: 'rgba(255,255,255,0.2)' }}
                    aria-hidden="true"
                  >
                    <path d="M3 9H15M10.5 4.5L15 9L10.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}

              {filtered.length === 0 && (
                <p
                  className="text-center font-sans py-20"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  No work in this category yet.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>
    </>
  )
}