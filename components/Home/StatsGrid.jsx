"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const STATS = [
  {
    value: "4.8",
    title: "Client Ratings",
    desc:
      "Consistently high ratings from satisfied clients across multiple platforms.",
  },
  {
    value: "98%",
    title: "Client Trust",
    desc:
      "Trusted worldwide by clients who rely on us for consistent results.",
  },
  {
    value: "7+",
    title: "Years Experience",
    desc:
      "Proven industry expertise delivering growth-focused digital solutions.",
  },
  {
    value: "150+",
    title: "Brands Scaled",
    desc:
      "Successfully grown brands across technology, retail, and services.",
  },
  {
    value: "15M+",
    title: "Revenue Generated",
    desc:
      "Over $15M in client revenue generated through performance-driven strategies.",
  },
];

export default function StatsCardSection() {
  return (
    <section className="w-full py-10 sm:py-16">
      <div className="w-full lg:w-[85%] xl:w-[80%] 2xl:w-[70%] px-4 mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative bg-white rounded-[28px] sm:rounded-[36px] shadow-xl px-6 sm:px-10 py-8 sm:py-12"
        >
          {/* TOP */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-20"
          >
            <div>
              <h3 className="text-lg sm:text-xl lg:text-4xl font-semibold text-destructive">
                We only deliver results.
              </h3>
              <p className="text-sm text-gray-500 mt-1 max-w-md">
                We don’t use excuses or shortcuts. Just measurable outcomes.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/contact">
                <button className="px-5 py-2 rounded-full bg-destructive text-white text-sm font-medium hover:bg-gray-800 transition">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                variants={item}
                className="space-y-2"
              >
                <h4 className="text-3xl sm:text-4xl font-bold text-destructive">
                  {stat.value}
                </h4>
                <p className="text-sm font-semibold text-gray-800">
                  {stat.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
