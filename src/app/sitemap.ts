// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import { CASE_STUDIES }       from '@/data/work'
import { SERVICES }           from '@/data/services'
import { SITE_CONFIG }        from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`,         lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/work`,     lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/about`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]

  const serviceAnchorRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url:             `${baseUrl}/services#${s.id}`,
    lastModified:    new Date(),
    changeFrequency: 'monthly',
    priority:        0.6,
  }))

  const workRoutes: MetadataRoute.Sitemap = CASE_STUDIES
    .filter((s) => !s.locked)
    .map((study) => ({
      url:             `${baseUrl}/work/${study.slug}`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.7,
    }))

  return [...staticRoutes, ...serviceAnchorRoutes, ...workRoutes]
}