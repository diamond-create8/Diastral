// src/components/layout/CookieConsent.tsx
'use client'

import { useState, useEffect } from 'react'
import Link                    from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { getConsent, setConsent } from '@/lib/cookies'

export function CookieConsent() {
  const [visible,  setVisible]  = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const existing = getConsent()
    if (!existing) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const handle = (value: 'accepted' | 'rejected') => {
    setConsent(value)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0,  scale: 1 }}
          exit={{    opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed z-[100]"
          style={{
            left:      '1.25rem',
            right:     '1.25rem',
            bottom:    '1.25rem',
            maxWidth:  '26rem',
          }}
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              backgroundColor: '#141414',
              border:          '1px solid rgba(255,255,255,0.09)',
              boxShadow:       '0 24px 64px rgba(0,0,0,0.5)',
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.35) 50%, transparent)' }}
              aria-hidden="true"
            />

            <div className="p-6 flex flex-col gap-4">
              {/* Icon + heading */}
              <div className="flex items-start gap-3.5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: 'rgba(255,215,0,0.08)',
                    border:          '1px solid rgba(255,215,0,0.14)',
                  }}
                  aria-hidden="true"
                >
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <circle cx="8.5" cy="8.5" r="6.5" stroke="#FFD700" strokeWidth="1.3"/>
                    <circle cx="6"   cy="6.5" r="0.9" fill="#FFD700" opacity="0.7"/>
                    <circle cx="10.5" cy="6"  r="0.7" fill="#FFD700" opacity="0.5"/>
                    <circle cx="10"  cy="10.5" r="0.9" fill="#FFD700" opacity="0.6"/>
                    <circle cx="6.5" cy="10.5" r="0.6" fill="#FFD700" opacity="0.4"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <p
                    className="font-display font-bold text-white"
                    style={{ fontSize: '0.9375rem', letterSpacing: '-0.01em' }}
                  >
                    We use cookies
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.42)' }}
                  >
                    We use essential and analytics cookies to improve your experience.{' '}
                    <button
                      onClick={() => setExpanded((v) => !v)}
                      className="underline underline-offset-2 transition-colors duration-200"
                      style={{ color: 'rgba(255,215,0,0.6)' }}
                    >
                      {expanded ? 'Show less' : 'Learn more'}
                    </button>
                  </p>
                </div>
              </div>

              {/* Expandable detail */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{    height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="flex flex-col gap-2.5 pt-1 pb-1 pl-[3.125rem] font-sans text-xs"
                      style={{ color: 'rgba(255,255,255,0.35)', lineHeight: '1.65' }}
                    >
                      <p>
                        <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Essential</strong> — required for the site to function (navigation, security). Cannot be disabled.
                      </p>
                      <p>
                        <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Analytics</strong> — helps us understand how visitors use the site, so we can improve it. Only active if you accept.
                      </p>
                      <p>
                        Read our{' '}
                        <Link href="/privacy" className="underline underline-offset-2" style={{ color: 'rgba(255,215,0,0.55)' }}>
                          Privacy Policy
                        </Link>{' '}
                        for full details.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex items-center gap-2.5 pl-0">
                <button
                  onClick={() => handle('accepted')}
                  className="flex-1 h-10 font-sans font-semibold text-sm rounded-[10px] transition-all duration-200"
                  style={{ backgroundColor: '#FFD700', color: '#0E0E0E' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FFE44D' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFD700' }}
                >
                  Accept
                </button>
                <button
                  onClick={() => handle('rejected')}
                  className="flex-1 h-10 font-sans font-medium text-sm rounded-[10px] transition-all duration-200"
                  style={{
                    backgroundColor: 'transparent',
                    color:           'rgba(255,255,255,0.45)',
                    border:          '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}