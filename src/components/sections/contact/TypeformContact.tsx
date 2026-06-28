// src/components/sections/contact/TypeformContact.tsx
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// ─── Types ─────────────────────────────────────────────────────────────────────

type FormData = {
  // Step 1
  fullName:  string
  company:   string
  email:     string
  phone:     string
  // Step 2
  services:  string[]
  // Step 3
  business:  string
  // Step 4
  challenge: string
  attempted: string
  urgency:   string
  // Step 5
  budget:    string
  // Step 6
  source:    string
  extra:     string
}

const EMPTY_FORM: FormData = {
  fullName:  '',
  company:   '',
  email:     '',
  phone:     '',
  services:  [],
  business:  '',
  challenge: '',
  attempted: '',
  urgency:   '',
  budget:    '',
  source:    '',
  extra:     '',
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const TOTAL_STEPS = 6

const SERVICES: { id: string; label: string; icon: React.ReactNode }[] = [
  {
    id:    'development-and-design',
    label: 'Attract My Ideal Clients',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M8 8.5L4.5 11l3.5 3M14 8.5l3.5 2.5-3.5 3M12.5 5.5l-3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id:    'growth-acquisition',
    label: 'Grow My Reach',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 15L18.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7.5 12l1.5-2 2 1.5L14 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  /*{
    id:    'marketing',
    label: 'Digital Marketing',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3.5 12v4.5l3-2 3 2 3-2 3 2V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 6L12 10 9 8.5 3.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  }, */
  {
    id:    'automation-and-integration',
    label: 'Stay In Touch With My Customers',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M5 11.5C5 8.5 7.2 6 11 6c2.5 0 4.7 1.4 5.7 3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 10.5C17 13.5 14.8 16 11 16c-2.5 0-4.7-1.4-5.7-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14.5 8l2.5 2.5 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 14l-2.5-2.5L3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  /*{
    id:    'ai',
    label: 'AI Integrations',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="3.5" r="1.2" fill="currentColor"/>
        <circle cx="11" cy="18.5" r="1.2" fill="currentColor"/>
        <circle cx="3.5" cy="11" r="1.2" fill="currentColor"/>
        <circle cx="18.5" cy="11" r="1.2" fill="currentColor"/>
        <path d="M11 4.7V7.5M11 14.5v2.8M4.7 11H7.5M14.5 11h2.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },*/
  {
    id:    'unsure',
    label: "I'm Not Sure Yet",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8.5 8.5C8.5 7 9.6 6 11 6c1.4 0 2.5 1 2.5 2.5 0 2-2.5 2-2.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="16" r="0.85" fill="currentColor"/>
      </svg>
    ),
  },
]

const SOURCES = [
  'Google Search',
  'LinkedIn',
  'Instagram',
  'Referral from someone I know',
  'Word of mouth',
  'Found your work online',
  'Other',
]

// ─── Animation ─────────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({
    x:       dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x:       0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x:       dir > 0 ? -60 : 60,
    opacity: 0,
  }),
}

const slideTransition = {
  duration: 0.45,
  ease:     [0.16, 1, 0.3, 1] as const,
}

// ─── Validation ────────────────────────────────────────────────────────────────

function validate(step: number, data: FormData): Record<string, string> {
  const e: Record<string, string> = {}

  if (step === 1) {
    if (!data.fullName.trim())              e.fullName = 'Your name is required'
    if (!data.email.trim())                 e.email    = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = 'Enter a valid email address'
    if (!data.phone.trim())                 e.phone    = 'Phone number is required'
  }
  if (step === 2) {
    if (data.services.length === 0)         e.services = 'Select at least one service'
  }
  if (step === 3) {
    if (data.business.trim().length < 10)   e.business = 'Please tell us a bit more (at least a sentence)'
  }
  if (step === 4) {
    if (!data.challenge.trim())             e.challenge = 'Please describe your challenge'
  }
  if (step === 5) {
    if (!data.budget.trim())                e.budget = 'Please share your budget, even a rough range helps'
  }
  if (step === 6) {
    if (!data.source)                       e.source = 'Let us know how you found us'
  }
  return e
}

// ─── Reusable Input ────────────────────────────────────────────────────────────

function Field({
  id,
  label,
  type       = 'text',
  placeholder,
  value,
  error,
  optional   = false,
  autoFocus  = false,
  onChange,
}: {
  id:          string
  label:       string
  type?:       string
  placeholder: string
  value:       string
  error?:      string
  optional?:   boolean
  autoFocus?:  boolean
  onChange:    (v: string) => void
}) {
  const [focused, setFocused] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus) setTimeout(() => ref.current?.focus(), 120)
  }, [autoFocus])

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-sans text-sm font-medium"
        style={{ color: 'rgba(255,255,255,0.5)' }}
      >
        {label}
        {optional && (
          <span style={{ color: 'rgba(255,255,255,0.22)', marginLeft: '6px', fontWeight: 400 }}>
            optional
          </span>
        )}
      </label>
      <input
        ref={ref}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        className="font-sans"
        style={{
          backgroundColor: focused ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${
            error   ? 'rgba(239,68,68,0.5)'   :
            focused ? 'rgba(255,215,0,0.45)'  :
                      'rgba(255,255,255,0.09)'
          }`,
          borderRadius: '10px',
          color:        '#FAFAFA',
          fontSize:     '1rem',
          padding:      '14px 18px',
          width:        '100%',
          outline:      'none',
          transition:   'border-color 0.2s ease, background-color 0.2s ease',
          height:       '54px',
        }}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="font-sans text-xs"
            style={{ color: 'rgba(239,68,68,0.8)' }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function TextArea({
  id,
  label,
  placeholder,
  value,
  error,
  optional  = false,
  autoFocus = false,
  rows      = 4,
  onChange,
}: {
  id:          string
  label:       string
  placeholder: string
  value:       string
  error?:      string
  optional?:   boolean
  autoFocus?:  boolean
  rows?:       number
  onChange:    (v: string) => void
}) {
  const [focused, setFocused] = useState(false)
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (autoFocus) setTimeout(() => ref.current?.focus(), 120)
  }, [autoFocus])

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-sans text-sm font-medium"
        style={{ color: 'rgba(255,255,255,0.5)' }}
      >
        {label}
        {optional && (
          <span style={{ color: 'rgba(255,255,255,0.22)', marginLeft: '6px', fontWeight: 400 }}>
            optional
          </span>
        )}
      </label>
      <textarea
        ref={ref}
        id={id}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        className="font-sans"
        style={{
          backgroundColor: focused ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${
            error   ? 'rgba(239,68,68,0.5)'   :
            focused ? 'rgba(255,215,0,0.45)'  :
                      'rgba(255,255,255,0.09)'
          }`,
          borderRadius: '10px',
          color:        '#FAFAFA',
          fontSize:     '0.9375rem',
          lineHeight:   '1.7',
          padding:      '14px 18px',
          width:        '100%',
          outline:      'none',
          resize:       'vertical',
          minHeight:    '110px',
          transition:   'border-color 0.2s ease, background-color 0.2s ease',
          fontFamily:   'var(--font-inter, system-ui)',
        }}
      />
      {!error && (
        <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
          Ctrl + Enter to continue
        </p>
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="font-sans text-xs"
            style={{ color: 'rgba(239,68,68,0.8)' }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Logo ──────────────────────────────────────────────────────────────────────

function InlineLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 shrink-0"
      aria-label="Diastral — Home"
    >
      <div
        className="w-7 h-7 rounded-[7px] flex items-center justify-center shrink-0"
        style={{ backgroundColor: '#FFD700' }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1L14.5 4.5V11.5L8 15L1.5 11.5V4.5L8 1Z" stroke="#0E0E0E" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M8 5L11 6.75V10.25L8 12L5 10.25V6.75L8 5Z" fill="#0E0E0E"/>
        </svg>
      </div>
      <span
        className="font-display font-semibold text-white text-sm tracking-wide"
      >
        Diastral
      </span>
    </Link>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function TypeformContact() {
  const [step,      setStep]      = useState(0)
  const [direction, setDirection] = useState(1)
  const [data,      setData]      = useState<FormData>(EMPTY_FORM)
  const [errors,    setErrors]    = useState<Record<string, string>>({})
  const [loading,   setLoading]   = useState(false)

  // Helpers
  const set = useCallback(<K extends keyof FormData>(key: K, val: FormData[K]) => {
    setData((d) => ({ ...d, [key]: val }))
    setErrors((e) => { const n = { ...e }; delete n[key as string]; return n })
  }, [])

  const toggleService = useCallback((id: string) => {
    setData((d) => {
      const has = d.services.includes(id)
      return { ...d, services: has ? d.services.filter((s) => s !== id) : [...d.services, id] }
    })
    setErrors((e) => { const n = { ...e }; delete n.services; return n })
  }, [])

  // Navigation
  const goNext = useCallback(async () => {
    if (step === 0) {
      setDirection(1)
      setStep(1)
      return
    }

    const errs = validate(step, data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})

    if (step === TOTAL_STEPS) {
      // Submit
      setLoading(true)
      /*
        ─── CONNECT YOUR EMAIL SERVICE HERE ─────────────────────────────
        Option A — Resend (recommended):
          Create /src/app/api/contact/route.ts
          const resend = new Resend(process.env.RESEND_API_KEY)
          await resend.emails.send({ from, to, subject, html: formatEmail(data) })

        Option B — Formspree (no backend needed):
          await fetch('https://formspree.io/f/YOUR_ID', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })

        Option C — EmailJS (client-side, simplest):
          await emailjs.send(serviceId, templateId, data, publicKey)
        ─────────────────────────────────────────────────────────────────
      */
     
      const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})

if (!response.ok) {
  throw new Error('Failed to send')
}
    }

    setDirection(1)
    setStep((s) => s + 1)
  }, [step, data])

  const goBack = useCallback(() => {
    if (step <= 1) return
    setErrors({})
    setDirection(-1)
    setStep((s) => s - 1)
  }, [step])

  // Keyboard: Enter to advance (not on textarea steps 3+4)
  useEffect(() => {
    const isTextareaStep = step === 3 || step === 4
    if (isTextareaStep) return

    function onKey(e: KeyboardEvent) {
      // Ctrl+Enter always works; plain Enter works on non-textarea steps
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey || !isTextareaStep)) {
        e.preventDefault()
        goNext()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step, goNext])

  // Ctrl+Enter on textarea steps
  useEffect(() => {
    if (step !== 3 && step !== 4) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        goNext()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step, goNext])

  const progress = step === 0 || step === 7 ? 0 : (step / TOTAL_STEPS) * 100

  // ─── Step Labels ─────────────────────────────────────────────────────────────

  const STEP_LABELS: Record<number, string> = {
    1: 'Your details',
    2: 'Services',
    3: 'Your business',
    4: 'Your challenge',
    5: 'Budget',
    6: 'Last few things',
  }

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <div
      className="flex flex-col"
      style={{
        minHeight:       '100dvh',
        backgroundColor: '#0E0E0E',
        overflow:        'hidden',
      }}
    >
      {/* ── Progress Bar ── */}
      <div
        className="fixed top-0 left-0 right-0 z-[60]"
        style={{ height: '3px', backgroundColor: 'rgba(255,255,255,0.05)' }}
        aria-hidden="true"
      >
        <motion.div
          className="h-full"
          style={{ backgroundColor: '#FFD700', transformOrigin: 'left' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* ── Top Bar ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8"
        style={{
          height:          '4rem',
          paddingTop:      '3px', // offset from progress bar
          backgroundColor: 'rgba(14,14,14,0.95)',
          backdropFilter:  'blur(20px)',
          borderBottom:    step > 0 && step < 7
            ? '1px solid rgba(255,255,255,0.05)'
            : '1px solid transparent',
        }}
      >
        <InlineLogo />

        {step > 0 && step < 7 && (
          <div className="flex items-center gap-3">
            <span
              className="font-sans text-xs font-medium hidden sm:block"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              {STEP_LABELS[step]}
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                color:           'rgba(255,255,255,0.35)',
                border:          '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {step} / {TOTAL_STEPS}
            </span>
          </div>
        )}
      </div>

      {/* ── Main Area ── */}
      <div
        className="flex-1 flex flex-col items-center justify-center"
        style={{ paddingTop: '4rem' }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          {/* ── INTRO ── */}
          {step === 0 && (
            <motion.div
              key="intro"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="w-full max-w-[560px] mx-auto px-6 sm:px-0 flex flex-col gap-10 py-16"
            >
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-[0.1em] uppercase"
                    style={{ color: 'rgba(255,215,0,0.7)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: '#FFD700' }}
                    />
                    New project enquiry
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-bold text-white"
                  style={{
                    fontSize:      'clamp(2.25rem, 5vw, 3.5rem)',
                    letterSpacing: '-0.04em',
                    lineHeight:    1.06,
                  }}
                >
                  Let's figure out
                  <br />
                  <span style={{ color: 'rgba(250,250,250,0.35)' }}>
                    the right solution.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sans"
                  style={{
                    fontSize:   '1.0625rem',
                    lineHeight: '1.75',
                    color:      'rgba(255,255,255,0.42)',
                    maxWidth:   '38rem',
                  }}
                >
                  A few quick questions so we can understand your goals and
                  come back with honest advice on how we can help. Takes
                  about 2 minutes.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <motion.button
                  onClick={goNext}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 font-sans font-semibold text-[0.9375rem] text-[#0E0E0E] bg-[#FFD700] hover:bg-[#FFE44D] px-8 h-[52px] rounded-[10px] transition-all duration-200 hover:shadow-[0_8px_32px_rgba(255,215,0,0.18)]"
                >
                  Let's get started
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>

                <p
                  className="font-sans text-xs"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                >
                  We respond within one business day
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* ── STEP 1 — Details ── */}
          {step === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="w-full max-w-[560px] mx-auto px-6 sm:px-0 flex flex-col gap-8 py-10"
            >
              <div className="flex flex-col gap-2">
                <p className="eyebrow">Step 1 of 6</p>
                <h2
                  className="font-display font-bold text-white"
                  style={{
                    fontSize:      'clamp(1.75rem, 4vw, 2.5rem)',
                    letterSpacing: '-0.035em',
                    lineHeight:    1.1,
                  }}
                >
                  Let's start with
                  the basics.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <Field
                  id="fullName"
                  label="Full Name"
                  placeholder="Jane Smith"
                  value={data.fullName}
                  error={errors.fullName}
                  autoFocus
                  onChange={(v) => set('fullName', v)}
                />
                <Field
                  id="company"
                  label="Company Name"
                  placeholder="Your company (if applicable)"
                  value={data.company}
                  optional
                  onChange={(v) => set('company', v)}
                />
                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="you@company.com"
                  value={data.email}
                  error={errors.email}
                  onChange={(v) => set('email', v)}
                />
                <Field
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="+27 123 456 7890"
                  value={data.phone}
                  error={errors.phone}
                  onChange={(v) => set('phone', v)}
                />
              </div>
            </motion.div>
          )}

          {/* ── STEP 2 — Services ── */}
          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="w-full max-w-[640px] mx-auto px-6 sm:px-0 flex flex-col gap-8 py-10"
            >
              <div className="flex flex-col gap-2">
                <p className="eyebrow">Step 2 of 6</p>
                <h2
                  className="font-display font-bold text-white"
                  style={{
                    fontSize:      'clamp(1.75rem, 4vw, 2.5rem)',
                    letterSpacing: '-0.035em',
                    lineHeight:    1.1,
                  }}
                >
                  What can we
                  help you with?
                </h2>
                <p
                  className="font-sans text-sm"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  Select everything that applies.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SERVICES.map((svc) => {
                  const selected = data.services.includes(svc.id)
                  return (
                    <motion.button
                      key={svc.id}
                      onClick={() => toggleService(svc.id)}
                      whileTap={{ scale: 0.97 }}
                      className="flex flex-col gap-3 p-4 rounded-xl text-left transition-all duration-200"
                      style={{
                        backgroundColor: selected
                          ? 'rgba(255,215,0,0.07)'
                          : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${
                          selected
                            ? 'rgba(255,215,0,0.35)'
                            : 'rgba(255,255,255,0.08)'
                        }`,
                      }}
                    >
                      {/* Icon */}
                      <span
                        style={{
                          color: selected
                            ? '#FFD700'
                            : 'rgba(255,255,255,0.4)',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {svc.icon}
                      </span>

                      {/* Label + Checkmark row */}
                      <div className="flex items-start justify-between gap-2">
                        <span
                          className="font-sans text-sm font-medium"
                          style={{
                            color: selected
                              ? '#FAFAFA'
                              : 'rgba(255,255,255,0.55)',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {svc.label}
                        </span>
                        <span
                          className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                          style={{
                            backgroundColor: selected
                              ? '#FFD700'
                              : 'rgba(255,255,255,0.06)',
                            border: selected
                              ? 'none'
                              : '1px solid rgba(255,255,255,0.12)',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <AnimatePresence>
                            {selected && (
                              <motion.svg
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                width="9" height="9" viewBox="0 0 9 9" fill="none"
                              >
                                <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </motion.svg>
                            )}
                          </AnimatePresence>
                        </span>
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              <AnimatePresence>
                {errors.services && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-sans text-xs"
                    style={{ color: 'rgba(239,68,68,0.8)' }}
                  >
                    {errors.services}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── STEP 3 — Business ── */}
          {step === 3 && (
            <motion.div
              key="step-3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="w-full max-w-[560px] mx-auto px-6 sm:px-0 flex flex-col gap-8 py-10"
            >
              <div className="flex flex-col gap-2">
                <p className="eyebrow">Step 3 of 6</p>
                <h2
                  className="font-display font-bold text-white"
                  style={{
                    fontSize:      'clamp(1.75rem, 4vw, 2.5rem)',
                    letterSpacing: '-0.035em',
                    lineHeight:    1.1,
                  }}
                >
                  Tell us about
                  your business.
                </h2>
              </div>

              <TextArea
                id="business"
                label="What do you do, who do you serve, and where are you based?"
                placeholder="We're a property management company in Cape Town serving mid-market landlords. We manage about 200 units and our team is 8 people..."
                value={data.business}
                error={errors.business}
                autoFocus
                rows={5}
                onChange={(v) => set('business', v)}
              />
            </motion.div>
          )}

          {/* ── STEP 4 — Challenges ── */}
          {step === 4 && (
            <motion.div
              key="step-4"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="w-full max-w-[560px] mx-auto px-6 sm:px-0 flex flex-col gap-8 py-10"
            >
              <div className="flex flex-col gap-2">
                <p className="eyebrow">Step 4 of 6</p>
                <h2
                  className="font-display font-bold text-white"
                  style={{
                    fontSize:      'clamp(1.75rem, 4vw, 2.5rem)',
                    letterSpacing: '-0.035em',
                    lineHeight:    1.1,
                  }}
                >
                  Tell us about your biggest challenges.
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                <TextArea
                  id="challenge"
                  label="What's the biggest challenge you're facing right now?"
                  placeholder="More leads, low website traffic, too much admin work, outdated website, no digital presence..."
                  value={data.challenge}
                  error={errors.challenge}
                  autoFocus
                  rows={3}
                  onChange={(v) => set('challenge', v)}
                />
                <TextArea
                  id="attempted"
                  label="Have you tried to solve this before?"
                  placeholder="Tell us what you've tried and what happened — even if it didn't work..."
                  value={data.attempted}
                  optional
                  rows={3}
                  onChange={(v) => set('attempted', v)}
                />
                <TextArea
                  id="urgency"
                  label="Why is now the right time to address this?"
                  placeholder="What's changed in your business that makes this a priority right now?"
                  value={data.urgency}
                  optional
                  rows={3}
                  onChange={(v) => set('urgency', v)}
                />
              </div>
            </motion.div>
          )}

          {/* ── STEP 5 — Budget ── */}
          {step === 5 && (
            <motion.div
              key="step-5"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="w-full max-w-[560px] mx-auto px-6 sm:px-0 flex flex-col gap-8 py-10"
            >
              <div className="flex flex-col gap-2">
                <p className="eyebrow">Step 5 of 6</p>
                <h2
                  className="font-display font-bold text-white"
                  style={{
                    fontSize:      'clamp(1.75rem, 4vw, 2.5rem)',
                    letterSpacing: '-0.035em',
                    lineHeight:    1.1,
                  }}
                >
                  What's your
                  estimated budget?
                </h2>
                <p
                  className="font-sans text-sm"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  No need to be precise. A rough figure helps us
                  recommend the right solution — and we'll always
                  be upfront if we're not the right fit.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Field
                  id="budget"
                  label="Budget (any currency, any format)"
                  placeholder="e.g. R15,000 · $2,500 · £1,200 · R8,000/month"
                  value={data.budget}
                  error={errors.budget}
                  autoFocus
                  onChange={(v) => set('budget', v)}
                />

                {/* Quick-fill chips */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {[
                    'Under R10,000',
                    'R10k – R30k',
                    'R30k – R80k',
                    'R80,000+',
                    'Let\'s discuss',
                  ].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => set('budget', chip)}
                      className="font-sans text-xs px-3 py-1.5 rounded-full transition-all duration-150"
                      style={{
                        backgroundColor: data.budget === chip
                          ? 'rgba(255,215,0,0.12)'
                          : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${data.budget === chip
                          ? 'rgba(255,215,0,0.3)'
                          : 'rgba(255,255,255,0.08)'}`,
                        color: data.budget === chip
                          ? '#FFD700'
                          : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ── STEP 6 — Source + Extra ── */}
          {step === 6 && (
            <motion.div
              key="step-6"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="w-full max-w-[560px] mx-auto px-6 sm:px-0 flex flex-col gap-8 py-10"
            >
              <div className="flex flex-col gap-2">
                <p className="eyebrow">Step 6 of 6</p>
                <h2
                  className="font-display font-bold text-white"
                  style={{
                    fontSize:      'clamp(1.75rem, 4vw, 2.5rem)',
                    letterSpacing: '-0.035em',
                    lineHeight:    1.1,
                  }}
                >
                  We're almost there.
                  Just a couple more things.
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {/* Source — styled select */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="source"
                    className="font-sans text-sm font-medium"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    How did you hear about us?
                    <span style={{ color: 'rgba(255,215,0,0.5)', marginLeft: '4px' }}>*</span>
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    {SOURCES.map((src) => (
                      <button
                        key={src}
                        onClick={() => {
                          set('source', src)
                        }}
                        className="flex items-center gap-2.5 px-4 py-3 rounded-lg text-left transition-all duration-150 font-sans text-sm"
                        style={{
                          backgroundColor: data.source === src
                            ? 'rgba(255,215,0,0.07)'
                            : 'rgba(255,255,255,0.03)',
                          border: `1px solid ${data.source === src
                            ? 'rgba(255,215,0,0.3)'
                            : 'rgba(255,255,255,0.08)'}`,
                          color: data.source === src
                            ? '#FAFAFA'
                            : 'rgba(255,255,255,0.45)',
                        }}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0 flex items-center justify-center"
                          style={{
                            border: `1.5px solid ${data.source === src ? '#FFD700' : 'rgba(255,255,255,0.2)'}`,
                            backgroundColor: data.source === src ? '#FFD700' : 'transparent',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          <AnimatePresence>
                            {data.source === src && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="block w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: '#0E0E0E' }}
                              />
                            )}
                          </AnimatePresence>
                        </span>
                        {src}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence>
                    {errors.source && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="font-sans text-xs"
                        style={{ color: 'rgba(239,68,68,0.8)' }}
                      >
                        {errors.source}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Extra */}
                <TextArea
                  id="extra"
                  label="Anything else we should know?"
                  placeholder="Links to inspiration, a deadline, a specific concern, or anything that would help us understand your project better..."
                  value={data.extra}
                  optional
                  rows={4}
                  onChange={(v) => set('extra', v)}
                />
              </div>
            </motion.div>
          )}

          {/* ── SUCCESS ── */}
          {step === 7 && (
            <motion.div
              key="success"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="w-full max-w-[520px] mx-auto px-6 sm:px-0 flex flex-col items-center text-center gap-8 py-16"
            >
              {/* Animated check */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(255,215,0,0.1)',
                  border:          '1px solid rgba(255,215,0,0.25)',
                }}
              >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                  <path
                    d="M5 13.5L10.5 19L21 8"
                    stroke="#FFD700"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              <div className="flex flex-col gap-4">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-display font-bold text-white"
                  style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.035em' }}
                >
                  We've got it.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-sans"
                  style={{
                    fontSize:   '1.0625rem',
                    lineHeight: '1.75',
                    color:      'rgba(255,255,255,0.42)',
                  }}
                >
                  Thanks, {data.fullName.split(' ')[0] || 'there'}. We've received your
                  details and we'll review your project and respond within one
                  business day, usually the same day.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.6 }}
                className="flex flex-col items-center gap-4 w-full"
              >
                <div
                  className="w-full p-5 rounded-xl flex flex-col gap-2"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border:          '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <p
                    className="font-sans text-xs font-semibold uppercase tracking-[0.1em]"
                    style={{ color: 'rgba(255,255,255,0.22)' }}
                  >
                    What happens next
                  </p>
                  {[
                    'We review your submission — same day',
                    'We send you a tailored response with honest recommendations',
                    'If there\'s a fit, we schedule a 30-minute discovery call',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 pt-2">
                      <span
                        className="font-mono text-xs mt-0.5 shrink-0"
                        style={{ color: 'rgba(255,215,0,0.5)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="font-sans text-sm"
                        style={{ color: 'rgba(255,255,255,0.45)' }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/"
                  className="font-sans text-sm text-white/30 hover:text-white/55 transition-colors duration-200"
                >
                  Back to Diastral →
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Bottom Navigation ── */}
      <AnimatePresence>
        {step > 0 && step < 7 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className="sticky bottom-0 z-50"
            style={{
              backgroundColor: 'rgba(14,14,14,0.95)',
              backdropFilter:  'blur(20px)',
              borderTop:       '1px solid rgba(255,255,255,0.06)',
              padding:         '1rem 1.5rem',
            }}
          >
            <div className="max-w-[640px] mx-auto flex items-center justify-between gap-4">
              {/* Back */}
              <button
                onClick={goBack}
                disabled={step === 1}
                className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-all duration-200 px-4 h-10 rounded-md"
                style={{
                  color:           step === 1 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.4)',
                  cursor:          step === 1 ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (step > 1) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                }}
                onMouseLeave={(e) => {
                  if (step > 1) e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M11 8H5M7.5 5L5 8l2.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </button>

              {/* Right: Enter hint + Continue */}
              <div className="flex items-center gap-4">
                {step !== 3 && step !== 4 && (
                  <span
                    className="font-sans text-xs hidden sm:block"
                    style={{ color: 'rgba(255,255,255,0.18)' }}
                  >
                    Press Enter ↵
                  </span>
                )}

                <motion.button
                  onClick={goNext}
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-[#0E0E0E] bg-[#FFD700] hover:bg-[#FFE44D] h-10 px-6 rounded-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="15" height="15" viewBox="0 0 15 15" fill="none"
                        aria-hidden="true"
                      >
                        <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
                        <path d="M13 7.5a5.5 5.5 0 0 0-5.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Submitting…
                    </>
                  ) : step === TOTAL_STEPS ? (
                    <>
                      Submit
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2.5 7H11.5M8.5 4L11.5 7L8.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  ) : (
                    <>
                      Continue
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2.5 7H11.5M8.5 4L11.5 7L8.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}