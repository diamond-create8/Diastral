// src/components/layout/Footer.tsx
'use client';
import Link from 'next/link'
import { Container } from './Container'
import { NAV_LINKS } from '@/data/navigation'
import { SITE_CONFIG } from '@/lib/constants'
import Image from 'next/image'

const SERVICE_LINKS = [
  { label: 'Attract Your Ideal Customer', href: '/services#development-and-design' },
  { label: 'Get Found Online', href: '/services#growth-and-acquisition' },
  { label: 'Nurture Your Customers',   href: '/services#automation-and-integration ' },

]

function FooterLogo() 
{
  return (
    <div className="flex items-center gap-3">
    <Image
        src="images/diastral-logo.svg"
        alt="Diastral Web Solutions"
        width={40}
        height={40}
        
    />

      <span className="font-display font-semibold tracking-wide text-[15px] text-white">
        Diastral Web Solutions
      </span>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.055)',
      }}
      aria-label="Site footer"
    >
      {/* Top gold line accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.25) 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <Container>
        {/* ── Top grid ── */}
        <div
          className="grid gap-10 lg:gap-8 py-16 lg:py-20"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
          }}
        >
          {/* Brand */}
          <div
            className="col-span-12 lg:col-span-4 flex flex-col gap-5"
          >
            <FooterLogo />
            <p
              className="font-sans text-sm leading-relaxed"
              style={{
                color: 'rgba(255,255,255,0.32)',
                maxWidth: '22rem',
              }}
            >
              Digital solutions for businesses that want to grow online fast. 
            </p>
            
          <div className="flex items-center gap-1 -ml-2 mt-1">
              {[
                { label: 'Instagram', href: SITE_CONFIG.social.instagram },
                { label: 'LinkedIn',  href: SITE_CONFIG.social.linkedin  },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in new tab)`}
                  className="px-2 py-1.5 font-sans text-xs rounded-md transition-colors duration-200 hover:text-white/60 hover:bg-white/[0.04]"
                  style={{ color: 'rgba(255,255,255,0.28)' }}
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* ── Shopify Partner Badge ── */}
            <a
              //href="https://www.shopify.com/partners"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Certified Shopify Partner — opens in new tab"
              className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg w-fit transition-all duration-200"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border:          '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(150,191,72,0.07)'
                e.currentTarget.style.borderColor     = 'rgba(150,191,72,0.22)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor     = 'rgba(255,255,255,0.08)'
              }}
            >
              {/* Shopify bag icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                {/* Bag body */}
                <path
                  d="M16 6.5H14.2C13.9 4.2 12.1 2.5 10 2.5C7.9 2.5 6.1 4.2 5.8 6.5H4L2.8 17H17.2L16 6.5Z"
                  fill="rgba(150,191,72,0.1)"
                  stroke="#96BF48"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
                {/* Handle arc */}
                <path
                  d="M7.5 6.5C7.5 4.8 8.6 3.5 10 3.5C11.4 3.5 12.5 4.8 12.5 6.5"
                  stroke="#96BF48"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* S letterform */}
                <path
                  d="M11.4 9.8C11.4 9.8 10.9 9.2 10 9.2C9.1 9.2 8.6 9.7 8.6 10.4C8.6 11.1 9.2 11.4 10 11.6C10.8 11.8 11.4 12.2 11.4 13C11.4 13.8 10.8 14.3 10 14.3C9.1 14.3 8.5 13.7 8.5 13.7"
                  stroke="#96BF48"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* S stem top and bottom */}
                <path
                  d="M10 8.5V9.2M10 14.3V15"
                  stroke="#96BF48"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>

              {/* Label */}
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-sans leading-none"
                  style={{
                    fontSize:      '9px',
                    fontWeight:    700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         'rgba(150,191,72,0.75)',
                  }}
                >
                  Shopify
                </span>
                <span
                  className="font-sans leading-none"
                  style={{
                    fontSize:   '12px',
                    fontWeight: 600,
                    color:      'rgba(255,255,255,0.6)',
                  }}
                >
                  Development Partner
                </span>
              </div>
            </a>
        </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Company */}
<div className="col-span-6 lg:col-span-2 flex flex-col gap-4">
  <h3
    className="font-sans font-semibold uppercase tracking-[0.12em]"
    style={{ fontSize: '10px', color: 'rgba(255,255,255,0.22)' }}
  >
    Company
  </h3>

  <ul className="flex flex-col gap-3">
    {NAV_LINKS.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="font-sans text-sm text-white/40 hover:text-white/80 transition-colors"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Services */}
          <div className="col-span-6 lg:col-span-2 flex flex-col gap-4">
            <h3
              className="font-sans font-semibold uppercase tracking-[0.12em]"
              style={{ fontSize: '10px', color: 'rgba(255,255,255,0.22)' }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 lg:col-span-2 flex flex-col gap-4">
            <h3
              className="font-sans font-semibold uppercase tracking-[0.12em]"
              style={{ fontSize: '10px', color: 'rgba(255,255,255,0.22)' }}
            >
              Talk to Us
            </h3>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-sans text-sm transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
              }}
            >
              {SITE_CONFIG.email}
            </a>
            <div
              className="mt-1 pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-sans font-medium text-xs transition-colors duration-200"
                style={{ color: 'rgba(255,215,0,0.6)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,215,0,0.6)'
                }}
              >
                Start your journey with us
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p
            className="font-sans text-xs"
            style={{ color: 'rgba(255,255,255,0.18)' }}
          >
            © {year} Diastral Web Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.18)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.42)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.18)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}