"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"

import { ArrowLeft, ArrowRight } from "lucide-react"

export default function WhyChooseCarousel({
  title,
  subtitle,
  items,
  autoplayDelay = 3000,
  theme = {
    bgFrom: "#1a2d5f",
    bgTo: "#0f1f3f",
    accent: "#255EC8",
  },
}) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section
      className="py-16 md:py-24"
      style={{
        background: `linear-gradient(135deg, ${theme.bgFrom}, ${theme.bgTo})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
            {subtitle && (
              <p className="mt-3 text-gray-300 max-w-xl text-base">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* NAVIGATION */}
          <div className="hidden md:flex gap-3">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 pt-6"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            loop
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {items.map((item, idx) => {
              const Icon = item.icon

              return (
                <SwiperSlide key={idx} className="pt-4">
                  <motion.div
                    whileHover={{ y: -12 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="h-full min-h-[280px] rounded-3xl bg-white p-8 shadow-lg border border-white/20 relative overflow-hidden group"
                  >
                    {/* Accent blob */}
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 transition-transform duration-300 group-hover:scale-150"
                      style={{
                        background: `linear-gradient(135deg, ${theme.accent}66, transparent)`,
                      }}
                    />

                    {/* ICON */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${theme.accent}, ${theme.bgFrom})`,
                      }}
                    >
                      <Icon className="text-white" size={28} />
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {item.cta && (
                      <div
                        className="mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition"
                        style={{ color: theme.accent }}
                      >
                        {item.cta}
                      </div>
                    )}
                  </motion.div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
