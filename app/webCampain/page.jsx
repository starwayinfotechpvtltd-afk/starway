"use client";
import { useState } from "react";

import BlogAboutSection from "@/components/WebCampain/BlogAboutSection";
import ServicesSection from "@/components/WebCampain/ServicesSection";
import StackDecode from "@/components/WebCampain/StackDecode";
import WebDevHero from "@/components/WebCampain/WebDevHero";
import WhyChooseUs from "@/components/WebCampain/WhyChooseUs";
import PortfolioShowcaseSection from "@/components/WebCampain/PortfolioShowcaseSection";
import ProcessSection from "@/components/WebCampain/ProcessSection";
import TestimonialsSection from "@/components/WebCampain/TestimonialsSection";
import ServiceCTA from "@/components/Services/ServiceCTA";
import FaqAccordion from "@/components/FaqAccordion";

const generalFaqs = [
  {
    question: "What type of development services do you provide?",
    answer:
      "We provide full-stack web development, SaaS application development, custom software solutions, admin dashboards, eCommerce platforms, and API integrations. Our team handles everything from UI/UX design to backend architecture and deployment.",
  },
  {
    question: "Do you build scalable SaaS platforms?",
    answer:
      "Yes. We specialize in building scalable SaaS platforms with multi-tenant architecture, role-based access control, subscription systems, and secure cloud deployment to support long-term growth.",
  },
  {
    question: "Which technologies do you use for development?",
    answer:
      "We work with modern technologies like Next.js, React, Node.js, Express, MySQL, PostgreSQL, MongoDB, and cloud platforms such as AWS and Vercel. The tech stack is selected based on your project requirements and scalability needs.",
  },
  {
    question: "How long does a typical development project take?",
    answer:
      "Project timelines vary depending on complexity. A standard business website may take 2–4 weeks, while custom SaaS or enterprise applications can take 6–12 weeks or more. We provide a clear roadmap before starting.",
  },
  {
    question: "Do you provide UI/UX design along with development?",
    answer:
      "Absolutely. We design modern, conversion-focused, and user-friendly interfaces before development begins. Our design process includes wireframing, prototyping, and usability optimization.",
  },
  {
    question: "Will my website or application be mobile responsive?",
    answer:
      "Yes. All our projects are fully responsive and optimized for desktop, tablet, and mobile devices to ensure seamless performance across all screen sizes.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes. We provide ongoing support, performance monitoring, bug fixes, feature upgrades, and security updates to ensure your platform remains stable and future-ready.",
  },
  {
    question: "Can you integrate payment gateways and third-party APIs?",
    answer:
      "Definitely. We integrate secure payment gateways like Stripe, Razorpay, and PayPal, along with third-party APIs such as CRM systems, analytics tools, email services, and more.",
  },
];

export default function WebDevelopmentPage() {
  // const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden">
      {/* ================= HERO ================= */}
      <WebDevHero />

      {/* ================= PORTFOLIO ================= */}
      <PortfolioShowcaseSection />     
       {/* ================= SERVICES ================= */}
      <ServicesSection />
      {/* ================= TESTIMONIALS ================= */}
      <TestimonialsSection />
      {/* ================= PROCESS ================= */}
      <ProcessSection />
      {/* ==============Why choose us============== */}
      <WhyChooseUs />
      {/* ==================About================== */}
      <BlogAboutSection />
      {/* ================= STATS ================= */}
      <StackDecode />
      {/* ================= FAQ ================= */}
      <FaqAccordion
        title="Service FAQs"
        subtitle="Everything you need to know about our services."
        linkText="Please contact our friendly team."
        linkHref="/contact"
        faqs={generalFaqs}
        defaultOpenIndex={0}
      />
      {/* ==============cta==================== */}
      <ServiceCTA />
    </main>
  );
}
