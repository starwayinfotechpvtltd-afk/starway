// "use client";

// // OurWorkSection.jsx
// // Fully responsive component with all font families removed

// import Link from "next/link";

// // ─── Shared primitives ────────────────────────────────────────────────────────

// function ArrowIcon() {
//   return (
//     <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
//       <path
//         d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5"
//         stroke="#fff"
//         strokeWidth="1.3"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function LearnMoreBtn({ href = "#" }) {
//   return (
//     <Link
//       href={href}
//       className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-[12px] font-semibold px-3 sm:px-4 py-2 rounded-full transition-all duration-200 hover:translate-x-0.5"
//     >
//       Learn More
//       <span className="w-4 h-4 bg-white/25 rounded-full flex items-center justify-center flex-shrink-0">
//         <ArrowIcon />
//       </span>
//     </Link>
//   );
// }

// function ResultPill({ label }) {
//   return (
//     <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5">
//       <div className="w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0" />
//       <span className="text-[9px] sm:text-[10px] font-semibold text-green-700 whitespace-nowrap">
//         {label}
//       </span>
//     </div>
//   );
// }

// function StatChip({ value, label, accent = "text-white" }) {
//   return (
//     <div className="bg-white/10 border border-white/15 rounded-xl px-2 sm:px-3 py-1 sm:py-1.5 flex flex-col gap-0.5 backdrop-blur-sm">
//       <span className={`font-bold text-xs sm:text-sm leading-none ${accent}`}>{value}</span>
//       <span className="text-white/45 text-[8px] sm:text-[9px]">{label}</span>
//     </div>
//   );
// }

// // ─── Monitor Illustration ─────────────────────────────────────────────────────

// function MonitorIllustration({ colors = ["#6366f1", "#f97316", "#10b981", "#fbbf24"] }) {
//   return (
//     <div className="absolute top-2 sm:top-3.5 right-2 sm:right-3.5 w-24 sm:w-32">
//       <div className="bg-[#1e1e2e] rounded-lg p-1 sm:p-1.5 border border-white/15">
//         <div className="bg-[#0f0f1a] rounded h-14 sm:h-[74px] overflow-hidden p-1 sm:p-1.5 flex flex-col gap-0.5 sm:gap-1">
//           <div className="flex gap-0.5 h-2 sm:h-3">
//             {colors.map((c, i) => (
//               <div key={i} className="rounded-sm flex-1" style={{ background: c }} />
//             ))}
//           </div>
//           <svg width="100%" height="28" viewBox="0 0 110 36" fill="none" className="w-full">
//             <polyline points="0,30 18,22 36,18 54,10 72,14 90,6 110,4" stroke={colors[0]} strokeWidth="1.5" fill="none" opacity="0.8" />
//             <polyline points="0,32 18,28 36,20 54,24 72,16 90,20 110,12" stroke={colors[1]} strokeWidth="1.5" fill="none" opacity="0.8" />
//             <polyline points="0,34 18,30 36,26 54,20 72,26 90,18 110,22" stroke={colors[2]} strokeWidth="1.5" fill="none" opacity="0.8" />
//           </svg>
//         </div>
//       </div>
//       <div className="w-6 sm:w-8 h-1 sm:h-1.5 bg-white/10 rounded mx-auto mt-0.5 sm:mt-1" />
//     </div>
//   );
// }

// // ─── Spray Can Illustration ───────────────────────────────────────────────────

// function SprayCan() {
//   return (
//     <div className="absolute top-2 sm:top-3.5 right-3 sm:right-5 flex flex-col items-center gap-0.5 sm:gap-1">
//       <div className="w-3 h-2 sm:w-3.5 sm:h-2.5 bg-gray-400 rounded-t-sm mx-auto" />
//       <div className="w-7 sm:w-9 h-14 sm:h-20 bg-gradient-to-b from-gray-300 to-gray-500 rounded-[10px] sm:rounded-[14px] rounded-b-md border border-white/20" />
//       <div className="flex gap-0.5 sm:gap-1 opacity-60">
//         {[1, 0.5, 0.3].map((o, i) => (
//           <div key={i} className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-blue-300" style={{ opacity: o }} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── Card Body ────────────────────────────────────────────────────────────────

// function CardBody({ tagLabel, title, description, resultLabel, href }) {
//   return (
//     <div className="p-4 sm:p-5 flex flex-col gap-2 sm:gap-3">
//       <div className="flex items-center gap-2">
//         <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
//         <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.1em] uppercase text-orange-500">
//           {tagLabel}
//         </span>
//       </div>
//       <h3 className="text-gray-900 font-bold text-sm sm:text-[15px] leading-snug">
//         {title}
//       </h3>
//       <p className="text-gray-500 text-[11px] sm:text-[12.5px] leading-relaxed flex-1">
//         {description}
//       </p>
//       <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
//         <LearnMoreBtn href={href} />
//         <ResultPill label={resultLabel} />
//       </div>
//     </div>
//   );
// }

// // ─── Tag Pill ─────────────────────────────────────────────────────────────────

// function TagPill({ label, style = "orange" }) {
//   const styles = {
//     orange: "bg-orange-500 text-white",
//     yellow: "bg-amber-400 text-amber-900",
//     green: "bg-emerald-500 text-white",
//     blue: "bg-blue-500 text-white",
//   };
//   return (
//     <span
//       className={`absolute top-3 sm:top-4 left-3 sm:left-4 z-10 text-[9px] sm:text-[10px] font-bold tracking-[0.07em] uppercase px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${styles[style]}`}
//     >
//       {label}
//     </span>
//   );
// }

// // ─── Card Wrapper ─────────────────────────────────────────────────────────────

// function WorkCard({ children, className = "" }) {
//   return (
//     <div
//       className={`group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// // ═══════════════════════════════════════════════════════════════════════════════
// // SECTION
// // ═══════════════════════════════════════════════════════════════════════════════

// export default function OurWorkSection() {
//   return (
//     <section className="w-full bg-white py-12 sm:py-16 md:py-20 xl:py-28 px-4 sm:px-5">
//       <div className="w-full max-w-7xl mx-auto lg:w-[88%] xl:w-[82%] 2xl:w-[72%]">

//         {/* ── Header ── */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
//           <div className="flex items-center gap-3 flex-shrink-0">
//             <div className="w-6 sm:w-8 h-0.5 bg-orange-500 rounded-full" />
//             <span className="text-orange-500 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase">
//               Our Work
//             </span>
//           </div>
//           <h2 className="text-gray-900 font-black text-2xl sm:text-3xl md:text-4xl leading-tight text-center sm:text-left flex-1 sm:px-4 md:px-8">
//             Turning Ideas into{" "}
//             <span className="relative inline-block">
//               Impactful Results
//               <span className="absolute left-0 -bottom-1 w-full h-[2px] sm:h-[3px] bg-orange-500 rounded-full" />
//             </span>
//           </h2>
//           <Link
//             href="/work"
//             className="flex-shrink-0 self-start sm:self-auto inline-flex items-center gap-2.5 bg-gray-900 hover:bg-orange-500 text-white text-[11px] sm:text-[12px] font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-200"
//           >
//             All Work
//             <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white/20 rounded-full flex items-center justify-center">
//               <ArrowIcon />
//             </span>
//           </Link>
//         </div>

//         {/* ── Row 1: 2 cards ── */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7">

//           {/* Card 1 – SEO / dark green */}
//           <WorkCard>
//             <div className="relative h-48 sm:h-52 md:h-56 bg-gradient-to-br from-[#064e3b] to-[#065f46] overflow-hidden">
//               <TagPill label="SEO" style="orange" />

//               <div className="w-full absolute top-8 left-4 right-4">
//                 <svg width="100%" height="28" viewBox="0 0 110 36" fill="none">
//                   <polyline points="0,30 18,22 36,18 54,10 72,14 90,6 110,4" stroke="#064e3b" strokeWidth="1.5" fill="none" opacity="0.8" />
//                   <polyline points="0,32 18,28 36,20 54,24 72,16 90,20 110,12" stroke="#064e3b" strokeWidth="1.5" fill="none" opacity="0.8" />
//                   <polyline points="0,34 18,30 36,26 54,20 72,26 90,18 110,22" stroke="#064e3b" strokeWidth="1.5" fill="none" opacity="0.8" />
//                 </svg>
//               </div>

//               <div className="absolute top-3 right-2 sm:top-4 sm:right-4 flex gap-1.5 sm:gap-2">
//                 <StatChip value="2.56K" label="Clicks" />
//                 <StatChip value="↑380%" label="Growth" accent="text-emerald-400" />
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 bg-gradient-to-t from-black/70 to-transparent">
//                 <p className="text-white/40 text-[8px] sm:text-[9px] mb-0.5 sm:mb-1">nearmeinteriors.com</p>
//                 <p className="text-white font-black text-xs sm:text-sm md:text-base lg:text-lg uppercase leading-tight">
//                   From Zero to Hero:{" "}
//                   <span className="text-emerald-400">A Client's SEO Success Story!</span>
//                 </p>
//               </div>
//             </div>

//             <CardBody
//               tagLabel="Search Engine Optimisation"
//               title="From Zero to Hero: A Client's SEO Success Story!"
//               description="How we helped nearmeinteriors.com dominate search in Kolkata — growing from zero to 642K monthly impressions."
//               resultLabel="380% Traffic Growth"
//               href="/work/seo-success-story"
//             />
//           </WorkCard>

//           {/* Card 2 – Pierced & Lovely / dark blue */}
//           <WorkCard>
//             <div className="relative h-48 sm:h-52 md:h-56 bg-gradient-to-br from-[#1e3a5f] to-[#0f2540] overflow-hidden">
//               <TagPill label="Google Ads" style="yellow" />
//               <MonitorIllustration colors={["#6366f1", "#f97316", "#10b981", "#fbbf24"]} />
//               <div className="absolute bottom-10 sm:bottom-12 left-3 sm:left-4 flex gap-1.5 sm:gap-2">
//                 <StatChip value="$1.43K" label="Revenue" />
//                 <StatChip value="4.1x ROAS" label="Ad Spend $348" accent="text-amber-400" />
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 bg-gradient-to-t from-black/70 to-transparent">
//                 <p className="text-white font-black text-[10px] sm:text-xs md:text-[14px] uppercase leading-tight">
//                   Pierced & Lovely Crossed{" "}
//                   <span className="text-blue-400">$1.43K in Sales</span> on $348 Ad Spend
//                 </p>
//               </div>
//             </div>
//             <CardBody
//               tagLabel="Google Ads"
//               title="How Pierced and Lovely Crossed $1.43K in Sales by Spending Only $348 on Google Ads"
//               description="In the highly competitive world of e-commerce, achieving high sales with minimal ad spend is the ultimate goal."
//               resultLabel="4.1x ROAS Achieved"
//               href="/work/pierced-and-lovely"
//             />
//           </WorkCard>
//         </div>

//         {/* ── Row 2: 3 cards ── */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 mt-5 sm:mt-6 md:mt-7">

//           {/* Card 3 – Sammy's / black */}
//           <WorkCard>
//             <div className="relative h-48 sm:h-52 md:h-56 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] overflow-hidden">
//               <TagPill label="Google Ads" style="yellow" />
//               <MonitorIllustration colors={["#3b82f6", "#f97316", "#10b981", "#fbbf24"]} />
//               <div className="absolute bottom-10 sm:bottom-14 left-3 sm:left-4 flex gap-1.5 sm:gap-2">
//                 <StatChip value="$14K" label="Revenue" accent="text-emerald-400" />
//                 <StatChip value="$702" label="Ad Spend" accent="text-amber-400" />
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 bg-gradient-to-t from-black/60 to-transparent">
//                 <p className="text-white font-black text-[10px] sm:text-xs md:text-[14px] uppercase leading-tight">
//                   How Sammy's Achieved{" "}
//                   <span className="text-orange-500">$14K Sales</span> with Just $702 Ads
//                 </p>
//               </div>
//             </div>
//             <CardBody
//               tagLabel="Google Ads"
//               title="How Sammy's Catering Co. Achieved $14K in Sales with Just $702 on Google Ads"
//               description="In today's highly competitive digital advertising landscape, businesses are constantly looking for ways to maximize their return on investment (ROI)."
//               resultLabel="19.9x ROAS"
//               href="/work/sammys-catering"
//             />
//           </WorkCard>

//           {/* Card 4 – BodyGuard / ocean blue */}
//           <WorkCard>
//             <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden" style={{ background: "linear-gradient(160deg,#0369a1 0%,#164e63 60%,#1e293b 100%)" }}>
//               <TagPill label="Social Media" style="blue" />
//               <SprayCan />
//               <div className="absolute top-20 left-0 right-0 h-px bg-white/10" />
//               <div className="absolute bottom-12 sm:bottom-20 left-3 sm:left-4 flex gap-1.5 sm:gap-2">
//                 <StatChip value="+340%" label="Engagement" accent="text-emerald-400" />
//                 <StatChip value="USA" label="Market" />
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 bg-gradient-to-t from-black/70 to-transparent">
//                 <p className="text-white font-black text-[10px] sm:text-xs md:text-[15px] uppercase leading-tight">
//                   DISCOVER HOW WE HELPED{" "}
//                   <span className="text-blue-400">BODYGUARDBUGSPRAY.COM</span>{" "}
//                   DOMINATE THE SMO GAME IN THE USA
//                 </p>
//               </div>
//             </div>
//             <CardBody
//               tagLabel="Social Media Optimisation"
//               title="Discover How We Helped BodyGuardBugSpray.com Dominate the SMO Game in the USA"
//               description="In today's digital era, achieving a strong social media presence is crucial for brand visibility and customer engagement."
//               resultLabel="340% Engagement Boost"
//               href="/work/bodyguard-bugspray"
//             />
//           </WorkCard>

//           {/* Card 5 – Menswearr / deep teal */}
//           <WorkCard>
//             <div className="relative h-48 sm:h-52 md:h-56 bg-gradient-to-br from-[#134e4a] to-[#0f3d39] overflow-hidden">
//               <TagPill label="Google Ads" style="yellow" />
//               <MonitorIllustration colors={["#6366f1", "#f97316", "#34d399", "#fbbf24"]} />
//               <div className="absolute bottom-12 sm:bottom-16 left-3 sm:left-4 flex gap-1.5 sm:gap-2">
//                 <StatChip value="£5.16K" label="Revenue" accent="text-emerald-400" />
//                 <StatChip value="£1.12K" label="Ad Spend" accent="text-amber-400" />
//                 <StatChip value="4.6x" label="ROAS" />
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 bg-gradient-to-t from-black/70 to-transparent">
//                 <p className="text-white font-black text-[10px] sm:text-xs md:text-[15px] uppercase leading-tight">
//                   How Menswearr Crossed{" "}
//                   <span className="text-emerald-400">£5.16K in Sales</span> Spending Only £1.12K
//                 </p>
//               </div>
//             </div>
//             <CardBody
//               tagLabel="Google Ads"
//               title="How Menswearr.com Crossed £5.16K in Sales by Spending Only £1.12K on Google Ads"
//               description="In today's highly competitive e-commerce landscape, achieving significant sales with a limited ad budget is no small feat."
//               resultLabel="4.6x ROAS Achieved"
//               href="/work/menswearr"
//             />
//           </WorkCard>
//         </div>
//       </div>
//     </section>
//   );
// }



















"use client";

// OurWorkSection.jsx
// Fully responsive component with images for all cards

import Image from "next/image";
import Link from "next/link";

// ─── Shared primitives ────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path
        d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5"
        stroke="#fff"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LearnMoreBtn({ href = "#" }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-800 text-white text-xs sm:text-[12px] font-semibold px-3 sm:px-4 py-2 rounded-full transition-all duration-200 hover:translate-x-0.5"
    >
      Learn More
      <span className="w-4 h-4 bg-white/25 rounded-full flex items-center justify-center flex-shrink-0">
        <ArrowIcon />
      </span>
    </Link>
  );
}

function ResultPill({ label }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0" />
      <span className="text-[9px] sm:text-[10px] font-semibold text-green-700 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

// ─── Card Body ────────────────────────────────────────────────────────────────

function CardBody({ tagLabel, title, description, resultLabel, href }) {
  return (
    <div className="p-4 sm:p-5 flex flex-col gap-2 sm:gap-3">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
        <span className="text-[9px] sm:text-[10px] xl:text-xs font-semibold tracking-[0.1em] uppercase text-orange-500">
          {tagLabel}
        </span>
      </div>
      <h3 className="text-gray-900 font-bold text-sm sm:text-[15px] xl:text-base leading-snug">
        {title}
      </h3>
      <p className="text-gray-500 text-[11px] sm:text-[12.5px] leading-relaxed flex-1">
        {description}
      </p>
      <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
        <LearnMoreBtn href={href} />
        <ResultPill label={resultLabel} />
      </div>
    </div>
  );
}

// ─── Tag Pill ─────────────────────────────────────────────────────────────────

function TagPill({ label, style = "orange" }) {
  const styles = {
    orange: "bg-orange-500 text-white",
    yellow: "bg-amber-400 text-amber-900",
    green: "bg-emerald-500 text-white",
    blue: "bg-blue-500 text-white",
  };
  return (
    <span
      className={`absolute top-3 sm:top-4 left-3 sm:left-4 z-10 text-[9px] sm:text-[10px] font-bold tracking-[0.07em] uppercase px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${styles[style]}`}
    >
      {label}
    </span>
  );
}

// ─── Card Wrapper ─────────────────────────────────────────────────────────────

function WorkCard({ children, className = "" }) {
  return (
    <div
      className={`group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION
// ═══════════════════════════════════════════════════════════════════════════════

export default function OurWorkSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 xl:py-28 px-4 sm:px-5">
      <div className="w-full max-w-7xl mx-auto lg:w-[88%] xl:w-[82%] 2xl:w-[72%]">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-6 sm:w-8 h-0.5 bg-green-500 rounded-full" />
            <span className="text-green-500 text-[12px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase">
              Our Work
            </span>
          </div>
          <h2 className="text-gray-900 font-black text-2xl sm:text-3xl md:text-4xl leading-tight text-center sm:text-left flex-1 sm:px-4 md:px-8">
            Turning Ideas into{" "}
            <span className="relative inline-block">
              Impactful Results
              <span className="absolute left-0 -bottom-1 w-full h-[2px] sm:h-[3px] bg-green-500 rounded-full" />
            </span>
          </h2>
          <Link
            href="/work"
            className="flex-shrink-0 self-start sm:self-auto inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-800 text-white text-[11px] sm:text-[12px] font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-200"
          >
            All Work
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white/20 rounded-full flex items-center justify-center">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        {/* ── Row 1: 2 cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7">

          {/* Card 1 – SEO */}
          <WorkCard>
            <div className="relative h-48 sm:h-52 md:h-60 lg:h-64 bg-gray-900 overflow-hidden">
              <TagPill label="SEO" style="orange" />
              <Image
                src="/images/homePortfolio/nearmeIntePortfolio.jpg"
                alt="SEO Success Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <span className="bg-white text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-2 py-0.5 rounded">
                    nearmeinteriors.com
                  </span>
                </div>
                <p className="text-white font-black text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl uppercase leading-tight">
                  From Zero to Hero: <span className="text-emerald-400">A Client's SEO Success Story!</span>
                </p>
              </div>
            </div>
            <CardBody
              tagLabel="Search Engine Optimisation"
              title="From Zero to Hero: A Client's SEO Success Story!"
              description="How we helped nearmeinteriors.com dominate search in Kolkata — growing from zero to 642K monthly impressions."
              resultLabel="380% Traffic Growth"
              href="/portfolio/nearmeinteriors"
            />
          </WorkCard>

          {/* Card 2 – BodyGuard Bug Spray */}
          <WorkCard>
            <div className="relative h-48 sm:h-52 md:h-60 lg:h-64 bg-gray-900 overflow-hidden">
              <TagPill label="Social Media" style="blue" />
              <Image
                src="/images/homePortfolio/bodygurdPortfolio.jpg"
                alt="BodyGuard Bug Spray Success Story"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <span className="bg-white text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-2 py-0.5 rounded">
                    bodyguardbugspray.com
                  </span>
                </div>
                <p className="text-white font-black text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl uppercase leading-tight">
                  DISCOVER HOW WE HELPED{" "}
                  <span className="text-blue-400">BODYGUARDBUGSPRAY.COM</span>{" "}
                  DOMINATE THE SMO GAME IN THE USA
                </p>
              </div>
            </div>
            <CardBody
              tagLabel="Social Media Optimisation"
              title="Discover How We Helped BodyGuardBugSpray.com Dominate the SMO Game in the USA"
              description="In today's digital era, achieving a strong social media presence is crucial for brand visibility and customer engagement."
              resultLabel="340% Engagement Boost"
              href="/portfolio/bodyGuardBugSpray"
            />
          </WorkCard>
        </div>

        {/* ── Row 2: 3 cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 mt-5 sm:mt-6 md:mt-7">

          {/* Card 3 – Sammy's Catering */}
          <WorkCard>
            <div className="relative h-48 sm:h-52 md:h-60 lg:h-64 bg-gray-900 overflow-hidden">
              <TagPill label="Google Ads" style="yellow" />
              <Image
                src="/images/homePortfolio/SammyCatering.png"
                alt="Sammy's Catering Success Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <span className="bg-white text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-2 py-0.5 rounded">
                    Sammy's Catering Co.
                  </span>
                </div>
                <p className="text-white font-black text-[10px] sm:text-xs md:text-[14px] lg:text-base uppercase leading-tight">
                  How Sammy's Achieved{" "}
                  <span className="text-orange-500">$14K Sales</span> with Just $702 Ads
                </p>
              </div>
            </div>
            <CardBody
              tagLabel="Google Ads"
              title="How Sammy's Catering Co. Achieved $14K in Sales with Just $702 on Google Ads"
              description="In today's highly competitive digital advertising landscape, businesses are constantly looking for ways to maximize their return on investment (ROI)."
              resultLabel="19.9x ROAS"
              href="/portfolio/sammysCatering"
            />
          </WorkCard>

          {/* Card 4 – Google Ads / Pierced & Lovely */}
          <WorkCard>
            <div className="relative h-48 sm:h-52 md:h-60 lg:h-64 bg-gray-900 overflow-hidden">
              <TagPill label="Google Ads" style="yellow" />
              <Image
                src="/images/homePortfolio/peacedLovely.png"
                alt="Google Ads Success Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <p className="text-white font-black text-[10px] sm:text-xs md:text-[14px] lg:text-base uppercase leading-tight">
                  Pierced & Lovely Crossed <span className="text-blue-400">$1.43K in Sales</span> on $348 Ad Spend
                </p>
              </div>
            </div>
            <CardBody
              tagLabel="Google Ads"
              title="How Pierced and Lovely Crossed $1.43K in Sales by Spending Only $348 on Google Ads"
              description="In the highly competitive world of e-commerce, achieving high sales with minimal ad spend is the ultimate goal."
              resultLabel="4.1x ROAS Achieved"
              href="/portfolio/piercedAndLovely"
            />
          </WorkCard>

          {/* Card 5 – Menswearr */}
          <WorkCard>
            <div className="relative h-48 sm:h-52 md:h-60 lg:h-64 bg-gray-900 overflow-hidden">
              <TagPill label="Google Ads" style="yellow" />
              <Image
                src="/images/homePortfolio/Menswearr.png"
                alt="Menswearr Success Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <span className="bg-white text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-2 py-0.5 rounded">
                    MENSWEARR.com
                  </span>
                </div>
                <p className="text-white font-black text-[10px] sm:text-xs md:text-[14px] lg:text-base uppercase leading-tight">
                  How Menswearr Crossed{" "}
                  <span className="text-emerald-400">£5.16K in Sales</span> Spending Only £1.12K
                </p>
              </div>
            </div>
            <CardBody
              tagLabel="Google Ads"
              title="How Menswearr.com Crossed £5.16K in Sales by Spending Only £1.12K on Google Ads"
              description="In today's highly competitive e-commerce landscape, achieving significant sales with a limited ad budget is no small feat."
              resultLabel="4.6x ROAS Achieved"
              href="/portfolio/menswearr"
            />
          </WorkCard>
        </div>
      </div>
    </section>
  );
}