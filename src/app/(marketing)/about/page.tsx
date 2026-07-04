// src/app/(marketing)/about/page.tsx
import type { Metadata } from 'next'
import Link              from 'next/link'
import Image             from 'next/image'
import { Container }     from '@/components/layout/Container'
import { FadeIn }        from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import { TESTIMONIALS }  from '@/data/testimonials'
import { SITE_CONFIG }   from '@/lib/constants'
import { buildMetadata } from '@/lib/seo'
import { faqSchema, jsonLdScriptProps } from '@/lib/schema'
import { GENERAL_FAQS }  from '@/data/faqs'

export const metadata: Metadata = {
  ...buildMetadata({
    title:       'Read About Diastral',
    description: 'Diastral is a digital agency founded by Kwadwo Boateng Opoku-Agyemang. We build websites, SEO systems, and automation for ambitious small and medium businesses across South Africa.',
    path:        '/about',
    ogImage:     '/images/og/og-about.jpg',
    keywords: [
      'Diastral Web Solutions',
      'digital agency South Africa',
      'web development South Africa',
      'web development company',
      'Kwadwo Boateng Opoku-Agyemang',
      'Kwadwo Boateng',
      'Mr. Boateng',
      'Kwadwo Opoku-Agyemang',
      'digital systems partner',
    ],
  }),
}

const FOUNDED_YEAR = 2025

const APPROACH = [
  {
    number:   '01',
    label:    'Attract',
    heading:  'Make the right people find you.',
    body:     'A fast, credible website and a search strategy that compounds over time. We build the digital front door that converts the right visitors into enquiries.',
    services: ['Website Development', 'Landing Pages', 'E-Commerce Systems', 'Digital Experiences'],
    accent:   'rgba(79,156,249,0.06)',
  },
  {
    number:   '02',
    label:    'Grow',
    heading:  'Turn attention into revenue.',
    body:     "Once people find you, we build the systems that convert them. Paid advertising, content that builds genuine authority, and acquisition funnels that keep working whether you're watching them or not.",
    services: ['Paid Advertising (Google & Meta Ads)', 'Search Engine Optimisation', 'Social Media Distribution', 'Campaign Strategy & Execution'],
    accent:   'rgba(255,215,0,0.05)',
  },
  {
    number:   '03',
    label:    'Retain',
    heading:  'Keep customers coming back.',
    body:     'The most profitable customer is the one you already have. We build CRM systems, automated follow-up sequences, and communication infrastructure that keeps your customers engaged and spending.',
    services: ['Email Marketing', 'SMS Campaigns', 'Customer Retention', 'CRM Integrations'],
    accent:   'rgba(52,211,153,0.05)',
  },
]

const REASONS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    title:   'Built for growth',
    body:    "We build systems designed to improve business metrics — leads, revenue, efficiency, or retention. We don't build things for the sake of building them.",
    benefit: "You know exactly what outcome we're working toward before we start.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3.5 17.5C3.5 14.5 6.5 12 10 12s6.5 2.5 6.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title:   'Direct access',
    body:    'You work directly with the person doing the work — no account managers, no handoffs. The person who scoped your project is the person building it.',
    benefit: 'Faster decisions, fewer miscommunications, and better work.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10h12M13 7l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 5v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title:   'Fast execution',
    body:    'Most projects launch within four to six weeks. Delayed execution has a real cost — in revenue, in momentum, and in competitive ground lost.',
    benefit: 'You spend less time waiting and more time growing.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 16V8l6-5 6 5v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="11" width="4" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    title:   'Long-term thinking',
    body:    'We build with your next chapter in mind. The infrastructure we design today is meant to compound — not require a full rebuild every two years.',
    benefit: 'Your investment grows in value over time rather than dating quickly.',
  },
]

function PageHeaderBg() {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize:  '36px 36px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,215,0,0.05) 0%, transparent 70%)',
        }}
      />
    </>
  )
}

function HeroSection() {
  return (
    <header
      className="relative pt-36 pb-28 overflow-hidden"
      style={{ backgroundColor: '#0E0E0E' }}
    >
      <PageHeaderBg />
      <Container>
        <div className="max-w-[54rem]">
          <FadeIn>
            <p className="eyebrow mb-6">About Diastral</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="font-display font-bold text-white mb-8"
              style={{
                fontSize:      'clamp(2.75rem, 6vw, 5rem)',
                letterSpacing: '-0.04em',
                lineHeight:    1.04,
              }}
            >
              Your ideal
              <br />
              <span style={{ color: 'rgba(250,250,250,0.32)' }}>
                systems partner.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              className="font-sans max-w-[42rem]"
              style={{
                fontSize:   '1.125rem',
                lineHeight: '1.8',
                color:      'rgba(255,255,255,0.45)',
              }}
            >
              Diastral builds the websites, SEO systems, paid campaigns, and automation
              that help small and medium businesses attract customers, grow revenue,
              and retain them. All designed to work as one system, not a collection
              of separate projects.
            </p>
          </FadeIn>
        </div>
      </Container>
    </header>
  )
}

function StorySection() {
  return (
    <section
      aria-labelledby="story-heading"
      className="section-padding"
      style={{
        backgroundColor: '#0A0A0A',
        borderTop:       '1px solid rgba(255,255,255,0.055)',
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
          <FadeIn>
            <div className="lg:sticky lg:top-28 lg:self-start flex flex-col gap-2">
              <p className="eyebrow">Our Story</p>
              <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.22)' }}>
                EST. {FOUNDED_YEAR}
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-10">
            <FadeIn delay={0.1}>
              <h2
                id="story-heading"
                className="font-display font-bold text-white"
                style={{
                  fontSize:      'clamp(1.875rem, 3.5vw, 2.75rem)',
                  letterSpacing: '-0.03em',
                  lineHeight:    1.15,
                }}
              >
                Diastral started with
                a simple observation.
              </h2>
            </FadeIn>

            <div className="flex flex-col gap-6">
              {[
                {
                  text:     "Most of the businesses we talked to early on shared the same frustration. They'd invested thousands in a website, often a good-looking one and after a year or two, nothing had meaningfully changed. Enquiries hadn't increased. Nobody could tell them why.",
                  emphasis: false,
                },
                {
                  text:     "The problem wasn't the website. It was that the website existed in isolation, it was completely disconnected from their marketing, their brand, disconnected from how they followed up with leads, disconnected from the tools they used to actually run their business. A digital brochure in a world that had moved far beyond brochures.",
                  emphasis: false,
                },
                {
                  text:     "We kept seeing the same pattern: a freelancer who built something and disappeared. An SEO agency running campaigns with no connection to the site's content. A CRM nobody had been trained to use. Five tools in five separate tabs, owned by five different contractors and nobody looking at the whole picture.",
                  emphasis: false,
                },
                {
                  text:     "The businesses failing online weren't failing because they lacked ambition or budget. They were failing because they'd been handed tools without a strategy, and deliverables without accountability for outcomes.",
                  emphasis: true,
                },
                {
                  text:     "Diastral was built to bridge that gap. We're a agency that designs the whole operation: the website, the acquisition system, the automation so that everything compounds rather than fragments.",
                  emphasis: false,
                },
              ].map((para, i) => (
                <FadeIn key={i} delay={0.12 + i * 0.06}>
                  <p
                    className="font-sans"
                    style={{
                      fontSize:   '1.0625rem',
                      lineHeight: '1.85',
                      color:      para.emphasis
                        ? 'rgba(255,255,255,0.65)'
                        : 'rgba(255,255,255,0.42)',
                      fontStyle:  para.emphasis ? 'italic' : 'normal',
                    }}
                  >
                    {para.text}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ApproachSection() {
  return (
    <section
      aria-labelledby="approach-heading"
      className="section-padding"
      style={{ backgroundColor: '#0E0E0E' }}
    >
      <Container>
        <div className="mb-16 max-w-[36rem]">
          <FadeIn>
            <p className="eyebrow mb-5">Our Approach</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="approach-heading"
              className="font-display font-bold text-white"
              style={{
                fontSize:      'clamp(2rem, 4vw, 3.25rem)',
                letterSpacing: '-0.035em',
                lineHeight:    1.08,
              }}
            >
              Three disciplines.
              <br />One cohesive system.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="font-sans mt-5"
              style={{ fontSize: '1.0625rem', lineHeight: '1.78', color: 'rgba(255,255,255,0.4)' }}
            >
              Every service we offer exists within one of these three outcomes.
              The power is in how they connect.
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {APPROACH.map((card) => (
            <StaggerItem key={card.number}>
              <div
                className="relative flex flex-col gap-8 p-8 rounded-2xl h-full overflow-hidden"
                style={{
                  backgroundColor: '#141414',
                  border:          '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  aria-hidden="true"
                  style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${card.accent} 0%, transparent 70%)`,
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <span
                    className="inline-flex items-center gap-2.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: 'rgba(255,215,0,0.08)',
                      color:           'rgba(255,215,0,0.7)',
                      border:          '1px solid rgba(255,215,0,0.12)',
                    }}
                  >
                    {card.label}
                  </span>
                  <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
                    {card.number}
                  </span>
                </div>
                <div className="relative flex flex-col gap-3">
                  <h3
                    className="font-display font-bold text-white"
                    style={{
                      fontSize:      'clamp(1.375rem, 2.5vw, 1.625rem)',
                      letterSpacing: '-0.025em',
                      lineHeight:    1.2,
                    }}
                  >
                    {card.heading}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
                    {card.body}
                  </p>
                </div>
                <div
                  className="relative flex flex-col gap-2 mt-auto pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p
                    className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] mb-1"
                    style={{ color: 'rgba(255,255,255,0.2)' }}
                  >
                    What you get
                  </p>
                  {card.services.map((svc) => (
                    <div key={svc} className="flex items-center gap-2.5">
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: '#FFD700', opacity: 0.5 }}
                        aria-hidden="true"
                      />
                      <span className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>
                        {svc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}

function FounderSection() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="section-padding"
      style={{
        backgroundColor: '#0A0A0A',
        borderTop:       '1px solid rgba(255,255,255,0.055)',
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">

          {/* Left: founder image */}
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src="/images/about/founder.jpg"
                  alt="Kwadwo Boateng Opoku-Agyemang - Founder of Diastral Web Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                />
              </div>

              <div
                className="mt-5 pt-5 flex flex-col gap-1"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p
                  className="font-display font-semibold text-white"
                  style={{ fontSize: '1.0625rem', letterSpacing: '-0.01em' }}
                >
                  Kwadwo Boateng Opoku-Agyemang
                </p>
                <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Founder, Diastral Web Solutions
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: content */}
          <div className="flex flex-col gap-8">
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-2">
                <p className="eyebrow">Meet the Founder</p>
                <h2
                  id="founder-heading"
                  className="font-display font-bold text-white"
                  style={{
                    fontSize:      'clamp(2rem, 3.5vw, 2.875rem)',
                    letterSpacing: '-0.035em',
                    lineHeight:    1.1,
                  }}
                >
                  Hi, I'm Kwadwo Boateng.
                </h2>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-5">
              {[
                {
                  text:     "Diastral began as an idea in 2022 from a simple observation: most businesses weren’t held back by ambition or effort. They were held back by systems that weren’t built for how modern growth actually works.",
                  emphasis: true,
                },
                {
                  text:     `While studying Computer Science, I spent my time building and breaking digital systems, working on real and mock projects, and observing how businesses respond when presented with better ways of operating. The pattern was consistent: strong ideas losing momentum at the point of execution, not because they lacked value, but because the underlying systems weren’t designed to support scale.`,
                  emphasis: false,
                },
                {
                  text:     "That gap became the focus.",
                  emphasis: true,
                },
                {
                  text:     "Diastral exists today to close that by building digital systems that don’t just represent a business online, but actively improve how it runs, sells, and grows over time. The goal isn’t surface-level design or temporary fixes. It’s infrastructure that compounds value the longer it operates.",
                  emphasis: false,
                },
                {
                  text:     "I’m still studying, still building, and that keeps my work grounded in reality rather than theory. I’m direct about what works, honest about what doesn’t, and focused on building systems that actually move businesses in Africa forward.",
                  emphasis: false,
                },
              ].map((para, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.05}>
                  <p
                    className="font-sans"
                    style={{
                      fontSize:   '1.0625rem',
                      lineHeight: '1.85',
                      color:      para.emphasis
                        ? 'rgba(255,255,255,0.65)'
                        : 'rgba(255,255,255,0.42)',
                      fontStyle:  para.emphasis ? 'italic' : 'normal',
                    }}
                  >
                    {para.text}
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Currently studying */}
            <FadeIn delay={0.45}>
              <div
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border:          '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    backgroundColor: 'rgba(255,215,0,0.08)',
                    border:          '1px solid rgba(255,215,0,0.1)',
                  }}
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 5.5L8 2.5L14 5.5L8 8.5L2 5.5Z" stroke="rgba(255,215,0,0.6)" strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M4.5 6.8V10.5L8 12.5L11.5 10.5V6.8" stroke="rgba(255,215,0,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p
                    className="font-sans text-xs font-semibold uppercase tracking-[0.1em]"
                    style={{ color: 'rgba(255,255,255,0.22)' }}
                  >
                    Currently studying
                  </p>
                  <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    BSc Computer Science &amp; Business Management
                  </p>
                  <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    University of the Free State
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Connect */}
            <FadeIn delay={0.5}>
              <div className="flex flex-col gap-3">
                <p
                  className="font-sans text-xs font-semibold uppercase tracking-[0.1em]"
                  style={{ color: 'rgba(255,255,255,0.22)' }}
                >
                  Connect
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://linkedin.com/in/kwadwo-boateng-opoku-agyemang"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kwadwo Boateng on LinkedIn (opens in new tab)"
                    className="inline-flex items-center gap-2 font-sans font-medium text-sm text-white/45 hover:text-white/80 transition-colors duration-200 px-4 h-9 rounded-md"
                    style={{ border: '1px solid rgba(255,255,255,0.09)' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                      <rect x="1.5" y="1.5" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M5 6.5V10.5M5 4.5V4.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      <path d="M8 10.5V8.5C8 7.4 8.9 6.5 10 6.5s2 .9 2 2v2M8 6.5V10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:kwadwo.boateng@diastralws.co.za"
                    aria-label="Email Kwadwo Boateng"
                    className="inline-flex items-center gap-2 font-sans font-medium text-sm text-white/45 hover:text-white/80 transition-colors duration-200 px-4 h-9 rounded-md"
                    style={{ border: '1px solid rgba(255,255,255,0.09)' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                      <rect x="1.5" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M1.5 5.5L7.5 9L13.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    kwadwo.boateng@diastralws.co.za
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ReasonsSection() {
  return (
    <section
      aria-labelledby="reasons-heading"
      className="section-padding"
      style={{ backgroundColor: '#0E0E0E' }}
    >
      <Container>
        <div className="mb-16">
          <FadeIn>
            <p className="eyebrow mb-5">Why Work With Us</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="reasons-heading"
              className="font-display font-bold text-white max-w-[28rem]"
              style={{
                fontSize:      'clamp(2rem, 4vw, 3.25rem)',
                letterSpacing: '-0.035em',
                lineHeight:    1.08,
              }}
            >
              Why businesses
              choose Diastral.
            </h2>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REASONS.map((reason) => (
            <StaggerItem key={reason.title}>
              <div
                className="flex flex-col gap-6 p-8 rounded-2xl h-full"
                style={{
                  backgroundColor: '#141414',
                  border:          '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: 'rgba(255,215,0,0.07)',
                    color:           'rgba(255,215,0,0.65)',
                    border:          '1px solid rgba(255,215,0,0.1)',
                  }}
                >
                  {reason.icon}
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <h3
                    className="font-display font-bold text-white"
                    style={{ fontSize: '1.1875rem', letterSpacing: '-0.02em' }}
                  >
                    {reason.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
                    {reason.body}
                  </p>
                </div>
                <div className="pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-sans text-xs" style={{ color: 'rgba(255,215,0,0.55)' }}>
                    {reason.benefit}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-padding"
      style={{
        backgroundColor: '#0A0A0A',
        borderTop:       '1px solid rgba(255,255,255,0.055)',
      }}
    >
      <Container>
        <div className="mb-14">
          <FadeIn>
            <p className="eyebrow mb-5">Client Feedback</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="testimonials-heading"
              className="font-display font-bold text-white"
              style={{
                fontSize:      'clamp(2rem, 4vw, 3.25rem)',
                letterSpacing: '-0.035em',
                lineHeight:    1.08,
              }}
            >
              What our clients say.
            </h2>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.id}>
              <figure
                className="flex flex-col justify-between gap-8 p-8 rounded-2xl h-full"
                style={{
                  backgroundColor: '#141414',
                  border:          '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex flex-col gap-5">
                  <span
                    className="font-display select-none"
                    style={{ fontSize: '3rem', lineHeight: 0.8, color: 'rgba(255,215,0,0.2)' }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote
                    className="font-display"
                    style={{
                      fontSize:      '1.0625rem',
                      lineHeight:    1.65,
                      color:         'rgba(255,255,255,0.72)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption
                  className="flex flex-col gap-1 pt-5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="font-sans text-sm font-semibold text-white">{t.author}</span>
                  <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.32)' }}>
                    {t.role} · {t.company}
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}

function CTASection() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="relative section-padding overflow-hidden"
      style={{ backgroundColor: '#0E0E0E' }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          style={{
            position:   'absolute',
            inset:      0,
            background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,215,0,0.05) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position:   'absolute',
            top:        0,
            left:       0,
            right:      0,
            height:     '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.18) 50%, transparent)',
          }}
        />
      </div>

      <Container size="md">
        <div className="flex flex-col items-center text-center gap-9">
          <FadeIn>
            <p className="eyebrow">Work With Us</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="about-cta-heading"
              className="font-display font-bold text-white text-balance"
              style={{
                fontSize:      'clamp(2.25rem, 5.5vw, 4.25rem)',
                letterSpacing: '-0.04em',
                lineHeight:    1.06,
              }}
            >
              Ready to build something
              <br />
              <span style={{ color: 'rgba(250,250,250,0.32)' }}>
                worth building?
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              className="font-sans max-w-[32rem] text-balance"
              style={{
                fontSize:   '1.0625rem',
                lineHeight: '1.78',
                color:      'rgba(255,255,255,0.4)',
              }}
            >
              We take on a focused number of clients each quarter so each
              engagement gets the full attention it deserves. If you're building
              something that matters, let's talk.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-sans font-semibold text-[0.9375rem] text-[#0E0E0E] bg-[#FFD700] hover:bg-[#FFE44D] px-8 h-[52px] rounded-[10px] transition-all duration-200 hover:shadow-[0_8px_32px_rgba(255,215,0,0.18)]"
              >
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 font-sans font-medium text-[0.9375rem] text-white/45 hover:text-white/75 px-6 h-[52px] rounded-[10px] border border-white/[0.09] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-200"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.38}>
            <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.17)' }}>
              Typically respond within 24 hours · No-obligation discovery call
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default function AboutPage() {
  const personSchema = {
    '@context':  'https://schema.org',
    '@type':     'Person',
    name:        'Kwadwo Boateng Opoku-Agyemang',
    url:         `${SITE_CONFIG.url}/about`,
    jobTitle:    'Founder',
    worksFor:    { '@id': `${SITE_CONFIG.url}/#organization` },
    alumniOf:    { '@type': 'CollegeOrUniversity', name: 'University of the Free State' },
    sameAs:      ['https://linkedin.com/in/kwadwo-boateng-opoku-agyemang'],
    email:       'kwadwo.boateng@diastralws.co.za',
  }

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type':    'AboutPage',
    name:       'About Diastral Web Solutions',
    url:        `${SITE_CONFIG.url}/about`,
    description: 'Diastral is a digital systems studio founded by Kwadwo Boateng. We build websites, SEO systems, and automation for ambitious businesses across South Africa.',
    isPartOf:   { '@id': `${SITE_CONFIG.url}/#website` },
    about:      { '@id': `${SITE_CONFIG.url}/#organization` },
  }

  return (
    <>
      <script {...jsonLdScriptProps(personSchema)} />
      <script {...jsonLdScriptProps(aboutPageSchema)} />
      <script {...jsonLdScriptProps(faqSchema(GENERAL_FAQS))} />

      <HeroSection />
      <StorySection />
      <ApproachSection />
      <FounderSection />
      <ReasonsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}