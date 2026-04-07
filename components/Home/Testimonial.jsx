// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import clsx from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Jack O'Holleran",
//     role: "Co-Founder / CEO at Skale",
//     image: "https://i.pravatar.cc/150?u=jack",
//     content:
//       "The Piqo team delivered all our requirements in the best possible way and on time. We are very happy to collaborate with this team.",
//   },
//   {
//     id: 2,
//     name: "Allison Casals",
//     role: "Board Member at Beta",
//     image: "https://i.pravatar.cc/150?u=allison",
//     content:
//       "We were delighted with the 3D map for our website. The attention to detail and smooth animations truly elevated our user experience.",
//   },
//   {
//     id: 3,
//     name: "Marcus Chen",
//     role: "CTO at TechFlow",
//     image: "https://i.pravatar.cc/150?u=marcus",
//     content:
//       "Exceptional design patterns and code quality. It's rare to find a team that bridges the gap between design and engineering so flawlessly.",
//   },
//   {
//     id: 4,
//     name: "Sarah Miller",
//     role: "Product Lead at Metafy",
//     image: "https://i.pravatar.cc/150?u=sarah",
//     content:
//       "Their understanding of modern SaaS aesthetics is unmatched. They transformed our clunky dashboard into a work of art.",
//   },
// ];

// const LOGOS = [
//   "Skale",
//   "Metafy",
//   "UX Cabin",
//   "Digikala",
//   "Citizen",
//   "Unsplash",
//   "Bettermotion",
//   "Sololearn",
//   "Bubblehouse",
// ];

// const cardVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 140 : -140,
//     opacity: 0,
//     scale: 0.95,
//     zIndex: 3,
//   }),

//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     zIndex: 3,
//     transition: {
//       type: "spring",
//       stiffness: 260,
//       damping: 28,
//     },
//   },

//   side: {
//     x: 260,
//     opacity: 0.55,
//     scale: 0.96,
//     filter: "blur(0px)",
//     zIndex: 1,
//     transition: {
//       type: "spring",
//       stiffness: 260,
//       damping: 28,
//     },
//   },

//   exit: (direction) => ({
//     x: direction > 0 ? -140 : 140,
//     opacity: 0,
//     scale: 0.9,
//     zIndex: 0,
//   }),
// };

// export default function TestimonialSection() {
//   const [[active, direction], setActive] = useState([0, 0]);

//   const handleNext = () =>
//     setActive(([p]) => [(p + 1) % TESTIMONIALS.length, 1]);

//   const handlePrev = () =>
//     setActive(([p]) => [
//       (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
//       -1,
//     ]);

//   const visible = [
//     TESTIMONIALS[active],
//     TESTIMONIALS[(active + 1) % TESTIMONIALS.length],
//   ];

//   return (
//     <section className="bg-secondary py-16 overflow-hidden">
//       <style jsx global>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }

//         .animate-marquee {
//           animation: marquee 35s linear infinite;
//         }

//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

//         {/* LEFT */}
//         <div className="lg:col-span-5 space-y-8">
//           <span className="uppercase tracking-[0.2em] text-xs text-gray-500 font-bold">
//             Clients
//           </span>

//           <h2 className="text-5xl font-bold leading-tight">
//             What people say
//             <br />
//             about us?
//           </h2>

//           <div className="flex gap-4">
//             <button
//               onClick={handlePrev}
//               className="h-12 w-12 rounded-full hover:bg-white flex items-center justify-center shadow-sm active:scale-95"
//             >
//               <ArrowLeft />
//             </button>

//             <button
//               onClick={handleNext}
//               className="h-12 w-12 rounded-full hover:bg-white flex items-center justify-center shadow-sm active:scale-95"
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="lg:col-span-7 relative h-[420px]">
//           <AnimatePresence custom={direction}>
//             {visible.map((t, i) => (
//               <motion.div
//                 key={t.id}
//                 custom={direction}
//                 variants={cardVariants}
//                 initial={i === 0 ? "enter" : false}
//                 animate={i === 0 ? "center" : "side"}
//                 exit="exit"
//                 className="absolute top-1/2 left-0 w-[480px] rounded-3xl bg-white p-10 shadow-xl border border-gray-100"
//                 style={{
//                   transform: "translateY(-50%)",
//                   pointerEvents: i === 0 ? "auto" : "none",
//                 }}
//               >
//                 <div className="flex gap-4 items-center mb-6">
//                   <img
//                     src={t.image}
//                     className="h-14 w-14 rounded-full object-cover"
//                   />
//                   <div>
//                     <h3 className="font-bold">{t.name}</h3>
//                     <p className="text-sm text-gray-400">{t.role}</p>
//                   </div>
//                 </div>

//                 <p className="text-lg leading-relaxed text-gray-700">
//                   {t.content}
//                 </p>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* MARQUEE */}
//       <div className="mt-20 overflow-hidden">
//         <div className="flex animate-marquee whitespace-nowrap">
//           {[...LOGOS, ...LOGOS].map((logo, i) => (
//             <div
//               key={i}
//               className="mx-16 text-xl font-bold text-gray-400 hover:text-gray-900 transition"
//             >
//               {logo}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import clsx from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Jack O'Holleran",
//     role: "Co-Founder / CEO at Skale",
//     image: "https://i.pravatar.cc/150?u=jack",
//     content:
//       "The Piqo team delivered all our requirements in the best possible way and on time. We are very happy to collaborate with this team.",
//   },
//   {
//     id: 2,
//     name: "Allison Casals",
//     role: "Board Member at Beta",
//     image: "https://i.pravatar.cc/150?u=allison",
//     content:
//       "We were delighted with the 3D map for our website. The attention to detail and smooth animations truly elevated our user experience.",
//   },
//   {
//     id: 3,
//     name: "Marcus Chen",
//     role: "CTO at TechFlow",
//     image: "https://i.pravatar.cc/150?u=marcus",
//     content:
//       "Exceptional design patterns and code quality. It's rare to find a team that bridges the gap between design and engineering so flawlessly.",
//   },
//   {
//     id: 4,
//     name: "Sarah Miller",
//     role: "Product Lead at Metafy",
//     image: "https://i.pravatar.cc/150?u=sarah",
//     content:
//       "Their understanding of modern SaaS aesthetics is unmatched. They transformed our clunky dashboard into a work of art.",
//   },
// ];

// const LOGOS = [
//   "Skale",
//   "Metafy",
//   "UX Cabin",
//   "Digikala",
//   "Citizen",
//   "Unsplash",
//   "Bettermotion",
//   "Sololearn",
//   "Bubblehouse",
// ];

// const cardVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 140 : -140,
//     opacity: 0,
//     scale: 0.95,
//     zIndex: 3,
//   }),

//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     zIndex: 3,
//     transition: {
//       type: "spring",
//       stiffness: 260,
//       damping: 28,
//     },
//   },

//   side: {
//     x: 260,
//     opacity: 0.55,
//     scale: 0.96,
//     zIndex: 1,
//     transition: {
//       type: "spring",
//       stiffness: 260,
//       damping: 28,
//     },
//   },

//   exit: (direction) => ({
//     x: direction > 0 ? -140 : 140,
//     opacity: 0,
//     scale: 0.9,
//     zIndex: 0,
//   }),
// };

// export default function TestimonialSection() {
//   const [[active, direction], setActive] = useState([0, 0]);

//   const handleNext = () =>
//     setActive(([p]) => [(p + 1) % TESTIMONIALS.length, 1]);

//   const handlePrev = () =>
//     setActive(([p]) => [
//       (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
//       -1,
//     ]);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setActive(([p]) => [(p + 1) % TESTIMONIALS.length, 1]);
//   }, 2000); // increased speed

//   return () => clearInterval(interval);
// }, []);

//   const visible = [
//     TESTIMONIALS[active],
//     TESTIMONIALS[(active + 1) % TESTIMONIALS.length],
//   ];

//   return (
//     <section className="bg-secondary py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
//         <div className="lg:col-span-5 space-y-8">
//           <span className="uppercase tracking-[0.2em] text-xs text-gray-500 font-bold">
//             Clients
//           </span>

//           <h2 className="text-5xl font-bold leading-tight">
//             What people say
//             <br />
//             about us?
//           </h2>

//           <div className="flex gap-4">
//             <button
//               onClick={handlePrev}
//               className="h-12 w-12 rounded-full hover:bg-white flex items-center justify-center shadow-sm active:scale-95"
//             >
//               <ArrowLeft />
//             </button>

//             <button
//               onClick={handleNext}
//               className="h-12 w-12 rounded-full hover:bg-white flex items-center justify-center shadow-sm active:scale-95"
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>

//         <div className="lg:col-span-7 relative h-[420px]">
//           <AnimatePresence custom={direction}>
//             {visible.map((t, i) => (
//               <motion.div
//                 key={t.id}
//                 custom={direction}
//                 variants={cardVariants}
//                 initial={i === 0 ? "enter" : false}
//                 animate={i === 0 ? "center" : "side"}
//                 exit="exit"
//                 className="absolute top-1/2 left-0 w-[480px] rounded-3xl bg-white p-10 shadow-xl border border-gray-100"
//                 style={{
//                   transform: "translateY(-50%)",
//                   pointerEvents: i === 0 ? "auto" : "none",
//                 }}
//               >
//                 <div className="flex gap-4 items-center mb-6">
//                   <img
//                     src={t.image}
//                     className="h-14 w-14 rounded-full object-cover"
//                   />
//                   <div>
//                     <h3 className="font-bold">{t.name}</h3>
//                     <p className="text-sm text-gray-400">{t.role}</p>
//                   </div>
//                 </div>

//                 <p className="text-lg leading-relaxed text-gray-700">
//                   {t.content}
//                 </p>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Jack O'Holleran",
    role: "Co-Founder / CEO at Skale",
    image: "https://i.pravatar.cc/150?u=jack",
    content:
      "The Piqo team delivered all our requirements in the best possible way and on time. We are very happy to collaborate with this team.",
  },
  {
    id: 2,
    name: "Allison Casals",
    role: "Board Member at Beta",
    image: "https://i.pravatar.cc/150?u=allison",
    content:
      "We were delighted with the 3D map for our website. The attention to detail and smooth animations truly elevated our user experience.",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "CTO at TechFlow",
    image: "https://i.pravatar.cc/150?u=marcus",
    content:
      "Exceptional design patterns and code quality. It's rare to find a team that bridges the gap between design and engineering so flawlessly.",
  },
  {
    id: 4,
    name: "Sarah Miller",
    role: "Product Lead at Metafy",
    image: "https://i.pravatar.cc/150?u=sarah",
    content:
      "Their understanding of modern SaaS aesthetics is unmatched. They transformed our clunky dashboard into a work of art.",
  },
];

const LOGOS = [
  { src: "/images/clients/1.svg" },
  { src: "/images/clients/2.svg" },
  { src: "/images/clients/3.svg" },
  { src: "/images/clients/4.svg" },
  { src: "/images/clients/5.svg" },
  { src: "/images/clients/6.svg" },
  { src: "/images/clients/7.svg" },
  { src: "/images/clients/8.svg" },
  { src: "/images/clients/9.svg" },
  { src: "/images/clients/10.svg" },
  { src: "/images/clients/11.webp" },
  { src: "/images/clients/12.webp" },
  { src: "/images/clients/13.webp" },
  { src: "/images/clients/14.webp" },
  { src: "/images/clients/15.svg" },
  { src: "/images/clients/16.webp" },
  { src: "/images/clients/17.webp" },
  { src: "/images/clients/18.avif" },
  { src: "/images/clients/19.png" },
  { src: "/images/clients/21.png" },
  { src: "/images/clients/22.png" },
  { src: "/images/clients/23.webp" },
  { src: "/images/clients/24.webp" },
  { src: "/images/clients/25.png" },
  { src: "/images/clients/26.webp" },
  { src: "/images/clients/27.png" },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 140 : -140,
    opacity: 0,
    scale: 0.95,
    zIndex: 3,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 3,
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
  side: {
    x: 260,
    opacity: 0.55,
    scale: 0.96,
    zIndex: 1,
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
  exit: (direction) => ({
    x: direction > 0 ? -140 : 140,
    opacity: 0,
    scale: 0.9,
    zIndex: 0,
  }),
};

export default function TestimonialSection() {
  const [[active, direction], setActive] = useState([0, 0]);
  const [mobileActive, setMobileActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    setActive(([p]) => [(p + 1) % TESTIMONIALS.length, 1]);
    setMobileActive((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActive(([p]) => [
      (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
      -1,
    ]);
    setMobileActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setActive(([p]) => [(p + 1) % TESTIMONIALS.length, 1]);
      setMobileActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [mounted]);

  const visible = [
    TESTIMONIALS[active],
    TESTIMONIALS[(active + 1) % TESTIMONIALS.length],
  ];

  // Get visible testimonials for LG (2 cards)
  const lgVisible = [
    TESTIMONIALS[mobileActive],
    TESTIMONIALS[(mobileActive + 1) % TESTIMONIALS.length],
  ];

  return (
    <section className="w-full bg-secondary pt-10 pb-16 overflow-hidden">
      {/* MAIN */}
      <div className="w-full lg:w-[85%] xl:w-[80%] 2xl:w-[70%] mx-auto grid xl:grid-cols-12 gap-8 md:gap-12 items-center px-4 xl:px-0 py-10">
        {/* LEFT */}
        <div className="col-span-12 xl:col-span-5 flex flex-col justify-center space-y-4 text-center xl:text-left">
          <span className="uppercase tracking-[0.2em] text-xs text-gray-500 font-bold">
            Clients
          </span>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight text-destructive">
            What people say
            <br />
            about us?
          </h2>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-2 justify-center xl:justify-start">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full text-destructive hover:bg-white flex items-center justify-center shadow-sm active:scale-95 transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full text-destructive hover:bg-white flex items-center justify-center shadow-sm active:scale-95 transition-all"
              aria-label="Next testimonial"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* ================= XL+ ORIGINAL DESIGN (2 CARDS SIDE BY SIDE) ================= */}
        <div className="hidden xl:flex col-span-7 relative h-[420px] items-center">
          <AnimatePresence custom={direction}>
            {visible.map((t, i) => (
              <motion.div
                key={t.id}
                custom={direction}
                variants={cardVariants}
                initial={i === 0 ? "enter" : false}
                animate={i === 0 ? "center" : "side"}
                exit="exit"
                className="absolute left-0 w-[480px] rounded-3xl bg-white p-10 border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                style={{ pointerEvents: i === 0 ? "auto" : "none" }}
              >
                <div className="flex gap-4 items-center mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{t.name}</h3>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-700">
                  {t.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ================= LG (2 CARDS GRID) ================= */}
        <div className="hidden lg:grid xl:hidden col-span-12 grid-cols-2 gap-6 mt-6">
          {lgVisible.map((t) => (
            <div
              key={t.id}
              className="w-full rounded-3xl bg-white p-6 lg:p-8 border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4 lg:mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 lg:h-14 lg:w-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-base lg:text-lg">{t.name}</h3>
                  <p className="text-xs lg:text-sm text-gray-400">{t.role}</p>
                </div>
              </div>

              <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                {t.content}
              </p>
            </div>
          ))}
        </div>

        {/* ================= MD & BELOW (1 CARD CAROUSEL) ================= */}
        <div className="block lg:hidden col-span-12 w-full mt-6">
          {mounted && (
            <div className="relative w-full max-w-[520px] mx-auto px-4 sm:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileActive}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className="w-full rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 md:p-8 border border-gray-100 shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 items-start xs:items-center mb-4 sm:mb-6">
                    <img
                      src={TESTIMONIALS[mobileActive].image}
                      alt={TESTIMONIALS[mobileActive].name}
                      className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-sm sm:text-base md:text-lg">
                        {TESTIMONIALS[mobileActive].name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {TESTIMONIALS[mobileActive].role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                    {TESTIMONIALS[mobileActive].content}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMobileActive(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                      mobileActive === index
                        ? "bg-destructive w-4 sm:w-6"
                        : "bg-gray-300 w-1.5 sm:w-2"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

            {/* LOGO MARQUEE */}
      <div className="mt-8 md:mt-12">
        <div className="w-full xl:w-[70%] mx-auto px-4 xl:px-0">
          <Marquee speed={50} pauseOnHover gradient={false}>
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-14 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={`Client Logo ${i + 1}`}
                  width={120}
                  height={50}
                  className="object-contain transition w-auto h-12 sm:h-14 md:h-16 lg:h-20"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}