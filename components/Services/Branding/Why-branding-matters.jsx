"use client"

import { motion } from "framer-motion"
import { CheckCircle, TrendingUp, Award, Heart, Zap, Target } from "lucide-react"

export default function WhyBrandingMatters() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Builds Trust & Credibility",
      description: "A strong brand creates confidence and reliability in the minds of your customers.",
    },
    {
      icon: Target,
      title: "Differentiates You from Competitors",
      description: "Stand out in a crowded market with a unique identity only your brand possesses.",
    },
    {
      icon: TrendingUp,
      title: "Improves Marketing Performance",
      description: "Strong branding amplifies all marketing efforts and increases campaign effectiveness.",
    },
    {
      icon: Heart,
      title: "Increases Customer Loyalty",
      description: "Customers don't just buy products—they buy into brands they love and believe in.",
    },
    {
      icon: Award,
      title: "Supports Premium Pricing",
      description: "Well-branded companies can charge more because perceived value is higher.",
    },
    {
      icon: Zap,
      title: "Accelerates Business Growth",
      description: "Consistent branding leads to faster growth, more referrals, and better retention.",
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#255EC8] to-[#1e3a5f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Branding Matters for{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Business Growth
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover how investing in your brand directly impacts your bottom line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-[#255EC8]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-white/70">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
