// "use client";
// import React, { useRef, useEffect } from "react";
// import { useAnimationFrame } from "framer-motion";

// const clients = [
//   { image: "/images/clients/1.svg" },
//   { image: "/images/clients/2.svg" },
//   { image: "/images/clients/3.svg" },
//   { image: "/images/clients/4.svg" },
//   { image: "/images/clients/5.svg" },
//   { image: "/images/clients/6.svg" },
//   { image: "/images/clients/9.svg" },
//   { image: "/images/clients/10.svg" },
//   { image: "/images/clients/11.webp" },
//   { image: "/images/clients/12.webp" },
//   { image: "/images/clients/13.webp" },
//   { image: "/images/clients/14.webp" },
//   { image: "/images/clients/15.svg" },
//   { image: "/images/clients/16.webp" },
//   { image: "/images/clients/18.avif" },
//   { image: "/images/clients/19.png" },
//   { image: "/images/clients/21.png" },
//   { image: "/images/clients/22.png" },
//   { image: "/images/clients/23.webp" },
//   { image: "/images/clients/24.webp" },
//   { image: "/images/clients/25.png" },
//   { image: "/images/clients/26.webp" },
//   { image: "/images/clients/27.png" },
// ];

// export default function InfiniteClientSlider() {
//   const rowRef = useRef(null);
//   const x = useRef(0);

//   const baseSpeed =
//     typeof window !== "undefined" && window.innerWidth < 768 ? 100 : 50;

//   useEffect(() => {
//     if (rowRef.current) {
//       const width = rowRef.current.scrollWidth / 2;
//       x.current = 0;
//       rowRef.current.style.transform = `translateX(${x.current}px)`;
//     }
//   }, []);

//   useAnimationFrame((_, delta) => {
//     if (!rowRef.current) return;

//     const width = rowRef.current.scrollWidth / 2;
//     x.current -= (baseSpeed * delta) / 1000; // move left
//     if (Math.abs(x.current) >= width) x.current = 0; // reset to start

//     rowRef.current.style.transform = `translateX(${x.current}px)`;
//   });

//   return (
//     <div className="w-[90%] mx-auto flex flex-col gap-10 mt-20 overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-white shadow-lg">
//       <div className="relative w-full overflow-hidden">
//         <div ref={rowRef} className="flex gap-10">
//           {clients.concat(clients).map((client, index) => (
//             <img
//               key={index}
//               src={client.image}
//               alt={`client-${index}`}
//               className="h-20 w-auto object-contain flex-shrink-0 bg-white"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



//======


"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full bg-[#f4f3f1] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f6f5f3] rounded-[28px] p-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* LEFT CONTENT */}
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Clients
              </p>

              <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-10">
                What people say <br /> about us?
              </h2>

              {/* Custom navigation */}
              <div className="flex gap-4">
                <button
                  ref={prevRef}
                  id="testimonial-prev"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  ←
                </button>
                <button
                  ref={nextRef}
                  id="testimonial-next"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  →
                </button>
              </div>
            </div>

            {/* TESTIMONIAL CAROUSEL */}
            <div className="lg:col-span-2">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                spaceBetween={24}
                slidesPerView={1}
                onInit={(swiper) => {
                  // Override swiper navigation elements
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.2,
                  },
                  768: {
                    slidesPerView: 1.3,
                  },
                  1024: {
                    slidesPerView: 1.6,
                  },
                }}
              >
                {/* Card 1 */}
                <SwiperSlide>
                  <TestimonialCard
                    image="/avatar-1.jpg"
                    name="Jack O'Holleran"
                    role="Co-Founder / CEO at Skale"
                    text="The Piqo team delivered all our requirements in the best possible way and on time. We are very happy to collaborate with this team."
                  />
                </SwiperSlide>

                {/* Card 2 */}
                <SwiperSlide>
                  <TestimonialCard
                    image="/avatar-2.jpg"
                    name="Allison C."
                    role="Board Member"
                    text="We were delighted with the results and impressed by the professionalism. The outcome exceeded our expectations."
                  />
                </SwiperSlide>

                {/* Card 3 */}
                <SwiperSlide>
                  <TestimonialCard
                    image="/avatar-3.jpg"
                    name="Michael R."
                    role="Product Lead"
                    text="Outstanding communication and execution. Everything was delivered exactly as promised."
                  />
                </SwiperSlide>
                
                {/* Card 4 - Added one more for better carousel */}
                <SwiperSlide>
                  <TestimonialCard
                    image="/avatar-4.jpg"
                    name="Sarah Johnson"
                    role="Marketing Director"
                    text="Exceptional service from start to finish. The team's attention to detail is remarkable."
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* BRAND LOGO CAROUSEL */}
          <div className="mt-16">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={4000}
              loop={true}
              loopAdditionalSlides={3}
              slidesPerView="auto"
              spaceBetween={40}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              className="opacity-70"
            >
              {[
                "Skale",
                "Metafy",
                "UX Cabin",
                "digikala",
                "Citizen",
                "Unsplash",
                "bettermotion",
                "sololearn",
                "bubblehouse",
                "Company 10",
                "Company 11",
                "Company 12",
              ].map((brand, index) => (
                <SwiperSlide key={brand} style={{ width: 'auto' }}>
                  <div className="flex justify-center items-center px-4">
                    <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                      {brand}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

/* TESTIMONIAL CARD */
function TestimonialCard({ image, name, role, text }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm w-full max-w-[420px] h-full mx-auto lg:mx-0">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
          <span className="text-lg font-bold text-blue-600">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}