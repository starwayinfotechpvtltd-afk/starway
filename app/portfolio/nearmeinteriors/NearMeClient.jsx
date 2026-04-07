"use client";

import Image from "next/image";

const heroStats = [
  { num: "380%", label: "Traffic Growth" },
  { num: "5.8%", label: "Conversion Rate" },
  { num: "20+", label: "Page 1 Keywords" },
  { num: "−47%", label: "Bounce Rate Drop" },
];

const keywordColumns = [
  {
    tag: "Primary",
    title: "High-intent keywords",
    desc: "Targeting commercial intent terms with proven conversion value.",
    items: [
      "Best interior designers in Kolkata",
      "Top home interior services",
      "Affordable home decorators",
    ],
  },
  {
    tag: "Long-tail",
    title: "Niche & specific searches",
    desc: "Capturing qualified visitors with lower competition queries.",
    items: [
      "Luxury home interiors Kolkata",
      "Office interior solutions",
      "Modular kitchen designers",
    ],
  },
  {
    tag: "Local SEO",
    title: "Geo-targeted terms",
    desc: "Dominating neighbourhood and city-level search results.",
    items: [
      "Interior design firms in Kolkata",
      "Kolkata home decorators",
      "Interior services Salt Lake",
    ],
  },
];

const onPageChecks = [
  "SEO-friendly URL hierarchy for easy crawlability",
  "Meta titles and descriptions with primary keywords",
  "Fast-loading pages for both mobile and desktop",
  "Internal linking to distribute authority efficiently",
  "Canonical tags to prevent duplicate content issues",
];

const technicalChecks = [
  "Responsive design — seamless across all devices",
  "Minimised CLS (Cumulative Layout Shift)",
  "Improved FID (First Input Delay) scores",
  "Lazy loading for images and heavy assets",
  "Next-gen image compression (WebP)",
];

const results = [
  { metric: "Organic Traffic", before: "2,500 / mo", after: "12,000 / mo", change: "+380%" },
  { metric: "Keyword Rankings (Page 1)", before: "~0 keywords", after: "20+ keywords", change: "+20 kw" },
  { metric: "Bounce Rate", before: "72%", after: "38%", change: "−47%" },
  { metric: "Conversion Rate", before: "1.5%", after: "5.8%", change: "+287%" },
];

const takeaways = [
  {
    n: "01",
    title: "Content is king, strategy is queen",
    desc: "A well-planned content marketing strategy combined with keyword-rich, engaging content ensures long-term SEO success — not short-term ranking spikes.",
  },
  {
    n: "02",
    title: "Technical SEO cannot be ignored",
    desc: "Optimising Core Web Vitals, mobile usability, and schema markup directly impacts search rankings and the quality of user experience delivered.",
  },
  {
    n: "03",
    title: "Local reputation drives local rank",
    desc: "Businesses targeting local search must invest in Google Business Profile optimisation, earned reviews, and consistent local backlink profiles.",
  },
];

function SectionHeader({ num, title }) {
  return (
    <div className="flex items-baseline gap-6 border-t border-gray-200 pt-4 mb-10">
      <span className="text-base tracking-widest text-gray-500 font-normal min-w-[2rem]">
        {num}
      </span>
      <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-gray-900">
        {title}
      </h2>
    </div>
  );
}

function DarkPanel({ title, children }) {
  return (
    <div className="bg-destructive text-white p-8 my-8">
      <h3 className="text-xl font-normal mb-3">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{children}</p>
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="mt-2 divide-y divide-gray-100">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start py-3 text-sm text-gray-600">
          <span className="font-normal text-xs text-gray-400 flex-shrink-0 mt-0.5">[✓]</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ArrowList({ items }) {
  return (
    <ul className="mt-3 divide-y divide-gray-100">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 items-start py-2 text-sm text-gray-600">
          <span className="text-gray-300 font-normal text-xs flex-shrink-0 mt-0.5">→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPage() {
  return (
    <div className="bg-stone-50 text-gray-900">

      {/* ── HERO ── */}
      <section className="bg-destructive text-white px-6 pt-16 md:pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <span className="block w-8 h-px bg-gray-600" />
            <span className="font-normal text-[11px] tracking-[.2em] uppercase text-gray-500">
              Case Study — SEO Campaign
            </span>
          </div>

          {/* hero grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-end">

            {/* headline */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight">
                How we helped<br />
                nearmeinteriors.com<br />
                <span className="italic text-gray-500">own Kolkata search</span>
              </h1>
              <p className="mt-6 text-gray-400 text-base leading-relaxed font-light max-w-[38ch]">
                A data-driven SEO campaign combining high-intent keyword strategy,
                technical optimisation, and content marketing to deliver measurable,
                lasting results.
              </p>
            </div>

            {/* stats grid */}
            <div className="h-full grid grid-cols-2 gap-px bg-gray-700 border border-gray-700">
              {heroStats.map((s) => (
                <div key={s.label} className="bg-gray-100 p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-4xl font-semibold leading-none text-destructive">{s.num}</p>
                  <p className="mt-2 font-medium text-base tracking-[.15em] uppercase text-gray-600">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* thin rule */}
          <div className="mt-16 h-px bg-gray-800" />
        </div>
      </section>

      {/* ── MAIN ── */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-16">
          <p className="text-base leading-relaxed text-gray-800 font-light">
            In the competitive world of interior design, securing the top spot on SERPs
            requires a strategic, data-driven approach. NearMeInteriors.com — a leading
            interior design firm in Kolkata — achieved unprecedented SEO success through
            meticulous keyword research, on-page optimisation, and high-quality content
            marketing.
            <br /><br />
            This case study documents the exact strategies we used to help them dominate
            local search.
          </p>
          <blockquote className="border-l-2 border-gray-900 pl-6">
            <p className="text-xl italic font-normal leading-snug text-destructive">
              "The goal was not just to rank — it was to attract the right traffic that
              converts into clients."
            </p>
            <cite className="block mt-4 font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 not-italic">
              Strategy Overview — nearmeinteriors.com
            </cite>
          </blockquote>
        </div>

        {/* 01 KEYWORD STRATEGY */}
        <section>
          <SectionHeader num="01" title="Keyword Research & Strategy" />

          {/* 3-col card grid */}
          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {keywordColumns.map((col) => (
              <div key={col.tag} className="bg-white p-8">
                <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                  {col.tag}
                </p>
                <h3 className="text-lg font-normal text-gray-900 mb-2 leading-snug">
                  {col.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{col.desc}</p>
                <ArrowList items={col.items} />
              </div>
            ))}
          </div>

          <DarkPanel title="Strategic Content Development">
            Our team developed SEO-optimised blog posts, landing pages, and service
            descriptions built around user intent — not just keyword density. This
            approach improved organic rankings while meaningfully increasing time on
            site and return visits.
          </DarkPanel>
        </section>

        {/* 02 ON-PAGE SEO */}
        <section>
          <SectionHeader num="02" title="On-Page SEO Enhancements" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Website Architecture
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                Optimised structure & navigation
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                A well-structured site hierarchy communicates clearly to both users and
                search crawlers. We rebuilt the URL structure, rewrote all meta titles
                and descriptions, and implemented efficient internal linking to
                distribute link equity.
              </p>
            </div>
            <CheckList items={onPageChecks} />
          </div>

          <DarkPanel title="Image & Multimedia Optimisation">
            High-resolution portfolio images, project videos, and infographics were
            optimised with descriptive alt tags, proper filenames, and modern
            compression formats. This boosted image search visibility while reducing
            page load times — directly improving Core Web Vitals scores.
          </DarkPanel>

          {/* portfolio image */}
          <div className="mt-2 overflow-hidden">
            <Image
              src="/images/portfolio/nearmeIntePortfolio01.webp"
              alt="On-page optimisation"
              width={1100}
              height={500}
              className="w-full h-80 object-fill"
            />
          </div>
        </section>

        {/* 03 TECHNICAL SEO */}
        <section>
          <SectionHeader num="03" title="Technical SEO" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <CheckList items={technicalChecks} />
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Core Web Vitals
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                Mobile optimisation first
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                With over 70% of local searches conducted on mobile devices, ensuring
                flawless performance on smaller screens was non-negotiable. Every
                metric was benchmarked against Google's Core Web Vitals thresholds.
              </p>
            </div>
          </div>

          <DarkPanel title="Schema Markup for Local SEO">
            We implemented structured data — including LocalBusiness, Service, and
            Review schemas — enabling rich snippets showing customer ratings, business
            hours, and service details. This directly improved click-through rates from
            organic listings.
          </DarkPanel>

          <div className="overflow-hidden">
            <Image
              src="/images/portfolio/nearmeIntePortfolio02.webp"
              alt="Technical SEO"
              width={1100}
              height={500}
              className="w-full h-80 object-fill"
            />
          </div>
        </section>

        {/* 04 OFF-PAGE SEO */}
        <section>
          <SectionHeader num="04" title="Off-Page SEO & Link Building" />

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {/* backlinks */}
            <div className="bg-white p-8">
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                Authority
              </p>
              <h3 className="text-lg font-normal text-gray-900 mb-2 leading-snug">
                High-quality backlink acquisition
              </h3>
              <ArrowList
                items={[
                  "Guest blogging on industry-relevant platforms",
                  "Local business directory citations",
                  "Natural backlinks from clients and vendors",
                ]}
              />
            </div>

            {/* GMB — spans 2 cols */}
            <div className="bg-white p-8 md:col-span-2">
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                Local Visibility
              </p>
              <h3 className="text-lg font-normal text-gray-900 mb-2 leading-snug">
                Google Business Profile optimisation
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                NearMeInteriors.com gained significantly higher map-pack visibility by
                fully optimising their Google Business Profile — accurate business
                information, professional imagery, and active review management. NAP
                consistency was enforced across 40+ citation sites.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden">
            <Image
              src="/images/portfolio/nearmeIntePortfolio03.webp"
              alt="Off-page SEO"
              width={1100}
              height={500}
              className="w-full h-80 object-fill"
            />
          </div>
        </section>

        {/* 05 RESULTS */}
        <section>
          <SectionHeader num="05" title="Results" />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  {["Metric", "Before", "After", "Change"].map((h) => (
                    <th
                      key={h}
                      className="text-left p-4 font-normal text-[10px] tracking-[.15em] uppercase font-normal"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.metric} className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-900">{r.metric}</td>
                    <td className="p-4">
                      <span className="inline-block bg-gray-100 text-gray-500 font-normal text-xs px-2 py-1 rounded-sm">
                        {r.before}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-block bg-gray-900 text-white font-normal text-xs px-2 py-1 rounded-sm">
                        {r.after}
                      </span>
                    </td>
                    <td className="p-4 font-normal text-xs text-gray-900 font-medium">
                      {r.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 06 TAKEAWAYS */}
        <section>
          <SectionHeader num="06" title="Key Takeaways" />

          <div className="grid md:grid-cols-3 gap-px bg-gray-900 border border-gray-900">
            {takeaways.map((t) => (
              <div key={t.n} className="bg-stone-50 p-8">
                <p className="text-5xl font-normal text-gray-200 leading-none mb-4">
                  {t.n}
                </p>
                <h3 className="text-base font-normal italic text-gray-900 mb-2 leading-snug">
                  {t.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="grid md:grid-cols-[auto_1fr] gap-16 border-t-2 border-gray-900 pt-10">
          <p className="font-normal text-base tracking-[.15em] uppercase text-gray-400 pt-1 whitespace-nowrap">
            Conclusion
          </p>
          <div>
            <h2 className="text-3xl font-normal leading-snug tracking-tight text-gray-900 mb-4">
              Your business can achieve similar results
            </h2>
            <p className="text-base text-gray-500 leading-relaxed font-light">
              NearMeInteriors.com's path to SEO dominance was built on data-driven
              decisions, continuous iteration, and targeted content marketing. If your
              business wants to rank higher, attract qualified leads, and increase
              conversions — these proven strategies can deliver sustainable, compounding
              search engine growth.
            </p>
            <div className="overflow-hidden">
              <Image
                src="/images/portfolio/nearmeIntePortfolio04.webp"
                alt="Results"
                width={600}
                height={500}
                className="w-full h-80 object-fill"
              />
            </div>
            <div className="flex items-center gap-6 mt-8">
              <button className="bg-gradient-to-r from-[#255EC8] to-[#1e3a5f] text-white text-sm px-6 py-3 cursor-pointer">
                Start a similar project →
              </button>
              <button className="text-sm text-gray-400 underline underline-offset-4 hover:text-gray-900 transition-colors">
                View more case studies
              </button>
            </div>
          </div>
        </section>

        {/* final image */}


      </div>

    </div>
  );
}