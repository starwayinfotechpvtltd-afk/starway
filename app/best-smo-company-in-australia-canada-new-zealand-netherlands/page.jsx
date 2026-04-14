"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Page() {
  return (
    <div className="text-[#1a2a3a] bg-white leading-[1.7] text-[16px]">

      {/* HERO */}
      <section className="relative overflow-hidden text-center px-6 pb-24 pt-36 bg-[linear-gradient(135deg,#0d1b2a_0%,#2e4a6b_60%,#1e4d7b_100%)]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <h1 className="text-white font-black max-w-7xl mx-auto mb-[22px] text-[clamp(2rem,5vw,3.4rem)] leading-[1.2]">
            Enhance Your Brand with Expert <span className="text-[#ff7a36]">Social Media Marketing (SMM)</span> In Australia, New Zealand, USA & Canada
          </h1>

          <p className="text-[#aec6df] max-w-5xl mx-auto mb-9 text-[17px]">
            Social media is a game-changer for brand visibility and customer engagement. Our expert <strong className="text-white">Social Media Marketing (SMM) services</strong> in Australia, New Zealand, the USA, and Canada help businesses grow their online presence across Facebook, Instagram, Twitter, LinkedIn, and YouTube.
          </p>

          <div className="inline-flex gap-[14px] flex-wrap justify-center">
            <a href="#analysis" className="bg-[#e05c1a] text-white px-[32px] py-[14px] rounded-[8px] font-bold text-[15px] shadow-[0_4px_20px_rgba(224,92,26,.4)] transition-all hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(224,92,26,.5)]">
              Get Free Website Analysis
            </a>
            <a href="#services" className="border-2 border-[rgba(255,255,255,.35)] text-white px-[32px] py-[14px] rounded-[8px] font-semibold text-[15px] transition-all hover:border-white hover:bg-[rgba(255,255,255,.08)]">
              Explore Services
            </a>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-[80px] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-[60px] items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[300px] md:h-[420px]">
            <Image
              src="/images/work-model.webp"
              alt="Social Media Marketing"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#e05c1a] text-[12px] font-bold tracking-[2px] uppercase mb-3 inline-block">
              Well, We Are Here to Help!
            </span>

            <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-semibold text-[#0d1b2a] mb-4">
              Get social with our social media marketing agency.
            </h2>

            <p className="text-[#5a7080] mb-4 text-[16px]">
              With over 3 billion social media users worldwide, there's no doubt that social platforms are a powerful way to grow your business and give your brand the boost it needs. But between managing your business and handling daily operations, keeping up with your social media can feel overwhelming.
            </p>

            <p className="text-[#5a7080] text-[16px]">
              That's where <span className="text-[#e05c1a] font-semibold">Starways</span> comes in! As the <span className="text-[#e05c1a] font-semibold">
                <Link
                  href="https://starwaywebdigital.com/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Best SMO Company in Australia
                </Link>
              </span>, we take care of everything—crafting engagement strategies, optimizing your profiles, and keeping your audience connected—so you can focus on what you do best: running your business.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES (full content kept) */}
      <section id="services" className="bg-[#0d1b2a] text-white py-[80px] px-6">
        <div className="max-w-[1160px] mx-auto">
          <span className="text-[#ff7a36] text-[12px] font-bold tracking-[2px] uppercase mb-3 inline-block">What We Offer</span>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] mb-4">What do we as an internet marketing agency have to offer in Social Media Marketing?</h2>
          <p className="text-[#aec6df] text-[17px] max-w-[680px] mb-10">Helping you avoid such situations, Starways, an Affordable SMO Company in Australia incorporates all the engagement strategies your profile requires to keep your customers connected. Some of the platforms we serve on are:</p>

          <div className="flex flex-wrap gap-4 mb-12">
            {[
              ["Facebook", "#1877f2"],
              ["Twitter", "#1da1f2"],
              ["YouTube", "#ff0000"],
              ["LinkedIn", "#0077b5"],
              ["Instagram", "#d6249f"]
            ].map(([name, color]) => (
              <div key={name} className="flex items-center gap-[10px] bg-[rgba(255,255,255,.07)] border border-[rgba(255,255,255,.15)] px-[20px] py-[12px] rounded-[50px] font-semibold text-[15px]">
                <span className="w-[12px] h-[12px] rounded-full" style={{ background: color }} /> {name}
              </div>
            ))}
          </div>

          {/* content blocks kept exactly */}
          <div className="mb-12">
            <h3 className="text-[#e05c1a] font-bold mb-3 uppercase">LinkedIn Marketing Service</h3>
            <p>Amongst all of the content you are producing and distributing throughout all of your social channels, you might have overlooked the most powerful platform for B2B and high consideration B2C marketers: LinkedIn.</p>
            <p>Exemplary content creation falls flat without a solid distribution plan—we know this. And 79% of B2B marketers believe social media is an effective marketing channel. But while people are spending time on other social channels, they're investing time on LinkedIn. Furthermore, a whopping 80% of B2B leads come from LinkedIn.</p>
          </div>

          <div className="mb-12">
            <h3 className="text-[#e05c1a] font-bold mb-3 uppercase">Why to advertise using Facebook & Instagram?</h3>
            <p>Social Media and Facebook & Instagram became now one of the most effective ways of advertising worldwide, especially in the USA 19 Million Facebook & Instagram accounts in the USA only, 58% of them are males, 42% females, and ages between 13 years old to 65 years old. 39% of those users, use social media applications such as facebook & Twitter using their Smart Phones, 42% using Computers, 19% Using Tablets.</p>
          </div>

        </div>
      </section>


    </div>
  );
}
