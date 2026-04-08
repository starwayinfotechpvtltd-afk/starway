"use client";

import { useState, useEffect, useRef }              from "react";
import { motion, AnimatePresence }                   from "framer-motion";
import { X, ShieldCheck, Loader2, ChevronRight, Tag } from "lucide-react";
import usePaypal                                     from "../../hooks/usePaypal";
import { PAYPAL_CURRENCIES, getSymbol, formatAmount } from "../../lib/currencies.js";

const TAX_RATE = 0.10;

// Local quick-calc for the form step preview (no promo applied yet)
const calcBreakdown = (raw) => {
  const base  = parseFloat(parseFloat(raw || 0).toFixed(2));
  const tax   = parseFloat((base * TAX_RATE).toFixed(2));
  const total = parseFloat((base + tax).toFixed(2));
  return { base, tax, total };
};

export default function PaypalModal({ isOpen, onClose }) {
  const [step,           setStep]           = useState("form");
  const [amount,         setAmount]         = useState("");
  const [currency,       setCurrency]       = useState("USD");
  const [name,           setName]           = useState("");
  const [email,          setEmail]          = useState("");
  const [description,    setDescription]    = useState("");
  const [promoCode,      setPromoCode]      = useState("");
  const [breakdown,      setBreakdown]      = useState(null);  // local preview breakdown
  const [payBreakdown,   setPayBreakdown]   = useState(null);  // server-confirmed breakdown for pay step
  const [errorMsg,       setErrorMsg]       = useState("");
  const [captureData,    setCaptureData]    = useState(null);

  const inputRef = useRef(null);

  // FIX: also destructure serverBreakdown from the hook
  const {
    renderButtons,
    containerRef,
    loading,
    error:           paypalError,
    serverBreakdown,
  } = usePaypal();

  const sym = getSymbol(currency);

  // Focus on open
  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setErrorMsg("");
      setPayBreakdown(null);
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen]);

  // Recalculate local preview breakdown when amount changes
  useEffect(() => {
    const num = parseFloat(amount);
    setBreakdown(num > 0 ? calcBreakdown(num) : null);
  }, [amount]);

  // Reset breakdown + amount when currency changes
  useEffect(() => {
    setBreakdown(null);
    setPayBreakdown(null);
    setAmount("");
  }, [currency]);

  // Escape key
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  // FIX: Render PayPal buttons when step = "pay"
  // - Added renderButtons and breakdown to dependency array (were missing)
  // - Added onOrderCreated callback to receive server-side breakdown
  useEffect(() => {
    if (step !== "pay" || !breakdown) return;

    renderButtons({
      amount:         breakdown.base,       // always send base; server adds tax
      currency,
      description:    description || "Starway Web Digital — Payment",
      promo_code:     promoCode   || undefined,
      customer_name:  name,
      customer_email: email,

      // FIX: receive server breakdown (with promo applied) and show it in the UI
      onOrderCreated: (serverBD) => {
        setPayBreakdown(serverBD);
      },

      onSuccess: (data) => {
        setCaptureData(data);
        setStep("success");
      },
      onFailure: (err) => {
        setErrorMsg(err.message || "Payment failed. Please try again.");
        setStep("form");
      },
      onCancel: () => setStep("form"),
    });
  // FIX: renderButtons and breakdown were missing from deps — caused stale closures
  }, [step, currency, renderButtons, breakdown]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleProceed = () => {
    const num = parseFloat(amount);
    if (!num || num < 1)  return setErrorMsg("Please enter a valid amount (minimum 1)");
    if (num > 10000)      return setErrorMsg("Maximum single payment is 10,000");
    setErrorMsg("");
    setPayBreakdown(null); // reset until server responds
    setStep("pay");
  };

  const handleReset = () => {
    setAmount("");
    setCurrency("USD");
    setName("");
    setEmail("");
    setDescription("");
    setPromoCode("");
    setBreakdown(null);
    setPayBreakdown(null);
    setCaptureData(null);
    setStep("form");
    setErrorMsg("");
  };

  // The breakdown to show in the pay step:
  // prefer server-side (has promo applied), fall back to local preview
  const activeBreakdown = payBreakdown
    ? {
        base:  payBreakdown.base_amount,
        tax:   payBreakdown.tax_payable,
        total: payBreakdown.final_amount,
        discount: (payBreakdown.normal_discount || 0) + (payBreakdown.tax_waived || 0),
        discountLabel: payBreakdown.discount_label || null,
        hasDiscount:   payBreakdown.has_normal_discount || payBreakdown.has_tax_discount,
      }
    : breakdown
      ? { base: breakdown.base, tax: breakdown.tax, total: breakdown.total, hasDiscount: false }
      : null;

  const inputCls =
    "w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 " +
    "text-white text-sm placeholder-slate-400 focus:outline-none " +
    "focus:ring-2 focus:ring-blue-400/60 transition-all duration-200";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="pp-bd"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="pp-modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.94,  y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-md bg-slate-900 rounded-2xl
                            border border-slate-700 shadow-2xl overflow-hidden
                            max-h-[90vh] overflow-y-auto">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5
                              border-b border-slate-700 sticky top-0 bg-slate-900 z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-[#003087] rounded-lg px-3 py-1">
                    <span className="text-white font-bold text-sm">
                      Pay<span className="text-[#009cde]">Pal</span>
                    </span>
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-base leading-tight">
                      {step === "pay" ? "Complete Payment" : "Pay via PayPal"}
                    </h2>
                    <p className="text-slate-400 text-xs mt-0.5">
                      5% tax · All major currencies
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition p-1 rounded-lg hover:bg-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* ── SUCCESS ── */}
              {step === "success" && (
                <div className="px-6 py-12 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-white text-xl font-bold mb-2">Payment Successful!</h3>
                  <p className="text-slate-400 text-sm mb-2">
                    Thank you! PayPal payment captured.
                  </p>
                  {captureData && (
                    <div className="bg-slate-800 rounded-xl p-4 text-left text-sm mt-4 mb-6 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Amount Paid</span>
                        <span className="text-white font-semibold">
                          {activeBreakdown
                            ? formatAmount(activeBreakdown.total, currency)
                            : formatAmount(captureData.amount, captureData.currency || currency)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Currency</span>
                        <span className="text-white">{captureData.currency || currency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Capture ID</span>
                        <span className="text-slate-300 text-xs font-mono truncate max-w-[180px]">
                          {captureData.capture_id}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm transition"
                    >
                      Pay Again
                    </button>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-[#003087] hover:bg-[#002070] text-white rounded-xl text-sm transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {/* ── FORM STEP ── */}
              {step === "form" && (
                <div className="px-6 py-6 space-y-4">

                  {/* Currency + Amount */}
                  <div>
                    <label className="text-slate-300 text-xs font-semibold mb-1.5 block uppercase tracking-wide">
                      Currency & Amount <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="bg-slate-800 border border-slate-600 rounded-xl px-3 py-3
                                   text-white text-sm focus:outline-none focus:ring-2
                                   focus:ring-blue-400/60 w-32 shrink-0 cursor-pointer"
                      >
                        {PAYPAL_CURRENCIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>

                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2
                                         text-blue-400 font-semibold text-sm pointer-events-none">
                          {sym}
                        </span>
                        <input
                          ref={inputRef}
                          type="number" min="1" step="0.01"
                          value={amount}
                          onChange={(e) => { setAmount(e.target.value); setErrorMsg(""); }}
                          placeholder="0.00"
                          className={`${inputCls} pl-8`}
                        />
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs mt-1.5 pl-1">
                      {PAYPAL_CURRENCIES.find((c) => c.code === currency)?.name}
                    </p>
                  </div>

                  {/* Live tax breakdown (local preview, no promo yet) */}
                  <AnimatePresence>
                    {breakdown && breakdown.base > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{   opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-slate-800 border border-blue-500/30 rounded-xl px-4 py-3 space-y-2">
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
                            <span className="text-[#009cde] text-lg">
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
                      <label className="text-slate-300 text-xs font-semibold mb-1.5 block uppercase tracking-wide">
                        Your Name
                      </label>
                      <input
                        type="text" value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe" className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 text-xs font-semibold mb-1.5 block uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com" className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Payment For */}
                  <div>
                    <label className="text-slate-300 text-xs font-semibold mb-1.5 block uppercase tracking-wide">
                      Payment For (optional)
                    </label>
                    <input
                      type="text" value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g. SEO Package, Web Design" className={inputCls}
                    />
                  </div>

                  {/* Promo Code */}
                  <div>
                    <label className="text-slate-300 text-xs font-semibold mb-1.5 block uppercase tracking-wide">
                      Promo Code (optional)
                    </label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        placeholder="e.g. SAVE20"
                        className={`${inputCls} pl-9 tracking-widest uppercase`}
                        maxLength={30}
                      />
                    </div>
                  </div>

                  {/* Error */}
                  <AnimatePresence>
                    {errorMsg && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="text-red-400 text-xs text-center"
                      >
                        {errorMsg}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Proceed button */}
                  <button
                    onClick={handleProceed}
                    disabled={!amount || parseFloat(amount) <= 0}
                    className="w-full bg-[#003087] hover:bg-[#002070] disabled:opacity-50
                               disabled:cursor-not-allowed text-white font-bold py-3.5
                               rounded-xl flex items-center justify-center gap-2
                               transition-all duration-200 shadow-lg"
                  >
                    Continue to PayPal <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Secured by PayPal · Buyer Protection included
                  </div>
                </div>
              )}

              {/* ── PAY STEP (PayPal buttons render here) ── */}
              {step === "pay" && (
                <div className="px-6 py-6">

                  {/* FIX: Show server-confirmed breakdown (with promo) once available,
                      otherwise show local preview while PayPal order is being created */}
                  {activeBreakdown && (
                    <div className="bg-slate-800 border border-slate-600 rounded-xl
                                    px-4 py-3 space-y-2 mb-5">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Base Amount</span>
                        <span className="text-white">{formatAmount(activeBreakdown.base, currency)}</span>
                      </div>

                      {/* FIX: Show discount row only if promo was applied */}
                      {activeBreakdown.hasDiscount && activeBreakdown.discount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-green-400 flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {activeBreakdown.discountLabel || "Discount"}
                          </span>
                          <span className="text-green-400">
                            − {formatAmount(activeBreakdown.discount, currency)}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between text-sm">
                        <span className="text-amber-400">+ Tax (5%)</span>
                        <span className="text-amber-400">{formatAmount(activeBreakdown.tax, currency)}</span>
                      </div>
                      <div className="h-px bg-slate-600" />
                      <div className="flex justify-between font-bold">
                        <span className="text-white">Total</span>
                        <span className="text-[#009cde] text-lg">
                          {formatAmount(activeBreakdown.total, currency)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Loading */}
                  {loading && (
                    <div className="flex items-center justify-center py-8 gap-2 text-slate-400">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="text-sm">Loading PayPal...</span>
                    </div>
                  )}

                  {/* Error */}
                  {paypalError && (
                    <p className="text-red-400 text-sm text-center mb-4">{paypalError}</p>
                  )}

                  {/* PayPal SDK renders buttons into this div */}
                  <div ref={containerRef} className="min-h-[50px]" />

                  <button
                    onClick={() => setStep("form")}
                    className="w-full mt-4 py-2.5 text-slate-400 hover:text-white
                               text-sm transition-colors duration-200"
                  >
                    ← Back
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}