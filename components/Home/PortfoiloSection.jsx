"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Code,
  Search,
  Share2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

/**
 * @typedef {"branding"|"web"|"seo"|"social"} PortfolioTab
 */

/**
 * @typedef {Object} TabContent
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {React.ReactNode} icon
 * @property {string} color
 * @property {string} bgGradient
 */

/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} title
 * @property {string} category
 * @property {string} description
 * @property {string} image
/** @type {{[key: string]: Project[]}} */
const projectsData = {
  branding: [
    {
      id: 1,
      title: "TechStart Brand Identity",
      category: "Brand Design",
      description:
        "Complete brand identity including logo, color palette, and brand guidelines for a tech startup.",
      image: "/images/campain/portfolio/p-1.png",
      tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      results: "250% increase in brand recognition",
    },
    {
      id: 2,
      title: "Cafe Rouge Rebrand",
      category: "Restaurant Branding",
      description:
        "Full restaurant rebrand with menu design, signage, and packaging materials.",
      image: "/elegant-restaurant-cafe-branding-design.jpg",
      tags: ["Rebrand", "Packaging", "Print Design"],
      results: "40% rise in customer footfall",
    },
    {
      id: 3,
      title: "FitLife Wellness Brand",
      category: "Health & Wellness",
      description:
        "Modern wellness brand identity for a fitness and nutrition coaching business.",
      image: "/fitness-wellness-brand-logo-colorful.jpg",
      tags: ["Wellness", "Fitness", "Brand Identity"],
      results: "3x increase in member signups",
    },
  ],
  web: [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Full-featured online store with payment integration, inventory management, and admin dashboard.",
      image: "/images/campain/portfolio/p-1.png",
      tags: ["Next.js", "E-commerce", "Stripe"],
      results: "$2M in first year sales",
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "Web Application",
      description:
        "Enterprise SaaS platform with real-time analytics, user management, and API integration.",
      image: "/images/campain/portfolio/p-2.png",
      tags: ["React", "Analytics", "API"],
      results: "10K+ active users",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "App Development",
      description:
        "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "/images/campain/portfolio/p-3.png",
      tags: ["React Native", "Security", "FinTech"],
      results: "1M downloads in 6 months",
    },
  ],
  seo: [
    {
      id: 1,
      title: "Local Business SEO",
      category: "Local SEO",
      description:
        "Increased local visibility for a dental clinic through targeted local SEO strategies.",
      image: "/seo-analytics-growth-chart-dashboard.jpg",
      tags: ["Local SEO", "Google My Business", "Citations"],
      results: "250% increase in organic traffic",
    },
    {
      id: 2,
      title: "E-Commerce SEO Campaign",
      category: "Technical SEO",
      description:
        "Boosted organic traffic for an online fashion store with comprehensive SEO audit.",
      image: "/website-traffic-growth-seo-analytics.jpg",
      tags: ["Technical SEO", "Content Strategy", "Link Building"],
      results: "180% traffic growth in 6 months",
    },
    {
      id: 3,
      title: "National Brand Rankings",
      category: "Enterprise SEO",
      description:
        "Achieved first-page rankings for 50+ competitive keywords for B2B software company.",
      image: "/seo-ranking-position-keywords-search-results.jpg",
      tags: ["Enterprise SEO", "Content Marketing", "Authority Building"],
      results: "Top 3 ranking for main keywords",
    },
  ],
  social: [
    {
      id: 1,
      title: "Restaurant Social Campaign",
      category: "Social Media Marketing",
      description:
        "Created engaging social media content that increased followers and bookings significantly.",
      image: "/restaurant-food-social-media-post-colorful.jpg",
      tags: ["Instagram", "Content Creation", "Food Photography"],
      results: "300% followers increase",
    },
    {
      id: 2,
      title: "Fashion Brand Launch",
      category: "Influencer Marketing",
      description:
        "Launched new fashion brand with strategic influencer partnerships and campaigns.",
      image: "/fashion-brand-social-media-campaign-stylish.jpg",
      tags: ["Facebook", "Influencer", "Campaign"],
      results: "2M+ reach in 3 months",
    },
    {
      id: 3,
      title: "Tech Product Promotion",
      category: "Social Ads",
      description:
        "Generated qualified leads through targeted social media advertising campaigns.",
      image: "/tech-product-social-media-advertisement-modern.jpg",
      tags: ["LinkedIn", "Lead Generation", "B2B"],
      results: "500+ qualified leads",
    },
  ],
};
/** @type {{[key: string]: TabContent}} */
const tabsData = {
  branding: {
    title: "Branding & Design",
    subtitle: "Creative Visual Identity",
    description:
      "We craft distinctive brand identities that capture your essence and resonate with your target audience. Our designs are strategic, memorable, and timeless.",
    color: "from-purple-600 via-pink-600 to-red-500",
    bgGradient: "from-purple-50 to-pink-50",
    icon: <Palette className="w-6 h-6" />,
  },
  web: {
    title: "Web & App Development",
    subtitle: "Digital Solutions",
    description:
      "From responsive websites to powerful applications, we build digital experiences that engage users and drive results with cutting-edge technology.",
    color: "from-blue-600 via-cyan-600 to-teal-600",
    bgGradient: "from-blue-50 to-cyan-50",
    icon: <Code className="w-6 h-6" />,
  },
  seo: {
    title: "SEO Optimization",
    subtitle: "Results-Driven Growth",
    description:
      "Our data-driven SEO strategies deliver measurable results. We optimize your digital presence to reach top rankings and attract qualified traffic.",
    color: "from-green-600 via-emerald-600 to-teal-600",
    bgGradient: "from-green-50 to-emerald-50",
    icon: <Search className="w-6 h-6" />,
  },
  social: {
    title: "Social Media",
    subtitle: "Posters & Campaigns",
    description:
      "Engaging content that sparks conversations and builds communities. We create social media campaigns that amplify your brand voice.",
    color: "from-orange-600 via-pink-600 to-purple-600",
    bgGradient: "from-orange-50 to-pink-50",
    icon: <Share2 className="w-6 h-6" />,
  },
};
export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("branding");

  const tabs = [
    { id: "branding", label: "Branding & Design" },
    { id: "web", label: "Web & App Development" },
    { id: "seo", label: "SEO Optimization" },
    { id: "social", label: "Social Media Marketing" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className=" py-16 md:py-20 overflow-hidden bg-secondary">
      <div className="w-full lg:w-[85%] xl:w-[80%] 2xl:w-[70%] px-4 relative z-10 mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                  Portfolio
                </span>
              </motion.div>

              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight mb-4 text-balance">
                Turning Ideas into{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Impactful Results
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Discover our portfolio of transformative projects across
                branding, web development, SEO, and social media marketing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex flex-1 lg:max-w-md"
            >
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-700 text-base leading-relaxed">
                  At Starway Web Digital, we combine creativity with strategy to
                  deliver comprehensive digital marketing solutions that drive
                  measurable results.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="flex flex-col gap-3 sticky top-8">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative overflow-hidden px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold text-left transition-all duration-300 flex items-center justify-between group text-sm md:text-base
                    ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg shadow-blue-900/30"
                        : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300"
                    }
                  `}
                >
                  <span className="relative z-10">{tab.label}</span>
                  <ArrowRight
                    className={`
                      w-4 h-4 md:w-5 md:h-5 transition-all duration-300 relative z-10
                      ${
                        activeTab === tab.id
                          ? "translate-x-0 opacity-100"
                          : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${tabsData[activeTab].color} shadow-2xl border border-white/20 `}
              >
                {/* Content Container */}
                <div className="relative z-10 p-8 md:p-12">
                  {/* Header Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-12"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
                      className="inline-block p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-6 text-white border border-white/30 hover:bg-white/30 transition-all"
                    >
                      {tabsData[activeTab].icon}
                    </motion.div>

                    <div className="mb-6">
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-lg font-semibold text-white/80 uppercase tracking-wide mb-2"
                      >
                        {tabsData[activeTab].title}
                      </motion.h2>

                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                      >
                        {tabsData[activeTab].subtitle}
                      </motion.h3>

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-yellow-300 to-white/60 rounded-full mt-4"
                      />
                    </div>

                    {/* Description Box */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-5"
                    >
                      <p className="text-white text-sm md:text-base leading-relaxed">
                        {tabsData[activeTab].description}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Project Cards Grid */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {projectsData[activeTab].map((project) => (
                      <motion.div
                        key={project.id}
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden bg-gray-200">
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                          />
                          {/* Overlay on hover */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center"
                          >
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileHover={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.3 }}
                              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl"
                            >
                              <ExternalLink className="w-7 h-7 text-gray-900" />
                            </motion.div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
