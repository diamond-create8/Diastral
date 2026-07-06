// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Manrope, Inter, JetBrains_Mono } from 'next/font/google'
import { Navbar }      from '@/components/layout/Navbar'
import { SITE_CONFIG } from '@/lib/constants'
import { organizationSchema, websiteSchema, jsonLdScriptProps } from '@/lib/schema'
import { GoogleAnalytics } from "@next/third-parties/google";
import './globals.css'
import { CookieConsent } from '@/components/layout/CookieConsent'

const manrope = Manrope({
  subsets:  ['latin'],
  variable: '--font-manrope',
  weight:   ['400', '500', '600', '700', '800'],
  display:  'swap',
})

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
  display:  'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets:  ['latin'],
  variable: '--font-jetbrains',
  weight:   ['400', '500'],
  display:  'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  verification: {
  google: "EBtJsqI13A8S3gBXnRezA5gCE-Hrqmkr2EBeKdXyeHc",
},
  title: {
    default:  `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  authors:  [{ name: 'Kwadwo Boateng Opoku-Agyemang', url: `${SITE_CONFIG.url}/about` }],
  creator:  SITE_CONFIG.fullName,
  publisher: SITE_CONFIG.fullName,
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         SITE_CONFIG.url,
    title:       `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    siteName:    SITE_CONFIG.name,
    images: [{
      url:    '/images/og/og-default.png',
      width:  1200,
      height: 630,
      alt:    `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images:      ['/images/og/og-default.png'],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/favicon-96x96.png', sizes: 'any' },
      { url: '/images/favicon-96x96.png', type: 'image/svg+xml' },
      { url: '/images/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor:   '#0E0E0E',
  colorScheme:  'dark',
  width:        'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Organization + WebSite schema injected once at the root.
          Every page inherits these entities via @id references.
          AI answer engines (Perplexity, ChatGPT, Google AI) read this
          to understand who Diastral is, what they do, and how to cite them.
        */}
        <script {...jsonLdScriptProps(organizationSchema())} />
        <script {...jsonLdScriptProps(websiteSchema())} />
      </head>
      <body
        className="antialiased"
        style={{ backgroundColor: '#0E0E0E', color: '#FAFAFA' }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold focus:text-sm focus:bg-[#FFD700] focus:text-[#0E0E0E]"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <CookieConsent />
      </body>
    </html>
  )
}

