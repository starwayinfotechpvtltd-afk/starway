"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, RefreshCw, Rocket, ShoppingBag } from "lucide-react";

const impactByAudience = [
  {
    key: "startup",
    title: "Product-First Startups",
    description: "Early-stage teams validating ideas, usability, and adoption",
    icon: Rocket,
    impact: [
      { metric: "38%", label: "Higher Conversions" },
      { metric: "52%", label: "Lower Bounce Rate" },
      { metric: "2× Faster", label: "MVP Iterations" },
    ],
    outcomes: [
      "Stronger product–market fit",
      "Clearer user journeys",
      "Faster validation cycles",
      "Improved early retention",
    ],
    focus: ["Onboarding UX", "Core feature clarity", "Rapid usability testing"],
  },
  {
    key: "saas",
    title: "SaaS & Tech Platforms",
    description: "Feature-rich platforms requiring clarity and scalability",
    icon: Cpu,
    impact: [
      { metric: "45%", label: "Faster Task Completion" },
      { metric: "4.8/5", label: "User Satisfaction" },
      { metric: "30%", label: "Feature Adoption" },
    ],
    outcomes: [
      "Lower support dependency",
      "Improved feature discoverability",
      "Higher long-term retention",
      "Reduced churn",
    ],
    focus: [
      "Design systems",
      "Workflow simplification",
      "Scalable UI patterns",
    ],
  },
  {
    key: "ecommerce",
    title: "E-commerce Brands",
    description: "Conversion-driven stores and shopping experiences",
    icon: ShoppingBag,
    impact: [
      { metric: "34%", label: "Checkout Completion" },
      { metric: "41%", label: "Lower Cart Abandonment" },
      { metric: "+22%", label: "Higher AOV" },
    ],
    outcomes: [
      "More completed purchases",
      "Improved mobile conversions",
      "Stronger buyer trust",
      "Higher repeat purchases",
    ],
    focus: ["Checkout UX", "Product discovery", "Mobile-first shopping"],
  },
  {
    key: "redesign",
    title: "Website Redesigns",
    description: "Modernizing outdated digital experiences",
    icon: RefreshCw,
    impact: [
      { metric: "62%", label: "Lower Bounce Rate" },
      { metric: "More Leads", label: "Higher Engagement" },
      { metric: "Stronger Trust", label: "Brand Credibility" },
    ],
    outcomes: [
      "Modern visual identity",
      "Improved engagement metrics",
      "Higher-quality inbound leads",
      "Future-ready scalability",
    ],
    focus: ["Information architecture", "Visual hierarchy", "Performance UX"],
  },
];

export default function DesignImpactTabs() {
  const [active, setActive] = useState(impactByAudience[0]);

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-destructive mb-4 px-4">
            Design Impact by Business Type
          </h2>
          <p className="text-base sm:text-xl text-gray-600 px-4">
            UI/UX strategies tailored to how different businesses grow and
            scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1fr] gap-8 lg:gap-12 w-full">
          {/* LEFT TABS */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:flex lg:flex-col lg:gap-3 order-2 lg:order-1">
            {impactByAudience.map((item) => {
              const Icon = item.icon;
              const isActive = active.key === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => setActive(item)}
                  className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 rounded-xl text-left transition-all h-full
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-800 border border-gray-200 hover:bg-blue-50 hover:shadow-md"
                    }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:leading-tight sm:text-base truncate">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative order-1 lg:order-2 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-200 w-full"
              >
                {/* TITLE */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {active.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed">
                    {active.description}
                  </p>
                </div>

                {/* METRICS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                  {active.impact.map((i, idx) => (
                    <div key={idx} className="rounded-xl bg-blue-50 p-3 sm:p-4 text-center">
                      <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                        {i.metric}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-800 mt-1">
                        {i.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* OUTCOMES */}
                <div className="mb-8 sm:mb-10">
                  <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">
                    Business Outcomes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {active.outcomes.map((o, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                      >
                        <span className="text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                        <span className="leading-relaxed">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FOCUS AREAS */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">
                    UX Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {active.focus.map((f, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
