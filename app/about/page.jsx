"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Rocket,
  Users,
  Shield,
  TrendingUp,
  Zap,
  Sparkles,
  Lightbulb,
  Heart,
  Award,
  BarChart,
  Palette,
  Code,
  Smartphone,
  Search,
  MessageCircle,
  Globe,
  Building,
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Home,
  Clock,
  Star,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Brain,
  Cpu,
  Database,
  Cloud,
  Lock,
  RefreshCw,
  CheckCircle,
  Quote,
  Linkedin,
  Twitter,
  Calendar,
  Briefcase,
} from "lucide-react";
import InnerHero from "@/components/Common/InnerHero";
import FinalCTA from "@/components/Common/FinalCTA";

export default function AboutUsPage() {
  const [activeValue, setActiveValue] = useState("integrity");

  const teamMembers = [
    {
      role: "Strategy & Growth",
      members: [
        { name: "Alex Morgan", expertise: "Growth Strategy", experience: "10+ years" },
        { name: "Sarah Chen", expertise: "Digital Marketing", experience: "8+ years" },
      ],
    },
    {
      role: "Design & UX",
      members: [
        { name: "Marcus Rivera", expertise: "UI/UX Design", experience: "7+ years" },
        { name: "Lisa Park", expertise: "Brand Identity", experience: "6+ years" },
      ],
    },
    {
      role: "Technology",
      members: [
        { name: "David Kumar", expertise: "Full-Stack Dev", experience: "12+ years" },
        { name: "Emma Watson", expertise: "Mobile Apps", experience: "9+ years" },
      ],
    },
    {
      role: "AI & Innovation",
      members: [
        { name: "James Wilson", expertise: "AI Strategy", experience: "8+ years" },
        { name: "Priya Sharma", expertise: "Data Science", experience: "7+ years" },
      ],
    },
  ];

  const values = {
    integrity: {
      title: "Integrity & Transparency",
      description:
        "We believe in honest communication and clear processes. No hidden fees, no empty promises — just real results delivered with complete transparency.",
      icon: Shield,
      principles: ["Clear Pricing", "Honest Reporting", "No Hidden Costs", "Open Communication"],
    },
    innovation: {
      title: "Innovation & Adaptability",
      description:
        "Staying ahead of digital trends while adapting strategies to each client's unique needs. We embrace change and turn challenges into opportunities.",
      icon: Lightbulb,
      principles: ["Future-Forward Thinking", "Agile Methodology", "Continuous Learning", "Creative Problem Solving"],
    },
    client: {
      title: "Client-First Thinking",
      description:
        "Your success is our success. We work as an extension of your team, deeply understanding your goals to deliver solutions that truly move the needle.",
      icon: Heart,
      principles: ["Partnership Approach", "Goal Alignment", "Regular Check-ins", "Long-term Support"],
    },
    quality: {
      title: "Quality Over Quantity",
      description:
        "We focus on delivering exceptional work that drives meaningful results. Every project receives our full attention and dedication to excellence.",
      icon: Star,
      principles: ["Attention to Detail", "Best Practices", "Thorough Testing", "Performance Focus"],
    },
    growth: {
      title: "Growth Mindset",
      description:
        "Continuous improvement is in our DNA. We're always learning, testing, and optimizing to help our clients achieve sustainable growth.",
      icon: TrendingUp,
      principles: ["Data-Driven Decisions", "Performance Tracking", "Strategy Refinement", "Market Adaptation"],
    },
  };

  const industries = [
    { icon: Building, title: "Startups & SaaS", description: "Launch and scale tech products with growth-focused strategies", projects: 42 },
    { icon: ShoppingCart, title: "E-commerce", description: "Build and optimize online stores for maximum conversions", projects: 58 },
    { icon: GraduationCap, title: "Education & EdTech", description: "Learning platforms and educational technology solutions", projects: 36 },
    { icon: HeartPulse, title: "Healthcare", description: "Digital health solutions and medical practice platforms", projects: 27 },
    { icon: Home, title: "Real Estate", description: "Property tech and real estate digital platforms", projects: 31 },
    { icon: Globe, title: "Service Businesses", description: "Local and professional service digital transformation", projects: 49 },
  ];

  const approach = [
    { number: "01", title: "Discovery & Analysis", description: "Deep dive into your business, goals, and market position", icon: Target, detail: "Comprehensive research and strategy planning" },
    { number: "02", title: "Strategy Development", description: "Data-driven roadmap tailored to your objectives", icon: BarChart, detail: "Custom growth plans and implementation timeline" },
    { number: "03", title: "Execution & Iteration", description: "Agile implementation with continuous optimization", icon: RefreshCw, detail: "Regular testing and performance monitoring" },
    { number: "04", title: "Measurement & Growth", description: "Track results and scale successful strategies", icon: TrendingUp, detail: "Ongoing optimization and expansion" },
  ];

  const stats = [
    { value: "98%", label: "Client Retention Rate", icon: Heart },
    { value: "240+", label: "Projects Delivered", icon: Target },
    { value: "4.9/5", label: "Average Client Rating", icon: Star },
    { value: "15+", label: "Industries Served", icon: Globe },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-x-hidden">
      {/* ── Hero ── */}
      <InnerHero
        title="About Us"
        subtitle="Your growth partner in digital marketing, design, and technology."
        bgImage="/innerHero.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* ── Who We Are ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 text-sm font-medium mb-5 border border-cyan-100">
                <Users className="w-4 h-4 shrink-0" />
                Our Story
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Building Digital Foundations for Sustainable Growth
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-gray-600">
                <p>
                  We are a full-service digital growth agency helping businesses build strong digital foundations, increase visibility, and scale sustainably.
                </p>
                <p>
                  From digital marketing and AI search optimization to website and mobile app development, we combine strategy, creativity, and technology to deliver measurable impact.
                </p>
              </div>
            </motion.div>

            {/* Right: Mission/Vision card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-xl overflow-hidden">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-10 pointer-events-none" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-10 pointer-events-none" />

                <div className="relative z-10">
                  {/* Mission */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h3>
                      <p className="text-blue-600 text-sm">Drive Meaningful Growth</p>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
                    To help brands grow{" "}
                    <span className="font-semibold">smarter, faster, and stronger</span>{" "}
                    using data-driven marketing, thoughtful design, and scalable technology.
                  </p>

                  {/* Vision */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-gray-900">Our Vision</h4>
                        <p className="text-gray-500 text-xs sm:text-sm">Looking Ahead</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      To become a trusted global digital partner for businesses navigating the future of marketing, AI, and digital transformation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 leading-tight">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Strategic Approach
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A methodical process that ensures clarity, efficiency, and results
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 -translate-y-1/2 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
              {approach.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                      {/* Mobile: icon + number inline */}
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 opacity-20">{step.number}</div>
                      </div>

                      {/* Desktop: number on top */}
                      <div className="text-3xl font-bold text-gray-900 opacity-20 mb-2 hidden lg:block">
                        {step.number}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3">{step.description}</p>
                      <div className="text-xs sm:text-sm text-blue-600 font-medium">{step.detail}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Clients Choose Us
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The difference between working with an agency and partnering with a growth team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Approach</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "One partner for marketing, design, and technology",
                  "Focus on measurable results, not vanity metrics",
                  "Expertise in AI-driven search & future visibility",
                  "Scalable solutions for startups to enterprises",
                  "Long-term partnership mindset",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The Difference */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">The Difference</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "Integrated solutions vs. fragmented services",
                  "Strategic partnership vs. transactional relationship",
                  "Future-focused vs. reactive approach",
                  "Data-informed decisions vs. gut feelings",
                  "Sustainable growth vs. quick fixes",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-gray-600 text-xs">✓</span>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision and partnership
            </p>
          </motion.div>

          {/* Value Tabs */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {Object.keys(values).map((valueKey) => {
                const valueData = values[valueKey];
                const Icon = valueData.icon;
                return (
                  <button
                    key={valueKey}
                    onClick={() => setActiveValue(valueKey)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all flex items-center gap-2 ${
                      activeValue === valueKey
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="hidden xs:inline">{valueData.title.split("&")[0].trim()}</span>
                    <span className="xs:hidden">{valueData.title.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Value */}
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    {(() => {
                      const Icon = values[activeValue].icon;
                      return <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{values[activeValue].title}</h3>
                    <p className="text-blue-600 text-sm">Guiding Principle</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {values[activeValue].description}
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">In Practice</h4>
                <div className="space-y-3">
                  {values[activeValue].principles.map((principle, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Founder & CEO ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 text-sm font-medium mb-4 border border-blue-200">
              <Sparkles className="w-4 h-4 shrink-0" />
              Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Founder & CEO
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leadership driving innovation and sustainable growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Founder card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl">
                {/* Header */}
                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Users className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Abdullah Ali</h3>
                    <p className="text-blue-600 font-medium text-sm sm:text-base">Founder & CEO</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs sm:text-sm text-gray-500">15+ Years Experience</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="absolute -top-3 -left-3">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                  </div>
                  <blockquote className="text-sm sm:text-lg text-gray-700 italic pl-4 border-l-4 border-blue-500 py-2 leading-relaxed">
                    "Building digital solutions isn't just about technology — it's about creating opportunities for businesses to grow and thrive in an increasingly digital world."
                  </blockquote>
                </div>

                {/* Bio */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">About Abdullah Ali</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    With over 15 years of experience in digital strategy and technology, Abdullah founded the agency with a vision to bridge the gap between innovative technology and real business results.
                  </p>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                    {["Digital Strategy & Transformation", "Growth Marketing", "Technology Innovation", "Business Development"].map((expertise, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-700 leading-snug">{expertise}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-center gap-3">
                  <button className="px-3 sm:px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-all inline-flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </button>
                  <button className="px-3 sm:px-4 py-2 bg-cyan-50 text-cyan-600 rounded-lg text-sm font-medium hover:bg-cyan-100 transition-all inline-flex items-center gap-2">
                    <Twitter className="w-4 h-4" />
                    Follow
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-lg">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-5 sm:mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600 shrink-0" />
                  Leadership Journey
                </h4>

                <div className="space-y-4">
                  {[
                    { year: "2018", title: "Founded the Agency", description: "Started with a vision to merge technology and strategy" },
                    { year: "2020", title: "Global Expansion", description: "Expanded services to serve clients across 20+ countries" },
                    { year: "2022", title: "AI Integration", description: "Pioneered AI-driven digital solutions in the industry" },
                    { year: "2024", title: "Industry Recognition", description: "Awarded for innovation in digital transformation" },
                  ].map((milestone, index) => (
                    <div key={index} className="relative pl-8 pb-4 last:pb-0">
                      {index < 3 && (
                        <div className="absolute left-3 top-6 w-0.5 h-full bg-gradient-to-b from-blue-300 to-cyan-300" />
                      )}
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-medium text-blue-600 mb-0.5">{milestone.year}</div>
                        <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{milestone.title}</div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across diverse sectors and business models
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full -translate-y-12 translate-x-12 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-xl font-bold text-gray-900">{industry.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-xs sm:text-sm text-gray-500">{industry.projects} projects</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Growth Philosophy ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 sm:mb-8 border border-white/20">
              <Target className="w-4 h-4 shrink-0" />
              Our Growth Philosophy
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight">
              We Don't Chase Trends — We Build Foundations
            </h2>

            <p className="text-sm sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Whether it's SEO, AI search optimization, or app development, our focus is on long-term visibility, scalability, and sustainable growth. We build digital foundations that stand the test of time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {[
                { icon: Database, title: "Foundation First", description: "Solid technical and strategic foundations for lasting success" },
                { icon: TrendingUp, title: "Sustainable Growth", description: "Strategies that scale with your business, not just quick wins" },
                { icon: Shield, title: "Future-Ready", description: "Solutions designed for tomorrow's challenges and opportunities" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20 text-left sm:text-center">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
} 