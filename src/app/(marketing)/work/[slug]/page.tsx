// src/app/(marketing)/work/[slug]/page.tsx
import type { Metadata }  from 'next'
import { notFound }       from 'next/navigation'
import Link               from 'next/link'
import Image              from 'next/image'
import { Container }      from '@/components/layout/Container'
import { FadeIn }         from '@/components/motion/FadeIn'
import { CASE_STUDIES, CASE_STUDY_DETAIL } from '@/data/work'
import { buildMetadata }  from '@/lib/seo'
import { caseStudySchema, breadcrumbSchema, jsonLdScriptProps } from '@/lib/schema'
import { SITE_CONFIG }    from '@/lib/constants'

type CaseStudy = (typeof CASE_STUDIES)[number]

export function generateStaticParams() {
  return CASE_STUDIES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = CASE_STUDIES.find((s) => s.slug === slug)
  if (!study) return {}

  return buildMetadata({
    title:       `${study.title} — ${study.client}`,
    description: study.excerpt,
    path:        `/work/${slug}`,
    ogImage:     `/images/work/${slug}/hero.jpg`,
    keywords:    [study.client, study.category, ...study.tags],
  })
}

// ─── Locked Case Study ─────────────────────────────────────────────────────────
function LockedCaseStudy({ study }: { study: CaseStudy }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: '100dvh', backgroundColor: '#0E0E0E' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,215,0,0.05) 0%, transparent 70%)',
        }}
      />

      <Container size="sm">
        <div className="relative flex flex-col items-center gap-8 py-20">
          <FadeIn>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(255,215,0,0.07)',
                border:          '1px solid rgba(255,215,0,0.14)',
              }}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <rect x="6" y="11.5" width="14" height="10" rx="2" stroke="#FFD700" strokeWidth="1.5"/>
                <path d="M9 11.5V8.5C9 6 10.8 4 13 4C15.2 4 17 6 17 8.5V11.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="13" cy="16" r="1.4" fill="#FFD700" opacity="0.7"/>
              </svg>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded"
                  style={{
                    backgroundColor: 'rgba(255,215,0,0.07)',
                    color:           'rgba(255,215,0,0.6)',
                    border:          '1px solid rgba(255,215,0,0.1)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.14}>
            <h1
              className="font-display font-bold text-white"
              style={{
                fontSize:      'clamp(2rem, 4.5vw, 3.25rem)',
                letterSpacing: '-0.035em',
                lineHeight:    1.1,
              }}
            >
              {study.client}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-3 max-w-[28rem]">
              <p
                className="font-sans font-medium"
                style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)' }}
              >
                Case study updates coming soon.
              </p>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                We're putting together the full write-up for this project —
                including outcomes, process, and screenshots. Check back shortly,
                or get in touch if you'd like to hear about it directly.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-sans font-medium text-sm text-white/45 hover:text-white/75 px-6 h-11 rounded-[10px] border border-white/[0.09] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M10 7H4M6.5 4L4 7l2.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-[#0E0E0E] bg-[#FFD700] hover:bg-[#FFE44D] px-6 h-11 rounded-[10px] transition-all duration-200"
              >
                Ask About This Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7H11.5M8.5 4L11.5 7L8.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}

// ─── Image Slot ───────────────────────────────────────────────────────────────
function ImageSlot({
  slug,
  filename,
  label,
  aspectRatio = '16/9',
  priority    = false,
}: {
  slug:         string
  filename:     string
  label:        string
  aspectRatio?: string
  priority?:    boolean
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      style={{
        aspectRatio,
        backgroundColor: '#141414',
        border:          '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Image
        src={`/images/work/${slug}/${filename}`}
        alt={label}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1200px"
        priority={priority}
      />
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug }  = await params
  const study     = CASE_STUDIES.find((s) => s.slug === slug)
  const detail    = CASE_STUDY_DETAIL[slug]
  const studyIndex = CASE_STUDIES.findIndex((s) => s.slug === slug)
  const nextStudy  = CASE_STUDIES[(studyIndex + 1) % CASE_STUDIES.length]

  if (!study) notFound()

  if (study.locked) {
    return <LockedCaseStudy study={study} />
  }

  return (
    <>
      {/* Structured data */}
      <script {...jsonLdScriptProps(breadcrumbSchema([
        { name: 'Home',          path: '/'                  },
        { name: 'Work',          path: '/work'              },
        { name: study.client,    path: `/work/${study.slug}` },
      ]))} />
      <script {...jsonLdScriptProps(caseStudySchema({
        title:   study.title,
        excerpt: study.excerpt,
        slug:    study.slug,
        client:  study.client,
        year:    study.year,
        image:   `/images/work/${study.slug}/hero.jpg`,
      }))} />

      {/* ── Hero ── */}
      <header
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ backgroundColor: '#0E0E0E' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,215,0,0.05) 0%, transparent 70%)',
          }}
        />

        <Container>
          <FadeIn>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans text-xs font-medium mb-10 transition-colors duration-200 text-white/30 hover:text-white/60"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M10 7H4M6.5 4L4 7l2.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All Work
            </Link>
          </FadeIn>

          <div className="max-w-[52rem]">
            <FadeIn delay={0.06}>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: 'rgba(255,215,0,0.07)',
                      color:           'rgba(255,215,0,0.65)',
                      border:          '1px solid rgba(255,215,0,0.12)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
                <span
                  className="font-sans text-xs px-2.5 py-1"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {study.year}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className="font-display font-bold text-white mb-6"
                style={{
                  fontSize:      'clamp(2.25rem, 5vw, 4rem)',
                  letterSpacing: '-0.04em',
                  lineHeight:    1.06,
                }}
              >
                {study.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p
                className="font-sans text-sm"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                Client:{' '}
                <span style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {study.client}
                </span>
              </p>
            </FadeIn>
          </div>
        </Container>
      </header>

      {/* ── Results Strip ── */}
      {study.results && (
        <div
          style={{
            backgroundColor: '#0A0A0A',
            borderTop:       '1px solid rgba(255,255,255,0.055)',
            borderBottom:    '1px solid rgba(255,255,255,0.055)',
          }}
        >
          <Container>
            <div className="grid grid-cols-3 py-10 gap-4">
              {study.results.map((r, i) => (
                <FadeIn key={r.label} delay={i * 0.08}>
                  <div
                    className="flex flex-col gap-1.5"
                    style={
                      i < study.results!.length - 1
                        ? { borderRight: '1px solid rgba(255,255,255,0.055)', paddingRight: '2rem' }
                        : {}
                    }
                  >
                    <span
                      className="font-display font-bold text-white"
                      style={{
                        fontSize:      'clamp(2rem, 4vw, 3.25rem)',
                        letterSpacing: '-0.04em',
                        lineHeight:    1,
                      }}
                    >
                      {r.value}
                    </span>
                    <span
                      className="font-sans text-xs"
                      style={{ color: 'rgba(255,255,255,0.3)' }}
                    >
                      {r.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </div>
      )}

      {/* ── Main Image ── */}
      <div className="py-14" style={{ backgroundColor: '#0E0E0E' }}>
        <Container>
          <FadeIn>
            <ImageSlot
              slug={slug}
              filename="hero.jpg"
              label={`${study.client} — project overview`}
              aspectRatio="16/8"
              priority
            />
          </FadeIn>
        </Container>
      </div>

      {/* ── Body Content ── */}
      {detail && (
        <article
          aria-label={`${study.client} case study details`}
          className="section-padding"
          style={{ backgroundColor: '#0E0E0E' }}
        >
          <Container size="md">
            <div className="flex flex-col gap-20">

              {/* Challenge */}
              <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
                  <p
                    className="font-sans text-xs font-semibold uppercase tracking-[0.12em] pt-1"
                    style={{ color: 'rgba(255,255,255,0.22)' }}
                  >
                    What Was The Problem?
                  </p>
                  <p
                    className="font-display"
                    style={{
                      fontSize:      'clamp(1.125rem, 2vw, 1.375rem)',
                      lineHeight:    1.65,
                      color:         'rgba(255,255,255,0.7)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {detail.challenge}
                  </p>
                </div>
              </FadeIn>

              {/* Secondary images */}
              <FadeIn>
                <div className="grid grid-cols-2 gap-4">
                  <ImageSlot
                    slug={slug}
                    filename="process.jpg"
                    label={`${study.client} — process`}
                    aspectRatio="4/3"
                  />
                  <ImageSlot
                    slug={slug}
                    filename="ui.jpg"
                    label={`${study.client} — design detail`}
                    aspectRatio="4/3"
                  />
                </div>
              </FadeIn>

              {/* Approach */}
              <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
                  <p
                    className="font-sans text-xs font-semibold uppercase tracking-[0.12em] pt-1"
                    style={{ color: 'rgba(255,255,255,0.22)' }}
                  >
                    Our Approach
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      fontSize:   '1.0625rem',
                      lineHeight: '1.8',
                      color:      'rgba(255,255,255,0.48)',
                    }}
                  >
                    {detail.approach}
                  </p>
                </div>
              </FadeIn>

              {/* Solution */}
              <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
                  <p
                    className="font-sans text-xs font-semibold uppercase tracking-[0.12em] pt-1"
                    style={{ color: 'rgba(255,255,255,0.22)' }}
                  >
                    Diastral's Solution
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      fontSize:   '1.0625rem',
                      lineHeight: '1.8',
                      color:      'rgba(255,255,255,0.48)',
                    }}
                  >
                    {detail.solution}
                  </p>
                </div>
              </FadeIn>

              {/* Stack */}
              <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
                  <p
                    className="font-sans text-xs font-semibold uppercase tracking-[0.12em] pt-1"
                    style={{ color: 'rgba(255,255,255,0.22)' }}
                  >
                    The Stack We Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {detail.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs px-3 py-1.5 rounded-md"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          color:           'rgba(255,255,255,0.45)',
                          border:          '1px solid rgba(255,255,255,0.07)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>
          </Container>
        </article>
      )}

      {/* ── Final screenshot ── */}
      <div className="pb-24" style={{ backgroundColor: '#0E0E0E' }}>
        <Container>
          <FadeIn>
            <ImageSlot
              slug={slug}
              filename="result.png"
              label={`${study.client} — final result`}
              aspectRatio="16/9"
            />
          </FadeIn>
        </Container>
      </div>

      {/* ── Next Project ── */}
      {nextStudy && (
        <div
          style={{
            backgroundColor: '#0A0A0A',
            borderTop:       '1px solid rgba(255,255,255,0.055)',
          }}
        >
          <Container>
            <div className="py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p
                  className="font-sans text-xs uppercase tracking-[0.12em] font-semibold mb-2"
                  style={{ color: 'rgba(255,255,255,0.22)' }}
                >
                  Next Project
                </p>
                <p
                  className="font-display font-bold text-white"
                  style={{
                    fontSize:      'clamp(1.125rem, 2vw, 1.5rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {nextStudy.client}
                </p>
              </div>
              <Link
                href={`/work/${nextStudy.slug}`}
                className="group inline-flex items-center gap-2 font-sans font-medium text-sm text-white/40 hover:text-white/75 transition-colors duration-200"
              >
                {nextStudy.title.split(' ').slice(0, 5).join(' ')}…
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </Container>
        </div>
      )}
    </>
  )
}