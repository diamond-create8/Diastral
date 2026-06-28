// src/components/sections/home/Process.tsx
'use client'

import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

<h2
              id="process-heading"
              className="font-display font-bold text-white"
              style={{
                fontSize:      'clamp(2rem, 4vw, 3.25rem)',
                letterSpacing: '-0.035em',
                lineHeight:    1.08,
              }}
            >
              So, why work with Diastral?
            </h2>
// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: '01',
    title:  'We Stalk You (in a good way)',
    body:   'We start by researching and analysing your business deeply, your audience, your operations, and your competitive position. Strategy precedes everything we build.',
  },
  // remember to edit no 2 and no 3 to match no 1 and 4 in terms of tone and style
  {
    number: '02',
    title:  'Architecture & Design',
    body:   'We design systems and interfaces built for scale, not just launch day. Every decision is made with performance, maintainability, and future growth in mind.',
  },
  {
    number: '03',
    title:  'Build & Integrate',
    body:   'Production-grade engineering with clean architecture and rigorous attention to craft. No shortcuts. No technical debt quietly passed on to you.',
  },
  {
    number: '04',
    title:  'We Stick By You At All Times',
    body:   'We won\'t just disappear after launch. We monitor, guide, and help you move forward based on real data, ensuring the work provide keeps performing long after it goes live.',
  },
] 

// ─── Process Section ──────────────────────────────────────────────────────────
export function Process() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#0A0A0A' }}
      aria-labelledby="process-heading"
    >
      <Container>

        {/* Header */}
        <div className="max-w-[36rem] mb-20">
          <FadeIn>
            <p className="eyebrow mb-4">How We Work</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="process-heading"
              className="font-display font-bold text-white"
              style={{
                fontSize:      'clamp(2rem, 4vw, 3.25rem)',
                letterSpacing: '-0.035em',
                lineHeight:    1.08,
              }}
            >
              So, why choose Diastral?
            </h2>
          </FadeIn>
        </div>

        {/* Steps grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.number}>
              <div
                className="flex flex-col gap-5 pt-8 pr-8 pb-2"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Step number — oversized, watermark-like */}
                <span
                  className="font-display font-bold"
                  style={{
                    fontSize:      'clamp(3rem, 5vw, 4.5rem)',
                    letterSpacing: '-0.05em',
                    lineHeight:    1,
                    color:         i === 0
                      ? 'rgba(255,215,0,0.25)'          // First step gets a gold hint
                      : 'rgba(255,255,255,0.07)',        // Others are near-invisible
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Title */}
                <h3
                  className="font-display font-bold text-white"
                  style={{ fontSize: '1.125rem', letterSpacing: '-0.02em', lineHeight: 1.3 }}
                >
                  {step.title}
                </h3>

                {/* Body */}
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </Container>
    </section>
  )
}