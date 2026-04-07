"use client";

import Image from "next/image";

const heroStats = [
  { num: "4.1X", label: "Return on Ad Spend" },
  { num: "$1.43K", label: "Sales Generated" },
  { num: "3.5%", label: "Conversion Rate" },
  { num: "+172%", label: "Revenue Growth" },
];

const strategyColumns = [
  {
    tag: "Keywords",
    title: "Smart keyword selection",
    desc: "Long-tail, low-competition keywords with high purchase intent drove quality traffic at lower cost.",
    items: [
      "Affordable gold-plated nose rings",
      "Buy hypoallergenic earrings online",
      "Trendy cartilage piercings for sale",
    ],
  },
  {
    tag: "Audience",
    title: "Laser-targeted segmentation",
    desc: "Precise demographic and behavioural targeting to reach the highest-converting buyer segments.",
    items: [
      "Females aged 18–35 via demographic data",
      "Location-based targeting by demand",
      "Retargeting past visitors with custom ads",
    ],
  },
  {
    tag: "Bidding",
    title: "Smart bidding strategy",
    desc: "Automated, data-driven bidding eliminated ad waste and maximised spend efficiency.",
    items: [
      "Maximize Conversions for budget allocation",
      "Target ROAS to maintain profitability",
      "Enhanced CPC for real-time bid adjustment",
    ],
  },
];

const adCopyPoints = [
  "Powerful CTAs — Shop Now, Limited Time Offer, Free Shipping",
  "Emotional triggers emphasising uniqueness, affordability, quality",
  "Trust signals — 100% Satisfaction Guarantee, Secure Payments",
];

const landingPagePoints = [
  "Fast loading speeds under 2 seconds to reduce bounce rates",
  "Clear product descriptions and pricing for full transparency",
  "Streamlined checkout to minimise cart abandonment",
  "Mobile-first design for seamless smartphone shopping",
];

const analyticsPoints = [
  "Google Analytics for continuous user behaviour analysis",
  "Conversion Tracking to measure true campaign ROI",
  "Real-time refinement based on drop-off point data",
  "Performance dashboards for transparent reporting",
];

const results = [
  { metric: "Ad Spend", before: "$500", after: "$348", change: "−30%" },
  { metric: "Sales Revenue", before: "$750", after: "$1,430", change: "+91%" },
  { metric: "ROAS", before: "1.5X", after: "4.1X", change: "+173%" },
  { metric: "Click-Through Rate", before: "2.5%", after: "6.8%", change: "+172%" },
  { metric: "Conversion Rate", before: "1.2%", after: "3.5%", change: "+192%" },
];

const takeaways = [
  {
    n: "01",
    title: "Optimise for high-intent keywords",
    desc: "Focus on long-tail, buyer-intent keywords to attract quality traffic at a lower cost per click.",
  },
  {
    n: "02",
    title: "Craft persuasive ad copy",
    desc: "Highlight unique selling points, build trust, and include strong CTAs that compel action.",
  },
  {
    n: "03",
    title: "Monitor and adjust constantly",
    desc: "Use Google Analytics to refine your strategy in real-time — campaigns that adapt, win.",
  },
];

function SectionHeader({ num, title }) {
  return (
    <div className="flex items-baseline gap-6 border-t border-gray-200 pt-4 mb-10">
      <span className="font-normal text-base tracking-widest text-gray-500 min-w-[2rem]">
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
          <span className="font-normal text-xs text-gray-300 flex-shrink-0 mt-0.5">→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PiercedLovelyCaseStudy() {
  return (
    <div className="bg-stone-50 text-gray-900">

      {/* ── HERO ── */}
      <section className="bg-destructive text-white px-6 pt-16 md:pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <span className="block w-8 h-px bg-gray-600" />
            <span className="font-normal text-[11px] tracking-[.2em] uppercase text-gray-500">
              Case Study — Google Ads Campaign
            </span>
          </div>

          {/* hero grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-end">

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight">
                How Pierced & Lovely<br />
                turned $348 in ads<br />
                <span className="italic text-gray-500">into $1,430 in sales</span>
              </h1>
              <p className="mt-6 text-gray-400 text-base leading-relaxed font-light max-w-[40ch]">
                A data-driven Google Ads strategy with a 70%+ optimisation score
                that slashed ad spend while nearly doubling revenue — powered by
                Starway Web Digital.
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
          <p className="text-base leading-relaxed text-gray-600 font-light">
            In the highly competitive world of e-commerce, achieving high sales with
            minimal ad spend is the ultimate goal. Pierced and Lovely managed to
            generate $1.43K in sales by investing just $348 in Google Ads — a
            remarkable feat that showcases the power of strategic ad optimisation.
            <br /><br />
            This success was made possible with the expertise of Starway Web Digital,
            which ensured an optimisation score of over 70%, leading to high-performing
            campaigns.
          </p>
          <blockquote className="border-l-2 border-gray-900 pl-6">
            <p className="text-xl italic font-normal leading-snug text-gray-800">
              "A score above 70% indicates campaigns are optimised for conversions,
              CTR, and cost per acquisition — and that's exactly where we took them."
            </p>
            <cite className="block mt-4 font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 not-italic">
              Starway Web Digital — Campaign Strategy
            </cite>
          </blockquote>
        </div>

        {/* 01 KEYWORD + AUDIENCE + BIDDING */}
        <section>
          <SectionHeader num="01" title="Core Campaign Strategy" />

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {strategyColumns.map((col) => (
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

          <DarkPanel title="Google Shopping Ads Integration">
            Pierced and Lovely integrated Google Shopping Ads, allowing their products
            to appear at the top of search results with high-quality images, live
            pricing, and direct Buy Now links. This single addition drove a significant
            jump in click-through rate and pushed conversion numbers higher across
            every product category.
          </DarkPanel>
        </section>

        {/* 02 AD COPY */}
        <section>
          <SectionHeader num="02" title="High-Quality Ad Copy" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Creative Direction
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                Persuasive copy that converts browsers into buyers
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every ad was written to move a specific type of shopper — someone
                browsing passively — toward an immediate purchase decision. Emotional
                resonance, urgency, and credibility were engineered into every
                headline and description.
              </p>
            </div>
            <CheckList items={adCopyPoints} />
          </div>
          <Image
            src="/images/portfolio/peacedLovelyportfolio01.webp"
            alt="Social media platform selection and audience targeting strategy"
            width={600}
            height={500}
            className="w-full h-80 md:h-[400px] object-full mt-8"
          />
        </section>

        {/* 03 LANDING PAGE */}
        <section>
          <SectionHeader num="03" title="Landing Page Optimisation" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <CheckList items={landingPagePoints} />
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Conversion Architecture
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                Every pixel built to convert
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Driving traffic is only half the battle. The landing page was
                engineered to remove every possible point of friction — from load
                speed to checkout flow — ensuring visitors who arrived with purchase
                intent could complete a transaction without hesitation.
              </p>
            </div>
          </div>

          <DarkPanel title="Analytics & Conversion Tracking">
            With Google Analytics and Ads Conversion Tracking, Pierced and Lovely
            continuously analysed user behaviour, ad performance, and drop-off points.
            This enabled real-time campaign refinement — every rupee of ad spend was
            accountable, and every underperforming element was identified and fixed
            within days.
          </DarkPanel>
        </section>

        {/* 04 ANALYTICS */}
        <section>
          <SectionHeader num="04" title="Data & Analytics" />

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            <div className="bg-white p-8 md:col-span-2">
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                Tracking Infrastructure
              </p>
              <h3 className="text-lg font-normal text-gray-900 mb-2 leading-snug">
                Measuring everything that matters
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                A campaign without data is a campaign flying blind. Every touchpoint —
                from the first ad impression to the final checkout confirmation — was
                tracked, measured, and fed back into the optimisation loop. This
                closed-loop system is what separated consistent performance from
                guesswork.
              </p>
            </div>
            <div className="bg-white p-8">
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                Tools Used
              </p>
              <ArrowList items={analyticsPoints} />
            </div>
          </div>

          <Image
            src="/images/portfolio/peacedLovelyportfolio02.webp"
            alt="Analytics and conversion tracking strategy"
            width={600}
            height={500}
            className="w-full h-80 md:h-[400px] object-cover mt-8"
          />
        </section>

        {/* 05 RESULTS */}
        <section>
          <SectionHeader num="05" title="Results" />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-destructive text-white">
                  {["Metric", "Before", "After", "Change"].map((h) => (
                    <th
                      key={h}
                      className="text-left p-4 font-normal text-[10px] tracking-[.15em] uppercase"
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
                      <span className="inline-block bg-destructive text-white font-normal text-xs px-2 py-1 rounded-sm">
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

          {/* extra takeaways as checklist */}
          <div className="mt-px bg-gray-900">
            <div className="bg-stone-50 p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Segment your audience", desc: "Use demographics, interests, and retargeting to maximise engagement and reduce wasted impressions." },
                  { label: "Use smart bidding", desc: "Take advantage of Google's automated bidding strategies for better efficiency at scale." },
                  { label: "Optimise your landing page", desc: "Fast loading, mobile optimisation, and a smooth checkout are non-negotiable conversion foundations." },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-normal text-xs tracking-[.15em] uppercase text-gray-400 mb-1">
                      Also key
                    </p>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">{item.label}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
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
              Pierced and Lovely's success is proof that strategic ad optimisation can
              yield massive returns even with a limited budget. By maintaining a Google
              Ads Optimisation Score above 70%, they outperformed competitors and
              significantly increased sales while lowering ad spend. Whether you run an
              e-commerce store or any other business, these proven strategies can help
              you achieve similar success.
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