"use client";

import {
  Search,
  Settings,
  Palette,
  Code,
  Shield,
  Rocket,
} from "lucide-react";

const processData = [
  {
    step: "01",
    title: "Discovery",
    desc: "We dive deep into your business goals, target audience, and competition",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Creating a roadmap with wireframes, sitemaps, and technical specifications",
    icon: Settings,
  },
  {
    step: "03",
    title: "Design",
    desc: "Crafting beautiful, conversion-focused interfaces that tell your story",
    icon: Palette,
  },
  {
    step: "04",
    title: "Development",
    desc: "Building with clean code, modern frameworks, and best practices",
    icon: Code,
  },
  {
    step: "05",
    title: "Testing",
    desc: "Rigorous quality assurance across devices and browsers",
    icon: Shield,
  },
  {
    step: "06",
    title: "Launch",
    desc: "Deploying your site and monitoring performance post-launch",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-black">
            Our Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A structured approach to delivering exceptional digital experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {processData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-10 border border-gray-200 hover:shadow-lg transition duration-300"
              >
                {/* Top Row */}
                <div className="flex items-center gap-6">

                  {/* Step Number */}
                  <span className="text-6xl font-bold text-gray-200">
                    {item.step}
                  </span>

                  {/* Title + Divider */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Icon className="text-black w-5 h-5" />
                      <h3 className="text-xl font-medium text-black">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-3 h-[1px] w-full bg-gray-200" />
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base max-w-lg">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}