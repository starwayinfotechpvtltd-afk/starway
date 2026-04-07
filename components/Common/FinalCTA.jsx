"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 w-full bg-secondary">
      {/* MAIN CONTAINER – 80% WIDTH */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-[95%] sm:max-w-[90%] md:max-w-[80%] mx-auto rounded-3xl bg-gradient-to-br from-[#0B1D3A] via-[#0F2A55] to-[#0B1D3A] border border-white/10 p-10 sm:p-14 overflow-hidden"
      >
        {/* Decorative SVG Shapes */}
        <svg
          className="absolute top-4 left-4 opacity-25"
          width="180"
          height="180"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="#00C8FF" />
        </svg>

        <svg
          className="absolute bottom-4 right-4 opacity-20"
          width="220"
          height="220"
          viewBox="0 0 240 240"
        >
          <rect width="240" height="240" rx="60" fill="#1E90FF" />
        </svg>

        {/* CONTENT GRID */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4">
              Ready to Grow With Us?
            </h2>

            <p className="text-white/80 text-lg sm:text-xl mt-6 leading-relaxed">
              Partner with a digital marketing team focused on strategy,
              creativity, and measurable performance.
            </p>

            <p className="text-white/60 text-base mt-4">
              Get insights, updates, and growth strategies straight to your
              inbox.
            </p>
          </div>

          {/* RIGHT CTA */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              {/* Email Input */}
              <div className="w-full sm:w-[60%]">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#abc2ed]"
                />
              </div>

              {/* Button */}
              <button
                className="w-full sm:w-[40%] px-6 py-4 rounded-xl bg-[#abc2ed] text-[#0B1D3A] font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </div>

            <p className="text-white/50 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
