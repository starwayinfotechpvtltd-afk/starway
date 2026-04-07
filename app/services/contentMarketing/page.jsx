"use client";

import InnerHero from "@/components/Common/InnerHero";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  BarChart,
  Users,
  PenTool,
  FileText,
  Search,
  MessageSquare,
  Calendar,
  Award,
  Shield,
  BookOpen,
  Mail,
  Share2,
  Sparkles,
  Star,
  Rocket,
  Layers,
  Book,
  Type,
  Quote,
  GraduationCap,
  Globe,
  MessageCircle,
  Brain,
  Lightbulb,
  Phone,
  Download,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WhyChooseCarousel from "@/components/Services/InnerWhyChooseUs";
import FaqAccordion from "@/components/FaqAccordion";
import FinalServiceCTA from "@/components/Services/InnerServiceCTA";

// ─── DATA ──────────────────────────────────────────────────────────────────────

const trustBenefits = [
  { icon: Shield, title: "Builds Credibility & Expertise", description: "Position your brand as an industry authority through valuable insights", stat: "3.8x more trusted" },
  { icon: GraduationCap, title: "Educates Before Selling", description: "Guide customers through their buying journey with helpful content", stat: "72% better conversion" },
  { icon: Search, title: "Supports SEO & Organic Traffic", description: "Attract qualified leads through search-optimized content", stat: "5.2x more organic traffic" },
  { icon: MessageSquare, title: "Strengthens Brand Messaging", description: "Create consistent brand voice across all touchpoints", stat: "68% brand recall" },
  { icon: TrendingUp, title: "Improves Conversion Rates", description: "Qualified traffic converts better than cold audiences", stat: "45% higher conversions" },
];

const services = [
  { icon: Type, title: "Website Copywriting", description: "Compelling brand messaging for your digital presence", features: ["Homepage & About Page", "Service/Product Pages", "Landing Page Copy", "Value Proposition"], color: "from-blue-600 to-indigo-600" },
  { icon: FileText, title: "Blog Articles & SEO", description: "Search-optimized content that drives organic traffic", features: ["SEO Topic Research", "Long-form Blog Articles", "Topic Clusters", "Keyword Optimization"], color: "from-green-600 to-emerald-600" },
  { icon: BookOpen, title: "Case Studies & Stories", description: "Social proof that demonstrates real-world results", features: ["Customer Success Stories", "Detailed Case Studies", "Testimonial Collection", "Social Proof Integration"], color: "from-purple-600 to-pink-600" },
  { icon: Quote, title: "Testimonials & Proof", description: "Build trust through authentic customer experiences", features: ["Testimonial Strategy", "Review Collection", "Social Proof Pages", "Trust-Building Content"], color: "from-amber-600 to-orange-600" },
  { icon: Calendar, title: "Content Planning", description: "Strategic roadmap for consistent content delivery", features: ["Editorial Calendar", "Content Strategy", "Publishing Schedule", "Campaign Planning"], color: "from-red-600 to-rose-600" },
  { icon: BarChart, title: "Performance Tracking", description: "Data-driven optimization for maximum ROI", features: ["Content Analytics", "ROI Measurement", "Performance Reports", "Optimization Strategy"], color: "from-indigo-600 to-blue-800" },
];

const process = [
  { step: "01", title: "Discovery & Research", description: "Deep dive into your brand, audience, and competitive landscape", activities: ["Brand Voice Analysis", "Audience Persona Development", "Competitor Content Audit", "Keyword Research"], icon: Search, color: "from-blue-600 to-indigo-600" },
  { step: "02", title: "Strategy Development", description: "Create comprehensive content strategy aligned with business goals", activities: ["Content Pillars Definition", "Topic Cluster Planning", "Content Calendar Creation", "Distribution Strategy"], icon: Target, color: "from-green-600 to-emerald-600" },
  { step: "03", title: "Content Creation", description: "Produce high-quality, strategic content across formats", activities: ["Copywriting & Editing", "SEO Optimization", "Visual Content Creation", "Quality Assurance"], icon: PenTool, color: "from-purple-600 to-pink-600" },
  { step: "04", title: "Distribution & Amplification", description: "Strategic publishing and promotion across channels", activities: ["Multi-Channel Publishing", "Social Media Promotion", "Email Integration", "Repurposing Strategy"], icon: Share2, color: "from-amber-600 to-orange-600" },
  { step: "05", title: "Analysis & Optimization", description: "Continuous improvement based on performance data", activities: ["Performance Analytics", "ROI Measurement", "Content Refresh Strategy", "Strategy Refinement"], icon: BarChart, color: "from-red-600 to-rose-600" },
];

const contentTypes = [
  { icon: Globe, title: "Website Copy", description: "Foundational content that tells your brand story", examples: ["Homepage", "About Us", "Services", "Contact"], format: "Core Pages", color: "bg-gradient-to-br from-blue-100 to-blue-50" },
  { icon: Book, title: "Blog Articles", description: "Educational content that builds expertise", examples: ["How-to Guides", "Industry Insights", "Trend Analysis", "Educational"], format: "Long-form", color: "bg-gradient-to-br from-green-100 to-green-50" },
  { icon: Users, title: "Case Studies", description: "Social proof that demonstrates results", examples: ["Success Stories", "Client Results", "Project Reviews", "Testimonials"], format: "Storytelling", color: "bg-gradient-to-br from-purple-100 to-purple-50" },
  { icon: Mail, title: "Email Content", description: "Direct communication that nurtures relationships", examples: ["Newsletters", "Drip Campaigns", "Educational Series", "Updates"], format: "Nurturing", color: "bg-gradient-to-br from-amber-100 to-amber-50" },
  { icon: MessageSquare, title: "Social Media", description: "Engaging content that builds community", examples: ["LinkedIn Articles", "Twitter Threads", "Facebook Posts", "Instagram"], format: "Social", color: "bg-gradient-to-br from-red-100 to-red-50" },
  { icon: Layers, title: "Repurposed Content", description: "Maximize content ROI across formats", examples: ["Infographics", "Videos", "Podcasts", "Presentations"], format: "Multi-format", color: "bg-gradient-to-br from-indigo-100 to-indigo-50" },
];

const outcomes = [
  { metric: "4.2x", title: "Brand Authority", description: "Position as industry thought leader", icon: Award },
  { metric: "68%", title: "Customer Trust", description: "Higher trust scores from educated customers", icon: Shield },
  { metric: "3.5x", title: "Quality Leads", description: "Better-qualified inbound inquiries", icon: Target },
  { metric: "5.8x", title: "SEO Visibility", description: "Higher organic search rankings", icon: Search },
  { metric: "42%", title: "Conversion Lift", description: "Improved conversion from traffic", icon: TrendingUp },
  { metric: "24/7", title: "Lead Generation", description: "Continuous lead generation engine", icon: Users },
];

const targetAudiences = [
  { title: "Brands Building Trust", description: "Companies establishing long-term credibility and authority", icon: Shield, industries: ["Enterprise", "Professional Services", "Consulting"], benefits: ["Industry authority", "Thought leadership", "Premium positioning"] },
  { title: "SaaS & B2B Companies", description: "Complex solutions needing educational content", icon: Brain, industries: ["Technology", "Software", "Enterprise"], benefits: ["Lead nurturing", "Product education", "Sales enablement"] },
  { title: "Service Businesses", description: "Expertise-based services requiring proof of results", icon: Users, industries: ["Consulting", "Agencies", "Professional Services"], benefits: ["Case studies", "Testimonials", "Expert positioning"] },
  { title: "Startups & Scale-ups", description: "New businesses establishing market presence", icon: Rocket, industries: ["Startups", "Scale-ups", "Innovation"], benefits: ["Market education", "Brand building", "Investor confidence"] },
  { title: "SEO-Focused Businesses", description: "Companies leveraging content for organic growth", icon: Search, industries: ["E-commerce", "Education", "Information"], benefits: ["Organic traffic", "Keyword dominance", "Backlink opportunities"] },
];

const contentMarketingWhyChoose = [
  { icon: Target, title: "Strategy-Driven Content", desc: "Every piece serves a strategic purpose, not just filler content" },
  { icon: PenTool, title: "Brand Voice Alignment", desc: "Consistent messaging that sounds like you" },
  { icon: BookOpen, title: "Business-Focused Storytelling", desc: "Content that drives business outcomes, not just engagement" },
  { icon: BarChart, title: "Data-Backed Topics", desc: "Content planning based on search data and audience insights" },
  { icon: Award, title: "Quality Consistency", desc: "Maintain high standards across all content production" },
  { icon: Lightbulb, title: "Creative Innovation", desc: "Fresh approaches to content that stands out" },
];

const caseStudies = [
  {
    client: "B2B SaaS Platform", industry: "Technology", challenge: "Low brand awareness in competitive market", solution: "Educational content hub with industry insights",
    results: ["312% organic traffic growth", "45 high-quality leads/month", "Industry award for content excellence", "Featured in top publications"],
    metrics: { before: { Traffic: "2.8k/mo", Leads: "8/month", Authority: "Low" }, after: { Traffic: "11.5k/mo", Leads: "53/month", Authority: "High" } },
  },
  {
    client: "Financial Advisory Firm", industry: "Finance", challenge: "Trust deficit in crowded market", solution: "Educational content building financial literacy",
    results: ["68% increase in consultation requests", "4.8/5 trust rating from clients", "Regular industry speaking invitations", "Published book based on content"],
    metrics: { before: { Trust: "3.2/5", Leads: "12/month", Recognition: "Local" }, after: { Trust: "4.8/5", Leads: "42/month", Recognition: "National" } },
  },
  {
    client: "Healthcare Technology", industry: "Healthcare", challenge: "Complex product requiring education", solution: "Patient and provider educational content",
    results: ["5.2x website engagement increase", "28% faster sales cycle", "Industry partnerships formed", "Regulatory compliance excellence"],
    metrics: { before: { Education: "Basic", Adoption: "Slow", Authority: "Low" }, after: { Education: "Comprehensive", Adoption: "Fast", Authority: "Leader" } },
  },
];

const contentMarketingFaqs = [
  { question: "How long does content marketing take to show results?", answer: "Initial engagement improvements appear within 30–60 days. Meaningful organic traffic growth takes 4–6 months, with significant authority and lead generation results evident by 8–12 months." },
  { question: "Do you write SEO-optimized content?", answer: "Absolutely. All our content is optimized for SEO — keyword research, semantic SEO, topic clustering, and technical optimization included. We create content that ranks well while delivering genuine value." },
  { question: "Can you match our brand voice?", answer: "Yes. We start every engagement with comprehensive brand voice analysis and create detailed tone guidelines to ensure all content aligns with your brand personality." },
  { question: "How often should we publish content?", answer: "We typically recommend 2–4 high-quality pieces per week for blogs plus supporting content. Consistency and quality always win over quantity." },
  { question: "Is content marketing worth it for my business?", answer: "If you're looking for sustainable growth, absolutely. Content marketing generates 3x more leads than traditional marketing and costs 62% less — building long-term assets that work 24/7." },
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────────

export default function ContentMarketingPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* ── Hero ── */}
      <InnerHero
        title="Content Marketing That Builds Authority"
        subtitle="Turn your brand into a trusted expert customers choose first"
        bgImage="/content-marketing-services.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Content Marketing" },
        ]}
      />

      {/* ── What Is Content Marketing ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Left: Card */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg">
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Content Marketing is How Brands Earn Trust
                </h2>
                <p className="text-sm sm:text-lg text-gray-600 mb-4 leading-relaxed">
                  Content marketing is how brands earn trust before selling. By sharing valuable, relevant, and consistent content, you position your business as the expert customers rely on when making decisions.
                </p>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                  It's not about selling — it's about serving. Becoming the go-to resource so that when customers are ready to buy, they choose you first.
                </p>
              </div>
            </motion.div>

            {/* Right: pillars + stats */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="space-y-5 mb-8">
                {[
                  { icon: Users, color: "from-blue-100 to-blue-50", iconColor: "text-blue-600", title: "Educational Foundation", desc: "Build knowledge before asking for business" },
                  { icon: Shield, color: "from-indigo-100 to-indigo-50", iconColor: "text-indigo-600", title: "Trust Building", desc: "Establish credibility through consistent value" },
                  { icon: TrendingUp, color: "from-purple-100 to-purple-50", iconColor: "text-purple-600", title: "Sustainable Growth", desc: "Long-term results vs. short-term tactics" },
                  { icon: Search, color: "from-green-100 to-green-50", iconColor: "text-green-600", title: "SEO Asset Creation", desc: "Build search assets that work 24/7" },
                ].map(({ icon: Icon, color, iconColor, title, desc }, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-0.5">{title}</h3>
                      <p className="text-xs sm:text-base text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Content Builds Trust ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Content Builds Trust & Drives Growth
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The strategic advantage of becoming a trusted industry resource
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {trustBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }}>
                  <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full flex flex-col">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-xs sm:text-base text-gray-600 mb-4 flex-1">{benefit.description}</p>
                    <div className="pt-3 border-t border-gray-100">
                      <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold">
                        {benefit.stat}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs sm:text-sm font-medium mb-4">
              <PenTool className="w-3.5 h-3.5 shrink-0" />
              Comprehensive Content Solutions
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What's Included in Our Content Services
            </h2>
            <p className="text-sm sm:text-xl text-gray-200 max-w-3xl mx-auto">
              End-to-end content strategy, creation, and optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="group">
                  <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 group-hover:border-blue-300 group-hover:shadow-xl transition-all h-full">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-xs sm:text-base text-gray-500 mb-4">{service.description}</p>
                    <div className="space-y-1.5">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
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

      {/* ── Our Process ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Strategic Content Process
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building authority through content
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line — lg only */}
            <div className="hidden lg:block absolute left-[2.75rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 pointer-events-none" />

            <div className="space-y-5 sm:space-y-8">
              {process.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="relative lg:pl-24">
                    {/* Step badge — lg only */}
                    <div className="hidden lg:flex absolute left-0 top-4 w-[5.5rem] items-center justify-start">
                      <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-base shadow`}>
                        {step.step}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                        {/* Mobile step badge */}
                        <div className="flex items-center gap-3 sm:hidden">
                          <div className={`w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                            <p className="text-xs text-gray-500">{step.description}</p>
                          </div>
                        </div>

                        {/* Desktop header */}
                        <div className="hidden sm:flex items-center gap-3 sm:w-1/3 shrink-0">
                          <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">{step.title}</h3>
                            <p className="text-xs text-gray-500 leading-snug">{step.description}</p>
                          </div>
                        </div>

                        {/* Activities */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 flex-1">
                          {step.activities.map((activity, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-gray-700">{activity}</span>
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
        </div>
      </section>

      {/* ── Types of Content ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Types of Content We Create
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile content formats for every stage of the customer journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {contentTypes.map((content, idx) => {
              const Icon = content.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }} className="group">
                  <div className={`${content.color} rounded-2xl p-5 sm:p-8 border border-gray-200 group-hover:border-blue-300 group-hover:shadow-xl transition-all h-full`}>
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-white border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">{content.format}</div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900">{content.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-base text-gray-600 mb-4">{content.description}</p>
                    <div className="space-y-1.5">
                      {content.examples.map((example, eIdx) => (
                        <div key={eIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">{example}</span>
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

      {/* ── Expected Outcomes ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Expected Content Marketing Results
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              What strategic content delivers for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {outcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="group">
                  <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        {outcome.metric}
                      </div>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">{outcome.title}</h3>
                    <p className="text-xs sm:text-base text-gray-600 mb-4">{outcome.description}</p>
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Industry Average</span><span>Our Average</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 rounded-full" style={{ width: `${65 + idx * 5}%` }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Summary strip */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mt-10 sm:mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { value: "3.5x", label: "More Qualified Leads" },
                  { value: "42%", label: "Higher Conversion Rate" },
                  { value: "5.2x", label: "Organic Traffic Growth" },
                  { value: "4.8/5", label: "Trust & Authority Score" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-1">{s.value}</div>
                    <div className="text-blue-200 text-xs sm:text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Who It's Best For ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Who Needs Strategic Content Marketing?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach delivers exceptional results for these business profiles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {targetAudiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="group">
                  <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-start gap-3 sm:gap-4 mb-5">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 leading-tight">{audience.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{audience.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {audience.industries.map((industry, iIdx) => (
                        <span key={iIdx} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">{industry}</span>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      {audience.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
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

      {/* ── Why Choose Us (Swiper) ── */}
<WhyChooseCarousel
  title="Why Choose Our Content Marketing Services?"
  subtitle="We create high-quality, SEO-driven content that attracts audiences, builds authority, and drives consistent business growth."
  items={contentMarketingWhyChoose}
  autoplayDelay={3500}
  theme={{
    bgFrom: "#1a2d5f",
    bgTo: "#0f1f3f",
    accent: "#255EC8",
  }}
/>

      {/* ── Case Studies ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Content Marketing Success Stories
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from brands we've helped build authority through content
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-10">
            {caseStudies.map((study, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:shadow-lg transition-all">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

                    {/* Info + results */}
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-3">Case Study</span>
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">{study.client}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3"><strong>Industry:</strong> {study.industry}</p>
                      <p className="text-xs sm:text-sm text-gray-700 mb-1"><strong>Challenge:</strong> {study.challenge}</p>
                      <p className="text-xs sm:text-sm text-gray-700 mb-4"><strong>Solution:</strong> {study.solution}</p>
                      <div className="space-y-1.5">
                        {study.results.map((result, rIdx) => (
                          <div key={rIdx} className="flex items-center gap-2">
                            <TrendingUp className="w-3.5 h-3.5 text-green-500 shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 sm:p-6">
                      <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mb-4 text-center">Results Comparison</h4>
                      <div className="space-y-4">
                        {Object.keys(study.metrics.before).map((key, i) => {
                          const colors = ["from-blue-500 to-indigo-500", "from-green-500 to-emerald-500", "from-purple-500 to-pink-500"];
                          const widths = [85, 78, 92];
                          return (
                            <div key={i}>
                              <div className="flex flex-wrap justify-between text-xs text-gray-600 mb-1.5 gap-1">
                                <span className="font-medium">{key}</span>
                                <div className="flex gap-3">
                                  <span>Before: <strong>{study.metrics.before[key]}</strong></span>
                                  <span>After: <strong className="text-blue-600">{study.metrics.after[key]}</strong></span>
                                </div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className={`bg-gradient-to-r ${colors[i]} h-2 rounded-full`} style={{ width: `${widths[i]}%` }} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
<FaqAccordion
  title="Content Marketing FAQs"
  subtitle="Find answers to common questions about our content strategy, SEO content creation, blog writing, and content distribution services."
  linkText="Have more questions? Talk with our content marketing experts."
  linkHref="/contact"
  faqs={contentMarketingFaqs}
/>

      {/* ── Final CTA ── */}
<FinalServiceCTA
  icon={PenTool}
  title="Ready to Grow with Strategic Content Marketing?"
  description="We create high-quality, SEO-driven content that attracts the right audience, builds brand authority, and drives consistent organic growth."
  formTitle="Get Your Free Content Marketing Consultation"
  challenges={[
    {
      value: "low-traffic",
      label: "Low Website Traffic from Search Engines",
    },
    {
      value: "no-content-strategy",
      label: "No Clear Content Marketing Strategy",
    },
    {
      value: "poor-seo-content",
      label: "Content Not Ranking on Google",
    },
    {
      value: "low-engagement",
      label: "Low Audience Engagement with Content",
    },
    {
      value: "inconsistent-publishing",
      label: "Inconsistent Blog or Content Publishing",
    },
    {
      value: "other",
      label: "Other Content Marketing Challenge",
    },
  ]}
  primaryCta={{
    text: "Get Free Audit",
    icon: PenTool,
  }}
  secondaryCta={{
    text: "Schedule a Call",
    icon: Phone,
  }}
  contactInfo={[
    { icon: Phone, text: "Call us: +91 98765 43210" },
    { icon: MessageCircle, text: "WhatsApp Content Marketing Support Available" },
  ]}
/>
    </main>
  );
}