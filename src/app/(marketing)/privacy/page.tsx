// src/app/(marketing)/privacy/page.tsx
import type { Metadata } from 'next'
import Link              from 'next/link'
import { Container }     from '@/components/layout/Container'
import { buildMetadata } from '@/lib/seo'
import { SITE_CONFIG }   from '@/lib/constants'

export const metadata: Metadata = {
  ...buildMetadata({
    title:       'Privacy Policy',
    description: 'How Diastral Web Solutions collects, uses, and protects your personal information. Compliant with the Protection of Personal Information Act (POPIA) of South Africa.',
    path:        '/privacy',
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
      <div className="flex flex-col gap-4" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: '1.8' }}>
        {children}
      </div>
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-sans">{children}</p>
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 font-sans">
          <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#FFD700', opacity: 0.55 }} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPage() {
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
            Privacy Policy
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
        aria-label="Privacy Policy content"
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
              Diastral Web Solutions (&ldquo;Diastral&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data in compliance with the <strong className="text-white/70">Protection of Personal Information Act 4 of 2013 (POPIA)</strong> of South Africa and applicable international data protection standards.
            </div>

            <Section title="1. Who We Are" id="who-we-are">
              <P>Diastral Web Solutions is a digital agency based in South Africa, providing website development, SEO, digital marketing, CRM automation, and related digital services to businesses.</P>
              <P><strong className="text-white/60">Information Officer:</strong> Kwadwo Boateng Opoku-Agyemang<br/><strong className="text-white/60">Email:</strong> {SITE_CONFIG.email}</P>
            </Section>

            <Section title="2. Information We Collect" id="information-collected">
              <P>We collect personal information only when necessary to provide our services or respond to your enquiries. This includes:</P>
              <UL items={[
                'Contact details: your name, email address, phone number, and company name when submitted through our contact form or project enquiry form.',
                'Communication data: messages, project briefs, and correspondence you send to us.',
                'Technical data: IP addresses, browser type, device information, and website usage data collected via analytics tools.',
                'Payment information: processed securely through third-party payment providers. (We do not store card details).',
                'Marketing preferences: whether you opt in to receive communications from us.',
              ]} />
            </Section>

            <Section title="3. How We Use Your Information" id="how-we-use">
              <P>We use your personal information to:</P>
              <UL items={[
                'Respond to project enquiries and provide quotations.',
                'Deliver agreed services, manage your project, and communicate project progress.',
                'Send invoices and process payments.',
                'Improve our services and website based on aggregated usage data.',
                'Comply with legal obligations.',
                'Send relevant business communications where you have provided consent.',
              ]} />
              <P>We will never sell, rent, or trade your personal information to third parties for marketing purposes.</P>
            </Section>

            <Section title="4. Use of Artificial Intelligence (AI) and Language Model Tools" id="ai-tools">
              <P><strong className="text-white/70">Important disclosure:</strong> In the course of delivering our services, Diastral may use AI-powered tools and Large Language Models (LLMs) — including but not limited to tools powered by Anthropic (Claude), OpenAI (ChatGPT / GPT-4), and Google (Gemini) — to assist with tasks such as copywriting, content strategy, code generation, and operational workflows.</P>
              <P>When using these tools in relation to your project:</P>
              <UL items={[
                'We take reasonable care not to input your sensitive personal or business-confidential information into AI systems without your knowledge.',
                'Information submitted to third-party AI tools is subject to the respective privacy policies and terms of those providers.',
                'Where AI tools are used to process or generate content that will be delivered to you as part of your project, we will disclose this upon request.',
                'You may request that we avoid using AI tools for your specific project and we will honour this request where operationally feasible.',
              ]} />
              <P>We use AI tools as productivity aids to improve the quality and efficiency of our work. Final deliverables are reviewed and approved by Diastral before delivery.</P>
            </Section>

            <Section title="5. Sharing Your Information" id="sharing">
              <P>We may share your information with trusted third-party service providers who assist us in operating our business, including:</P>
              <UL items={[
                'Cloud hosting and storage providers (e.g., Vercel, Netlify).',
                'Project management and communication tools (e.g., Notion, Linear, Slack).',
                'Email and marketing platforms used for client communication.',
                'Payment processors (e.g., PayFast, Stitch) for invoice payments.',
                'Analytics services (e.g., Google Analytics, Vercel Analytics) for website performance measurement.',
                'AI and productivity tools as described in Section 4.',
              ]} />
              <P>All third parties are required to handle your information securely and in accordance with applicable data protection laws.</P>
            </Section>

            <Section title="6. Cookies and Tracking" id="cookies">
              <P>Our website uses cookies and similar tracking technologies to:</P>
              <UL items={[
                'Maintain session state and improve site performance.',
                'Collect anonymised analytics data to understand how visitors use our site.',
                'Remember your preferences where applicable.',
              ]} />
              <P>You may disable cookies through your browser settings. Disabling cookies may affect some functionality of our website. We do not use cookies for advertising tracking or third-party profiling.</P>
            </Section>

            <Section title="7. Data Retention" id="retention">
              <P>We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including:</P>
              <UL items={[
                'Project data: retained for a minimum of 5 years following project completion for contractual and legal reference purposes.',
                'Financial records: retained for 7 years in accordance with South African tax and accounting requirements.',
                'Enquiry data: retained for 2 years from the date of last contact if no project engagement followed.',
                'Marketing data: retained until you withdraw consent.',
              ]} />
            </Section>

            <Section title="8. Your Rights Under POPIA" id="your-rights">
              <P>Under the Protection of Personal Information Act, you have the right to:</P>
              <UL items={[
                'Know what personal information we hold about you.',
                'Request access to your personal information.',
                'Request correction of inaccurate or incomplete information.',
                'Request deletion of your personal information (subject to legal retention obligations).',
                'Object to the processing of your personal information.',
                'Withdraw consent for direct marketing communications at any time.',
                'Lodge a complaint with the Information Regulator of South Africa.',
              ]} />
              <P>To exercise any of these rights, contact us at: <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#FFD700]/70 hover:text-[#FFD700] transition-colors">{SITE_CONFIG.email}</a></P>
            </Section>

            <Section title="9. Data Security" id="security">
              <P>We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. These include:</P>
              <UL items={[
                'Encrypted connections (HTTPS/SSL) on all web properties.',
                'Access controls limiting data access to authorised personnel only.',
                'Regular security reviews of third-party tools and platforms.',
                'Secure deletion of data when retention periods expire.',
              ]} />
              <P>No system is entirely secure. In the event of a data breach that poses a risk to your rights and freedoms, we will notify you and the Information Regulator as required by law.</P>
            </Section>

            <Section title="10. International Data Transfers" id="international">
              <P>Some of our third-party service providers are located outside South Africa. Where personal information is transferred internationally, we ensure appropriate safeguards are in place, consistent with POPIA requirements and the standards of the destination country.</P>
            </Section>

            <Section title="11. Children's Privacy" id="children">
              <P>Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted information to us, please contact us immediately and we will delete it.</P>
            </Section>

            <Section title="12. Changes to This Policy" id="changes">
              <P>We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. The updated policy will be published on this page with a revised &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.</P>
            </Section>

            <Section title="13. Contact Us" id="contact">
              <P>For any questions, requests, or complaints regarding this Privacy Policy or our data practices, please contact:</P>
              <div
                className="mt-2 p-5 rounded-xl font-sans text-sm"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)' }}
              >
                <p><strong className="text-white/70">Diastral Web Solutions</strong></p>
                <p>Information Officer: Kwadwo Boateng Opoku-Agyemang</p>
                <p>South Africa</p>
                <p>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#FFD700]/70 hover:text-[#FFD700] transition-colors">{SITE_CONFIG.email}</a></p>
              </div>
              <P>You may also contact the Information Regulator of South Africa at <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="text-[#FFD700]/70 hover:text-[#FFD700] transition-colors">inforegulator.org.za</a></P>
            </Section>

          </div>
        </Container>
      </main>
    </>
  )
}