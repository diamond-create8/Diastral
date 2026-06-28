// src/app/page.tsx
import { Hero }         from '@/components/sections/home/Hero'
import { LogoStrip }    from '@/components/sections/home/LogoStrip'
import { Services }     from '@/components/sections/home/Services'
import { Process }      from '@/components/sections/home/Process'
import { Work }         from '@/components/sections/home/Work'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { CTA }          from '@/components/sections/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <CTA />
    </>
  )
}