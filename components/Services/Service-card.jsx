"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative h-full rounded-2xl overflow-hidden group cursor-pointer"
      >
        {/* Glow overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#255EC8]/20 to-transparent opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Card */}
        <div className="relative p-8 h-full flex flex-col bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-300">
          {/* Accent orb */}
          <motion.div
            className="absolute -top-16 -right-16 w-40 h-40 bg-[#255EC8]/20 rounded-full blur-3xl"
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {service.title}
            </h3>
            <p className="text-sm font-semibold text-[#255EC8] mb-4">
              {service.tagline}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Features */}
            <div className="mb-6 flex-grow">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                What's Included:
              </h4>

              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{
                      opacity: isHovered ? 1 : 0.7,
                      x: isHovered ? 0 : -6,
                    }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#255EC8] to-[#1e3a5f] text-white text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <motion.div
              className="p-4 rounded-lg bg-[#255EC8]/10 border border-[#255EC8]/20 mb-6"
              animate={{ opacity: isHovered ? 1 : 0.85 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm font-semibold text-gray-900">
                Expected Outcome:
              </p>
              <p className="text-sm text-gray-600 mt-1">{service.outcome}</p>
            </motion.div>

            {/* CTA */}
            <Link href={service.cta?.href || "#"} className="mt-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="relative w-full py-3 px-4 rounded-lg font-semibold bg-gradient-to-r from-[#255EC8] to-[#1e3a5f] text-white overflow-hidden"
              >
                <motion.span
                  className="inline-flex items-center gap-2"
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.cta?.label || "Learn More"}
                  <span>→</span>
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
