// "use client";

// import {
//   Code2,
//   Rocket,
//   Palette,
//   LineChart,
//   BookOpen,
// } from "lucide-react";

// export default function StackDecode() {
//   return (
//     <section className="w-full bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Heading */}
//         <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
//           Explore Our Blog Categories
//         </h2>

//         {/* Grid Layout */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* LEFT LARGE CARD */}
//           <div className="lg:col-span-1">
//             <div className="relative h-full min-h-[420px] rounded-[40px] bg-[#dfe7ef] p-10 flex flex-col justify-between overflow-hidden">
              
//               {/* Icon */}
//               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
//                 <Code2 size={22} />
//               </div>
//               {/* Content */}
//               <div>
//                 <h3 className="text-2xl font-semibold mt-6">
//                   Operating Since 2019
//                 </h3>
//                 <p className="mt-3 text-gray-700">
//                   In-depth tutorials, frameworks, backend architecture,
//                   performance optimization and modern full-stack development.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE GRID */}
//           <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            
//             {/* Card 1 */}
//             <div className="rounded-[32px] bg-[#d9e1dc] p-8 min-h-[200px] flex flex-col justify-between">
//               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
//                 <Rocket size={20} />
//               </div>
//               <h3 className="text-2xl font-semibold mt-6">
//                 Serving Global Clients from India
//               </h3>
//             </div>

//             {/* Card 2 */}
//             <div className="rounded-[32px] bg-[#e9dfd3] p-8 min-h-[200px] flex flex-col justify-between">
//               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
//                 <Palette size={20} />
//               </div>
//               <h3 className="text-2xl font-semibold mt-6">
//                 12+ Years of Industry Experience
//               </h3>
//             </div>

//             {/* Card 3 */}
//             <div className="rounded-[32px] bg-[#dfe3e8] p-8 min-h-[200px] flex flex-col justify-between">
//               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
//                 <LineChart size={20} />
//               </div>
//               <h3 className="text-2xl font-semibold mt-6">
//                 360+ Projects Delivered
//               </h3>
//             </div>

//             {/* Card 4 */}
//             <div className="rounded-[32px] bg-[#e5e8ee] p-8 min-h-[200px] flex flex-col justify-between">
//               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
//                 <BookOpen size={20} />
//               </div>
//               <h3 className="text-2xl font-semibold mt-6">
//                 Trusted by 10+ Agencies
//               </h3>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import {
//   Code2,
//   Rocket,
//   Palette,
//   LineChart,
//   BookOpen,
// } from "lucide-react";
// import Image from "next/image";

// export default function StackDecode() {
//   return (
//     <section className="w-full bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-6">
        
//         <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
//           Explore Our Blog Categories
//         </h2>

//         <div className="grid lg:grid-cols-3 gap-8">
          
//           {/* LEFT LARGE CARD */}
//           <div className="lg:col-span-1">
//             <div className="relative h-full min-h-[420px] rounded-[40px] overflow-hidden">
              
//               {/* Background Image */}
//               <Image
//                 src="/images/campain/stack-11.png"
//                 alt="Technology background"
//                 fill
//                 className="object-cover"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/30" />

//               {/* Content */}
//               <div className="relative z-10 p-10 flex flex-col justify-between h-full text-white">
//                 <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
//                   <Code2 size={22} />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold mt-6">
//                     12+ Years of Industry Experience
//                   </h3>
//                   <p className="mt-3 opacity-90">
//                     In-depth tutorials, frameworks, backend architecture,
//                     performance optimization and modern full-stack development.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE GRID */}
//           <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            
//             {[
//               {
//                 icon: <Rocket size={20} />,
//                 title: "Serving Global Clients from India",
//                 img: "/images/campain/stack-22.png",
//               },
//               {
//                 icon: <Palette size={20} />,
//                 title: "Operating Since 2019",
//                 img: "/images/campain/stack-55.png",
//               },
//               {
//                 icon: <LineChart size={20} />,
//                 title: "360+ Projects Delivered",
//                 img: "/images/campain/stack-33.png",
//               },
//               {
//                 icon: <BookOpen size={20} />,
//                 title: "Trusted by 10+ Agencies",
//                 img: "/images/campain/stack-44.png",
//               },
//             ].map((card, index) => (
//               <div
//                 key={index}
//                 className="relative rounded-[32px] min-h-[200px] overflow-hidden"
//               >
//                 {/* Background Image */}
//                 <Image
//                   src={card.img}
//                   alt={card.title}
//                   fill
//                   className="object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/30" />

//                 {/* Content */}
//                 <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
//                   <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
//                     {card.icon}
//                   </div>
//                   <h3 className="text-2xl text-gray-900 font-semibold mt-6">
//                     {card.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import {
  Code2,
  Rocket,
  Palette,
  LineChart,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export default function StackDecode() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
          Our Experience Speaks for Itself
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT LARGE CARD */}
          <div className="lg:col-span-1">
            <div className="relative h-full min-h-[420px] rounded-[40px] overflow-hidden">
              
              <Image
                src="/images/campain/stack-11.png"
                alt="Technology background"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="relative z-10 p-10 flex flex-col justify-between h-full text-white">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
                  <Code2 size={22} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mt-6">
                    12+ Years of Industry Experience
                  </h3>
                  <p className="mt-3 opacity-90">
                    Blending strategy and technical expertise to build reliable, high-performance solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE GRID */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="relative rounded-[32px] min-h-[200px] overflow-hidden">
              <Image
                src="/images/campain/stack-22.png"
                alt="Serving Global Clients from India"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
                  <Rocket size={20} />
                </div>
                <h3 className="text-2xl font-semibold mt-6">
                  Serving Global Clients from India
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-[32px] min-h-[200px] overflow-hidden">
              <Image
                src="/images/campain/stack-55.png"
                alt="Operating Since 2019"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
                  <Palette size={20} />
                </div>
                <h3 className="text-2xl font-semibold mt-6">
                  Operating Since 2019
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-[32px] min-h-[200px] overflow-hidden">
              <Image
                src="/images/campain/stack-33.png"
                alt="360+ Projects Delivered"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
                  <LineChart size={20} />
                </div>
                <h3 className="text-2xl font-semibold mt-6">
                  360+ Projects Delivered
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-[32px] min-h-[200px] overflow-hidden">
              <Image
                src="/images/campain/stack-44.png"
                alt="Trusted by 10+ Agencies"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-2xl font-semibold mt-6">
                  Trusted by 10+ Agencies
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}