"use client";

import InnerHero from "@/components/Common/InnerHero";
import FinalServiceCTA from "@/components/Services/InnerServiceCTA";
import WhyChooseCarousel from "@/components/Services/InnerWhyChooseUs";
import { motion, AnimatePresence } from "framer-motion";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowRight,
  Brain,
  Cpu,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Users,
  Eye,
  Search,
  Globe,
  MessageSquare,
  Layers,
  BarChart,
  Clock,
  Award,
  Filter,
  Settings,
  FileText,
  Calendar,
  Phone,
  ChevronRight,
  Download,
  MessageCircle,
  Play,
  Building,
  Store,
  BrainCircuit,
  CircuitBoard,
  Network,
  Binary,
  Bot,
  Cpu as CpuIcon,
  Rocket,
  LineChart,
  PieChart,
  Database,
  Lock,
  Unlock,
  RefreshCw,
  CheckCircle,
  XCircle,
  HelpCircle,
  Lightbulb,
  Terminal,
  Server,
  Cloud,
  Code,
} from "lucide-react";
import { useState } from "react";
import FaqAccordion from "@/components/FaqAccordion";

export default function AiSearchPage() {
  const [activePlatform, setActivePlatform] = useState("chatgpt");
  const [activeStep, setActiveStep] = useState(0);

  // Why AI Search is the future
  const futureBenefits = [
    {
      icon: Users,
      title: "Users Ask AI Instead of Google",
      description: "Millions now use AI assistants for search queries",
      stat: "40% search traffic",
      trend: "+250% YoY growth",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "AI Delivers Answers, Not Links",
      description: "Direct answers reduce traditional website visits",
      stat: "70% direct answers",
      trend: "Contextual understanding",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Brand Authority Matters More",
      description: "AI recognizes and prioritizes authoritative entities",
      stat: "3.8x more cited",
      trend: "Entity recognition",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Early Mover Advantage",
      description: "First brands optimized dominate AI search results",
      stat: "92% market share",
      trend: "First-mover advantage",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Beyond Traditional SEO",
      description: "New optimization strategies for AI understanding",
      stat: "Next-gen visibility",
      trend: "Future-proofing",
      color: "from-red-500 to-rose-500",
    },
  ];

  // AI Platforms
  const aiPlatforms = {
    chatgpt: {
      name: "ChatGPT",
      description: "OpenAI's conversational AI with web search capabilities",
      icon: BrainCircuit,
      users: "100M+ weekly users",
      specialty: "Complex reasoning",
      color: "from-green-500 to-emerald-600",
      stats: ["85% user satisfaction", "92% accuracy rate", "40 languages"],
    },
    gemini: {
      name: "Google Gemini",
      description: "Google's multimodal AI with real-time search integration",
      icon: CpuIcon,
      users: "Integrated into Search",
      specialty: "Real-time information",
      color: "from-blue-500 to-indigo-600",
      stats: [
        "Billions of searches",
        "Multimodal understanding",
        "Direct answers",
      ],
    },
    copilot: {
      name: "Microsoft Copilot",
      description: "AI assistant integrated across Microsoft ecosystem",
      icon: Bot,
      users: "500M+ Office users",
      specialty: "Productivity integration",
      color: "from-purple-500 to-violet-600",
      stats: ["Windows integration", "Office automation", "Enterprise focus"],
    },
    perplexity: {
      name: "Perplexity AI",
      description: "Answer engine with citations and source attribution",
      icon: Search,
      users: "10M+ monthly users",
      specialty: "Research & citations",
      color: "from-purple-500 to-pink-600",
      stats: ["Source citations", "Research focus", "Academic use"],
    },
  };

  // Services included
  const services = [
    {
      icon: BrainCircuit,
      title: "Brand Entity Authority",
      description:
        "Establish your brand as an authoritative AI-recognized entity",
      features: [
        "Entity Recognition Setup",
        "Knowledge Graph Integration",
        "Brand Signal Optimization",
        "AI Trust Building",
      ],
      deliverables: "Entity Authority Score +85%",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      icon: Database,
      title: "AI-Readable Content",
      description:
        "Structure content for optimal AI comprehension and citation",
      features: [
        "Semantic Content Markup",
        "Topic Cluster Optimization",
        "Contextual Understanding",
        "Answer Framework Design",
      ],
      deliverables: "AI Citation Rate +62%",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
    {
      icon: Network,
      title: "Knowledge Graph Optimization",
      description: "Connect your brand within AI knowledge networks",
      features: [
        "Entity Relationship Mapping",
        "Topical Authority Signals",
        "Contextual Connections",
        "Semantic Network Building",
      ],
      deliverables: "Knowledge Graph Presence",
      color: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
      icon: Code,
      title: "Structured Data Enhancement",
      description: "Advanced schema markup for AI comprehension",
      features: [
        "AI-Optimized Schema",
        "Entity JSON-LD Markup",
        "Relationship Definitions",
        "Contextual Data Layers",
      ],
      deliverables: "Structured Data Score 95+",
      color: "bg-gradient-to-br from-amber-50 to-amber-100",
    },
    {
      icon: CircuitBoard,
      title: "AI Answer Engine Alignment",
      description: "Optimize for AI-generated answer visibility",
      features: [
        "Answer Snippet Optimization",
        "AI Assistant Compatibility",
        "Voice Search Readiness",
        "Multi-platform Visibility",
      ],
      deliverables: "AI Answer Visibility",
      color: "bg-gradient-to-br from-red-50 to-red-100",
    },
    {
      icon: LineChart,
      title: "AI Visibility Analytics",
      description: "Track and optimize AI search presence",
      features: [
        "AI Citation Tracking",
        "Visibility Score Monitoring",
        "Competitor AI Presence",
        "Performance Optimization",
      ],
      deliverables: "Visibility Dashboard",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    },
  ];

  // AI Understanding Process
  const aiUnderstanding = [
    {
      step: "Entity Recognition",
      description: "AI identifies your brand as a distinct entity",
      icon: Target,
      process: [
        "Brand signals",
        "Consistent references",
        "Authority indicators",
      ],
      outcome: "Brand becomes AI-recognized entity",
    },
    {
      step: "Contextual Understanding",
      description: "AI comprehends your expertise and relevance",
      icon: Brain,
      process: ["Content analysis", "Topic clustering", "Expertise mapping"],
      outcome: "AI understands your niche authority",
    },
    {
      step: "Trust Evaluation",
      description: "AI assesses credibility and reliability",
      icon: Shield,
      process: [
        "Authority signals",
        "Consistency checks",
        "Quality indicators",
      ],
      outcome: "Brand gains AI trust score",
    },
    {
      step: "Answer Integration",
      description: "AI integrates your insights into responses",
      icon: MessageSquare,
      process: ["Answer framework", "Citation readiness", "Relevance scoring"],
      outcome: "Brand featured in AI answers",
    },
  ];

  // Our process
  const process = [
    {
      step: "01",
      title: "AI Visibility Audit",
      description: "Comprehensive analysis of current AI search presence",
      activities: [
        "Brand Entity Analysis",
        "AI Platform Presence Check",
        "Competitor AI Visibility",
        "Gap Identification",
      ],
      icon: Search,
      duration: "1 Week",
    },
    {
      step: "02",
      title: "Authority Signal Mapping",
      description: "Identify and enhance brand authority indicators",
      activities: [
        "Entity Signal Optimization",
        "Knowledge Graph Setup",
        "Brand Consistency Audit",
        "Authority Building",
      ],
      icon: Target,
      duration: "2 Weeks",
    },
    {
      step: "03",
      title: "AI Content Structuring",
      description: "Optimize content for AI comprehension and citation",
      activities: [
        "Semantic Content Optimization",
        "AI-Readable Formatting",
        "Contextual Markup",
        "Answer Framework Design",
      ],
      icon: Code,
      duration: "3-4 Weeks",
    },
    {
      step: "04",
      title: "Multi-Platform Optimization",
      description: "Extend visibility across all AI search platforms",
      activities: [
        "Platform-Specific Optimization",
        "Structured Data Enhancement",
        "Entity Relationship Building",
        "Cross-Platform Consistency",
      ],
      icon: Globe,
      duration: "2 Weeks",
    },
    {
      step: "05",
      title: "Monitoring & Expansion",
      description: "Continuous optimization and visibility growth",
      activities: [
        "AI Citation Tracking",
        "Visibility Monitoring",
        "Strategy Refinement",
        "New Platform Integration",
      ],
      icon: LineChart,
      duration: "Ongoing",
    },
  ];

  // Expected outcomes
  const outcomes = [
    {
      metric: "85%",
      title: "AI Answer Visibility",
      description: "Brand appears in AI-generated answers and recommendations",
      icon: BrainCircuit,
      improvement: "+65% from baseline",
    },
    {
      metric: "4.2x",
      title: "Authority Recognition",
      description: "Higher perceived authority across AI platforms",
      icon: Award,
      improvement: "Industry leader status",
    },
    {
      metric: "Future-Proof",
      title: "Search Presence",
      description: "Visibility secured for next-generation search platforms",
      icon: Shield,
      improvement: "Beyond traditional SEO",
    },
    {
      metric: "92%",
      title: "Competitive Advantage",
      description: "Market leadership in AI search visibility",
      icon: TrendingUp,
      improvement: "First-mover position",
    },
  ];

  // Who it's best for
  const targetAudiences = [
    {
      title: "Forward-Thinking Brands",
      description: "Companies preparing for next-generation search",
      icon: Rocket,
      characteristics: [
        "Innovation focus",
        "Future planning",
        "Early adoption",
      ],
      results: [
        "First-mover advantage",
        "Market leadership",
        "Future-proofing",
      ],
    },
    {
      title: "SaaS & Tech Companies",
      description: "Tech-forward businesses needing AI visibility",
      icon: Cpu,
      characteristics: [
        "Technical audience",
        "AI adoption",
        "Innovation focus",
      ],
      results: ["Technical authority", "AI integration", "Market credibility"],
    },
    {
      title: "Thought Leaders",
      description: "Experts and consultants building AI-recognized authority",
      icon: Users,
      characteristics: [
        "Expertise focus",
        "Authority building",
        "Personal brand",
      ],
      results: ["AI recognition", "Expert status", "Trust establishment"],
    },
    {
      title: "Enterprise Innovators",
      description: "Large organizations investing in future visibility",
      icon: Building,
      characteristics: [
        "Scale focus",
        "Long-term strategy",
        "Market leadership",
      ],
      results: ["Market dominance", "Future readiness", "Competitive edge"],
    },
  ];

  // Why choose us
  const whyChooseUs = [
    {
      icon: BrainCircuit,
      title: "AI Search Specialists",
      desc: "Deep expertise in how AI platforms discover, evaluate, and recommend brands.",
    },
    {
      icon: Target,
      title: "Entity-First Strategy",
      desc: "We optimize your brand as a trusted entity, not just pages or keywords.",
    },
    {
      icon: Shield,
      title: "Future-Proof Methods",
      desc: "Ethical, sustainable optimization built for constantly evolving AI systems.",
    },
    {
      icon: Zap,
      title: "Early Mover Advantage",
      desc: "Get positioned ahead of competitors as AI search adoption accelerates.",
    },
    {
      icon: LineChart,
      title: "Measurable Results",
      desc: "Clear tracking of AI visibility, citations, and authority growth over time.",
    },
    {
      icon: Globe,
      title: "Multi-Platform Expertise",
      desc: "Optimization across ChatGPT, Gemini, Copilot, Perplexity, and emerging platforms.",
    },
  ];

// AI Search Optimization FAQs
const aiSearchFaqs = [
  {
    question: "What is AI Search Optimization?",
    answer:
      "AI Search Optimization focuses on optimizing your website and content so it can be discovered and referenced by AI-powered search engines, generative search tools, and AI assistants. It involves structured content, semantic SEO, and AI-friendly data architecture.",
  },
  {
    question: "How is AI Search Optimization different from traditional SEO?",
    answer:
      "Traditional SEO focuses primarily on ranking in search engines like Google through keywords and backlinks. AI Search Optimization goes further by structuring content so AI systems can understand, summarize, and recommend your content within AI-generated responses and knowledge panels.",
  },
  {
    question: "Which platforms benefit from AI Search Optimization?",
    answer:
      "AI Search Optimization helps improve visibility across emerging AI-driven discovery platforms, generative search experiences, AI assistants, and intelligent recommendation systems that analyze structured web content.",
  },
  {
    question: "What strategies do you use for AI search optimization?",
    answer:
      "Our strategies include semantic content structuring, schema markup, knowledge graph optimization, entity-based SEO, high-authority content development, and technical improvements that help AI systems interpret your content more effectively.",
  },
  {
    question: "Can AI Search Optimization improve website traffic?",
    answer:
      "Yes, by optimizing your content for AI-driven discovery systems, businesses can increase visibility, attract qualified audiences, and position their brand as a trusted source referenced by intelligent search systems.",
  },
  {
    question: "How long does it take to see results from AI search optimization?",
    answer:
      "Results vary depending on the website, competition, and content strategy. However, most businesses start seeing improvements in search visibility and content discoverability within a few months of consistent optimization.",
  },
];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <InnerHero
        title="AI Search Optimization for Next-Generation Visibility"
        subtitle="Get discovered in ChatGPT, Gemini, Copilot, and AI-powered search experiences"
        bgImage="/AISearchOptimization.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Search Optimization" },
        ]}
      />

      {/* What Is AI Search Optimization - Neural Network Visualization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT – Neural Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        AI Recognition Process
                      </h3>
                      <p className="text-gray-600 text-sm">
                        How AI understands brands
                      </p>
                    </div>
                  </div>

                  {/* Neural Diagram */}
                  <div className="relative h-64 flex items-center justify-center mb-8">
                    {/* Center Node */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="z-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg"
                    >
                      <span className="text-white font-bold">Brand</span>
                    </motion.div>

                    {/* SVG Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      {[
                        ["30%", "30%"],
                        ["70%", "30%"],
                        ["30%", "70%"],
                        ["70%", "70%"],
                      ].map(([x, y], i) => (
                        <line
                          key={i}
                          x1="50%"
                          y1="50%"
                          x2={x}
                          y2={y}
                          stroke="rgba(59,130,246,0.5)"
                          strokeWidth="2"
                        />
                      ))}
                    </svg>

                    {/* Peripheral Nodes */}
                    {[
                      {
                        label: "Authority",
                        pos: "top-6 left-6",
                        color: "from-blue-500 to-cyan-500",
                      },
                      {
                        label: "Content",
                        pos: "top-6 right-6",
                        color: "from-purple-500 to-pink-500",
                      },
                      {
                        label: "Trust",
                        pos: "bottom-6 left-6",
                        color: "from-green-500 to-emerald-500",
                      },
                      {
                        label: "Context",
                        pos: "bottom-6 right-6",
                        color: "from-amber-500 to-orange-500",
                      },
                    ].map((node, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.15 }}
                        viewport={{ once: true }}
                        className={`absolute ${node.pos} w-12 h-12 rounded-full bg-gradient-to-br ${node.color}
                                  flex items-center justify-center shadow-md`}
                      >
                        <span className="text-white text-xs font-medium">
                          {node.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mini Highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <div className="text-lg font-bold text-blue-600">
                        Entity-First
                      </div>
                      <div className="text-sm text-gray-600">
                        Brand recognition
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                      <div className="text-lg font-bold text-purple-600">
                        Trust Signals
                      </div>
                      <div className="text-sm text-gray-600">
                        AI credibility
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT – Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                             bg-gradient-to-r from-blue-50 to-cyan-50
                             text-blue-600 text-sm font-medium mb-6 border border-blue-100"
              >
                <Sparkles className="w-4 h-4" />
                Next-Generation Discovery
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Understands Brands, Not Pages
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AI Search Optimization ensures your business is understood,
                trusted, and recommended by AI-powered engines. AI surfaces
                authoritative brands — not just ranked links.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                The goal is becoming the trusted entity AI chooses to cite when
                answering real user questions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    value: "40%",
                    label: "Search via AI",
                    color: "text-blue-600",
                  },
                  {
                    value: "70%",
                    label: "Direct AI answers",
                    color: "text-purple-600",
                  },
                  {
                    value: "3.8x",
                    label: "Authority boost",
                    color: "text-green-600",
                  },
                  {
                    value: "92%",
                    label: "First-mover edge",
                    color: "text-amber-600",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                  >
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why AI Search Is the Future - Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The AI Search Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why traditional search is being transformed by AI
            </p>
          </motion.div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 transform -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-5 gap-6 relative">
              {futureBenefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center animate-pulse`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-500/50 hover:shadow-lg transition-all h-full shadow-sm">
                      <div className="lg:hidden flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-blue-600 text-xs font-medium">
                            {benefit.trend}
                          </div>
                          <div className="text-gray-900 font-bold">
                            {benefit.stat}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {benefit.description}
                      </p>

                      <div className="hidden lg:block pt-4 border-t border-gray-100">
                        <div className="flex flex-col items-center justify-between">
                          <div className="text-blue-600 text-xs font-medium">
                            {benefit.trend}
                          </div>
                          <div className="text-gray-900 font-bold">
                            {benefit.stat}
                          </div>
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

      {/* What's Included - Neural Network Grid */}
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
              Comprehensive AI Optimization
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end solutions for AI search visibility
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
                    className={`${service.color} rounded-2xl p-8 border border-gray-200 group-hover:border-blue-500/50 group-hover:shadow-lg transition-all h-full relative overflow-hidden`}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-grid-neural opacity-5"></div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <div className="text-sm font-medium text-blue-600">
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

      {/* Where Your Brand Gets Discovered - Platform Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 text-sm font-medium mb-4 border border-purple-100">
              <Globe className="w-4 h-4" />
              AI Platform Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discovered Across AI Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize for visibility across the AI search landscape
            </p>
          </motion.div>

          {/* Platform Switcher */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {Object.keys(aiPlatforms).map((platform) => {
                const platformData = aiPlatforms[platform];
                const Icon = platformData.icon;
                return (
                  <button
                    key={platform}
                    onClick={() => setActivePlatform(platform)}
                    className={`px-5 py-3 rounded-xl font-medium transition-all ${
                      activePlatform === platform
                        ? `bg-gradient-to-r ${platformData.color} text-white shadow-lg`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {platformData.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Platform Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlatform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${aiPlatforms[activePlatform].color} flex items-center justify-center`}
                    >
                      {(() => {
                        const Icon = aiPlatforms[activePlatform].icon;
                        return <Icon className="w-8 h-8 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {aiPlatforms[activePlatform].name}
                      </h3>
                      <p className="text-gray-600">
                        {aiPlatforms[activePlatform].description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        {aiPlatforms[activePlatform].users}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Capabilities
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {aiPlatforms[activePlatform].stats.map((stat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-gray-700 text-sm">
                              {stat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Optimization Strategy
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600">
                            Entity authority building
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600">
                            Structured data optimization
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600">
                            Contextual content alignment
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform Visualization */}
                <div className="relative">
                  <div
                    className={`bg-gradient-to-br ${aiPlatforms[activePlatform].color} rounded-2xl p-8 h-full flex items-center justify-center`}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 w-full">
                      <div className="text-gray-900 text-center mb-6">
                        <div className="text-2xl font-bold">
                          {aiPlatforms[activePlatform].name}
                        </div>
                        <div className="text-gray-600">AI Search Interface</div>
                      </div>

                      {/* AI Interface Mockup */}
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="text-gray-700 mb-2">
                            User Question:
                          </div>
                          <div className="text-gray-900">
                            "What are the best practices for{" "}
                            {activePlatform === "chatgpt"
                              ? "AI optimization"
                              : activePlatform === "gemini"
                                ? "search visibility"
                                : activePlatform === "copilot"
                                  ? "productivity tools"
                                  : "research methods"}
                            ?"
                          </div>
                        </div>

                        <div className="bg-gray-900 rounded-lg p-4">
                          <div className="text-green-400 mb-2">AI Answer:</div>
                          <div className="text-white">
                            Based on authoritative sources, experts recommend
                            focusing on entity recognition, structured data, and
                            contextual authority. Leading brands in this space
                            include
                            <span className="text-blue-300 font-medium">
                              [Your Brand]
                            </span>
                            which provides comprehensive solutions...
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            AI-generated response
                          </div>
                          <div>Brand citation: ✓</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* How AI Understands Brands - Interactive Process */}
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
              How AI Recognizes & Recommends Brands
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
              The cognitive process behind AI brand discovery
            </p>
          </motion.div>

          {/* STEP BUTTONS */}
          <div className="mb-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {aiUnderstanding.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl font-medium transition-all text-center ${
                    activeStep === idx
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {step.step}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE STEP CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-200 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* LEFT SIDE */}
                <div>
                  <div className="flex items-start sm:items-center gap-4 mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      {(() => {
                        const Icon = aiUnderstanding[activeStep].icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {aiUnderstanding[activeStep].step}
                      </h3>

                      <p className="text-gray-600 text-sm sm:text-base">
                        {aiUnderstanding[activeStep].description}
                      </p>
                    </div>
                  </div>

                  {/* PROCESS */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                      AI Processing Steps
                    </h4>

                    <div className="space-y-3">
                      {aiUnderstanding[activeStep].process.map(
                        (process, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-600 font-bold text-sm">
                                {pIdx + 1}
                              </span>
                            </div>

                            <span className="text-gray-700 text-sm sm:text-base">
                              {process}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 sm:p-6 border border-blue-200">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                    Result
                  </h4>

                  <div className="text-lg sm:text-xl text-blue-600 mb-4">
                    {aiUnderstanding[activeStep].outcome}
                  </div>

                  {/* CONFIDENCE BAR */}
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>AI Confidence Level</span>
                      <span>{85 + activeStep * 5}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 sm:h-3 rounded-full transition-all duration-500"
                        style={{ width: `${85 + activeStep * 5}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* BRAND STATUS */}
                  <div className="mt-6 flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <Brain className="w-4 h-4" />

                    <span>
                      Brand Recognition:
                      {activeStep >= 2 ? " ✓ Established" : " Building..."}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Optimization Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic, step-by-step approach to AI search dominance
            </p>
          </motion.div>

          {/* Horizontal Flow */}
          <div className="relative">
            {/* Desktop View */}
            <div className="hidden lg:flex items-stretch gap-6">
              {process.map((step, idx) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex-1"
                  >
                    <div
                      className="h-full bg-white rounded-2xl p-6 border border-gray-200
                                  hover:border-blue-500/40 hover:shadow-xl transition-all"
                    >
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold text-blue-600">
                          Step {step.step}
                        </span>
                        <span className="text-xs text-gray-500">
                          {step.duration}
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50
                                    flex items-center justify-center mb-4 border border-blue-100"
                      >
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {step.description}
                      </p>

                      {/* Activities */}
                      <div className="space-y-2">
                        {step.activities.slice(0, 3).map((activity, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span className="text-xs text-gray-700">
                              {activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    {idx < process.length - 1 && (
                      <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10">
                        <div
                          className="w-10 h-10 rounded-full bg-white border border-gray-200
                                      flex items-center justify-center shadow-sm"
                        >
                          <ArrowRight className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

{/* Mobile View (Carousel) */}
<div className="lg:hidden">

  <Swiper
    modules={[Pagination]}
    spaceBetween={16}
    slidesPerView={1.1}
    pagination={{ clickable: true }}
    breakpoints={{
      480: {
        slidesPerView: 1.2,
      },
      640: {
        slidesPerView: 1.4,
      },
    }}
  >

    {process.map((step, idx) => {
      const Icon = step.icon;

      return (
        <SwiperSlide key={idx}>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-full">

              {/* Step Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-blue-600">
                  Step {step.step}
                </span>
                <span className="text-xs text-gray-500">
                  {step.duration}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-4 border border-blue-100">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {step.description}
              </p>

              {/* Activities */}
              <div className="space-y-2">
                {step.activities.slice(0, 2).map((activity, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-xs text-gray-700">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </motion.div>

        </SwiperSlide>
      );
    })}

  </Swiper>

</div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes - AI Dashboard */}
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
              Measurable AI Visibility Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Concrete results from AI search optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {outcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500/50 hover:shadow-lg transition-all h-full shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                        {outcome.metric}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{outcome.description}</p>

                    {/* Improvement indicator */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Baseline</span>
                        <span>Target</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                          style={{ width: `${70 + idx * 10}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-right text-sm text-blue-600">
                        {outcome.improvement}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Why Choose Us - Grid Layout */}
      <WhyChooseCarousel
        title="Why Choose Our AI Search Optimization?"
        subtitle="We help brands get discovered, trusted, and recommended by AI platforms."
        items={whyChooseUs}
        autoplayDelay={3500}
        theme={{
          bgFrom: "#1a2d5f",
          bgTo: "#0f1f3f",
          accent: "#255EC8",
        }}
      />
      {/* Who This Service Is Best For - Entity Cards */}
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
              Ideal AI Optimization Candidates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Businesses poised for AI search dominance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500/50 hover:shadow-lg transition-all h-full shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform">
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

                    <div className="mb-6">
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Key Characteristics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {audience.characteristics.map((char, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Expected Outcomes
                        </h4>
                        <div className="space-y-2">
                          {audience.results.map((result, rIdx) => (
                            <div key={rIdx} className="flex items-center gap-3">
                              <Sparkles className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {result}
                              </span>
                            </div>
                          ))}
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

{/* FAQs */}
<FaqAccordion
  title="AI Search Optimization FAQs"
  subtitle="Find answers to common questions about optimizing your website for AI-powered search engines, generative search results, and intelligent discovery platforms."
  linkText="Want to improve your visibility in AI search results? Talk with our AI SEO experts."
  linkHref="/contact"
  faqs={aiSearchFaqs}
/>
      {/* Final CTA - Futuristic */}
      <FinalServiceCTA
        icon={BrainCircuit}
        title="Ready to Get Discovered by AI Search?"
        description="We help brands become trusted entities that AI platforms understand, cite, and recommend across next-generation search experiences."
        formTitle="Get Your Free AI Visibility Audit"
        challenges={[
          {
            value: "not-visible-ai",
            label: "Not Visible in AI Search Results",
          },
          {
            value: "weak-entity-signals",
            label: "Weak Brand Entity Authority",
          },
          {
            value: "unstructured-content",
            label: "Content Not AI-Readable or Structured",
          },
          {
            value: "no-knowledge-graph",
            label: "Missing Knowledge Graph Presence",
          },
          {
            value: "future-search-risk",
            label: "Concerned About Future Search Visibility",
          },
          {
            value: "other",
            label: "Other AI Search Challenge",
          },
        ]}
        primaryCta={{
          text: "Get AI Audit",
          icon: BrainCircuit,
        }}
        secondaryCta={{
          text: "Schedule a Call",
          icon: Phone,
        }}
        contactInfo={[
          { icon: Phone, text: "Call us: +91 98765 43210" },
          { icon: MessageCircle, text: "WhatsApp for AI Strategy Support" },
        ]}
      />
    </main>
  );
}
