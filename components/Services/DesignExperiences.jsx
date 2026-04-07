// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Monitor,
//   Smartphone,
//   ShoppingBag,
//   TrendingUp,
//   ShoppingCart,
//   Globe,
//   DollarSign,
//   Target
// } from "lucide-react";

// // ⬇️ Wireframes (UNCHANGED – exactly as you gave)
// const DashboardWireframe = () => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.95 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//     className="h-[300px] w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex flex-col"
//   >
//     {/* Top Navigation */}
//     <div className="flex items-center justify-between mb-3">
//       <div className="flex items-center gap-3">
//         <div className="w-6 h-6 bg-white/30 rounded-full"></div>
//         <div className="space-y-1">
//           <div className="w-24 h-2 bg-white/30 rounded"></div>
//           <div className="w-16 h-1 bg-white/20 rounded"></div>
//         </div>
//       </div>
//       <div className="flex items-center gap-3">
//         <div className="w-6 h-6 rounded-full bg-white/20"></div>
//         <div className="w-6 h-6 rounded-lg bg-white/30"></div>
//       </div>
//     </div>

//     {/* Stats Cards */}
//     <div className="grid grid-cols-3 gap-4 mb-3">
//       {[1, 2, 3].map((i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: i * 0.1 }}
//           className="h-10 bg-white/15 rounded-xl p-2"
//         >
//           <div className="flex items-center justify-between mb-2">
//             <div className="w-12 h-2 bg-white/30 rounded"></div>
//             <div className="w-6 h-6 rounded-full bg-white/20"></div>
//           </div>
//         </motion.div>
//       ))}
//     </div>

//     {/* Chart Area */}
//     <div className="flex-1 bg-white/10 rounded-xl p-4 mb-3">
//       <div className="flex items-center justify-between mb-1">
//         <div className="w-32 h-3 bg-white/30 rounded"></div>
//         <div className="flex gap-2">
//           <div className="w-10 h-5 bg-white/20 rounded"></div>
//           <div className="w-10 h-5 bg-white/40 rounded"></div>
//         </div>
//       </div>
//       <div className="flex items-end h-20 gap-2">
//         {[40, 60, 80, 65, 90, 70, 50].map((height, i) => (
//           <motion.div
//             key={i}
//             initial={{ height: 0 }}
//             animate={{ height: `${height}%` }}
//             transition={{ delay: i * 0.05, duration: 0.5 }}
//             className="flex-1 bg-gradient-to-t from-white/40 to-white/20 rounded-t"
//           />
//         ))}
//       </div>
//     </div>

//     {/* Data Table */}
//     <div className="flex items-center gap-4">
//       <div className="w-6 h-6 rounded-full bg-white/20"></div>
//       <div className="flex-1 h-3 bg-white/20 rounded"></div>
//       <div className="w-16 h-6 bg-white/30 rounded"></div>
//     </div>
//   </motion.div>
// );

// const MobileWireframe = () => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.95 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//     className="min-h-[300px] w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex flex-col mx-auto max-w-sm"
//   >
//     {/* Status Bar */}
//     <div className="flex justify-between items-center mb-2">
//       <div className="w-16 h-2 bg-white/30 rounded"></div>
//       <div className="flex items-center gap-1">
//         <div className="w-4 h-4 rounded-full bg-white/40"></div>
//         <div className="w-3 h-2 bg-white/30 rounded"></div>
//       </div>
//     </div>

//     {/* Header */}
//     <div className="flex items-center gap-3 mb-2">
//       <div className="w-6 h-6 rounded-full bg-white/20"></div>
//       <div className="flex-1">
//         <div className="w-32 h-2 bg-white/30 rounded mb-2"></div>
//         <div className="w-24 h-2 bg-white/20 rounded"></div>
//       </div>
//       <div className="w-6 h-6 rounded-lg bg-white/30"></div>
//     </div>

//     {/* Feed Items */}
//     <div className="space-y-4 flex-1">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.1 }}
//           className="bg-white/10 rounded-xl p-4"
//         >
//           <div className="flex items-center gap-3 mb-1">
//             <div className="w-10 h-3 rounded-full bg-white/20"></div>
//             <div className="flex-1">
//               <div className="w-24 h-2 bg-white/30 rounded mb-1"></div>
//               <div className="w-16 h-1 bg-white/20 rounded"></div>
//             </div>
//           </div>
//           <div className="h-5 bg-white/15 rounded-lg mb-1"></div>
//           <div className="flex justify-between">
//             <div className="flex gap-3">
//               <div className="w-5 h-5 rounded-full bg-white/20"></div>
//               <div className="w-5 h-5 rounded-full bg-white/20"></div>
//               <div className="w-5 h-5 rounded-full bg-white/20"></div>
//             </div>
//             <div className="w-6 h-6 rounded-full bg-white/30"></div>
//           </div>
//         </motion.div>
//                 <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.1 }}
//           className="bg-white/10 rounded-xl p-4"
//         >
//           <div className="flex items-center gap-3 mb-1">
          
//             <div className="flex-1">
//               <div className="w-full h-2 bg-white/30 rounded mb-1"></div>
//               <div className="w-[50%] h-1 bg-white/20 rounded"></div>
//             </div>
//           </div>
//         </motion.div>
//     </div>

//     {/* Bottom Navigation */}
//     <div className="flex justify-around mt-2">
//       {[1, 2, 3, 4, 5].map((i) => (
//         <div key={i} className="flex flex-col items-center">
//           <div className="w-6 h-6 rounded-full bg-white/20 mb-1"></div>
//           <div className="w-4 h-1 bg-white/30 rounded"></div>
//         </div>
//       ))}
//     </div>
//   </motion.div>
// );

// const EcommerceWireframe = () => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.95 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//     className="min-h-[300px] w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex flex-col"
//   >
//     {/* Header */}
//     <div className="flex items-center justify-between mb-2">
//       <div className="flex items-center gap-3">
//         <div className="w-8 h-8 rounded-lg bg-white/30"></div>
//         <div className="w-32 h-3 bg-white/30 rounded"></div>
//       </div>
//       <div className="flex items-center gap-3">
//         <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
//           <ShoppingCart className="w-5 h-5 text-white/80" />
//         </div>
//         <div className="w-8 h-8 rounded-full bg-white/20"></div>
//       </div>
//     </div>

//     {/* Hero Product */}
//     <div className="relative mb-4">
//       <div className="h-10 bg-gradient-to-r from-white/20 to-white/10 rounded-xl"></div>
//       <div className="absolute -bottom-2 left-4 right-4 flex justify-between items-end">
//         <div>
//           <div className="w-28 h-3 bg-white/40 rounded mb-1"></div>
//         </div>
//         <div className="w-20 h-5 bg-white/40 rounded-lg"></div>
//       </div>
//     </div>

//     {/* Product Grid */}
//     <div className="grid grid-cols-2 gap-4 mb-3">
//       {[1, 2].map((i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: i * 0.1 }}
//           className="bg-white/10 rounded-lg p-3"
//         >
//           <div className="h-12 bg-white/15 rounded-lg mb-2"></div>
//           <div className="space-y-2">
//             <div className="w-20 h-2 bg-white/30 rounded"></div>
//             <div className="w-16 h-3 bg-white/40 rounded"></div>
//           </div>
//         </motion.div>
//       ))}
//     </div>

//     {/* Checkout CTA */}
//     <div className="h-10 bg-white/30 rounded-lg flex items-center justify-center">
//       <div className="w-32 h-3 bg-white/60 rounded"></div>
//     </div>
//   </motion.div>
// );

// const MarketingWireframe = () => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.95 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//     className="min-h-[300px] w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex flex-col"
//   >
//     {/* Funnel Steps */}
//     <div className="space-y-6">
//       {/* Awareness Stage */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.1 }}
//         className="flex items-start gap-4"
//       >
//         <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
//           <Globe className="w-4 h-4 text-white/80" />
//         </div>
//         <div className="flex-1">
//           <div className="space-y-2">
//             <div className="w-full h-7 bg-white/15 rounded-lg"></div>
//             <div className="w-3/4 h-3 bg-white/20 rounded"></div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Interest Stage */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.2 }}
//         className="flex items-start gap-4"
//       >
//         <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
//           <Target className="w-4 h-4 text-white/80" />
//         </div>
//         <div className="flex-1">
//           <div className="bg-white/10 rounded-lg p-4">
//             <div className="flex gap-4">
//               <div className="w-20 h-14 bg-white/15 rounded-lg"></div>
//               <div className="flex-1 space-y-2">
//                 <div className="w-full h-3 bg-white/25 rounded"></div>
//                 <div className="w-3/4 h-2 bg-white/20 rounded"></div>
//                 <div className="w-20 h-5 bg-white/30 rounded mt-2"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Conversion Stage */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.3 }}
//         className="flex items-start gap-4"
//       >
//         <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
//           <DollarSign className="w-4 h-4 text-white/80" />
//         </div>
//         <div className="flex-1">
//           <div className="space-y-3">
//             <div className="w-full h-8 bg-white/25 rounded-lg"></div>
//             <div className="w-full h-8 bg-gradient-to-r from-white/40 to-white/30 rounded-lg flex items-center justify-center">
//               <div className="w-32 h-4 bg-white/60 rounded"></div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   </motion.div>
// );
// // DATA CONFIG
// const designExperiences = {
//   web: {
//     icon: Monitor,
//     title: "Websites & Dashboards",
//     description: "Responsive web experiences and admin interfaces",
//     examples: [
//       "Marketing Websites",
//       "SaaS Dashboards",
//       "Admin Panels",
//       "Web Applications",
//     ],
//     metrics: ["+42% conversions", "3.2s load time", "95% mobile score"],
//     color: "from-blue-500 to-indigo-600",
//     wireframe: DashboardWireframe,
//   },
//   mobile: {
//     icon: Smartphone,
//     title: "Mobile Apps",
//     description: "Native iOS and Android application design",
//     examples: [
//       "iOS Apps (SwiftUI)",
//       "Android Apps (Material)",
//       "Cross-platform",
//       "Progressive Web Apps",
//     ],
//     metrics: ["4.8★ rating", "+68% retention", "95% crash-free"],
//     color: "from-purple-500 to-pink-600",
//     wireframe: MobileWireframe,
//   },
//   ecommerce: {
//     icon: ShoppingBag,
//     title: "E-commerce Experiences",
//     description: "Conversion-optimized shopping journeys",
//     examples: [
//       "Product Pages",
//       "Checkout Flows",
//       "Shopping Carts",
//       "Account Systems",
//     ],
//     metrics: ["+35% AOV", "-28% cart abandonment", "2.5x mobile sales"],
//     color: "from-green-500 to-emerald-600",
//     wireframe: EcommerceWireframe,
//   },
//   marketing: {
//     icon: TrendingUp,
//     title: "Marketing Funnels",
//     description: "High-converting landing pages and campaigns",
//     examples: [
//       "Landing Pages",
//       "Lead Generation Forms",
//       "Email Templates",
//       "Ad Creatives",
//     ],
//     metrics: ["+58% CTR", "4.2% conversion", "12s avg. time"],
//     color: "from-violet-500 to-violet-600",
//     wireframe: MarketingWireframe,
//   },
// };

// export default function DesignExperiencesSwitcher() {
//   const [activePlatform, setActivePlatform] = useState("web");
//   const active = designExperiences[activePlatform];
//   const Wireframe = active.wireframe;

//   return (
//     <section className="py-20 px-2 sm:px-4 lg:px-8 bg-secondary">
//       <div className="max-w-6xl mx-auto">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
//             Design Experiences We Create
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Versatile design solutions for every platform and purpose
//           </p>
//         </motion.div>

//         {/* PLATFORM TABS */}
//         <div className="mb-12">
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(designExperiences).map((platform) => {
//               const exp = designExperiences[platform];
//               const Icon = exp.icon;

//               return (
//                 <button
//                   key={platform}
//                   onClick={() => setActivePlatform(platform)}
//                   className={`px-6 py-3 rounded-full font-medium transition-all ${
//                     activePlatform === platform
//                       ? `bg-gradient-to-r ${exp.color} text-white shadow-lg`
//                       : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
//                   }`}
//                 >
//                   <div className="flex items-center gap-2">
//                     <Icon className="w-4 h-4" />
//                     {exp.title}
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* CONTENT */}
//         <motion.div
//           key={activePlatform}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg"
//         >
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* LEFT INFO */}
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div
//                   className={`w-12 h-12 rounded-xl bg-gradient-to-br ${active.color} flex items-center justify-center`}
//                 >
//                   <active.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {active.title}
//                   </h3>
//                   <p className="text-gray-600">{active.description}</p>
//                 </div>
//               </div>

//               {/* EXAMPLES */}
//               <div className="mb-8">
//                 <h4 className="font-semibold text-gray-900 mb-3">
//                   Design Examples
//                 </h4>
//                 <div className="grid grid-cols-2 gap-3">
//                   {active.examples.map((ex, i) => (
//                     <div key={i} className="flex items-center gap-2">
//                       <span className="w-2 h-2 rounded-full bg-blue-600" />
//                       <span className="text-gray-700">{ex}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* METRICS */}
//               <div>
//                 <h4 className="font-semibold text-gray-900 mb-3">
//                   Performance Metrics
//                 </h4>
//                 <div className="space-y-3">
//                   {active.metrics.map((metric, i) => (
//                     <div key={i} className="flex items-center justify-between">
//                       <span className="text-gray-600">{metric}</span>
//                       <div className="w-24 h-2 bg-gray-200 rounded-full">
//                         <div
//                           className={`h-2 rounded-full bg-gradient-to-r ${active.color}`}
//                           style={{ width: `${70 + i * 10}%` }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT WIREFRAME (TAB-WISE) */}
//             <div className={`bg-gradient-to-br ${active.color} rounded-2xl p-8`}>
//               <Wireframe />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





















"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  ShoppingBag,
  TrendingUp,
  ShoppingCart,
  Globe,
  DollarSign,
  Target
} from "lucide-react";

// Wireframes (kept exactly as provided - just added responsive classes)
const DashboardWireframe = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="h-[250px] sm:h-[300px] lg:h-[350px] w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-3 sm:p-6 flex flex-col"
  >
    {/* Top Navigation */}
    <div className="flex items-center justify-between mb-2 sm:mb-3">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/30 rounded-full"></div>
        <div className="space-y-1">
          <div className="w-20 h-1.5 sm:w-24 sm:h-2 bg-white/30 rounded"></div>
          <div className="w-14 h-1 sm:w-16 sm:h-1 bg-white/20 rounded"></div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20"></div>
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-white/30"></div>
      </div>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-2 sm:mb-3">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="h-8 sm:h-10 bg-white/15 rounded-xl p-1.5 sm:p-2"
        >
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <div className="w-10 h-1.5 sm:w-12 sm:h-2 bg-white/30 rounded"></div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20"></div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Chart Area */}
    <div className="flex-1 bg-white/10 rounded-xl p-3 sm:p-4 mb-2 sm:mb-3">
      <div className="flex items-center justify-between mb-1">
        <div className="w-28 h-2 sm:w-32 sm:h-3 bg-white/30 rounded"></div>
        <div className="flex gap-1 sm:gap-2">
          <div className="w-8 h-4 sm:w-10 sm:h-5 bg-white/20 rounded"></div>
          <div className="w-8 h-4 sm:w-10 sm:h-5 bg-white/40 rounded"></div>
        </div>
      </div>
      <div className="flex items-end h-16 sm:h-20 gap-1 sm:gap-2">
        {[40, 60, 80, 65, 90, 70, 50].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="flex-1 bg-gradient-to-t from-white/40 to-white/20 rounded-t"
          />
        ))}
      </div>
    </div>

    {/* Data Table */}
    <div className="flex items-center gap-2 sm:gap-4">
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20"></div>
      <div className="flex-1 h-2 sm:h-3 bg-white/20 rounded"></div>
      <div className="w-14 h-5 sm:w-16 sm:h-6 bg-white/30 rounded"></div>
    </div>
  </motion.div>
);

const MobileWireframe = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-[250px] sm:min-h-[300px] w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-3 sm:p-6 flex flex-col mx-auto max-w-sm"
  >
    {/* Status Bar */}
    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
      <div className="w-14 h-1.5 sm:w-16 sm:h-2 bg-white/30 rounded"></div>
      <div className="flex items-center gap-1">
        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white/40"></div>
        <div className="w-2.5 h-1.5 sm:w-3 sm:h-2 bg-white/30 rounded"></div>
      </div>
    </div>

    {/* Header */}
    <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20"></div>
      <div className="flex-1">
        <div className="w-28 h-1.5 sm:w-32 sm:h-2 bg-white/30 rounded mb-1.5 sm:mb-2"></div>
        <div className="w-20 h-1.5 sm:w-24 sm:h-2 bg-white/20 rounded"></div>
      </div>
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-white/30"></div>
    </div>

    {/* Feed Items */}
    <div className="space-y-3 sm:space-y-4 flex-1">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/10 rounded-xl p-3 sm:p-4"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-1">
          <div className="w-9 h-2.5 sm:w-10 sm:h-3 rounded-full bg-white/20"></div>
          <div className="flex-1">
            <div className="w-20 h-1.5 sm:w-24 sm:h-2 bg-white/30 rounded mb-1 sm:mb-1"></div>
            <div className="w-14 h-1 sm:w-16 sm:h-1 bg-white/20 rounded"></div>
          </div>
        </div>
        <div className="h-4 sm:h-5 bg-white/15 rounded-lg mb-1"></div>
        <div className="flex justify-between">
          <div className="flex gap-2 sm:gap-3">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20"></div>
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20"></div>
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20"></div>
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/30"></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/10 rounded-xl p-3 sm:p-4"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-1">
          <div className="flex-1">
            <div className="w-full h-1.5 sm:h-2 bg-white/30 rounded mb-1 sm:mb-1"></div>
            <div className="w-[50%] h-1 sm:h-1 bg-white/20 rounded"></div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Bottom Navigation */}
    <div className="flex justify-around mt-1.5 sm:mt-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 mb-1"></div>
          <div className="w-3.5 h-1 sm:w-4 sm:h-1 bg-white/30 rounded"></div>
        </div>
      ))}
    </div>
  </motion.div>
);

const EcommerceWireframe = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-[250px] sm:min-h-[300px] w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-3 sm:p-6 flex flex-col"
  >
    {/* Header */}
    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/30"></div>
        <div className="w-28 h-2.5 sm:w-32 sm:h-3 bg-white/30 rounded"></div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
        </div>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20"></div>
      </div>
    </div>

    {/* Hero Product */}
    <div className="relative mb-3 sm:mb-4">
      <div className="h-8 sm:h-10 bg-gradient-to-r from-white/20 to-white/10 rounded-xl"></div>
      <div className="absolute -bottom-1.5 sm:-bottom-2 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-end">
        <div>
          <div className="w-24 h-2.5 sm:w-28 sm:h-3 bg-white/40 rounded mb-1 sm:mb-1"></div>
        </div>
        <div className="w-18 h-4 sm:w-20 sm:h-5 bg-white/40 rounded-lg"></div>
      </div>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-2 sm:mb-3">
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/10 rounded-lg p-2 sm:p-3"
        >
          <div className="h-10 sm:h-12 bg-white/15 rounded-lg mb-1.5 sm:mb-2"></div>
          <div className="space-y-1.5 sm:space-y-2">
            <div className="w-18 h-1.5 sm:w-20 sm:h-2 bg-white/30 rounded"></div>
            <div className="w-14 h-2.5 sm:w-16 sm:h-3 bg-white/40 rounded"></div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Checkout CTA */}
    <div className="h-8 sm:h-10 bg-white/30 rounded-lg flex items-center justify-center">
      <div className="w-28 h-2.5 sm:w-32 sm:h-3 bg-white/60 rounded"></div>
    </div>
  </motion.div>
);

const MarketingWireframe = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-[250px] sm:min-h-[300px] w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-3 sm:p-6 flex flex-col"
  >
    {/* Funnel Steps */}
    <div className="space-y-4 sm:space-y-6">
      {/* Awareness Stage */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-start gap-3 sm:gap-4"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/30 flex items-center justify-center mt-1 sm:mt-0">
          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
        </div>
        <div className="flex-1">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="w-full h-6 sm:h-7 bg-white/15 rounded-lg"></div>
            <div className="w-3/4 h-2.5 sm:h-3 bg-white/20 rounded"></div>
          </div>
        </div>
      </motion.div>

      {/* Interest Stage */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-start gap-3 sm:gap-4"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/30 flex items-center justify-center mt-1 sm:mt-0">
          <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
        </div>
        <div className="flex-1">
          <div className="bg-white/10 rounded-lg p-3 sm:p-4">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-18 h-12 sm:w-20 sm:h-14 bg-white/15 rounded-lg"></div>
              <div className="flex-1 space-y-1.5 sm:space-y-2">
                <div className="w-full h-2.5 sm:h-3 bg-white/25 rounded"></div>
                <div className="w-3/4 h-1.5 sm:h-2 bg-white/20 rounded"></div>
                <div className="w-18 h-4 sm:w-20 sm:h-5 bg-white/30 rounded mt-1.5 sm:mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conversion Stage */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-start gap-3 sm:gap-4"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/30 flex items-center justify-center mt-1 sm:mt-0">
          <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
        </div>
        <div className="flex-1">
          <div className="space-y-2 sm:space-y-3">
            <div className="w-full h-7 sm:h-8 bg-white/25 rounded-lg"></div>
            <div className="w-full h-7 sm:h-8 bg-gradient-to-r from-white/40 to-white/30 rounded-lg flex items-center justify-center">
              <div className="w-28 h-3.5 sm:w-32 sm:h-4 bg-white/60 rounded"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

// DATA CONFIG (unchanged)
const designExperiences = {
  web: {
    icon: Monitor,
    title: "Websites & Dashboards",
    description: "Responsive web experiences and admin interfaces",
    examples: [
      "Marketing Websites",
      "SaaS Dashboards",
      "Admin Panels",
      "Web Applications",
    ],
    metrics: ["+42% conversions", "3.2s load time", "95% mobile score"],
    color: "from-blue-500 to-indigo-600",
    wireframe: DashboardWireframe,
  },
  mobile: {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS and Android application design",
    examples: [
      "iOS Apps (SwiftUI)",
      "Android Apps (Material)",
      "Cross-platform",
      "Progressive Web Apps",
    ],
    metrics: ["4.8★ rating", "+68% retention", "95% crash-free"],
    color: "from-purple-500 to-pink-600",
    wireframe: MobileWireframe,
  },
  ecommerce: {
    icon: ShoppingBag,
    title: "E-commerce Experiences",
    description: "Conversion-optimized shopping journeys",
    examples: [
      "Product Pages",
      "Checkout Flows",
      "Shopping Carts",
      "Account Systems",
    ],
    metrics: ["+35% AOV", "-28% cart abandonment", "2.5x mobile sales"],
    color: "from-green-500 to-emerald-600",
    wireframe: EcommerceWireframe,
  },
  marketing: {
    icon: TrendingUp,
    title: "Marketing Funnels",
    description: "High-converting landing pages and campaigns",
    examples: [
      "Landing Pages",
      "Lead Generation Forms",
      "Email Templates",
      "Ad Creatives",
    ],
    metrics: ["+58% CTR", "4.2% conversion", "12s avg. time"],
    color: "from-violet-500 to-violet-600",
    wireframe: MarketingWireframe,
  },
};

export default function DesignExperiencesSwitcher() {
  const [activePlatform, setActivePlatform] = useState("web");
  const active = designExperiences[activePlatform];
  const Icon = active.icon;
  const Wireframe = active.wireframe;

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-destructive mb-4 sm:mb-6">
            Design Experiences We Create
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Versatile design solutions for every platform and purpose
          </p>
        </motion.div>

        {/* PLATFORM TABS */}
        <div className="mb-8 sm:mb-12 px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {Object.keys(designExperiences).map((platform) => {
              const exp = designExperiences[platform];
              const isActive = activePlatform === platform;

              return (
                <button
                  key={platform}
                  onClick={() => setActivePlatform(platform)}
                  className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all flex items-center gap-2 min-w-[140px] justify-center
                    ${
                      isActive
                        ? `bg-gradient-to-r ${exp.color} text-white shadow-lg`
                        : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                >
                  <exp.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="truncate">{exp.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT */}
        <motion.div
          key={activePlatform}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg mx-4 sm:mx-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* LEFT INFO */}
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-start sm:items-center gap-3 lg:gap-4">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {active.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-1 leading-relaxed">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* EXAMPLES */}
              <div className="space-y-3 lg:space-y-4">
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                  Design Examples
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {active.examples.map((ex, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-default">
                      <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{ex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* METRICS */}
              <div className="space-y-3 lg:space-y-4">
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                  Performance Metrics
                </h4>
                <div className="space-y-3">
                  {active.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center justify-between pr-4 sm:pr-6">
                      <span className="text-gray-600 text-sm sm:text-base font-medium">{metric}</span>
                      <div className="w-20 sm:w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${active.color}`}
                          style={{ width: `${70 + i * 10}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT WIREFRAME */}
            <div className={`bg-gradient-to-br ${active.color} rounded-2xl p-4 sm:p-6 lg:p-8 h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center`}>
              <Wireframe />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
