"use client";


import Link from "next/link";
import { User } from "lucide-react";
import Image from "next/image";

export default function BlogAboutSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Small Title */}
        <p className="text-center text-sky-600 font-medium mb-4">
          Who We Are?
        </p>

        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-16">
          Building Insightful Stories for <br />
          Every Curious Mind
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center md:justify-start">
            
            {/* Big Image */}
            <div className="relative w-[380px] h-[400px] rounded-tl-[30px] rounded-br-[30px] rounded-bl-[90px] rounded-tr-[90px] overflow-hidden">
              <Image
                src="/images/campain/web-d.webp"
                alt="Blog team working"
                fill
                className="object-cover"
              />
            </div>

            {/* Small Bottom Image */}
            <div className="absolute bottom-[-30px] right-[-20px] w-[260px] h-[270px] rounded-tl-[30px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] overflow-hidden border-9 border-[#f3f3f3]">
              <Image
                src="/images/campain/coding-man.webp"
                alt="Content creators"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At <span className="font-semibold">Stack Decode Blog</span>, we
              share deep insights across{" "}
              <span className="font-semibold">
                technology, startups, design, development, and digital growth.
              </span>{" "}
              Whether you're a developer exploring modern frameworks or an
              entrepreneur looking for growth strategies, our content delivers{" "}
              <span className="font-semibold">
                practical knowledge, real-world case studies, and actionable insights.
              </span>
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We combine research, creativity, and experience to create content
              that educates, inspires, and empowers our readers every day.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300"
            >
              Discover Our Journey →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}