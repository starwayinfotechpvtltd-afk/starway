// "use client"

// import { motion } from "framer-motion"
// import { useState, useRef, useEffect } from "react"

// export default function FinalServiceCTA({
//   icon: Icon,
//   title,
//   description,
//   contactInfo = [],
//   formTitle,
//   challenges = [],
//   primaryCta,
//   secondaryCta,
// }) {
//   const [open, setOpen] = useState(false)
//   const [selected, setSelected] = useState("Select a challenge")
//   const dropdownRef = useRef()

//   // close on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div className="grid lg:grid-cols-2 gap-12 items-center">

//             {/* LEFT */}
//             <div>
//               {Icon && (
//                 <div className="hidden w-20 h-20 rounded-2xl bg-blue-700/20 backdrop-blur-sm md:flex items-center justify-center mb-8">
//                   <Icon className="w-10 h-10 text-destructive" />
//                 </div>
//               )}

//               <h3 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
//                 {title}
//               </h3>

//               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                 {description}
//               </p>

//               {contactInfo.length > 0 && (
//                 <div className="space-y-4 mb-8">
//                   {contactInfo.map((item, idx) => (
//                     <div key={idx} className="flex items-center gap-3 text-destructive">
//                       <item.icon className="w-5 h-5" />
//                       <span>{item.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* RIGHT FORM */}
//             <div className="bg-white rounded-2xl p-8 shadow-2xl">
//               <h4 className="text-2xl font-bold text-gray-900 mb-6">
//                 {formTitle}
//               </h4>

//               <form className="space-y-6">

//                 {/* Business Name */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Business Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter your business name"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
//                   />
//                 </div>

//                 <div ref={dropdownRef} className="relative">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Biggest Challenge
//                   </label>

//                   {/* Trigger */}
//                   <div
//                     onClick={() => setOpen(!open)}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 cursor-pointer flex justify-between items-center bg-white"
//                   >
//                     <span className="text-gray-700">{selected}</span>
//                     <span className={`text-gray-400 transition ${open ? "rotate-180" : ""}`}>
//                       ▼
//                     </span>
//                   </div>

//                   {/* Dropdown */}
//                   {open && (
//                     <div className="absolute bottom-full mb-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-[999] max-h-60 overflow-y-auto">
//                       {challenges.map((challenge, idx) => (
//                         <div
//                           key={idx}
//                           onClick={() => {
//                             setSelected(challenge.label)
//                             setOpen(false)
//                           }}
//                           className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
//                         >
//                           {challenge.label}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     type="submit"
//                     className="flex-1 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
//                   >
//                     {primaryCta.icon && <primaryCta.icon className="w-5 h-5" />}
//                     {primaryCta.text}
//                   </motion.button>

//                   {secondaryCta && (
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       type="button"
//                       className="flex-1 px-8 py-4 text-destructive bg-gray-100 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
//                     >
//                       {secondaryCta.icon && <secondaryCta.icon className="w-5 h-5" />}
//                       {secondaryCta.text}
//                     </motion.button>
//                   )}
//                 </div>

//                 <p className="text-gray-500 text-sm text-center">
//                   No spam. Your information is safe with us.
//                 </p>

//               </form>
//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function FinalServiceCTA({
  icon: Icon,
  title,
  description,
  contactInfo = [],
  formTitle,
  challenges = [],
  primaryCta,
  secondaryCta,
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select a challenge");
  const [form, setForm] = useState({
    business_name: "",
    email: "",
  });

  const dropdownRef = useRef();
  const { executeRecaptcha } = useGoogleReCaptcha();

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ─── Handle Submit ─────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!executeRecaptcha) {
        alert("Captcha not ready");
        return;
      }

      const token = await executeRecaptcha("service_form");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/service-lead`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            business_name: form.business_name,
            email: form.email,
            challenge: selected,
            token,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Submitted successfully 🚀");

      setForm({
        business_name: "",
        email: "",
      });
      setSelected("Select a challenge");
    } catch (err) {
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              {Icon && (
                <div className="hidden w-20 h-20 rounded-2xl bg-blue-700/20 backdrop-blur-sm md:flex items-center justify-center mb-8">
                  <Icon className="w-10 h-10 text-destructive" />
                </div>
              )}

              <h3 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
                {title}
              </h3>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              {contactInfo.length > 0 && (
                <div className="space-y-4 mb-8">
                  {contactInfo.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-destructive"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {formTitle}
              </h4>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business_name"
                    value={form.business_name}
                    onChange={(e) =>
                      setForm({ ...form, business_name: e.target.value })
                    }
                    placeholder="Enter your business name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                {/* Dropdown */}
                <div ref={dropdownRef} className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Biggest Challenge
                  </label>

                  <div
                    onClick={() => setOpen(!open)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 cursor-pointer flex justify-between items-center bg-white"
                  >
                    <span className="text-gray-700">{selected}</span>
                    <span
                      className={`text-gray-400 transition ${
                        open ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>

                  {open && (
                    <div className="absolute bottom-full mb-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-[999] max-h-60 overflow-y-auto">
                      {challenges.map((challenge, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setSelected(challenge.label);
                            setOpen(false);
                          }}
                          className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          {challenge.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                  >
                    {primaryCta.icon && (
                      <primaryCta.icon className="w-5 h-5" />
                    )}
                    {primaryCta.text}
                  </motion.button>

                  {secondaryCta && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="flex-1 px-8 py-4 text-destructive bg-gray-100 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                    >
                      {secondaryCta.icon && (
                        <secondaryCta.icon className="w-5 h-5" />
                      )}
                      {secondaryCta.text}
                    </motion.button>
                  )}
                </div>

                <p className="text-gray-500 text-sm text-center">
                  No spam. Your information is safe with us.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}