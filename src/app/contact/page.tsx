// src/app/contact/page.tsx
import type { Metadata }    from 'next'
import { TypeformContact }  from '@/components/sections/contact/TypeformContact'
import { buildMetadata }    from '@/lib/seo'
import { jsonLdScriptProps } from '@/lib/schema'
import { SITE_CONFIG }      from '@/lib/constants'

export const metadata: Metadata = {
  ...buildMetadata({
    title:       'Start a Project — Contact Diastral',
    description: "Tell us about your business and what you're trying to build. We respond within one business day with honest advice on how Diastral can help.",
    path:        '/contact',
    ogImage:     '/images/og/og-contact.jpg',
  }),
}

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type':    'ContactPage',
    name:       'Start a Project with Diastral',
    url:        `${SITE_CONFIG.url}/contact`,
    description: 'Contact Diastral Web Solutions to start a project. We respond within one business day.',
    isPartOf:   { '@id': `${SITE_CONFIG.url}/#website` },
    mainEntity: {
      '@type':  'Organization',
      '@id':    `${SITE_CONFIG.url}/#organization`,
      email:    SITE_CONFIG.email,
      contactPoint: {
        '@type':            'ContactPoint',
        email:              SITE_CONFIG.email,
        contactType:        'sales',
        availableLanguage:  'English',
        areaServed:         'ZA',
      },
    },
  }

  return (
    <>
      <script {...jsonLdScriptProps(contactPageSchema)} />
      <TypeformContact />
    </>
  )
}