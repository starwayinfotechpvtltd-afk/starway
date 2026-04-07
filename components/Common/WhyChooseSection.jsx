"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import {
  Handshake,
  Target,
  BarChart3,
  Layers,
  ShieldCheck,
  Rocket,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const whyChooseData = [
  {
    icon: Handshake,
    title: "Solutions, Not Sales Pitches",
    desc: "We invest time understanding your business challenges, goals, and users before proposing any digital solution.",
  },
  {
    icon: Target,
    title: "Strategy First Approach",
    desc: "Every project begins with clear research, planning, and alignment to measurable business objectives.",
  },
  {
    icon: BarChart3,
    title: "Performance Transparency",
    desc: "We track performance using real metrics, ensuring full visibility into growth, ROI, and progress.",
  },
  {
    icon: Layers,
    title: "Unified Digital Expertise",
    desc: "Design, development, marketing, and automation teams work together under one streamlined process.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure Delivery",
    desc: "Our workflows follow best security practices, structured timelines, and long-term maintenance support.",
  },
  {
    icon: Rocket,
    title: "Built for Long-Term Growth",
    desc: "We create scalable systems that evolve with your business and adapt to future market demands.",
  },
  {
    icon: Target,
    title: "Data-Driven Decision Making",
    desc: "Every strategy is backed by comprehensive analytics, market research, and actionable insights.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Account Management",
    desc: "You get a dedicated team that understands your business and is committed to your success.",
  },
];

export default function WhyChooseSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a2d5f] to-[#0f1f3f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Why Choose Starways Web Digital?
            </h3>
            <p className="mt-3 text-gray-300 max-w-xl text-base">
              We partner with brands to deliver meaningful, measurable, and scalable digital growth.
            </p>
          </div>

          {/* NAV BUTTONS */}
          <div className="hidden md:flex gap-3">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0f1f3f] transition"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0f1f3f] transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="mt-14">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop
            spaceBetween={24}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-8"
          >
            {whyChooseData.map((item, idx) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="h-full">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 180, damping: 20 }}
                      className="h-full min-h-[300px] bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col relative overflow-hidden"
                    >
                      {/* Background Accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#255EC8]/30 to-transparent rounded-full -mr-16 -mt-16" />

                      {/* ICON */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#255EC8] to-[#1a3fa0] flex items-center justify-center mb-6 shadow-md">
                        <Icon className="text-white" size={28} />
                      </div>

                      {/* CONTENT */}
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 text-base leading-relaxed flex-grow">
                        {item.desc}
                      </p>

                      <div className="mt-5 text-[#255EC8] font-semibold text-sm flex items-center gap-2">
                        Learn more <ArrowRight size={16} />
                      </div>
                    </motion.div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
