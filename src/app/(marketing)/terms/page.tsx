// src/app/(marketing)/terms/page.tsx
import type { Metadata } from 'next'
import Link              from 'next/link'
import { Container }     from '@/components/layout/Container'
import { buildMetadata } from '@/lib/seo'
import { SITE_CONFIG }   from '@/lib/constants'

export const metadata: Metadata = {
  ...buildMetadata({
    title:       'Terms of Service',
    description: 'Terms and conditions governing the use of Diastral Web Solutions\' services. Read before engaging our digital services.',
    path:        '/terms',
  }),
}

const LAST_UPDATED = '03 July 2025'

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="flex flex-col gap-5">
      <h2
        id={`${id}-heading`}
        className="font-display font-bold text-white"
        style={{ fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)', letterSpacing: '-0.025em' }}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-4 font-sans" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: '1.8' }}>
        {children}
      </div>
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#FFD700', opacity: 0.55 }} aria-hidden="true"/>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TermsPage() {
  return (
    <>
      {/* ── Header ── */}
      <header
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ backgroundColor: '#0E0E0E' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize:  '36px 36px',
          }}
        />
        <Container size="md">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium mb-10 text-white/30 hover:text-white/60 transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M10 7H4M6.5 4L4 7l2.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Diastral
          </Link>
          <p className="eyebrow mb-5">Legal</p>
          <h1
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', letterSpacing: '-0.04em', lineHeight: 1.06 }}
          >
            Terms of Service
          </h1>
          <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Last updated: {LAST_UPDATED}
          </p>
        </Container>
      </header>

      {/* ── Content ── */}
      <main
        className="py-20"
        style={{ backgroundColor: '#0E0E0E' }}
        aria-label="Terms of Service content"
      >
        <Container size="md">
          <div className="flex flex-col gap-14">

            {/* Intro */}
            <div
              className="p-6 rounded-xl font-sans text-sm leading-relaxed"
              style={{
                backgroundColor: 'rgba(255,215,0,0.04)',
                border:          '1px solid rgba(255,215,0,0.12)',
                color:           'rgba(255,255,255,0.55)',
              }}
            >
              By engaging Diastral Web Solutions (&ldquo;Diastral&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) for any service, or by accessing our website at <strong className="text-white/70">{SITE_CONFIG.url}</strong>, you agree to be bound by these Terms of Service. Please read them carefully. If you do not agree, please do not use our services.
            </div>

            <Section title="1. Services" id="services">
              <P>Diastral provides digital services including, but not limited to: website design and development, e-commerce development, search engine optimisation (SEO), Google and Meta Ads management, email and SMS marketing, CRM setup and integration, automation systems, and digital strategy consulting.</P>
              <P>The specific scope, deliverables, timeline, and pricing for each engagement are defined in a separate Proposal or Service Agreement provided to you prior to commencement. In the event of any conflict between these Terms and a signed Proposal or Service Agreement, the Proposal or Service Agreement will prevail.</P>
            </Section>

            <Section title="2. Engagement and Acceptance" id="engagement">
              <P>A formal engagement begins when:</P>
              <UL items={[
                'You have signed or accepted a Proposal or Service Agreement from Diastral, and',
                'An initial deposit or payment has been received as specified in that agreement.',
              ]} />
              <P>Verbal agreements, email discussions, or informal communications do not constitute a binding service agreement unless confirmed in a signed document.</P>
            </Section>

            <Section title="3. Payment Terms" id="payment">
              <P>Unless otherwise stated in your Proposal:</P>
              <UL items={[
                'A non-refundable deposit of 50% of the total project value is required before work commences.',
                'The remaining balance is due upon project completion, prior to final delivery of files or go-live.',
                'Ongoing retainer services are billed monthly in advance.',
                'Invoices are payable within 7 calendar days of issue.',
                'Late payments accrue interest at 2% per month on the outstanding balance.',
                'Prices are quoted in South African Rand (ZAR) unless otherwise specified. International clients may be quoted in USD or GBP at our discretion.',
              ]} />
              <P>We reserve the right to pause or suspend work on any project where payment is overdue by more than 14 days.</P>
            </Section>

            <Section title="4. Revisions and Scope Changes" id="revisions">
              <P>Each project proposal includes a specified number of revision rounds. Revision requests beyond the agreed scope, or requests for work that fall outside the original brief, will be quoted separately and require written approval before proceeding.</P>
              <P>Significant scope changes — including new features, additional pages, or change of direction — may require a revised Proposal and timeline adjustment.</P>
            </Section>

            <Section title="5. Client Responsibilities" id="client-responsibilities">
              <P>To ensure timely delivery, you agree to:</P>
              <UL items={[
                'Provide all required content, assets, credentials, and feedback within agreed timeframes.',
                'Designate a primary point of contact with authority to make decisions and provide approvals.',
                'Respond to requests for information or review within 5 business days. Delays caused by late client response may affect the project timeline.',
                'Ensure that all content, logos, images, and materials supplied to Diastral are owned by you or that you have the legal right to use them.',
              ]} />
            </Section>

            <Section title="6. Intellectual Property" id="intellectual-property">
              <P><strong className="text-white/70">Client-owned materials:</strong> All content, logos, trademarks, and materials you provide remain your intellectual property.</P>
              <P><strong className="text-white/70">Project deliverables:</strong> Upon receipt of full and final payment, ownership of the custom-designed and developed deliverables transfers to you. This excludes:</P>
              <UL items={[
                'Third-party frameworks, libraries, fonts, or plugins used in development (these are subject to their own licensing terms).',
                'Pre-existing tools, code templates, or systems proprietary to Diastral.',
                'Content or assets generated using AI tools (see Section 7).',
              ]} />
              <P><strong className="text-white/70">Portfolio rights:</strong> Diastral reserves the right to display completed work in our portfolio, case studies, and marketing materials unless you request otherwise in writing.</P>
            </Section>

            <Section title="7. Use of Artificial Intelligence Tools" id="ai-tools">
              <P>Diastral may use AI-powered tools and Large Language Models (LLMs) — including tools by Anthropic, OpenAI, Google, and others — to assist in service delivery. This may include assisting with copywriting, content generation, code assistance, strategy development, and creative ideation.</P>
              <P>Where AI-generated content forms part of a deliverable:</P>
              <UL items={[
                'All AI-assisted content is reviewed, edited, and approved by Diastral before delivery.',
                'You accept that AI-generated outputs are not fully owned under traditional copyright law in all jurisdictions, and Diastral makes no warranties regarding the copyright status of AI-generated content.',
                'You are responsible for ensuring AI-generated content complies with applicable laws and regulations in your jurisdiction before publishing.',
                'If you require a project to be delivered without the use of AI tools, you must specify this in writing before the project commences. This may affect pricing and timeline.',
              ]} />
              <P>Diastral does not submit sensitive client data or confidential business information into AI systems without client consent.</P>
            </Section>

            <Section title="8. Confidentiality" id="confidentiality">
              <P>Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of the engagement. Diastral will not disclose your business information, project details, or strategic plans to third parties without your consent, except as required by law or to deliver the agreed services (e.g., sharing credentials with a hosting provider).</P>
            </Section>

            <Section title="9. Warranties and Disclaimers" id="warranties">
              <P>Diastral warrants that services will be delivered with reasonable skill and care. However:</P>
              <UL items={[
                'We do not guarantee specific results, including specific search engine rankings, lead volumes, conversion rates, or revenue outcomes.',
                'Website performance may be affected by factors outside our control, including third-party platform changes, algorithm updates, or client-side modifications.',
                'AI-generated content is provided &ldquo;as is&rdquo; and Diastral makes no warranty as to its accuracy, originality, or copyright status.',
                'We are not liable for downtime, data loss, or security breaches caused by third-party hosting platforms.',
              ]} />
            </Section>

            <Section title="10. Limitation of Liability" id="liability">
              <P>To the fullest extent permitted by South African law, Diastral&apos;s total liability for any claim arising out of or related to our services shall not exceed the total amount paid by you to Diastral in the three months preceding the claim.</P>
              <P>Diastral shall not be liable for any indirect, incidental, consequential, or punitive damages, including loss of profits, loss of data, or business interruption, even if advised of the possibility of such damages.</P>
            </Section>

            <Section title="11. Termination" id="termination">
              <P>Either party may terminate an engagement by providing 14 calendar days&apos; written notice. Upon termination:</P>
              <UL items={[
                'Any work completed to date will be invoiced and payment is due within 7 days.',
                'Diastral will deliver all completed work files upon receipt of payment for work rendered.',
                'The deposit is non-refundable regardless of the reason for termination.',
                'Termination does not affect either party&apos;s rights or obligations that accrued before the termination date.',
              ]} />
            </Section>

            <Section title="12. Governing Law and Dispute Resolution" id="governing-law">
              <P>These Terms are governed by the laws of the Republic of South Africa. Any disputes arising from or related to these Terms or our services will be subject to the exclusive jurisdiction of the courts of South Africa.</P>
              <P>Before initiating formal legal proceedings, both parties agree to attempt to resolve disputes through good-faith negotiation for a period of 30 days.</P>
            </Section>

            <Section title="13. Amendments" id="amendments">
              <P>Diastral reserves the right to update these Terms of Service at any time. Updated Terms will be published on this page with a revised date. Continued use of our services after the posting of changes constitutes acceptance of the revised Terms.</P>
            </Section>

            <Section title="14. Contact" id="contact">
              <div
                className="p-5 rounded-xl text-sm"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)' }}
              >
                <p><strong className="text-white/70">Diastral Web Solutions</strong></p>
                <p>South Africa</p>
                <p>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#FFD700]/70 hover:text-[#FFD700] transition-colors">{SITE_CONFIG.email}</a></p>
              </div>
            </Section>

          </div>
        </Container>
      </main>
    </>
  )
}