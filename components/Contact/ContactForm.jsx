"use client";

import { useState } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const INITIAL = {
  full_name:        "",
  phone:            "",
  email:            "",
  designation:      "",
  website_url:      "",
  project_overview: "",
};

export default function ContactSection() {
  const [form,     setForm]     = useState(INITIAL);
  const [errors,   setErrors]   = useState({});
  const [status,   setStatus]   = useState("idle");
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    setApiError("");

    // All fields sent — designation is now saved in DB
    const payload = {
      full_name:        form.full_name.trim(),
      email:            form.email.trim(),
      phone:            form.phone.trim(),
      designation:      form.designation.trim()      || undefined,
      website_url:      form.website_url.trim()      || undefined,
      project_overview: form.project_overview.trim() || undefined,
    };

    try {
      const res  = await fetch(`${API_URL}/api/contact`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 422 && data.errors) {
          const fieldErrors = {};
          data.errors.forEach(({ field, message }) => {
            fieldErrors[field] = message;
          });
          setErrors(fieldErrors);
          setStatus("idle");
          return;
        }
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setApiError(err.message || "Failed to submit. Please try again.");
      setStatus("error");
    }
  };

  // ─── Helpers ──────────────────────────────────────────────────────────────────

  const inputCls = (id) =>
    `peer w-full bg-transparent border-b px-1 pt-7 pb-3 text-gray-900 text-[15px] outline-none transition-all ${errors[id] ? "border-red-500" : "border-gray-900/40 focus:border-gray-900"}`;

  const labelCls =
    "absolute left-1 top-5 text-[15px] text-gray-900/70 transition-all duration-300 " +
    "peer-placeholder-shown:top-6 peer-placeholder-shown:text-[15px] " +
    "peer-focus:top-2 peer-focus:text-[13px] peer-focus:text-gray-900 " +
    "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[13px] " +
    "peer-not-placeholder-shown:text-gray-900";

  const ErrorMsg = ({ field }) =>
    errors[field] ? (
      <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
    ) : null;

  // ─── Success ──────────────────────────────────────────────────────────────────

  if (status === "success") {
    return (
      <section className="relative w-full min-h-screen flex items-center justify-center bg-secondary px-4 pt-28 pb-16 font-sans overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff40_1px,transparent_1px),linear-gradient(to_bottom,#ffffff40_1px,transparent_1px)] bg-[size:48px_48px]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-white rounded-[32px] border-[3px] border-[#101828] shadow-xl px-10 py-16 text-center max-w-md w-full"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Message Sent!</h3>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
            Thanks for reaching out! Our team will get back to you within 24–48 hours.
            Check your inbox for a confirmation email.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-8 py-3 rounded-2xl bg-[#0A2458] text-white text-[15px] font-semibold hover:opacity-90 transition"
          >
            Send Another Message
          </button>
        </motion.div>
      </section>
    );
  }

  // ─── Main ─────────────────────────────────────────────────────────────────────

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-secondary px-4 pt-28 pb-16 font-sans overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff40_1px,transparent_1px),linear-gradient(to_bottom,#ffffff40_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* MAIN CARD */}
      <div className="relative w-full max-w-7xl rounded-[32px] border-[3px] border-[#101828] shadow-xl bg-white p-0 sm:p-4">
        <div className="w-full rounded-[28px] overflow-hidden flex flex-col lg:flex-row bg-white">

          {/* ── LEFT PANEL ── */}
          <div className="w-full lg:w-[38%] bg-white px-8 py-10 lg:px-10 lg:py-12 flex flex-col justify-between">
            <div className="space-y-10">

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                  <Mail className="w-[18px] h-[18px] text-gray-900" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900 tracking-tight">Chat to us</h3>
                  <p className="text-[15px] lg:text-[17px] text-gray-600 leading-relaxed">Our friendly team is here to help.</p>
                  <p className="text-[15px] lg:text-[17px] font-medium text-gray-900">info@starwaywebdigital.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-[18px] h-[18px] text-gray-900" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900 tracking-tight">Visit us</h3>
                  <p className="text-[15px] lg:text-[17px] text-gray-600 leading-relaxed">Come say hello at our office HQ.</p>
                  <p className="text-[15px] font-medium text-gray-900">
                    UNIT NO. – 1002, Primarc Tower, <br/> Sector V, Kolkata, West Bengal 700091
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                  <Phone className="w-[18px] h-[18px] text-gray-900" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900 tracking-tight">Call us</h3>
                  <p className="text-[15px] lg:text-[17px] text-gray-600 leading-relaxed">Mon-Sat from 11am to 8pm.</p>
                  <p className="text-[15px] lg:text-[17px] font-medium text-gray-900">+91 8240669415</p>
                </div>
              </div>

            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-12">
              {[
                { icon: <Facebook className="w-5 h-5" />, link: "https://www.facebook.com/starwaywebdigital"  },
                { icon: <Twitter  className="w-5 h-5" />, link: "https://twitter.com"   },
                { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/company/starway-web-digital/posts/?feedView=all"  },
                { icon: <Instagram  className="w-5 h-5" />, link: "https://www.instagram.com/starwayweb/"   },
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-900 hover:text-white transition-all duration-300">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT FORM PANEL ── */}
          <div className="w-full lg:w-[62%] bg-secondary px-2 sm:px-8 py-10 md:px-10 md:py-12 lg:px-14 lg:py-16 flex flex-col justify-center rounded-none sm:rounded-[24px] m-0 sm:m-2 md:m-0 lg:m-3">

            <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-semibold text-gray-900 leading-[1.15] tracking-tight">
              Grow your business faster. <br /> We handle the marketing.
            </h2>

            <p className="text-[14px] sm:text-[15px] text-gray-800 mt-5 max-w-lg leading-relaxed">
              Tell us more about yourself and what you've got in mind.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

              {/* Full Name — mandatory */}
              <div className="relative w-full">
                <input id="full_name" type="text" required placeholder=" "
                  value={form.full_name} onChange={handleChange}
                  className={inputCls("full_name")} />
                <label htmlFor="full_name" className={labelCls}>Full Name *</label>
                <ErrorMsg field="full_name" />
              </div>

              {/* Phone — mandatory */}
              <div className="relative w-full">
                <input id="phone" type="tel" required placeholder=" "
                  value={form.phone} onChange={handleChange}
                  className={inputCls("phone")} />
                <label htmlFor="phone" className={labelCls}>Mobile Number *</label>
                <ErrorMsg field="phone" />
              </div>

              {/* Email — mandatory */}
              <div className="relative w-full">
                <input id="email" type="email" required placeholder=" "
                  value={form.email} onChange={handleChange}
                  className={inputCls("email")} />
                <label htmlFor="email" className={labelCls}>Email Address *</label>
                <ErrorMsg field="email" />
              </div>

              {/* Designation — optional, saved to DB */}
              <div className="relative w-full">
                <input id="designation" type="text" placeholder=" "
                  value={form.designation} onChange={handleChange}
                  className={inputCls("designation")} />
                <label htmlFor="designation" className={labelCls}>Designation</label>
                <ErrorMsg field="designation" />
              </div>

              {/* Website URL — optional */}
              <div className="relative w-full sm:col-span-2">
                <input id="website_url" type="text" placeholder=" "
                  value={form.website_url} onChange={handleChange}
                  className={inputCls("website_url")} />
                <label htmlFor="website_url" className={labelCls}>Website URL (Optional)</label>
                <ErrorMsg field="website_url" />
              </div>

              {/* Your Challenges → project_overview — optional */}
              <div className="relative w-full sm:col-span-2 pt-2">
                <textarea id="project_overview" rows={1} placeholder=" "
                  value={form.project_overview} onChange={handleChange}
                  className={`${inputCls("project_overview")} resize-none`} />
                <label htmlFor="project_overview"
                  className="absolute left-1 top-7 text-[15px] text-gray-900/70 transition-all duration-300 peer-placeholder-shown:top-8 peer-placeholder-shown:text-[15px] peer-focus:top-3 peer-focus:text-[13px] peer-focus:text-gray-900 peer-not-placeholder-shown:top-3 peer-not-placeholder-shown:text-[13px] peer-not-placeholder-shown:text-gray-900">
                  Your Challenges
                </label>
                <ErrorMsg field="project_overview" />
              </div>

              {/* API error */}
              <AnimatePresence>
                {status === "error" && apiError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="sm:col-span-2 text-red-500 text-sm text-center">
                    {apiError}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Submit */}
              <div className="sm:col-span-2 pt-5">
                <button type="submit" disabled={status === "loading"}
                  className="w-full py-4 rounded-2xl bg-[#0A2458] text-white text-[15px] font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100">
                  {status === "loading" ? "Sending..." : "Get Free Consultation"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}