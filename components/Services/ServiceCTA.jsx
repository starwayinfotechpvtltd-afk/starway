"use client";

import { motion } from "framer-motion";

export default function ServiceCTA() {
  return (
    <section className="px-2 py-16 sm:py-20 lg:py-24 w-full bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#0B1D3A] via-[#0F2A55] to-[#0B1D3A] border border-white/10 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 overflow-hidden"
      >
        {/* Decorative SVG Shapes */}
        <svg
          className="absolute -top-10 -left-10 opacity-20 w-40 sm:w-48"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="#00C8FF" />
        </svg>

        <svg
          className="absolute -bottom-10 -right-10 opacity-20 w-48 sm:w-56"
          viewBox="0 0 240 240"
        >
          <rect width="240" height="240" rx="60" fill="#1E90FF" />
        </svg>

        {/* CONTENT GRID */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Ready to Grow With Us?
            </h2>

            <p className="text-white/80 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed">
              Partner with a digital marketing team focused on strategy,
              creativity, and measurable performance.
            </p>

            <p className="text-white/60 text-sm sm:text-base mt-3 sm:mt-4">
              Get insights, updates, and growth strategies straight to your inbox.
            </p>
          </div>

          {/* RIGHT CTA */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-md">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-[3] px-5 py-4 rounded-xl bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#abc2ed]"
              />
              {/* Button */}
              <button
                className="w-full sm:flex-[2] px-5 py-4 rounded-xl bg-[#abc2ed] text-[#0B1D3A] font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </div>

            <p className="text-white/50 text-xs sm:text-sm mt-3 sm:mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
