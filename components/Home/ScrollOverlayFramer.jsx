"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Eye,
  Search,
  RotateCcw,
  Rocket,
  Zap,
  Target,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const tabContents = [
  {
    id: "search",
    icon: Search,
    title: "AI Search Optimization",
    subtitle: "Rank Where AI Looks First",
    description:
      "Our AI search optimization ensures your content ranks in AI-powered results by focusing on semantic understanding, context relevance, and intent-driven queries. Master voice search and conversational AI to capture qualified traffic.",
    features: [
      "Semantic search optimization",
      "Intent-driven content strategy",
      "Voice search targeting",
      "Knowledge graph integration",
      "Natural language processing",
      "Context-aware content mapping",
    ],
    metrics: [
      { label: "Voice Search Rankings", value: "+89%" },
      { label: "Query Coverage", value: "+156%" },
    ],
    bg: "from-[#071A1A] via-[#0d3a3a] to-[#092525]",
    accent: "#00E5A8",
  },
  {
    id: "visibility",
    icon: Eye,
    title: "AI Mode Visibility",
    subtitle: "Stand Out in AI-Powered Search",
    description:
      "Google AI Mode redefines how customers discover businesses. We optimize your content for conversational queries and passage-level relevance to ensure your brand appears prominently in AI responses. Our cutting-edge strategies help you stay ahead in the AI-driven search landscape.",
    features: [
      "Conversational query optimization",
      "Passage-level content targeting",
      "AI snippet ranking",
      "Entity prominence enhancement",
      "Zero-click answer positioning",
      "Semantic relevance optimization",
    ],
    metrics: [
      { label: "Average CTR Increase", value: "+45%" },
      { label: "Visibility Score Boost", value: "+67%" },
    ],

    // 🔵 Blue-focused gradient (deep → modern)
    bg: "from-[#0A1E3F] via-[#0F2F5F] to-[#123A78]",

    // 🔹 Accent blue (high contrast on blue bg)
    accent: "#3B82F6", // Tailwind blue-500
  },
  {
    id: "refresh",
    icon: RotateCcw,
    title: "AI Content Refresh",
    subtitle: "Keep Your Content AI-Ready",
    description:
      "We continuously refresh and optimize your existing content to maintain relevance and authority across fast-evolving AI search algorithms. Regular updates ensure your content stays competitive and maintains top rankings.",
    features: [
      "Monthly content audits",
      "Algorithm-aligned updates",
      "Relevance scoring system",
      "Competitive gap analysis",
      "Content deprecation management",
      "Authority maintenance strategies",
    ],
    metrics: [
      { label: "Content Freshness", value: "98%" },
      { label: "Update Frequency", value: "2x/Month" },
    ],
    bg: "from-[#0E1A0E] via-[#1a3a1a] to-[#0d2410]",
    accent: "#8CC63F",
  },
  {
    id: "growth",
    icon: Rocket,
    title: "AI Growth Acceleration",
    subtitle: "Scale with AI Intelligence",
    description:
      "Accelerate growth using AI-driven strategies that scale visibility, drive qualified traffic, and convert users into customers. Our data-driven approach maximizes ROI across all AI channels with predictive analytics.",
    features: [
      "AI-powered traffic forecasting",
      "Conversion optimization AI",
      "Multi-channel AI strategy",
      "Performance tracking & reporting",
      "Predictive analytics modeling",
      "ROI optimization automation",
    ],
    metrics: [
      { label: "Traffic Growth", value: "+234%" },
      { label: "Conversion Rate", value: "+58%" },
    ],
    bg: "from-[#120D1F] via-[#2a1a4a] to-[#1a0f2e]",
    accent: "#A78BFA",
  },
];

const MetricCard = ({ label, value, accentColor }) => (
  <motion.div
    className="flex flex-col items-center p-3 rounded-lg bg-white/5 border border-white/10"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <p className="text-xs md:text-sm text-white/60 text-center mb-2">{label}</p>
    <p className="text-lg md:text-2xl font-bold" style={{ color: accentColor }}>
      {value}
    </p>
  </motion.div>
);

export default function AISEOSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Each card slides up and overlays the previous one instead of appearing sequentially
  const y0 = useTransform(scrollYProgress, [0, 0.1], ["0%", "-5%"]);
  const opacity0 = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const scale0 = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const y1 = useTransform(scrollYProgress, [0.2, 0.35], ["100%", "0%"]);
  const opacity1 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const scale1 = useTransform(scrollYProgress, [0.2, 0.5], [1.05, 0.95]);

  const y2 = useTransform(scrollYProgress, [0.45, 0.6], ["100%", "0%"]);
  const opacity2 = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const scale2 = useTransform(scrollYProgress, [0.45, 0.75], [1.05, 0.95]);

  const y3 = useTransform(scrollYProgress, [0.7, 0.85], ["100%", "0%"]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.7, 1], [1.05, 0.95]);

  const transforms = [
    { y: y0, opacity: opacity0, scale: scale0 },
    { y: y1, opacity: opacity1, scale: scale1 },
    { y: y2, opacity: opacity2, scale: scale2 },
    { y: y3, opacity: opacity3, scale: scale3 },
  ];
return (
  <section ref={containerRef} className="relative w-full pt-20">

    {/* ====================== HEADER (SAME FOR ALL) ====================== */}
    <div className="sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[80%] mx-auto px-4 py-2 lg:py-3 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold bg-clip-text text-blue-200  uppercase tracking-widest mb-3">
            Advanced AI SEO Solutions
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Dominate AI-Powered Search
          </h2>
          <p className="hidden lg:block text-base text-white/60 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to rank higher, drive
            more traffic, and accelerate business growth in the era of AI
            search.
          </p>
        </motion.div>
      </div>
    </div>

    {/* ====================== MOBILE + MD (NORMAL SCROLL) ====================== */}
    <div className="block lg:hidden px-4 py-16">
      <div className="w-full max-w-4xl mx-auto space-y-10">
        {tabContents.map((item) => {
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              className={`w-full bg-gradient-to-br ${item.bg} rounded-3xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm p-6 sm:p-8`}
            >
              <div className="flex flex-col gap-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <IconComponent
                    className="w-8 h-8"
                    style={{ color: item.accent }}
                  />
                </div>

                {/* Title */}
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-widest mb-3"
                    style={{ color: item.accent }}
                  >
                    {item.subtitle}
                  </p>

                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-base text-white/80 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  {/* <Link href="/services/aISearchOptimization">
                    <button
                      className="w-fit px-6 py-3 rounded-full font-semibold text-black transition-all hover:shadow-lg"
                      style={{ backgroundColor: item.accent }}
                    >
                      Learn More
                    </button>
                  </Link> */}
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" style={{ color: item.accent }} />
                    Key Features
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                      >
                        <Target
                          className="w-4 h-4 flex-shrink-0 mt-1"
                          style={{ color: item.accent }}
                        />
                        <span className="text-sm text-white/80">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <BarChart3
                      className="w-5 h-5"
                      style={{ color: item.accent }}
                    />
                    Results
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    {item.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center p-3 rounded-lg bg-white/5 border border-white/10"
                      >
                        <p className="text-xs text-white/60 text-center mb-2">
                          {metric.label}
                        </p>
                        <p
                          className="text-lg font-bold"
                          style={{ color: item.accent }}
                        >
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* ====================== LG+ (YOUR ORIGINAL OVERLAY SCROLL) ====================== */}
    <div className="hidden lg:block">
      <section ref={containerRef} className="relative h-[350vh] w-full">
        {/* Sticky pinned area */}
        <div className="sticky top-16 h-screen w-full overflow-hidden flex items-center justify-center px-4">
          <div className="w-full max-w-6xl relative h-full flex items-center justify-center">
            {tabContents.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  className="absolute w-full max-w-5xl"
                  style={{
                    y: transforms[i].y,
                    opacity: transforms[i].opacity,
                    scale: transforms[i].scale,
                    zIndex: 10 + i,
                  }}
                >
                  <div
                    className={`w-full bg-gradient-to-br ${item.bg} rounded-3xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm p-8 md:p-12`}
                  >
                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Left Content */}
                      <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {/* Icon */}
                        <motion.div
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <IconComponent
                            className="w-8 h-8"
                            style={{ color: item.accent }}
                          />
                        </motion.div>

                        {/* Title Section */}
                        <motion.p
                          className="text-sm md:text-base font-semibold uppercase tracking-widest mb-3"
                          style={{ color: item.accent }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {item.subtitle}
                        </motion.p>

                        <motion.h3
                          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {item.title}
                        </motion.h3>

                        <motion.p
                          className="text-base md:text-lg text-white/80 leading-relaxed mb-8"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {item.description}
                        </motion.p>

                        {/* CTA Button */}
                        {/* <motion.button
                          className="w-fit px-6 md:px-8 py-3 rounded-full font-semibold text-black transition-all hover:shadow-lg"
                          style={{ backgroundColor: item.accent }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          Learn More
                        </motion.button> */}
                      </motion.div>

                      {/* Right Content - Features & Metrics */}
                      <motion.div
                        className="flex flex-col gap-8"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {/* Features List */}
                        <div>
                          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <Zap
                              className="w-5 h-5"
                              style={{ color: item.accent }}
                            />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {item.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + idx * 0.05 }}
                              >
                                <Target
                                  className="w-4 h-4 flex-shrink-0 mt-1"
                                  style={{ color: item.accent }}
                                />
                                <span className="text-sm text-white/80">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div>
                          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <BarChart3
                              className="w-5 h-5"
                              style={{ color: item.accent }}
                            />
                            Results
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {item.metrics.map((metric, idx) => (
                              <MetricCard
                                key={idx}
                                label={metric.label}
                                value={metric.value}
                                accentColor={item.accent}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  </section>
);
}