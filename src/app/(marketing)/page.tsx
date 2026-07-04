// src/app/(marketing)/page.tsx
import type { Metadata }  from 'next'
import { Hero }            from '@/components/sections/home/Hero'
import { LogoStrip }       from '@/components/sections/home/LogoStrip'
import { Services }        from '@/components/sections/home/Services'
import { Process }         from '@/components/sections/home/Process'
import { Work }            from '@/components/sections/home/Work'
//import { ClientLogos }     from '@/components/sections/home/ClientLogos'
import { Testimonials }    from '@/components/sections/home/Testimonials'
import { CTA }             from '@/components/sections/home/CTA'
import { SITE_CONFIG }     from '@/lib/constants'
import { faqSchema, reviewSchema, jsonLdScriptProps } from '@/lib/schema'
import { GENERAL_FAQS }   from '@/data/faqs'
import { TESTIMONIALS }    from '@/data/testimonials'
import { buildMetadata }   from '@/lib/seo'

export const metadata: Metadata = {
  ...buildMetadata({
    title:       `${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    path:        '/',
    ogImage:     '/images/og/og-default.png',
    keywords: [
      'web development South Africa',
      'digital marketing agency South Africa',
      'SEO services South Africa',
      'website design South Africa',
      'CRM automation small business',
      'Google Ads management South Africa',
      'e-commerce development South Africa',
    ],
  }),
}

export default function HomePage() {
  const webPageSchema = {
    '@context':  'https://schema.org',
    '@type':     'WebPage',
    '@id':       `${SITE_CONFIG.url}/#webpage`,
    url:         SITE_CONFIG.url,
    name:        `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    isPartOf:    { '@id': `${SITE_CONFIG.url}/#website` },
    about:       { '@id': `${SITE_CONFIG.url}/#organization` },
    inLanguage:  'en-US',
  }

  return (
    <>
      <script {...jsonLdScriptProps(webPageSchema)} />
      <script {...jsonLdScriptProps(faqSchema(GENERAL_FAQS))} />
      <script {...jsonLdScriptProps(reviewSchema(
        TESTIMONIALS.map((t) => ({ author: t.author, company: t.company, quote: t.quote }))
      ))} />

      <Hero />
      <LogoStrip />
      <Services />
      <Process />
      <Work />
      {/*<ClientLogos />*/}
      <Testimonials />
      <CTA />
    </>
  )
}