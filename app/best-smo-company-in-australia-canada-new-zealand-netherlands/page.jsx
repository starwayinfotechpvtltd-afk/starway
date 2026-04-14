"use client";

import FinalServiceCTA from "@/components/Services/InnerServiceCTA";
import { motion } from "framer-motion";
import { Layers, MessageCircle, Phone } from "lucide-react";
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


      <section className="py-[80px] px-3">
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


      <section className="py-[80px] px-3">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-[60px] items-center">
          {/* CONTENT */}
          <div>
            <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-semibold text-[#0d1b2a] mb-4">
              We house an Expert team of Social Media Marketing Managers.
            </h2>

            <p className="text-[#5a7080] mb-2 text-[16px]">
              At Starways, the Best SMO Company in Australia, our expert team understands the importance of building a strong brand presence. We craft result-driven strategies that enhance your brand visibility and reputation.
            </p>

            <p className="text-[#5a7080] text-[16px] mb-2">
              Backed by in-depth market research, our branding specialists take strategic steps to help your business grow into a recognized brand. We believe in ethical and effective SMO techniques that not only increase brand value but also attract new customers, build trust, and boost credibility.
            </p>
            <p className="text-[#5a7080] text-[16px]">
              Our creative minds come together through extensive brainstorming sessions to develop innovative branding strategies that deliver the best possible results for your business.
            </p>
          </div>
          {/* IMAGE */}
          <div className="relative w-full h-[300px] md:h-[420px]">
            <Image
              src="/images/illustration24.webp"
              alt="Social Media Marketing"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>


      {/* SERVICES (Glassmorphism + Centered UI) */}
      <section id="services" className="bg-[#0d1b2a] text-white py-[100px] px-6 relative overflow-hidden">
        {/* background glow */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,122,54,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_40%)]" /> */}

        <div className="max-w-[1100px] mx-auto text-center relative z-10">
          <span className="text-[#ff7a36] text-[12px] font-bold tracking-[2px] uppercase mb-4 inline-block">
            What We Offer
          </span>

          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black mb-6 leading-tight">
            What do we as an internet marketing agency have to offer in Social Media Marketing?
          </h2>

          <p className="text-[#aec6df] text-[17px] max-w-[720px] mx-auto mb-14 leading-relaxed">
            Helping you avoid such situations, Starways, an Affordable SMO Company in Australia incorporates all the engagement strategies your profile requires to keep your customers connected. Some of the platforms we serve on are:
          </p>

          {/* platform chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              ["Facebook", "#1877f2"],
              ["Twitter", "#1da1f2"],
              ["YouTube", "#ff0000"],
              ["LinkedIn", "#0077b5"],
              ["Instagram", "#d6249f"]
            ].map(([name, color]) => (
              <div
                key={name}
                className="flex items-center gap-[10px] bg-white/10 backdrop-blur-xl border border-white/20 px-[22px] py-[12px] rounded-full font-semibold text-[15px] hover:scale-105 transition"
              >
                <span className="w-[12px] h-[12px] rounded-full" style={{ background: color }} /> {name}
              </div>
            ))}
          </div>

          {/* content blocks */}
          <div className="grid gap-8">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left">
              <h3 className="text-[#ff7a36] font-bold mb-4 uppercase text-center">LinkedIn Marketing Service</h3>
              <p className="text-[#c7d6e4] mb-3 leading-relaxed">Amongst all of the content you are producing and distributing throughout all of your social channels, you might have overlooked the most powerful platform for B2B and high consideration B2C marketers: LinkedIn.</p>
              <p className="text-[#c7d6e4] leading-relaxed">Exemplary content creation falls flat without a solid distribution plan—we know this. And 79% of B2B marketers believe social media is an effective marketing channel. But while people are spending time on other social channels, they're investing time on LinkedIn. Furthermore, a whopping 80% of B2B leads come from LinkedIn.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left">
              <h3 className="text-[#ff7a36] font-bold mb-4 uppercase text-center">Why to advertise using Facebook & Instagram?</h3>
              <p className="text-[#c7d6e4] leading-relaxed">Social Media and Facebook & Instagram became now one of the most effective ways of advertising worldwide, especially in the USA 19 Million Facebook & Instagram accounts in the USA only, 58% of them are males, 42% females, and ages between 13 years old to 65 years old. 39% of those users, use social media applications such as facebook & Twitter using their Smart Phones, 42% using Computers, 19% Using Tablets.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left">
              <h3 className="text-[#ff7a36] font-bold mb-4 uppercase text-center">Why Social Media Page Creation is Important?</h3>
              <p className="text-[#c7d6e4] leading-relaxed">
                It can be built from scratch and create from Zero and build to be a ready page, or by rebuilding it if it’s already built to be ready for promotion Creating and building a page may take many sides, especially for official businesses and investors, it’s not about inserting its information in the about section, it is about inserting them well in an official way, and taking a specific theme, using the correct language, etc Inserting information to page in the correct way will increase the possibilities to view your page in Graph Search using Facebook We do all designs by expert designers, to introduce the page in a clear, significant theme, for the cover photo, profile picture, all posts. Linking your page to your Twitter account makes it easier for users to follow you and be in touch with you in all cases Showing your address in a visual way using Google Map with a short description about that place and how to reach it. Any Tab will be needed for your business type will be created also to help clients and customers reaching you, such as ( Book Now Tab – Menu Tab – Slide Show Tab – Welcome Tab – Like Force Tab – Poll Tab – Questioner Tab – Contact Us Tab – etc ) If your business requires photos and showing your products in a clear way, we do photography and designing and editing by best photographers( It will be paid separately ). Finally, we make it official, clear, responsive, interacting, social for your customers and clients.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left">
              <h3 className="text-[#ff7a36] font-bold mb-4 uppercase text-center">Why to advertise using Facebook & Instagram?</h3>
              <p className="text-[#c7d6e4] leading-relaxed">
                Now after creating your page, or let it be ready for promotion, we will focus on getting you more likes, and we do it in the correct way We believe that each click on your page as a Like click, should be by someone really interested in clicking this like, and interested in your business or product, so we focus in targeted Facebook & Instagram advertising. So we target in our campaign exactly those who would like to like your page, as we all know that Facebook & Instagram allow you to choose a specific target for your Ad, according to their location, age, gender, Languages, Relationship status, education, even their interests, so we won’t show your ad out of your area of interest. We work it in Optimize Click / Optimize Impression / Sponsored Story / Promoting Post by using Facebook’s real advertisement process. We don’t Recommend Facebook & Instagram Advertising in (Impressions) way because its stand for showing your AD only without having any guarantee that they will see it, Facebook will show your AD, but the user may NOT see it, and it will be counted as an impression, also in this way you can’t guarantee continuity that at the END of your campaign, impressions will be stopped and those who didn’t like your page will forget about it Advertising per (Click) might be better than impressions because it will guarantee to force users to click on the page and see its contents but it also doesn’t guarantee likes which don’t have continuity in advertising, this type of advertising is good only for specific campaigns which need to focus in a period of time or a specific event like Sales or Limited promotions Keep in mind that you are not the only one who advertise on Facebook & Instagram and the allowed showing area for ADS is only SIX ADS, so you will get less chance to view your AD in those two types unless you are increasing the budget of your AD regarding Impression or click. Now after creating your page, or let it be ready for promotion, we will focus on getting you more likes, and we do it in the correct way We believe that each click on your page as a Like click, should be by someone really interested in clicking this like, and interested in your business or product, so we focus in targeted Facebook & Instagram advertising. So we target in our campaign exactly those who would like to like your page, as we all know that Facebook & Instagram allow you to choose a specific target for your Ad, according to their location, age, gender, Languages, Relationship status, education, even their interests, so we won’t show your ad out of your area of interest. We work it in Optimize Click / Optimize Impression / Sponsored Story / Promoting Post by using Facebook’s real advertisement process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalServiceCTA
        icon={Layers}
        title="Ready to Grow Your Brand with Social Media Marketing?"
        description="We create result-driven social media strategies that boost engagement, increase brand visibility, and generate high-quality leads across platforms like Facebook, Instagram, LinkedIn, and YouTube."

        formTitle="Get Your Free Social Media Marketing Consultation"

        challenges={[
          {
            value: "seo-website",
            label: "SEO Enabled Website Development",
          },
          {
            value: "digital-marketing",
            label: "Digital marketing strategies",
          },
          {
            value: "digital-branding",
            label: "Digital Branding",
          },
          {
            value: "graphic-design",
            label: "Creative Graphic Designing",
          },
          {
            value: "ecommerce-marketing",
            label: "eCommerce Marketing",
          },
          {
            value: "marketplace-management",
            label: "E-commerce Marketplace Management and Optimization",
          },
          {
            value: "orm",
            label: "Online Reputation Management",
          },
          {
            value: "social-media",
            label: "Social Media Management",
          },
          {
            value: "other",
            label: "Service not listed",
          },
        ]}

        primaryCta={{
          text: "Get Strategy",
          icon: Layers,
        }}

        secondaryCta={{
          text: "Schedule a Call",
          icon: Phone,
        }}

        contactInfo={[
          { icon: Phone, text: "Call us: +91 98765 43210" }
        ]}
      />


    </div>
  );
}
