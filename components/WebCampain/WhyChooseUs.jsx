"use client";

import { Box, PieChart, Monitor, Settings, Eye, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Label */}
        <p className="text-center text-sky-500 font-medium mb-4">
          Why Choose Us
        </p>

        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-16">
          Your Trusted Partner for Scalable,
          <br />
          High-Performance Digital Solutions
        </h2>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <Card
            icon={<Box size={22} />}
            title="Expertise Across Leading Platforms"
            description="We work with ReactJs, NextJs, Angular, WordPress, Squarespace, Shopify, and more."
          />

          {/* Card 2 */}
          <Card
            icon={<PieChart size={22} />}
            title="Result-Oriented Approach"
            description="Our focus is on performance, scalability, and user experience."
          />

          {/* Card 3 */}
          <Card
            icon={<Monitor size={22} />}
            title="Customized & Scalable Solutions"
            description="Every business is unique, and so are our solutions."
          />

          {/* Card 4 */}
          <Card
            icon={<Settings size={22} />}
            title="Reliable Support & Consultation"
            description="We partner with you for long-term success."
          />

          {/* Card 5 */}
          <Card
            icon={<Eye size={22} />}
            title="Your Vision, Our Expertise"
            description="Let’s Build Something Amazing Together!"
          />

          {/* CTA Card */}
          <div className="relative rounded-2xl p-8 bg-gradient-to-br from-blue-100 to-blue-50 shadow-md border border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Start Your Project Today
              </h3>
              <button className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm font-medium hover:scale-105 transition">
                Contact Us <ArrowRight size={18} />
              </button>
            </div>

            {/* Decorative Background Shape */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-gray-200 to-transparent rounded-tl-3xl opacity-40" />
          </div>

        </div>
      </div>
    </section>
  );
}

/* Reusable Card Component */
function Card({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition">
      <div className="w-14 h-14 rounded-full bg-[#f2e9e4] flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}