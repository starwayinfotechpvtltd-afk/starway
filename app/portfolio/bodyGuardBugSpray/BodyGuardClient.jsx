"use client";

import Image from "next/image";

const heroStats = [
  { num: "7X", label: "Facebook Followers Growth" },
  { num: "6.8%", label: "Instagram Engagement Rate" },
  { num: "4.5%", label: "Social Conversion Rate" },
  { num: "650%", label: "Website Traffic Growth" },
];

const platformColumns = [
  {
    tag: "B2C & Awareness",
    title: "Facebook & Instagram",
    desc: "Core platforms for community building, brand storytelling, and direct consumer engagement at scale.",
    items: [
      "Community building through Facebook Groups",
      "Instagram Reels for product education",
      "Brand awareness campaigns across both feeds",
    ],
  },
  {
    tag: "Thought Leadership",
    title: "Twitter & LinkedIn",
    desc: "Positioned BodyGuardBugSpray as an authoritative eco-friendly voice through consistent expert content.",
    items: [
      "Industry thought leadership on Twitter",
      "Direct consumer interaction and Q&A",
      "LinkedIn for B2B partnership visibility",
    ],
  },
  {
    tag: "Visual Education",
    title: "Pinterest & YouTube",
    desc: "Long-form and visual content educating audiences on natural insect repellents and eco-conscious living.",
    items: [
      "Pinterest boards on eco-friendly living",
      "YouTube tutorials and product explainers",
      "Evergreen content driving sustained traffic",
    ],
  },
];

const contentItems = [
  "Educational posts — insect prevention and eco-lifestyle tips",
  "Product highlights showcasing unique brand benefits",
  "User-generated content with customer testimonials",
  "Interactive polls, quizzes, and live Q&A sessions",
];

const influencerItems = [
  "Product reviews and testimonials by eco-conscious creators",
  "Giveaway campaigns to rapidly expand audience reach",
  "Collaborative Instagram Reels and TikTok videos",
  "Lifestyle blogger partnerships for authentic endorsement",
];

const paidAdsItems = [
  "Lookalike Audiences mirroring existing high-value customers",
  "Retargeting campaigns for users who engaged but didn't convert",
  "Geo-targeted ads focused on mosquito-prone US regions",
  "Dynamic creative testing across all major social platforms",
];

const communityItems = [
  "Promptly responding to all comments and direct messages",
  "Facilitating discussions in Facebook Groups and forums",
  "Instagram Live Q&A sessions with industry experts",
  "Hashtag strategy — #EcoFriendlyLiving #SafeOutdoors #MosquitoFreeLife",
];

const results = [
  { metric: "Facebook Followers", before: "5,000", after: "35,000", change: "+600%" },
  { metric: "Instagram Engagement Rate", before: "1.2%", after: "6.8%", change: "+467%" },
  { metric: "Twitter Mentions", before: "100 / month", after: "800 / month", change: "+700%" },
  { metric: "Website Traffic from Social", before: "2,000 / month", after: "15,000 / month", change: "+650%" },
  { metric: "Conversion Rate from Social", before: "0.8%", after: "4.5%", change: "+463%" },
];

const takeaways = [
  {
    n: "01",
    title: "Consistency is the foundation",
    desc: "Regular, engaging content posting maintains audience interest and loyalty — sporadic posting is the fastest way to lose momentum.",
  },
  {
    n: "02",
    title: "Audience-centric approach wins",
    desc: "Understanding and catering to your audience's preferences ensures better engagement, stronger community, and higher conversions.",
  },
  {
    n: "03",
    title: "Paid and organic work together",
    desc: "A combination of organic engagement strategies and targeted social ads maximises both reach and ROI simultaneously.",
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

export default function BodyGuardBugSprayCaseStudy() {
  return (
    <div className="bg-stone-50 text-gray-900">

      {/* ── HERO ── */}
      <section className="bg-destructive text-white px-6 pt-16 md:pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-10">
            <span className="block w-8 h-px bg-gray-600" />
            <span className="font-normal text-[11px] tracking-[.2em] uppercase text-gray-500">
              {/* Case Study — Social Media Optimization */}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight">
                How BodyGuardBugSpray dominated social media
                <span className="italic text-gray-500">across the USA</span>
              </h1>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed font-light max-w-[42ch]">
                A data-driven Social Media Optimization strategy combining
                audience segmentation, influencer partnerships, community building,
                and paid social ads — delivering a 650% surge in website traffic
                from social channels.
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
            In today's digital era, achieving a strong social media presence is
            crucial for brand visibility and customer engagement.
            BodyGuardBugSpray.com, a leading brand in eco-friendly insect
            repellents, successfully leveraged Social Media Optimization to
            dominate the market in the USA.
            <br /><br />
            Through a data-driven approach and strategic social media campaigns,
            we helped them increase their audience reach, engagement rates, and
            conversions significantly — across every major platform.
          </p>
          <blockquote className="border-l-2 border-gray-900 pl-6">
            <p className="text-xl italic font-normal leading-snug text-gray-800">
              "A data-driven SMO approach combined with authentic community
              engagement transformed BodyGuardBugSpray from a niche product into
              a recognisable eco-lifestyle brand."
            </p>
            <cite className="block mt-4 font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 not-italic">
              Campaign Overview — BodyGuardBugSpray.com
            </cite>
          </blockquote>
        </div>

        {/* 01 PLATFORMS */}
        <section>
          <SectionHeader num="01" title="Platform Selection & Audience Targeting" />

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {platformColumns.map((col) => (
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
            src="/images/portfolio/bodygurdPortfolio01.webp"
            alt="Social media platform selection and audience targeting strategy — BodyGuardBugSpray"
            width={1100}
            height={520}
            className="w-full h-80 md:h-[420px] object-cover mt-8"
          />
        </section>

        {/* 02 CONTENT STRATEGY */}
        <section>
          <SectionHeader num="02" title="Content Strategy" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Editorial Direction
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                A content calendar built to drive engagement
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                We crafted a highly engaging content calendar ensuring a consistent
                mix of educational, promotional, and interactive content. Rather than
                posting randomly, every piece of content served a specific purpose
                in the audience journey — from awareness through to advocacy.
                The result was an audience that didn't just follow the brand,
                but actively engaged with and shared it.
              </p>
            </div>
            <CheckList items={contentItems} />
          </div>
        </section>

        {/* 03 INFLUENCERS */}
        <section>
          <SectionHeader num="03" title="Influencer Collaborations & Partnerships" />

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            <div className="bg-white p-8 md:col-span-2">
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                Brand Credibility
              </p>
              <h3 className="text-lg font-normal text-gray-900 mb-2 leading-snug">
                Authentic voices in the eco-conscious space
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                To enhance brand credibility, we partnered with eco-conscious
                influencers and lifestyle bloggers whose audiences already aligned
                with the BodyGuardBugSpray ethos. These weren't transactional
                sponsorships — they were genuine brand partnerships that produced
                content audiences trusted, shared, and acted on. Giveaway campaigns
                amplified reach rapidly while collaborative Reels and TikTok videos
                drove sustained organic discovery.
              </p>
            </div>
            <div className="bg-white p-8">
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-4">
                Collaboration Types
              </p>
              <ArrowList items={influencerItems} />
            </div>
          </div>
        </section>

        {/* 04 PAID ADS — with image */}
        <section>
          <SectionHeader num="04" title="Paid Social Media Advertising" />

          {/* image full width */}
          <div className="overflow-hidden mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {[
                "/images/portfolio/bodygurdSocial/bodygurdPortfolioSocial01.webp",
                "/images/portfolio/bodygurdSocial/bodygurdPortfolioSocial02.webp",
                "/images/portfolio/bodygurdSocial/bodygurdPortfolioSocial03.webp",
                "/images/portfolio/bodygurdSocial/bodygurdPortfolioSocial04.webp",
                "/images/portfolio/bodygurdSocial/bodygurdPortfolioSocial05.webp",
                "/images/portfolio/bodygurdSocial/bodygurdPortfolioSocial06.webp",
              ].map((src, i) => (
                <div key={i} className="overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Portfolio image ${i + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-60 md:h-64 lg:h-64 object-fill transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              ))}

            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Paid Strategy
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                Precision targeting for maximum reach
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                We executed highly targeted social media ad campaigns designed to
                reach the right people in the right locations at the right moment.
                By layering lookalike audiences, geo-targeting, and retargeting,
                every ad dollar was directed toward users with genuine purchase
                intent — not just impressions. Mosquito-prone regions of the USA
                were prioritised to match product need with ad delivery.
              </p>
            </div>
            <CheckList items={paidAdsItems} />
          </div>

          <DarkPanel title="Geo-Targeting: Matching Need with Reach">
            One of the most effective levers in the paid strategy was geo-targeting
            specific regions of the USA where mosquito activity — and therefore
            demand for insect repellents — was highest. By concentrating spend on
            these areas during peak seasons, BodyGuardBugSpray achieved a
            significantly higher relevance score, lower cost per click, and stronger
            conversion rates compared to national broad-targeting benchmarks.
          </DarkPanel>
        </section>

        {/* 05 COMMUNITY */}
        <section>
          <SectionHeader num="05" title="Community Building & Engagement" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <CheckList items={communityItems} />
            <div>
              <p className="font-normal text-[10px] tracking-[.15em] uppercase text-gray-400 mb-2">
                Community Management
              </p>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug">
                A brand that actually shows up
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                Community management is often the difference between a brand that
                people follow and a brand that people belong to. We ensured
                BodyGuardBugSpray actively participated in conversations, responded
                to every comment and message promptly, and created spaces — like
                Facebook Groups and Instagram Lives — where their audience could
                engage directly with experts and each other.
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
        </section>

        {/* CONCLUSION */}
        <section className="grid md:grid-cols-[auto_1fr] gap-16 border-t-2 border-gray-900 pt-10">
          <p className="font-normal text-base tracking-[.15em] uppercase text-gray-400 pt-1 whitespace-nowrap">
            Conclusion
          </p>
          <div>
            <h2 className="text-3xl font-normal leading-snug tracking-tight text-gray-900 mb-4">
              How your brand can achieve similar SMO success
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              BodyGuardBugSpray.com's journey to social media dominance in the USA
              was fuelled by data-driven strategies, engaging content, and consistent
              community engagement. If you want to amplify your brand's social media
              presence, drive more traffic, and increase sales, these strategies can
              be your roadmap to success — regardless of your industry or current
              following size.
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