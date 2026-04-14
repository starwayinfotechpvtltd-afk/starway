"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Code,
  Palette,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Layers,
  MessageCircle,
  Phone,
  Rocket,
  Box,
  RefreshCw,
  ShoppingCart,
  Building,
  GraduationCap,
  CreditCard,
  HeartPulse,
  Target,
  Headphones,
  LayoutDashboard,
  GitBranch,
  LifeBuoy,
} from "lucide-react";
import InnerHero from "@/components/Common/InnerHero";
import WhyChooseCarousel from "@/components/Services/InnerWhyChooseUs";
import FinalServiceCTA from "@/components/Services/InnerServiceCTA";
import TechnologyStackGrid from "@/components/Services/TechnologyStackGrid";
import FaqAccordion from "@/components/FaqAccordion";

export default function WebAppDevelopmentPage() {
  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "In-depth analysis of requirements, goals, and target audience",
      icon: Target,
      activities: [
        "Requirement gathering",
        "Competitor analysis",
        "Technical planning",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "UI/UX Design",
      description:
        "Creating intuitive, beautiful interfaces with user journeys",
      icon: Palette,
      activities: ["Wireframing", "Prototyping", "User testing"],
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development with clean, scalable code architecture",
      icon: Code,
      activities: [
        "Frontend development",
        "Backend integration",
        "API creation",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous testing across devices and platforms",
      icon: CheckCircle,
      activities: ["Unit testing", "Performance testing", "Security audit"],
      color: "from-amber-500 to-orange-500",
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth launch with monitoring and optimization",
      icon: Rocket,
      activities: [
        "App store deployment",
        "Website launch",
        "Performance monitoring",
      ],
      color: "from-red-500 to-rose-500",
    },
    {
      number: "06",
      title: "Support & Growth",
      description: "Ongoing maintenance, updates, and scaling support",
      icon: TrendingUp,
      activities: ["Maintenance", "Feature updates", "Performance scaling"],
      color: "from-indigo-500 to-violet-500",
    },
  ];

  // Use cases
  const useCases = [
    {
      icon: Building,
      title: "Business & Corporate",
      description: "Professional websites and internal tools for enterprises",
      features: ["Corporate portals", "Employee dashboards", "Client portals"],
      color: "blue",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Marketplaces",
      description: "Scalable online stores and multi-vendor platforms",
      features: [
        "Payment integration",
        "Inventory management",
        "Order tracking",
      ],
      color: "purple",
    },
    {
      icon: GraduationCap,
      title: "EdTech Platforms",
      description: "Learning management systems and educational apps",
      features: [
        "Course management",
        "Progress tracking",
        "Virtual classrooms",
      ],
      color: "green",
    },
    {
      icon: CreditCard,
      title: "FinTech Solutions",
      description: "Secure financial applications and banking platforms",
      features: [
        "Payment gateways",
        "Transaction tracking",
        "Financial analytics",
      ],
      color: "amber",
    },
    {
      icon: HeartPulse,
      title: "Healthcare Apps",
      description: "HIPAA-compliant medical platforms and patient portals",
      features: ["Appointment booking", "Patient records", "Telemedicine"],
      color: "red",
    },
    {
      icon: Box,
      title: "SaaS Products",
      description: "Subscription-based software with recurring billing",
      features: ["User management", "Subscription plans", "Usage analytics"],
      color: "indigo",
    },
  ];

  // Benefits
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Optimized code and infrastructure for instant loading times",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with SSL, encryption, and regular audits",
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description:
        "Grow your user base without worrying about performance issues",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces that drive engagement and conversions",
    },
    {
      icon: RefreshCw,
      title: "Easy Content Management",
      description: "Update content instantly with powerful CMS capabilities",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "24/7 technical support and regular maintenance updates",
    },
  ];

  // FAQs
  const generalFaqs = [
    {
      question: "Do you work with different CMS platforms?",
      answer:
        "Yes, we work with a wide range of CMS platforms including WordPress, Shopify, Webflow, headless CMS solutions, and fully custom CMS systems. Depending on your business requirements, we can implement, customize, or build a CMS that allows you to easily manage your content without technical expertise.",
    },
    {
      question: "Do you build custom web applications from scratch?",
      answer:
        "Absolutely. Our team specializes in advanced web application development using modern technologies. We design scalable architectures, write clean and optimized code, and build secure systems tailored to your specific business workflows and requirements.",
    },
    {
      question: "Can you develop both web applications and mobile apps?",
      answer:
        "Yes, we develop both web applications and mobile applications. Our solutions can be built with a shared backend and database infrastructure, ensuring seamless integration, better performance, and consistent user experience across all platforms.",
    },
    {
      question: "Do you handle database design and backend setup?",
      answer:
        "Yes, we provide complete backend development including database architecture, API development, server configuration, and system optimization. Whether it’s SQL or NoSQL databases, we ensure your application is secure, scalable, and built for long-term growth.",
    },
    {
      question: "How long does a typical development project take?",
      answer:
        "Project timelines depend on the complexity and scope of the solution. A standard website may take 4–6 weeks, while advanced web applications or integrated platforms may take 8–16 weeks. We provide a detailed roadmap and timeline before starting development.",
    },
    {
      question: "Do you provide maintenance and technical support?",
      answer:
        "Yes, we offer ongoing maintenance and support services including performance monitoring, security updates, feature enhancements, bug fixes, and infrastructure management to ensure your application continues to run smoothly.",
    },
  ];

  const webAppWhyChoose = [
    {
      icon: Layers,
      title: "End-to-End Development",
      desc: "From strategy and UI/UX to development, launch, and long-term support.",
    },
    {
      icon: LayoutDashboard,
      title: "CMS-Driven Solutions",
      desc: "Websites with powerful, easy-to-manage CMS for complete content control.",
    },
    {
      icon: GitBranch,
      title: "Scalable Architecture",
      desc: "Built to grow with your business, users, and feature requirements.",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Expertise",
      desc: "Seamless development for websites, iOS apps, and Android applications.",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      desc: "Optimized for speed, security, and exceptional user experience.",
    },
    {
      icon: LifeBuoy,
      title: "Long-Term Support",
      desc: "Reliable maintenance, updates, and optimization after launch.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <InnerHero
        title="Scalable Web & App Development"
        subtitle="High-performance websites and mobile apps built for speed, security, and real user engagement"
        bgImage="/web-app-development.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Web & App Development" },
        ]}
      />

      {/* What We Build - 3D Perspective Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              End-to-End Digital Product Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we design and develop conversion-focused
              websites with custom CMS and robust mobile applications that scale
              with your business.
            </p>
          </motion.div>

          {/* 3D Perspective Cards */}
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-8 relative z-10">
              {/* Website Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group perspective-1000"
              >
                <div className="relative transform-style-3d group-hover:rotate-y-10 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-200 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Website Development
                        </h3>
                        <p className="text-blue-600">With Powerful CMS</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {[
                        "Custom Website Design (UI/UX Focused)",
                        "CMS-Powered Content Management",
                        "SEO-Friendly Architecture",
                        "Fast, Secure & Responsive",
                        "Admin Dashboard & Role Management",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        CMS Options
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Custom CMS",
                          "Headless CMS",
                          "WordPress",
                          "Strapi",
                          "Sanity",
                        ].map((cms, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm border border-blue-200"
                          >
                            {cms}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile App Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group perspective-1000"
              >
                <div className="relative transform-style-3d group-hover:-rotate-y-10 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border border-purple-200 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Mobile App Development
                        </h3>
                        <p className="text-purple-600">iOS & Android Native</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {[
                        "iOS Apps (Swift / Cross-Platform)",
                        "Android Apps (Kotlin / Cross-Platform)",
                        "Cross-Platform Apps (Single Codebase)",
                        "API & Backend Integration",
                        "App Store & Play Store Deployment",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-purple-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Development Approach
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React Native",
                          "Flutter",
                          "Native iOS",
                          "Native Android",
                          "PWA",
                        ].map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white text-purple-600 rounded-full text-sm border border-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Development Process ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach ensuring clarity, quality, and timely
              delivery
            </p>
          </motion.div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Card */}
                  <div
                    className="h-full bg-white rounded-2xl p-2 border border-gray-200
                         shadow-sm hover:shadow-xl transition-all
                         hover:-translate-y-2"
                  >
                    {/* Step Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-blue-600">
                        Step {step.number}
                      </span>
                      <span className="text-3xl font-bold text-gray-900/10">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Activities */}
                    <div className="space-y-2">
                      {step.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-gray-700 text-sm">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Desktop Connector */}
                  {index < processSteps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5
                              bg-gradient-to-r from-blue-400 to-transparent"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack - Interactive Grid */}
      <TechnologyStackGrid />

      {/* Use Cases - Hexagonal Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              Solutions for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored digital products designed to solve specific business
              challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((usecase, index) => {
              const Icon = usecase.icon;
              const colorClasses = {
                blue: "from-blue-500 to-cyan-500",
                purple: "from-purple-500 to-pink-500",
                green: "from-green-500 to-emerald-500",
                amber: "from-amber-500 to-orange-500",
                red: "from-red-500 to-rose-500",
                indigo: "from-indigo-500 to-violet-500",
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full overflow-hidden">
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          colorClasses[usecase.color]
                        } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {usecase.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {usecase.description}
                      </p>

                      <div className="space-y-2">
                        {usecase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits - Floating Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              Why CMS-Driven & App-First Approach Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic advantages that drive business growth and operational
              efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg group-hover:shadow-2xl transition-all h-full">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Radial Layout */}
      <WhyChooseCarousel
        title="Why Choose Our Web & App Development Services?"
        subtitle="We build scalable websites and mobile applications designed for performance, growth, and long-term success."
        items={webAppWhyChoose}
        autoplayDelay={3500}
        theme={{
          bgFrom: "#1a2d5f",
          bgTo: "#0f1f3f",
          accent: "#255EC8",
        }}
      />

      {/* FAQs */}
      <FaqAccordion
        title="Web Application Development FAQs"
        subtitle="Find answers to common questions about our custom web application development services, process, timelines, and technologies."
        linkText="Still have questions? Speak with our development experts."
        linkHref="/contact"
        faqs={generalFaqs}
      />
      {/* Final CTA */}
      <FinalServiceCTA
        icon={Layers}
        title="Ready to Build Your Website or App?"
        description="We design and develop scalable websites with CMS and high-performance mobile apps for iOS and Android, built to support growth and long-term success."
        formTitle="Get Your Free Web & App Consultation"
        challenges={[
          {
            value: "no-website",
            label: "No Website or Mobile App Yet",
          },
          {
            value: "outdated-platform",
            label: "Outdated Website or Legacy Application",
          },
          {
            value: "no-cms",
            label: "No CMS or Difficult Content Management",
          },
          {
            value: "performance-issues",
            label: "Slow Performance or Technical Limitations",
          },
          {
            value: "scaling-issues",
            label: "Difficulty Scaling Features or Users",
          },
          {
            value: "other",
            label: "Other Web or App Development Challenge",
          },
        ]}
        primaryCta={{
          text: "Get a Session",
          icon: Layers,
        }}
        secondaryCta={{
          text: "Schedule a Call",
          icon: Phone,
        }}
        contactInfo={[
          { icon: Phone, text: "Call us: +91 98765 43210" },
          { icon: MessageCircle, text: "WhatsApp Web & App Support Available" },
        ]}
      />
    </main>
  );
}
