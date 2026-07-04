// src/components/layout/Navbar.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import Link                                  from 'next/link'
import { usePathname }                       from 'next/navigation'
import { motion, AnimatePresence }           from 'framer-motion'
import { cn }                                from '@/lib/utils'
import { Container }                         from './Container'
import { NAV_LINKS }                         from '@/data/navigation'
import { SITE_CONFIG }                       from '@/lib/constants'
import Image from 'next/image'

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <Link
      href="/"
      aria-label="Diastral Web | Home"
      className="flex items-center gap-2.5 shrink-0 group"
    >
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="shrink-0"
        >
        <Image
          src="/images/logo.png"        // ← change from /logo.jpg
          alt="Diastral Web Solutions"
          width={90}
          height={90}
        />
        </motion.div>

      <span
        className="font-display font-semibold tracking-wide text-[15px] text-white"
      >
        
      </span>
    </Link>
  )
}



// ─── Desktop nav link ──────────────────────────────────────────────────────────
function DesktopLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        'relative px-3.5 py-2 rounded-md text-sm font-sans font-medium transition-colors duration-200',
        isActive ? 'text-white' : 'text-white/40 hover:text-white/75'
      )}
    >
      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-md"
          style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </Link>
  )
}

// ─── Full-screen mobile menu ───────────────────────────────────────────────────
function MobileMenu({ open, pathname }: { open: boolean; pathname: string }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-fullscreen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-40 flex flex-col lg:hidden"
          style={{ backgroundColor: '#0C0C0C' }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
              opacity: 0.5,
            }}
          />

          {/* Gold bloom top */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse 70% 40% at 50% -10%, rgba(255,215,0,0.07) 0%, transparent 70%)',
            }}
          />

          <div className="relative flex flex-col h-full px-6 pt-20 pb-10">

            {/* Nav links — large editorial style */}
            <nav className="flex flex-col gap-1 flex-1 justify-center" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{
                      delay:    0.08 + i * 0.07,
                      duration: 0.45,
                      ease:     [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between py-4 border-b border-white/[0.06] hover:border-white/[0.12] transition-all duration-200"
                    >
                      <div className="flex items-baseline gap-5">
                        <span
                          className="font-mono text-xs shrink-0"
                          style={{ color: isActive ? 'rgba(255,215,0,0.7)' : 'rgba(255,255,255,0.18)' }}
                        >
                          0{i + 1}
                        </span>
                        <span
                          className="font-display font-bold transition-colors duration-200"
                          style={{
                            fontSize:      'clamp(2.25rem, 8vw, 3rem)',
                            letterSpacing: '-0.04em',
                            lineHeight:    '1.1',
                            color:         isActive
                              ? '#FAFAFA'
                              : 'rgba(255,255,255,0.35)',
                          }}
                        >
                          {link.label}
                        </span>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="shrink-0"
                        style={{ color: '#FFD700' }}
                      >
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                          <path d="M6 14H22M16 8L22 14L16 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* Bottom CTA + contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.42, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 pt-6"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full h-14 font-sans font-semibold text-base text-[#0E0E0E] rounded-[10px] transition-opacity duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: '#FFD700' }}
              >
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
                <div className="flex items-center gap-3">
                  {[
                    { label: 'IG', href: SITE_CONFIG.social.instagram },
                    { label: 'LI', href: SITE_CONFIG.social.linkedin  },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="font-mono text-xs text-white/25 hover:text-white/55 transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Hamburger icon ────────────────────────────────────────────────────────────
function HamburgerButton({ open, onClick, onDark }: { open: boolean; onClick: () => void; onDark?: boolean }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close navigation' : 'Open navigation'}
      aria-expanded={open}
      className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-200"
      style={{
        backgroundColor: open
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(255,255,255,0.03)',
      }}
    >
      <div className="flex flex-col gap-[5px] items-end w-5">
        <motion.span
          animate={open
            ? { rotate: 45, y: 7, width: '20px' }
            : { rotate: 0,  y: 0, width: '20px' }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="block h-px rounded-full origin-center"
          style={{ width: '20px', backgroundColor: onDark ? '#0E0E0E' : 'rgba(255,255,255,0.7)' }}
        />
        <motion.span
          animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.18 }}
          className="block h-px rounded-full"
          style={{ width: '13px', backgroundColor: onDark ? '#0E0E0E' : 'rgba(255,255,255,0.7)' }}
        />
        <motion.span
          animate={open
            ? { rotate: -45, y: -7, width: '20px' }
            : { rotate: 0,   y: 0,  width: '17px' }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="block h-px rounded-full origin-center"
          style={{ width: '17px', backgroundColor: onDark ? '#0E0E0E' : 'rgba(255,255,255,0.7)' }}
        />
      </div>
    </button>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height:           '4rem',
          backgroundColor:  scrolled ? 'rgba(14,14,14,0.88)' : 'transparent',
          backdropFilter:   scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.055)'
            : '1px solid transparent',
          transition: 'background-color 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
        }}
      >
        <Container className="h-full">
          <div className="flex items-center justify-between h-full">

            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => (
                <DesktopLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href}
                />
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/work"
                className="px-4 h-9 flex items-center font-sans font-medium text-sm text-white/40 hover:text-white/70 rounded-md transition-colors duration-200"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 h-9 font-sans font-semibold text-sm text-[#0E0E0E] bg-[#FFD700] hover:bg-[#FFE44D] rounded-md transition-all duration-200 active:scale-[0.97]"
              >
                Get a Quote
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5H11M7.5 3L11 6.5L7.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <HamburgerButton
              open={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            />
          </div>
        </Container>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <MobileMenu open={menuOpen} pathname={pathname} />
    </>
  )
}