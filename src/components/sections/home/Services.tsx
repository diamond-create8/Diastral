// src/components/sections/home/Services.tsx
'use client'

import Link          from 'next/link'
import { motion }    from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { FadeIn }    from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import { SERVICES }  from '@/data/services'
import type { ServiceItem } from '@/types'

// ─── Motion Graphics ─────────────────────────────────────────────────────────

// Attract: Browser frame with animated content building
function AttractAnimation() {
  return (
    <svg
      viewBox="0 0 280 160"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <rect x="20" y="20" width="240" height="120" rx="8"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      {/* Address bar */}
      <rect x="60" y="30" width="140" height="10" rx="5"
        fill="rgba(255,255,255,0.06)"
      />
      {/* Traffic lights */}
      <circle cx="30" cy="35" r="3.5" fill="rgba(255,90,90,0.35)"/>
      <circle cx="42" cy="35" r="3.5" fill="rgba(255,200,0,0.35)"/>
      <circle cx="54" cy="35" r="3.5" fill="rgba(0,210,100,0.35)"/>
      {/* Divider */}
      <line x1="20" y1="48" x2="260" y2="48" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75"/>

      {/* Animated headline bar */}
      <motion.rect
        x="40" y="62" rx="3" height="12" fill="#FFD700"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 130, opacity: 0.18 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1], repeat: Infinity, repeatDelay: 2.5 }}
      />

      {/* Animated content lines */}
      {[82, 97, 112].map((y, i) => (
        <motion.rect
          key={y}
          x="40" y={y} rx="2" height="7"
          fill="rgba(255,255,255,0.12)"
          initial={{ width: 0 }}
          animate={{ width: [0, 180 - i * 30, 180 - i * 30, 0] }}
          transition={{
            delay: 0.9 + i * 0.12,
            duration: 9,
            repeat: Infinity,
            repeatDelay: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}

      {/* CTA button */}
      <motion.rect
        x="40" y="124" width="80" height="10" rx="5"
        fill="rgba(255,215,0,0.25)"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 0] }}
        transition={{ delay: 1.2, duration: 3.5, repeat: Infinity, repeatDelay: 1 }}
        style={{ transformOrigin: '40px 129px' }}
      />

      {/* Cursor */}
      <motion.g
        initial={{ x: 150, y: 130, opacity: 0 }}
        animate={{
          x:       [150, 80, 80, 80],
          y:       [130, 130, 129, 130],
          opacity: [0, 0.7, 1, 0],
        }}
        transition={{ delay: 1.4, duration: 3.5, repeat: Infinity, repeatDelay: 1 }}
      >
        <path d="M0 0L10 14L4 14L7 21L4 22L1 15L-4 19Z" fill="rgba(255,255,255,0.6)" stroke="rgba(0,0,0,0.4)" strokeWidth="0.5"/>
      </motion.g>
    </svg>
  )
}

// Grow: Rising bar chart with animated bars
function GrowAnimation() {
  const bars = [
    { x: 44,  finalH: 40, delay: 0.2 },
    { x: 82,  finalH: 65, delay: 0.35 },
    { x: 120, finalH: 50, delay: 0.5 },
    { x: 158, finalH: 85, delay: 0.65 },
    { x: 196, finalH: 100, delay: 0.8 },
  ]

  return (
    <svg viewBox="0 0 280 160" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Grid lines */}
      {[40, 70, 100, 130].map((y) => (
        <line key={y} x1="30" y1={y} x2="240" y2={y}
          stroke="rgba(255,255,255,0.05)" strokeWidth="0.75" strokeDasharray="4 4"
        />
      ))}

      {/* Bars */}
      {bars.map((bar, i) => (
        <motion.rect
          key={i}
          x={bar.x}
          width="28"
          rx="4"
          fill={i === bars.length - 1
            ? 'rgba(255,215,0,0.5)'
            : `rgba(255,255,255,${0.06 + i * 0.02})`
          }
          initial={{ height: 0, y: 140 }}
          animate={{
            height: [0, bar.finalH, bar.finalH, 0],
            y:      [140, 140 - bar.finalH, 140 - bar.finalH, 140],
          }}
          transition={{
            delay:       bar.delay,
            duration:    4,
            repeat:      Infinity,
            repeatDelay: 1.5,
            ease:        [0.16, 1, 0.3, 1],
          }}
        />
      ))}

      {/* Trend line */}
      <motion.polyline
        points="58,135 96,110 134,120 172,75 210,45"
        stroke="rgba(255,215,0,0.5)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.7, 0] }}
        transition={{ delay: 1.2, duration: 4, repeat: Infinity, repeatDelay: 1.5 }}
      />

      {/* Arrow up */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 0.8, 0.8, 0], y: [20, 0, 0, -10] }}
        transition={{ delay: 1.5, duration: 4, repeat: Infinity, repeatDelay: 1.5 }}
      >
        <circle cx="230" cy="38" r="14" fill="rgba(255,215,0,0.12)" stroke="rgba(255,215,0,0.25)" strokeWidth="1"/>
        <path d="M230 46V30M224 37L230 30L236 37" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.g>

      {/* Axis */}
      <line x1="30" y1="140" x2="240" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <line x1="30" y1="20"  x2="30"  y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    </svg>
  )
}

// Retain: CRM connection nodes with animated pulses
function RetainAnimation() {
  const satellites = [
    { cx: 90,  cy: 60,  icon: 'email',     delay: 0.2 },
    { cx: 200, cy: 55,  icon: 'sms',       delay: 0.5 },
    { cx: 220, cy: 115, icon: 'notif',     delay: 0.8 },
    { cx: 80,  cy: 120, icon: 'crm',       delay: 1.1 },
  ]

  return (
    <svg viewBox="0 0 280 160" fill="none" className="w-full h-full" aria-hidden="true">

      {/* Connection lines */}
      {satellites.map((sat, i) => (
        <line
          key={`line-${i}`}
          x1="140" y1="88"
          x2={sat.cx} y2={sat.cy}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      ))}

      {/* Animated pulse dots traveling along each line */}
      {satellites.map((sat, i) => (
        <motion.circle
          key={`pulse-${i}`}
          r="3"
          fill="#FFD700"
          opacity={0.7}
          initial={{ cx: 140, cy: 88 }}
          animate={{
            cx: [140, sat.cx, 140],
            cy: [88,  sat.cy, 88 ],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            delay:       sat.delay,
            duration:    2.2,
            repeat:      Infinity,
            repeatDelay: 1.8,
            ease:        'easeInOut',
          }}
        />
      ))}

      {/* Satellite nodes */}
      {satellites.map((sat, i) => (
        <motion.g key={`node-${i}`}>
          <motion.circle
            cx={sat.cx} cy={sat.cy} r="18"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: sat.delay * 0.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Icon in each node */}
          {sat.icon === 'email' && (
            <g transform={`translate(${sat.cx - 8}, ${sat.cy - 6})`}>
              <rect width="16" height="12" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
              <path d="M0 3l8 5 8-5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
            </g>
          )}
          {sat.icon === 'sms' && (
            <g transform={`translate(${sat.cx - 7}, ${sat.cy - 7})`}>
              <rect width="14" height="11" rx="3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
              <path d="M3 12l2-1h-5v0" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="4" y1="4" x2="10" y2="4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="4" y1="7" x2="9"  y2="7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
            </g>
          )}
          {sat.icon === 'notif' && (
            <g transform={`translate(${sat.cx - 6}, ${sat.cy - 7})`}>
              <path d="M6 0C3 0 0 3 0 6v4l-2 2h16l-2-2V6C12 3 9 0 6 0z" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
              <line x1="6" y1="13" x2="6" y2="15" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
            </g>
          )}
          {sat.icon === 'crm' && (
            <g transform={`translate(${sat.cx - 7}, ${sat.cy - 7})`}>
              <circle cx="7" cy="5" r="3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
              <path d="M0 14C0 11 3 9 7 9s7 2 7 5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
            </g>
          )}
        </motion.g>
      ))}

      {/* Central hub */}
      <circle cx="140" cy="88" r="24"
        fill="rgba(255,215,0,0.07)"
        stroke="rgba(255,215,0,0.25)"
        strokeWidth="1.5"
      />
      <motion.circle
        cx="140" cy="88" r="24"
        fill="none"
        stroke="rgba(255,215,0,0.15)"
        strokeWidth="1"
        animate={{ r: [24, 36, 36], opacity: [0.4, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
      />
      {/* Central icon — briefcase/company */}
      <rect x="131" y="83" width="18" height="13" rx="2"
        stroke="rgba(255,215,0,0.7)" strokeWidth="1.4"
      />
      <path d="M136 83V81C136 80 137 79 140 79C143 79 144 80 144 81V83"
        stroke="rgba(255,215,0,0.7)" strokeWidth="1.4" strokeLinecap="round"
      />
      <line x1="131" y1="90" x2="149" y2="90" stroke="rgba(255,215,0,0.4)" strokeWidth="1"/>
    </svg>
  )
}

const ANIMATIONS: Record<string, React.ReactNode> = {
  'development-and-design':  <AttractAnimation />,
  'growth-acquisition':      <GrowAnimation />,
  'automation-and-integration': <RetainAnimation />,
}

// ─── Service Card ──────────────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const num = String(index + 1).padStart(2, '0')
  const animation = ANIMATIONS[service.id]

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={service.href}
        className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: '#141414',
          border:          '1px solid rgba(255,255,255,0.07)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.13)'
          e.currentTarget.style.boxShadow   = '0 20px 60px rgba(0,0,0,0.35)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
          e.currentTarget.style.boxShadow   = 'none'
        }}
      >
        {/* Motion Graphic Area */}
        {animation && (
          <div
            className="relative overflow-hidden"
            style={{
              height:          '160px',
              backgroundColor: '#0E0E0E',
              borderBottom:    '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="absolute inset-0 p-2">
              {animation}
            </div>
            {/* Gradient overlay — bottom of animation area blends into card */}
            <div
              className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent, #141414)',
              }}
              aria-hidden="true"
            />
          </div>
        )}

        {/* Card Content */}
        <div className="flex flex-col gap-5 p-7">
          {/* Top row: number */}
          <div className="flex items-center justify-between">
            <span
              className="font-mono text-[10px] font-medium tracking-widest"
              style={{ color: 'rgba(255,255,255,0.18)' }}
            >
              {num}
            </span>
          </div>

          {/* Title + Description */}
          <div className="flex flex-col gap-2.5">
            <h3
              className="font-display font-bold text-white transition-colors duration-200"
              style={{ fontSize: '1.1875rem', letterSpacing: '-0.022em', lineHeight: 1.25 }}
            >
              {service.title}
            </h3>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              {service.description}
            </p>
          </div>

          {/* Features */}
          <ul className="flex flex-col gap-2">
            {service.features.map((feat) => (
              <li
                key={feat}
                className="flex items-center gap-2 font-sans text-xs"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: '#FFD700', opacity: 0.55 }}
                  aria-hidden="true"
                />
                {feat}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div
            className="flex items-center gap-1.5 pt-2 text-xs font-sans font-medium transition-all duration-200"
            style={{ color: 'rgba(255,215,0,0.45)' }}
          >
            <span className="group-hover:text-[#FFD700] transition-colors duration-200">
              Learn more
            </span>
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ─── Services Section ──────────────────────────────────────────────────────────
export function Services() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#0E0E0E' }}
      aria-labelledby="services-heading"
    >
      <Container>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-[36rem]">
            <FadeIn>
              <p className="eyebrow mb-4">What We Do</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="services-heading"
                className="font-display font-bold text-white"
                style={{
                  fontSize:      'clamp(2rem, 4vw, 3.25rem)',
                  letterSpacing: '-0.035em',
                  lineHeight:    1.08,
                }}
              >
                Our Expertise.
                <br />
                <span style={{ color: 'rgba(250,250,250,0.3)' }}>
                  All in one cohesive system.
                </span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p
              className="font-sans text-sm leading-relaxed max-w-xs lg:text-right"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Every service is designed to work together, so your digital
              operations compound to produce your desired outcome.
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} index={i} />
            </StaggerItem>
          ))}
        </StaggerChildren>

      </Container>
    </section>
  )
}