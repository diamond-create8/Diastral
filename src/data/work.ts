// src/data/work.ts
//remember to update the case studies with real data and images 
//remember to add more context to the case studies, such as the problem statement, solution, and outcomes
import type { CaseStudy } from '@/types'



export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    slug: 'little-flower-learning-centre',
    title: 'Transforming the Digital Presence of a Growing Learning Centre',
    client: 'Little Flower Learning Centre',
    category: 'Website Development',
    excerpt:
      'A complete website redesign focused on building trust with parents, improving accessibility, and creating a modern digital experience that reflects the institution’s educational standards.',
    year: '2026',
    tags: ['Web Development', 'UX Design', 'Responsive Design'],
    coverImage: '',
    featured: false,
    results: [
      { value: '100%', label: 'Mobile-responsive experience' },
      { value: '1', label: 'Centralised information hub' },
      { value: 'Modern', label: 'Professional digital presence' },
    ],
  },

  {
    id: '2',
    slug: 'fontleroy-fashion-store',
    title: 'Building a Premium Fashion E-Commerce Experience',
    client: 'Fontleroy',
    category: 'E-Commerce Development',
    excerpt:
      'Designed and developed a modern fashion storefront with a museum-inspired visual identity, scalable architecture, and conversion-focused shopping experience.',
    year: '2025',
    tags: ['E-Commerce', 'Shopify', 'UX Design'],
    coverImage: '',
    featured: true,
    results: [
      { value: 'Premium', label: 'Retail-grade experience' },
      { value: 'Scalable', label: 'Store architecture' },
      { value: 'Mobile-First', label: 'Shopping experience' },
    ],
  },

  {
    id: '3',
    slug: 'ghanafest-south-africa',
    title: 'Driving Awareness for a National Cultural Event',
    client: 'GhanaFest South Africa',
    category: 'Digital Marketing',
    excerpt:
      'A strategic event marketing campaign designed to increase awareness, audience engagement, and promotional reach ahead of a major cultural celebration.',
    year: '2026',
    tags: ['Marketing Strategy', 'Social Media', 'Events'],
    coverImage: '',
    featured: false,
    locked: true,
    results: [
      { value: 'Multi-Channel', label: 'Campaign strategy' },
      { value: 'Higher', label: 'Audience engagement' },
      { value: 'Expanded', label: 'Promotional reach' },
    ],
  },

  {
    id: '4',
    slug: 'donnes-hope-foundation',
    title: 'Creating a Trust-Centered Digital Platform for a Non-Profit',
    client: 'Donnes Hope Foundation',
    category: 'Non-Profit Social Media Marketing',
    excerpt:
      'Developed a mission-focused social media strategy that improves credibility, communicates impact clearly, and strengthens engagement with supporters and stakeholders.',
    year: '2026',
    tags: ['Social Media', 'Non-Profit', 'Storytelling'],
    coverImage: '',
    featured: false,
    results: [
      { value: 'Stronger', label: 'Digital credibility' },
      { value: 'Clearer', label: 'Impact communication' },
      { value: 'Improved', label: 'Stakeholder engagement' },
    ],
  },

  {
    id: '5',
    slug: 'student-accommodation-management-system',
    title: 'Designing a Scalable Student Accommodation Management Platform',
    client: 'Internal Product',
    category: 'SaaS Development',
    excerpt:
      'An in-development property technology platform designed to digitise accommodation operations, automate workflows, and improve management efficiency.',
    year: '2025',
    tags: ['SaaS', 'Full Stack', 'PropTech'],
    coverImage: '',
    featured: false,
    locked: true,
    results: [
      { value: 'End-to-End', label: 'Operations management' },
      { value: 'Role-Based', label: 'Access control system' },
      { value: 'Scalable', label: 'Platform architecture' },
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
'Little Flower Learning Centre had a limited and outdated online presence that failed to reflect the quality of its educational offering. The previous website provided a poor mobile experience, lacked clear information architecture, and did little to build confidence among prospective parents. First impressions were being formed long before a parent visited the school, and the digital experience was not supporting trust or credibility.',
approach:
'Rather than treating the project as a simple website redesign, we approached it as a trust-building exercise. The information hierarchy, content structure, and visual presentation were designed around the decision-making process of parents researching schools. Every page was optimised to make key information accessible, clear, and reassuring.',
solution:
'We developed a modern responsive website focused on usability, clarity, and professional presentation. The new platform introduced structured programme pages, streamlined navigation, improved mobile accessibility, and a clear enquiry pathway. The result was a digital experience that better represents the institution and provides a scalable foundation for future growth.',
tags: [
'Next.js',
'Responsive Design',
'UX Design',
'Education',
'Information Architecture',
],
},

'fontleroy-fashion-store': {
challenge:
'Fashion e-commerce is heavily influenced by perception, presentation, and user experience. Fontleroy needed a storefront capable of communicating a premium brand identity while maintaining the functionality and scalability expected from a modern retail platform. The challenge was creating an experience that felt aspirational without sacrificing usability.',
approach:
'The project was approached from both a branding and conversion perspective. We focused on creating a museum-inspired visual experience that elevated product presentation while ensuring navigation, product discovery, and purchasing journeys remained intuitive. Every design decision balanced aesthetics with commercial objectives.',
solution:
'A modern e-commerce storefront was developed with a strong emphasis on product storytelling, responsive design, and scalable architecture. The platform includes structured product catalogues, refined product detail layouts, streamlined navigation, and a flexible foundation capable of supporting future expansion.',
tags: [
'Shopify',
'E-Commerce',
'Frontend Development',
'UX Design',
'Retail Experience',
],
},

'ghanafest-south-africa': {
challenge:
'GhanaFest South Africa needed to increase event awareness and audience engagement within a limited promotional window and budget. Competing for attention in a crowded digital landscape required a strategy capable of generating consistent visibility while maintaining a premium event perception.',
approach:
'We focused on creating a structured campaign framework rather than isolated promotional activities. Content planning, audience engagement, promotional messaging, and community participation were designed to work together as a cohesive awareness system. The objective was sustained visibility leading up to the event.',
solution:
'A comprehensive digital marketing strategy was developed, including media planning, content systems, audience engagement initiatives, promotional campaigns, and sponsorship support. The campaign provided a repeatable promotional framework that strengthened awareness, improved consistency, and elevated the event’s digital presence.',
tags: [
'Digital Marketing',
'Event Promotion',
'Social Media Strategy',
'Campaign Planning',
'Audience Engagement',
'Sponsorship Acquisition',
],
},

'donnes-hope-foundation': {
challenge:
'Donnes Hope Foundation required a professional online presence capable of communicating its mission, impact, and long-term vision. Like many non-profit organisations, the challenge was balancing emotional storytelling with the credibility required to build trust among supporters, donors, and stakeholders.',
approach:
'We structured the platform around narrative clarity and trust-building. The focus was on helping visitors on social media platfroms to quickly understand the organisation’s purpose, the communities it serves, and the impact it creates. Content hierarchy were designed to support engagement rather than simply provide information.',
solution:
'Mission-driven branding across social media and its website was developed with a strong emphasis on storytelling, accessibility, and credibility. The platform provides clear pathways for engagement while presenting the organisation’s work in a professional and compelling format that supports future outreach and growth initiatives.',
tags: [
'Non-Profit',
'Social Media Marketing',
'Storytelling',
'UX Design',
'Brand Trust',
],
},

'student-accommodation-management-system': {
challenge:
'Many student accommodation providers continue to rely on fragmented systems including spreadsheets, manual administration, and disconnected communication channels. These processes create operational inefficiencies, limit scalability, and increase the likelihood of administrative errors as occupancy grows.',
approach:
'Before defining features, we analysed the underlying operational workflows accommodation providers manage daily. The platform was designed around process simplification, centralisation, and automation, ensuring the system solves business problems rather than simply digitising existing inefficiencies.',
solution:
'An end-to-end accommodation management platform is currently being developed to centralise student onboarding, room allocation, occupancy tracking, maintenance workflows, communication systems, and reporting. The architecture is being built with scalability, role-based access control, and long-term SaaS growth in mind.',
tags: [
'SaaS',
'Property Technology',
'System Architecture',
'Full-Stack Development',
'Workflow Automation',
],
},
}
