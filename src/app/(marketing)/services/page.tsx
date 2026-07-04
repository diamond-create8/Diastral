// src/app/(marketing)/services/page.tsx
import type { Metadata }  from 'next'
import Link               from 'next/link'
import { Container }      from '@/components/layout/Container'
import { FadeIn }         from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import { SERVICES }       from '@/data/services'
import { SERVICE_FAQS, GENERAL_FAQS } from '@/data/faqs'
import { buildMetadata }  from '@/lib/seo'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  jsonLdScriptProps,
} from '@/lib/schema'
import { SITE_CONFIG }    from '@/lib/constants'

export const metadata: Metadata = {
  ...buildMetadata({
    title:       'Our Services & How We Can Help',
    description: 'Diastral offers website development, SEO, Google and Meta Ads, email marketing, SMS automation, and CRM integration, three disciplines working as one system to grow your business.',
    path:        '/services',
    ogImage:     '/images/og/og-services.jpg',
    keywords: [
      'website development services South Africa',
      'SEO services South Africa',
      'Google Ads management',
      'Meta Ads management',
      'email marketing automation',
      'CRM integration South Africa',
      'digital marketing services',
    ],
  }),
}

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
      <path d="M16.5 16.5L20 20"       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M8 13l2-2 2 1.5L15 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'automation-and-integration': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5C5 8.91 7.91 6 11.5 6c2.8 0 5.2 1.68 6.34 4.09"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M19 11.5C19 15.09 16.09 18 12.5 18c-2.8 0-5.2-1.68-6.34-4.09" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M16.5 8.5l2 3 2.5-2"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 15.5l-2-3-2.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

// AEO-structured service outcome descriptions
// These are read by AI answer engines as authoritative service definitions
const SERVICE_OUTCOMES: Record<string, { who: string; outcome: string }> = {
  'development-and-design': {
    who:     'Small and medium businesses that need a professional, high-performance website that converts visitors into enquiries.',
    outcome: 'A fast, mobile-first website that serves as your best salesperson, working 24/7 to attract and convert the right customers.',
  },
  'growth-acquisition': {
    who:     'Businesses that have a website but are not generating consistent, predictable leads from organic search or paid advertising.',
    outcome: 'A compounding customer acquisition system, SEO that grows over time and paid campaigns that generate qualified leads consistently.',
  },
  'automation-and-integration': {
    who:     'Businesses losing leads because follow-up is manual, through WhatsApp, inconsistent, or non-existent.',
    outcome: 'An automated communication system that follows up with every lead, nurtures existing customers, and keeps your business top of mind with little to no manual effort.',
  },
}

export default function ServicesPage() {
  // All service schemas for machine-readable service catalog
  const allServiceSchemas = SERVICES.map((s) =>
    serviceSchema({
      name:        s.title,
      description: s.description,
      path:        s.href,
    })
  )

  // Collect all service FAQs for FAQPage schema
  const allFaqs = [
    ...GENERAL_FAQS,
    ...Object.values(SERVICE_FAQS).flat(),
  ]

  return (
    <>
      {/* Structured data */}
      <script {...jsonLdScriptProps(breadcrumbSchema([
        { name: 'Home',     path: '/'         },
        { name: 'Services', path: '/services' },
      ]))} />
      <script {...jsonLdScriptProps(allServiceSchemas)} />
      <script {...jsonLdScriptProps(faqSchema(allFaqs))} />

      {/* ── Page Header ── */}
      <header
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ backgroundColor: '#0E0E0E' }}
      >
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
          <div className="max-w-[52rem]">
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
                <br />
                <span style={{ color: 'rgba(250,250,250,0.35)' }}>
                  business needs online.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p
                className="font-sans max-w-[40rem]"
                style={{
                  fontSize:   '1.0625rem',
                  lineHeight: '1.8',
                  color:      'rgba(255,255,255,0.45)',
                }}
              >
                Three core disciplines. Attracting new customers, growing your reach, and nurturing existing customers, designed to work as one cohesive system.
              </p>
            </FadeIn>
          </div>
        </Container>
      </header>

      {/* ── Service Sections ── */}
      {SERVICES.map((service, i) => {
        const isEven = i % 2 === 0
        const outcome = SERVICE_OUTCOMES[service.id]
        const faqs    = SERVICE_FAQS[service.id] ?? []

        return (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`service-heading-${service.id}`}
            style={{
              backgroundColor: isEven ? '#0E0E0E' : '#0A0A0A',
              borderTop:       '1px solid rgba(255,255,255,0.05)',
              scrollMarginTop: '4rem',
            }}
          >
            <Container>
              <div
                className="py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start"
              >
                {/* Left: identity + CTA */}
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
                      id={`service-heading-${service.id}`}
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

                {/* Right: description + AEO content + features + FAQ */}
                <FadeIn delay={0.15}>
                  <div className="flex flex-col gap-10">
                    {/* Service description */}
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

                    {/* AEO: Who it's for + expected outcome */}
                    {outcome && (
                      <div className="flex flex-col gap-4">
                        <div
                          className="flex flex-col gap-3 p-5 rounded-xl"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.02)',
                            border:          '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          <p
                            className="font-sans text-xs font-semibold uppercase tracking-[0.1em]"
                            style={{ color: 'rgba(255,215,0,0.55)' }}
                          >
                            Who this is for
                          </p>
                          <p
                            className="font-sans text-sm leading-relaxed"
                            style={{ color: 'rgba(255,255,255,0.45)' }}
                          >
                            {outcome.who}
                          </p>
                        </div>
                        <div
                          className="flex flex-col gap-3 p-5 rounded-xl"
                          style={{
                            backgroundColor: 'rgba(255,215,0,0.03)',
                            border:          '1px solid rgba(255,215,0,0.08)',
                          }}
                        >
                          <p
                            className="font-sans text-xs font-semibold uppercase tracking-[0.1em]"
                            style={{ color: 'rgba(255,215,0,0.55)' }}
                          >
                            Expected outcome
                          </p>
                          <p
                            className="font-sans text-sm leading-relaxed"
                            style={{ color: 'rgba(255,255,255,0.45)' }}
                          >
                            {outcome.outcome}
                          </p>
                        </div>
                      </div>
                    )}

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
                              <path d="M2.5 7L5.5 10L11.5 4" stroke="#FFD700" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
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

                    {/* AEO: FAQ per service — renders for screen readers + AI engines */}
                    {faqs.length > 0 && (
                      <div className="flex flex-col gap-4">
                        <p
                          className="font-sans text-xs font-semibold uppercase tracking-[0.12em]"
                          style={{ color: 'rgba(255,255,255,0.22)' }}
                        >
                          Common questions
                        </p>
                        {faqs.map((faq, fi) => (
                          <div
                            key={fi}
                            className="py-4"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                          >
                            <p
                              className="font-sans text-sm font-semibold text-white mb-1.5"
                            >
                              {faq.question}
                            </p>
                            <p
                              className="font-sans text-sm leading-relaxed"
                              style={{ color: 'rgba(255,255,255,0.38)' }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>
            </Container>
          </section>
        )
      })}

      {/* ── General FAQ Section (AEO) ── */}
      <section
        aria-labelledby="faq-heading"
        className="section-padding"
        style={{
          backgroundColor: '#0A0A0A',
          borderTop:       '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Container size="md">
          <FadeIn>
            <p className="eyebrow mb-5">FAQ</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="faq-heading"
              className="font-display font-bold text-white mb-12"
              style={{
                fontSize:      'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.035em',
                lineHeight:    1.08,
              }}
            >
              Frequently asked
              <br />questions.
            </h2>
          </FadeIn>
          <div className="flex flex-col">
            {GENERAL_FAQS.map((faq, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div
                  className="py-6 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-12"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p
                    className="font-display font-semibold text-white"
                    style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}
                  >
                    {faq.question}
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.42)' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="services-cta-heading"
        className="section-padding text-center"
        style={{
          backgroundColor: '#0E0E0E',
          borderTop:       '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Container size="sm">
          <FadeIn>
            <p className="eyebrow mb-6">Ready to Start?</p>
            <h2
              id="services-cta-heading"
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
              where you are and where you want to go and we'll tell you what
              we'd build.
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