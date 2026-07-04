// src/components/sections/home/Testimonials.tsx
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { FadeIn }    from '@/components/motion/FadeIn'
import { TESTIMONIALS } from '@/data/testimonials'

// CMS-ready: just add entries to src/data/testimonials.ts

const AUTO_INTERVAL = 5500

export function Testimonials() {
  const [active,     setActive]     = useState(0)
  const [direction,  setDirection]  = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragX    = useMotionValue(0)

  const goTo = useCallback((idx: number, dir?: number) => {
    const resolvedDir = dir ?? (idx > active ? 1 : -1)
    setDirection(resolvedDir)
    setActive((idx + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [active])

  const next = useCallback(() => goTo((active + 1) % TESTIMONIALS.length,  1), [active, goTo])
  const prev = useCallback(() => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, -1), [active, goTo])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(next, AUTO_INTERVAL)
  }, [next])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const handleDragEnd = (_: never, info: { offset: { x: number } }) => {
    setIsDragging(false)
    if (info.offset.x < -60) { next(); resetTimer() }
    if (info.offset.x > 60)  { prev(); resetTimer() }
    dragX.set(0)
  }

  const slideVariants = {
    enter:  (d: number) => ({ x: d > 0 ?  60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -60 :  60, opacity: 0, scale: 0.97 }),
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0A0A0A', paddingTop: 'clamp(5rem,10vw,9rem)', paddingBottom: 'clamp(5rem,10vw,9rem)' }}
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)' }}
        aria-hidden="true"
      />

      <Container>

        {/* ── Header (Resend-inspired centered layout) ── */}
        <div className="text-center mb-16 max-w-[44rem] mx-auto">
          <FadeIn>
            <p className="eyebrow mb-5">Client Feedback</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="testimonials-heading"
              className="font-display font-bold text-white mb-5"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', letterSpacing: '-0.04em', lineHeight: 1.06 }}
            >
              Beyond expectations.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans" style={{ fontSize: '1.0625rem', lineHeight: '1.75', color: 'rgba(255,255,255,0.42)' }}>
              Diastral is building digital experiences that create measurable
              outcomes, and our clients notice the difference.
            </p>
          </FadeIn>
        </div>

        {/* ── Desktop: 3-card sliding view ── */}
        <div className="hidden md:block">
          <div className="relative">

            {/* Cards container */}
            <div className="grid grid-cols-3 gap-4" aria-live="polite">
              {[-1, 0, 1].map((offset) => {
                const idx = (active + offset + TESTIMONIALS.length) % TESTIMONIALS.length
                const t   = TESTIMONIALS[idx]
                const isCenter = offset === 0

                return (
                  <motion.div
                    key={`${idx}-${active}`}
                    animate={{
                      opacity: isCenter ? 1 : 0.45,
                      scale:   isCenter ? 1 : 0.97,
                      y:       isCenter ? -4 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => !isCenter && goTo(idx)}
                    className={isCenter ? '' : 'cursor-pointer'}
                  >
                    <div
                      className="flex flex-col justify-between gap-8 p-8 rounded-2xl h-full transition-all duration-300"
                      style={{
                        backgroundColor: isCenter ? '#1A1A1A' : '#141414',
                        border: `1px solid ${isCenter ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'}`,
                        minHeight: '280px',
                        boxShadow: isCenter ? '0 24px 60px rgba(0,0,0,0.4)' : 'none',
                      }}
                    >
                      <div className="flex flex-col gap-5">
                        <span
                          className="font-display select-none"
                          style={{ fontSize: '3rem', lineHeight: 0.75, color: 'rgba(255,215,0,0.2)' }}
                          aria-hidden="true"
                        >
                          &ldquo;
                        </span>
                        <blockquote
                          className="font-display"
                          style={{
                            fontSize:      isCenter ? '1.0625rem' : '0.9375rem',
                            lineHeight:    1.65,
                            color:         isCenter ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.45)',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {t.quote}
                        </blockquote>
                      </div>
                      <figcaption
                        className="flex flex-col gap-1 pt-5"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                      >
                        <span className="font-sans text-sm font-semibold text-white">{t.author}</span>
                        <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.32)' }}>
                          {t.role} · {t.company}
                        </span>
                      </figcaption>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={() => { prev(); resetTimer() }}
                aria-label="Previous testimonial"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/[0.08]"
                style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { goTo(i); resetTimer() }}
                    aria-label={`Testimonial ${i + 1}`}
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
                aria-label="Next testimonial"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/[0.08]"
                style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile: Single card swipeable ── */}
        <div className="md:hidden">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current) }}
            onMouseLeave={() => resetTimer()}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                className="flex flex-col justify-between gap-8 p-7 rounded-2xl cursor-grab active:cursor-grabbing select-none"
                style={{
                  backgroundColor: '#1A1A1A',
                  border:          '1px solid rgba(255,255,255,0.1)',
                  minHeight:       '260px',
                }}
              >
                <div className="flex flex-col gap-5">
                  <span
                    className="font-display"
                    style={{ fontSize: '2.75rem', lineHeight: 0.75, color: 'rgba(255,215,0,0.2)' }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote
                    className="font-display"
                    style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.75)', letterSpacing: '-0.01em' }}
                  >
                    {TESTIMONIALS[active].quote}
                  </blockquote>
                </div>
                <figcaption className="flex flex-col gap-1 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="font-sans text-sm font-semibold text-white">{TESTIMONIALS[active].author}</span>
                  <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.32)' }}>
                    {TESTIMONIALS[active].role} · {TESTIMONIALS[active].company}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <p className="text-center mt-4 font-sans text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
              Swipe to browse
            </p>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetTimer() }}
                aria-label={`Testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width:           i === active ? '1.5rem' : '0.375rem',
                  height:          '0.375rem',
                  backgroundColor: i === active ? '#FFD700' : 'rgba(255,255,255,0.18)',
                }}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  )
}