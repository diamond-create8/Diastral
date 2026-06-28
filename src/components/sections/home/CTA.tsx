// src/components/sections/home/CTA.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'
import { SITE_CONFIG } from '@/lib/constants'

export function CTA() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{ backgroundColor: '#0E0E0E' }}
      aria-labelledby="cta-heading"
    >
      {/* Background: gold radial bloom + top border accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,215,0,0.05) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,215,0,0.2) 50%, transparent)',
          }}
        />
      </div>

      <Container size="md">
        <div className="flex flex-col items-center text-center gap-10">

          {/* Eyebrow */}
          <FadeIn>
            <p className="eyebrow">Let us Build Your Online Presence Together.</p>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.1}>
            <h2
              id="cta-heading"
              className="font-display font-bold text-white text-balance"
              style={{
                fontSize:      'clamp(2.5rem, 6vw, 5rem)',
                letterSpacing: '-0.04em',
                lineHeight:    1.04,
              }}
            >
              Your next phase of digital presence
              <br />
              <span style={{ color: 'rgba(250,250,250,0.35)' }}>
                digital growth
              </span>{' '}
              starts here.
            </h2>
          </FadeIn>

          {/* Sub-copy */}
          <FadeIn delay={0.2}>
            <p
              className="font-sans max-w-[30rem] text-balance"
              style={{
                fontSize:   '1.0625rem',
                lineHeight: 1.75,
                color:      'rgba(255,255,255,0.4)',
              }}
            >
              We partner with ambitious businesses who understand that proper
              digital infrastructure isn't a cost but a compounding
              competitive advantage. 
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-sans font-semibold text-[0.9375rem] text-[#0E0E0E] bg-[#FFD700] hover:bg-[#FFE44D] px-8 h-[52px] rounded-[10px] transition-all duration-200 hover:shadow-[0_8px_32px_rgba(255,215,0,0.18)]"
                >
                  Start my Journey with Diastral
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 font-sans font-medium text-[0.9375rem] text-white/45 hover:text-white/75 px-6 h-[52px] rounded-[10px] border border-white/[0.09] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-200"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </FadeIn>

          {/* Trust note */}
          <FadeIn delay={0.4}>
            <p
              className="font-sans text-xs"
              style={{ color: 'rgba(255,255,255,0.18)' }}
            >
             You know what to do. One of our agents will get back to you within 24 hours.
            </p>
          </FadeIn>

        </div>
      </Container>
    </section>
  )
}