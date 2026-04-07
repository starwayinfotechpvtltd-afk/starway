"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Users,
  Target,
  Zap,
  BarChart,
  CheckCircle,
  Play,
  Eye,
  Download,
  MessageSquare,
  Calendar,
  Star,
  ChevronRight,
  Rocket,
  Lightbulb,
  Layers,
  Cpu,
  Globe,
  Smartphone,
  Palette,
  Code,
  Megaphone,
  PenTool,
  Cloud,
  Shield,
  ShoppingBag,
  GraduationCap,
  Heart,
  Home,
  Store,
} from "lucide-react";
import InnerHero from "@/components/Common/InnerHero";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "SaaS Platform UI/UX Redesign",
    category: "UI/UX Design",
    client: "TechFlow Inc.",
    industry: "SaaS",
    outcome: "Increased user engagement by 62%",
    image: "/portfolio/saas-platform.jpg",
    color: "from-blue-500 to-cyan-500",
    services: ["UI/UX Design", "User Research", "Prototyping"],
    results: [
      "62% engagement increase",
      "45% faster onboarding",
      "28% higher retention",
    ],
  },
  {
    id: 2,
    title: "E-commerce AI Optimization",
    category: "AI Search Optimization",
    client: "StyleHub",
    industry: "E-commerce",
    outcome: "Grew AI-generated leads by 340%",
    image: "/portfolio/ecommerce-ai.jpg",
    color: "from-purple-500 to-pink-500",
    services: ["AI Optimization", "Content Strategy", "Performance Analytics"],
    results: ["340% lead growth", "Top 3 AI rankings", "45% revenue increase"],
  },
  {
    id: 3,
    title: "Healthcare Mobile App",
    category: "Mobile App Development",
    client: "HealthTrack",
    industry: "Healthcare",
    outcome: "150K+ downloads in 3 months",
    image: "/portfolio/health-app.jpg",
    color: "from-green-500 to-emerald-500",
    services: [
      "Mobile Development",
      "Healthcare Compliance",
      "App Store Optimization",
    ],
    results: ["150K+ downloads", "4.8 star rating", "92% user satisfaction"],
  },
  {
    id: 4,
    title: "Brand Identity & Positioning",
    category: "Branding",
    client: "Nova Innovations",
    industry: "Technology",
    outcome: "Tripled brand recognition",
    image: "/portfolio/brand-identity.jpg",
    color: "from-orange-500 to-yellow-500",
    services: ["Brand Strategy", "Logo Design", "Visual Identity"],
    results: [
      "3x recognition",
      "40% market share growth",
      "Award-winning design",
    ],
  },
  {
    id: 5,
    title: "SEO Dominance Strategy",
    category: "SEO & Local Ranking",
    client: "Local Services Inc.",
    industry: "Services",
    outcome: "First page rankings for 85+ keywords",
    image: "/portfolio/seo-strategy.jpg",
    color: "from-indigo-500 to-blue-500",
    services: ["SEO Audit", "Content Strategy", "Technical SEO"],
    results: [
      "85+ top rankings",
      "300% organic traffic",
      "60% conversion lift",
    ],
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Social Media Marketing",
    client: "FitLife Brand",
    industry: "Fitness",
    outcome: "Generated 2M+ impressions",
    image: "/portfolio/social-campaign.jpg",
    color: "from-red-500 to-pink-500",
    services: ["Content Creation", "Community Management", "Paid Social"],
    results: ["2M+ impressions", "500% engagement growth", "3K+ new followers"],
  },
];

const categories = [
  "All Projects",
  "Branding",
  "UI/UX Design",
  "Website Development",
  "Mobile App Development",
  "SEO & Local Ranking",
  "PPC Advertising",
  "Social Media Marketing",
  "Content Marketing",
  "AI Search Optimization",
];

const industries = [
  { name: "Startups & SaaS", icon: Rocket, count: 24 },
  { name: "E-commerce", icon: ShoppingBag, count: 18 },
  { name: "Education", icon: GraduationCap, count: 12 },
  { name: "Healthcare", icon: Heart, count: 15 },
  { name: "Real Estate", icon: Home, count: 9 },
  { name: "Local Businesses", icon: Store, count: 22 },
];

const results = [
  { metric: "40%", label: "Avg. Conversion Increase", icon: TrendingUp },
  { metric: "3.2x", label: "Avg. Traffic Growth", icon: Users },
  { metric: "85%", label: "Client Retention Rate", icon: Target },
  { metric: "62%", label: "Faster Time to Market", icon: Zap },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  useEffect(() => {
    if (activeCategory === "All Projects") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeCategory),
      );
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <InnerHero
        title="Success Stories"
        subtitle="Ideas, execution, and impact across digital platforms."
        bgImage="/portfolio-bg.webp"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />

      {/* Portfolio Overview */}
      <section className="py-20 bg-[#96b3e9]">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming Ideas into{" "}
                <span className="text-blue-600">Measurable Success</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Explore our portfolio across digital marketing, branding, UI/UX,
                websites, mobile apps, and AI-driven optimization. Each project
                reflects our focus on performance, scalability, and measurable
                impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="p-4 bg-cyan-50 rounded-xl">
                  <div className="text-2xl font-bold text-cyan-600">95%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-3 border border-gray-200 rounded-2xl shadow-sm bg-white">
                  {/* Text on top */}
                  <h3 className="text-md sm:text-xl xl:text-2xl font-semibold text-gray-900 uppercase mb-3 font-sans">
                    Strategy First
                  </h3>

                  {/* Image below (same style as reference card) */}
                  <div className="relative w-full h-[120px] rounded-xl overflow-hidden">
                    <Image
                      src="/images/portfolio/strategy.jpg"
                      alt="Strategy First"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="p-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <h3 className="text-md sm:text-xl xl:text-2xl font-semibold text-gray-900 uppercase mb-3 font-sans">
                    Strategy Solutions
                  </h3>

                  <div className="relative w-full h-[120px] rounded-xl overflow-hidden">
                    <Image
                      src="/images/portfolio/full-stack.jpg"
                      alt="Full Stack Solutions"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <h3 className="text-md sm:text-xl xl:text-2xl font-semibold text-gray-900 uppercase mb-3 font-sans">
                    AI-Powered
                  </h3>

                  <div className="relative w-full h-[120px] rounded-xl overflow-hidden">
                    <Image
                      src="/images/portfolio/AI-driven.jpg"
                      alt="AI Powered"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="p-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <h3 className="text-md sm:text-xl xl:text-2xl font-semibold text-gray-900 uppercase mb-3 font-sans">
                    Results-Driven
                  </h3>
                  <div className="relative w-full h-[120px] rounded-xl overflow-hidden">
                    <Image
                      src="/images/portfolio/result.jpg"
                      alt="Results Driven"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-14 sm:py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + Search */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            {/* Title */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Explore Our Work
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Filter by service category
              </p>
            </div>

            {/* Search + Sort */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Sort Button */}
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm">
                <Filter size={18} />
                <span>Sort</span>
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-10 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all
          ${
            activeCategory === category
              ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setActiveCaseStudy(item)}
              >
                {/* Project Image */}
                <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl sm:text-5xl font-bold text-gray-900/10">
                      {item.client.charAt(0)}
                    </div>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {item.industry}
                      </span>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-1">
                        {item.title}
                      </h3>
                    </div>

                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <ChevronRight className="text-blue-600" size={18} />
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base mb-5">
                    {item.outcome}
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2">
                    {item.services.slice(0, 3).map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <TrendingUp className="text-green-500" size={16} />
                      Results
                    </div>

                    <span className="text-xs sm:text-sm font-medium text-blue-600">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Work Delivers Results */}
      <section className="py-20 bg-[#96b3e9]">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 lg:px-0 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text- mb-8">
                Why Our Work{" "}
                <span className="text-blue-600">Delivers Results</span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg hidden sm:flex items-center justify-center ">
                      <Target className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Strategy-First Execution
                    </h3>
                    <p className="text-gray-600">
                      Every project begins with deep research and strategic
                      planning, ensuring solutions are tailored to your specific
                      goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 hidden sm:flex rounded-lg items-center justify-center">
                      <Users className="text-green-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      User-Centric Design
                    </h3>
                    <p className="text-gray-600">
                      We design with the end-user in mind, creating intuitive
                      experiences that drive engagement and conversion.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 hidden sm:flex rounded-lg items-center justify-center">
                      <BarChart className="text-purple-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Data-Driven Marketing
                    </h3>
                    <p className="text-gray-600">
                      Our marketing strategies are backed by data and analytics,
                      optimizing campaigns for maximum ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Our Process</h3>
                  <p className="text-blue-100">
                    A systematic approach to success
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Discovery & Strategy",
                      desc: "Understand goals & challenges",
                    },
                    {
                      step: "02",
                      title: "Planning & Design",
                      desc: "Create solutions & prototypes",
                    },
                    {
                      step: "03",
                      title: "Development & Execution",
                      desc: "Build & implement with precision",
                    },
                    {
                      step: "04",
                      title: "Launch & Optimize",
                      desc: "Measure results & iterate",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-sm text-blue-100">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Case Study Detail */}
      {activeCaseStudy && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {activeCaseStudy.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{activeCaseStudy.client}</p>
                </div>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              {/* Case Study Content */}
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      The Challenge
                    </h4>
                    <p className="text-gray-600">
                      {activeCaseStudy.client} needed to
                      {activeCaseStudy.outcome.toLowerCase()} while maintaining
                      scalability and user satisfaction in a competitive market.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      Our Solution
                    </h4>
                    <div className="space-y-2">
                      {activeCaseStudy.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span className="text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Key Results
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {activeCaseStudy.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 rounded-xl p-4 text-center"
                      >
                        <div className="text-lg font-bold text-blue-600">
                          {result}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-bold">
                    Download Full Case Study (PDF)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
