// src/app/(marketing)/work/page.tsx
import type { Metadata }  from 'next'
import { WorkGrid }       from '@/components/sections/work/WorkGrid'
import { buildMetadata }  from '@/lib/seo'
import { breadcrumbSchema, jsonLdScriptProps } from '@/lib/schema'

export const metadata: Metadata = {
  ...buildMetadata({
    title:       'Client Case Studies & Project Results',
    description: 'Browse Diastral\'s client work — websites, e-commerce stores, digital marketing campaigns, and automation systems delivered for real businesses.',
    path:        '/work',
    ogImage:     '/images/og/og-work.jpg',
    keywords: [
      'web development case studies',
      'digital marketing results',
      'website portfolio South Africa',
      'e-commerce development portfolio',
      'web design templates',
      'e-commerce websites',
      
    ],
  }),
}

export default function WorkPage() {
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbSchema([
        { name: 'Home', path: '/'      },
        { name: 'Work', path: '/work'  },
      ]))} />
      <WorkGrid />
    </>
  )
}