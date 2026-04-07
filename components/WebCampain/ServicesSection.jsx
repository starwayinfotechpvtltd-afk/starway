"use client";

import { Code2, Smartphone, Megaphone, Palette, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ServicesSection() {
  const [active, setActive] = useState("design");

  const services = {
    design: {
      icon: <Palette size={20} />,
      title: "Graphic Design & UI/UX",
      desc: "Design that connects with your audience — visually and emotionally.",
      expertise: [
        "Logo & Brand Identity Design",
        "UI/UX for Web & Mobile",
        "Marketing Collateral (Brochures, Ads, Social Creatives)",
        "Design Systems & Prototypes",
      ],
    },
    web: {
      icon: <Code2 size={20} />,
      title: "Web Design & Development",
      desc: "High-performance websites crafted for scalability, speed, and impact.",
      expertise: [
        "Custom Website Development",
        "Next.js / React Applications",
        "E-commerce Solutions",
        "CMS & Headless Integrations",
      ],
    },
    mobile: {
      icon: <Smartphone size={20} />,
      title: "Mobile App Development",
      desc: "Seamless mobile experiences that users love and businesses grow with.",
      expertise: [
        "iOS & Android Development",
        "Cross-Platform Apps (Flutter / React Native)",
        "UI/UX for Mobile",
        "App Store Deployment",
      ],
    },
    marketing: {
      icon: <Megaphone size={20} />,
      title: "Digital Marketing & Automation",
      desc: "Data-driven strategies that convert visitors into loyal customers.",
      expertise: [
        "SEO & Performance Marketing",
        "Paid Ads & Funnel Optimization",
        "Email Marketing Automation",
        "CRM & Lead Automation Systems",
      ],
    },
  };

  const current = services[active];

  return (
    <section className="w-full bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Row */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="px-4 py-2 border border-black/20 rounded-full text-sm">
              Services
            </span>

            <h2 className="text-5xl font-bold mt-6">
              Our Services.
            </h2>

            <p className="text-black/60 mt-4 max-w-lg">
              We craft powerful digital experiences through strategy,
              creativity, and cutting-edge technology.
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            Explore More <ArrowRight size={18} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-8 border-b border-black/10 pb-6 mb-10">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-3 text-lg transition ${
                active === key
                  ? "text-black font-semibold"
                  : "text-black/50 hover:text-black"
              }`}
            >
              <span className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                active === key
                  ? "bg-black text-white border-black"
                  : "border-black/20"
              }`}>
                {service.icon}
              </span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-12 bg-gray-50 border border-black/10 rounded-3xl p-12">
          
          {/* Left Content */}
          <div>
            <div className="w-14 h-14 flex items-center justify-center border border-black/20 rounded-full mb-6">
              {current.icon}
            </div>

            <h3 className="text-4xl font-bold mb-6">
              {current.title}
            </h3>

            <p className="text-black/70 mb-6 text-lg">
              {current.desc}
            </p>

            <h4 className="font-semibold mb-4">Our Expertise:</h4>

            <ul className="space-y-3 text-black/70">
              {current.expertise.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Let’s Chat
            </button>
          </div>

          {/* Right Visual Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-72 h-96 bg-gradient-to-br from-black/5 to-black/10 rounded-2xl border border-black/10 shadow-sm"></div>
          </div>

        </div>
      </div>
    </section>
  );
}