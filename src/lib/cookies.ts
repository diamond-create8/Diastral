// src/lib/cookies.ts

export type ConsentState = 'accepted' | 'rejected' | null

const CONSENT_KEY = 'diastral_cookie_consent'

export function getConsent(): ConsentState {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(CONSENT_KEY)
  return stored === 'accepted' || stored === 'rejected' ? stored : null
}

export function setConsent(value: 'accepted' | 'rejected') {
  if (typeof window === 'undefined') return
  localStorage.setItem(CONSENT_KEY, value)
  window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: value }))
}

export function hasAnalyticsConsent(): boolean {
  return getConsent() === 'accepted'
}