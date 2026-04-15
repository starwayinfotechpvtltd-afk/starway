"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const SERVICES = [
  "E-Commerce / WooCommerce",
  "PPC Advertising",
  "Web Design & Development",
  "Lead Generation",
  "SEO / AEO / GEO",
  "Social Media Marketing",
];

const INITIAL_FORM = {
  full_name:        "",
  email:            "",
  phone:            "",
  project_overview: "",
  website_url:      "",
  services:         [],
};

export default function HeroLeadForm() {
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [errors,  setErrors]  = useState({});
  const [status,  setStatus]  = useState("idle"); // idle | loading | success | error
  const [apiMsg,  setApiMsg]  = useState("");
const { executeRecaptcha } = useGoogleReCaptcha();
  // ─── Handlers ───────────────────────────────────────────────────────────────

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleServiceToggle = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  // ─── Submit ──────────────────────────────────────────────────────────────────

const handleSubmit = async () => {
  setStatus("loading");
  setErrors({});
  setApiMsg("");

  try {
    if (!executeRecaptcha) {
      setApiMsg("Captcha not ready. Please try again.");
      setStatus("error");
      return;
    }


    const token = await executeRecaptcha("hero_form");

    const payload = {
      ...form,
      token, // 👈 ADD THIS
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      }
    );

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
    setForm(INITIAL_FORM);
  } catch (err) {
    setApiMsg(err.message || "Failed to submit. Please try again.");
    setStatus("error");
  }
};

  // ─── Field class helper ───────────────────────────────────────────────────

  const inputClass = (field) =>
    `w-full bg-white/10 border rounded-xl px-5 py-3 text-xs 2xl:text-sm text-white
     placeholder-white/60 focus:outline-none focus:ring-2 transition-all duration-200
     ${errors[field]
       ? "border-red-400/70 focus:ring-red-400/40"
       : "border-white/20 focus:ring-white/40"}`;

  // ─── Success state ────────────────────────────────────────────────────────

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-xl mx-auto sm:px-4"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl px-8 py-14 text-center
                        shadow-[0_10px_40px_rgba(0,0,0,0.35)] border border-white/20">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="text-white text-2xl font-semibold mb-3">Message Received!</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Thanks for reaching out. We'll review your details and get back to you within
            24–48 hours. Check your inbox for a confirmation email.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 py-2 px-7 rounded-2xl bg-white/20 text-white text-sm
                       hover:bg-white/30 transition-all duration-300"
          >
            Submit another
          </button>
        </div>
      </motion.div>
    );
  }

  // ─── Form ─────────────────────────────────────────────────────────────────

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full max-w-xl sm:max-w-xl mx-auto sm:px-4"
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-0 lg:p-5 2xl:p-8
                      px-2 md:px-4 py-6 md:py-8 max-w-4xl mx-auto shadow-lg
                      md:shadow-[0_10px_40px_rgba(0,0,0,0.35)] border border-white/20">

        {/* Full Name */}
        <div className="mb-4">
          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            placeholder="Full Name"
            className={inputClass("full_name")}
          />
          {errors.full_name && (
            <p className="text-red-400 text-xs mt-1 pl-1">{errors.full_name}</p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Work Email"
              className={inputClass("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1 pl-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={inputClass("phone")}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1 pl-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-4">
          <textarea
            rows={3}
            name="project_overview"
            value={form.project_overview}
            onChange={handleChange}
            placeholder="Provide us with a quick overview of the issues you're dealing with"
            className={`${inputClass("project_overview")} resize-none`}
          />
          {errors.project_overview && (
            <p className="text-red-400 text-xs mt-1 pl-1">{errors.project_overview}</p>
          )}
        </div>

        {/* Website URL */}
        <div className="mb-6">
          <input
            type="url"
            name="website_url"
            value={form.website_url}
            onChange={handleChange}
            placeholder="Website Url"
            className={inputClass("website_url")}
          />
          {errors.website_url && (
            <p className="text-red-400 text-xs mt-1 pl-1">{errors.website_url}</p>
          )}
        </div>

        {/* How can we help? */}
        <h3 className="text-base font-semibold text-white mb-3">How can we help?</h3>

        <div className="grid md:grid-cols-2 gap-3 text-xs 2xl:text-sm mb-6">
          {SERVICES.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 2xl:gap-3 text-white/80 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-white"
                checked={form.services.includes(item)}
                onChange={() => handleServiceToggle(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>

        {/* API error banner */}
        <AnimatePresence>
          {status === "error" && apiMsg && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-xs mb-4 text-center"
            >
              {apiMsg}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="py-2 px-7 rounded-2xl bg-white text-black text-lg font-normal
                     shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300
                     disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </button>
      </div>
    </motion.div>
  );
}