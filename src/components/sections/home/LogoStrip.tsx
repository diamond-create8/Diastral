// src/components/sections/home/LogoStrip.tsx

// Server Component — pure CSS animation, no interactivity needed.

const TOOLS = [
  'Next.js', 'React', 'Vercel', 'Supabase', 'TypeScript', 
  'HubSpot', 'Zapier', 'Resend',
  'Framer', 'Tailwind CSS', 'PostgreSQL', 'Notion', 'Linear',
  'Shopify', 'Figma', 'GitHub',
]

export function LogoStrip() {
  // Double the array so the seamless-loop illusion works.
  const items = [...TOOLS, ...TOOLS]

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
      {/* Left edge fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }}
        aria-hidden="true"
      />
      {/* Right edge fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }}
        aria-hidden="true"
      />

      {/* Scrolling track */}
      <div
        style={{
          display:   'flex',
          width:     'max-content',
          animation: 'marquee 40s linear infinite',
        }}
        aria-hidden="true"
      >
        {items.map((name, i) => (
          <div
            key={i}
            className="flex items-center shrink-0"
          >
            <span
              className="font-sans text-sm font-medium px-8 whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.18)' }}
            >
              {name}
            </span>
            <span
              className="shrink-0 w-px h-3"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}