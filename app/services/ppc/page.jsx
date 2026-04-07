"use client";

import InnerHero from "@/components/Common/InnerHero";
import FaqAccordion from "@/components/FaqAccordion";
import FinalServiceCTA from "@/components/Services/InnerServiceCTA";
import WhyChooseCarousel from "@/components/Services/InnerWhyChooseUs";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  TrendingUp,
  BarChart,
  Zap,
  Search,
  DollarSign,
  Users,
  Clock,
  Rocket,
  Shield,
  TrendingDown,
  PieChart,
  LineChart,
  Filter,
  Calendar,
  Smartphone,
  Monitor,
  Eye,
  MousePointer,
  Calculator,
  TrendingUp as TrendingUpIcon,
  Award,
  ChevronRight,
  BarChart3,
  Download,
  Phone,
  MessageSquare,
  ShoppingCart,
  Wrench,
  Building,
  HelpCircle,
  MousePointerClick,
  MessageCircle,
  Sliders,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";

export default function PpcPage() {
  // Platform expertise
  const platforms = [
    {
      image: "/images/services/ppcLogo/google-ads-logo.png",
      name: "Google Ads",
      description: "Search, Display, Shopping, & YouTube",
      highlight: "93% of online experiences begin here",
    },
    {
      image: "/images/services/ppcLogo/meta-logo-img.png",
      name: "Meta Ads",
      description: "Facebook & Instagram campaigns",
      highlight: "2.9 billion monthly active users",
    },
    {
      image: "/images/services/ppcLogo/linkedin-logo-img.png",
      name: "LinkedIn Ads",
      description: "B2B lead generation & branding",
      highlight: "4x higher conversion rates for B2B",
    },
    {
      image: "/images/services/ppcLogo/microsoft-logo-img.png",
      name: "Microsoft Ads",
      description: "Bing & partner network",
      highlight: "Reach 63 million searchers others miss",
    },
  ];

  // Why PPC works
  const benefits = [
    {
      icon: Zap,
      title: "Instant Traffic & Leads",
      description:
        "Start generating qualified traffic within 24 hours of campaign launch",
    },
    {
      icon: DollarSign,
      title: "Full Budget Control",
      description:
        "Set daily budgets, maximum bids, and pause campaigns anytime",
    },
    {
      icon: Target,
      title: "Laser-Targeted Audiences",
      description:
        "Reach specific demographics, interests, and buying behaviors",
    },
    {
      icon: TrendingUp,
      title: "Scalable Campaigns",
      description: "Start small and scale quickly based on proven performance",
    },
    {
      icon: BarChart,
      title: "Clear, Measurable ROI",
      description: "Track every dollar spent to revenue generated",
    },
    {
      icon: Clock,
      title: "Fast Optimization Cycles",
      description: "Make data-driven improvements daily for better results",
    },
  ];

  // Our process
  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Goal-setting, audience research, and competitive analysis",
      activities: [
        "Keyword Research",
        "Competitor Analysis",
        "Goal Definition",
        "Budget Planning",
      ],
    },
    {
      step: "02",
      title: "Campaign Creation",
      description: "Build optimized campaigns across selected platforms",
      activities: [
        "Ad Copy & Creative",
        "Landing Page Setup",
        "Conversion Tracking",
        "Bid Strategy Setup",
      ],
    },
    {
      step: "03",
      title: "Launch & Monitor",
      description: "Go live with continuous performance monitoring",
      activities: [
        "Campaign Launch",
        "Real-time Monitoring",
        "Initial Optimization",
        "Performance Reporting",
      ],
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Data-driven optimization for maximum ROI",
      activities: [
        "A/B Testing",
        "Bid Adjustments",
        "Audience Refinement",
        "Scale Successful Campaigns",
      ],
    },
  ];

  // Metrics and results
  const metrics = [
    {
      value: "43%",
      label: "Lower Cost Per Lead",
      description: "vs. industry average",
    },
    {
      value: "5.2x",
      label: "Higher ROI",
      description: "on average across clients",
    },
    {
      value: "68%",
      label: "Increase in Qualified Traffic",
      description: "within first 60 days",
    },
    {
      value: "<24h",
      label: "Campaign Launch Time",
      description: "from strategy to live",
    },
  ];

  //Why choose us
  const ppcWhyChoose = [
  {
    icon: MousePointerClick,
    title: "High-Intent Traffic",
    desc: "We target users actively searching for your products or services, ensuring every click has strong conversion potential.",
  },
  {
    icon: Target,
    title: "Laser-Focused Targeting",
    desc: "Advanced audience targeting using keywords, locations, devices, interests, and behaviors to reach the right users.",
  },
  {
    icon: BarChart3,
    title: "ROI-Driven Strategy",
    desc: "Every campaign is built around clear goals like leads, sales, or signups with continuous ROI optimization.",
  },
  {
    icon: Sliders,
    title: "Smart Budget Optimization",
    desc: "We allocate spend dynamically across campaigns and ads to maximize performance while controlling costs.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Reporting",
    desc: "You get clear reports on clicks, impressions, conversions, and costs with actionable performance insights.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    desc: "Our PPC frameworks are designed to scale smoothly as your business grows without performance drops.",
  },
]

  // Case studies
  const caseStudies = [
    {
      client: "B2B SaaS Platform",
      industry: "Technology",
      challenge: "High cost per acquisition",
      solution: "Multi-platform PPC strategy",
      results: [
        "62% lower CPA",
        "3.8x ROI increase",
        "450+ qualified leads/month",
      ],
    },
    {
      client: "E-commerce Retailer",
      industry: "Fashion",
      challenge: "Seasonal sales fluctuations",
      solution: "Dynamic remarketing campaigns",
      results: [
        "47% increase in ROAS",
        "28% higher AOV",
        "2.1x return on ad spend",
      ],
    },
    {
      client: "Local Service Business",
      industry: "Home Services",
      challenge: "Limited local visibility",
      solution: "Hyper-local targeting",
      results: [
        "89% local traffic increase",
        "34 booked jobs/month",
        "$78 cost per acquisition",
      ],
    },
  ];

  // FAQ
// PPC FAQs
const ppcFaqs = [
  {
    question: "What is PPC advertising?",
    answer:
      "PPC (Pay-Per-Click) advertising is a digital marketing strategy where businesses pay only when a user clicks on their advertisement. It allows companies to quickly reach targeted audiences through platforms like Google Ads, Bing Ads, and social media advertising networks.",
  },
  {
    question: "Which platforms do you run PPC campaigns on?",
    answer:
      "We manage PPC campaigns across major platforms including Google Ads, Microsoft Ads (Bing), Facebook Ads, Instagram Ads, and LinkedIn Ads. The platform selection depends on your target audience and campaign objectives.",
  },
  {
    question: "How do you choose the right keywords for campaigns?",
    answer:
      "Our team conducts detailed keyword research, competitor analysis, and search intent evaluation to identify high-performing keywords that drive qualified traffic and maximize conversions.",
  },
  {
    question: "How much budget do I need for PPC advertising?",
    answer:
      "PPC budgets vary depending on industry competition, keywords, and campaign goals. We help you determine an optimal budget that balances cost efficiency with measurable results and return on investment.",
  },
  {
    question: "How do you measure PPC campaign performance?",
    answer:
      "We track key performance indicators such as click-through rate (CTR), cost per click (CPC), cost per conversion, return on ad spend (ROAS), and overall campaign conversions to continuously optimize results.",
  },
  {
    question: "How quickly can PPC campaigns generate results?",
    answer:
      "Unlike many organic strategies, PPC campaigns can start generating traffic and leads almost immediately after launch. However, continuous optimization over the first few weeks helps improve performance and maximize return on investment.",
  },
];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerHero
        title="Pay-Per-Click That Converts"
        subtitle="Fast leads, lower cost per acquisition, and measurable ROI across every ad platform"
        bgImage="/ppc_hero.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "PPC Advertising" },
        ]}
      />

      {/* What Is PPC Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <MousePointer className="w-4 h-4" />
                What Is PPC Advertising?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
                Targeted Advertising That Delivers Immediate Results
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                PPC advertising puts your brand in front of ready-to-buy
                customers at the exact moment they're searching. You only pay
                when someone clicks, making it one of the fastest ways to
                generate qualified leads and sales.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    Pay only for actual clicks to your website
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    Show ads to users actively searching for your services
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    Complete control over budget and targeting
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
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                    <TrendingUpIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Real-Time Results
                    </h3>
                    <p className="text-gray-600">
                      Track performance as it happens
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Cost Per Click</span>
                      <span className="font-semibold text-gray-900">$2.45</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Conversion Rate</span>
                      <span className="font-semibold text-gray-900">8.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Return on Ad Spend</span>
                      <span className="font-semibold text-gray-900">4.7x</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Platform Expertise*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl -z-10"></div>

              <div className="grid grid-cols-2 gap-6">
                {platforms.map((platform, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all h-full">
                      <div className="flex flex-col items-center text-center">
                        {/* IMAGE */}
                        <div
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 
                          flex items-center justify-center mb-4 
                          group-hover:scale-110 transition-transform"
                        >
                          <Image
                            src={platform.image}
                            alt={platform.name}
                            width={36}
                            height={36}
                            className="object-contain"
                          />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {platform.name}
                        </h3>

                        <p className="text-gray-600 text-sm mb-3">
                          {platform.description}
                        </p>

                        <div className="mt-2 px-3 py-1 bg-blue-50 rounded-full">
                          <span className="text-blue-700 text-xs font-semibold">
                            {platform.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Platform Mastery
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
                Expert Management Across Every Major Platform
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We don't just run ads—we master each platform's unique
                algorithms, targeting capabilities, and optimization strategies
                to deliver maximum ROI.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <BarChart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Cross-Platform Strategy
                    </h4>
                    <p className="text-gray-600">
                      Integrated campaigns that work together across platforms
                      for maximum impact
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Platform-Specific Optimization
                    </h4>
                    <p className="text-gray-600">
                      Tailored strategies for each platform's unique audience
                      and ad formats
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#255EC8]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Performance Metrics
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Average results our clients achieve with strategic PPC management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {metric.label}
                </h4>
                <p className="text-blue-100 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              Our 4-Step PPC Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that delivers consistent, scalable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-6 -right-3 w-6 h-0.5 bg-blue-200"></div>
                )}

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all h-full">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.activities.map((activity, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-gray-700 text-sm">
                          {activity}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              Real PPC Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses achieve remarkable results with strategic PPC
              management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="mb-6">
                  <div className="text-blue-600 font-medium text-sm mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {study.client}
                  </h3>
                  <div className="text-gray-600 text-sm mb-4">
                    <strong>Challenge:</strong> {study.challenge}
                  </div>
                  <div className="text-gray-700 text-sm">
                    <strong>Solution:</strong> {study.solution}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Results Achieved
                  </h4>
                  <div className="space-y-2">
                    {study.results.map((result, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Expected Outcomes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              What You Can Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear, measurable results that directly impact your business
              growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all hover:translate-y-[-4px] group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900">24-48h</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Faster Lead Generation
              </h3>
              <p className="text-gray-600 mb-4">
                Start generating qualified leads within hours of campaign
                launch, not weeks
              </p>
              <div className="text-sm text-gray-500">
                Industry average: 7-14 days for organic results
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all hover:translate-y-[-4px] group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingDown className="w-7 h-7 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900">40-60%</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reduced Cost Per Lead
              </h3>
              <p className="text-gray-600 mb-4">
                Optimize your ad spend to achieve lower acquisition costs
                through data-driven targeting
              </p>
              <div className="text-sm text-gray-500">
                Average client savings: $45 per lead
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all hover:translate-y-[-4px] group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900">3-5x</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Higher Conversion Rates
              </h3>
              <p className="text-gray-600 mb-4">
                Improve conversion rates through optimized landing pages and
                targeted messaging
              </p>
              <div className="text-sm text-gray-500">
                Average increase from 2% to 8-10%
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all hover:translate-y-[-4px] group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="w-7 h-7 text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900">100%</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Clear ROI Visibility
              </h3>
              <p className="text-gray-600 mb-4">
                Real-time dashboards show exactly how much revenue each ad
                dollar generates
              </p>
              <div className="text-sm text-gray-500">
                Track every conversion back to its source
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all hover:translate-y-[-4px] group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LineChart className="w-7 h-7 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900">Daily</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Continuous Performance Improvement
              </h3>
              <p className="text-gray-600 mb-4">
                Regular optimization based on performance data ensures your
                campaigns keep getting better
              </p>
              <div className="text-sm text-gray-500">
                Weekly strategy adjustments based on results
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all hover:translate-y-[-4px] group bg-gradient-to-br from-blue-50 to-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900">4.2x</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Average ROAS
              </h3>
              <p className="text-gray-600 mb-4">
                Our clients achieve an average return of $4.20 for every $1
                spent on advertising
              </p>
              <div className="text-sm text-gray-500">
                Industry benchmark: 2.5x
              </div>
            </motion.div>
          </div>

          {/* Metrics Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Average Client Results After 90 Days
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-white mb-1">5.8x</div>
                <div className="text-blue-200 text-sm">ROI Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">52%</div>
                <div className="text-blue-200 text-sm">Lower CPA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">312%</div>
                <div className="text-blue-200 text-sm">
                  More Qualified Leads
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">94%</div>
                <div className="text-blue-200 text-sm">Client Retention</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <WhyChooseCarousel
        title="Why Choose Our PPC Advertising Services?"
        subtitle="We drive qualified traffic, maximize ROI, and scale your business with precision."
        items={ppcWhyChoose}
        autoplayDelay={3500}
        theme={{
          bgFrom: "#1a2d5f",
          bgTo: "#0f1f3f",
          accent: "#255EC8",
        }}
      />
      {/* Who PPC Is Best For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Who PPC Is Best For
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Is PPC Right For Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              PPC delivers exceptional results for businesses that fit these
              profiles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lead-generation businesses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white to-blue-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Filter className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Lead-Generation Businesses
              </h3>
              <p className="text-gray-600 mb-6">
                Service providers, agencies, and businesses that rely on
                qualified leads to drive revenue
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Immediate lead flow
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Cost-per-lead tracking
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Lead quality optimization
                  </span>
                </div>
              </div>
            </motion.div>

            {/* E-commerce brands */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white to-purple-50 rounded-xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                E-commerce Brands
              </h3>
              <p className="text-gray-600 mb-6">
                Online retailers looking to increase sales, average order value,
                and customer lifetime value
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Direct sales attribution
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Dynamic remarketing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Shopping campaign optimization
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Startups needing fast traction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white to-green-50 rounded-xl p-8 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Startups Needing Fast Traction
              </h3>
              <p className="text-gray-600 mb-6">
                New businesses looking to validate markets, acquire early
                customers, and accelerate growth
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Quick market validation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Rapid user acquisition
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Investor-ready metrics
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Service-based businesses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white to-orange-50 rounded-xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Service-Based Businesses
              </h3>
              <p className="text-gray-600 mb-6">
                Consultants, contractors, and professionals looking for
                high-value clients in specific locations
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Local targeting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    High-intent client acquisition
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Service-specific messaging
                  </span>
                </div>
              </div>
            </motion.div>

            {/* B2B companies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white to-indigo-50 rounded-xl p-8 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                B2B Companies
              </h3>
              <p className="text-gray-600 mb-6">
                Software, SaaS, and enterprise solutions targeting specific
                industries, job roles, or company sizes
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Account-based marketing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    LinkedIn targeting
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Long sales cycle optimization
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
{/* FAQs */}
<FaqAccordion
  title="PPC Advertising FAQs"
  subtitle="Find answers to common questions about our pay-per-click advertising services, campaign strategy, budget management, and performance optimization."
  linkText="Want to launch high-performing ad campaigns? Talk to our PPC specialists."
  linkHref="/contact"
  faqs={ppcFaqs}
/>

      {/* Final CTA */}
      <FinalServiceCTA
        icon={MousePointerClick}
        title="Ready to Turn Clicks Into Conversions?"
        description="We build high-performing PPC campaigns that drive qualified traffic, maximize ROI, and scale revenue with precision targeting."
        formTitle="Get Your Free PPC Strategy Review"
        challenges={[
          { value: "high-cpc", label: "High Cost Per Click (CPC)" },
          { value: "low-conversion", label: "Low Conversion Rate" },
          { value: "wasted-spend", label: "Wasted Ad Spend" },
          { value: "poor-targeting", label: "Poor Audience Targeting" },
          { value: "low-roi", label: "Low Return on Ad Spend (ROAS)" },
          { value: "scaling", label: "Unable to Scale Campaigns" },
          { value: "other", label: "Other PPC Challenge" },
        ]}
        primaryCta={{
          text: "Get PPC Audit",
          icon: MousePointerClick,
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
