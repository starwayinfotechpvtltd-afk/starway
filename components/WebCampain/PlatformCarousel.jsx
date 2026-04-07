"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";

const logos = [
  { src: "/images/campain/techstack/tech-1.png", alt: "Spotify" },
  { src: "/images/campain/techstack/tech-2.png", alt: "Apple Podcasts" },
  { src: "/images/campain/techstack/tech-3.png", alt: "Google Podcasts" },
  { src: "/images/campain/techstack/tech-4.png", alt: "Soundcloud" },
  { src: "/images/campain/techstack/tech-5.png", alt: "Amazon Music" },
  { src: "/images/campain/techstack/tech-7.png", alt: "Stitcher" },
  { src: "/images/campain/techstack/tech-8.png", alt: "Stitcher" },
  { src: "/images/campain/techstack/tech-9.png", alt: "Stitcher" },
  { src: "/images/campain/techstack/tech-10.png", alt: "Stitcher" },
  { src: "/images/campain/techstack/tech-11.png", alt: "Spotify" },
  { src: "/images/campain/techstack/tech-12.png", alt: "Apple Podcasts" },
  { src: "/images/campain/techstack/tech-25.png", alt: "Google Podcasts" },
  { src: "/images/campain/techstack/tech-26.png", alt: "Soundcloud" },
  { src: "/images/campain/techstack/tech-15.png", alt: "Amazon Music" },
  { src: "/images/campain/techstack/tech-17.png", alt: "Stitcher" },
  { src: "/images/campain/techstack/tech-18.png", alt: "Stitcher" },
  { src: "/images/campain/techstack/tech-19.png", alt: "Stitcher" },
  { src: "/images/campain/techstack/tech-20.webp", alt: "Stitcher" },
    { src: "/images/campain/techstack/tech-21.png", alt: "Stitcher" },
  { src: "/images/campain/techstack/tech-22.png", alt: "Stitcher" },
  { src: "/images/campain/techstack/tech-23.png", alt: "Stitcher" },
  { src: "/images/campain/techstack/tech-24.png", alt: "Stitcher" },

];
export default function PlatformCarousel() {
  return (
    <div className="relative -mt-12 flex justify-center">

      <div className="relative bg-white rounded-2xl shadow-lg py-10 w-full max-w-[75%]">

        {/* ⭐ Google Review Badge */}
        <div className="absolute top-0 z-30 h-[120px]  bg-white  rounded-xl px-6 py-3 flex flex-col justify-center items-center">

          {/* Google Logo */}
          <Image
            src="/images/campain/google.png"
            alt="Google Reviews"
            width={150}
            height={40}
            className="object-contain"
          />

          {/* Rating Section */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800">
              4.9 out of 5
            </span>

            <div className="flex items-center gap-1 mt-1 text-amber-400 text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

        </div>

        {/* 🔥 Logo Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
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
                  height={50}
                  className="object-contain h-10 w-auto transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}