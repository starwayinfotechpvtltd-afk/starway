"use client";

import InnerHero from "@/components/Common/InnerHero";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  TrendingUp,
  BarChart,
  Users,
  MessageCircle,
  Video,
  Rocket,
  MessageSquare,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Camera,
  PenTool,
  Settings,
  FileText,
  Search,
  Handshake,
  Phone,
  BarChart3,
  Layers,
  ShieldCheck,
  Users as UsersIcon,
  Target as TargetIcon,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import SocialMediaTabs from "@/components/Services/SocialMediaTabs";
import WhyChooseCarousel from "@/components/Services/InnerWhyChooseUs";
import FinalServiceCTA from "@/components/Services/InnerServiceCTA";
import FaqAccordion from "@/components/FaqAccordion";

export default function SocialMediaPage() {
  // Platforms we manage
  const platforms = [
    {
      icon: Instagram,
      name: "Instagram",
      description: "Visual storytelling & community building",
      focus: "Reels, Stories, & Grid Content",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: Facebook,
      name: "Facebook",
      description: "Community groups & brand awareness",
      focus: "Groups, Live Videos, & Ads",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      description: "B2B networking & professional branding",
      focus: "Company Pages & Industry Content",
      color: "from-blue-700 to-blue-900",
    },
    {
      icon: Youtube,
      name: "YouTube",
      description: "Video content & educational series",
      focus: "Long-form & Shorts Content",
      color: "from-red-600 to-red-700",
    },
    {
      icon: Twitter,
      name: "Twitter (X)",
      description: "Real-time conversations & trends",
      focus: "Trending Topics & Engagement",
      color: "from-gray-900 to-black",
    },
  ];

  // Our services included
  const services = [
    {
      icon: FileText,
      title: "Content Strategy & Calendars",
      description: "Monthly content planning aligned with your business goals",
      features: [
        "Thematic Planning",
        "Content Pillars",
        "Posting Schedule",
        "Campaign Integration",
      ],
    },
    {
      icon: Camera,
      title: "Creative Design & Visuals",
      description: "Brand-aligned graphics, photos, and video content",
      features: [
        "Visual Identity",
        "Template Creation",
        "Custom Graphics",
        "Brand Guidelines",
      ],
    },
    {
      icon: Video,
      title: "Reels & Short-Form Video",
      description: "Trend-driven video content optimized for each platform",
      features: [
        "Concept Development",
        "Video Editing",
        "Trend Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: PenTool,
      title: "Captions & Hashtag Strategy",
      description: "Compelling copywriting and strategic hashtag research",
      features: [
        "Brand Voice",
        "Hashtag Research",
        "Call-to-Actions",
        "SEO Optimization",
      ],
    },
    {
      icon: MessageSquare,
      title: "Community Management",
      description:
        "Active engagement and relationship building with your audience",
      features: [
        "Comment Responses",
        "DMs Management",
        "Community Building",
        "Crisis Management",
      ],
    },
    {
      icon: BarChart,
      title: "Performance Tracking",
      description: "Comprehensive analytics and data-driven optimization",
      features: [
        "Monthly Reports",
        "KPI Tracking",
        "ROI Analysis",
        "Strategy Refinement",
      ],
    },
  ];

  // Our process
  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Deep dive into your brand, audience, and competitors",
      activities: [
        "Brand Audit",
        "Audience Analysis",
        "Competitor Research",
        "Platform Analysis",
      ],
      icon: Search,
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create comprehensive content and engagement strategy",
      activities: [
        "Content Pillars",
        "Brand Voice",
        "Engagement Strategy",
        "Goal Setting",
      ],
      icon: TargetIcon,
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Design and produce all visual and written content",
      activities: [
        "Content Calendar",
        "Creative Production",
        "Copywriting",
        "Scheduling",
      ],
      icon: Camera,
    },
    {
      step: "04",
      title: "Community Building",
      description: "Engage with your audience and build relationships",
      activities: [
        "Daily Engagement",
        "Growth Initiatives",
        "Relationship Building",
        "Feedback Collection",
      ],
      icon: UsersIcon,
    },
    {
      step: "05",
      title: "Optimization",
      description: "Analyze performance and refine strategy",
      activities: [
        "Performance Analysis",
        "A/B Testing",
        "Strategy Adjustment",
        "ROI Tracking",
      ],
      icon: Settings,
    },
  ];

  // Expected outcomes
  const outcomes = [
    {
      metric: "87%",
      title: "Higher Engagement Rates",
      description: "Consistent, quality content drives more interactions",
    },
    {
      metric: "5.2x",
      title: "Brand Recognition",
      description: "Strong visual identity increases brand recall",
    },
    {
      metric: "215%",
      title: "Follower Growth",
      description: "Strategic growth techniques attract quality followers",
    },
    {
      metric: "94%",
      title: "Audience Loyalty",
      description: "Community building creates brand advocates",
    },
    {
      metric: "4.8/5",
      title: "Trust Score",
      description: "Authentic engagement builds credibility",
    },
  ];

  // Who it's best for
  const targetAudiences = [
    {
      title: "Brands Building Presence",
      description: "Businesses establishing long-term social media footprint",
      icon: Building,
      features: [
        "Consistent branding",
        "Audience growth",
        "Market positioning",
      ],
    },
    {
      title: "Startups Creating Awareness",
      description: "New businesses needing quick market visibility",
      icon: Rocket,
      features: ["Rapid awareness", "Early adopters", "Market validation"],
    },
    {
      title: "E-commerce & D2C Brands",
      description: "Product-based businesses driving sales through social",
      icon: ShoppingBag,
      features: ["Visual showcasing", "Direct sales", "Customer reviews"],
    },
    {
      title: "Coaches & Creators",
      description: "Personal brands building authority and community",
      icon: Users,
      features: [
        "Authority building",
        "Community growth",
        "Content monetization",
      ],
    },
    {
      title: "Service Businesses",
      description: "Professional services establishing credibility",
      icon: Briefcase,
      features: ["Testimonials", "Case studies", "Industry authority"],
    },
  ];
  // Why choose us
  const socialMediaWhyChoose = [
    {
      icon: Handshake,
      title: "Solutions, Not Sales",
      desc: "We take time to understand your brand, audience behavior, and business challenges before recommending strategies that truly fit your goals.",
    },
    {
      icon: Target,
      title: "Strategy First",
      desc: "Every campaign starts with in-depth research, competitive analysis, and clear KPIs to ensure measurable and outcome-driven execution.",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      desc: "We track engagement, reach, conversions, and growth metrics with complete transparency, so you always know what’s working and why.",
    },
    {
      icon: Layers,
      title: "Integrated Team",
      desc: "Our designers, content strategists, media buyers, and analysts collaborate closely to deliver cohesive and high-performing campaigns.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      desc: "We follow structured workflows, data security best practices, and reliable delivery timelines with ongoing support and maintenance.",
    },
    {
      icon: Rocket,
      title: "Growth Focused",
      desc: "Our strategies are built for long-term scalability, helping your brand adapt, grow, and stay competitive in evolving digital landscapes.",
    },
  ];

  // Case studies
  const caseStudies = [
    {
      client: "Wellness Brand",
      before: {
        followers: "2.4k",
        engagement: "1.2%",
        reach: "5k/month",
      },
      after: {
        followers: "24.8k",
        engagement: "8.7%",
        reach: "150k/month",
      },
      results: [
        "312% follower growth",
        "625% engagement increase",
        "Featured in industry publications",
      ],
    },
    {
      client: "B2B SaaS Company",
      before: {
        followers: "1.8k",
        engagement: "0.8%",
        leads: "12/month",
      },
      after: {
        followers: "15.2k",
        engagement: "4.3%",
        leads: "85/month",
      },
      results: [
        "744% follower growth",
        "437% engagement increase",
        "608% more qualified leads",
      ],
    },
    {
      client: "Local Restaurant Chain",
      before: {
        followers: "3.2k",
        engagement: "2.1%",
        reservations: "45/week",
      },
      after: {
        followers: "18.7k",
        engagement: "9.8%",
        reservations: "210/week",
      },
      results: [
        "484% follower growth",
        "367% engagement increase",
        "367% reservation increase",
      ],
    },
  ];

  // FAQ
  // Social Media FAQs
  const socialMediaFaqs = [
    {
      question: "Which social media platforms do you manage?",
      answer:
        "We manage a wide range of social media platforms including Facebook, Instagram, LinkedIn, Twitter (X), TikTok, and YouTube. Our strategies are customized based on your target audience and business goals.",
    },
    {
      question: "Do you create content for social media posts?",
      answer:
        "Yes, our team handles the entire content creation process including graphics, captions, hashtags, and posting schedules. We focus on creating engaging content that strengthens your brand and connects with your audience.",
    },
    {
      question: "Can social media marketing help grow my business?",
      answer:
        "Absolutely. Social media marketing helps increase brand awareness, build trust with your audience, drive website traffic, and generate leads or sales when executed with the right strategy.",
    },
    {
      question: "Do you run paid social media advertising campaigns?",
      answer:
        "Yes, we manage paid advertising campaigns on platforms like Facebook, Instagram, and LinkedIn. Our team optimizes campaigns to maximize reach, engagement, and return on investment.",
    },
    {
      question: "How do you measure social media performance?",
      answer:
        "We track key metrics such as engagement rate, follower growth, reach, impressions, and conversions. Detailed monthly reports help you understand how your social media presence is improving over time.",
    },
    {
      question:
        "How long does it take to see results from social media marketing?",
      answer:
        "Social media growth takes time, but businesses typically start seeing noticeable engagement and audience growth within 2–3 months of consistent strategy and content execution.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerHero
        title="Social Media Marketing That Builds Brands"
        subtitle="Brand growth, community building, and engagement that turns followers into customers"
        bgImage="/SMM_services.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Social Media Marketing" },
        ]}
      />

      {/* What Is Social Media Marketing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl -z-10 opacity-50" />

              <div className="relative bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  More Than Just Posts
                </h2>

                <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                  <p>
                    Social media marketing is about more than posting regularly.
                    It’s about storytelling, consistency, and building
                    relationships.
                  </p>
                  <p>
                    We transform your social presence into a growth engine that
                    builds trust and drives real business results.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FEATURES */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "Community First",
                  desc: "Build relationships, not just follower counts",
                  color: "blue",
                  icon: <Users className="w-6 h-6 text-blue-600" />,
                },
                {
                  title: "Storytelling",
                  desc: "Share your brand story through compelling content",
                  color: "gray",
                  icon: <Video className="w-6 h-6 text-pink-600" />,
                },
                {
                  title: "Consistent Growth",
                  desc: "Steady, sustainable growth through planning",
                  color: "purple",
                  icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
                },
                {
                  title: "Real Engagement",
                  desc: "Meaningful conversations that build loyalty",
                  color: "green",
                  icon: <MessageCircle className="w-6 h-6 text-green-600" />,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* STATS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "24/7", label: "Brand Visibility", color: "blue" },
              { value: "2-Way", label: "Communication", color: "pink" },
              { value: "360°", label: "Brand Experience", color: "purple" },
              { value: "365", label: "Days of Engagement", color: "green" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`bg-${stat.color}-50 rounded-2xl p-6 text-center`}
              >
                <div
                  className={`text-3xl font-bold text-${stat.color}-600 mb-1`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Social Media Matters - Visual Timeline */}
      <SocialMediaTabs />

      {/* Platforms We Manage - Icon Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              Platforms We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media management across every major platform
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {platforms.map((platform, idx) => {
                const Icon = platform.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-3 md:p-6 border border-gray-200 hover:shadow-xl transition-all h-full text-center">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {platform.name}
                      </h3>
                      <p className="hidden md:block text-gray-600 text-sm mb-3">
                        {platform.description}
                      </p>
                      <div className="hidden md:block text-xs font-medium text-gray-500">
                        {platform.focus}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="hidden md:block mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-1">5</div>
                  <div className="text-blue-200">Platforms Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-blue-200">Community Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-blue-200">Engagement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">∞</div>
                  <div className="text-blue-200">Content Possibilities</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included - Hexagonal Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Social Media Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for a successful social media presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Hexagon background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>

                  <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm group-hover:shadow-xl transition-all h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expected Outcomes - Metric Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              Expected Outcomes & Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What you can expect from strategic social media management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transform group-hover:scale-105 transition-transform"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow h-full">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    {outcome.metric}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-600">{outcome.description}</p>

                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Current</span>
                      <span>Target</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${70 + idx * 5}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process – Responsive Flow */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
              Our 5-Step Social Media Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, repeatable system designed for consistency, growth,
              and measurable results.
            </p>
          </motion.div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* LEFT – STEPS */}
            <div className="lg:col-span-2 space-y-8">
              {process.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                  >
                    {/* Step badge */}
                    <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold">
                      Step {step.step}
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="hidden sm:flex w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100  items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>

                        <p className="text-gray-600 mb-5 leading-relaxed">
                          {step.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {step.activities.map((activity, aIdx) => (
                            <div
                              key={aIdx}
                              className="flex items-center gap-2 text-sm text-gray-700"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT – STICKY SUMMARY */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-900 rounded-3xl p-10 text-white shadow-xl">
                <h3 className="text-3xl font-bold mb-4">
                  Our Proven Framework
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Each step builds on the previous one — creating momentum,
                  clarity, and predictable growth for your brand.
                </p>

                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    Strategy before execution
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    Content aligned with goals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    Data-driven optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    Long-term sustainable growth
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Service Is Best For - Profile Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Who Needs Social Media Marketing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services deliver exceptional results for businesses that fit
              these profiles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="hidden sm:flex w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {audience.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {audience.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {audience.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="text-xs text-gray-500">Ideal for:</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {audience.title.includes("Brands") && (
                          <>
                            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                              Retail
                            </span>
                            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                              Services
                            </span>
                          </>
                        )}
                        {audience.title.includes("Startups") && (
                          <>
                            <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">
                              Tech
                            </span>
                            <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">
                              Innovation
                            </span>
                          </>
                        )}
                        {audience.title.includes("E-commerce") && (
                          <>
                            <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">
                              Products
                            </span>
                            <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">
                              Direct Sales
                            </span>
                          </>
                        )}
                        {audience.title.includes("Coaches") && (
                          <>
                            <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                              Personal Brand
                            </span>
                            <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                              Authority
                            </span>
                          </>
                        )}
                        {audience.title.includes("Service") && (
                          <>
                            <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-full text-xs">
                              Professional
                            </span>
                            <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-full text-xs">
                              B2B
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Swiper Cards */}
      <WhyChooseCarousel
        title="Why Choose Our Social Media Services?"
        subtitle="We help brands build trust, engagement, and long-term growth."
        items={socialMediaWhyChoose}
        autoplayDelay={3500}
        theme={{
          bgFrom: "#1a2d5f",
          bgTo: "#0f1f3f",
          accent: "#255EC8",
        }}
      />

      {/* Case Studies - Before/After */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Social Media Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from brands we've helped transform on social media
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Before */}
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-500 mb-4">
                      Before Working With Us
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-2xl font-bold text-gray-400">
                          {study.before.followers}
                        </div>
                        <div className="text-gray-500 text-sm">Followers</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-400">
                          {study.before.engagement}
                        </div>
                        <div className="text-gray-500 text-sm">
                          Engagement Rate
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-400">
                          {study.before.reach}
                        </div>
                        <div className="text-gray-500 text-sm">
                          Monthly Reach
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Client & Results */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                      Case Study
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {study.client}
                    </h3>
                    <div className="space-y-2">
                      {study.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-500 mb-4">
                      After 6 Months
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {study.after.followers}
                        </div>
                        <div className="text-gray-500 text-sm">Followers</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {study.after.engagement}
                        </div>
                        <div className="text-gray-500 text-sm">
                          Engagement Rate
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {study.after.reach}
                        </div>
                        <div className="text-gray-500 text-sm">
                          Monthly Reach
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

      {/* FAQs - Accordion Style */}
      {/* FAQs */}
      <FaqAccordion
        title="Social Media Marketing FAQs"
        subtitle="Find answers to common questions about our social media strategy, content creation, audience growth, and performance analytics."
        linkText="Need help growing your brand online? Talk to our social media experts."
        linkHref="/contact"
        faqs={socialMediaFaqs}
      />

      {/* Final CTA */}
      <FinalServiceCTA
        icon={Users}
        title="Ready to Build a Strong Social Media Presence?"
        description="We help brands grow authentic audiences, create engaging content, and turn social media into a consistent growth channel."
        formTitle="Get Your Free Social Media Strategy"
        challenges={[
          { value: "low-engagement", label: "Low Engagement on Posts" },
          {
            value: "inconsistent-posting",
            label: "Inconsistent Content Posting",
          },
          { value: "no-strategy", label: "No Clear Social Media Strategy" },
          { value: "low-followers", label: "Slow Follower Growth" },
          {
            value: "poor-branding",
            label: "Weak Brand Presence on Social Media",
          },
          { value: "other", label: "Other Social Media Challenge" },
        ]}
        primaryCta={{
          text: "Get a Session",
          icon: Users,
        }}
        secondaryCta={{
          text: "Schedule a Call",
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

// Additional icon components needed
function Building(props) {
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
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <path d="M9 22v-4h6v4"></path>
      <path d="M8 6h.01"></path>
      <path d="M16 6h.01"></path>
      <path d="M12 6h.01"></path>
      <path d="M12 10h.01"></path>
      <path d="M12 14h.01"></path>
      <path d="M16 10h.01"></path>
      <path d="M16 14h.01"></path>
      <path d="M8 10h.01"></path>
      <path d="M8 14h.01"></path>
    </svg>
  );
}

function ShoppingBag(props) {
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
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
}

function Briefcase(props) {
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
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  );
}

function Palette(props) {
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
      <circle cx="13.5" cy="6.5" r=".5"></circle>
      <circle cx="17.5" cy="10.5" r=".5"></circle>
      <circle cx="8.5" cy="7.5" r=".5"></circle>
      <circle cx="6.5" cy="12.5" r=".5"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
    </svg>
  );
}
