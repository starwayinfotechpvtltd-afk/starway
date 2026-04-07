
// import {
//   Check,
//   X,
//   ChevronRight,
//   Sparkles,
//   TrendingUp,
//   Zap,
//   Target,
//   Globe,
//   Smartphone,
//   Palette,
//   Code,
//   Megaphone,
//   PenTool,
//   Search,
//   DollarSign,
//   Users,
//   Award,
//   MessageCircle,
//   BarChart,
//   Clock,
//   Shield,
//   Headphones,
//   Rocket,
//   Star,
//   ArrowRight,
//   HelpCircle,
//   Calendar,
// } from "lucide-react";


// const services = [
//   {
//     id: "googleLocalRanking",
//     name: "Google Location Ranking",
//     icon: Globe,
//     description: "Win local search",
//     color: "from-blue-600 to-indigo-500",
//   },

//   {
//     id: "seo",
//     name: "SEO & Local Ranking",
//     icon: Search,
//     description: "Dominate search results",
//     color: "from-orange-500 to-yellow-500",
//   },

//   {
//     id: "webdev",
//     name: "Website Development",
//     icon: Code,
//     description: "Build performant digital products",
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     id: "social",
//     name: "Social Media Marketing",
//     icon: Users,
//     description: "Engage & grow your audience",
//     color: "from-indigo-500 to-blue-500",
//   },

//   {
//     id: "ppc",
//     name: "PPC Advertising",
//     icon: DollarSign,
//     description: "Maximize ad ROI",
//     color: "from-red-500 to-pink-500",
//   },

//   {
//     id: "appDevelopment",
//     name: "App Development",
//     icon: Sparkles,
//     description: "Create exceptional user experiences",
//     color: "from-blue-500 to-cyan-500",
//   },

//   {
//     id: "content",
//     name: "Content Marketing",
//     icon: PenTool,
//     description: "Create compelling content",
//     color: "from-teal-500 to-green-500",
//   },

//   {
//     id: "branding",
//     name: "Branding",
//     icon: Palette,
//     description: "Build a memorable brand identity",
//     color: "from-purple-500 to-pink-500",
//   },

//   {
//     id: "ai",
//     name: "AI Search Optimization",
//     icon: Zap,
//     description: "Rank on AI platforms",
//     color: "from-violet-500 to-purple-500",
//   },
// ];

// const plansData = {
//   googleLocalRanking: {
//     name: "Google Location Ranking",
//     plans: [
//       {
//         name: "Google Maps Dominance",
//         tagline: "Lifetime GMB + 1 Year Marketing",
//         description:
//           "Complete Google Business Profile optimization and local ranking campaign to dominate Google Maps results.",
//         price: "$1500 + GST",
//         billing: "One-time (Includes 12 months marketing)",
//         popular: true,
//         idealFor: "Local businesses, clinics, shops, restaurants",
//         features: [
//           {
//             text: "Google Business Profile setup/optimization",
//             included: true,
//           },
//           { text: "Local keyword targeting", included: true },
//           { text: "Service area optimization", included: true },
//           { text: "Photo & content optimization", included: true },
//           { text: "Local citations building", included: true },
//           { text: "Review strategy setup", included: true },
//           { text: "Competitor tracking", included: true },
//           { text: "Monthly performance reports", included: true },
//           { text: "1 year local SEO marketing support", included: true },
//         ],
//         cta: "Start Ranking",
//       },
//     ],
//   },

//   seo: {
//     name: "SEO",
//     plans: [
//       {
//         name: "Basic",
//         tagline: "Start ranking on Google",
//         price: "$500 + GST",
//         billing: "Per month",
//         popular: false,
//         idealFor: "Small businesses & startups",
//         features: [
//           { text: "SEO audit & analysis", included: true },
//           { text: "Keyword research (10 keywords)", included: true },
//           { text: "On-page optimization (5 pages)", included: true },
//           { text: "Meta tag optimization", included: true },
//           { text: "Technical SEO fixes", included: true },
//           { text: "Google Search Console setup", included: true },
//           { text: "Monthly performance report", included: true },
//         ],
//         cta: "Get Started",
//       },

//       {
//         name: "Standard",
//         tagline: "Grow traffic & leads",
//         price: "$800 + GST",
//         billing: "Per month",
//         popular: true,
//         idealFor: "Growing businesses",
//         features: [
//           { text: "Everything in Basic", included: true },
//           { text: "Keyword research (25 keywords)", included: true },
//           { text: "On-page optimization (10 pages)", included: true },
//           { text: "Blog writing (2/month)", included: true },
//           { text: "Backlink building (5/month)", included: true },
//           { text: "Competitor SEO analysis", included: true },
//         ],
//         cta: "Choose Standard",
//       },

//       {
//         name: "Advanced",
//         tagline: "Dominate search results",
//         price: "$1500 + GST",
//         billing: "Per month",
//         popular: false,
//         idealFor: "Competitive industries",
//         features: [
//           { text: "Everything in Standard", included: true },
//           { text: "Keyword research (50+ keywords)", included: true },
//           { text: "On-page optimization (20+ pages)", included: true },
//           { text: "High quality backlinks (10+/month)", included: true },
//           { text: "Guest posting strategy", included: true },
//           { text: "Advanced technical SEO", included: true },
//           { text: "Weekly reporting", included: true },
//         ],
//         cta: "Choose Advanced",
//       },
//     ],
//   },

//   webdev: {
//     name: "Website Development",
//     plans: [
//       {
//         name: "Standard",
//         tagline: "Professional business website",
//         price: "$1500 + GST",
//         billing: "One-time project",
//         popular: false,
//         idealFor: "Small businesses",
//         features: [
//           { text: "Custom modern UI design", included: true },
//           { text: "Mobile responsive website", included: true },
//           { text: "Up to 5 pages", included: true },
//           { text: "SEO friendly structure", included: true },
//           { text: "Contact form integration", included: true },
//           { text: "Basic speed optimization", included: true },
//         ],
//         cta: "Get Started",
//       },

//       {
//         name: "Advanced",
//         tagline: "High-performance premium website",
//         price: "$2000 + GST",
//         billing: "One-time project",
//         popular: true,
//         idealFor: "Growing brands",
//         features: [
//           { text: "Everything in Standard", included: true },
//           { text: "Up to 10 pages", included: true },
//           { text: "Advanced animations", included: true },
//           { text: "CMS / blog integration", included: true },
//           { text: "Lead capture forms", included: true },
//           { text: "WhatsApp integration", included: true },
//         ],
//         cta: "Choose Advanced",
//       },

//       {
//         name: "Custom",
//         tagline: "Custom enterprise website",
//         price: "Custom + GST",
//         billing: "Project based",
//         popular: false,
//         idealFor: "Large businesses",
//         features: [
//           { text: "Unlimited pages", included: true },
//           { text: "Custom backend system", included: true },
//           { text: "API integrations", included: true },
//           { text: "Advanced UI/UX", included: true },
//           { text: "Admin dashboard", included: true },
//           { text: "Performance optimization", included: true },
//         ],
//         cta: "Contact Sales",
//       },
//     ],
//   },

//   social: {
//     name: "Social Media Marketing",
//     plans: [
//       {
//         name: "Standard",
//         tagline: "Grow your social presence",
//         price: "$450 + GST",
//         billing: "Per month",
//         popular: true,
//         idealFor: "Local businesses & brands",
//         features: [
//           { text: "Social media strategy", included: true },
//           { text: "Monthly content calendar", included: true },
//           { text: "10–12 posts/month", included: true },
//           { text: "Graphic design posts", included: true },
//           { text: "Hashtag & caption writing", included: true },
//           { text: "Instagram & Facebook management", included: true },
//           { text: "Monthly performance report", included: true },
//         ],
//         cta: "Get Started",
//       },
//     ],
//   },

//   ppc: {
//     name: "PPC Advertising",
//     plans: [
//       {
//         name: "Campaign Setup",
//         tagline: "Launch high converting ads",
//         price: "$400 + GST",
//         billing: "One-time setup",
//         popular: true,
//         idealFor: "Businesses wanting instant leads",
//         features: [
//           { text: "Google Ads account setup", included: true },
//           { text: "Campaign structure setup", included: true },
//           { text: "Keyword targeting strategy", included: true },
//           { text: "Ad copywriting", included: true },
//           { text: "Conversion tracking setup", included: true },
//           { text: "Audience targeting", included: true },
//           { text: "Negative keyword setup", included: true },
//           { text: "7-day performance report", included: true },
//         ],
//         adsBudget: "Ads budget depends on industry ($500 – $5000 recommended)",
//         cta: "Start PPC Setup",
//       },
//     ],
//   },

//   appDevelopment: {
//     name: "App Development",
//     plans: [
//       {
//         name: "Starter",
//         tagline: "Launch MVP mobile app",
//         price: "$2500 + GST",
//         billing: "One-time project",
//         popular: false,
//         idealFor: "Startups",
//         features: [
//           { text: "Android app development", included: true },
//           { text: "Up to 5 screens", included: true },
//           { text: "Basic authentication", included: true },
//           { text: "API integration", included: true },
//           { text: "Play Store publishing", included: true },
//         ],
//         cta: "Get Started",
//       },

//       {
//         name: "Standard",
//         tagline: "Professional business app",
//         price: "$4500 + GST",
//         billing: "One-time project",
//         popular: true,
//         idealFor: "Business platforms",
//         features: [
//           { text: "Android + iOS app", included: true },
//           { text: "Custom UI/UX", included: true },
//           { text: "Admin dashboard", included: true },
//           { text: "Push notifications", included: true },
//           { text: "Google Maps integration", included: true },
//         ],
//         cta: "Choose Standard",
//       },

//       {
//         name: "Premium",
//         tagline: "Enterprise scale application",
//         price: "$8000 + GST",
//         billing: "One-time project",
//         popular: false,
//         idealFor: "Enterprise apps",
//         features: [
//           { text: "Custom backend development", included: true },
//           { text: "Advanced admin panel", included: true },
//           { text: "Payment integration", included: true },
//           { text: "Subscription system", included: true },
//           { text: "1 month free maintenance", included: true },
//         ],
//         cta: "Contact Sales",
//       },
//     ],
//   },

//   branding: {
//     name: "Branding",
//     plans: [
//       {
//         name: "Brand Identity",
//         tagline: "Create a strong brand",
//         price: "$2499 + GST",
//         billing: "One-time project",
//         popular: true,
//         idealFor: "Startups & businesses",
//         features: [
//           { text: "Logo design", included: true },
//           { text: "Brand color palette", included: true },
//           { text: "Typography system", included: true },
//           { text: "Social media brand kit", included: true },
//           { text: "Brand guidelines document", included: true },
//         ],
//         cta: "Start Branding",
//       },
//     ],
//   },

//   content: {
//     name: "Content Marketing",
//     plans: [
//       {
//         name: "Content Growth",
//         tagline: "Build authority with content",
//         price: "$700 + GST",
//         billing: "Per month",
//         popular: true,
//         idealFor: "SEO & brand authority",
//         features: [
//           { text: "Content strategy", included: true },
//           { text: "SEO blog writing (4/month)", included: true },
//           { text: "Keyword research", included: true },
//           { text: "Content optimization", included: true },
//           { text: "Publishing support", included: true },
//         ],
//         cta: "Start Content Marketing",
//       },
//     ],
//   },

//   ai: {
//     name: "AI Search Optimization",
//     plans: [
//       {
//         name: "Starter",
//         tagline: "Rank in AI search results",
//         price: "$999 + GST",
//         billing: "Per month",
//         popular: true,
//         idealFor: "Businesses targeting AI traffic",
//         features: [
//           { text: "AI visibility audit", included: true },
//           { text: "AI optimized content", included: true },
//           { text: "Entity optimization", included: true },
//           { text: "ChatGPT visibility strategy", included: true },
//           { text: "Monthly performance report", included: true },
//         ],
//         cta: "Start AI Optimization",
//       },
//     ],
//   },
// };

// const pricingFaqs = [
//   {
//     question: "What’s included in your digital marketing plans?",
//     answer:
//       "Each plan includes a tailored marketing strategy, campaign setup, performance tracking, and monthly reporting. Depending on the plan, it may also include SEO, Google Ads management, social media marketing, content creation, and lead generation support.",
//   },
//   {
//     question: "Do you offer custom pricing for businesses?",
//     answer:
//       "Yes. Every business has different requirements, so we offer custom plans based on your goals, industry, target location, and monthly marketing budget.",
//   },
//   {
//     question: "Is there any setup or onboarding fee?",
//     answer:
//       "Most plans include free onboarding. For advanced projects like full campaign setup, analytics integration, or website optimization, a one-time setup fee may apply depending on the scope.",
//   },
//   {
//     question: "Can I upgrade or downgrade my plan anytime?",
//     answer:
//       "Yes. You can upgrade, downgrade, or switch plans anytime. We keep the process flexible so your marketing grows along with your business needs.",
//   },
//   {
//     question: "Do you offer a contract or monthly billing?",
//     answer:
//       "We offer both monthly plans and long-term packages. Monthly billing is best for flexibility, while 3–6 month packages provide better pricing and stronger long-term growth results.",
//   },
//   {
//     question: "How do payments work?",
//     answer:
//       "Payments are typically billed monthly in advance. Once payment is confirmed, we start planning, execution, and reporting immediately. We also provide invoices for every transaction.",
//   },
//   {
//     question: "Will I get a report every month?",
//     answer:
//       "Yes. You’ll receive a detailed monthly report including performance metrics, campaign progress, leads generated, and recommendations for improvement.",
//   },
//   {
//     question: "Do you guarantee leads or sales?",
//     answer:
//       "We don’t promise unrealistic guarantees, but we do guarantee strategic execution and optimization. Our goal is always to maximize ROI, improve conversions, and scale your growth consistently.",
//   },
// ];

// export default function Pricing() {
//   const [activeService, setActiveService] = useState("ai");
//   const [showModal, setShowModal] = useState(false);
//   const [modalService, setModalService] = useState("ai");
//   const [billingCycle, setBillingCycle] = useState("monthly");
//   const activePlans = plansData[modalService]?.plans || plansData.ai.plans;

//   const openModal = (serviceId) => {
//     setModalService(serviceId);
//     setShowModal(true);
//     // Prevent body scrolling when modal is open
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     // Restore body scrolling
//     document.body.style.overflow = "auto";
//   };

//   const handleServiceClick = (serviceId) => {
//     setActiveService(serviceId);
//     openModal(serviceId);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <InnerHero
//         title="Our Pricing"
//         subtitle="Affordable plans designed to grow your brand and boost results."
//         bgImage="/innerHero.jpg"
//         breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
//       />

//       {/* How it Works */}
//       <div className="w-full py-12 bg-[#96b3e9]">
//         <div className="rounded-2xl p-8 text-center max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             How Our Pricing Works
//           </h2>
//           <p className="text-gray-600 max-w-5xl mx-auto text-lg">
//             Click on any service to view its plans in detail. Each service
//             includes three tailored tiers to match your needs and growth stage.
//           </p>
//         </div>
//       </div>

//       {/* SERVICES */}
//       <section className="w-full py-16 bg-secondary">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Select Your Service
//             </h2>
//             <p className="text-gray-600 mt-3">
//               Choose the service you're interested in to explore available plans
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => handleServiceClick(service.id)}
//                 className={`group rounded-2xl overflow-hidden border transition-all duration-300 text-left
//           ${
//             activeService === service.id
//               ? "border-blue-500 shadow-xl"
//               : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
//           }`}
//               >
//                 {/* Image */}
//                 <div className="relative h-40 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

//                   <div className="absolute bottom-4 left-4 flex items-center gap-3">
//                     <div
//                       className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}
//                     >
//                       <service.icon className="text-white" size={20} />
//                     </div>

//                     <h3 className="text-white font-semibold text-lg">
//                       {service.name}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">
//                   <p className="text-sm text-gray-600 mb-4">
//                     {service.description}
//                   </p>

//                   <span className="text-blue-600 text-sm font-medium">
//                     View plans →
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PRICING MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={closeModal}
//           />

//           {/* Modal */}
//           <div className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">
//             {/* HEADER */}
//             <div className="sticky top-0 bg-white border-b px-6 md:px-8 py-5 flex items-start justify-between">
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//                   {plansData[modalService]?.name || "Plans"} Pricing
//                 </h2>

//                 <p className="text-gray-600 text-sm mt-1">
//                   Choose the perfect plan for your needs
//                 </p>
//               </div>

//               <button
//                 onClick={closeModal}
//                 className="p-2 rounded-full hover:bg-gray-100"
//               >
//                 <X size={26} />
//               </button>
//             </div>

//             {/* BILLING TOGGLE */}
//             <div className="flex justify-center py-6">
//               <div className="flex bg-gray-100 rounded-xl p-1">
//                 <button
//                   onClick={() => setBillingCycle("monthly")}
//                   className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
//                     billingCycle === "monthly"
//                       ? "bg-white shadow text-blue-600"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   Monthly
//                 </button>

//                 <button
//                   onClick={() => setBillingCycle("yearly")}
//                   className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
//                     billingCycle === "yearly"
//                       ? "bg-white shadow text-blue-600"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   Yearly
//                   <span className="text-green-600 ml-1">(Save 20%)</span>
//                 </button>
//               </div>
//             </div>

//             {/* PRICING CARDS */}
//             <div className="px-6 md:px-8 pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {activePlans.map((plan, index) => (
//                 <div
//                   key={index}
//                   className={`relative rounded-2xl border p-6 transition hover:shadow-xl ${
//                     plan.popular
//                       ? "border-blue-500 shadow-lg scale-[1.02]"
//                       : "border-gray-200"
//                   }`}
//                 >
//                   {/* POPULAR BADGE */}
//                   {plan.popular && (
//                     <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                       <div className="bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
//                         Most Popular
//                       </div>
//                     </div>
//                   )}

//                   {/* PLAN NAME */}
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {plan.name}
//                   </h3>

//                   {/* PRICE */}
//                   <div className="mt-4">
//                     <span className="text-3xl font-bold text-gray-900">
//                       {plan.price}
//                     </span>

//                     <p className="text-sm text-gray-500">{plan.billing}</p>
//                   </div>

//                   {/* DESCRIPTION */}
//                   <p className="text-gray-600 text-sm mt-4">
//                     {plan.description}
//                   </p>

//                   {/* IDEAL FOR */}
//                   <div className="mt-6 bg-gray-50 rounded-lg p-3 text-sm">
//                     <div className="flex items-center gap-2 text-gray-600 mb-1">
//                       <Target size={14} />
//                       Ideal for
//                     </div>

//                     <p className="font-medium text-gray-900">{plan.idealFor}</p>
//                   </div>

//                   {/* FEATURES */}
//                   <div className="mt-6 space-y-3">
//                     {plan.features.map((feature, i) => (
//                       <div key={i} className="flex items-start gap-2 text-sm">
//                         {feature.included ? (
//                           <Check
//                             size={16}
//                             className="text-green-500 mt-[2px]"
//                           />
//                         ) : (
//                           <X size={16} className="text-gray-300 mt-[2px]" />
//                         )}

//                         <span
//                           className={
//                             feature.included ? "text-gray-700" : "text-gray-400"
//                           }
//                         >
//                           {feature.text}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA */}
//                   <button
//                     className={`mt-6 w-full py-3 rounded-lg font-semibold transition ${
//                       plan.popular
//                         ? "bg-blue-600 text-white hover:bg-blue-700"
//                         : "bg-gray-100 hover:bg-gray-200"
//                     }`}
//                   >
//                     {plan.cta}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* FAQs */}
//       <FaqAccordion
//         title="Pricing FAQs"
//         subtitle="Everything you need to know about our plans and pricing."
//         linkText="Talk to our pricing experts."
//         linkHref="/contact"
//         faqs={pricingFaqs}
//         defaultOpenIndex={0}
//       />
//       {/* Custom Plan CTA */}
//       <ServiceCTA />
//     </div>
//   );
// }







"use client";
import { useState } from "react";
import {
  Check,
  X,
  ChevronRight,
  Sparkles,
  Zap,
  Target,
  Globe,
  Code,
  DollarSign,
  Users,
  PenTool,
  Search,
  Palette,
  ArrowRight,
  MousePointerClick,
  LayoutGrid,
  BadgeCheck,
} from "lucide-react";

import InnerHero from "@/components/Common/InnerHero";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceCTA from "@/components/Services/ServiceCTA";
// ─── DATA ──────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "googleLocalRanking",
    name: "Google Location Ranking",
    icon: Globe,
    description: "Win local search & dominate Google Maps in your area.",
    color: "from-blue-600 to-indigo-500",
  },
  {
    id: "seo",
    name: "SEO & Local Ranking",
    icon: Search,
    description: "Climb search rankings and drive organic traffic.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: "webdev",
    name: "Website Development",
    icon: Code,
    description: "Build fast, modern, conversion-ready websites.",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "social",
    name: "Social Media Marketing",
    icon: Users,
    description: "Engage your audience and grow your brand online.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "ppc",
    name: "PPC Advertising",
    icon: DollarSign,
    description: "Launch high-converting ads and maximize ROI.",
    color: "from-red-500 to-pink-500",
  },
  {
    id: "appDevelopment",
    name: "App Development",
    icon: Sparkles,
    description: "Create seamless mobile experiences for your users.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "content",
    name: "Content Marketing",
    icon: PenTool,
    description: "Build authority with strategic, SEO-driven content.",
    color: "from-teal-500 to-green-500",
  },
  {
    id: "branding",
    name: "Branding",
    icon: Palette,
    description: "Build a memorable and cohesive brand identity.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "ai",
    name: "AI Search Optimization",
    icon: Zap,
    description: "Get discovered on ChatGPT, Gemini & AI platforms.",
    color: "from-violet-500 to-purple-500",
  },
];

const plansData = {
  googleLocalRanking: {
    name: "Google Location Ranking",
    plans: [
      {
        name: "Google Maps Dominance",
        tagline: "Lifetime GMB + 1 Year Marketing",
        description:
          "Complete Google Business Profile optimization and local ranking campaign to dominate Google Maps results.",
        price: "$1500 + GST",
        billing: "One-time (Includes 12 months marketing)",
        popular: true,
        idealFor: "Local businesses, clinics, shops, restaurants",
        features: [
          { text: "Google Business Profile setup/optimization", included: true },
          { text: "Local keyword targeting", included: true },
          { text: "Service area optimization", included: true },
          { text: "Photo & content optimization", included: true },
          { text: "Local citations building", included: true },
          { text: "Review strategy setup", included: true },
          { text: "Competitor tracking", included: true },
          { text: "Monthly performance reports", included: true },
          { text: "1 year local SEO marketing support", included: true },
        ],
        cta: "Start Ranking",
      },
    ],
  },
  seo: {
    name: "SEO",
    plans: [
      {
        name: "Basic",
        tagline: "Start ranking on Google",
        price: "$500 + GST",
        billing: "Per month",
        popular: false,
        idealFor: "Small businesses & startups",
        features: [
          { text: "SEO audit & analysis", included: true },
          { text: "Keyword research (10 keywords)", included: true },
          { text: "On-page optimization (5 pages)", included: true },
          { text: "Meta tag optimization", included: true },
          { text: "Technical SEO fixes", included: true },
          { text: "Google Search Console setup", included: true },
          { text: "Monthly performance report", included: true },
        ],
        cta: "Get Started",
      },
      {
        name: "Standard",
        tagline: "Grow traffic & leads",
        price: "$800 + GST",
        billing: "Per month",
        popular: true,
        idealFor: "Growing businesses",
        features: [
          { text: "Everything in Basic", included: true },
          { text: "Keyword research (25 keywords)", included: true },
          { text: "On-page optimization (10 pages)", included: true },
          { text: "Blog writing (2/month)", included: true },
          { text: "Backlink building (5/month)", included: true },
          { text: "Competitor SEO analysis", included: true },
        ],
        cta: "Choose Standard",
      },
      {
        name: "Advanced",
        tagline: "Dominate search results",
        price: "$1500 + GST",
        billing: "Per month",
        popular: false,
        idealFor: "Competitive industries",
        features: [
          { text: "Everything in Standard", included: true },
          { text: "Keyword research (50+ keywords)", included: true },
          { text: "On-page optimization (20+ pages)", included: true },
          { text: "High quality backlinks (10+/month)", included: true },
          { text: "Guest posting strategy", included: true },
          { text: "Advanced technical SEO", included: true },
          { text: "Weekly reporting", included: true },
        ],
        cta: "Choose Advanced",
      },
    ],
  },
  webdev: {
    name: "Website Development",
    plans: [
      {
        name: "Standard",
        tagline: "Professional business website",
        price: "$1500 + GST",
        billing: "One-time project",
        popular: false,
        idealFor: "Small businesses",
        features: [
          { text: "Custom modern UI design", included: true },
          { text: "Mobile responsive website", included: true },
          { text: "Up to 5 pages", included: true },
          { text: "SEO friendly structure", included: true },
          { text: "Contact form integration", included: true },
          { text: "Basic speed optimization", included: true },
        ],
        cta: "Get Started",
      },
      {
        name: "Advanced",
        tagline: "High-performance premium website",
        price: "$2000 + GST",
        billing: "One-time project",
        popular: true,
        idealFor: "Growing brands",
        features: [
          { text: "Everything in Standard", included: true },
          { text: "Up to 10 pages", included: true },
          { text: "Advanced animations", included: true },
          { text: "CMS / blog integration", included: true },
          { text: "Lead capture forms", included: true },
          { text: "WhatsApp integration", included: true },
        ],
        cta: "Choose Advanced",
      },
      {
        name: "Custom",
        tagline: "Custom enterprise website",
        price: "Custom + GST",
        billing: "Project based",
        popular: false,
        idealFor: "Large businesses",
        features: [
          { text: "Unlimited pages", included: true },
          { text: "Custom backend system", included: true },
          { text: "API integrations", included: true },
          { text: "Advanced UI/UX", included: true },
          { text: "Admin dashboard", included: true },
          { text: "Performance optimization", included: true },
        ],
        cta: "Contact Sales",
      },
    ],
  },
  social: {
    name: "Social Media Marketing",
    plans: [
      {
        name: "Standard",
        tagline: "Grow your social presence",
        price: "$450 + GST",
        billing: "Per month",
        popular: true,
        idealFor: "Local businesses & brands",
        features: [
          { text: "Social media strategy", included: true },
          { text: "Monthly content calendar", included: true },
          { text: "10–12 posts/month", included: true },
          { text: "Graphic design posts", included: true },
          { text: "Hashtag & caption writing", included: true },
          { text: "Instagram & Facebook management", included: true },
          { text: "Monthly performance report", included: true },
        ],
        cta: "Get Started",
      },
    ],
  },
  ppc: {
    name: "PPC Advertising",
    plans: [
      {
        name: "Campaign Setup",
        tagline: "Launch high converting ads",
        price: "$400 + GST",
        billing: "One-time setup",
        popular: true,
        idealFor: "Businesses wanting instant leads",
        features: [
          { text: "Google Ads account setup", included: true },
          { text: "Campaign structure setup", included: true },
          { text: "Keyword targeting strategy", included: true },
          { text: "Ad copywriting", included: true },
          { text: "Conversion tracking setup", included: true },
          { text: "Audience targeting", included: true },
          { text: "Negative keyword setup", included: true },
          { text: "7-day performance report", included: true },
        ],
        cta: "Start PPC Setup",
      },
    ],
  },
  appDevelopment: {
    name: "App Development",
    plans: [
      {
        name: "Starter",
        tagline: "Launch MVP mobile app",
        price: "$2500 + GST",
        billing: "One-time project",
        popular: false,
        idealFor: "Startups",
        features: [
          { text: "Android app development", included: true },
          { text: "Up to 5 screens", included: true },
          { text: "Basic authentication", included: true },
          { text: "API integration", included: true },
          { text: "Play Store publishing", included: true },
        ],
        cta: "Get Started",
      },
      {
        name: "Standard",
        tagline: "Professional business app",
        price: "$4500 + GST",
        billing: "One-time project",
        popular: true,
        idealFor: "Business platforms",
        features: [
          { text: "Android + iOS app", included: true },
          { text: "Custom UI/UX", included: true },
          { text: "Admin dashboard", included: true },
          { text: "Push notifications", included: true },
          { text: "Google Maps integration", included: true },
        ],
        cta: "Choose Standard",
      },
      {
        name: "Premium",
        tagline: "Enterprise scale application",
        price: "$8000 + GST",
        billing: "One-time project",
        popular: false,
        idealFor: "Enterprise apps",
        features: [
          { text: "Custom backend development", included: true },
          { text: "Advanced admin panel", included: true },
          { text: "Payment integration", included: true },
          { text: "Subscription system", included: true },
          { text: "1 month free maintenance", included: true },
        ],
        cta: "Contact Sales",
      },
    ],
  },
  branding: {
    name: "Branding",
    plans: [
      {
        name: "Brand Identity",
        tagline: "Create a strong brand",
        price: "$2499 + GST",
        billing: "One-time project",
        popular: true,
        idealFor: "Startups & businesses",
        features: [
          { text: "Logo design", included: true },
          { text: "Brand color palette", included: true },
          { text: "Typography system", included: true },
          { text: "Social media brand kit", included: true },
          { text: "Brand guidelines document", included: true },
        ],
        cta: "Start Branding",
      },
    ],
  },
  content: {
    name: "Content Marketing",
    plans: [
      {
        name: "Content Growth",
        tagline: "Build authority with content",
        price: "$700 + GST",
        billing: "Per month",
        popular: true,
        idealFor: "SEO & brand authority",
        features: [
          { text: "Content strategy", included: true },
          { text: "SEO blog writing (4/month)", included: true },
          { text: "Keyword research", included: true },
          { text: "Content optimization", included: true },
          { text: "Publishing support", included: true },
        ],
        cta: "Start Content Marketing",
      },
    ],
  },
  ai: {
    name: "AI Search Optimization",
    plans: [
      {
        name: "Starter",
        tagline: "Rank in AI search results",
        price: "$999 + GST",
        billing: "Per month",
        popular: true,
        idealFor: "Businesses targeting AI traffic",
        features: [
          { text: "AI visibility audit", included: true },
          { text: "AI optimized content", included: true },
          { text: "Entity optimization", included: true },
          { text: "ChatGPT visibility strategy", included: true },
          { text: "Monthly performance report", included: true },
        ],
        cta: "Start AI Optimization",
      },
    ],
  },
};

// ─── HOW IT WORKS STEPS ────────────────────────────────────────────────────────

const howItWorksSteps = [
  {
    step: "01",
    icon: LayoutGrid,
    title: "Pick a Service",
    desc: "Browse our services below and select the one that matches your business goal.",
  },
  {
    step: "02",
    icon: MousePointerClick,
    title: "View Plans",
    desc: "Click any service card to instantly open the detailed pricing plans for that service.",
  },
  {
    step: "03",
    icon: BadgeCheck,
    title: "Choose & Start",
    desc: "Select the right tier for your needs and get in touch — we handle the rest.",
  },
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────────

export default function PricingSections() {
  const [activeService, setActiveService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalService, setModalService] = useState("ai");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [viewMode, setViewMode] = useState("cards");

  const activePlans = plansData[modalService]?.plans || plansData.ai.plans;
  const hasMultiplePlans = activePlans.length > 1;
  const allFeatures = hasMultiplePlans
    ? [...new Set(activePlans.flatMap((p) => p.features.map((f) => f.text)))]
    : [];

  const openModal = (serviceId) => {
    setModalService(serviceId);
    setShowModal(true);
    setViewMode("cards");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveService(null);
    document.body.style.overflow = "auto";
  };

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
    openModal(serviceId);
  };


  const pricingFaqs = [
  {
    question: "What’s included in your digital marketing plans?",
    answer:
      "Each plan includes a tailored marketing strategy, campaign setup, performance tracking, and monthly reporting. Depending on the plan, it may also include SEO, Google Ads management, social media marketing, content creation, and lead generation support.",
  },
  {
    question: "Do you offer custom pricing for businesses?",
    answer:
      "Yes. Every business has different requirements, so we offer custom plans based on your goals, industry, target location, and monthly marketing budget.",
  },
  {
    question: "Is there any setup or onboarding fee?",
    answer:
      "Most plans include free onboarding. For advanced projects like full campaign setup, analytics integration, or website optimization, a one-time setup fee may apply depending on the scope.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or switch plans anytime. We keep the process flexible so your marketing grows along with your business needs.",
  },
  {
    question: "Do you offer a contract or monthly billing?",
    answer:
      "We offer both monthly plans and long-term packages. Monthly billing is best for flexibility, while 3–6 month packages provide better pricing and stronger long-term growth results.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are typically billed monthly in advance. Once payment is confirmed, we start planning, execution, and reporting immediately. We also provide invoices for every transaction.",
  },
  {
    question: "Will I get a report every month?",
    answer:
      "Yes. You’ll receive a detailed monthly report including performance metrics, campaign progress, leads generated, and recommendations for improvement.",
  },
  {
    question: "Do you guarantee leads or sales?",
    answer:
      "We don’t promise unrealistic guarantees, but we do guarantee strategic execution and optimization. Our goal is always to maximize ROI, improve conversions, and scale your growth consistently.",
  },
];

  return (
    <>
      {/* Hero Section */}
      <InnerHero
        title="Our Pricing"
        subtitle="Affordable plans designed to grow your brand and boost results."
        bgImage="/innerHero.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />
      {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
      <section className="w-full py-16 bg-[#96b3e9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              How Our Pricing Works
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
              Click on any service to view its plans in detail. Each service
              includes tailored tiers to match your needs and growth stage.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            {/* Connector line – visible on sm+ */}
            <div
              className="hidden sm:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-[2px] bg-white/40"
              aria-hidden="true"
            />

            {howItWorksSteps.map(({ step, icon: Icon, title, desc }) => (
              <div
                key={step}
                className="relative flex flex-col items-center text-center bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl px-6 py-8 shadow-sm"
              >
                {/* Step number badge */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest">
                  STEP {step}
                </span>

                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow mb-4 mt-2">
                  <Icon size={26} className="text-blue-600" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ──────────────────────────────────────────────── */}
      <section className="w-full py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Select Your Service
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              Choose the service you're interested in to explore available plans
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className={`group rounded-2xl overflow-hidden border bg-white text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                    ${
                      isActive
                        ? "border-blue-500 shadow-xl ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
                    }`}
                >
                  {/* Image area */}
                  <div className="relative h-40 overflow-hidden bg-gray-100">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      /* Placeholder: gradient background with large icon centered */
                      <div
                        className={`w-full h-full bg-gradient-to-br ${service.color} opacity-90 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}
                      >
                        <Icon className="text-white/30" size={72} strokeWidth={1} />
                      </div>
                    )}

                    {/* Dark overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Bottom-left: icon badge + name */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow`}
                      >
                        <Icon className="text-white" size={20} />
                      </div>
                      <h3 className="text-white font-semibold text-base leading-tight drop-shadow">
                        {service.name}
                      </h3>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                        Selected
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? "text-blue-600"
                          : "text-blue-500 group-hover:text-blue-700"
                      }`}
                    >
                      View plans →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRICING MODAL ──────────────────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal panel */}
          <div className="relative bg-white w-full sm:max-w-6xl max-h-[95dvh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col">

            {/* ── Modal Header ── */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 truncate">
                  {plansData[modalService]?.name} Pricing
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                  Choose the perfect plan for your needs
                </p>
              </div>

              <button
                onClick={closeModal}
                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* ── Billing Toggle + View Toggle ── */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 pb-2 px-5 sm:px-8">
              {/* Billing */}
              <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
                {["monthly", "yearly"].map((cycle) => (
                  <button
                    key={cycle}
                    onClick={() => setBillingCycle(cycle)}
                    className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                      billingCycle === cycle
                        ? "bg-white shadow text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {cycle === "monthly" ? "Monthly" : "Yearly"}
                    {cycle === "yearly" && (
                      <span className="text-green-600 ml-1 font-semibold">(Save 20%)</span>
                    )}
                  </button>
                ))}
              </div>

              {/* View toggle — only show when multiple plans exist */}
              {hasMultiplePlans && (
                <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
                  {[
                    { id: "cards", label: "Plan Cards" },
                    { id: "compare", label: "Compare Plans" },
                  ].map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setViewMode(v.id)}
                      className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                        viewMode === v.id
                          ? "bg-white shadow text-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── Pricing Cards ── */}
            {viewMode === "cards" && (
            <div
              className={`px-4 sm:px-8 pt-6 pb-8 grid gap-5
                ${
                  activePlans.length === 1
                    ? "grid-cols-1 max-w-md mx-auto w-full"
                    : activePlans.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
            >
              {activePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl border p-5 sm:p-6 flex flex-col transition-all duration-200
                    ${
                      plan.popular
                        ? "border-blue-500 shadow-xl ring-1 ring-blue-200 bg-white"
                        : "border-gray-200 bg-white hover:shadow-md"
                    }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow">
                        ★ Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan header */}
                  <div className="mt-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    {plan.tagline && (
                      <p className="text-xs sm:text-sm text-blue-600 font-medium mt-0.5">
                        {plan.tagline}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-4 pb-4 border-b border-gray-100">
                    <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{plan.billing}</p>
                  </div>

                  {/* Description */}
                  {plan.description && (
                    <p className="text-gray-500 text-xs sm:text-sm mt-4 leading-relaxed">
                      {plan.description}
                    </p>
                  )}

                  {/* Ideal for */}
                  <div className="mt-4 bg-blue-50 rounded-xl p-3 flex items-start gap-2">
                    <Target size={14} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-blue-600 font-medium mb-0.5">Ideal for</p>
                      <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                        {plan.idealFor}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        {feature.included ? (
                          <span className="shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                            <Check size={10} className="text-green-600" />
                          </span>
                        ) : (
                          <span className="shrink-0 w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                            <X size={10} className="text-gray-400" />
                          </span>
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Ads budget note */}
                  {plan.adsBudget && (
                    <p className="mt-4 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 leading-relaxed">
                      💡 {plan.adsBudget}
                    </p>
                  )}

                  {/* CTA */}
                  <button
                    className={`mt-6 w-full py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-200 ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
            )}

            {/* ── Comparison Table ── */}
            {viewMode === "compare" && hasMultiplePlans && (
              <div className="px-4 sm:px-8 pt-6 pb-10 overflow-x-auto">
                <table className="w-full min-w-[520px] border-separate border-spacing-0">
                  <thead>
                    <tr>
                      {/* Feature label column */}
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 bg-gray-50 rounded-tl-2xl border border-r-0 border-gray-200 w-48 sm:w-64">
                        Features
                      </th>
                      {activePlans.map((plan, i) => (
                        <th
                          key={i}
                          className={`py-4 px-4 text-center align-top border border-l-0 border-gray-200
                            ${plan.popular ? "bg-blue-600 text-white" : "bg-gray-50 text-gray-900"}
                            ${i === activePlans.length - 1 ? "rounded-tr-2xl" : "border-r-0"}`}
                        >
                          <div className="flex flex-col items-center gap-1">
                            {plan.popular && (
                              <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full mb-1">
                                ★ MOST POPULAR
                              </span>
                            )}
                            <span className={`text-base font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                              {plan.name}
                            </span>
                            <span className={`text-xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                              {plan.price}
                            </span>
                            <span className={`text-xs ${plan.popular ? "text-blue-100" : "text-gray-400"}`}>
                              {plan.billing}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>

                    {/* Ideal for row */}
                    <tr>
                      <td className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-50 border border-t-0 border-r-0 border-gray-200">
                        Ideal for
                      </td>
                      {activePlans.map((plan, i) => (
                        <td
                          key={i}
                          className={`py-3 px-4 text-center text-xs sm:text-sm border border-t-0 border-l-0 border-gray-200
                            ${plan.popular ? "bg-blue-50 font-semibold text-blue-800" : "bg-white text-gray-600"}
                            ${i === activePlans.length - 1 ? "" : "border-r-0"}`}
                        >
                          {plan.idealFor}
                        </td>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {allFeatures.map((featureText, rowIdx) => {
                      const isLast = rowIdx === allFeatures.length - 1;
                      return (
                        <tr key={rowIdx} className="group">
                          {/* Feature name */}
                          <td
                            className={`py-3 px-4 text-xs sm:text-sm text-gray-700 bg-gray-50 border border-t-0 border-r-0 border-gray-200 group-hover:bg-gray-100 transition-colors
                              ${isLast ? "rounded-bl-2xl" : ""}`}
                          >
                            {featureText}
                          </td>

                          {/* Plan cells */}
                          {activePlans.map((plan, colIdx) => {
                            const feature = plan.features.find(
                              (f) => f.text === featureText
                            );
                            const included = feature?.included ?? false;
                            const isLastCol = colIdx === activePlans.length - 1;

                            return (
                              <td
                                key={colIdx}
                                className={`py-3 px-4 text-center border border-t-0 border-l-0 border-gray-200 group-hover:bg-blue-50/30 transition-colors
                                  ${plan.popular ? "bg-blue-50/50" : "bg-white"}
                                  ${isLast && isLastCol ? "rounded-br-2xl" : ""}
                                  ${!isLastCol ? "border-r-0" : ""}`}
                              >
                                {included ? (
                                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                                    <Check size={13} className="text-green-600" />
                                  </span>
                                ) : feature === undefined ? (
                                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                                    <X size={13} className="text-gray-300" />
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                                    <X size={13} className="text-gray-300" />
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}

                    {/* CTA row */}
                    <tr>
                      <td className="py-4 px-4 bg-gray-50 border border-t-0 border-r-0 border-gray-200 rounded-bl-none" />
                      {activePlans.map((plan, i) => (
                        <td
                          key={i}
                          className={`py-4 px-4 border border-t-0 border-l-0 border-gray-200
                            ${plan.popular ? "bg-blue-50/50" : "bg-white"}
                            ${i !== activePlans.length - 1 ? "border-r-0" : ""}`}
                        >
                          <button
                            className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
                              plan.popular
                                ? "bg-blue-600 text-white hover:bg-blue-700 shadow"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            }`}
                          >
                            {plan.cta}
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

       {/* FAQs */}
      <FaqAccordion
        title="Pricing FAQs"
        subtitle="Everything you need to know about our plans and pricing."
        linkText="Talk to our pricing experts."
        linkHref="/contact"
        faqs={pricingFaqs}
        defaultOpenIndex={0}
      />
      {/* Custom Plan CTA */}
      <ServiceCTA />

    </>
  );
}