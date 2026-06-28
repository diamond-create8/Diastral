// src/app/(marketing)/work/page.tsx
import type { Metadata } from 'next'
import { WorkGrid } from '@/components/sections/work/WorkGrid'

export const metadata: Metadata = {
  title:       'Work',
  description: 'Case studies and client work from Diastral — websites, AI integrations, automation, and digital systems.',
}

export default function WorkPage() {
  return <WorkGrid />
}