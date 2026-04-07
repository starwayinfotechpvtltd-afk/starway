"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AnimatedButton({
  href = "/",
  label = "Click Me",
  className = "",
  glowIntensity = "medium",
}) {

  const glowConfigs = {
    low: {
      buttonGlow: "group-hover:shadow-[0_0_20px_rgba(44,99,201,0.35)]",
      ringGlow: "0 0 12px rgba(44,99,201,0.45)",
    },
    medium: {
      buttonGlow: "group-hover:shadow-[0_0_30px_rgba(44,99,201,0.5)]",
      ringGlow: "0 0 18px rgba(44,99,201,0.6)",
    },
    high: {
      buttonGlow: "group-hover:shadow-[0_0_40px_rgba(44,99,201,0.65)]",
      ringGlow: "0 0 25px rgba(44,99,201,0.75)",
    },
  };

  const glow = glowConfigs[glowIntensity] || glowConfigs.medium;

  return (
    <motion.div
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      initial="initial"
      className="inline-block"
    >
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-4 bg-white text-[#2C63C9] font-semibold px-6 py-4 rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] ${glow.buttonGlow} ${className}`}
      >

        {/* Sliding shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2C63C9]/10 to-transparent"
          variants={{
            initial: { x: "-100%" },
            hover: { x: "100%" },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Button text */}
        <motion.span
          className="relative z-10"
          variants={{
            initial: { x: 0 },
            hover: { x: -3 },
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>

        {/* Arrow container */}
        <motion.span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#2C63C9]/10 group-hover:bg-[#2C63C9] transition-all duration-300">

          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            variants={{
              initial: { opacity: 0, boxShadow: "0 0 0 rgba(44,99,201,0)" },
              hover: { opacity: 1, boxShadow: glow.ringGlow },
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Arrow animation */}
          <motion.div
            variants={{
              initial: { rotate: 0, scale: 1 },
              hover: { rotate: 45, scale: 1.15 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
          >
            <ArrowUpRight className="w-5 h-5 text-[#2C63C9] group-hover:text-white transition-colors duration-200" />
          </motion.div>

        </motion.span>

        {/* Soft outer glow */}
        <motion.div
          className="absolute -inset-2 rounded-full bg-[#2C63C9]/10 blur-xl -z-10"
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.3 }}
        />

      </Link>
    </motion.div>
  );
}