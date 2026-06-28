// src/components/sections/home/Services.tsx
'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import { SERVICES } from '@/data/services'
import type { ServiceItem } from '@/types'

// ─── Icon Map ─────────────────────────────────────────────────────────────────
// One SVG per service ID. Clean 20×20 line icons.
const ICON_MAP: Record<string, React.ReactNode> = {
  'development-and-design': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7 7.5L3.5 10L7 12.5"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 7.5L16.5 10L13 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5 5L8.5 15"           stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'growth-acquisition': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13.5 13.5L17 17"                             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.5 11L8 9.5L9.5 10.5L12 7.5"               stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'automation-and-integration': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="2"   stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="3.5" cy="5"  r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="16.5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="3.5" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="16.5" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 5.5L8.5 8.5M15 5.5L11.5 8.5M5 14.5L8.5 11.5M15 14.5L11.5 11.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  ),
  /*'digital-marketing': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.5 10.5C4.5 7.462 6.962 5 10 5c2.236 0 4.155 1.343 5.07 3.273" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15.5 9.5C15.5 12.538 13.038 15 10 15c-2.236 0-4.155-1.343-5.07-3.273" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.5 7.5l2 2 1.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 12.5l-2-2L3 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'ai-integrations': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3"   stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="3"  r="1.2" fill="currentColor"/>
      <circle cx="10" cy="17" r="1.2" fill="currentColor"/>
      <circle cx="3"  cy="10" r="1.2" fill="currentColor"/>
      <circle cx="17" cy="10" r="1.2" fill="currentColor"/>
      <path d="M10 4.2V7M10 13v2.8M4.2 10H7M13 10h2.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),

  'bpo': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="8.5" y="2"   width="3" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="3"   y="8.5" width="3" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="14"  y="8.5" width="3" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M10 4.5v2.5M10 7H4.5v1.5M10 7h5.5v1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 11v2.5h11V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 13.5V16.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="10" cy="17.5" r="0.8" fill="currentColor"/>
    </svg>
  ),*/
}

// ─── Service Card ──────────────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <Link
      href={service.href}
      className="group flex flex-col gap-6 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: '#141414',
        border:          '1px solid rgba(255,255,255,0.06)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.11)'
        ;(e.currentTarget as HTMLAnchorElement).style.boxShadow  = '0 16px 48px rgba(0,0,0,0.35)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.06)'
        ;(e.currentTarget as HTMLAnchorElement).style.boxShadow  = 'none'
      }}
    >
      {/* Top row: icon + number */}
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            color:           'rgba(255,255,255,0.55)',
          }}
        >
          {ICON_MAP[service.id]}
        </div>
        <span
          className="font-mono text-xs font-medium"
          style={{ color: 'rgba(255,255,255,0.15)' }}
        >
          {num}
        </span>
      </div>

      {/* Title + Description */}
      <div className="flex flex-col gap-2">
        <h3
          className="font-display font-bold text-white"
          style={{ fontSize: '1.125rem', letterSpacing: '-0.02em' }}
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

      {/* Feature list */}
      <ul className="flex flex-col gap-2 mt-auto">
        {service.features.map((feat) => (
          <li
            key={feat}
            className="flex items-center gap-2 font-sans text-xs"
            style={{ color: 'rgba(255,255,255,0.32)' }}
          >
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ backgroundColor: '#FFD700', opacity: 0.6 }}
            />
            {feat}
          </li>
        ))}
      </ul>

      {/* Footer CTA */}
      <div
        className="flex items-center gap-1.5 text-xs font-sans font-medium mt-2 transition-colors duration-200"
        style={{ color: 'rgba(255,215,0,0.5)' }}
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
    </Link>
  )
}

// ─── Services Section ─────────────────────────────────────────────────────────
export function Services() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#0E0E0E' }}
      aria-labelledby="services-heading"
    >
      <Container>

        {/* Header */}
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
                Our Expertise.<br />
                All in one cohesive system.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p
              className="font-sans text-sm leading-relaxed max-w-xs lg:text-right"
              style={{ color: 'rgba(255,255,255,0.38)' }}
            >
        
              Our team at Diastral Web, works closely with your business
              to understand your unique needs and goals, ensuring that the solutions
              we provide are tailored to your specific requirements that will make you stand out in the competitive online landscape.
            </p>
          </FadeIn>
        </div>

        {/* Grid */}
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