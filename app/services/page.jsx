"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/Services/Service-card";
import InnerHero from "@/components/Common/InnerHero";
import WhyChooseSection from "@/components/Common/WhyChooseSection";
import ServiceCTA from "@/components/Services/ServiceCTA";
import GeneralFaq from "@/components/FaqAccordion";
import FaqAccordion from "@/components/FaqAccordion";

const services = [
  {
    id: 1,
    title: "Branding",
    tagline: "Stand Out & Be Remembered",
    description:
      "Branding is more than a logo — it's how people feel about your business.",
    icon: "🎨",
    features: [
      "Brand Identity & Tone of Voice",
      "Logo & Visual Language Systems",
      "Brand Story & Value Positioning",
      "Brand Guidelines & Creative Direction",
    ],
    outcome:
      "Your business becomes a recognizable brand, not just another company.",

    // 👇 Button props
    cta: {
      label: "Explore Branding",
      href: "/services/branding", // or null if using onClick
    },
  },

  {
    id: 2,
    title: "PPC Advertising",
    tagline: "Pay-Per-Click That Converts",
    description:
      "Fast leads, lower cost per lead, and measurable ROI across all platforms.",
    icon: "📊",
    features: [
      "Google Ads, Meta Ads, YouTube, LinkedIn",
      "Audience & Intent Targeting",
      "High-Converting Ad Creatives",
      "Landing Page Optimization",
      "Conversion Tracking & A/B Testing",
      "Budget Scaling & ROI Optimization",
    ],
    outcome:
      "Fast leads with measurable ROI and optimized cost per acquisition.",
    color: "from-blue-500 to-cyan-500",
    // 👇 Button props
    cta: {
      label: "Explore PPC Advertising",
      href: "/services/ppc", // or null if using onClick
    },
  },
  {
    id: 3,
    title: "Social Media Marketing",
    tagline: "Brand Growth & Community Building",
    description:
      "Turn your business into a brand people remember and engage with.",
    icon: "📱",
    features: [
      "Content Strategy & Monthly Calendars",
      "Creative Design & Branding",
      "Reels & Short-Form Video Strategy",
      "Paid Engagement Campaigns",
      "Community Growth & Interaction",
      "Influencer Partnerships",
    ],
    outcome: "Higher engagement, strong brand recall, and a loyal audience.",
    color: "from-purple-500 to-pink-500",
    cta: {
      label: "Explore Social Media Marketing",
      href: "/services/socialMedia", // or null if using onClick
    },
  },
  {
    id: 4,
    title: "Google Maps & GMB",
    tagline: "Your Digital Storefront",
    description:
      "Dominate local search and get more calls, walk-ins, and trust.",
    icon: "📍",
    features: [
      "Google Business Profile Optimization",
      "Review Generation Strategy",
      "Local SEO Signals & Citations",
      "Trust & Authority Building",
      "Local Ranking Management",
      "Review Response System",
    ],
    outcome: "More calls, more walk-ins, and instant trust from customers.",
    color: "from-orange-500 to-amber-500",
    cta: {
      label: "Explore Google Maps & GMB",
      href: "/services/googleMaps", // or null if using onClick
    },
  },
  {
    id: 5,
    title: "Content Marketing",
    tagline: "Authority & Trust Building",
    description:
      "Content is your credibility engine. Become the trusted expert.",
    icon: "✍️",
    features: [
      "Website Copywriting & Messaging",
      "Blog Articles & Topic Clusters",
      "Case Studies & Testimonials",
      "FAQ & Educational Content",
      "Ad Copy & Email Campaigns",
      "SEO-Optimized Content",
    ],
    outcome: "Your brand becomes the trusted expert customers choose first.",
    color: "from-green-500 to-emerald-500",
    cta: {
      label: "Explore Content Marketing",
      href: "/services/contentMarketing", // or null if using onClick
    },
  },
  {
    id: 6,
    title: "SEO & Local Ranking",
    tagline: "Dominate Google Search",
    description:
      "Rank where your customers are searching with proven SEO strategies.",
    icon: "🔍",
    features: [
      "Keyword Research & Competitor Analysis",
      "On-Page & Technical SEO",
      'Local SEO & "Near Me" Visibility',
      "Google Map 3-Pack Ranking",
      "Backlink & Authority Building",
      "Performance Tracking & Reporting",
    ],
    outcome: "More traffic, more calls, and more qualified leads.",
    color: "from-indigo-500 to-blue-500",
    cta: {
      label: "Explore SEO Services",
      href: "/services/seo",
    },
  },
  {
    id: 7,
    title: "UI/UX Design",
    tagline: "Designed to Convert",
    description:
      "Design experiences users trust and act on, increasing conversions.",
    icon: "🎯",
    features: [
      "UI Design Systems & Components",
      "UX Flow & Journey Optimization",
      "Modern Visual Branding",
      "Conversion-Focused Landing Pages",
      "User Testing & Research",
      "Responsive Design",
    ],
    outcome: "Better usability, higher trust, and improved conversion rates.",
    color: "from-violet-500 to-purple-500",
    cta: {
      label: "Explore UI/UX Design",
      href: "/services/uiUx",
    },
  },
  {
    id: 8,
    title: "AI Search Optimization",
    tagline: "Next-Generation Visibility",
    description: "Get discovered in ChatGPT, Gemini, Copilot, and Perplexity.",
    icon: "🤖",
    features: [
      "Brand Entity Authority Setup",
      "AI-Readable Content Structuring",
      "Knowledge Graph Optimization",
      "Trust Signal Framework",
      "LLM Response Influence Strategy",
      "Multi-Platform AI Visibility",
    ],
    outcome: "Your business gets discovered even without traditional search.",
    color: "from-cyan-500 to-teal-500",
    cta: {
      label: "Explore AI Search Optimization",
      href: "/services/aISearchOptimization",
    },
  },
  {
    id: 9,
    title: "Website & E-Commerce",
    tagline: "Built to Convert",
    description:
      "Websites that sell, not just look good. Built for conversions.",
    icon: "🛒",
    features: [
      "SEO-Ready Architecture",
      "High-Speed & Mobile Optimization",
      "Clear Calls-to-Action",
      "Lead Capture & Funnel Integration",
      "Conversion-Focused Development",
      "Analytics & Tracking Setup",
    ],
    outcome: "A website that turns visitors into customers automatically.",
    color: "from-red-500 to-orange-500",
    cta: {
      label: "Explore Website & E-Commerce",
      href: "/services/web&AppDevelopment",
    },
  },
];

const generalFaqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer complete digital marketing solutions including SEO, Google Ads (PPC), social media marketing, content marketing, website optimization, email marketing, and lead generation campaigns tailored to your business goals.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "It depends on the service. Paid ads can generate leads within days, while SEO usually takes 3–6 months for strong ranking improvements. We focus on both short-term growth and long-term performance.",
  },
  {
    question: "Do you provide SEO and Google Ads together?",
    answer:
      "Yes. In fact, combining SEO and Google Ads is one of the best strategies. Ads bring instant visibility, while SEO builds long-term organic traffic and reduces cost per lead over time.",
  },
  {
    question: "How do you measure campaign performance?",
    answer:
      "We track performance using key metrics like traffic, conversions, lead quality, ROI, CTR, cost per lead, and engagement. You also receive clear monthly reports with insights and improvement strategies.",
  },
  {
    question: "Will you manage my social media accounts?",
    answer:
      "Yes. We handle complete social media management including content planning, creative design, posting schedules, audience engagement, and paid social campaigns across platforms like Instagram, Facebook, LinkedIn, and Twitter.",
  },
  {
    question: "Do you offer custom plans for businesses?",
    answer:
      "Absolutely. Every business has different goals, so we create customized marketing plans based on your industry, target audience, competition, and budget to ensure maximum results and scalability.",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* <ServiceHero /> */}
      <InnerHero
        title="Our Services"
        subtitle="Everything you need to grow your brand, visibility, and conversions."
        bgImage="/innerHero.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-destructive mb-4">
              Our Complete Digital Growth Ecosystem
            </h2>
            <p className="text-lg text-destructive max-w-2xl mx-auto">
              Instead of hiring multiple agencies, you get everything in one
              place — aligned strategies, unified execution, and result-driven
              marketing.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      <WhyChooseSection />
       <FaqAccordion
        title="Service FAQs"
        subtitle="Everything you need to know about our services."
        linkText="Please contact our friendly team."
        linkHref="/contact"
        faqs={generalFaqs}
        defaultOpenIndex={0}
      />
      <ServiceCTA />
    </main>
  );
}
