"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const logos = [
  { src: "/images/techstack/tech-1.png", alt: "Tech" },
  { src: "/images/techstack/tech-2.png", alt: "Tech" },
  { src: "/images/techstack/tech-3.png", alt: "Tech" },
  { src: "/images/techstack/tech-4.png", alt: "Tech" },
  { src: "/images/techstack/tech-5.png", alt: "Tech" },
  { src: "/images/techstack/tech-7.png", alt: "Tech" },
  { src: "/images/techstack/tech-8.png", alt: "Tech" },
  { src: "/images/techstack/tech-9.png", alt: "Tech" },
  { src: "/images/techstack/tech-10.png", alt: "Tech" },
  { src: "/images/techstack/tech-11.png", alt: "Tech" },
  { src: "/images/techstack/tech-12.png", alt: "Tech" },
  { src: "/images/techstack/tech-15.png", alt: "Tech" },
  { src: "/images/techstack/tech-17.png", alt: "Tech" },
  { src: "/images/techstack/tech-18.png", alt: "Tech" },
  { src: "/images/techstack/tech-19.png", alt: "Tech" },
  { src: "/images/techstack/tech-20.webp", alt: "Tech" },
  { src: "/images/techstack/tech-21.png", alt: "Tech" },
  { src: "/images/techstack/tech-22.png", alt: "Tech" },
  { src: "/images/techstack/tech-23.png", alt: "Tech" },
  { src: "/images/techstack/tech-24.png", alt: "Tech" },
]

export default function TechnologyStackGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology That Powers Scalable Products
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Modern, reliable technologies used to build fast, secure,
            and scalable digital solutions.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <div className="bg-white rounded-2xl shadow-lg py-10">

            <Swiper
              modules={[Autoplay]}
              spaceBetween={40}
              slidesPerView={5}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
            >

              {logos.map((logo, index) => (

                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center">

                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={140}
                      height={60}
                      className="object-contain h-10 w-auto transition duration-300 hover:scale-110"
                    />

                  </div>
                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </motion.div>

      </div>
    </section>
  )
}