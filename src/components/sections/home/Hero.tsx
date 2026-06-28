// src/components/sections/home/Hero.tsx
'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/layout/Container'

// ─── Types ────────────────────────────────────────────────────────────────────
interface StatItem {
  value: string
  label: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
  { value: '7+',  label: 'Clients served'     },
  { value: '43+',   label: 'Qualified leads generated'  },
  { value: '100%', label: 'Client retention rate'   },
  { value: '30',   label: 'Days money back guarantee'      },
]

// ─── Clip Reveal — used for each headline line ────────────────────────────────
// The overflow:hidden clips the line; the inner div slides up from below.
// This is the same technique used by Linear, Framer, and Vercel.
function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: '1.05' }}>
      <motion.div
        initial={{ y: '108%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.05,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax — background drifts upward slower than scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const bgY            = useTransform(scrollYProgress, [0, 1], ['0%',  '25%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const contentY       = useTransform(scrollYProgress, [0, 0.45], ['0%', '-6%'])

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: '100dvh' }}
      aria-label="Hero — Diastral Web Solutions"
    >

      {/* ── Background layers ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
        aria-hidden="true"
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(
              circle,
              rgba(255,255,255,0.18) 1px,
              transparent 1px
            )`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Gold radial bloom — top center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 45% at 50% -5%, rgba(255,215,0,0.08) 0%, transparent 72%)',
          }}
        />

        {/* Left + right vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, rgba(14,14,14,0.85) 100%)',
          }}
        />

        {/* Bottom fade — blends into next section cleanly */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '220px',
            background:
              'linear-gradient(to bottom, transparent 0%, #0E0E0E 100%)',
          }}
        />
      </motion.div>

      {/* ── Main Content ── */}
      <motion.div
        className="relative flex-1 flex items-center"
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        <Container>
          <div
            className="max-w-[56rem]"
            style={{ paddingTop: '9rem', paddingBottom: '4rem' }}
          >

            

            {/* Headline — 3-line clip reveal */}
            <h1
              className="font-display font-bold mb-8 text-white"
              style={{
                fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
                letterSpacing: '-0.04em',
                lineHeight: '1.04',
              }}
            >
              <RevealLine delay={0.28}>
                <span>Turn your</span>
              </RevealLine>

              <RevealLine delay={0.42}>
                <span>online presence </span>
              </RevealLine>

              <RevealLine delay={0.56}>
                {/*
                  The last line sits at reduced opacity.
                  This technique — used by Vercel, Linear, Framer —
                  creates typographic depth without adding a second colour.
                */}
                <span style={{ color: 'rgba(250,250,250,0.38)' }}>
                  into your best salesperson.
                </span>
              </RevealLine>
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.78,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-sans mb-10"
              style={{
                fontSize: '1.0625rem',
                lineHeight: '1.78',
                color: 'rgba(255,255,255,0.42)',
                maxWidth: '36rem',
              }}
            >
              We build the websites that attract your ideal customers, 
              the SEO, Meta and Google campaigns that reach them, 
              and the marketing systems that convert and keep them, so your business grows online, consistently.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.94,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Primary CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className={[
                    'inline-flex items-center gap-2',
                    'font-sans font-semibold text-[0.9375rem] text-[#0E0E0E]',
                    'px-7 h-[52px] rounded-[10px]',
                    'transition-all duration-200',
                  ].join(' ')}
                  style={{
                    backgroundColor: '#FFD700',
                    boxShadow: '0 0 0 0 rgba(255,215,0,0)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.backgroundColor = '#FFE44D'
                    el.style.boxShadow = '0 8px 32px rgba(255,215,0,0.18)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.backgroundColor = '#FFD700'
                    el.style.boxShadow = '0 0 0 0 rgba(255,215,0,0)'
                  }}
                >
                  Start a Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8H13M9.5 4.5L13 8L9.5 11.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/work"
                  className={[
                    'inline-flex items-center gap-2',
                    'font-sans font-medium text-[0.9375rem]',
                    'px-7 h-[52px] rounded-[10px]',
                    'transition-all duration-200',
                  ].join(' ')}
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'rgba(255,255,255,0.82)'
                    el.style.borderColor = 'rgba(255,255,255,0.16)'
                    el.style.backgroundColor = 'rgba(255,255,255,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'rgba(255,255,255,0.5)'
                    el.style.borderColor = 'rgba(255,255,255,0.09)'
                    el.style.backgroundColor = 'transparent'
                  }}
                >
                  See Our  Work
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* ── Stats Strip ── */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.35 }}
        style={{ borderTop: '1px solid rgba(255,255,255,0.055)' }}
      >
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 1.45 + i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col gap-1.5 py-8 pr-8"
                style={{
                  borderRight:
                    i < STATS.length - 1
                      ? '1px solid rgba(255,255,255,0.055)'
                      : 'none',
                  paddingLeft: i === 0 ? 0 : '2rem',
                }}
              >
                <span
                  className="font-display font-bold text-white"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    letterSpacing: '-0.035em',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-sans text-xs tracking-wide"
                  style={{ color: 'rgba(255,255,255,0.32)' }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.1 }}
        className="absolute bottom-[108px] right-10 hidden lg:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          className="font-sans text-[10px] uppercase tracking-[0.18em]"
          style={{
            color: 'rgba(255,255,255,0.18)',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll to explore
        </span>
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 origin-top"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,215,0,0.4), transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}