"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full bg-gray-100 py-16 xl:py-30">
      <div className="w-full lg:w-[85%] xl:w-[80%] 2xl:w-[70%] px-4 mx-auto">
        {/* Top Grid */}
        <div className="flex flex-col lg:flex-row justify-evenly gap-10 xl:gap-[2%]">
          {/* LEFT IMAGES */}
          <div className="w-full lg:w-[45%] xl:w-[40%]">
            {/* md & small = side by side, xl = original */}
            <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-4 xl:gap-2">
              <div>
                <Image
                  src="/images/home/h-s-1.jpg"
                  alt="Team discussion"
                  width={500}
                  height={300}
                  className="rounded-2xl object-cover w-full h-44 sm:h-52 md:h-56 lg:h-56"
                />
              </div>

              <div className="w-full lg:w-full xl:max-w-[70%]">
                <Image
                  src="/images/home/h-s-2.jpg"
                  alt="Team work"
                  width={500}
                  height={300}
                  className="rounded-2xl object-cover w-full h-44 sm:h-52 md:h-56 lg:h-56"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[55%] xl:w-[58%]">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Empowering Your Success <br className="hidden sm:block" /> with Digital Expertise
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl text-sm sm:text-base">
              We help businesses grow through smart digital solutions, strong
              strategy, and reliable execution across marketing, design, and
              development.
            </p>

            {/* PROGRESS BARS */}
            <div className="space-y-5">
              <Progress label="Marketing & Business Growth" value={85} />
              <Progress label="Creativity & Innovation" value={80} />
              <Progress label="Business & Financial Management" value={95} />
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-700 transition pointer-coarse"
            >
              About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Progress Bar Component */
function Progress({ label, value }) {
  return (
    <div>
      <div className="flex justify-between mb-1 text-sm font-medium">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-green-600 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/* Stat Component */
function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
    </div>
  );
}
