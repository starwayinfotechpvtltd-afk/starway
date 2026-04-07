"use client"

import { motion } from "framer-motion"

export default function WhatIsBranding() {
  const keyPoints = [
    { title: "Voice", description: "How you communicate with your audience" },
    { title: "Visuals", description: "Logo, colors, typography, imagery" },
    { title: "Values", description: "What your business stands for" },
    { title: "Positioning", description: "How you compete in the market" },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a3a8a] to-[#255EC8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Is{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Branding?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Branding is how your audience recognizes, remembers, and trusts your business. It's not just a logo — it's
            your voice, visuals, values, and positioning combined into one cohesive identity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-[#255EC8]">{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
              <p className="text-white/70">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
