"use client";

import InnerHero from "@/components/Common/InnerHero";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  BarChart,
  MapPin,
  Phone,
  Navigation,
  Star,
  Shield,
  Users,
  Eye,
  Search,
  Settings,
  ShieldCheck,
  Store,
  Home,
  MessageCircle,
  Map,
  Globe,
  Stethoscope,
  Utensils,
  Hammer,
  CheckSquare,
  XCircle,
  PhoneCall,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation as SwiperNav } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WhyChooseCarousel from "@/components/Services/InnerWhyChooseUs";
import FaqAccordion from "@/components/FaqAccordion";
import FinalServiceCTA from "@/components/Services/InnerServiceCTA";

// ─── Custom Image Icon ─────────────────────────────────────────────────────────
function ImageIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────

const benefits = [
  { icon: MapPin, title: "Appear in Google's Local 3-Pack", description: "Secure a top 3 position in local search results", stat: "75% of clicks go to the 3-pack" },
  { icon: Phone, title: "Get More Calls & Direction Requests", description: "Direct customer actions from search results", stat: "2.8x more calls from optimized profiles" },
  { icon: Star, title: "Build Credibility with Reviews", description: "Social proof that converts local searchers", stat: "68% trust businesses with 4+ stars" },
  { icon: Search, title: "Capture High-Intent Local Searches", description: "Reach customers ready to buy now", stat: "'Near me' searches grew 500%+" },
  { icon: Target, title: "Outrank Nearby Competitors", description: "Stand out in your local market", stat: "Outrank 85% of local competitors" },
];

const services = [
  {
    icon: Map,
    title: "Profile Optimization",
    description: "Complete GMB setup and optimization",
    features: ["Business Information Audit", "Category & Service Optimization", "Keyword Strategy", "NAP Consistency Check"],
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Build and maintain your online reputation",
    features: ["Review Generation Strategy", "Professional Response Templates", "Review Monitoring & Alerts", "Competitor Review Analysis"],
    color: "from-amber-600 to-amber-800",
  },
  {
    icon: Globe,
    title: "Local SEO & Citations",
    description: "Build local authority across the web",
    features: ["Local Citation Building", "Directory Submissions", "NAP Consistency Audit", "Local Backlink Strategy"],
    color: "from-green-600 to-green-800",
  },
  {
    icon: ImageIcon,
    title: "Visual Optimization",
    description: "Make your profile visually compelling",
    features: ["Professional Photo Uploads", "360° Virtual Tours", "Video Integration", "Post & Update Scheduling"],
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: ShieldCheck,
    title: "Profile Protection",
    description: "Secure and monitor your GMB presence",
    features: ["Spam Review Detection", "Competitor Hijack Prevention", "Profile Suspension Prevention", "24/7 Monitoring & Alerts"],
    color: "from-red-600 to-red-800",
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Track and optimize your local performance",
    features: ["Call & Direction Tracking", "Search Query Analysis", "Competitor Performance", "Monthly Reports"],
    color: "from-indigo-600 to-indigo-800",
  },
];

const process = [
  { step: "01", title: "Comprehensive Audit", description: "Analyze your current GMB profile and local competition", activities: ["Profile Health Check", "Competitor Analysis", "Keyword Research", "Local Ranking Assessment"], icon: Search, color: "from-blue-600 to-blue-800" },
  { step: "02", title: "Strategic Optimization", description: "Implement data-driven optimization strategies", activities: ["Business Info Optimization", "Category & Service Setup", "Local Keyword Integration", "Visual Content Strategy"], icon: Settings, color: "from-green-600 to-green-800" },
  { step: "03", title: "Authority Building", description: "Establish your local dominance and credibility", activities: ["Review Strategy", "Local Citation Building", "Content & Post Creation", "Local Backlink Outreach"], icon: TrendingUp, color: "from-amber-600 to-amber-800" },
  { step: "04", title: "Ongoing Management", description: "Continuous monitoring and optimization", activities: ["Performance Monitoring", "Review Responses", "Competitor Tracking", "Monthly Strategy Updates"], icon: ShieldCheck, color: "from-purple-600 to-purple-800" },
];

const outcomes = [
  { metric: "3.2x", title: "More Calls from Maps", description: "Direct phone calls from Google Maps & Search", icon: PhoneCall },
  { metric: "215%", title: "Direction Requests", description: "Customers asking for directions to your location", icon: Navigation },
  { metric: "Top 3", title: "Local Rankings", description: "Secure position in Google's Local 3-Pack", icon: Target },
  { metric: "4.8★", title: "Average Rating", description: "Build trust with exceptional reviews", icon: Star },
  { metric: "89%", title: "Profile Views", description: "Increased visibility in local searches", icon: Eye },
  { metric: "24/7", title: "Profile Protection", description: "Continuous monitoring & spam prevention", icon: Shield },
];

const targetAudiences = [
  { title: "Local Service Businesses", description: "Plumbers, electricians, contractors, and home services", icon: Hammer, industries: ["Home Services", "Contractors", "Maintenance"], metrics: ["+45% call volume", "Top 3 ranking", "25+ reviews/month"] },
  { title: "Retail Stores & Franchises", description: "Physical stores, shops, and multi-location businesses", icon: Store, industries: ["Retail", "Franchises", "Shopping"], metrics: ["+60% foot traffic", "+35% directions", "4.7★ rating"] },
  { title: "Healthcare Practices", description: "Clinics, hospitals, dentists, and medical specialists", icon: Stethoscope, industries: ["Healthcare", "Medical", "Wellness"], metrics: ["+55% appointment requests", "Trust badge", "HIPAA compliant"] },
  { title: "Restaurants & Cafés", description: "Food service businesses and dining establishments", icon: Utensils, industries: ["Food & Beverage", "Restaurants", "Cafés"], metrics: ["+40% reservations", "+50% directions", "Menu optimization"] },
  { title: "Real Estate & Property", description: "Agents, brokers, and property management services", icon: Home, industries: ["Real Estate", "Property", "Rental"], metrics: ["+75% lead generation", "Virtual tours", "Area dominance"] },
];

const googleMapsWhyChoose = [
  { icon: Target, title: "Local SEO Specialists", desc: "Dedicated experts in local search optimization" },
  { icon: Star, title: "Proven Review Growth", desc: "Systematic approach to generating authentic reviews" },
  { icon: Shield, title: "White-Hat Optimization", desc: "Ethical practices that ensure long-term results" },
  { icon: BarChart, title: "Transparent Tracking", desc: "Real-time dashboards showing call and ranking data" },
  { icon: ShieldCheck, title: "Ongoing Protection", desc: "24/7 monitoring to prevent spam and hijacking" },
  { icon: Users, title: "Local Market Experts", desc: "Deep understanding of local consumer behavior" },
];

const caseStudies = [
  {
    business: "HVAC Services Company", location: "Chicago, IL", duration: "3 Months",
    before: { ranking: "Page 2", calls: "12/week", reviews: "8 total", rating: "3.2★" },
    after: { ranking: "#1 Local Pack", calls: "48/week", reviews: "67 total", rating: "4.7★" },
    results: ["400% call increase", "#1 local ranking", "59 new reviews"],
  },
  {
    business: "Dental Practice", location: "Austin, TX", duration: "4 Months",
    before: { ranking: "Not ranking", calls: "8/week", reviews: "3 total", rating: "2.8★" },
    after: { ranking: "#2 Local Pack", calls: "35/week", reviews: "42 total", rating: "4.9★" },
    results: ["338% call growth", "First page ranking", "4.9★ average rating"],
  },
  {
    business: "Coffee Shop Chain", location: "3 Locations, Denver", duration: "2 Months",
    before: { ranking: "Page 3 avg", calls: "Varies", reviews: "Mixed", rating: "3.5★ avg" },
    after: { ranking: "Top 3 all locations", calls: "Steady increase", reviews: "Consistent flow", rating: "4.6★ avg" },
    results: ["All locations ranking", "62% more walk-ins", "Review consistency"],
  },
];

const googleMapsFaqs = [
  { question: "How long does GMB optimization take?", answer: "Initial improvements are typically visible within 2–4 weeks. Full ranking improvements take 3–6 months depending on competition. We provide weekly progress reports throughout." },
  { question: "Can you rank my business in Google Maps?", answer: "Yes, our primary focus is ranking businesses in Google Maps and the Local 3-Pack using citation building, review optimization, and local content strategies." },
  { question: "Do you help with review generation?", answer: "Absolutely. We implement ethical review generation strategies compliant with Google's guidelines, including review request systems and professional response templates." },
  { question: "Is this a one-time or ongoing service?", answer: "We recommend ongoing management for best results. Local SEO requires continuous monitoring, competitor response, and algorithm updates. One-time packages are also available." },
  { question: "Will this help me get more phone calls?", answer: "Yes — GMB optimization directly increases phone calls. Our strategies typically result in 200–400% more calls from Google Search and Maps." },
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────────

export default function GoogleMapsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* ── Hero ── */}
      <InnerHero
        title="Google Maps & GMB Optimization That Gets You Found"
        subtitle="Dominate local search and turn nearby customers into calls, visits, and trust"
        bgImage="/googleMapB.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Google Maps Optimization" },
        ]}
      />

      {/* ── What Is GMB ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Map mockup */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Your Digital Storefront</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">As seen on Google Maps & Search</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-20 h-2 bg-gray-300 rounded" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">2 min away</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Phone, label: "Call Now", color: "bg-blue-100", iconColor: "text-blue-600", right: <span className="text-green-600 text-xs sm:text-sm font-semibold">✓ Open Now</span> },
                      { icon: Navigation, label: "Get Directions", color: "bg-green-100", iconColor: "text-green-600", right: <div className="flex items-center gap-1"><Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-current" /><span className="text-sm font-semibold">4.8</span><span className="text-gray-500 text-xs">(142)</span></div> },
                      { icon: Eye, label: "View Photos", color: "bg-purple-100", iconColor: "text-purple-600", right: <span className="text-blue-600 text-xs sm:text-sm font-semibold">Save</span> },
                    ].map(({ icon: Icon, label, color, iconColor, right }, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${color} flex items-center justify-center`}>
                            <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${iconColor}`} />
                          </div>
                          <span className="text-gray-700 text-sm sm:text-base">{label}</span>
                        </div>
                        {right}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Copy + stats */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-5">
                <Target className="w-4 h-4 shrink-0" />
                Local Dominance Strategy
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Your Google Business Profile is Your Digital Storefront
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 mb-3 leading-relaxed">
                When optimized correctly, your Google Business Profile helps local customers find you, trust you, and choose you — before they even visit your website.
              </p>
              <p className="text-sm sm:text-lg text-gray-600 mb-6 leading-relaxed">
                It's the first impression that turns "near me" searches into calls, visits, and loyal customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Local Search Matters ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Local Search Dominance Matters
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The competitive advantage of appearing when customers are ready to buy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="group">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 group-hover:border-blue-300 group-hover:shadow-xl transition-all h-full flex flex-col">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 flex-1">{benefit.description}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold">
                        {benefit.stat}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Stats banner */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="sm:col-span-2 lg:col-span-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { value: "76%", label: "Search locally on mobile" },
                    { value: "28%", label: "Result in a purchase" },
                    { value: "24h", label: "Visit business after search" },
                    { value: "3x", label: "More likely to purchase" },
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
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Complete GMB Optimization Suite
            </h2>
            <p className="text-sm sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Everything needed to dominate your local market on Google
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="group">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm group-hover:shadow-xl transition-all h-full">
                    <div className={`w-13 h-13 sm:w-16 sm:h-16 w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm">
                          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 shrink-0" />
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
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-destructive mb-4">
              Our 4-Step Local Domination Process
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ranking higher and getting more local business
            </p>
          </motion.div>

          {/* Mobile + tablet: stacked cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
            {process.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-500 text-xs">{step.description}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {step.activities.map((activity, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span className="text-gray-700 text-xs sm:text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 pointer-events-none" />
              <div className="grid grid-cols-4 gap-6 relative">
                {process.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="relative">
                      {/* Timeline dot */}
                      <div className="flex justify-center mb-6">
                        <div className={`w-16 h-16 rounded-full border-4 border-white bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md z-10 relative`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                        <div className="text-xs font-semibold text-blue-600 mb-1">Step {step.step}</div>
                        <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-sm mb-3">{step.description}</p>
                        <div className="space-y-1">
                          {step.activities.slice(0, 3).map((activity, aIdx) => (
                            <div key={aIdx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                              <span className="text-gray-700 text-xs">{activity}</span>
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
        </div>
      </section>

      {/* ── Expected Outcomes ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-destructive mb-4">
              Expected Local Business Results
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              What you can realistically expect from our GMB optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {outcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }} className="group">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        {outcome.metric}
                      </div>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">{outcome.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{outcome.description}</p>
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Before</span><span>After</span>
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
                  { value: "2.8x", label: "More Phone Calls" },
                  { value: "215%", label: "Direction Requests" },
                  { value: "84%", label: "First Page Ranking" },
                  { value: "4.7★", label: "Average Rating" },
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

      {/* ── Industries ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-destructive mb-4">
              Industries We Help Dominate Locally
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results across all types of local businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {targetAudiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="group">
                  <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-start gap-3 sm:gap-4 mb-5">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 leading-tight">{audience.title}</h3>
                        <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{audience.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {audience.industries.map((industry, iIdx) => (
                        <span key={iIdx} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">{industry}</span>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      {audience.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2">
                          <TrendingUp className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          <span className="text-gray-700 text-xs sm:text-sm">{metric}</span>
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
  title="Why Choose Our Google Maps Optimization Services?"
  subtitle="We help businesses rank higher on Google Maps, attract local customers, and dominate local search results."
  items={googleMapsWhyChoose}
  autoplayDelay={3500}
  theme={{
    bgFrom: "#1a2d5f",
    bgTo: "#0f1f3f",
    accent: "#255EC8",
  }}
/>

      {/* ── Case Studies ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Local Business Success Stories
            </h2>
            <p className="text-sm sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Real results from businesses dominating their local markets
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-10">
            {caseStudies.map((study, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }}>
                <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-5 sm:p-8 border border-blue-100 hover:shadow-lg transition-all">
                  {/* Mobile: stacked layout */}
                  <div className="block md:hidden space-y-5">
                    <div className="text-center">
                      <p className="text-blue-600 text-xs font-medium mb-1">{study.location} · {study.duration}</p>
                      <h3 className="text-lg font-bold text-gray-900">{study.business}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                        <div className="flex items-center gap-1.5 mb-2">
                          <XCircle className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span className="text-xs font-medium text-gray-500">Before</span>
                        </div>
                        {Object.entries(study.before).map(([key, val]) => (
                          <div key={key} className="mb-1">
                            <div className="text-sm font-bold text-gray-400">{val}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                        <div className="flex items-center gap-1.5 mb-2">
                          <CheckSquare className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          <span className="text-xs font-medium text-green-600">After</span>
                        </div>
                        {Object.entries(study.after).map(([key, val]) => (
                          <div key={key} className="mb-1">
                            <div className="text-sm font-bold text-green-600">{val}</div>
                            <div className="text-xs text-green-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {study.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1 shadow-sm">
                          <CheckSquare className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          <span className="text-xs text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Desktop: 3-column layout */}
                  <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {/* Before */}
                    <div>
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                          <XCircle className="w-4 h-4" />Before Optimization
                        </div>
                      </div>
                      <div className="space-y-3">
                        {[
                          { label: "Local Ranking", value: study.before.ranking },
                          { label: "Weekly Calls", value: study.before.calls },
                          { label: "Total Reviews", value: study.before.reviews },
                          { label: "Average Rating", value: study.before.rating },
                        ].map((item, i) => (
                          <div key={i} className="text-center">
                            <div className="text-xl font-bold text-gray-400">{item.value}</div>
                            <div className="text-gray-400 text-sm">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Center */}
                    <div className="text-center">
                      <p className="text-blue-600 text-sm font-medium mb-1">{study.location} · {study.duration}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-5">{study.business}</h3>
                      <div className="space-y-2">
                        {study.results.map((result, rIdx) => (
                          <div key={rIdx} className="flex items-center justify-center gap-2">
                            <CheckSquare className="w-4 h-4 text-green-500 shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* After */}
                    <div>
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                          <CheckSquare className="w-4 h-4" />After Optimization
                        </div>
                      </div>
                      <div className="space-y-3">
                        {[
                          { label: "Local Ranking", value: study.after.ranking },
                          { label: "Weekly Calls", value: study.after.calls },
                          { label: "Total Reviews", value: study.after.reviews },
                          { label: "Average Rating", value: study.after.rating },
                        ].map((item, i) => (
                          <div key={i} className="text-center">
                            <div className="text-xl font-bold text-green-600">{item.value}</div>
                            <div className="text-green-700 text-sm font-medium">{item.label}</div>
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
  title="Google Maps Optimization FAQs"
  subtitle="Answers to common questions about Google Business Profile optimization, local SEO, and improving your ranking on Google Maps."
  linkText="Still have questions? Talk with our local SEO experts."
  linkHref="/contact"
  faqs={googleMapsFaqs}
/>

      {/* ── Final CTA ── */}
<FinalServiceCTA
  icon={MapPin}
  title="Ready to Rank Higher on Google Maps?"
  description="We help local businesses dominate Google Maps results, attract nearby customers, and grow with powerful Google Business Profile optimization strategies."
  formTitle="Get Your Free Google Maps SEO Audit"
  challenges={[
    {
      value: "not-ranking",
      label: "My Business Is Not Ranking on Google Maps",
    },
    {
      value: "low-visibility",
      label: "Low Visibility in Local Search Results",
    },
    {
      value: "few-reviews",
      label: "Not Getting Enough Customer Reviews",
    },
    {
      value: "competitors-ranking",
      label: "Competitors Rank Higher on Google Maps",
    },
    {
      value: "poor-optimization",
      label: "Google Business Profile Not Fully Optimized",
    },
    {
      value: "other",
      label: "Other Local SEO or Maps Ranking Issue",
    },
  ]}
  primaryCta={{
    text: "Get Free Audit",
    icon: MapPin,
  }}
  secondaryCta={{
    text: "Book A Call",
    icon: Phone,
  }}
  contactInfo={[
    { icon: Phone, text: "Call us: +91 98765 43210" },
    { icon: MessageCircle, text: "WhatsApp Local SEO Support Available" },
  ]}
/>
    </main>
  );
}