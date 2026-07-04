// src/components/sections/home/Hero.tsx
'use client'
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Container } from '@/components/layout/Container'
import Link from 'next/link'
// ─── Data ─────────────────────────────────────────────────────────────────────
/*const STATS = [
  { value: '7+',   label: 'Clients served'             },
  { value: '43+',  label: 'Qualified leads generated'  },
  { value: '100%', label: 'Client retention rate'      },
  { value: '30',   label: 'Days money back guarantee'  },
]*/


// ─── Clip Reveal ──────────────────────────────────────────────────────────────
function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: '1.06' }}>
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
function AnimatedStat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  const match = value.match(/^(\d+\.?\d*)(.*)$/)

  const number = match ? parseFloat(match[1]) : null
  const suffix = match ? match[2] : ''

  const containerRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLSpanElement>(null)

  const inView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  })

  useEffect(() => {
    if (!inView || number === null || !numberRef.current) return

    const controls = animate(0, number, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (!numberRef.current) return

        numberRef.current.textContent = Number.isInteger(number)
          ? Math.round(value).toString()
          : value.toFixed(1)
      },
    })

    return () => controls.stop()
  }, [inView, number])

  return (
    <motion.div
      ref={containerRef}
      className="group flex flex-col items-center text-center gap-1.5 py-8 cursor-default"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
    >
      <span
        className="font-display font-bold text-white transition-colors duration-300 group-hover:text-[#FFD700]"
        style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          letterSpacing: '-0.035em',
          lineHeight: 1,
        }}
      >
        {number !== null ? (
          <>
            <span ref={numberRef}>0</span>
            {suffix}
          </>
        ) : (
          value
        )}
      </span>

      <span
        className="font-sans text-xs tracking-wide"
        style={{
          color: 'rgba(255,255,255,0.32)',
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}
// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const bgY            = useTransform(scrollYProgress, [0, 1],    ['0%', '25%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const contentY       = useTransform(scrollYProgress, [0, 0.45], ['0%', '-6%'])

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: '100dvh' }}
      aria-label="Hero"
    >
      {/* ── Background Video Layer ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
        aria-hidden="true"
      >
        {/*
          ── BACKGROUND VIDEO ─────────────────────────────────────────
          Place your video file at: public/video/hero-bg.mp4

          autoPlay + muted + playsInline = required for autoplay
          on mobile browsers (especially iOS Safari)

          loop = video repeats seamlessly
          poster = fallback image shown before video loads
          ─────────────────────────────────────────────────────────────
        */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/work/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.67 }}
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay — keeps text readable over the video */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(14,14,14,0.55)' }}
        />

        {/* Gold bloom — sits above video, below text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 45% at 50% -5%, rgba(255,215,0,0.1) 0%, transparent 72%)',
          }}
        />

        {/* Edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 50%, transparent 30%, rgba(14,14,14,0.75) 100%)',
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '220px',
            background: 'linear-gradient(to bottom, transparent 0%, #0E0E0E 100%)',
          }}
        />
      </motion.div>

      {/* ── Main Content — now centered ── */}
      <motion.div
        className="relative flex-1 flex items-center justify-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <Container>
          <div
            className="flex flex-col items-center text-center mx-auto"
            style={{
              maxWidth:     '52rem',
              paddingTop:   '9rem',
              paddingBottom:'4rem',
            }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 mb-10"
            >
              
              
            </motion.div>

            {/* Headline */}
            <h1
              className="font-display font-bold mb-8 text-white"
              style={{
                fontSize:      'clamp(2.75rem, 6vw, 5.5rem)',
                letterSpacing: '-0.04em',
                lineHeight:    '1.04',
              }}
            >
              <RevealLine delay={0.28}>
                <span>Turn your online presence</span>
              </RevealLine>
              <RevealLine delay={0.42}>
                <span>into your best</span>
              </RevealLine>
              <RevealLine delay={0.56}>
                <span style={{ color: 'rgba(250,250,250,0.38)' }}>
                  salesperson.
                </span>
              </RevealLine>
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans mb-10 mx-auto"
              style={{
                fontSize:   '1.0625rem',
                lineHeight: '1.78',
                color:      'rgba(255,255,255,0.45)',
                maxWidth:   '36rem',
              }}
            >
              We build the websites that attract your ideal customers, the SEO,
              Meta and Google campaigns that reach them, and the marketing
              systems that convert and keep them, so your business grows
              online, consistently.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.94, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-sans font-semibold text-[0.9375rem] text-[#0E0E0E] bg-[#FFD700] hover:bg-[#FFE44D] px-7 h-[52px] rounded-[10px] transition-all duration-200 hover:shadow-[0_8px_32px_rgba(255,215,0,0.18)]"
                >
                  Start a Project
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 font-sans font-medium text-[0.9375rem] text-white/50 hover:text-white/80 px-7 h-[52px] rounded-[10px] border border-white/[0.09] hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-200"
                >
                  See Our Work
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* ── Stats Strip ── 
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
    transition={{
      delay: 1.45 + i * 0.09,
    }}
    style={{
      borderRight:
        i < STATS.length - 1
          ? '1px solid rgba(255,255,255,0.055)'
          : 'none',
    }}
  >
    <AnimatedStat
      value={stat.value}
      label={stat.label}
    />
  </motion.div>
))}
          </div>
        </Container>
      </motion.div> */}
    </section>
  )
}