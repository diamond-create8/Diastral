// src/components/work/SponsorshipSystemDiagram.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LOOP_MS = 9500

// ─── Node + line coordinate map (viewBox 640 x 840) ───────────────────────────
const NODES = [
  { id: 'property',   x: 220, y: 20,  w: 200, h: 50, label: 'THE PROPERTY',       sub: 'GhanaFestSA · Audience · Assets', delay: 0.0,  accent: true  },
  { id: 'fit',         x: 220, y: 120, w: 200, h: 50, label: 'COMMERCIAL FIT',     sub: 'Audience → Brand objective',      delay: 0.9,  accent: false },
  { id: 'targets',    x: 220, y: 220, w: 200, h: 50, label: 'TARGET ACCOUNTS',    sub: 'Financial · Telecom · FMCG',      delay: 1.8,  accent: false },
  { id: 'network',    x: 60,  y: 330, w: 160, h: 50, label: 'NETWORK MAP',        sub: '',                                delay: 2.9,  accent: false },
  { id: 'direct',     x: 420, y: 330, w: 160, h: 50, label: 'DIRECT ROUTE',       sub: '',                                delay: 2.9,  accent: false },
  { id: 'senior',     x: 200, y: 430, w: 240, h: 50, label: 'SENIOR STAKEHOLDER', sub: 'Warm introduction secured',       delay: 3.8,  accent: false },
  { id: 'qual',       x: 220, y: 530, w: 200, h: 44, label: 'QUALIFICATION',      sub: '',                                delay: 4.7,  accent: false },
  { id: 'fitq',       x: 60,  y: 620, w: 130, h: 44, label: 'FIT',                sub: '',                                delay: 5.5,  accent: false },
  { id: 'timing',     x: 255, y: 620, w: 130, h: 44, label: 'TIMING',             sub: '',                                delay: 5.5,  accent: false },
  { id: 'budget',     x: 450, y: 620, w: 130, h: 44, label: 'BUDGET',             sub: '',                                delay: 5.5,  accent: false },
  { id: 'proposal',   x: 220, y: 710, w: 200, h: 50, label: 'PROPOSAL',           sub: '',                                delay: 6.4,  accent: false },
  { id: 'review',     x: 220, y: 800, w: 200, h: 50, label: 'INTERNAL REVIEW',    sub: '',                                delay: 7.2,  accent: false },
]

const LINES = [
  { x1: 320, y1: 70,  x2: 320, y2: 120, delay: 0.5 },  // property -> fit
  { x1: 320, y1: 170, x2: 320, y2: 220, delay: 1.4 },  // fit -> targets
  { x1: 260, y1: 270, x2: 140, y2: 330, delay: 2.3 },  // targets -> network
  { x1: 380, y1: 270, x2: 500, y2: 330, delay: 2.3 },  // targets -> direct
  { x1: 140, y1: 380, x2: 300, y2: 430, delay: 3.3 },  // network -> senior
  { x1: 500, y1: 380, x2: 340, y2: 430, delay: 3.3 },  // direct  -> senior
  { x1: 320, y1: 480, x2: 320, y2: 530, delay: 4.2 },  // senior -> qual
  { x1: 280, y1: 574, x2: 125, y2: 620, delay: 5.1 },  // qual -> fit
  { x1: 320, y1: 574, x2: 320, y2: 620, delay: 5.1 },  // qual -> timing
  { x1: 360, y1: 574, x2: 515, y2: 620, delay: 5.1 },  // qual -> budget
  { x1: 125, y1: 664, x2: 280, y2: 710, delay: 6.0 },  // fit -> proposal
  { x1: 320, y1: 664, x2: 320, y2: 710, delay: 6.0 },  // timing -> proposal
  { x1: 515, y1: 664, x2: 360, y2: 710, delay: 6.0 },  // budget -> proposal
  { x1: 320, y1: 760, x2: 320, y2: 800, delay: 6.9 },  // proposal -> review
]

// Final "PARTNERSHIP" node arrives with a distinct gold pulse after review
const PARTNERSHIP = { x: 220, y: 890, w: 200, h: 50, delay: 7.7 }
const FINAL_LINE   = { x1: 320, y1: 850, x2: 320, y2: 890, delay: 7.4 }

export function SponsorshipSystemDiagram() {
  const [loopKey, setLoopKey] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setLoopKey((k) => k + 1), LOOP_MS)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl flex items-center justify-center"
      style={{
        backgroundColor: '#0E0E0E',
        border:          '1px solid rgba(255,255,255,0.07)',
        minHeight:       '620px',
        padding:         '2rem 1rem',
      }}
    >
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize:  '28px 28px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 10%, rgba(255,215,0,0.04) 0%, transparent 70%)' }}
      />

      <svg
        key={loopKey}
        viewBox="0 0 640 960"
        fill="none"
        className="relative w-full max-w-[420px]"
        aria-label="Sponsorship acquisition system diagram: from property assessment through network mapping, stakeholder qualification, to secured partnership"
        role="img"
      >
        {/* ── Lines ── */}
        {LINES.map((l, i) => (
          <motion.line
            key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.3"
            strokeDasharray="4 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: l.delay, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        <motion.line
          x1={FINAL_LINE.x1} y1={FINAL_LINE.y1} x2={FINAL_LINE.x2} y2={FINAL_LINE.y2}
          stroke="rgba(255,215,0,0.35)"
          strokeWidth="1.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: FINAL_LINE.delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* ── Nodes ── */}
        {NODES.map((n) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: n.delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <rect
              x={n.x} y={n.y} width={n.w} height={n.h} rx="10"
              fill={n.accent ? 'rgba(255,215,0,0.06)' : 'rgba(255,255,255,0.03)'}
              stroke={n.accent ? 'rgba(255,215,0,0.35)' : 'rgba(255,255,255,0.12)'}
              strokeWidth="1"
            />
            <text
              x={n.x + n.w / 2}
              y={n.sub ? n.y + n.h / 2 - 3 : n.y + n.h / 2 + 4}
              fill={n.accent ? '#FFD700' : 'rgba(255,255,255,0.75)'}
              fontSize="10.5"
              fontFamily="monospace"
              fontWeight="600"
              letterSpacing="0.04em"
              textAnchor="middle"
            >
              {n.label}
            </text>
            {n.sub && (
              <text
                x={n.x + n.w / 2}
                y={n.y + n.h / 2 + 13}
                fill="rgba(255,255,255,0.32)"
                fontSize="8"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {n.sub}
              </text>
            )}
          </motion.g>
        ))}

        {/* ── Final node: PARTNERSHIP (gold, pulsing) ── */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: PARTNERSHIP.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <rect
            x={PARTNERSHIP.x} y={PARTNERSHIP.y} width={PARTNERSHIP.w} height={PARTNERSHIP.h} rx="10"
            fill="rgba(255,215,0,0.1)"
            stroke="rgba(255,215,0,0.5)"
            strokeWidth="1.4"
          />
          <motion.rect
            x={PARTNERSHIP.x} y={PARTNERSHIP.y} width={PARTNERSHIP.w} height={PARTNERSHIP.h} rx="10"
            fill="none"
            stroke="rgba(255,215,0,0.25)"
            strokeWidth="1"
            animate={{ scale: [1, 1.08, 1.08], opacity: [0.5, 0, 0] }}
            transition={{ delay: PARTNERSHIP.delay + 0.3, duration: 1.6, repeat: Infinity, repeatDelay: 0.6 }}
            style={{ transformOrigin: `${PARTNERSHIP.x + PARTNERSHIP.w / 2}px ${PARTNERSHIP.y + PARTNERSHIP.h / 2}px` }}
          />
          <text
            x={PARTNERSHIP.x + PARTNERSHIP.w / 2}
            y={PARTNERSHIP.y + PARTNERSHIP.h / 2 + 4}
            fill="#FFD700"
            fontSize="12"
            fontFamily="monospace"
            fontWeight="700"
            letterSpacing="0.06em"
            textAnchor="middle"
          >
            PARTNERSHIP
          </text>
        </motion.g>
      </svg>
    </div>
  )
}