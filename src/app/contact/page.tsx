// src/app/contact/page.tsx
import type { Metadata }   from 'next'
import { TypeformContact } from '@/components/sections/contact/TypeformContact'

export const metadata: Metadata = {
  title:       'Start a Project',
  description: "Tell us about your project. We'll respond with honest advice on how Diastral can help — within one business day.",
}

export default function ContactPage() {
  return <TypeformContact />
}