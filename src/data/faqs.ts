// src/data/faqs.ts

export const GENERAL_FAQS = [
  {
    question: "What does Diastral Web Solutions do?",
    answer:
      "Diastral Web Solutions is a South African digital growth agency that designs and develops high-performance websites, E-Commerce stores, SEO strategies, Google Ads campaigns, Meta advertising, social media advertising, CRM systems, and business automation solutions. Our goal is to help businesses generate more qualified leads, increase revenue, and streamline operations.",
  },

  {
    question: "Who does Diastral work with?",
    answer:
      "We primarily work with small and medium-sized businesses across South Africa and internationally. Whether you're launching a new business, growing an established company, or modernising your digital presence, we tailor solutions to your goals.",
  },

  {
    question: "Where is Diastral Web Solutions based?",
    answer:
      "Diastral Web Solutions is based in South Africa and serves clients both locally and internationally through remote collaboration.",
  },

  {
    question: "Why does my business need a professional website?",
    answer:
      "A professional website builds credibility, improves visibility on search engines overtime, generates leads, and gives potential customers confidence in your business. For many companies, a website becomes their highest-performing sales and marketing asset.",
  },

  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within four to six weeks. Larger websites, custom web applications, or e-commerce stores may require additional time depending on complexity and client requirements.",
  },

  {
    question: "How much does a website cost in South Africa?",
    answer:
      "Website pricing depends on the size, functionality, integrations, and business goals of the project. We provide customised proposals based on your requirements instead of one-size-fits-all packages.",
  },

  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We redesign outdated websites to improve user experience, mobile responsiveness, SEO performance, loading speed, branding, and conversion rates.",
  },

  {
    question: "Can I update my website myself after launch?",
    answer:
      "Yes. Depending on the platform, we build websites that allow you to update text, images, blog posts, and other content without needing any technical knowledge.",
  },

  {
    question: "Do you provide website hosting?",
    answer:
      "Yes. We can recommend, configure, and manage secure hosting solutions depending on your website's requirements.",
  },

  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer ongoing website maintenance, updates, security monitoring, backups, performance optimisation, and technical support after launch.",
  },

  {
    question: "Do you offer ongoing support?",
    answer:
      "Absolutely. Launching your website is only the beginning. We provide ongoing optimisation, technical support, performance monitoring, and strategic guidance as your business grows.",
  },

  {
    question: "How do I get started?",
    answer:
      "The first step is booking a discovery call. We'll discuss your business, understand your goals, identify opportunities, and recommend the best solution before providing a proposal.",
  },
]

export const SERVICE_FAQS: Record<
  string,
  { question: string; answer: string }[]
> = {
  "development-and-design": [
    {
      question: "What platforms do you build websites on?",
      answer:
        "We primarily build custom websites using Next.js and React for maximum performance, scalability, and SEO. For e-commerce businesses, we develop Shopify stores designed for growth and easy management.",
    },

    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, 100%. Every website we build is fully responsive and optimised for mobile phones, tablets, and desktop devices using a mobile-first design approach.",
    },

    {
      question: "Will my website load quickly?",
      answer:
        "Yes. Website performance is a core priority. We optimise images, videos, code, fonts, and page structure to achieve fast loading speeds and strong Core Web Vitals.",
    },

    {
      question: "Will my website be SEO-friendly?",
      answer:
        "Yes. Every website includes technical SEO foundations such as semantic HTML, metadata, structured data, XML sitemaps, robots.txt configuration, image optimisation, and clean URL structures.",
    },

    {
      question: "Can you build custom functionality?",
      answer:
        "Yes. We develop custom features including booking systems, client portals, dashboards, forms, integrations, payment systems, and business management tools.",
    },

    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We modernise existing websites while improving performance, usability, branding, and search engine visibility.",
    },
  ],

  "growth-and-acquisition": [
    {
      question: "How long does SEO take to work?",
      answer:
        "SEO is a long-term investment. Technical improvements may become visible within weeks, while significant ranking and traffic growth typically occurs over three to six months depending on competition and website authority.",
    },

    {
      question: "What SEO services do you provide?",
      answer:
        "We provide technical SEO, on-page SEO, keyword research, content strategy, local SEO, structured data implementation, performance optimisation, and SEO audits.",
    },

    {
      question: "Do you manage Google Ads campaigns?",
      answer:
        "Yes. We create, manage, optimise, and report on Google Ads campaigns focused on generating qualified leads and measurable return on investment.",
    },

    {
      question: "Do you manage Meta advertising?",
      answer:
        "Yes. We manage Facebook and Instagram advertising campaigns, including audience targeting, creative testing, conversion tracking, and ongoing optimisation.",
    },

    {
      question: "Can you improve my existing SEO?",
      answer:
        "Yes. We frequently work with businesses that already have websites but need better search visibility, stronger rankings, and higher organic traffic.",
    },

    {
      question: "Do you help businesses generate more leads?",
      answer:
        "Yes. Our marketing strategies combine SEO, paid advertising, landing pages, website optimisation, and automation to help businesses consistently generate qualified enquiries.",
    },
  ],

  "automation-and-integration": [
    {
      question: "What CRM systems do you work with?",
      answer:
        "We work with HubSpot, custom CRM platforms, and other business management systems depending on your operational requirements.",
    },

    {
      question: "Can you automate lead follow-ups?",
      answer:
        "Yes. We build automated email, SMS, and CRM workflows that ensure every lead receives timely follow-up without requiring manual intervention.",
    },

    {
      question: "Can you connect my website to other software?",
      answer:
        "Yes. We integrate websites with CRMs, payment gateways, booking systems, email marketing platforms, analytics tools, and third-party APIs.",
    },

    {
      question: "Can automation save my business time?",
      answer:
        "Absolutely. Business automation reduces repetitive administrative work, improves consistency, reduces errors, and allows your team to focus on higher-value activities.",
    },

    {
      question: "Can you automate client onboarding?",
      answer:
        "Yes. We can automate enquiry forms, proposals, contracts, invoices, scheduling, onboarding emails, and CRM updates to streamline your client journey.",
    },
  ],
}