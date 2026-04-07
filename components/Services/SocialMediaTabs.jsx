"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  TrendingUp,
  MessageCircle,
  Video,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const tabs = [
  {
    id: "community",
    title: "Community Building",
    icon: Users,
    description:
      "Build real relationships with your audience and turn followers into loyal brand advocates.",
    points: [
      "Two-way conversations instead of one-way promotions",
      "Stronger brand trust through consistent engagement",
      "Higher retention and repeat interactions",
    ],
    stat: "3× Higher Engagement",
    bestFor: "Brands focused on long-term loyalty and audience trust",
  },
  {
    id: "content",
    title: "Content & Storytelling",
    icon: Video,
    description:
      "Tell stories that resonate emotionally and position your brand as memorable and relatable.",
    points: [
      "Short-form, reels, and carousel-based storytelling",
      "Content aligned with brand voice and values",
      "Higher shareability and reach organically",
    ],
    stat: "70% More Reach",
    bestFor: "Brands that want strong visibility and recall",
  },
  {
    id: "engagement",
    title: "Real Engagement",
    icon: MessageCircle,
    description:
      "Meaningful engagement drives visibility, trust, and algorithmic growth.",
    points: [
      "Comments, DMs, and replies handled strategically",
      "Audience feedback used to refine content",
      "Improved algorithm signals for reach",
    ],
    stat: "2× Interaction Rate",
    bestFor: "Businesses aiming for high audience interaction",
  },
  {
    id: "growth",
    title: "Consistent Growth",
    icon: TrendingUp,
    description:
      "Growth that compounds over time with strategy, consistency, and data.",
    points: [
      "Monthly content planning and optimization",
      "Audience insights-driven decisions",
      "Sustainable, non-spike growth patterns",
    ],
    stat: "Steady Monthly Growth",
    bestFor: "Companies focused on predictable, scalable growth",
  },
  {
    id: "analytics",
    title: "Performance Insights",
    icon: BarChart3,
    description:
      "Data-backed decisions ensure every post contributes to business goals.",
    points: [
      "Content and engagement performance tracking",
      "Audience behavior and timing analysis",
      "Continuous optimization using insights",
    ],
    stat: "Actionable Analytics",
    bestFor: "Teams driven by performance and ROI metrics",
  },
  {
    id: "authority",
    title: "Brand Authority",
    icon: ShieldCheck,
    description:
      "Position your brand as a trusted voice and industry leader through consistent value-driven content.",
    points: [
      "Educational and insight-driven content strategy",
      "Thought leadership posts and expert positioning",
      "Higher credibility and brand recall",
    ],
    stat: "Top-of-Mind Trust",
    bestFor: "Brands looking to build authority and long-term credibility",
  },
];

export default function SocialMediaTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-4">
            Why Social Media Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic social media builds visibility, trust, and long-term
            growth for your brand.
          </p>
        </div>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* LEFT TABS */}
          <div
            className="grid grid-cols-2 gap-3 lg:flex lg:flex-col"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab.id === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all
          ${isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }
        `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <activeTab.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeTab.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {activeTab.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {activeTab.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-600" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50">
                  <span className="text-blue-700 font-bold">
                    {activeTab.stat}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
