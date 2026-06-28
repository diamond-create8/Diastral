/* Do not hard code testimonials. 
Automated 
 */
// src/data/testimonials.ts
import type { Testimonial } from '@/types'

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'We love ideas that help us grow as a whole, especially ones that will help us remove a lot of administrative work and focus more on our core mission.',
    author: 'Winifred W.',
    role: 'Principal',
    company: 'Little Flower Learning Centre',
  },
  {
    id: '2',
    quote:
      'The team at Ghana Fest SA & the Ghana High Commission love the ideas and digital strategy Diastral gives to us. We are so happy to have them on board.',
    author: 'Mavis Mensah-Pah',
    role: 'Event Management',
    company: 'GhanaFest South Africa',
  },
  {
    id: '3',
    quote:
      'The team at Donnes Hope Foundation are happy with the work Diastral does, especially with the reports about our digital presence and the recommendations they provide to help us improve our online visibility.',
    author: 'Nesoah .I. Itale',
    role: 'Executive Director',
    company: 'Donnes Hope Foundation',
  },
  
]
