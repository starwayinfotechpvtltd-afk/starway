// import FAQ from "@/components/FAQ"
// import Image from "next/image";

// export default function BottomSection() {
//   return (
//     <div className="w-full">
//       {/* Google Partner Section */}
//       <div className="mt-10">
//         <div className="flex flex-col md:flex-row justify-around items-center gap-6">
//           <div className="md:w-[50%]">
//             <Image
//               src="/images/logo.svg"
//               height={200}
//               width={300}
//               alt="logo"
//               className="bg-white mb-5 rounded-2xl p-0"
//             />
//             <Image
//               src="/images/google.png"
//               height={300}
//               width={300}
//               alt="google partner"
//               className="mt-10 md:mt-0"
//             />
//           </div>
//           <div className="flex flex-col gap-1 md:w-[50%] w-full mt-10 md:mt-0">
//             <h3 className="text-white text-2xl font-bold">Performance</h3>
//             <p className="text-[#00C8FF] text-xl">
//               Starway Web Digital has maintained an optimization score of at
//               least 70%.
//             </p>
//             <h3 className="text-white text-2xl font-bold">Spend</h3>
//             <p className="text-[#00C8FF] text-xl">
//               Starway Web Digital has managed at least $10,000 USD in ad spend
//               in the past 90 days.
//             </p>
//             <h3 className="text-white text-2xl font-bold">Certifications</h3>
//             <p className="text-[#00C8FF] text-xl">
//               Starway Web Digital has at least 1 strategist certified in Google
//               Ads.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//         <FAQ />

//       {/* Final CTA */}
//       <div className="mt-20">
//         <h3 className="text-white text-center text-2xl sm:text-3xl font-bold mt-20">
//           Our 360° Growth Marketing Agency
//         </h3>
//         <h2 className="text-white text-center text-3xl sm:text-4xl font-bold mt-10">
//           Want to work with us?
//         </h2>
//         <p className="text-[#00C8FF] text-center text-xl mt-5 text-wrap">
//           Explore our digital marketing program partnerships tailored for
//           companies that resonate with our values. Become our partner today.
//         </p>
//         <p className="text-white text-center text-xl mt-5">
//           Don’t miss our future updates! Get Subscribed Today!
//         </p>

//         <div className="flex items-center relative mt-10 w-fit mx-auto">
//           <input
//             type="text"
//             className="p-3 rounded-xl w-60 sm:w-80 md:w-md bg-white"
//             placeholder="Enter Details "
//           />
//           <button className="bg-[#14336C] rounded p-4 absolute -right-2 shadow-2xl shadow-blue-900 text-white">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import FAQ from "@/components/Home/FAQ";
import Image from "next/image";

export default function BottomSection() {
  return (
    <section className="w-full px-4 md:px-10">
      {/* ================= Google Partner Section ================= */}
      <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#0A1E3F] via-[#0F2F5F] to-[#123A78] p-8 md:p-12 shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* LEFT – Logos */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start gap-8">
            <Image
              src="/images/logo.svg"
              height={120}
              width={260}
              alt="logo"
              className="bg-white rounded-2xl p-4 shadow-lg"
            />
            <Image
              src="/images/google.png"
              height={220}
              width={260}
              alt="google partner"
              className="opacity-90"
            />
          </div>

          {/* RIGHT – Details */}
          <div className="md:w-1/2 flex flex-col gap-6">
            {[
              {
                title: "Performance",
                desc: "Starway Web Digital maintains an optimization score of at least 70%.",
              },
              {
                title: "Spend",
                desc: "Managed over $10,000 USD in ad spend within the last 90 days.",
              },
              {
                title: "Certifications",
                desc: "Certified Google Ads strategists driving measurable results.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-white text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#00C8FF] text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FAQ Section ================= */}
      <div className="mt-24">
        <FAQ />
      </div>

      {/* ================= Final CTA ================= */}
    </section>
  );
}
