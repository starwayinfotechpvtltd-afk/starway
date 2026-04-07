"use client";

import InnerHero from "@/components/Common/InnerHero";
import FaqAccordion from "@/components/FaqAccordion";
import FinalServiceCTA from "@/components/Services/InnerServiceCTA";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Heart,
  Award,
  Zap,
  Palette,
  Layout,
  MessageSquare,
  Users,
  Rocket,
  BarChart,
  Star,
  Shield,
  Globe,
  Lightbulb,
  FileText,
  Eye,
  Sparkles,
  ShieldCheck,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function BrandingPage() {
  // Brand pillars data
  const brandPillars = [
    {
      icon: MessageSquare,
      title: "Brand Voice & Personality",
      description:
        "How your brand communicates—tone, language, and personality traits that make your messaging unique and memorable.",
      elements: [
        "Brand Voice Guidelines",
        "Communication Style",
        "Brand Personality Traits",
        "Tone of Voice Examples",
      ],
    },
    {
      icon: Palette,
      title: "Visual Identity System",
      description:
        "Comprehensive visual elements that create instant recognition and convey your brand's essence.",
      elements: [
        "Logo & Logomark System",
        "Color Psychology Palette",
        "Typography Hierarchy",
        "Imagery & Photography Style",
      ],
    },
    {
      icon: Users,
      title: "Customer Experience Design",
      description:
        "How customers interact with your brand across all touchpoints, from discovery to advocacy.",
      elements: [
        "Customer Journey Mapping",
        "Touchpoint Design",
        "Brand Experience Standards",
        "Interaction Guidelines",
      ],
    },
    {
      icon: Globe,
      title: "Market Positioning",
      description:
        "Strategic placement in the competitive landscape that defines your unique value and differentiation.",
      elements: [
        "Competitive Analysis",
        "Market Positioning Strategy",
        "Unique Value Proposition",
        "Target Audience Definition",
      ],
    },
  ];

  // Our methodology
  const methodology = [
    {
      step: "01",
      title: "Discovery & Research",
      description:
        "Deep dive into your business, market, competitors, and audience to uncover core insights.",
      activities: [
        "Stakeholder Interviews",
        "Market Analysis",
        "Audience Research",
        "Brand Audit",
      ],
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Define your brand positioning, messaging, and strategic foundation for all future decisions.",
      activities: [
        "Brand Positioning",
        "Messaging Framework",
        "Value Proposition",
        "Brand Architecture",
      ],
    },
    {
      step: "03",
      title: "Identity Creation",
      description:
        "Design and develop the complete visual and verbal identity system that brings your brand to life.",
      activities: [
        "Visual Identity Design",
        "Brand Voice Development",
        "Design System Creation",
        "Brand Guidelines",
      ],
    },
    {
      step: "04",
      title: "Implementation",
      description:
        "Roll out your new brand identity across all channels and touchpoints with precision and consistency.",
      activities: [
        "Brand Launch Strategy",
        "Asset Migration",
        "Team Training",
        "Ongoing Support",
      ],
    },
  ];

  // Impact metrics
  const impactMetrics = [
    {
      icon: BarChart,
      value: "3.5x",
      label: "Higher Brand Recall",
      description: "Strong branding increases customer recall and recognition",
    },
    {
      icon: TrendingUp,
      value: "45%",
      label: "More Website Traffic",
      description:
        "Consistent branding improves digital presence and discovery",
    },
    {
      icon: Heart,
      value: "68%",
      label: "Customer Loyalty",
      description: "Emotional connection drives repeat business and referrals",
    },
    {
      icon: Award,
      value: "2.8x",
      label: "Premium Pricing Power",
      description: "Strong brands command higher prices in their market",
    },
  ];

  // Service tiers
  const serviceTiers = [
    {
      title: "Brand Foundation",
      idealFor: "Startups & New Ventures",
      description:
        "Essential brand identity for businesses launching or repositioning",
      features: [
        "Brand Strategy Workshop",
        "Logo & Visual Identity",
        "Basic Brand Guidelines",
        "Color & Typography System",
        "Social Media Kit",
      ],
      deliverables: [
        "Logo Package",
        "Brand Style Guide",
        "Brand Strategy Document",
        "Social Media Templates",
      ],
    },
    {
      title: "Brand Growth",
      idealFor: "Growing Businesses",
      description:
        "Comprehensive branding for businesses ready to scale and dominate",
      features: [
        "Complete Brand Strategy",
        "Full Visual Identity System",
        "Brand Voice & Messaging",
        "Competitive Analysis",
        "Brand Applications",
        "Marketing Collateral",
      ],
      deliverables: [
        "Complete Brand Guidelines",
        "Brand Assets Library",
        "Marketing Templates",
        "Brand Implementation Plan",
      ],
    },
    {
      title: "Brand Transformation",
      idealFor: "Established Companies",
      description:
        "Enterprise-level branding for market leaders and legacy brands",
      features: [
        "Enterprise Brand Strategy",
        "Complete Rebrand Package",
        "Brand Architecture",
        "Team Training & Workshops",
        "Brand Governance System",
        "Ongoing Brand Management",
      ],
      deliverables: [
        "Brand Playbook",
        "Digital Brand System",
        "Brand Training Materials",
        "Quarterly Brand Reviews",
      ],
    },
  ];

  // Case study highlights
  const caseStudies = [
    {
      client: "TechScale Solutions",
      industry: "B2B SaaS",
      challenge: "Undifferentiated in crowded market",
      solution: "Complete brand strategy & visual identity",
      results: [
        "245% increase in lead generation",
        "38% higher conversion rates",
        "Established as category leader",
      ],
    },
    {
      client: "Artisan Goods Co.",
      industry: "Premium Retail",
      challenge: "Premium quality, commodity perception",
      solution: "Luxury branding & customer experience design",
      results: [
        "72% increase in average order value",
        "Expanded to 3 new markets",
        "Featured in industry publications",
      ],
    },
    {
      client: "HealthFlow Wellness",
      industry: "Healthcare Technology",
      challenge: "Complex technology, need for trust",
      solution: "Human-centered brand & trust-building design",
      results: [
        "89% patient trust score",
        "Partnerships with 50+ clinics",
        "Industry award for design excellence",
      ],
    },
  ];
  // Branding FAQs
const brandingFaqs = [
  {
    question: "What does branding include?",
    answer:
      "Branding includes the development of your brand strategy, logo design, visual identity, typography, color palette, brand voice, and guidelines. Our goal is to create a consistent and memorable brand presence that connects with your target audience.",
  },
  {
    question: "Why is branding important for a business?",
    answer:
      "Strong branding helps businesses build trust, recognition, and credibility in the market. A well-defined brand makes it easier for customers to understand your values, differentiate you from competitors, and remember your business.",
  },
  {
    question: "Do you create custom logos and brand identities?",
    answer:
      "Yes, we design custom logos and complete brand identity systems tailored to your business vision and industry. Every element is carefully crafted to ensure your brand stands out and communicates the right message.",
  },
  {
    question: "Will I receive brand guidelines after the project?",
    answer:
      "Yes, we provide comprehensive brand guidelines that include logo usage, color systems, typography, spacing rules, and design standards. This ensures your brand remains consistent across all digital and marketing platforms.",
  },
  {
    question: "Can you rebrand an existing business?",
    answer:
      "Absolutely. We help businesses refresh or completely transform their brand identity to better align with their growth, target audience, and evolving market trends.",
  },
  {
    question: "How long does a branding project take?",
    answer:
      "Branding timelines depend on the scope of the project. A typical branding project may take between 3–6 weeks, including research, concept development, revisions, and final brand asset delivery.",
  },
];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerHero
        title="Strategic Brand Development"
        subtitle="Crafting enduring brand identities that drive growth, build trust, and create lasting impact"
        bgImage="/branding_services.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Brand Development" },
        ]}
      />

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
                Your Brand Is Your Most Valuable Asset
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We develop comprehensive brand systems that articulate your
                vision, connect with your audience, and drive measurable
                results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    Strategic foundation for all business decisions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    Creates emotional connection with your audience
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    Drives customer loyalty and premium pricing
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Strategic Alignment
                      </h4>
                      <p className="text-sm text-gray-600">
                        Brand that supports business objectives
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Audience Connection
                      </h4>
                      <p className="text-sm text-gray-600">
                        Build meaningful relationships with customers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Growth Acceleration
                      </h4>
                      <p className="text-sm text-gray-600">
                        Foundation for scalable market expansion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Brand Consistency
                      </h4>
                      <p className="text-sm text-gray-600">
                        Maintain a unified brand experience across all platforms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Pillars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#255EC8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 text-white" />
              Four Pillars of Powerful Branding
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Brand Development
            </h2>

            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We build brands on four interconnected pillars that create lasting
              impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {brandPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 border border-white/10 
                       hover:border-[#255EC8]/40 transition-all 
                       group hover:shadow-xl hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-xl bg-[#255EC8] flex items-center justify-center mb-6 
                            group-hover:scale-110 transition-transform shadow-md"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-3">
                    {pillar.elements.map((element, eIdx) => (
                      <div key={eIdx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#255EC8]"></div>
                        <span className="text-gray-700">{element}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-destructive text-sm font-medium mb-4">
              <Zap className="w-4 h-4 text-destructive" />
              Our Process
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              Strategic Brand Development Process
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A structured approach that transforms businesses into memorable
              brands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Desktop connector */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-white/30"></div>
                )}

                {/* Step indicator */}
                <div className="absolute -top-4 left-6 z-10">
                  <div
                    className="w-10 h-10 rounded-full bg-white border-2 border-[#255EC8] 
                            flex items-center justify-center shadow-sm"
                  >
                    <span className="text-sm font-bold text-[#255EC8]">
                      {phase.step}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className="bg-white rounded-xl p-6 border border-white/10 shadow-md 
                          hover:shadow-xl hover:border-[#255EC8]/30 transition-all h-full pt-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {phase.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {phase.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {phase.activities.map((activity, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#255EC8] mt-0.5" />
                        <span className="text-gray-700 text-sm">
                          {activity}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#255EC8]"
                        style={{ width: `${(idx + 1) * 25}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-[#255EC8]">
                      Step {idx + 1}/4
                    </span>
                  </div>
                </div>

                {/* Mobile connector */}
                {idx < 3 && (
                  <div
                    className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 
                            w-0.5 h-6 bg-white/30"
                  ></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#255EC8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Strong branding delivers tangible results that directly impact
              your bottom line
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {metric.label}
                  </h4>
                  <p className="text-blue-100 text-sm">{metric.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic Brand Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored approaches for businesses at different stages of growth
              and maturity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 border-2 ${
                  idx === 1
                    ? "bg-white border-blue-600 shadow-2xl transform scale-105"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                    {tier.idealFor}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Core Features
                  </h4>
                  <div className="space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle
                          className={`w-5 h-5 ${
                            idx === 1 ? "text-blue-600" : "text-green-600"
                          } flex-shrink-0 mt-0.5`}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Key Deliverables
                  </h4>
                  <div className="space-y-2">
                    {tier.deliverables.map((deliverable, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                        <span className="text-gray-600 text-sm">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#255EC8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transformative Brand Stories
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real results from businesses that transformed through strategic
              branding
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((caseStudy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 transition-colors"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {caseStudy.client}
                        </h3>
                        <div className="text-blue-600 font-medium">
                          {caseStudy.industry}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Challenge
                        </h4>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Solution
                        </h4>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-6">
                      Results Achieved
                    </h4>
                    <div className="space-y-4">
                      {caseStudy.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
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
  title="Branding Services FAQs"
  subtitle="Find answers to common questions about our branding strategy, brand identity design, and how we help businesses build memorable and impactful brands."
  linkText="Want to build a powerful brand? Speak with our branding experts."
  linkHref="/contact"
  faqs={brandingFaqs}
/>
      {/* Call to Action */}
      <FinalServiceCTA
        icon={Palette}
        title="Ready to Build a Brand People Remember?"
        description="We help brands define their identity, voice, and visual presence to create trust, recognition, and long-term impact."
        formTitle="Get Your Free Brand Consultation"
        challenges={[
          { value: "identity", label: "Lack of Clear Brand Identity" },
          { value: "consistency", label: "Inconsistent Brand Messaging" },
          { value: "recognition", label: "Low Brand Recognition" },
          { value: "positioning", label: "Unclear Market Positioning" },
          { value: "rebrand", label: "Need Rebranding or Refresh" },
          { value: "other", label: "Other Branding Challenge" },
        ]}
        primaryCta={{
          text: "Start Strategy",
          icon: Palette,
        }}
        secondaryCta={{
          text: "Schedule Call",
          icon: Phone,
        }}
        contactInfo={[
          { icon: Phone, text: "Call us: +91 98765 43210" },
          { icon: MessageCircle, text: "WhatsApp Available" },
        ]}
      />
    </main>
  );
}
