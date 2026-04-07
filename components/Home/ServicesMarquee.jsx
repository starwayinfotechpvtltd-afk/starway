"use client";

import Marquee from "react-fast-marquee";

const services = [
  "Branding",
  "Design",
  "E-Commerce",
  "Mobile App",
  "SEO",
  "AI SEO",
  "Web Development",
  "UI UX",
  "SaaS",
];

export default function ServicesMarquee() {
  return (
    <div className="w-full py-5">
      <Marquee speed={55} gradient={false} pauseOnHover direction="left">
        {services.map((item, index) => (
          <span
            key={index}
            className="text-outline text-4xl md:text-5xl lg:text-6xl font-extrabold italic mx-6 whitespace-nowrap"
          >
            {item}.
          </span>
        ))}
      </Marquee>
    </div>
  );
}
