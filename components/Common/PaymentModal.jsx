"use client";

/**
 * PaymentModal — Razorpay
 * Place at: components/PaymentModal.jsx
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence }      from "framer-motion";
import { X, ShieldCheck, Loader2 }      from "lucide-react";
import useRazorpay                      from "../../hooks/useRazorpay.js";
import { RAZORPAY_CURRENCIES, getSymbol, formatAmount } from "../../lib/currencies.js";

const TAX_RATE = 0.05;

const calcBreakdown = (raw) => {
  const base  = parseFloat(parseFloat(raw || 0).toFixed(2));
  const tax   = parseFloat((base * TAX_RATE).toFixed(2));
  const total = parseFloat((base + tax).toFixed(2));
  return { base, tax, total };
};

export default function PaymentModal({ isOpen, onClose }) {
  const [amount,      setAmount]      = useState("");
  const [currency,    setCurrency]    = useState("INR");
  const [name,        setName]        = useState("");
  const [email,       setEmail]       = useState("");
  const [phone,       setPhone]       = useState("");
  const [description, setDescription] = useState("");
  const [breakdown,   setBreakdown]   = useState(null);
  const [payStatus,   setPayStatus]   = useState("idle");
  const [errorMsg,    setErrorMsg]    = useState("");
  const inputRef = useRef(null);

  const { initiatePayment, loading } = useRazorpay();
  const sym = getSymbol(currency);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setPayStatus("idle");
      setErrorMsg("");
    }
  }, [isOpen]);

  useEffect(() => {
    const num = parseFloat(amount);
    setBreakdown(num > 0 ? calcBreakdown(num) : null);
  }, [amount]);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  const handlePay = () => {
    const num = parseFloat(amount);
    if (!num || num < 1)    return setErrorMsg("Please enter a valid amount (minimum 1)");
    if (num > 500000)       return setErrorMsg("Maximum single payment is 5,00,000");
    setErrorMsg("");

    initiatePayment({
      amount:         num,
      currency,
      customer_name:  name,
      customer_email: email,
      customer_phone: phone,
      description:    description || "Starway Web Digital — Payment",
      onSuccess: () => setPayStatus("success"),
      onFailure: (err) => {
        if (err.message !== "Payment cancelled") {
          setPayStatus("error");
          setErrorMsg(err.message || "Payment failed. Please try again.");
        }
      },
    });
  };

  const handleReset = () => {
    setAmount(""); setCurrency("INR"); setName(""); setEmail("");
    setPhone(""); setDescription(""); setBreakdown(null);
    setPayStatus("idle"); setErrorMsg("");
  };

  const inputCls = "w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 " +
    "text-white text-sm placeholder-slate-400 focus:outline-none " +
    "focus:ring-2 focus:ring-orange-400/60 transition-all duration-200";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div key="rz-bd"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          <motion.div key="rz-modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.94,  y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-md bg-slate-900 rounded-2xl
                            border border-slate-700 shadow-2xl overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-700">
                <div>
                  <h2 className="text-white font-bold text-lg">Pay via Razorpay</h2>
                  <p className="text-slate-400 text-xs mt-0.5">5% tax calculated automatically</p>
                </div>
                <button onClick={onClose}
                  className="text-slate-400 hover:text-white transition p-1 rounded-lg hover:bg-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Success */}
              {payStatus === "success" ? (
                <div className="px-6 py-12 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-white text-xl font-bold mb-2">Payment Successful!</h3>
                  <p className="text-slate-400 text-sm mb-2">
                    Thank you! We've received your payment of{" "}
                    <span className="text-orange-400 font-semibold">
                      {breakdown ? formatAmount(breakdown.total, currency) : ""}
                    </span>{" "}
                    (incl. 5% tax).
                  </p>
                  <div className="flex gap-3 justify-center mt-6">
                    <button onClick={handleReset}
                      className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm transition">
                      Pay Again
                    </button>
                    <button onClick={onClose}
                      className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm transition">
                      Close
                    </button>
                  </div>
                </div>

              ) : (
                <div className="px-6 py-6 space-y-4">

                  {/* Currency + Amount row */}
                  <div>
                    <label className="text-slate-300 text-xs font-semibold mb-1.5 block uppercase tracking-wide">
                      Currency & Amount <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-2">

                      {/* Currency dropdown */}
                      <select
                        value={currency}
                        onChange={(e) => { setCurrency(e.target.value); setBreakdown(null); setAmount(""); }}
                        className="bg-slate-800 border border-slate-600 rounded-xl px-3 py-3
                                   text-white text-sm focus:outline-none focus:ring-2
                                   focus:ring-orange-400/60 w-32 shrink-0 cursor-pointer"
                      >
                        {RAZORPAY_CURRENCIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>

                      {/* Amount */}
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2
                                         text-orange-400 font-semibold text-sm pointer-events-none">
                          {sym}
                        </span>
                        <input
                          ref={inputRef}
                          type="number"
                          min="1"
                          step="0.01"
                          value={amount}
                          onChange={(e) => { setAmount(e.target.value); setErrorMsg(""); }}
                          placeholder="0.00"
                          className={`${inputCls} pl-8`}
                        />
                      </div>
                    </div>

                    {/* Currency name label */}
                    <p className="text-slate-500 text-xs mt-1.5 pl-1">
                      {RAZORPAY_CURRENCIES.find((c) => c.code === currency)?.name}
                    </p>
                  </div>

                  {/* Live tax breakdown */}
                  <AnimatePresence>
                    {breakdown && breakdown.base > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{   opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-slate-800 border border-orange-500/30 rounded-xl px-4 py-3 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Base Amount</span>
                            <span className="text-white font-medium">
                              {formatAmount(breakdown.base, currency)}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-amber-400">+ Tax (5%)</span>
                            <span className="text-amber-400 font-medium">
                              {formatAmount(breakdown.tax, currency)}
                            </span>
                          </div>
                          <div className="h-px bg-slate-600" />
                          <div className="flex justify-between font-bold text-base">
                            <span className="text-white">Total Payable</span>
                            <span className="text-orange-400 text-lg">
                              {formatAmount(breakdown.total, currency)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Customer details */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-300 text-xs font-semibold mb-1.5 block uppercase tracking-wide">Name</label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe" className={inputCls} />
                    </div>
                    <div>
                      <label className="text-slate-300 text-xs font-semibold mb-1.5 block uppercase tracking-wide">Phone</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210" className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-300 text-xs font-semibold mb-1.5 block uppercase tracking-wide">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com" className={inputCls} />
                  </div>

                  <div>
                    <label className="text-slate-300 text-xs font-semibold mb-1.5 block uppercase tracking-wide">
                      Payment For (optional)
                    </label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g. SEO Package, Web Design" className={inputCls} />
                  </div>

                  {/* Error */}
                  <AnimatePresence>
                    {errorMsg && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="text-red-400 text-xs text-center">
                        {errorMsg}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Pay button */}
                  <button
                    onClick={handlePay}
                    disabled={loading || !amount}
                    className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700
                               disabled:opacity-50 disabled:cursor-not-allowed
                               text-white font-bold py-3.5 rounded-xl
                               flex items-center justify-center gap-2
                               transition-all duration-200 shadow-lg shadow-orange-500/20
                               hover:shadow-orange-500/40"
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
                    ) : (
                      <>
                        Pay{breakdown?.total > 0
                          ? ` ${formatAmount(breakdown.total, currency)}`
                          : " Now"}
                        {breakdown?.tax > 0 && (
                          <span className="text-orange-200 text-xs font-normal">
                            (incl. {formatAmount(breakdown.tax, currency)} tax)
                          </span>
                        )}
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Secured by Razorpay · 256-bit SSL encryption
                  </div>

                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}