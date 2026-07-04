// src/lib/schema.ts
import { SITE_CONFIG } from './constants'

// ─── Organization Schema ─────────────────────────────────────────────────────
// Used once, in the root layout. Tells AI/search who Diastral is.
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type':    'ProfessionalService',
    '@id':      `${SITE_CONFIG.url}/#organization`,
    name:       SITE_CONFIG.fullName,
    alternateName: SITE_CONFIG.name,
    url:        SITE_CONFIG.url,
    logo:       `${SITE_CONFIG.url}/logo/diastral-mark.png`,
    image:      `${SITE_CONFIG.url}/images/og/og-default.png`,
    description: SITE_CONFIG.description,
    email:      SITE_CONFIG.email,
    address: {
      '@type':         'PostalAddress',
      addressCountry:  'ZA',
    },
    areaServed: {
      '@type': 'Country',
      name:    'South Africa',
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
    ],
    founder: {
      '@type': 'Person',
      name:    'Kwadwo Boateng Opoku-Agyemang',
      url:     `${SITE_CONFIG.url}/about`,
      sameAs:  ['https://linkedin.com/in/kwadwo-boateng-opoku-agyemang'],
      jobTitle: 'Founder',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name:    'University of the Free State',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Digital Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paid Advertising Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM & Automation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email & SMS Marketing' } },
      ],
    },
  }
}

// ─── Website Schema ────────────────────────────────────────────────────────────
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type':    'WebSite',
    '@id':      `${SITE_CONFIG.url}/#website`,
    url:        SITE_CONFIG.url,
    name:       SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
    inLanguage: 'en-UK'
  }
}

// ─── Breadcrumb Schema ──────────────────────────────────────────────────────────
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type':   'ListItem',
      position:  i + 1,
      name:      item.name,
      item:      `${SITE_CONFIG.url}${item.path}`,
    })),
  }
}

// ─── FAQ Schema ───────────────────────────────────────────────────────────────
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name:    f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    f.answer,
      },
    })),
  }
}

// ─── Service Schema ─────────────────────────────────────────────────────────────
export function serviceSchema(input: {
  name:        string
  description: string
  path:        string
}) {
  return {
    '@context': 'https://schema.org',
    '@type':    'Service',
    serviceType: input.name,
    name:        input.name,
    description: input.description,
    url:         `${SITE_CONFIG.url}${input.path}`,
    provider: { '@id': `${SITE_CONFIG.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'South Africa' },
  }
}

// ─── Article / Case Study Schema ───────────────────────────────────────────────
export function caseStudySchema(input: {
  title:      string
  excerpt:    string
  slug:       string
  client:     string
  year:       string
  image?:     string
}) {
  return {
    '@context': 'https://schema.org',
    '@type':    'Article',
    headline:   input.title,
    description: input.excerpt,
    url:        `${SITE_CONFIG.url}/work/${input.slug}`,
    datePublished: `${input.year}-01-01`,
    author: { '@id': `${SITE_CONFIG.url}/#organization` },
    publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
    about: {
      '@type': 'Thing',
      name:    input.client,
    },
    ...(input.image && {
      image: {
        '@type': 'ImageObject',
        url:     `${SITE_CONFIG.url}${input.image}`,
        width:   1440,
        height:  900,
      },
    }),
  }
}

// ─── Review / Testimonial Schema ───────────────────────────────────────────────
export function reviewSchema(reviews: {
  author: string
  company: string
  quote:  string
}[]) {
  return reviews.map((r) => ({
    '@context': 'https://schema.org',
    '@type':    'Review',
    reviewBody: r.quote,
    author: {
      '@type': 'Person',
      name:    r.author,
    },
    itemReviewed: { '@id': `${SITE_CONFIG.url}/#organization` },
  }))
}

// ─── JSON-LD Script Renderer (use in any Server Component) ────────────────────
export function jsonLdScriptProps(schema: object | object[]) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(schema),
    },
  }
}