// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { ChevronDown } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "Multi-Tenant SaaS Platform",
//     desc: "Scalable SaaS architecture supporting multi-organization onboarding, role-based access, and subscription billing.",
//     tech: "Next.js • Node.js • MySQL • Stripe",
//     image: "/images/campain/portfolio/p-1.png",
//   },
//   {
//     id: 2,
//     title: "Enterprise Architecture System",
//     desc: "Enterprise-grade dashboard system with reporting tools, workflow automation, and analytics engine.",
//     tech: "React • Express • PostgreSQL • AWS",
//     image: "/images/campain/hero-section.webp",
//   },
//   {
//     id: 3,
//     title: "Subscription Blogging Platform",
//     desc: "Modern publishing platform with gated content, subscription tiers, and payment integration.",
//     tech: "Next.js • Prisma • PostgreSQL • Stripe",
//     image: "/images/campain/hero-section.webp",
//   },
//   {
//     id: 4,
//     title: "Real Estate Dashboard",
//     desc: "Property management dashboard with advanced filtering, image upload, and admin control panel.",
//     tech: "React • Node.js • MySQL • Cloudinary",
//     image: "/images/campain/portfolio/p-1.png",
//   },
// ];

// export default function InteractivePortfolio() {
//   const [activeId, setActiveId] = useState(null);
//   const [hoveredProject, setHoveredProject] = useState(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const toggleFAQ = (id) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   const handleMouseMove = (e) => {
//     setPosition({
//       x: e.clientX + 30,
//       y: e.clientY - 100,
//     });
//   };

//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       <div className="max-w-4xl mx-auto px-6">

//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
//             Our Projects
//           </h2>
//           <p className="text-gray-500 mt-3 text-sm md:text-base">
//             Explore some of our recent work and technical expertise.
//           </p>
//         </div>

//         {/* FAQ LIST */}
//         <div className="space-y-4">
//           {projects.map((project) => {
//             const isOpen = activeId === project.id;

//             return (
//               <div
//                 key={project.id}
//                 onMouseEnter={() => setHoveredProject(project)}
//                 onMouseLeave={() => setHoveredProject(null)}
//                 onMouseMove={handleMouseMove}
//                 className="border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
//               >
//                 {/* FAQ Header */}
//                 <button
//                   onClick={() => toggleFAQ(project.id)}
//                   className="flex items-center justify-between w-full text-left"
//                 >
//                   <h3 className="text-lg md:text-xl font-medium text-gray-900">
//                     {project.title}
//                   </h3>
//                   <ChevronDown
//                     className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* FAQ Content */}
//                 {isOpen && (
//                   <div className="mt-4 text-gray-600 text-sm md:text-base space-y-4">
//                     <p>{project.desc}</p>

//                     <p className="text-gray-800 font-medium">
//                       Tech Stack:
//                       <span className="text-gray-600 font-normal ml-2">
//                         {project.tech}
//                       </span>
//                     </p>

//                     {/* Mobile Image (visible below md) */}
//                     <div className="block md:hidden mt-4 rounded-lg overflow-hidden border">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         width={600}
//                         height={400}
//                         className="object-cover w-full"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Floating Image (Desktop Only) */}
//       {hoveredProject && (
//         <div
//           className="hidden md:block fixed pointer-events-none z-50 transition-all duration-200 ease-out"
//           style={{
//             left: position.x,
//             top: position.y,
//           }}
//         >
//           <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-200 bg-white">
//             <Image
//               src={hoveredProject.image}
//               alt={hoveredProject.title}
//               width={380}
//               height={250}
//               className="object-cover"
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Multi-Tenant SaaS Platform",
    desc: "Scalable SaaS architecture supporting multi-organization onboarding, role-based access, and subscription billing.",
    tech: "Next.js • Node.js • MySQL • Stripe",
    image: "/images/campain/portfolio/p-1.png",
  },
  {
    id: 2,
    title: "Enterprise Architecture System",
    desc: "Enterprise-grade dashboard system with reporting tools, workflow automation, and analytics engine.",
    tech: "React • Express • PostgreSQL • AWS",
    image: "/images/campain/hero-section.webp",
  },
  {
    id: 3,
    title: "Subscription Blogging Platform",
    desc: "Modern publishing platform with gated content, subscription tiers, and payment integration.",
    tech: "Next.js • Prisma • PostgreSQL • Stripe",
    image: "/images/campain/hero-section.webp",
  },
  {
    id: 4,
    title: "Real Estate Dashboard",
    desc: "Property management dashboard with advanced filtering, image upload, and admin control panel.",
    tech: "React • Node.js • MySQL • Cloudinary",
    image: "/images/campain/portfolio/p-1.png",
  },
];

export default function InteractivePortfolio() {
  const [activeId, setActiveId] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX + 40,
      y: e.clientY - 100,
    });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-20">
  <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
    Selected Case Studies
  </p>

  <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
    Custom Web & SaaS Development That Scales
  </h2>

  <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
    We build scalable, secure, and performance-driven platforms that empower 
    businesses to grow faster and operate smarter.
  </p>
</div>
        <div className="divide-y divide-gray-200">

          {projects.map((project) => {
            const isActive = activeId === project.id;

            return (
              <div
                key={project.id}
                className="py-8"
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                onMouseMove={handleMouseMove}
              >
                {/* Header */}
                <button
                  onClick={() => toggleFAQ(project.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h3
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-black text-3xl md:text-4xl font-semibold"
                        : "text-gray-400 text-3xl md:text-4xl font-medium group-hover:text-gray-600"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      isActive ? "rotate-180 text-black" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Underline for active */}
                {isActive && (
                  <div className="w-24 h-[2px] bg-black mt-4" />
                )}

                {/* Content */}
                {isActive && (
                  <div className="mt-6 text-gray-600 max-w-2xl space-y-4">
                    <p>{project.desc}</p>

                    <p className="font-medium text-gray-800">
                      Tech Stack:
                      <span className="ml-2 font-normal text-gray-600">
                        {project.tech}
                      </span>
                    </p>

                    {/* Mobile Image */}
                    <div className="block md:hidden mt-6 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </div>

      {/* Floating Image (Desktop Only) */}
      {hoveredProject && (
        <div
          className="hidden md:block fixed pointer-events-none z-50 transition-all duration-200 ease-out"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          <div className="shadow-2xl rounded-xl overflow-hidden bg-white">
            <Image
              src={hoveredProject.image}
              alt={hoveredProject.title}
              width={420}
              height={280}
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}