"use client";

import Image from "next/image";

const heroStats = [
  { num: "19.9X", label: "Return on Ad Spend" },
  { num: "$14K", label: "Revenue Generated" },
  { num: "9.5%", label: "Conversion Rate" },
  { num: "6.8%", label: "Click-Through Rate" },
];

const strategyColumns = [
  {
    tag: "Smart Bidding",
    title: "Budget allocation that works harder",
    desc: "Every dollar of the $702 budget was directed by Google's Smart Bidding to the highest-value opportunities.",
    items: [
      "Maximize Conversions for highest bookings per dollar",
      "Target CPA to keep acquisition costs low",
      "Enhanced CPC for real-time bid adjustments",
    ],
  },
  {
    tag: "Ad Copy",
    title: "Copy that compels action",
    desc: "High-converting headlines and descriptions built around urgency, trust, and a clear next step.",
    items: [
      '"Book Your Catering Today!" as primary CTA',
      "10% off first-time bookings for urgency",
      '"5-star reviews, 100+ events yearly" for trust',
    ],
  },
  {
    tag: "Extensions",
    title: "Ad extensions for every intent",
    desc: "Extensions turned standard ads into multi-entry conversion funnels across call, location, and content.",
    items: [
      "Call extensions — direct click-to-call",
      "Location extensions — local inquiry driver",
      "Sitelink extensions — services and testimonials",
    ],
  },
];

const keywordItems = [
  '"Affordable catering services near me"',
  '"Best wedding caterers in [city]"',
  '"Corporate event catering"',
  '"Birthday party food catering"',
];

const challengeItems = [
  "Limited advertising budget with high revenue expectations",
  "High competition in the local catering industry",
  "Need to attract high-intent, ready-to-book customers",
  "Achieving cost-effective conversions at scale",
];

const landingPageItems = [
  "Fast load speed under 3 seconds to reduce bounce",
  "Clear and concise messaging with no distractions",
  "Customer testimonials for immediate social proof",
  "Simple inquiry forms and a direct booking option",
];

const remarketingItems = [
  "Retargeted past visitors with limited-time discount ads",
  "Google Display Network ads on relevant websites",
  "Dynamic remarketing showing specific packages viewed",
  "Sequential messaging to nurture undecided visitors",
];

const analyticsItems = [
  "Identified which keywords drove the most conversions",
  "Adjusted bids to focus on high-performing terms",
  "Optimised ad placements to lower CPC over time",
  "A/B tested ad copies and landing page variants",
];

const results = [
  { metric: "Ad Spend", before: "—", after: "$702", change: "Budget" },
  { metric: "Total Clicks", before: "—", after: "2,345", change: "Earned" },
  { metric: "Click-Through Rate", before: "Avg. 2–3%", after: "6.8%", change: "+127%" },
  { metric: "Conversion Rate", before: "Avg. 2–4%", after: "9.5%", change: "+138%" },
  { metric: "Total Revenue", before: "—", after: "$14,000", change: "Generated" },
  { metric: "ROAS", before: "Industry avg. 2X", after: "19.9X", change: "+895%" },
];

const takeaways = [
  {
    n: "01",
    title: "Target high-intent keywords",
    desc: "Transactional, location-specific keywords attract visitors who are ready to book — not just browse.",
  },
  {
    n: "02",
    title: "Remarketing converts lost leads",
    desc: "Most visitors don't convert on the first visit. A smart remarketing funnel brings them back with the right offer at the right time.",
  },
  {
    n: "03",
    title: "Analyse, adjust, repeat",
    desc: "Continuous performance tracking and real-time optimisation is what separates a good campaign from a great one.",
  },
];

function SectionHeader({ num, title }) {
  return (
    <div className="flex items-baseline gap-6 border-t border-gray-200 pt-4 mb-10">
      <span className="font-normal text-base tracking-widest text-gray-400 min-w-[2rem]">
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
      <p className="text-base text-gray-400 leading-relaxed">{children}</p>
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="mt-2 divide-y divide-gray-100">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start py-3 text-base text-gray-600">
          <span className="font-normal text-xs text-gray-400 flex-shrink-0 mt-1">[✓]</span>
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
        <li key={i} className="flex gap-2 items-start py-2 text-base text-gray-600">
          <span className="font-normal text-xs text-gray-300 flex-shrink-0 mt-1">→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function SameysCaterCaseStudy() {
  return (
    <div className="bg-stone-50 text-gray-900">

      {/* ── HERO ── */}
      <section className="bg-destructive text-white px-6 pt-16 md:pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-10">
            <span className="block w-8 h-px bg-gray-600" />
            <span className="font-normal text-[11px] tracking-[.2em] uppercase text-gray-500">
              {/* Case Study — Google Ads Campaign */}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight">
                How Sammy's Catering Co. turned $702 in ads <span className="italic text-gray-500">into $14,000 in revenue</span>
              </h1>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed font-light max-w-[42ch]">
                A meticulously planned Google Ads strategy combining smart bidding,
                high-intent keywords, and remarketing to deliver a 19.9X return on
                ad spend — on a modest budget.
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

          <div className="mt-16 h-px bg-gray-800" />
        </div>
      </section>

      {/* ── MAIN ── */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-16">
          <p className="text-lg leading-relaxed text-gray-600 font-light">
            In today's highly competitive digital advertising landscape, businesses
            are constantly looking for ways to maximize their return on investment.
            Sammy's Catering Co. remarkably generated $14,000 in revenue by spending
            only $702 on Google Ads.
            <br /><br />
            This case study breaks down the strategies, optimisations, and execution
            methods that led to this outstanding 19.9X ROAS — and how you can apply
            them to your own business.
          </p>
          <blockquote className="border-l-2 border-gray-900 pl-6">
            <p className="text-xl italic font-normal leading-snug text-gray-800">
              "Through meticulous planning and execution, Sammy's Catering Co. made
              their campaign a resounding success — proving that budget size is no
              barrier to exceptional results."
            </p>
            <cite className="block mt-4 font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 not-italic">
              Campaign Overview — Sammy's Catering Co.
            </cite>
          </blockquote>
        </div>

        {/* 01 THE CHALLENGE */}
        <section>
          <SectionHeader num="01" title="Understanding the Challenge" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Starting Point
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                Real obstacles, real constraints
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                When Sammy's Catering Co. set out to expand its reach and increase
                revenue, the team faced a set of challenges common to small businesses
                entering paid advertising for the first time. The solution required a
                strategy that was both precise and efficient — there was no room for
                wasted spend.
              </p>
            </div>
            <CheckList items={challengeItems} />
          </div>
          <Image
            src="/images/portfolio/sammyCateringPortfolio01.webp"
            alt="Social media platform selection and audience targeting strategy — BodyGuardBugSpray"
            width={600}
            height={500}
            className="w-full h-80 md:h-[400px] object-full mt-8"
          />
        </section>

        {/* 02 KEYWORD RESEARCH */}
        <section>
          <SectionHeader num="02" title="Keyword Research" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <CheckList items={keywordItems} />
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Strategy Foundation
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                Only targeting people ready to book
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                Keyword research was the foundation of the entire campaign's
                effectiveness. Rather than casting a wide net, every keyword was
                chosen for transactional intent — meaning the people searching were
                actively looking to hire a caterer, not just gathering information.
                This single decision had an outsized impact on conversion rate.
              </p>
            </div>
          </div>
        </section>

        {/* 03 GOOGLE ADS STRATEGY */}
        <section>
          <SectionHeader num="03" title="Google Ads Strategy" />

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {strategyColumns.map((col) => (
              <div key={col.tag} className="bg-white p-8">
                <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                  {col.tag}
                </p>
                <h3 className="text-lg font-normal text-gray-900 mb-2 leading-snug">
                  {col.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">{col.desc}</p>
                <ArrowList items={col.items} />
              </div>
            ))}
          </div>

          <DarkPanel title="Landing Page Optimisation">
            A well-optimised landing page was critical to converting visitors into
            paying customers. Sammy's Catering Co. ensured their page loaded in under
            3 seconds, communicated clearly without clutter, and provided a frictionless
            path from interest to booking — including a direct inquiry form above the
            fold and customer testimonials placed strategically to reduce hesitation.
          </DarkPanel>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Conversion Architecture
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                The landing page as the final closer
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                Paid traffic is only as good as the page it lands on. Every element
                of the landing experience was designed to reduce friction and increase
                confidence — from load time to social proof placement to the simplicity
                of the booking form itself.
              </p>
            </div>
            <CheckList items={landingPageItems} />
          </div>
        </section>

        {/* 04 REMARKETING */}
        <section>
          <SectionHeader num="04" title="Remarketing Strategy" />

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            <div className="bg-white p-8 md:col-span-2">
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                Recovering Lost Leads
              </p>
              <h3 className="text-lg font-normal text-gray-900 mb-2 leading-snug">
                Turning browsers into buyers — the second time around
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                Most visitors don't convert on their first visit — especially for a
                considered purchase like event catering. Remarketing allowed Sammy's
                Catering Co. to stay in front of warm prospects across the web,
                re-engaging them with tailored messaging until they were ready to
                commit. Dynamic remarketing took this further by showing each visitor
                the exact catering package they had previously viewed.
              </p>
            </div>
            <div className="bg-white p-8">
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                Tactics Used
              </p>
              <ArrowList items={remarketingItems} />
            </div>
          </div>
        </section>

        {/* 05 ANALYTICS */}
        <section>
          <SectionHeader num="05" title="Analytics & Optimisation" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <CheckList items={analyticsItems} />
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Continuous Improvement
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                Every dollar was accountable
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                One of the biggest success factors was continuous performance
                tracking and optimisation. Using Google Analytics and Google Ads
                Reports, the team identified what was working, doubled down on it,
                and eliminated what wasn't. No dollar of the $702 budget was spent
                without a clear read on its performance.
              </p>
            </div>
          </div>
        </section>

        {/* 06 RESULTS */}
        <section>
          <SectionHeader num="06" title="Results" />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-base">
              <thead>
                <tr className="bg-destructive text-white">
                  {["Metric", "Baseline", "After Campaign", "Change"].map((h) => (
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
                      <span className="inline-block bg-gray-100 text-gray-500 font-normal text-sm px-2 py-1 rounded-sm">
                        {r.before}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-block bg-destructive text-white font-normal text-sm px-2 py-1 rounded-sm">
                        {r.after}
                      </span>
                    </td>
                    <td className="p-4 font-normal text-sm text-gray-900 font-medium">
                      {r.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 07 TAKEAWAYS */}
        <section>
          <SectionHeader num="07" title="Key Takeaways" />

          <div className="grid md:grid-cols-3 gap-px bg-gray-900 border border-gray-900">
            {takeaways.map((t) => (
              <div key={t.n} className="bg-stone-50 p-8">
                <p className="text-5xl font-normal text-gray-200 leading-none mb-4">
                  {t.n}
                </p>
                <h3 className="text-base font-normal italic text-gray-900 mb-2 leading-snug">
                  {t.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-px bg-gray-900">
            <div className="bg-stone-50 p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    label: "Use smart bidding",
                    desc: "Automated bidding strategies maximise efficiency — letting Google's machine learning work in your favour.",
                  },
                  {
                    label: "Craft compelling ad copy",
                    desc: "Strong CTAs, discount hooks, and trust signals in your copy move people from curiosity to conversion.",
                  },
                  {
                    label: "Optimise landing pages",
                    desc: "Fast load speed, clear messaging, and a frictionless booking path are non-negotiable conversion foundations.",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-normal text-xs tracking-[.15em] uppercase text-gray-400 mb-1">
                      Also key
                    </p>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">{item.label}</h4>
                    <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <Image
            src="/images/portfolio/sammyCateringPortfolio02.webp"
            alt="Social media platform selection and audience targeting strategy — BodyGuardBugSpray"
            width={600}
            height={500}
            className="w-full h-80 md:h-[400px] object-full mt-8"
          />
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="grid md:grid-cols-[auto_1fr] gap-16 border-t-2 border-gray-900 pt-10">
          <p className="font-normal text-base tracking-[.15em] uppercase text-gray-400 pt-1 whitespace-nowrap">
            Final Thoughts
          </p>
          <div>
            <h2 className="text-3xl font-normal leading-snug tracking-tight text-gray-900 mb-4">
              Your business can achieve similar results
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              Sammy's Catering Co. proved that Google Ads can deliver massive sales
              with a small budget when executed correctly. By focusing on keyword
              research, ad optimisation, and remarketing, they turned $702 into
              $14,000 in sales — a 19.9X return that demonstrates the power of a
              well-structured digital marketing strategy. If you're a business looking
              to boost sales using Google Ads, following these techniques can help you
              maximise your ROI and scale your revenue efficiently.
            </p>
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

      </div>


    </div>
  );
}