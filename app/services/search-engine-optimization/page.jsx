"use client";

import InnerHero from "@/components/Common/InnerHero";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  TrendingUp,
  BarChart,
  Search,
  MapPin,
  Shield,
  Users,
  Clock,
  TrendingDown,
  Phone,
  MessageCircle,
  Building,
  ShoppingBag,
  HeartPulse,
  Home,
  FileText,
  Settings,
  Award,
  Filter,
  Globe,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import FinalServiceCTA from "@/components/Services/InnerServiceCTA";
import WhyChooseCarousel from "@/components/Services/InnerWhyChooseUs";
import FaqAccordion from "@/components/FaqAccordion";

// ─── DATA ──────────────────────────────────────────────────────────────────────

const benefits = [
  { icon: Search,    title: "Capture High-Intent Traffic",   description: "Reach customers actively searching for your services", stat: "72% higher intent" },
  { icon: Clock,     title: "Long-Term Visibility",          description: "Unlike ads, SEO provides sustainable ranking",          stat: "24/7 lead generation" },
  { icon: Shield,    title: "Build Trust Through Rankings",  description: "Google rankings establish instant credibility",         stat: "3.5x more trusted" },
  { icon: Users,     title: "Drive Qualified Leads",         description: "Search traffic converts at higher rates",               stat: "45% higher conversions" },
  { icon: TrendingUp,title: "Amplify Other Channels",        description: "SEO enhances paid ads and content marketing",           stat: "62% better ROAS" },
];

const services = [
  { icon: Search,   title: "Keyword Research",   description: "Data-driven keyword strategy for maximum impact",      features: ["Competitor Keyword Analysis", "Search Intent Mapping", "Local Keyword Research", "Seasonal Trend Analysis"],    color: "from-blue-600 to-indigo-600" },
  { icon: FileText, title: "On-Page SEO",         description: "Optimize every page for search engines and users",    features: ["Content Optimization", "Meta Tag Strategy", "Internal Linking", "SEO-Focused Content"],                         color: "from-green-600 to-emerald-600" },
  { icon: Settings, title: "Technical SEO",       description: "Optimize website infrastructure and performance",     features: ["Core Web Vitals", "Site Speed Optimization", "Indexing & Crawling", "Mobile-First Optimization"],              color: "from-purple-600 to-pink-600" },
  { icon: MapPin,   title: "Local SEO",           description: "Dominate local search and Google Maps",              features: ["Google Business Profile", "Local Citation Building", "NAP Consistency", "Local Review Strategy"],              color: "from-amber-600 to-orange-600" },
  { icon: Globe,    title: "Authority Building",  description: "Establish domain authority and trust",               features: ["Backlink Strategy", "Content Authority", "Brand Mentions", "Industry Partnerships"],                          color: "from-red-600 to-rose-600" },
  { icon: BarChart, title: "SEO Analytics",       description: "Track performance and optimize strategies",          features: ["Rank Tracking", "Traffic Analysis", "Conversion Tracking", "Competitor Monitoring"],                          color: "from-indigo-600 to-blue-800" },
];

const stepColors = [
  { badge: "from-blue-600 to-blue-800",   dot: "bg-blue-600",   num: "#185FA5", fill: "#E6F1FB" },
  { badge: "from-green-600 to-green-800", dot: "bg-green-600",  num: "#0F6E56", fill: "#E1F5EE" },
  { badge: "from-amber-600 to-amber-800", dot: "bg-amber-600",  num: "#854F0B", fill: "#FAEEDA" },
  { badge: "from-purple-600 to-purple-800",dot: "bg-purple-600",num: "#534AB7", fill: "#EEEDFE" },
  { badge: "from-indigo-600 to-indigo-800",dot: "bg-indigo-600",num: "#185FA5", fill: "#E6F1FB" },
];

const process = [
  { step: "01", title: "Comprehensive SEO Audit",  description: "Deep analysis of your website and competitive landscape",         activities: ["Website Health Check", "Competitor Analysis", "Technical Assessment", "Keyword Gap Analysis"],         icon: Search,    },
  { step: "02", title: "Strategic Planning",        description: "Develop data-driven SEO strategy aligned with business goals",    activities: ["Keyword Strategy", "Content Roadmap", "Technical Requirements", "Local SEO Plan"],                   icon: Target,    },
  { step: "03", title: "Implementation",            description: "Execute optimization across all SEO pillars",                     activities: ["On-Page Optimization", "Technical Improvements", "Content Creation", "Local SEO Setup"],              icon: Settings,  },
  { step: "04", title: "Authority Building",        description: "Establish credibility and trust signals",                         activities: ["Link Building", "Content Marketing", "Local Citations", "Review Management"],                        icon: TrendingUp,},
  { step: "05", title: "Monitoring & Optimization", description: "Continuous improvement based on performance data",               activities: ["Performance Tracking", "Strategy Adjustment", "Competitor Response", "Monthly Reporting"],            icon: BarChart,  },
];

const localSeoFeatures = [
  { icon: MapPin,   title: "Google Maps Optimization", description: "Secure top positions in local map pack results",              metrics: "75% of clicks go to top 3" },
  { icon: Building, title: "Local Citation Building",  description: "Consistent business information across directories",          metrics: "42 directories managed" },
  { icon: Users,    title: "Review Management",        description: "Build trust through authentic customer reviews",              metrics: "4.8★ average rating" },
  { icon: Target,   title: "Local Keyword Strategy",   description: "Optimize for near me and location-based searches",           metrics: "500% growth in near me searches" },
];

const localStats = [
  { label: '"Near me" searches', value: "+500% growth", color: "from-green-500 to-emerald-500",  textColor: "text-green-600",  width: "85%" },
  { label: "Local pack clicks",  value: "75% of total", color: "from-blue-500 to-indigo-500",    textColor: "text-blue-600",   width: "75%" },
  { label: "Mobile local searches",value:"76% on mobile",color: "from-purple-500 to-pink-500",   textColor: "text-purple-600", width: "76%" },
  { label: "Visit within 24 hours",value:"28% same day", color: "from-amber-500 to-orange-500",  textColor: "text-amber-600",  width: "28%" },
];

const outcomes = [
  { metric: "312%",  title: "Organic Traffic Growth", description: "Sustainable increase in search engine traffic",       icon: TrendingUp },
  { metric: "Top 3", title: "Local Rankings",          description: "Secure position in Google's Local 3-Pack",           icon: Target     },
  { metric: "4.8x",  title: "More Qualified Leads",    description: "Higher quality leads from search traffic",           icon: Users      },
  { metric: "68%",   title: "Call Increase",           description: "More phone calls from Google search results",        icon: Phone      },
  { metric: "24/7",  title: "Lead Generation",         description: "Continuous traffic while you sleep",                 icon: Clock      },
  { metric: "5.2x",  title: "ROI",                     description: "Average return on SEO investment",                   icon: Award      },
];

const targetAudiences = [
  { title: "Local Service Businesses",description: "Plumbers, electricians, contractors, and home services",     icon: Home,        industries: ["Home Services", "Contractors", "Maintenance"],           results: ["Top 3 local ranking", "+45% call volume", "90% direction requests"]   },
  { title: "Multi-Location Brands",   description: "Franchises, chains, and businesses with multiple locations", icon: Building,    industries: ["Franchises", "Retail Chains", "Service Networks"],       results: ["Location-specific SEO", "Brand consistency", "Centralized management"] },
  { title: "E-commerce Websites",     description: "Online stores driving organic product search traffic",       icon: ShoppingBag, industries: ["E-commerce", "D2C Brands", "Online Retail"],             results: ["Product page optimization", "Category ranking", "SEO-driven sales"]     },
  { title: "Healthcare & Professional",description:"Clinics, hospitals, lawyers, and professional services",     icon: HeartPulse,  industries: ["Healthcare", "Legal", "Professional Services"],          results: ["Trust building", "Local dominance", "Appointment bookings"]            },
  { title: "Reducing Ad Dependency",  description: "Businesses wanting sustainable growth beyond paid ads",      icon: TrendingDown,industries: ["All Industries", "Growth-focused", "Sustainable"],       results: ["Lower CAC", "Higher LTV", "Predictable growth"]                        },
];

const seoWhyChoose = [
  { icon: Shield,    title: "White-Hat Strategies",    desc: "Ethical SEO that delivers sustainable results"              },
  { icon: Filter,    title: "Search Intent Focus",     desc: "Optimize for user needs, not just keywords"                 },
  { icon: MapPin,    title: "Local SEO Specialists",   desc: "Deep expertise in local search domination"                  },
  { icon: BarChart,  title: "Transparent Reporting",   desc: "Clear metrics showing real business impact"                 },
  { icon: Clock,     title: "Long-Term Partnership",   desc: "Focus on sustainable growth, not quick wins"               },
  { icon: Users,     title: "Results-Driven Approach", desc: "Everything we do drives measurable business outcomes"      },
];

const caseStudies = [
  {
    client: "HVAC Services Company",   location: "Chicago Metro", duration: "6 Months",
    challenge: "Not ranking for local HVAC searches", solution: "Comprehensive local SEO strategy",
    metrics: { before: { Ranking: "Page 2", Calls: "15/week", Traffic: "120/month" }, after: { Ranking: "#1 Local Pack", Calls: "68/week", Traffic: "1,450/month" } },
    results: ["350% call increase", "#1 local ranking", "12x traffic growth"],
    barColors: ["from-blue-500 to-indigo-500", "from-green-500 to-emerald-500", "from-purple-500 to-pink-500"],
    barWidths: ["92%", "78%", "85%"],
  },
  {
    client: "E-commerce Fashion Brand", location: "National", duration: "8 Months",
    challenge: "Low organic visibility for products", solution: "Technical SEO + content optimization",
    metrics: { before: { Ranking: "Page 3-4", Sales: "12/month", Traffic: "850/month" }, after: { Ranking: "Page 1", Sales: "142/month", Traffic: "8,500/month" } },
    results: ["10x traffic growth", "Top 3 for 68 keywords", "92% sales increase"],
    barColors: ["from-blue-500 to-indigo-500", "from-green-500 to-emerald-500", "from-purple-500 to-pink-500"],
    barWidths: ["88%", "82%", "90%"],
  },
  {
    client: "Dental Practice",          location: "Austin, TX", duration: "4 Months",
    challenge: "New practice, zero local visibility", solution: "Local SEO + Google Maps optimization",
    metrics: { before: { Ranking: "Not ranking", Calls: "8/week", Reviews: "0" }, after: { Ranking: "#2 Local Pack", Calls: "42/week", Reviews: "34" } },
    results: ["425% call growth", "34 new reviews", "First page dominance"],
    barColors: ["from-blue-500 to-indigo-500", "from-green-500 to-emerald-500", "from-purple-500 to-pink-500"],
    barWidths: ["95%", "75%", "80%"],
  },
];

const seoFaqs = [
  { question: "How long does SEO take to show results?",   answer: "Initial technical improvements show within 30 days. Meaningful traffic growth typically appears within 3–4 months, with significant ranking improvements and lead generation by 6–8 months. SEO is a long-term strategy for sustainable growth." },
  { question: "Can you guarantee #1 rankings?",            answer: "Ethical SEO agencies cannot guarantee specific rankings, as Google's algorithm changes frequently. However, we guarantee significant improvement in organic visibility, traffic, and lead generation based on our proven methodology." },
  { question: "Is SEO better than paid ads?",              answer: "They work best together. SEO provides sustainable, long-term growth with higher credibility, while paid ads offer immediate traffic. SEO has lower long-term costs and builds assets that work 24/7. We recommend an integrated approach." },
  { question: "Do you handle local SEO?",                  answer: "Yes, local SEO is one of our specialties. We excel at Google Maps optimization, local citation building, review management, and location-based keyword strategies that drive calls and visits from nearby customers." },
  { question: "What industries do you specialize in?",     answer: "We have deep experience across local service industries (plumbing, electrical, HVAC), healthcare, professional services, e-commerce, and multi-location businesses. Our strategies are adaptable to any industry with a search presence." },
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────────

export default function SeoPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* ── Hero ── */}
      <InnerHero
        title="SEO & Local Ranking That Drives Real Growth"
        subtitle="Rank where your customers are searching with proven, data-driven SEO strategies"
        bgImage="/seo-services.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SEO & Local Ranking" },
        ]}
      />

      {/* ── What Is SEO ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

            {/* Search results mockup */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900">Google Search Results</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">How customers find you</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3 sm:pl-4 py-2">
                    <div className="text-blue-600 font-medium text-xs sm:text-sm">#1 — Your Business</div>
                    <div className="text-gray-800 font-semibold text-sm sm:text-base">Best Plumbing Services Near You</div>
                    <div className="text-gray-500 text-xs sm:text-sm">★★★★★ (142 reviews) · Open now · 2 miles away</div>
                    <div className="flex gap-3 mt-1">
                      <span className="text-green-600 text-xs sm:text-sm">(555) 123-4567</span>
                      <span className="text-blue-600 text-xs sm:text-sm">Get Directions</span>
                    </div>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-3 sm:pl-4 py-1.5 opacity-60">
                    <div className="text-gray-500 text-xs">#2 — Competitor</div>
                    <div className="text-gray-700 text-sm">Local Plumbing Services</div>
                    <div className="text-gray-500 text-xs">★★★★☆ (89 reviews)</div>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-3 sm:pl-4 py-1.5 opacity-40">
                    <div className="text-gray-500 text-xs">#3 — Competitor</div>
                    <div className="text-gray-700 text-sm">Emergency Plumbing</div>
                    <div className="text-gray-500 text-xs">★★★★☆ (67 reviews)</div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-base sm:text-lg font-bold text-blue-600">93%</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Start with search</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-base sm:text-lg font-bold text-green-600">28%</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Result in purchase</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Copy + stats */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4">
                <Target className="w-3.5 h-3.5 shrink-0" />
                Search Engine Dominance
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-destructive mb-4 leading-tight">
                Be Found When Customers Search
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 mb-2 leading-relaxed">
                SEO helps your business appear when customers actively search for your products or services.
                Local SEO ensures you rank for "near me" searches, driving high-intent traffic, calls, and visits.
              </p>
              <p className="text-sm sm:text-lg text-gray-600 mb-6 leading-relaxed">
                It's not just about ranking — it's about being the obvious choice when customers are ready to buy.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: "86%", label: "Use Google Maps locally",   color: "text-green-600" },
                  { value: "4.2★",label: "Minimum trust threshold",  color: "text-purple-600" },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm">
                    <div className={`text-xl sm:text-2xl font-bold mb-0.5 ${s.color}`}>{s.value}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs sm:text-sm font-medium mb-4">
              <Search className="w-3.5 h-3.5 shrink-0" />
              Comprehensive SEO Services
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What's Included in Our SEO Services
            </h2>
            <p className="text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end SEO optimization for maximum search visibility
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
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
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
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-destructive mb-4">
              Our 5-Step SEO Process
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to dominating search results
            </p>
          </motion.div>

          {/* Single unified vertical timeline — works at all sizes */}
          <div className="relative">
            <div className="hidden sm:block absolute left-[1.375rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200 pointer-events-none" />

            <div className="space-y-4 sm:space-y-6">
              {process.map((step, idx) => {
                const Icon = step.icon;
                const c = stepColors[idx];
                return (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }}
                    className="relative grid grid-cols-1 sm:grid-cols-[44px_1fr] gap-x-4 items-stretch">

                    {/* Left column: badge + line */}
                    <div className="hidden sm:flex flex-col items-center">
                      <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${c.badge} flex items-center justify-center text-white font-bold text-sm shadow`}>
                        {step.step}
                      </div>
                      {idx < process.length - 1 && <div className="flex-1 w-px bg-transparent mt-1" />}
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow mb-1">
                      {/* Mobile: inline badge */}
                      <div className="flex items-center gap-3 mb-3 sm:mb-0">
                        <div className={`sm:hidden w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br ${c.badge} flex items-center justify-center text-white font-bold text-xs`}>
                          {step.step}
                        </div>
                        <div className="flex-1 sm:flex sm:items-center sm:gap-3">
                          <div className={`hidden sm:flex w-9 h-9 shrink-0 rounded-lg items-center justify-center`} style={{ background: c.fill }}>
                            <Icon className="w-4 h-4" style={{ color: c.num }} />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-gray-900">{step.title}</h3>
                            <p className="text-xs text-gray-500 leading-snug">{step.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-3 border-t border-gray-100 mt-2">
                        {step.activities.map((activity, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: c.num }} />
                            <span className="text-xs text-gray-600">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Local SEO Focus ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 text-xs sm:text-sm font-medium mb-4">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              Local SEO Specialization
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Dominate "Near Me" Searches
            </h2>
            <p className="text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized strategies for local search domination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Feature cards */}
            <div className="space-y-4 sm:space-y-6">
              {localSeoFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="group">
                    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3">
                        <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-0.5">{feature.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-gray-100">
                        <span className="inline-flex px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs sm:text-sm font-semibold">
                          {feature.metrics}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Local search stats card */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-lg h-full">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900">Local Search Impact</h3>
                    <p className="text-xs sm:text-sm text-gray-500">How customers find local businesses</p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {localStats.map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1.5">
                        <span>{s.label}</span>
                        <span className={`font-semibold ${s.textColor}`}>{s.value}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 sm:h-3">
                        <div className={`bg-gradient-to-r ${s.color} h-2 sm:h-3 rounded-full`} style={{ width: s.width }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">Local SEO Success Factors</h4>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {["NAP Consistency", "Google Reviews", "Local Keywords", "Mobile Optimization"].map((f) => (
                      <div key={f} className="flex items-center gap-1.5 sm:gap-2">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Expected Outcomes ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Expected SEO Results
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              What strategic SEO delivers for your business
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
                      <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        {outcome.metric}
                      </div>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">{outcome.title}</h3>
                    <p className="text-xs sm:text-base text-gray-500 mb-4">{outcome.description}</p>
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Before SEO</span><span>After 6 months</span>
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
            <div className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { value: "312%", label: "Traffic Growth" },
                  { value: "4.8x", label: "More Qualified Leads" },
                  { value: "68%",  label: "Call Increase" },
                  { value: "5.2x", label: "ROI on SEO" },
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
              Who Needs Strategic SEO?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach delivers exceptional results for these business types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {targetAudiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="group">
                  <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-xl font-bold text-gray-900 leading-tight">{audience.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{audience.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                      {audience.industries.map((industry, iIdx) => (
                        <span key={iIdx} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">{industry}</span>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      {audience.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2">
                          <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">{result}</span>
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
  title="Why Choose Our SEO Services?"
  subtitle="We help businesses rank higher on search engines, drive organic traffic, and convert visitors into customers."
  items={seoWhyChoose}
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
              SEO Success Stories
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses dominating search results
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-10">
            {caseStudies.map((study, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:shadow-lg transition-all">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

                    {/* Info + results */}
                    <div>
                      <span className="inline-flex px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-3">SEO Case Study</span>
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">{study.client}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3">
                        <strong>Location:</strong> {study.location} &nbsp;·&nbsp; <strong>Duration:</strong> {study.duration}
                      </p>
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
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 text-center">SEO Performance Dashboard</h4>
                      <div className="space-y-4">
                        {Object.keys(study.metrics.before).map((key, i) => (
                          <div key={i}>
                            <div className="flex flex-wrap justify-between text-xs sm:text-sm text-gray-600 mb-1.5 gap-1">
                              <span className="font-medium">{key}</span>
                              <div className="flex gap-3">
                                <span>Before: <strong className="text-gray-500">{study.metrics.before[key]}</strong></span>
                                <span>After: <strong className="text-green-600">{study.metrics.after[key]}</strong></span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                              <div className={`bg-gradient-to-r ${study.barColors[i]} h-2 sm:h-3 rounded-full`} style={{ width: study.barWidths[i] }} />
                            </div>
                          </div>
                        ))}
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
  title="SEO Services FAQs"
  subtitle="Find answers to common questions about our SEO strategies, keyword research, technical optimization, and how we help businesses grow through organic search."
  linkText="Have more questions? Talk with our SEO specialists."
  linkHref="/contact"
  faqs={seoFaqs}
/>

      {/* ── Final CTA ── */}
      <FinalServiceCTA
        icon={Search}
        title="Ready to Grow Your Online Visibility?"
        description="Get expert strategies tailored to your business goals and audience."
        formTitle="Get Your Free Strategy Session"
        challenges={[
          { value: "traffic",    label: "Low Website Traffic" },
          { value: "leads",      label: "Low Lead Generation" },
          { value: "ranking",    label: "Poor Search Visibility" },
          { value: "conversion", label: "Low Conversion Rate" },
          { value: "other",      label: "Other Challenge" },
        ]}
        primaryCta={{ text: "Get Free Consultation", icon: Search }}
        secondaryCta={{ text: "Schedule a Call", icon: Phone }}
        contactInfo={[
          { icon: Phone,         text: "Call us: +91 98765 43210" },
          { icon: MessageCircle, text: "WhatsApp Available" },
        ]}
      />
    </main>
  );
}