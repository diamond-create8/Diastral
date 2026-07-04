// src/components/sections/home/Process.tsx
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence }                   from 'framer-motion'
import Link                                          from 'next/link'
import { Container }                                 from '@/components/layout/Container'
import { FadeIn }                                    from '@/components/motion/FadeIn'

// ─── Tab data ──────────────────────────────────────────────────────────────────
const TABS = [
  {
    id:      'research',
    label:   'Research',
    heading: 'We know your business before we touch the brief.',
    body:    'Every engagement starts with a deep analysis of your business, your audience, and your competitive position. We ask the questions most agencies skip, because strategy built on assumptions produces results built on luck.',
    cta:     'See how it works',
    href:    '/contact',
  },
  {
    id:      'design',
    label:   'Design',
    heading: 'Architecture built for how your business actually grows.',
    body:    'We design systems and interfaces built for scale, not just launch day. Every structural decision. From page hierarchy to data flow, each one is made with performance, maintainability, and your next chapter in mind.',
    cta:     'Start a project',
    href:    '/contact',
  },
  {
    id:      'build',
    label:   'Build',
    heading: 'Production-grade execution.',
    body:    'Clean architecture. Rigorous attention to craft. No shortcuts that quietly become your technical debt. We build things the right way the first time, because rebuilding from scratch six months later isn\'t a growth strategy.',
    cta:     'View our work',
    href:    '/work',
  },
  {
    id:      'support',
    label:   'Support',
    heading: 'We don\'t disappear after launch.',
    body:    'Launch day is the starting gun, not the finish line. We monitor performance, iterate based on real data, and remain a strategic partner long after the site goes live, because the businesses that compound are the ones that never stop optimising.',
    cta:     'Get in touch',
    href:    '/contact',
  },
]

// ─── Illustrations ─────────────────────────────────────────────────────────────
function ResearchIllustration() {
  return (
    <svg viewBox="0 0 440 380" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Orbital rings — mo.agency inspired */}
      <motion.ellipse
        cx="220" cy="190" rx="140" ry="55"
        stroke="rgba(255,215,0,0.18)" strokeWidth="1.2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.ellipse
        cx="220" cy="190" rx="140" ry="55"
        stroke="rgba(255,215,0,0.08)" strokeWidth="1.2"
        transform="rotate(60 220 190)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.ellipse
        cx="220" cy="190" rx="140" ry="55"
        stroke="rgba(255,215,0,0.08)" strokeWidth="1.2"
        transform="rotate(120 220 190)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Central node */}
      <motion.circle
        cx="220" cy="190" r="20"
        fill="rgba(255,215,0,0.1)" stroke="rgba(255,215,0,0.4)" strokeWidth="1.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        cx="220" cy="190" r="6"
        fill="#FFD700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      />

      {/* Orbiting data points */}
      {[
        { x: 360, y: 190, delay: 0.9 },
        { x: 80,  y: 190, delay: 1.0 },
        { x: 290, y: 90,  delay: 1.1 },
        { x: 150, y: 290, delay: 1.2 },
        { x: 220, y: 135, delay: 1.3 },
        { x: 220, y: 245, delay: 1.4 },
      ].map((pt, i) => (
        <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: pt.delay, duration: 0.3 }}>
          <circle cx={pt.x} cy={pt.y} r="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <circle cx={pt.x} cy={pt.y} r="2.5" fill="rgba(255,255,255,0.5)"/>
        </motion.g>
      ))}

      {/* Connection lines to center */}
      {[
        [360,190], [80,190], [290,90], [150,290],
      ].map(([x, y], i) => (
        <motion.line
          key={i}
          x1="220" y1="190" x2={x} y2={y}
          stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
        />
      ))}

      {/* Pulse ring */}
      <motion.circle
        cx="220" cy="190" r="20"
        fill="none" stroke="rgba(255,215,0,0.2)" strokeWidth="1"
        animate={{ r: [20, 45, 45], opacity: [0.6, 0, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
      />
    </svg>
  )
}

function DesignIllustration() {
  const cols = [60, 120, 180, 240, 300, 360]
  const rows = [60, 120, 180, 240, 300]
  return (
    <svg viewBox="0 0 440 380" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Grid lines */}
      {cols.map((x, i) => (
        <motion.line key={`v${i}`} x1={x} y1="40" x2={x} y2="340"
          stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: i * 0.06, duration: 0.7 }}
        />
      ))}
      {rows.map((y, i) => (
        <motion.line key={`h${i}`} x1="40" y1={y} x2="400" y2={y}
          stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.4 + i * 0.06, duration: 0.7 }}
        />
      ))}

      {/* Hero block */}
      <motion.rect x="60" y="60" width="200" height="100" rx="4"
        fill="rgba(255,215,0,0.06)" stroke="rgba(255,215,0,0.3)" strokeWidth="1.2"
        initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: '60px 110px' }}
      />

      {/* Nav block */}
      <motion.rect x="60" y="40" width="320" height="12" rx="2"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
      />

      {/* Content blocks */}
      {[[60,175,140,10],[60,195,180,10],[60,215,100,10]].map(([x,y,w,h], i) => (
        <motion.rect key={i} x={x} y={y} width={w} height={h} rx="2"
          fill="rgba(255,255,255,0.06)"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 1.1 + i * 0.08, duration: 0.4 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      ))}

      {/* Sidebar */}
      <motion.rect x="280" y="60" width="100" height="220" rx="4"
        fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      />

      {/* Gold node markers */}
      {[[60,60],[260,60],[60,160],[260,160]].map(([x,y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="4"
          fill="rgba(255,215,0,0.6)"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 1.4 + i * 0.08 }}
        />
      ))}

      {/* Dimension arrows */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
        <path d="M40 60L40 160M36 64L40 60L44 64M36 156L40 160L44 156" stroke="rgba(255,215,0,0.35)" strokeWidth="1" strokeLinecap="round"/>
        <text x="28" y="113" fill="rgba(255,215,0,0.4)" fontSize="9" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 28 113)">hero</text>
      </motion.g>
    </svg>
  )
}

function BuildIllustration() {
  const layers = [
    { y: 280, w: 280, label: 'Database',   color: 'rgba(255,255,255,0.06)', delay: 0.2 },
    { y: 240, w: 240, label: 'API Layer',   color: 'rgba(255,255,255,0.08)', delay: 0.4 },
    { y: 200, w: 200, label: 'Services',    color: 'rgba(255,255,255,0.10)', delay: 0.6 },
    { y: 160, w: 180, label: 'Components',  color: 'rgba(255,255,255,0.12)', delay: 0.8 },
    { y: 120, w: 160, label: 'UI / UX',     color: 'rgba(255,215,0,0.12)',   delay: 1.0 },
  ]
  return (
    <svg viewBox="0 0 440 380" fill="none" className="w-full h-full" aria-hidden="true">
      {layers.map((layer, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: layer.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Layer block */}
          <rect
            x={(440 - layer.w) / 2 - 20}
            y={layer.y}
            width={layer.w}
            height="28"
            rx="4"
            fill={layer.color}
            stroke={i === 4 ? 'rgba(255,215,0,0.35)' : 'rgba(255,255,255,0.1)'}
            strokeWidth="1"
          />
          {/* Label */}
          <text
            x={220 - 20}
            y={layer.y + 18}
            fill={i === 4 ? 'rgba(255,215,0,0.7)' : 'rgba(255,255,255,0.35)'}
            fontSize="10"
            fontFamily="monospace"
            textAnchor="middle"
          >
            {layer.label}
          </text>
          {/* Connecting lines */}
          {i < layers.length - 1 && (
            <motion.line
              x1={220 - 20} y1={layer.y}
              x2={220 - 20} y2={layers[i + 1].y + 28}
              stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="3 3"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: layer.delay + 0.2, duration: 0.3 }}
            />
          )}
        </motion.g>
      ))}

      {/* Status indicators */}
      {layers.map((layer, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={(440 - layer.w) / 2 - 20 + layer.w - 12}
          cy={layer.y + 14}
          r="4"
          fill={i === 4 ? '#FFD700' : 'rgba(52,211,153,0.6)'}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: layer.delay + 0.3 }}
        />
      ))}

      {/* Code lines below */}
      {[320, 338, 356].map((y, i) => (
        <motion.rect
          key={i} x={120 - 20} y={y}
          width={[120, 80, 100][i]} height="6" rx="2"
          fill="rgba(255,255,255,0.06)"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 1.4 + i * 0.08 }}
          style={{ transformOrigin: `${120 - 20}px ${y}px` }}
        />
      ))}
    </svg>
  )
}

function SupportIllustration() {
  return (
    <svg viewBox="0 0 440 380" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Outer orbit */}
      <motion.circle
        cx="210" cy="190" r="130"
        stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="6 6"
        initial={{ rotate: 0 }} animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '210px 190px' }}
      />
      {/* Mid orbit */}
      <motion.circle
        cx="210" cy="190" r="85"
        stroke="rgba(255,215,0,0.12)" strokeWidth="1"
        initial={{ rotate: 0 }} animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '210px 190px' }}
      />
      {/* Inner orbit */}
      <motion.circle
        cx="210" cy="190" r="45"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1"
      />

      {/* Center */}
      <circle cx="210" cy="190" r="28" fill="rgba(255,215,0,0.08)" stroke="rgba(255,215,0,0.3)" strokeWidth="1.5"/>
      <motion.circle cx="210" cy="190" r="28" fill="none" stroke="rgba(255,215,0,0.15)"
        animate={{ r: [28, 50, 50], opacity: [0.5, 0, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.8 }}
      />
      {/* Center icon — shield/checkmark */}
      <path d="M204 190l4 4 8-8" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Orbiting satellites */}
      {[0, 90, 180, 270].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const x = 210 + 85 * Math.cos(rad)
        const y = 190 + 85 * Math.sin(rad)
        const labels = ['Monitor', 'Iterate', 'Optimise', 'Report']
        return (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <circle cx={x} cy={y} r="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            <text x={x} y={y + 4} fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">
              {labels[i]}
            </text>
          </motion.g>
        )
      })}

      {/* Outer orbit dots */}
      {[45, 135, 225, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <motion.circle key={i}
            cx={210 + 130 * Math.cos(rad)}
            cy={190 + 130 * Math.sin(rad)}
            r="4" fill="rgba(255,215,0,0.4)"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          />
        )
      })}
    </svg>
  )
}

const ILLUSTRATIONS: Record<string, React.ReactNode> = {
  research: <ResearchIllustration />,
  design:   <DesignIllustration />,
  build:    <BuildIllustration />,
  support:  <SupportIllustration />,
}

// ─── Component ─────────────────────────────────────────────────────────────────
export function Process() {
  const [active,    setActive]    = useState(0)
  const [direction, setDirection] = useState(1)
  const tabsRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((idx: number) => {
    setDirection(idx > active ? 1 : -1)
    setActive(idx)
  }, [active])

  const prev = () => goTo(active === 0 ? TABS.length - 1 : active - 1)
  const next = () => goTo(active === TABS.length - 1 ? 0 : active + 1)

  // Auto-advance
  useEffect(() => {
    const t = setTimeout(() => next(), 5500)
    return () => clearTimeout(t)
  }, [active]) // eslint-disable-line

  const tab = TABS[active]

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0A0A0A', paddingTop: 'clamp(5rem,10vw,9rem)', paddingBottom: 'clamp(5rem,10vw,9rem)' }}
      aria-labelledby="process-heading"
    >
      <Container>

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <p className="eyebrow mb-4">How We Work</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="process-heading"
                className="font-display font-bold text-white"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.04em', lineHeight: 1.06 }}
              >
                So, why choose
                <br />
                <span style={{ color: 'rgba(250,250,250,0.3)' }}>Diastral?</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p className="font-sans text-sm max-w-[24rem]" style={{ color: 'rgba(255,255,255,0.35)', lineHeight: '1.75' }}>
              A simple four-step process built directly around your business.
            </p>
          </FadeIn>
        </div>

        {/* ── Tab navigation — mo.agency style ── */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mb-10">
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous step"
              className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/[0.08]"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Tabs */}
            <div
              ref={tabsRef}
              className="flex items-center gap-0 flex-1 overflow-x-auto no-scrollbar"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              {TABS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => goTo(i)}
                  aria-current={i === active ? 'step' : undefined}
                  className="relative shrink-0 px-5 pb-4 font-sans font-semibold text-sm tracking-wide uppercase transition-colors duration-200 focus-visible:outline-none"
                  style={{
                    letterSpacing: '0.08em',
                    fontSize:      '0.75rem',
                    color:         i === active ? '#FAFAFA' : 'rgba(255,255,255,0.3)',
                    paddingTop:    '0.5rem',
                  }}
                >
                  {t.label}
                  {/* Active underline */}
                  {i === active && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ backgroundColor: '#FFD700' }}
                      transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next step"
              className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/[0.08]"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </FadeIn>

        {/* ── Main content — split layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Illustration */}
          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: '340px',
              backgroundColor: '#0E0E0E',
              border:          '1px solid rgba(255,255,255,0.06)',
              borderRadius:    '20px',
              overflow:        'hidden',
            }}
          >
            {/* Subtle grid bg */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '28px 28px',
              }}
            />
            {/* Gold bloom */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,215,0,0.04) 0%, transparent 70%)',
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{    opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full p-6 flex items-center justify-center"
                style={{ minHeight: '320px' }}
              >
                {ILLUSTRATIONS[tab.id]}
              </motion.div>
            </AnimatePresence>

            {/* Step counter badge */}
            <div
              className="absolute top-5 left-5 font-mono text-xs font-semibold px-2.5 py-1 rounded"
              style={{
                backgroundColor: 'rgba(255,215,0,0.08)',
                color:           'rgba(255,215,0,0.6)',
                border:          '1px solid rgba(255,215,0,0.12)',
                letterSpacing:   '0.1em',
              }}
            >
              {String(active + 1).padStart(2, '0')} / {String(TABS.length).padStart(2, '0')}
            </div>
          </div>

          {/* Right: Content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{    opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-7"
              aria-live="polite"
            >
              {/* Step label */}
              <p className="eyebrow">{tab.label}</p>

              {/* Heading */}
              <h3
                className="font-display font-bold text-white"
                style={{
                  fontSize:      'clamp(1.875rem, 3.5vw, 2.75rem)',
                  letterSpacing: '-0.035em',
                  lineHeight:    1.12,
                }}
              >
                {tab.heading}
              </h3>

              {/* Body */}
              <p
                className="font-sans leading-relaxed"
                style={{ fontSize: '1.0625rem', lineHeight: '1.82', color: 'rgba(255,255,255,0.48)' }}
              >
                {tab.body}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={tab.href}
                  className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-[#0E0E0E] bg-[#FFD700] hover:bg-[#FFE44D] px-6 h-11 rounded-[10px] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(255,215,0,0.15)]"
                >
                  {tab.cta}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5H11M7.5 3L11 6.5L7.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                {/* Progress dots */}
                <div className="flex items-center gap-1.5">
                  {TABS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Step ${i + 1}`}
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
            </motion.div>
          </AnimatePresence>
        </div>

      </Container>
    </section>
  )
}