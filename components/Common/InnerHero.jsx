"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InnerHero({
  title,
  subtitle,
  bgImage,
  breadcrumb = [],
}) {
  return (
    <section className="relative overflow-hidden pt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#255EC8]/90 via-[#1e3a8a]/80 to-[#0f172a]/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-25"
      >
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="mb-4 text-sm text-blue-100 flex items-center gap-2">
            {breadcrumb.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">
                    {item.label}
                  </span>
                )}
                {idx < breadcrumb.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className=" text-2xl sm:text-3xl md:text-3xl lg:text-5xl 2xl:text-6xl  font-bold text-white mb-4 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-xl 2xl:text-2xl text-blue-100 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
