// src/components/sections/home/CaseStudySlider.tsx
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link                                          from 'next/link'
import Image                                         from 'next/image'
import { motion, AnimatePresence }                   from 'framer-motion'
import { Container }                                 from '@/components/layout/Container'
import { FadeIn }                                    from '@/components/motion/FadeIn'
import { CASE_STUDIES }                              from '@/data/work'

const SLIDES = CASE_STUDIES.filter((s) => !s.locked).slice(0, 3)
const AUTO_INTERVAL = 6000

export function CaseStudySlider() {
  const [active, setActive]       = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((idx: number, dir?: number) => {
    const resolved = dir ?? (idx > active ? 1 : -1)
    setDirection(resolved)
    setActive((idx + SLIDES.length) % SLIDES.length)
  }, [active])

  const next = useCallback(() => goTo((active + 1) % SLIDES.length, 1), [active, goTo])
  const prev = useCallback(() => goTo((active - 1 + SLIDES.length) % SLIDES.length, -1), [active, goTo])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(next, AUTO_INTERVAL)
  }, [next])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const study = SLIDES[active]

  const slideVariants = {
    enter:  (d: number) => ({ x: d > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -50 : 50, opacity: 0 }),
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0E0E0E', paddingTop: 'clamp(5rem,10vw,9rem)', paddingBottom: 'clamp(5rem,10vw,9rem)' }}
      aria-labelledby="case-slider-heading"
    >
      <Container>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <p className="eyebrow mb-4">Selected Work</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="case-slider-heading"
                className="font-display font-bold text-white"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.035em', lineHeight: 1.08 }}
              >
                Results that speak
                <br />
                <span style={{ color: 'rgba(250,250,250,0.3)' }}>for themselves.</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
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

        {/* ── Slide ── */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#141414', border: '1px solid rgba(255,255,255,0.07)' }}
          onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current) }}
          onMouseLeave={resetTimer}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={study.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]"
            >
              {/* Image */}
              <div className="relative" style={{ minHeight: '280px', backgroundColor: '#0E0E0E' }}>
                <Image
                  src={`/images/work/${study.slug}/${study.sliderImage ?? 'hero.jpg'}`}
                  alt={`${study.client} — project preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(14,14,14,0.5), transparent 40%)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-sans text-xs font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded"
                      style={{ backgroundColor: 'rgba(255,215,0,0.07)', color: 'rgba(255,215,0,0.65)', border: '1px solid rgba(255,215,0,0.12)' }}
                    >
                      {study.category}
                    </span>
                    <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      {study.year}
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold text-white"
                    style={{ fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)', letterSpacing: '-0.025em', lineHeight: 1.2 }}
                  >
                    {study.title}
                  </h3>

                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.42)', maxWidth: '32rem' }}
                  >
                    {study.excerpt}
                  </p>
                </div>

                {/* Results */}
                <div
                  className="grid grid-cols-3 gap-4 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {study.results?.map((r) => (
                    <div key={r.label} className="flex flex-col gap-1">
                      <span
                        className="font-display font-bold"
                        style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', letterSpacing: '-0.03em', color: '#FAFAFA', lineHeight: 1 }}
                      >
                        {r.value}
                      </span>
                      <span
                        className="font-sans text-[11px] leading-snug"
                        style={{ color: 'rgba(255,255,255,0.3)' }}
                      >
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/work/${study.slug}`}
                  className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.08em] uppercase transition-colors duration-200 text-white/30 hover:text-[#FFD700] w-fit"
                >
                  Read the full case study
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5H11M7.5 3L11 6.5L7.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => { prev(); resetTimer() }}
            aria-label="Previous case study"
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/[0.08]"
            style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div className="flex items-center gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { goTo(i); resetTimer() }}
                aria-label={`Go to ${s.client}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width:           i === active ? '1.5rem' : '0.375rem',
                  height:          '0.375rem',
                  backgroundColor: i === active ? '#FFD700' : 'rgba(255,255,255,0.18)',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => { next(); resetTimer() }}
            aria-label="Next case study"
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/[0.08]"
            style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

      </Container>
    </section>
  )
}