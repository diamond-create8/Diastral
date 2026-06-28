// src/data/services.ts

import type { ServiceItem } from '@/types'

export const SERVICES: ServiceItem[] = [ 
  {
    id: 'development-and-design',
    title: 'Attract Your Ideal Customer',
    description:
      'We design and build websites that help you reach your ideal client. We are focused on analysing your needs and delivering a solution that is tailored for performance, and growth.',
    features: [
      'Website Development',
      'E-commerce Systems',
      'Landing pages & lead funnels',
      'Performance optimisation',
    ],
    icon: 'web',
    href: '/services#development-and-design',
  },

  {
    id: 'growth-acquisition',
    title: 'Grow Your Reach',
    description: 'We build predictable customer acquisition engines using search, paid ads, and content distribution strategies that compound over time.',
    features: [
      'Search Engine Optimisation (SEO)',
      'Google & Meta Ads Management',
      'Social media distribution',
      'Campaign strategy & execution',
    ],
    icon: 'seo',
    href: '/services#growth-acquisition',
  },

  {
  id: 'automation-and-integration',
  title: 'Nurture Every Customer',
  description:
    'We help communicate, follow-up, and market your business so you never lose leads, so you and your customers stay engaged, always.',
  features: [
    'SMS appointment & payment reminders',
    'Email marketing campaigns',
    'Follow-up sequences (reach your customers through email & SMS)',
    'CRM setup & integration (track all your customers in one place)',
  ],
  icon: 'automation',
  href: '/services#automation-and-integration',
},

 /* {
    id: 'full-stack-development',
    title: 'Get it All',
    description:
      'Want it all? We can build you a custom system that is tailored to your business, and designed to grow with you, securing us as your digital partner. ',
    features: [
      'Full-stack design & development',
      'Guided digital strategy with our team of experts',
      'Conversion optimisation',
      'Performance tracking systems',
    ],
    icon: 'systems',
    href: '/services#full-stack-development',
  }, */
  
]