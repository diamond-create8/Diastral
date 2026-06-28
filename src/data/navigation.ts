// src/data/navigation.ts
import type { NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/work'     },
  { label: 'About',    href: '/about'    },
  { label: 'Contact',  href: '/contact'  },
]

export const SOCIAL_LINKS: NavLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/diastralweb', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/diastral-web-solutions', external: true },
  { label: 'Crunchbase', href: 'https://www.crunchbase.com/organization/diastral-web-solutions', external: true },
  { label: 'TheOrg', href: 'https://theorg.com/org/diastral-web-solutions', external: true },
]