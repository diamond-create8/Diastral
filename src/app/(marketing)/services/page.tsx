// src/app/(marketing)/services/page.tsx
import type { Metadata } from 'next'
import { Container }    from '@/components/layout/Container'
import { FadeIn }       from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import { SERVICES }     from '@/data/services'
import Link             from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Website development, growth marketing, CRM systems, email marketing, SMS automation, and customer engagement solutions designed to help your business grow.',
}

// ─── Icon Map (same as home, inline for now) ──────────────────────────────────
const ICON_MAP: Record<string, React.ReactNode> = {
  'development-and-design': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 9L4 12l4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 9l4 3-4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 6l-4 12"   stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  'growth-acquisition': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M16.5 16.5L20 20"        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M8 13l2-2 2 1.5L15 9.5"  stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'automation-and-integration': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="4"  cy="6"  r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="20" cy="6"  r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="4"  cy="18" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="20" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M5.5 7L10 10.5M18.5 7L14 10.5M5.5 17L10 13.5M18.5 17L14 13.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  ),
  /*
  'automation': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5C5 8.91 7.91 6 11.5 6c2.8 0 5.2 1.68 6.34 4.09" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M19 11.5C19 15.09 16.09 18 12.5 18c-2.8 0-5.2-1.68-6.34-4.09" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M16.5 8.5l2 3 2.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 15.5l-2-3-2.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'ai-integrations': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="3"  r="1.5" fill="currentColor"/>
      <circle cx="12" cy="21" r="1.5" fill="currentColor"/>
      <circle cx="3"  cy="12" r="1.5" fill="currentColor"/>
      <circle cx="21" cy="12" r="1.5" fill="currentColor"/>
      <path d="M12 4.5V8.5M12 15.5V19.5M4.5 12H8.5M15.5 12H19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  /*'bpo': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="10" y="2.5" width="4"  height="3.5" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="3.5" y="10" width="4"  height="3.5" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="16.5" y="10" width="4" height="3.5" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M12 6v3M12 9H5v1.5M12 9h7v1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 13.5V17h13v-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17v3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),*/
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ backgroundColor: '#0E0E0E' }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,215,0,0.05) 0%, transparent 70%)',
          }}
        />

        <Container>
          <div className="max-w-[48rem]">
            <FadeIn>
              <p className="eyebrow mb-5">Services</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1
                className="font-display font-bold text-white mb-6"
                style={{
                  fontSize:      'clamp(2.75rem, 6vw, 5rem)',
                  letterSpacing: '-0.04em',
                  lineHeight:    1.04,
                }}
              >
                Everything your
                business needs online.
                <br />
                <span style={{ color: 'rgba(250,250,250,0.35)' }}>
                  All in one
                  cohesive system.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p
                className="font-sans max-w-[36rem]"
                style={{
                  fontSize:   '1.0625rem',
                  lineHeight: '1.78',
                  color:      'rgba(255,255,255,0.42)',
                }}
              >
                Three core disciplines, one cohesive system. From attracting new
                customers to growing your reach and nurturing existing relationships,
                every service is designed to work together.
              </p>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* ── Service Sections ── */}
      {SERVICES.map((service, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={service.id}
            id={service.id}
            className="section-padding-sm"
            style={{
              backgroundColor: isEven ? '#0E0E0E' : '#0A0A0A',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              scrollMarginTop: '4rem',
            }}
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

                {/* Left: label + title */}
                <FadeIn>
                  <div className="flex flex-col gap-6 lg:sticky lg:top-28">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: 'rgba(255,215,0,0.08)',
                          color:           '#FFD700',
                          border:          '1px solid rgba(255,215,0,0.12)',
                        }}
                      >
                        {ICON_MAP[service.id]}
                      </div>
                      <span
                        className="font-mono text-xs font-medium"
                        style={{ color: 'rgba(255,255,255,0.2)' }}
                      >
                        {String(i + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
                      </span>
                    </div>

                    <h2
                      className="font-display font-bold text-white"
                      style={{
                        fontSize:      'clamp(1.75rem, 3vw, 2.5rem)',
                        letterSpacing: '-0.03em',
                        lineHeight:    1.1,
                      }}
                    >
                      {service.title}
                    </h2>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-[#0E0E0E] bg-[#FFD700] hover:bg-[#FFE44D] px-5 h-10 rounded-md transition-all duration-200 w-fit"
                    >
                      Enquire about this
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                        <path d="M2 6.5H11M7.5 3L11 6.5L7.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </FadeIn>

                {/* Right: description + features */}
                <FadeIn delay={0.15}>
                  <div className="flex flex-col gap-8">
                    <p
                      className="font-sans"
                      style={{
                        fontSize:   '1.0625rem',
                        lineHeight: '1.8',
                        color:      'rgba(255,255,255,0.5)',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* What's included */}
                    <div>
                      <p
                        className="font-sans text-xs font-semibold uppercase tracking-[0.12em] mb-5"
                        style={{ color: 'rgba(255,255,255,0.22)' }}
                      >
                        What's included
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feat) => (
                          <div
                            key={feat}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.03)',
                              border:          '1px solid rgba(255,255,255,0.06)',
                            }}
                          >
                            <svg
                              width="14" height="14" viewBox="0 0 14 14"
                              fill="none" aria-hidden="true" className="shrink-0"
                            >
                              <path
                                d="M2.5 7L5.5 10L11.5 4"
                                stroke="#FFD700"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.7"
                              />
                            </svg>
                            <span
                              className="font-sans text-sm"
                              style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </Container>
          </section>
        )
      })}

      {/* ── CTA ── */}
      <section
        className="section-padding text-center"
        style={{
          backgroundColor: '#0E0E0E',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Container size="sm">
          <FadeIn>
            <p className="eyebrow mb-6">Ready to Start?</p>
            <h2
              className="font-display font-bold text-white mb-6"
              style={{
                fontSize:      'clamp(2rem, 4vw, 3.25rem)',
                letterSpacing: '-0.035em',
                lineHeight:    1.08,
              }}
            >
              Not sure which service
              <br />you need?
            </h2>
            <p
              className="font-sans mb-10 mx-auto"
              style={{
                fontSize:   '1.0625rem',
                lineHeight: '1.78',
                color:      'rgba(255,255,255,0.4)',
                maxWidth:   '30rem',
              }}
            >
              Most of our best engagements start with a simple conversation. Tell us
              where you are and where you want to go & we'll tell you what we'd
              build.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans font-semibold text-[0.9375rem] text-[#0E0E0E] bg-[#FFD700] hover:bg-[#FFE44D] px-8 h-[52px] rounded-[10px] transition-all duration-200 hover:shadow-[0_8px_32px_rgba(255,215,0,0.18)]"
            >
              Book a Discovery Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}