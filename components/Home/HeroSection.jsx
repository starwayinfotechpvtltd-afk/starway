"use client";

import { motion } from "framer-motion";
import ServicesMarquee from "./ServicesMarquee";
import AnimatedButton from "../Common/AnimatedButton";
import HeroLeadForm from "./HeroLeadForm";

export default function Hero() {
  return (
    <section className="w-full text-white relative overflow-hidden font-inter">
      <div className="max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-6 lg:py-18 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-tight">
            Grow Your Business Visibility Everywhere People Search
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-lg text-white/80 max-w-full lg:max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We help your business rank across Google, Bing, Maps, Social Media,
            and now on AI platforms like ChatGPT, Gemini, Copilot, and
            Perplexity. Be discoverable not just through SEO but also through
            the next generation of AI-driven search.
          </p>

          <div className="mt-7 sm:mt-8 flex justify-center lg:justify-start">
            <AnimatedButton
              href="/contact"
              label="Get a Free AI Visibility Audit"
            />
          </div>
        </motion.div>

        {/* RIGHT FORM BLOCK */}
        <motion.div
          className="relative w-full flex justify-center lg:justify-end"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full sm:w-[90%] md:w-[75%] lg:w-full">
            <HeroLeadForm />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SERVICES TEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="flex justify-center pb-10 sm:pb-14 lg:pb-12"
      >
        <div className="w-full sm:w-[90%] lg:w-[85%] xl:w-[80%] px-4 sm:px-6">
          <ServicesMarquee />
        </div>
      </motion.div>
    </section>
  );
}
