"use client";

import InnerHero from "@/components/Common/InnerHero";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Eye,
  Zap,
  Layout,
  Palette,
  Filter,
  Shield,
  BarChart,
  Search,
  Phone,
  MessageCircle,
  ShoppingBag,
  PenTool,
  Layers,
  PieChart,
  CheckSquare,
  XCircle,
  Sparkles,
  UserCheck,
  ThumbsUp,
  Cpu,
  Code,
  MousePointerClick,
  ShoppingCart,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import DesignExperiences from "@/components/Services/DesignExperiences";
import DesignImpactTabs from "@/components/Services/DesignImpactTabs";
import WhyChooseCarousel from "@/components/Services/InnerWhyChooseUs";
import FinalServiceCTA from "@/components/Services/InnerServiceCTA";
import FaqAccordion from "@/components/FaqAccordion";

export default function UiUxPage() {
  const [activePlatform, setActivePlatform] = useState("web");

  // Why UI/UX impacts conversions
  const impactSteps = [
    {
      icon: Eye,
      title: "Stronger First Impressions",
      desc: "Users form trust instantly through clean layouts, visual clarity, and intuitive structure.",
      stat: "94% impression-based",
    },
    {
      icon: MousePointerClick,
      title: "Higher Engagement",
      desc: "Well-placed CTAs, hierarchy, and interaction cues guide users naturally.",
      stat: "+48% interaction",
    },
    {
      icon: ThumbsUp,
      title: "Improved User Trust",
      desc: "Consistent UI patterns and predictable flows reduce friction and anxiety.",
      stat: "2.6s trust formation",
    },
    {
      icon: ShoppingCart,
      title: "Better Conversions",
      desc: "Optimized journeys turn visitors into leads and customers efficiently.",
      stat: "+35% conversion rate",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      desc: "Design systems ensure performance stays strong as traffic scales.",
      stat: "10x ROI impact",
    },
  ];

  // Services included
  const services = [
    {
      icon: Layout,
      title: "UI Design Systems",
      description: "Scalable design frameworks with reusable components",
      features: [
        "Component Libraries",
        "Design Tokens",
        "Style Guides",
        "Responsive Grids",
      ],
      deliverables: "Design System + Components",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      icon: Filter,
      title: "UX Flow Optimization",
      description: "User journey mapping and conversion funnel design",
      features: [
        "User Journey Maps",
        "Wireframe Prototypes",
        "Flow Analysis",
        "Conversion Paths",
      ],
      deliverables: "Flow Charts + Prototypes",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
    {
      icon: Palette,
      title: "Visual Interface Design",
      description: "Modern, brand-aligned interface design",
      features: [
        "High-Fidelity Mockups",
        "Interaction Design",
        "Visual Hierarchy",
        "Micro-interactions",
      ],
      deliverables: "Pixel-Perfect Designs",
      color: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
      icon: UserCheck,
      title: "Usability & Accessibility",
      description: "Inclusive design following WCAG guidelines",
      features: [
        "Accessibility Audits",
        "Usability Testing",
        "WCAG Compliance",
        "User Testing",
      ],
      deliverables: "Accessibility Report",
      color: "bg-gradient-to-br from-amber-50 to-amber-100",
    },
    {
      icon: Code,
      title: "Developer Handoff",
      description: "Seamless transition from design to development",
      features: [
        "Design Specs",
        "Asset Export",
        "Code Snippets",
        "Implementation Guides",
      ],
      deliverables: "Handoff Package",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    },
    {
      icon: PieChart,
      title: "Performance Tracking",
      description: "Data-driven design optimization",
      features: [
        "Analytics Integration",
        "A/B Testing Setup",
        "Heatmap Analysis",
        "Conversion Tracking",
      ],
      deliverables: "Performance Dashboard",
      color: "bg-gradient-to-br from-rose-50 to-rose-100",
    },
  ];

  // Our process - Interactive timeline
  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding users, business goals, and constraints",
      activities: [
        "User Interviews",
        "Competitor Analysis",
        "Market Research",
        "Goal Definition",
      ],
      icon: Search,
      duration: "1-2 Weeks",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Defining information architecture and user flows",
      activities: [
        "User Personas",
        "Journey Mapping",
        "Information Architecture",
        "Content Strategy",
      ],
      icon: Target,
      duration: "2 Weeks",
    },
    {
      step: "03",
      title: "Wireframing & Prototyping",
      description: "Creating low-fidelity blueprints and interactive flows",
      activities: [
        "Low-Fidelity Wireframes",
        "Interactive Prototypes",
        "User Testing",
        "Iteration",
      ],
      icon: PenTool,
      duration: "3-4 Weeks",
    },
    {
      step: "04",
      title: "Visual Design",
      description: "Applying visual style and creating high-fidelity designs",
      activities: [
        "Visual Style Guide",
        "High-Fidelity Mockups",
        "Design System",
        "Component Library",
      ],
      icon: Palette,
      duration: "4-6 Weeks",
    },
    {
      step: "05",
      title: "Testing & Delivery",
      description: "Final testing, refinement, and developer handoff",
      activities: [
        "Usability Testing",
        "Design QA",
        "Developer Handoff",
        "Implementation Support",
      ],
      icon: CheckSquare,
      duration: "2 Weeks",
    },
  ];

  // Why choose us
  const uiuxWhyChoose = [
    {
      icon: Target,
      title: "Conversion-First Design",
      desc: "Every design decision prioritizes user action and business goals",
    },
    {
      icon: Users,
      title: "User-Centric Research",
      desc: "Designs based on real user behavior and validated insights",
    },
    {
      icon: Layers,
      title: "Scalable Design Systems",
      desc: "Future-proof systems that grow with your business",
    },
    {
      icon: Code,
      title: "Developer Collaboration",
      desc: "Seamless handoff with detailed specs and implementation support",
    },
    {
      icon: BarChart,
      title: "Data-Driven Decisions",
      desc: "Design validation through analytics and user testing",
    },
    {
      icon: Sparkles,
      title: "Modern Aesthetics",
      desc: "Cutting-edge design trends with timeless usability principles",
    },
  ];

  // Case studies - Before/After slider
  const caseStudies = [
    {
      client: "Fintech Dashboard",
      challenge: "Complex data visualization causing user confusion",
      solution: "Simplified UI with progressive disclosure",
      beforeMetrics: { usability: "3.2/10", completion: "42%", time: "4.2min" },
      afterMetrics: { usability: "8.7/10", completion: "89%", time: "1.8min" },
      results: ["147% task completion", "57% faster", "4.5★ user rating"],
    },
    {
      client: "E-commerce Checkout",
      challenge: "28% cart abandonment at checkout",
      solution: "Streamlined 3-step checkout flow",
      beforeMetrics: { abandonment: "28%", time: "5.1min", mobile: "12%" },
      afterMetrics: { abandonment: "9%", time: "2.4min", mobile: "38%" },
      results: [
        "68% less abandonment",
        "53% faster",
        "3.2x mobile conversions",
      ],
    },
    {
      client: "SaaS Onboarding",
      challenge: "High drop-off during user onboarding",
      solution: "Interactive guided tour with progress tracking",
      beforeMetrics: {
        completion: "31%",
        retention: "28%",
        support: "42 tickets",
      },
      afterMetrics: {
        completion: "78%",
        retention: "62%",
        support: "8 tickets",
      },
      results: ["152% completion", "121% retention", "81% less support"],
    },
  ];

  // FAQ
  // UI/UX FAQs
  const uiuxFaqs = [
    {
      question: "What is the difference between UI and UX design?",
      answer:
        "UX (User Experience) focuses on how users interact with a product and how easily they can achieve their goals, while UI (User Interface) focuses on the visual elements such as layout, colors, typography, and components. Together, UI and UX create intuitive, engaging, and effective digital experiences.",
    },
    {
      question: "Do you provide UX research before starting the design?",
      answer:
        "Yes, our design process begins with user research, competitor analysis, and product strategy. This helps us understand user behavior, identify pain points, and create design solutions that improve usability and conversion rates.",
    },
    {
      question: "Can you redesign an existing website or application?",
      answer:
        "Absolutely. We specialize in redesigning outdated websites and applications to improve usability, visual appeal, and performance. Our redesign process focuses on modern UI patterns, better user flows, and improved engagement.",
    },
    {
      question: "Do you create design systems for scalable products?",
      answer:
        "Yes, we build scalable design systems that include reusable UI components, typography rules, color systems, and interaction guidelines. This ensures design consistency and faster development for future features.",
    },
    {
      question: "Will the design be mobile-friendly and responsive?",
      answer:
        "Yes, all our designs follow a mobile-first approach. We ensure that interfaces work seamlessly across desktops, tablets, and mobile devices to deliver a consistent and optimized user experience.",
    },
    {
      question: "Do you also support developers during implementation?",
      answer:
        "Yes, we collaborate closely with development teams by providing detailed design specifications, prototypes, and design assets. This ensures the final product matches the design vision and maintains a high-quality user experience.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <InnerHero
        title="UI/UX Design That Converts"
        subtitle="Design experiences users trust and act on—turning visits into conversions"
        bgImage="/uiux-services2.png"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "UI/UX Design" },
        ]}
      />

      {/* What Is UI/UX Design - Interactive Interface */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT – INTERACTIVE MOCKUP */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-2xl">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                    <Layout className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Interface Demo
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Conversion-focused design elements
                    </p>
                  </div>
                </div>

                {/* UI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* CTA */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                    <p className="text-sm font-semibold text-blue-700">
                      CTA Button
                    </p>
                    <p className="text-xs text-gray-600 mb-3">
                      Primary action focused
                    </p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg py-2 text-sm font-medium">
                      Get Started Now
                    </button>
                  </div>

                  {/* Input */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                    <p className="text-sm font-semibold text-green-700">
                      Form Field
                    </p>
                    <p className="text-xs text-gray-600 mb-3">
                      Minimal friction
                    </p>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
                    <span>User Progress</span>
                    <span>75% Complete</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-[75%] bg-gradient-to-r from-purple-500 to-pink-500" />
                  </div>
                </div>

                {/* Trust */}
                <div className="flex flex-wrap gap-4 justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">
                      Secure & Trusted
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700">
                      100% Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT – CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="will-change-transform transform-gpu"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Design Philosophy
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-destructive mb-6 leading-tight">
                Where Design Meets Conversion
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                UI/UX design defines how users experience your product. It
                blends intuitive navigation, visual clarity, and strategic
                intent to build trust and drive action.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Great design isn’t just beautiful—it removes friction, guides
                decisions, and creates seamless paths to conversion.
              </p>
            </motion.div>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                value: "10x",
                label: "ROI on good design",
                color: "text-purple-600",
              },
              {
                value: "94%",
                label: "First impressions design",
                color: "text-pink-600",
              },
              {
                value: "2.6s",
                label: "Trust formed visually",
                color: "text-blue-600",
              },
              {
                value: "75%",
                label: "Judge credibility by design",
                color: "text-green-600",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center"
              >
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-sm text-gray-700 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UI/UX Impacts Conversions */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Business Impact
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              Design That Turns Attention Into Revenue
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Strategic UI/UX design shapes user behavior, builds trust, and
              directly increases conversions and business growth.
            </p>
          </motion.div>

          {/* FLOW CARDS */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {impactSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
                  >
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {step.desc}
                    </p>

                    <div className="text-sm font-semibold text-blue-600">
                      {step.stat}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CONNECTING ARROWS (Desktop only) */}
          </div>
        </div>
      </section>

      {/* What's Included - Modular Design Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              Modular Design Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive UI/UX Design Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end design solutions for exceptional user experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div
                    className={`${service.color} rounded-2xl p-8 border border-gray-200 group-hover:border-blue-300 group-hover:shadow-2xl transition-all h-full relative overflow-hidden`}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                        <Icon className="w-7 h-7 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{service.desc}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="text-sm font-medium text-gray-900">
                          {service.deliverables}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process - Interactive Timeline */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-4">
              Our 5-Stage Design Process
            </h2>
            <p className="text-lg text-gray-600">
              A clear, structured workflow designed for consistency and results.
            </p>
          </motion.div>

          {/* DESKTOP – HORIZONTAL EQUAL HEIGHT */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-6 items-stretch">
              {process.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative h-full"
                  >
                    {/* CARD */}
                    <div className="h-full flex flex-col bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
                      {/* TOP */}
                      <div>
                        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">
                          Stage {step.step}
                        </span>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>

                        {/* FIXED DESCRIPTION HEIGHT */}
                        <p className="text-sm text-gray-600 leading-relaxed min-h-[72px]">
                          {step.description}
                        </p>
                      </div>

                      {/* BOTTOM – PUSHED DOWN */}
                      <div className="mt-auto pt-4 space-y-2">
                        {step.activities.slice(0, 3).map((activity, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            <span className="text-xs text-gray-700">
                              {activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CONNECTOR */}
                    {idx !== process.length - 1 && (
                      <ArrowRight className="absolute -right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* MOBILE – STACKED (AUTO HEIGHT OK) */}
          <div className="lg:hidden space-y-6">
            {process.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.activities.map((activity, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-xs text-gray-700">
                          {activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Experiences - Interactive Platform Switcher */}
      <DesignExperiences />

      <WhyChooseCarousel
        title="Why Choose Our UI/UX Design Services?"
        subtitle="We design intuitive, user-centric experiences that drive engagement and conversions."
        items={uiuxWhyChoose}
        autoplayDelay={3500}
        theme={{
          bgFrom: "#1a2d5f",
          bgTo: "#0f1f3f",
          accent: "#255EC8",
        }}
      />

      {/* Unified Design Impact & Fit Section */}

      <DesignImpactTabs />

      {/* Case Studies - Before/After Slider */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Design Transformation Stories
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
              Real design improvements that delivered measurable results
            </p>
          </motion.div>

          {/* CASE STUDIES */}
          <div className="space-y-8 lg:space-y-12">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-200 hover:shadow-xl transition-all"
              >
                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                  {/* BEFORE */}
                  <div className="text-center md:text-left lg:text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium mb-5">
                      <XCircle className="w-4 h-4" />
                      Before Redesign
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-400">
                          {study.beforeMetrics.usability}
                        </div>
                        <div className="text-gray-500 text-xs sm:text-sm">
                          Usability Score
                        </div>
                      </div>

                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-400">
                          {study.beforeMetrics.completion}
                        </div>
                        <div className="text-gray-500 text-xs sm:text-sm">
                          Task Completion
                        </div>
                      </div>

                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-400">
                          {study.beforeMetrics.time}
                        </div>
                        <div className="text-gray-500 text-xs sm:text-sm">
                          Average Time
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CASE STUDY INFO */}
                  <div className="text-center px-2 sm:px-4">
                    <div className="mb-5">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {study.client}
                      </h3>

                      <p className="text-gray-600 text-sm sm:text-base mb-3">
                        <strong>Challenge:</strong> {study.challenge}
                      </p>

                      <p className="text-gray-700 text-sm sm:text-base">
                        <strong>Solution:</strong> {study.solution}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {study.results.map((result, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AFTER */}
                  <div className="text-center md:text-left lg:text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs sm:text-sm font-medium mb-5">
                      <CheckSquare className="w-4 h-4" />
                      After Redesign
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">
                          {study.afterMetrics.usability}
                        </div>
                        <div className="text-green-700 text-xs sm:text-sm font-medium">
                          Usability Score
                        </div>
                      </div>

                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">
                          {study.afterMetrics.completion}
                        </div>
                        <div className="text-green-700 text-xs sm:text-sm font-medium">
                          Task Completion
                        </div>
                      </div>

                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">
                          {study.afterMetrics.time}
                        </div>
                        <div className="text-green-700 text-xs sm:text-sm font-medium">
                          Average Time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="UI/UX Design FAQs"
        subtitle="Get answers to common questions about our UI/UX design process, user research, design systems, and product experience strategy."
        linkText="Have more questions? Talk with our UX specialists."
        linkHref="/contact"
        faqs={uiuxFaqs}
      />

      {/* Final CTA */}
      <FinalServiceCTA
        icon={Layers}
        title="Ready to Design Experiences Users Love?"
        description="We craft intuitive, user-centric interfaces that improve usability, engagement, and conversion across digital products."
        formTitle="Get Your Free UI/UX Consultation"
        challenges={[
          {
            value: "poor-usability",
            label: "Poor User Experience and Navigation Issues",
          },
          {
            value: "low-conversion",
            label: "Low Conversion or Drop-Off Rates",
          },
          {
            value: "outdated-design",
            label: "Outdated or Inconsistent UI Design",
          },
          {
            value: "no-design-system",
            label: "Lack of a Scalable Design System",
          },
          {
            value: "user-retention",
            label: "Low User Engagement or Retention",
          },
          {
            value: "other",
            label: "Other UI/UX Design Challenge",
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
          { icon: MessageCircle, text: "WhatsApp Design Support Available" },
        ]}
      />
    </main>
  );
}

// Additional custom icons
function ArrowDown(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
  );
}

function Rocket(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
  );
}

function RefreshCw(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2v6h-6"></path>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
      <path d="M3 22v-6h6"></path>
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
    </svg>
  );
}
