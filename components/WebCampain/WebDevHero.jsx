"use client";

import PlatformCarousel from "./PlatformCarousel";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-8 px-6">
      <div className="max-w-[98%] mx-auto">
        {/* Rounded Container */}
        <div className="relative rounded-3xl bg-[#0d7797] overflow-hidden flex justify-center items-center">
          {/* Inner Content */}
          <div className="flex items-center min-h-[800px] py-16 max-w-[90%] 2xl:max-w-[80%]">
            <div className="w-full grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT SIDE — TEXT */}
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-semibold leading-tight">
                  Finding the right <br />
                  talent has never <br />
                  been easier
                </h1>

                <p className="mt-6 text-gray-300 max-w-lg 2xl:text-xl">
                  From startups to large corporations, we work closely with you
                  to identify, evaluate, and hire the best professionals for
                  your unique business needs.
                </p>

                {/* Stats */}
                <div className="flex gap-12 xl:mt-28 2xl:mt-30">
                  <div>
                    <h3 className="text-2xl 2xl:text-3xl font-semibold">540+</h3>
                    <p className="text-sm text-gray-400">Talents Hired</p>
                  </div>
                  <div>
                    <h3 className="text-2xl 2xl:text-3xl font-semibold">40+</h3>
                    <p className="text-sm text-gray-400">Trusted Clients</p>
                  </div>
                  <div>
                    <h3 className="text-2xl 2xl:text-3xl font-semibold">95%</h3>
                    <p className="text-sm text-gray-400">Retention Rate</p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE — FORM */}
              <div className="bg-white rounded-3xl p-8 2xl:p-12 max-w-4xl mx-auto shadow-lg border border-gray-200">
                {/* Full Name */}
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-5 py-3 text-xs 2xl:text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                />

                {/* Email + Phone */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="bg-gray-50 border border-gray-300 rounded-xl px-5 py-3 text-xs 2xl:text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-gray-50 border border-gray-300 rounded-xl px-5 py-3 text-xs 2xl:text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Project Overview */}
                <textarea
                  rows="3"
                  placeholder="Provide us with a quick overview of the issues you're dealing with"
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-5 py-3 text-xs 2xl:text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />

                {/* Website URL */}
                <input
                  type="url"
                  placeholder="Website Url"
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-5 py-3 text-xs 2xl:text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-black"
                />

                {/* Help Section */}
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  How can we help?
                </h3>

                <div className="grid md:grid-cols-2 gap-3 text-xs 2xl:text-sm mb-6">
                  {[
                    "Website Speed & Performance",
                    "Conversion Optimisation",
                    "Web Design & Functionality",
                    "Website Responsiveness",
                    "Search Engine Ranking",
                    "Replatforming",
                    "Website Security",
                    "Not Sure",
                  ].map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 2xl:gap-3 text-gray-700"
                    >
                      <input type="checkbox" className="w-4 h-4 accent-black" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>

                {/* Submit */}
                <button className="py-2 px-7 rounded-2xl bg-destructive text-white text-lg font-normal shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Carousel */}
        <PlatformCarousel />
      </div>
    </section>
  );
}
