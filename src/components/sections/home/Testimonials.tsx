//You will do wait. 
// src/components/sections/home/Testimonials.tsx
'use client'

import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import { TESTIMONIALS } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#0A0A0A' }}
      aria-labelledby="testimonials-heading"
    >
      <Container>

        {/* Header */}
        <div className="max-w-[32rem] mb-16">
          <FadeIn>
            <p className="eyebrow mb-4">Client Feedback</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="testimonials-heading"
              className="font-display font-bold text-white"
              style={{
                fontSize:      'clamp(2rem, 4vw, 3.25rem)',
                letterSpacing: '-0.035em',
                lineHeight:    1.08,
              }}
            >
              Trusted by
              <br />ambitious teams.
            </h2>
          </FadeIn>
        </div>

        {/* Cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.id}>
              <div
                className="flex flex-col justify-between gap-8 p-7 rounded-xl h-full"
                style={{
                  backgroundColor: '#141414',
                  border:          '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Top: quotemark + quote */}
                <div className="flex flex-col gap-5">
                  {/* Gold open-quote */}
                  <span
                    className="font-display leading-none select-none"
                    style={{
                      fontSize: '3.5rem',
                      color:    'rgba(255,215,0,0.25)',
                      lineHeight: 0.8,
                    }}
                    aria-hidden="true"
                  >
                    "
                  </span>

                  <p
                    className="font-display font-normal"
                    style={{
                      fontSize:      '1.0625rem',
                      lineHeight:    1.6,
                      color:         'rgba(255,255,255,0.75)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {t.quote}
                  </p>
                </div>

                {/* Bottom: author */}
                <div
                  className="flex flex-col gap-1 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span
                    className="font-sans text-sm font-semibold text-white"
                  >
                    {t.author}
                  </span>
                  <span
                    className="font-sans text-xs"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {t.role} · {t.company}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </Container>
    </section>
  )
}