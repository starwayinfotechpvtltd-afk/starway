"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

import "swiper/css";

const testimonials = [
  {
    name: "Cameron Wilson",
    role: "Founder, Pixel Studio",
    review:
      "Working with this team was an absolute pleasure. They understood our vision immediately and delivered beyond expectations.",
  },
  {
    name: "Wade Warren",
    role: "UI/UX Designer",
    review:
      "Their attention to detail and design thinking is outstanding. The final product exceeded our internal quality benchmarks.",
  },
  {
    name: "Jenny Wilson",
    role: "Startup Founder",
    review:
      "From strategy to launch, the process was smooth and transparent. Highly professional and extremely reliable.",
  },
  {
    name: "Robert Fox",
    role: "Product Manager",
    review:
      "They transformed our outdated platform into a modern experience.",
  },
  {
    name: "Kristin Watson",
    role: "Marketing Director",
    review:
      "The team delivered on time and maintained excellent communication.",
  },
  {
    name: "Devon Lane",
    role: "CEO, TechNova",
    review:
      "Exceptional service and technical expertise. We saw measurable results within weeks.",
  },
];

export default function TestimonialsSection() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              Our Awesome Clients
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mt-3 rounded-full" />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="hover:text-black transition"
            >
              ← Prev
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="hover:text-black transition"
            >
              Next →
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 rounded-xl p-8 h-full hover:shadow-lg transition duration-300 flex flex-col justify-between">
                
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {item.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.review}
                  </p>
                </div>

                <div className="flex gap-1 text-yellow-400">
                  {Array(5).fill(0).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}