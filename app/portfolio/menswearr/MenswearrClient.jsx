"use client";

import Image from "next/image";

const heroStats = [
  { num: "4.6X", label: "Return on Ad Spend" },
  { num: "£5.16K", label: "Sales Generated" },
  { num: "7.8%", label: "Conversion Rate" },
  { num: "£0.22", label: "Cost Per Click" },
];

const strategyColumns = [
  {
    tag: "Keywords",
    title: "Meticulous keyword research",
    desc: "A three-layer keyword strategy ensured ads reached buyers, not browsers — at the lowest possible cost.",
    items: [
      '"Affordable men\'s fashion" — broad & phrase match',
      '"Buy men\'s formal wear online" — transactional intent',
      "Negative keywords to eliminate irrelevant traffic",
    ],
  },
  {
    tag: "Ad Copy",
    title: "Copy built for conversion",
    desc: "Every headline and description was engineered to communicate value, urgency, and a clear next step.",
    items: [
      '"Premium Quality at Unbeatable Prices" — value prop',
      '"Flash Sale – Up to 50% Off Today!" — urgency',
      '"Shop Now & Get Free Shipping!" — strong CTA',
    ],
  },
  {
    tag: "Bidding",
    title: "Smart automated bidding",
    desc: "Automated strategies replaced guesswork with data — allocating every pound to its highest-return opportunity.",
    items: [
      "Target ROAS for maximum return on every pound",
      "Enhanced CPC with real-time bid adjustments",
      "Seasonal bid increases during peak shopping windows",
    ],
  },
];

const landingPageItems = [
  "Pages loaded in under 2 seconds — reducing bounce rate",
  "Mobile-friendly design across all screen sizes",
  "Clear product descriptions and pricing for full transparency",
  "Simplified checkout to minimise cart abandonment",
];

const audienceItems = [
  "Lookalike Audiences mirroring high-value existing buyers",
  "Custom Intent Audiences actively searching for menswear",
  "Dynamic Remarketing with personalised product-level ads",
  "Sequential messaging to nurture undecided visitors",
];

const starwayItems = [
  "A/B testing of ad variations to find top-performing creatives",
  "Bid adjustments based on live performance data",
  "Continuous campaign monitoring for sustained ROI",
  "Optimisation score maintained above 70% throughout",
];

const results = [
  { metric: "Total Sales", before: "—", after: "£5,160", change: "Generated" },
  { metric: "Ad Spend", before: "—", after: "£1,120", change: "Invested" },
  { metric: "Return on Ad Spend", before: "Industry avg. 2X", after: "4.6X", change: "+130%" },
  { metric: "Conversion Rate", before: "Avg. 2–3%", after: "7.8%", change: "+160%" },
  { metric: "Cost Per Click", before: "Avg. £0.80+", after: "£0.22", change: "−73%" },
];

const takeaways = [
  {
    n: "01",
    title: "Precision targeting maximises ad spend",
    desc: "Intent-driven keywords and audience segmentation ensure every click carries real conversion potential — not just volume.",
  },
  {
    n: "02",
    title: "Optimised landing pages drive sales",
    desc: "Investing in user-friendly, persuasive landing pages is the single highest-leverage move after launching a campaign.",
  },
  {
    n: "03",
    title: "Continuous testing is the real edge",
    desc: "Menswearr.com didn't set it and forget it. Constant analysis, iteration, and adjustment is what separated good results from great ones.",
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
      <p className="text-lg text-gray-400 leading-relaxed">{children}</p>
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="mt-2 divide-y divide-gray-100">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start py-3 text-lg text-gray-600">
          <span className="font-normal text-xs text-gray-400 flex-shrink-0 mt-1.5">
            [✓]
          </span>
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
          <span className="font-normal text-xs text-gray-300 flex-shrink-0 mt-1.5">
            →
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function MenswearrCaseStudy() {
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
                How Menswearr.com turned £1.12K in ads <span className="italic text-gray-500">into £5.16K in sales</span>
              </h1>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed font-light max-w-[42ch]">
                A precision-targeted Google Ads strategy combining smart bidding,
                high-intent keywords, dynamic remarketing, and expert optimisation
                by Starway Web Digital — delivering a 4.6X return on ad spend.
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
            In today's highly competitive e-commerce landscape, achieving significant
            sales with a limited ad budget is no small feat. Menswearr.com, an
            emerging online fashion brand, accomplished just that by strategically
            leveraging Google Ads.
            <br /><br />
            With a calculated approach, they generated over £5.16K in sales while
            investing only £1.12K — a success story built on precision targeting,
            smart budget allocation, and high-performing ad optimisations.
          </p>
          <blockquote className="border-l-2 border-gray-900 pl-6">
            <p className="text-xl italic font-normal leading-snug text-gray-800">
              "Their success highlights the importance of precision-targeted campaigns,
              smart budget allocation, and high-performing ad optimisations — executed
              with consistency."
            </p>
            <cite className="block mt-4 font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 not-italic">
              Campaign Overview — Menswearr.com
            </cite>
          </blockquote>
        </div>

        {/* 01 KEYWORD + COPY + BIDDING */}
        <section>
          <SectionHeader num="01" title="Core Ads Strategy" />

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

          <Image
            src="/images/portfolio/menswearrPortfolio02.webp"
            alt="Social media platform selection and audience targeting strategy — BodyGuardBugSpray"
            width={1100}
            height={520}
            className="w-full h-80 md:h-[420px] object-full mt-8"
          />
        </section>

        {/* 02 LANDING PAGE */}
        <section>
          <SectionHeader num="02" title="Landing Page Optimisation" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Conversion Architecture
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                Driving traffic is only half the battle
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                Converting visitors is where real growth happens. Menswearr.com
                engineered every element of their landing experience to reduce
                friction and build trust — ensuring that visitors arriving with
                purchase intent could complete a transaction without hesitation,
                confusion, or delay.
              </p>
            </div>
            <CheckList items={landingPageItems} />
          </div>
        </section>

        {/* 03 AUDIENCE & REMARKETING */}
        <section>
          <SectionHeader num="03" title="Audience Targeting & Remarketing" />

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            <div className="bg-white p-8 md:col-span-2">
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                Audience Intelligence
              </p>
              <h3 className="text-lg font-normal text-gray-900 mb-2 leading-snug">
                Reaching the right people — twice
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                Menswearr.com didn't rely on broad targeting and hope. Every audience
                segment was defined with intent in mind — from lookalike audiences
                built on their highest-value customers, to dynamic remarketing ads
                that followed potential buyers across the web showing them the exact
                product they had previously viewed. This layered approach dramatically
                improved conversion efficiency across the funnel.
              </p>
            </div>
            <div className="bg-white p-8">
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                Tactics Used
              </p>
              <ArrowList items={audienceItems} />
            </div>
          </div>
        </section>

        {/* 04 STARWAY */}
        <section>
          <SectionHeader num="04" title="Starway Web Digital's Role" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <CheckList items={starwayItems} />
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Expert Management
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                The optimisation layer that made the difference
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                A crucial element in this campaign's success was the expert management
                by Starway Web Digital. With an optimisation score maintained above
                70%, they ensured Menswearr.com's ads were always set up to perform
                at their peak — refining creatives, adjusting bids, and eliminating
                waste on a continuous basis.
              </p>
            </div>
          </div>

          <DarkPanel title="A/B Testing as a Growth Engine">
            Rather than assuming which ad creative or landing page variant would
            perform best, Starway Web Digital ran structured A/B tests across
            headlines, descriptions, CTAs, and page layouts. Every iteration was
            informed by data — and every winning variant was deployed to maximise
            the campaign's overall conversion rate and lower cost per acquisition
            over time.
          </DarkPanel>
        </section>

        {/* 05 RESULTS */}
        <section>
          <SectionHeader num="05" title="Results" />

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
                <p className="text-base text-gray-500 leading-relaxed">{t.desc}</p>
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
              Replicating this success for your business
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              Menswearr.com's impressive results showcase the power of strategic
              Google Ads management, data-driven decisions, and expert campaign
              optimisations. If you're looking to achieve similar success, adopting
              these tactics — precision keyword targeting, smart bidding, dynamic
              remarketing, and continuous testing — can help you maximise your return
              on investment while keeping ad spend firmly under control.
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