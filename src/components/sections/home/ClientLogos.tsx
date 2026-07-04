// src/components/sections/home/ClientLogos.tsx
/*'use client'
import Image  from 'next/image'
import { Container } from '@/components/layout/Container'
import { FadeIn }    from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'


  Place client logo files at:
    public/images/clients/little-flower.png
    public/images/clients/fontleroy.png
    public/images/clients/donnes-hope.png

  Recommended: white/light-colored logos on transparent PNG backgrounds.
  Ideal size: ~400×120px (landscape), or square ~200×200px for icon-style logos.
*/

/*const CLIENTS = [
  {
    name:  'GhanaFestSA',
    src:   '/images/clients/ghana-fest.png',
    width:  180,
    height: 60,
    href:  '/work/ghanafest-south-africa',
  },*/
  /*{
    name:  'Fontleroy',
    src:   '/images/clients/fontleroy.png',
    width:  200,
    height: 120,
    href:  '/work/fontleroy-fashion-store',
  },*/
  /*{
    name:  "Donnes Hope Foundation",
    src:   '/images/clients/dhf.png',
    width:  180,
    height: 60,
    href:  '/work/donnes-hope-foundation',
  },
]

export function ClientLogos() {
  return (
    <section
      aria-label="Clients"
      style={{
        backgroundColor: '#0E0E0E',
        borderTop:  '1px solid rgba(255,255,255,0.055)',
        borderBottom: '1px solid rgba(255,255,255,0.055)',
      }}
    >
      <Container>
        <div className="py-14 flex flex-col items-center gap-10">

          <FadeIn>
            <p
              className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-center"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              Official Digital Partner
            </p>
          </FadeIn>

          <StaggerChildren className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {CLIENTS.map((client) => (
              <StaggerItem key={client.name}>
                <a
                  href={client.href}
                  aria-label={`View case study — ${client.name}`}
                  className="block transition-all duration-300 client-logo"
                  style={{
                    filter:  'brightness(0) invert(1)',
                    opacity: 0.28,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.opacity = '0.72'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.opacity = '0.28'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="object-contain"
                    style={{ maxHeight: '44px', width: 'auto' }}
                  />
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>

        </div>
      </Container>
    </section>
  )
}*/