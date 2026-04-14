// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// function Header() {
//   const pathname = usePathname();
//   const [showSidebar, setShowSidebar] = useState(false);

//   const navlink = [
//     {
//       link: "/",
//       present: "/images/nav/Home-present.svg",
//       active: "/images/nav/Home-active.svg",
//       text: "Home",
//     },
//     {
//       link: "/services",
//       present: "/images/nav/Service-present.svg",
//       active: "/images/nav/Service-active2.svg",
//       text: "Services",
//     },
//     {
//       link: "/portfolio",
//       present: "/images/nav/Portfolio-present.svg",
//       active: "/images/nav/Portfolio-active.svg",
//       text: "Portfolio",
//     },
//     {
//       link: "/plans",
//       present: "/images/nav/Plan-present.svg",
//       active: "/images/nav/Plan-active.svg",
//       text: "Plans",
//     },
//     {
//       link: "/about",
//       present: "/images/nav/About-present.svg",
//       active: "/images/nav/About-active.svg",
//       text: "About",
//     },
//     {
//       link: "/contact",
//       present: "/images/nav/Contact-present.svg",
//       active: "/images/nav/Contact-active.svg",
//       text: "Contact",
//     },
//     {
//       link: "/blogs",
//       present: "/images/nav/Blog-present.svg",
//       active: "/images/nav/Blog-active.svg",
//       text: "Blog",
//     },
//   ];

//   const servicesDropdown = [
//     {
//       title: "Branding",
//       icon: "/images/navServices/branding.png",
//       link: "/services/branding",
//     },
//     {
//       title: "PPC Advertising",
//       icon: "/images/navServices/ppc.png",
//       link: "/services/ppc",
//     },
//     {
//       title: "Social Media Marketing",
//       icon: "/images/navServices/socialmedia.png",
//       link: "/services/socialMedia",
//     },
//     {
//       title: "Google Maps & GMB",
//       icon: "/images/navServices/graph.png",
//       link: "/services/googleMaps",
//     },
//     {
//       title: "Content Marketing",
//       icon: "/images/navServices/writer.png",
//       link: "/services/contentMarketing",
//     },
//     {
//       title: "SEO & Local Ranking",
//       icon: "/images/navServices/seo.png",
//       link: "/services/seo",
//     },
//     {
//       title: "UI/UX Design",
//       icon: "/images/navServices/webdesign.png",
//       link: "/services/uiUx",
//     },
//     {
//       title: "AI Search Optimization",
//       icon: "/images/navServices/AI.png",
//       link: "/services/aISearchOptimization",
//     },
//     {
//       title: "Website, App & E-Commerce",
//       icon: "/images/navServices/webprogramming.png",
//       link: "/services/web&AppDevelopment",
//     },
//   ];

//   const isActive = (link) => {
//     if (link === "/") return pathname === "/";
//     return pathname.startsWith(link);
//   };

//   return (
//     <>
//       {/* HEADER */}
//       <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[85%] lg:w-[80%]">
//         <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-2 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg">
//           {/* LOGO */}
//           <Link
//             href="/"
//             className="relative w-28 h-10 sm:w-32 sm:h-12 md:w-36 md:h-14 lg:w-40 lg:h-16"
//           >
//             <Image
//               src="/images/logo.svg"
//               fill
//               alt="Starway-logo"
//               className="object-contain"
//               priority
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
//             {navlink.map((item, i) => {
//               const active = isActive(item.link);

//               // SPECIAL DROPDOWN FOR SERVICES
//               if (item.text === "Services") {
//                 return (
//                   <div key={i} className="relative group/services">
//                     <Link
//                       href={item.link}
//                       className={`flex flex-col items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
//                         active
//                           ? "bg-blue-600/10 border-blue-600/30"
//                           : "border-transparent hover:bg-blue-600/5"
//                       }`}
//                     >
//                       <div className="relative w-6 h-6 lg:w-8 lg:h-8">
//                         <Image
//                           src={active ? item.active : item.present}
//                           fill
//                           alt={item.text}
//                           className="object-contain"
//                         />
//                       </div>
//                       <div className="flex items-center gap-0.5">
//                         <span className="text-xs md:text-sm font-medium">
//                           {item.text}
//                         </span>

//                         <ChevronDown
//                           size={10}
//                           className={`transition-transform duration-200 group-hover/services:rotate-180 ${
//                             active ? "text-blue-600" : "text-gray-400"
//                           }`}
//                         />
//                       </div>
//                     </Link>

//                     {/* MEGA MENU */}
//                     <div className="absolute top-full mt-4 pt-4 -mt-4 left-1/2 -translate-x-1/2 w-[620px] xl:w-[680px] bg-white backdrop-blur-2xl border border-white/80 rounded-2xl shadow-2xl shadow-black/14 p-5 opacity-0 invisible translate-y-2 group-hover/services:opacity-100 group-hover/services:visible group-hover/services:translate-y-0 transition-all duration-300 delay-150 z-50 pointer-events-none group-hover/services:pointer-events-auto">
//                       {/* Arrow notch */}
//                       <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/8  8 border-l border-t border-white rotate-45 rounded-tl-sm" />

//                       {/* Section label */}
//                       <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">

//                         <span className="text-[10px] font-bold text-destructive tracking-[0.18em] uppercase">
//                           Our Services
//                         </span>
//                       </div>

//                       {/* 3-col grid */}
//                       <div className="grid grid-cols-3 gap-0.5">
//                         {servicesDropdown.map((service, idx) => (
//                           <Link
//                             key={idx}
//                             href={service.link}
//                             className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[#0B5D48]/6 group/item transition-all duration-150"
//                           >
//                             <div className="w-8 h-8 rounded-lg bg-[#F0F7F4] border border-[#0B5D48]/10 flex items-center justify-center flex-shrink-0">
//                               <Image
//                                 src={service.icon}
//                                 alt={service.title}
//                                 width={18}
//                                 height={18}
//                                 className="object-contain"
//                               />
//                             </div>
//                             <span className="text-[14px] font-semibold text-gray-600 group-hover/item:text-destructive transition-colors leading-snug">
//                               {service.title}
//                             </span>
//                           </Link>
//                         ))}
//                       </div>

//                       {/* Footer row */}
//                       <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
//                         <span className="text-[11px] text-gray-400">
//                           Not sure which service you need?
//                         </span>
//                         <Link
//                           href="/contact"
//                           className="text-[11px] font-bold text-destructive border border-destructive/25 bg-destructive/5 hover:bg-destructive/10 px-3 py-1.5 rounded-lg transition-all"
//                         >
//                           Free Consultation →
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               }

//               // NORMAL NAV ITEMS
//               return (
//                 <Link
//                   key={i}
//                   href={item.link}
//                   className={`flex flex-col items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
//                     active
//                       ? "bg-blue-600/10 border-blue-600/30"
//                       : "border-transparent hover:bg-blue-600/5"
//                   }`}
//                 >
//                   <div className="relative w-6 h-6 lg:w-8 lg:h-8">
//                     <Image
//                       src={active ? item.active : item.present}
//                       fill
//                       alt={item.text}
//                     />
//                   </div>

//                   <span className="text-xs md:text-sm font-medium">
//                     {item.text}
//                   </span>
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* MOBILE MENU ICON */}
//           <Menu
//             className="lg:hidden w-6 h-6 text-gray-900 cursor-pointer"
//             onClick={() => setShowSidebar(true)}
//           />
//         </div>
//       </header>

//       {/* MOBILE SIDEBAR */}
//       {showSidebar && (
//         <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
//           <div className="absolute right-0 top-0 h-full w-[75%] max-w-xs bg-[#0A1A2F] p-6">
//             {/* CLOSE BTN */}
//             <button
//               onClick={() => setShowSidebar(false)}
//               className="absolute top-5 right-5 bg-white/20 p-2 rounded-full"
//             >
//               <X className="text-white" />
//             </button>

//             <nav className="mt-20 grid grid-cols-2 gap-6">
//               {navlink.map((item, i) => {
//                 const active = isActive(item.link);

//                 return (
//                   <Link
//                     href={item.link}
//                     key={i}
//                     onClick={() => setShowSidebar(false)}
//                     className={`flex flex-col items-center gap-2 p-3 rounded-xl transition ${
//                       active ? "bg-white/20" : "hover:bg-white/10"
//                     }`}
//                   >
//                     <div className="relative w-8 h-8">
//                       <Image
//                         src={active ? item.active : item.present}
//                         fill
//                         alt={item.text}
//                       />
//                     </div>

//                     <span
//                       className={`text-sm font-medium ${
//                         active ? "text-[#abc2ed]" : "text-white"
//                       }`}
//                     >
//                       {item.text}
//                     </span>
//                   </Link>
//                 );
//               })}
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Header;





"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  let timeout;



  const navlink = [
    {
      link: "/",
      present: "/images/nav/Home-present.svg",
      active: "/images/nav/Home-active.svg",
      text: "Home",
    },
    {
      link: "/services",
      present: "/images/nav/Service-present.svg",
      active: "/images/nav/Service-active2.svg",
      text: "Services",
    },
    {
      link: "/portfolio",
      present: "/images/nav/Portfolio-present.svg",
      active: "/images/nav/Portfolio-active.svg",
      text: "Portfolio",
    },
    {
      link: "/plans",
      present: "/images/nav/Plan-present.svg",
      active: "/images/nav/Plan-active.svg",
      text: "Plans",
    },
    {
      link: "/about",
      present: "/images/nav/About-present.svg",
      active: "/images/nav/About-active.svg",
      text: "About",
    },
    {
      link: "/contact",
      present: "/images/nav/Contact-present.svg",
      active: "/images/nav/Contact-active.svg",
      text: "Contact",
    },
    {
      link: "/blogs",
      present: "/images/nav/Blog-present.svg",
      active: "/images/nav/Blog-active.svg",
      text: "Blog",
    },
  ];

  const servicesDropdown = [
    {
      title: "Branding",
      icon: "/images/navServices/branding.png",
      link: "/services/brand-identity-design",
    },
    {
      title: "PPC Advertising",
      icon: "/images/navServices/ppc.png",
      link: "/services/ppc-management-services",
    },
    {
      title: "Social Media Marketing",
      icon: "/images/navServices/socialmedia.png",
      link: "/services/social-media-marketing",
    },
    {
      title: "Local SEO",
      icon: "/images/navServices/graph.png",
      link: "/services/local-seo",
    },
    {
      title: "Content Marketing",
      icon: "/images/navServices/writer.png",
      link: "/services/content-marketing-services",
    },
    {
      title: "SEO",
      icon: "/images/navServices/seo.png",
      link: "/services/search-engine-optimization",
    },
    {
      title: "UI/UX Design",
      icon: "/images/navServices/webdesign.png",
      link: "/services/ui-ux-design",
    },
    {
      title: "AI Search Optimization",
      icon: "/images/navServices/AI.png",
      link: "/services/ai-search-optimization",
    },
    {
      title: "Website, App & E-Commerce",
      icon: "/images/navServices/webprogramming.png",
      link: "/services/web-and-app-development",
    },
  ];

  const isActive = (link) => {
    if (link === "/") return pathname === "/";
    return pathname.startsWith(link);
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[85%] lg:w-[80%]">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-2 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg">
          {/* LOGO */}
          <Link
            href="/"
            className="relative w-28 h-10 sm:w-32 sm:h-12 md:w-36 md:h-14 lg:w-40 lg:h-16"
          >
            <Image
              src="/images/logo.svg"
              fill
              alt="Starway-logo"
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navlink.map((item, i) => {
              const active = isActive(item.link);

              // SPECIAL DROPDOWN FOR SERVICES
              if (item.text === "Services") {
                return (
                  <div
                  key={item.link}
                    className="relative"
                    onMouseEnter={() => {
                      clearTimeout(timeout);
                      setOpenDropdown(true);
                    }}
                    onMouseLeave={() => {
                      timeout = setTimeout(() => {
                        setOpenDropdown(false);
                      }, 200); // small delay
                    }}
                  >
                    <Link
                      href={item.link}
                      className={`flex flex-col items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${active
                        ? "bg-blue-600/10 border-blue-600/30"
                        : "border-transparent hover:bg-blue-600/5"
                        }`}
                    >
                      <div className="relative w-6 h-6 lg:w-8 lg:h-8">
                        <Image
                          src={active ? item.active : item.present}
                          fill
                          alt={item.text}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex items-center gap-0.5">
                        <span className="text-xs md:text-sm font-medium">
                          {item.text}
                        </span>

                        <ChevronDown
                          size={10}
                          className={`transition-transform duration-200 group-hover/services:rotate-180 ${active ? "text-blue-600" : "text-gray-400"
                            }`}
                        />
                      </div>
                    </Link>

                    {/* MEGA MENU */}
                    <div className={`absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[620px] xl:w-[680px] bg-white backdrop-blur-2xl border border-white/80 rounded-2xl shadow-2xl shadow-black/14 p-5 transition-all duration-300 z-50 ${openDropdown
                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                      }`}> {/* Arrow notch */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/8  8 border-l border-t border-white rotate-45 rounded-tl-sm" />

                      {/* Section label */}
                      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">

                        <span className="text-[10px] font-bold text-destructive tracking-[0.18em] uppercase">
                          Our Services
                        </span>
                      </div>

                      {/* 3-col grid */}
                      <div className="grid grid-cols-3 gap-0.5">
                        {servicesDropdown.map((service, idx) => (
                          <Link
                            key={service.link}
                            href={service.link}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[#0B5D48]/6 group/item transition-all duration-150"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#F0F7F4] border border-[#0B5D48]/10 flex items-center justify-center flex-shrink-0">
                              <Image
                                src={service.icon}
                                alt={service.title}
                                width={18}
                                height={18}
                                className="object-contain"
                              />
                            </div>
                            <span className="text-[14px] font-semibold text-gray-600 group-hover/item:text-destructive transition-colors leading-snug">
                              {service.title}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* Footer row */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <span className="text-[11px] text-gray-400">
                          Not sure which service you need?
                        </span>
                        <Link
                          href="/contact"
                          className="text-[11px] font-bold text-destructive border border-destructive/25 bg-destructive/5 hover:bg-destructive/10 px-3 py-1.5 rounded-lg transition-all"
                        >
                          Free Consultation →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              // NORMAL NAV ITEMS
              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`flex flex-col items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${active
                    ? "bg-blue-600/10 border-blue-600/30"
                    : "border-transparent hover:bg-blue-600/5"
                    }`}
                >
                  <div className="relative w-6 h-6 lg:w-8 lg:h-8">
                    <Image
                      src={active ? item.active : item.present}
                      fill
                      alt={item.text}
                    />
                  </div>

                  <span className="text-xs md:text-sm font-medium">
                    {item.text}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU ICON */}
          <Menu
            className="lg:hidden w-6 h-6 text-gray-900 cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      {showSidebar && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-[75%] max-w-xs bg-[#0A1A2F] p-6">
            {/* CLOSE BTN */}
            <button
              onClick={() => setShowSidebar(false)}
              className="absolute top-5 right-5 bg-white/20 p-2 rounded-full"
            >
              <X className="text-white" />
            </button>

            <nav className="mt-20 grid grid-cols-2 gap-6">
              {navlink.map((item, i) => {
                const active = isActive(item.link);

                return (
                  <Link
                    href={item.link}
                    key={item.link}
                    onClick={() => setShowSidebar(false)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition ${active ? "bg-white/20" : "hover:bg-white/10"
                      }`}
                  >
                    <div className="relative w-8 h-8">
                      <Image
                        src={active ? item.active : item.present}
                        fill
                        alt={item.text}
                      />
                    </div>

                    <span
                      className={`text-sm font-medium ${active ? "text-[#abc2ed]" : "text-white"
                        }`}
                    >
                      {item.text}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;