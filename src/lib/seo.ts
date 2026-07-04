// src/lib/seo.ts
import type { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

interface PageSEOInput {
  title:        string
  description:  string
  path:         string
  ogImage?:     string
  noIndex?:     boolean
  keywords?:    string[]
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
  keywords,
}: PageSEOInput): Metadata {
  const url = `${SITE_CONFIG.url}${path}`
  const image = ogImage ?? '/images/og/og-default.png'

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type:        'website',
      locale:      'en_US',
      url,
      title,
      description,
      siteName:    SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description,
      images:      [image],
    },
  }
}