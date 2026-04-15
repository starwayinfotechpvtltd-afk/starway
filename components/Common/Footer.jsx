"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin,
  Linkedin, Twitter, Facebook, Instagram,
} from "lucide-react";
import PaymentModal from "./PaymentModal.jsx";   // Razorpay
import PaypalModal from "./PaypalModal.jsx";    // PayPal

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const socialLinks = [
  { icon: Linkedin, link: "https://www.linkedin.com/company/starway-web-digital/posts/?feedView=all" },
  // { icon: Twitter, link: "https://twitter.com/your-profile" },
  { icon: Facebook, link: "https://www.facebook.com/starwaywebdigital" },
  { icon: Instagram, link: "https://www.linkedin.com/company/starway-web-digital/posts/?feedView=all" },
];

export default function Footer() {
  const [showMore, setShowMore] = useState(false);
  const [razorpayModalOpen, setRazorpayModalOpen] = useState(false);
  const [paypalModalOpen, setPaypalModalOpen] = useState(false);

  return (
    <>
      {/* ── Modals — outside footer flow so z-index stacks correctly ── */}
      <PaymentModal
        isOpen={razorpayModalOpen}
        onClose={() => setRazorpayModalOpen(false)}
      />
      <PaypalModal
        isOpen={paypalModalOpen}
        onClose={() => setPaypalModalOpen(false)}
      />

      <footer className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-14"
          >
            {/* ── LOGO + SOCIAL + PAYMENT ── */}
            <motion.div variants={fadeUp}>
              <div className=" center inline-block bg-white rounded-xl p-3 mb-5 shadow-md">
                <Image src="/images/logo.svg" width={180} height={45} alt="Starway logo" />
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Transforming your digital vision into impactful results through
                data-driven marketing strategies.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-600 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>

              {/* ── PAYMENT METHODS ── */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-3">Secure Payments</p>

                <div className="flex items-center gap-3">

                  {/* ── Razorpay → opens Razorpay modal ── */}
                  <div className="flex flex-col items-center gap-1">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setRazorpayModalOpen(true)}
                      title="Pay via Razorpay"
                      className="rounded-lg overflow-hidden hover:ring-2 hover:ring-orange-400 transition-all duration-200 cursor-pointer"
                    >
                      <Image
                        src="/images/payment/Razorpay-Logo.jpg"
                        width={90}
                        height={30}
                        alt="Pay with Razorpay"
                      />
                    </motion.button>
                    <span className="text-[10px] text-orange-400 font-medium">
                      INR · UPI · Cards
                    </span>
                  </div>

                  {/* ── PayPal → opens PayPal modal ── */}
                  <div className="flex flex-col items-center gap-1">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setPaypalModalOpen(true)}
                      title="Pay via PayPal"
                      className="bg-white p-1 rounded-lg hover:ring-2 hover:ring-blue-400 transition-all duration-200 cursor-pointer"
                    >
                      <Image
                        src="/images/payment/paypal-logo.webp"
                        width={90}
                        height={30}
                        alt="Pay with PayPal"
                      />
                    </motion.button>
                    <span className="text-[10px] text-blue-400 font-medium">
                      USD · EUR · GBP
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── COMPANY + INDUSTRIES (FIXED FOR MOBILE) ── */}
            <div className="grid grid-cols-2 gap-6 sm:contents">

              {/* ── COMPANY ── */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-bold mb-5">Company</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { name: "Home", link: "/" },
                    { name: "Services", link: "/services" },
                    { name: "Portfolio", link: "/portfolio" },
                    { name: "Plans", link: "/plans" },
                    { name: "About", link: "/about" },
                    { name: "Contact", link: "/contact" },
                    { name: "Blog", link: "/blog" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link href={item.link}
                        className="text-gray-300 hover:text-orange-400 transition">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* ── INDUSTRIES ── */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-bold mb-5">Industries</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li>Automotive</li>
                  <li>EdTech</li>
                  <li>Healthcare</li>
                  <li>Retail / E-Commerce</li>
                  {showMore && (
                    <>
                      <li>Real Estate</li>
                      <li>Finance</li>
                      <li>Travel & Hospitality</li>
                      <li>Legal Services</li>
                    </>
                  )}
                  <li
                    onClick={() => setShowMore(!showMore)}
                    className="text-orange-400 font-semibold cursor-pointer select-none"
                  >
                    {showMore ? "Show Less" : "+ More"}
                  </li>
                </ul>
              </motion.div>

            </div>

            {/* ── CONTACT ── */}
            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-bold mb-5">Contact</h3>
              <div className="space-y-4 text-sm text-gray-300">
                <a href="mailto:info@starwaywebdigital.com"
                  className="flex gap-3 hover:text-orange-400 transition">
                  <Mail className="w-5 h-5 text-orange-400 shrink-0" />
                  info@starwaywebdigital.com
                </a>
                <a href="tel:+918240669415"
                  className="flex gap-3 hover:text-orange-400 transition">
                  <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                  +91 8240669415
                </a>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-orange-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">India – Head Office</p>
                    <p>UNIT NO. – 1002, Primarc Tower, Sector V, Kolkata, West Bengal 700091</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <Image
                  src="/google-partner.svg"
                  width={140}
                  height={60}
                  alt="Google Partner"
                  className="bg-white p-2 rounded-md shadow-sm"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* DIVIDER */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6" />

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              Starway Web Digital © {new Date().getFullYear()} | All Rights Reserved
            </p>

            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-orange-400 transition">
                Privacy Policy
              </Link>

              <Link href="/refund-policy" className="hover:text-orange-400 transition">
                Refund Policy
              </Link>

              <Link href="/terms" className="hover:text-orange-400 transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}