// src/components/layout/Navbar.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from './Container'
import { NAV_LINKS } from '@/data/navigation'
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
            src="images/favicon.svg"
            alt="Diastral Web Solutions"
            width={52}
            height={52}
            priority
            className="block"
          />
        </motion.div>

      <span
        className="font-display font-semibold tracking-wide text-[15px] text-white"
      >
        
      </span>
    </Link>
  )
}

// ─── Desktop Nav Link ──────────────────────────────────────────────────────────
function DesktopNavLink({
  href,
  label,
  isActive,
}: {
  href: string
  label: string
  isActive: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        'relative px-3.5 py-2 rounded-md text-sm font-sans font-medium',
        'transition-colors duration-200',
        isActive
          ? 'text-white'
          : 'text-white/40 hover:text-white/75'
      )}
    >
      {isActive && (
        <motion.span
          layoutId="nav-active-indicator"
          className="absolute inset-0 rounded-md"
          style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </Link>
  )
}

// ─── Hamburger ────────────────────────────────────────────────────────────────
function Hamburger({
  open,
  onClick,
}: {
  open: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close navigation' : 'Open navigation'}
      aria-expanded={open}
      className={cn(
        'lg:hidden relative w-10 h-10 flex items-center justify-center rounded-md',
        'transition-colors duration-200',
        open ? 'bg-white/[0.08]' : 'hover:bg-white/[0.05]'
      )}
    >
      <div className="flex flex-col gap-[5px] items-end w-5">
        <motion.span
          animate={
            open
              ? { rotate: 45, y: 7, width: '20px' }
              : { rotate: 0, y: 0, width: '20px' }
          }
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="block h-px rounded-full bg-white/65 origin-center"
          style={{ width: '20px' }}
        />
        <motion.span
          animate={open ? { opacity: 0, x: 6 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.18 }}
          className="block h-px rounded-full bg-white/65"
          style={{ width: '13px' }}
        />
        <motion.span
          animate={
            open
              ? { rotate: -45, y: -7, width: '20px' }
              : { rotate: 0, y: 0, width: '20px' }
          }
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="block h-px rounded-full bg-white/65 origin-center"
          style={{ width: '16px' }}
        />
      </div>
    </button>
  )
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
function MobileMenu({
  open,
  pathname,
}: {
  open: boolean
  pathname: string
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              backgroundColor: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />

          {/* Panel */}
          <motion.div
            key="mobile-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -10, scale: 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.975 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 lg:hidden"
            style={{
              top: 'calc(4rem + 10px)',
              left: '1rem',
              right: '1rem',
              backgroundColor: '#141414',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow:
                '0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.03) inset',
            }}
          >
            {/* Links */}
            <nav className="p-2.5" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.04 + i * 0.05,
                      duration: 0.32,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center justify-between px-4 py-3.5 rounded-xl',
                        'font-display font-semibold text-lg',
                        'transition-all duration-150',
                        isActive
                          ? 'text-[#FFD700]'
                          : 'text-white/55 hover:text-white hover:bg-white/[0.04]'
                      )}
                      style={
                        isActive
                          ? { backgroundColor: 'rgba(255,215,0,0.06)' }
                          : undefined
                      }
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: '#FFD700' }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                margin: '0 1rem',
              }}
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.3 }}
              className="p-2.5"
            >
              <Link
                href="/contact"
                className={[
                  'flex items-center justify-center gap-2 w-full h-12',
                  'font-sans font-semibold text-sm text-[#0E0E0E]',
                  'rounded-xl transition-opacity duration-200 hover:opacity-90',
                ].join(' ')}
                style={{ backgroundColor: '#FFD700' }}
              >
                Start a Project
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 7.5H12.5M9 4L12.5 7.5L9 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
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

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: '4rem',
          backgroundColor: scrolled
            ? 'rgba(14,14,14,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.055)'
            : '1px solid transparent',
          transition:
            'background-color 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
        }}
      >
        <Container className="h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Logo />

            {/* Desktop — center nav */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((link) => (
                <DesktopNavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href}
                />
              ))}
            </nav>

            {/* Desktop — right CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/work"
                className={[
                  'px-4 h-9 flex items-center',
                  'font-sans font-medium text-sm text-white/40',
                  'hover:text-white/70 rounded-md',
                  'transition-colors duration-200',
                ].join(' ')}
              >
                View Work
              </Link>

              <Link
                href="/contact"
                className={[
                  'px-4 h-9 flex items-center gap-1.5',
                  'font-sans font-semibold text-sm text-[#0E0E0E]',
                  'rounded-md transition-all duration-200',
                  'hover:opacity-90 active:scale-[0.97]',
                ].join(' ')}
                style={{ backgroundColor: '#FFD700' }}
              >
                Get a Quote
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6.5H11M7.5 3L11 6.5L7.5 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <Hamburger
              open={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            />
          </div>
        </Container>
      </motion.header>

      {/* Mobile dropdown */}
      <MobileMenu open={menuOpen} pathname={pathname} />
    </>
  )
}