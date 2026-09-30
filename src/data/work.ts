import type { CaseStudy } from '@/types'
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '4',
    slug: 'donnes-hope-foundation',
    title: 'Turning Social Reach Into Secured Beneficiary Support',
    client: "Donnes Hope Foundation",
    category: 'Digital Strategy & Social Media',
    excerpt:
      'A cross-platform Meta strategy that converted awareness into action, helping a foundation already serving 100+ lives across 5 countries reach even further.',
    year: '2026',
    tags: ['Social Media', 'Meta (Facebook & Instagram)', 'Non-Profit'],
    coverImage: '',
    featured: true,
    sliderImage: 'slider.jpg',
    results: [
      { value: '6.49%', label: 'Conversion rate on social traffic' },
      { value: '15K+', label: 'Combined Meta reach' },
      { value: '190+', label: 'Scholarships & support delivered' },
    ],
},
  {
    id: '3',
    slug: 'ghanafest-south-africa',
    title: 'Securing Corporate Sponsors for a National Cultural Event',
    client: 'GhanaFest South Africa',
    category: 'Sponsorship & Partnerships',
    excerpt:
      'Built a strategic sponsorship pipeline from zero generating 70+ qualified leads and getting proposals directly in front of decision-makers at Sanlam, ABSA, and Vodacom.',
    year: '2026',
    tags: ['Sponsorship Strategy', 'B2B Outreach', 'Events'],
    coverImage: '',
    featured: true,
    sliderImage: 'slider.jpg',
    hideMedia: true,
    results: [
      { value: '70+', label: 'Qualified sponsor leads generated' },
      { value: '5+', label: 'Major brands engaged directly' },
      { value: 'Recognised', label: 'By The Ghana High Commission' },
    ],
  },
  {
    id: '2',
    slug: 'fontleroy-fashion-store',
    title: 'Building a Premium Fashion Brand',
    client: 'Fontleroy SA',
    category: 'E-Commerce & Digital Strategy',
    excerpt:
      'From a museum-inspired storefront to full brand strategy — high-quality photoshoots and organic UGC content with a scarcity-driven drop model launching next.',
    year: '2025',
    tags: ['Web Development', 'E-Commerce', 'Brand Strategy'],
    coverImage: '',
    featured: true,
    sliderImage: 'slider.png',
    results: [
      { value: 'Premium', label: 'Retail-grade storefront for startup' },
      { value: 'Full-Funnel', label: 'Brand strategy & content system' },
      { value: 'Coming Soon', label: 'Scarcity-based drop model' },
    ],
  },
  
  {
    id: '1',
    slug: 'little-flower-learning-centre',
    title: 'Digitising Operations for a Growing Learning Centre',
    client: 'Little Flower Learning Centre',
    category: 'Website Development',
    excerpt:
      'A full redesign that replaced a decade-old static site with a public-facing hub and an internal staff dashboard system for fees, students, and reporting, cutting admin time by 43%.',
    year: '2026',
    tags: ['Web Development'],
    coverImage: '',
    featured: false,
    results: [
      { value: '43%', label: 'Reduction in admin time' },
      { value: '700+', label: 'Student records digitised' },
      { value: '3', label: 'Dashboards built (fees, students, reports)' },
    ],
  },

  
  
  {
    id: '5',
    slug: 'nubian-roc',
    title: 'A Growth Systems Partnership for an Emerging Beauty Brand',
    client: 'Nubian Roc',
    category: 'Brand & Growth Strategy',
    excerpt:
      'A Ghana-import shea butter and beauty brand — full growth systems partnership currently in development.',
    year: '2026',
    tags: ['Brand Strategy', 'E-Commerce', 'Growth Systems'],
    coverImage: '',
    featured: false,
    locked: true,
    results: [
      { value: 'Coming', label: 'Soon' },
      { value: 'Coming', label: 'Soon' },
      { value: 'Coming', label: 'Soon' },
    ],
  },
]

export const CASE_STUDY_DETAIL: Record<string, {
  challenge: string
  approach: string
  solution: string
  tags: string[]
}> = {
  'little-flower-learning-centre': {
    challenge:
      "Little Flower's website hadn't been updated in years. There was no way for parents to check fee status, no system for tracking students or generating reports, and every reminder — fees, events, school news — went out manually or not at all.",
    approach:
      'We separated the problem into two systems: a public-facing site to keep parents informed, and a private admin dashboard to run the school\'s daily operations. Automation was built in from the start, not bolted on after.',
    solution:
      'We delivered a redesigned public website for events and school news, alongside internal dashboards to track fees, students, and reports across 700+ student records. Automated SMS reminders now handle fee due dates, upcoming events, and school announcements without manual follow-up — cutting admin time by 43%.',
    tags: ['Next.js', 'Admin Dashboards', 'Automated SMS', 'Data Migration'],
  },
  'fontleroy-fashion-store': {
    challenge:
      'Fontleroy needed more than an online store — the brand needed a presence that matched the premium perception it was trying to build, both on the website and everywhere customers encountered it.',
    approach:
      'We treated the storefront and the brand as one system. Visual identity, photography, and content had to reinforce the same message the site was already communicating — not compete with it.',
    solution:
      'Beyond the museum-inspired e-commerce storefront, we built out brand strategy, directed high-quality photoshoots, and developed organic UGC content to build social proof. A scarcity-driven drop model is next in development to create urgency around future releases.',
    tags: ['Shopify', 'Brand Strategy', 'Photography Direction', 'UGC Content'],
  },
  'ghanafest-south-africa': {
    challenge:
      'GhanaFest South Africa needed corporate sponsors to fund a national cultural event, but had no structured pipeline and no direct access to the people who could actually approve a sponsorship.',
    approach:
      'We built a targeted prospecting list of ideal sponsors and leveraged internal relationships to skip the usual gatekeepers, getting proposals directly in front of decision-makers rather than into a generic inbox.',
    solution:
      'The result was 70+ qualified sponsor leads and direct engagement with decision-makers at Sanlam — who were prepared to invest before the event was cancelled — as well as ABSA, Vodacom, and betting industry partners. We also proposed a full activation strategy (ticketing, an ambassador programme, UGC, and paid acquisition), which The Ghana High Commission praised, though it fell outside scope once the event was classified non-profit.',
    tags: ['Sponsorship Prospecting', 'Proposal Strategy', 'B2B'],
  },
  'donnes-hope-foundation': {
    challenge:
      "Donnes Hope Foundation was already doing real work — 100+ lives impacted across 5 countries, 190+ scholarships and support packages delivered — but its social presence wasn't converting that impact into visibility or new support.",
    approach:
      'We ran Facebook and Instagram as one connected system rather than two separate channels, using consistent storytelling to turn casual viewers into people who clicked through and took action.',
    solution:
      'Across Meta, the campaign generated 15.6K combined views, 429 interactions, and 552 site visits — a 5.05% engagement rate, 6.49% conversion rate, and 0.89% click-through rate. With 14 more people waiting to be served, that conversion lift translates directly into the foundation\'s capacity to reach them.',
    tags: ['Meta Business Suite', 'Content Strategy', 'Organic Growth', 'Storytelling'],
  },
}