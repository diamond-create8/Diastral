// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Manrope, Inter, JetBrains_Mono } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIG } from '@/lib/constants'
import './globals.css'

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
  title: {
    default:  `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'expert web development', 'rank higher on google', 'get more customers online', 'digital marketing', 'e-commerce development',
    'automatic follow-ups', 'CRM integration', 'SEO services', 'paid ads management', 'expert social media management',
  ],
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         SITE_CONFIG.url,
    title:       SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName:    SITE_CONFIG.name,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor:   '#0E0E0E',
  colorScheme:  'dark',
  width:        'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <html
  lang="en"
  className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}
  suppressHydrationWarning
>
  
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

  {/* Footer is now in (marketing)/layout.tsx — not here */}
</body>
</html>
  )
}