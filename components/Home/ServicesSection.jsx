"use client";

import {
  Video,
  PenTool,
  Share2,
  MousePointerClick,
  BarChart3,
  Code2,
  MapIcon,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

export default function DigitalMarketingExpertise() {
  return (
    <section className="w-full bg-secondary py-16 md:py-20 relative">
      <div className="w-full lg:w-[85%] xl:w-[80%] 2xl:w-[70%] mx-auto px-4 relative">
        {/* ================= MOBILE LAYOUT (ONLY SMALL SCREEN) ================= */}
        <div className="block sm:hidden">
          {/* TEXT */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-destructive leading-tight">
              Our Digital Marketing Expertise
            </h2>

            <p className="mt-4 text-black text-sm leading-relaxed">
              We help businesses in the US, UK, Australia, Canada, and New
              Zealand grow online with strategic SEO, high-performing PPC
              campaigns, and conversion-focused digital marketing solutions.
            </p>
          </div>

          {/* 2 x 3 CARD GRID */}
          <div className="grid grid-cols-2 gap-4">
            <ServiceCardMobile
              icon={MapPin}
              title="Google Maps & GMB"
              href="/services/googleMaps"
            />
            <ServiceCardMobile
              icon={PenTool}
              title="Content Marketing"
              href="/services/contentMarketing"
            />
            <ServiceCardMobile
              icon={Share2}
              title="Social Media"
              href="/services/socialMedia"
            />
            <ServiceCardMobile
              icon={MousePointerClick}
              title="PPC Ads"
              href="/services/ppc"
            />
            <ServiceCardMobile
              icon={BarChart3}
              title="SEO Optimization"
              href="/services/seo"
            />
            <ServiceCardMobile
              icon={Code2}
              title="Website Design"
              href="/services/web&AppDevelopment"
            />
          </div>
        </div>

        {/* ================= ORIGINAL DESIGN (HIDE ON MOBILE) ================= */}
        <div className="hidden sm:block">
          {/* GRID WRAPPER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* ===== TEXT SECTION (RESPONSIVE ORDER) ===== */}
            <div className="lg:col-span-2 p-2 order-1 md:order-1 lg:order-5">
              <h2 className="text-3xl sm:text-3xl md:text-3xl xl:text-5xl font-bold text-destructive leading-tight">
                Our Digital Marketing Expertise
              </h2>
              <p className="mt-4 text-black text-sm sm:text-sm md:text-sm xl:text-lg max-w-xl">
                We help businesses in the US, UK, Australia, Canada, and New
                Zealand grow online with strategic SEO, high-performing PPC
                campaigns, and conversion-focused digital marketing solutions.
              </p>
            </div>

            {/* ===== CARDS ===== */}
            <div className="order-2 md:order-2 lg:order-1">
              <ServiceCard
                icon={MapPin}
                title="Google Maps & GMB"
                href="/services/googleMaps"
              />
            </div>

            <div className="order-3 md:order-3 lg:order-2">
              <ServiceCard
                icon={PenTool}
                title="Content Marketing"
                href="/services/contentMarketing"
              />
            </div>

            <div className="order-4 md:order-4 lg:order-3">
              <ServiceCard
                icon={Share2}
                title="Social media Marketing"
                href="/services/socialMedia"
              />
            </div>

            <div className="order-5 md:order-5 lg:order-4">
              <ServiceCard
                icon={MousePointerClick}
                title="Pay per click (PPC)"
                href="/services/ppc"
              />
            </div>

            <div className="order-6 md:order-6 lg:order-6">
              <ServiceCard
                icon={BarChart3}
                title="SEO, AEO, GEO, LLM Optimization"
                href="/services/seo"
              />
            </div>

            <div className="order-7 md:order-7 lg:order-7">
              <ServiceCard
                icon={Code2}
                title="Website design & Development"
                href="/services/web&AppDevelopment"
              />
            </div>
          </div>

          {/* ===== BUTTON (RESPONSIVE POSITION) ===== */}
          <div className="hidden lg:flex justify-center mt-12 lg:mt-0 lg:absolute lg:-bottom-40 lg:left-1/2 lg:-translate-x-1/2">
            <Link href="/services">
              <button className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 group cursor-pointer">
                {/* Circular Text */}
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full animate-spin-slow opacity-90"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                    />
                  </defs>

                  <text
                    fill="#EAF4FF"
                    fontSize="13"
                    letterSpacing="3"
                    className="uppercase"
                  >
                    <textPath href="#circlePath">
                      SHOW MORE • CLICK ME • SHOW MORE •
                    </textPath>
                  </text>
                </svg>

                {/* Center Button */}

                <div className="absolute inset-4 sm:inset-5 md:inset-6 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#1E3A8A] flex items-center justify-center shadow-[0_10px_30px_rgba(11,61,104,0.6)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_15px_40px_rgba(11,61,104,0.8)]">
                  {/* Arrow */}
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white rotate-[315deg]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 6l6 6-6 6"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= DESKTOP CARD COMPONENT ================= */

function ServiceCard({ icon: Icon, title, href }) {
  return (
    <Link href={href}>
      <div className="group h-[220px] sm:h-[240px] md:h-[200px] xl:h-[250px] rounded-xl p-5 bg-gradient-to-b from-[#1E6FB7] to-[#0B3D68] text-white shadow-lg hover:scale-[1.03] transition-transform font-light cursor-pointer">
        <div className="w-[90%] h-[95%] mx-auto flex flex-col justify-evenly">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/50 flex items-center justify-center transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_10px_#ffffff] animate-border-orbit"></div>
            </div>

            <Icon className="w-10 h-10 md:w-10 md:h-10 lg:w-9 lg:h-9 xl:w-12 xl:h-12 text-white relative z-10" />
          </div>

          <p className="text-lg sm:text-xl lg:text-[20px] xl:text-[22px] font-semibold leading-snug">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

/* ================= MOBILE CARD COMPONENT ================= */

function ServiceCardMobile({ icon: Icon, title, href }) {
  return (
    <Link href={href}>
      <div className="h-[150px] rounded-xl p-4 bg-gradient-to-b from-[#1E6FB7] to-[#0B3D68] text-white shadow-md flex flex-col justify-center items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/40 flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <p className="text-sm font-semibold text-center leading-snug">
          {title}
        </p>
      </div>
    </Link>
  );
}
