// src/components/sections/home/LogoStrip.tsx
// Server Component — pure CSS animation

interface TechIcon {
  name: string
  icon: React.ReactNode
}

// Simplified but recognizable SVG representations of each technology
const TECH_STACK: TechIcon[] = [
  {
    name: 'Next.js',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 19V10l8 9V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <ellipse cx="14" cy="14" rx="10" ry="4" stroke="currentColor" strokeWidth="1.4"/>
        <ellipse cx="14" cy="14" rx="10" ry="4" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 14 14)"/>
        <ellipse cx="14" cy="14" rx="10" ry="4" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 14 14)"/>
        <circle cx="14" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 11h6M11 11v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 15.5c0-1 .8-1.5 1.8-1.5s1.8.5 1.8 2V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 17.5h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M7 12c1-4 4-6 7-6 4 0 5 3 8 3-1 4-4 6-7 6-4 0-5-3-8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 18c1-4 4-6 7-6 4 0 5 3 8 3-1 4-4 6-7 6-4 0-5-3-8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M14 4L26 24H2L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M19 8.5S18.5 5 14 5c-3 0-5 2-5 2L7 24l12 2 4-17.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 7.5s0 3 3 3 3-3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 24l12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <rect x="7" y="3" width="7" height="7" rx="3" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="14" y="3" width="7" height="7" rx="3" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="7" y="10" width="7" height="7" rx="0" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="17.5" cy="13.5" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="7" y="17" width="7" height="7" rx="3.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M14 3C8 3 3 8 3 14c0 5 3.3 9 7.8 10.5.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2V24c0 .4.2.7.8.6A11 11 0 0025 14C25 8 20 3 14 3z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
        <line x1="14" y1="4" x2="14" y2="8"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="20" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4"  y1="14" x2="8"  y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="5" r="1.5" fill="currentColor"/>
        <circle cx="14" cy="23" r="1.5" fill="currentColor"/>
        <circle cx="5"  cy="14" r="1.5" fill="currentColor"/>
        <circle cx="23" cy="14" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Zapier',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M6 7h16L6 21h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Framer',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M7 4h14v8H14L7 4zM7 12h7l7 8H7v-8zM7 20v4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
  },
  
]

// Duplicate for seamless marquee
const ITEMS = [...TECH_STACK, ...TECH_STACK]

export function LogoStrip() {
  return (
    <div
      className="relative overflow-hidden py-5 select-none"
      style={{
        backgroundColor: '#0A0A0A',
        borderTop:    '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
      aria-label="Technologies we work with"
    >
      {/* Edge fades */}
      {(['left', 'right'] as const).map((side) => (
        <div
          key={side}
          className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-0 bottom-0 w-24 z-10 pointer-events-none`}
          style={{
            background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, #0A0A0A, transparent)`,
          }}
          aria-hidden="true"
        />
      ))}

      <div
        style={{
          display:   'flex',
          width:     'max-content',
          animation: 'marquee 45s linear infinite',
        }}
        aria-hidden="true"
      >
        {ITEMS.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-2.5 shrink-0 px-6"
          >
            <span style={{ color: 'rgba(255,255,255,0.22)' }}>
              {tech.icon}
            </span>
            <span
              className="font-sans text-xs font-medium whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.18)' }}
            >
              {tech.name}
            </span>
            <span
              className="shrink-0 w-px h-3 ml-4"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}