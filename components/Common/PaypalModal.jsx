"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Loader2, ChevronRight, Tag } from "lucide-react";
import usePaypal from "../../hooks/usePaypal";
import { PAYPAL_CURRENCIES, getSymbol, formatAmount } from "../../lib/currencies.js";

// ✅ FIXED TAX = 10%
const TAX_RATE = 0.10;

// ✅ breakdown calc
const calcBreakdown = (raw) => {
  const base  = parseFloat(parseFloat(raw || 0).toFixed(2));
  const tax   = parseFloat((base * TAX_RATE).toFixed(2));
  const total = parseFloat((base + tax).toFixed(2));
  return { base, tax, total };
};

export default function PaypalModal({ isOpen, onClose }) {
  const [step, setStep] = useState("form");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [breakdown, setBreakdown] = useState(null);
  const [payBreakdown, setPayBreakdown] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [captureData, setCaptureData] = useState(null);

  const inputRef = useRef(null);

  const {
    renderButtons,
    containerRef,
    loading,
    error: paypalError,
  } = usePaypal();

  const sym = getSymbol(currency);

  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setErrorMsg("");
      setPayBreakdown(null);
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen]);

  useEffect(() => {
    const num = parseFloat(amount);
    setBreakdown(num > 0 ? calcBreakdown(num) : null);
  }, [amount]);

  useEffect(() => {
    setBreakdown(null);
    setPayBreakdown(null);
    setAmount("");
  }, [currency]);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  // ✅ PAYPAL RENDER
  useEffect(() => {
    if (step !== "pay" || !breakdown) return;

    renderButtons({
      amount: breakdown.base,
      currency,
      description: description || "Payment",
      promo_code: promoCode || undefined,
      customer_name: name,
      customer_email: email,

      onOrderCreated: (serverBD) => {
        setPayBreakdown(serverBD);
      },

      // ✅ STRICT SUCCESS CHECK
      onSuccess: (data) => {
        if (!data || data.status !== "captured") {
          setErrorMsg("Payment verification failed. Please try again.");
          setStep("form");
          return;
        }

        setCaptureData(data);
        setStep("success");
      },

      onFailure: (err) => {
        setErrorMsg(err.message || "Payment failed");
        setStep("form");
      },

      onCancel: () => setStep("form"),
    });

  }, [step, currency, renderButtons, breakdown]);

  const handleProceed = () => {
    const num = parseFloat(amount);

    if (!num || num < 1) {
      return setErrorMsg("Minimum amount is 1");
    }

    if (num > 10000) {
      return setErrorMsg("Maximum limit is 10,000");
    }

    setErrorMsg("");
    setPayBreakdown(null);
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

  const activeBreakdown = payBreakdown
    ? {
        base: payBreakdown.base_amount,
        tax: payBreakdown.tax_payable,
        total: payBreakdown.final_amount,
        discount: (payBreakdown.normal_discount || 0) + (payBreakdown.tax_waived || 0),
        discountLabel: payBreakdown.discount_label || null,
        hasDiscount: payBreakdown.has_normal_discount || payBreakdown.has_tax_discount,
      }
    : breakdown
      ? { base: breakdown.base, tax: breakdown.tax, total: breakdown.total, hasDiscount: false }
      : null;

  const inputCls =
    "w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-slate-900 rounded-xl border border-slate-700">

              {/* HEADER */}
              <div className="flex justify-between p-4 border-b border-slate-700">
                <h2 className="text-white font-bold">
                  {step === "pay" ? "Complete Payment" : "Pay via PayPal"}
                </h2>
                <button onClick={onClose}><X /></button>
              </div>

              {/* SUCCESS */}
              {step === "success" && (
                <div className="p-6 text-center">
                  <h3 className="text-white text-xl">Payment Successful</h3>

                  <p className="text-slate-400 mt-2">
                    Capture ID: {captureData?.capture_id}
                  </p>

                  <button onClick={handleReset} className="mt-4 bg-blue-600 px-4 py-2 rounded">
                    Pay Again
                  </button>
                </div>
              )}

              {/* FORM */}
              {step === "form" && (
                <div className="p-4 space-y-4">

                  <input
                    ref={inputRef}
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={inputCls}
                  />

                  {breakdown && (
                    <div className="bg-slate-800 p-3 rounded">
                      <div>Base: {formatAmount(breakdown.base, currency)}</div>
                      <div>Tax (10%): {formatAmount(breakdown.tax, currency)}</div>
                      <div>Total: {formatAmount(breakdown.total, currency)}</div>
                    </div>
                  )}

                  {errorMsg && (
                    <p className="text-red-400 text-sm">{errorMsg}</p>
                  )}

                  <button
                    onClick={handleProceed}
                    className="w-full bg-blue-600 py-3 rounded text-white"
                  >
                    Continue
                  </button>

                </div>
              )}

              {/* PAY STEP */}
              {step === "pay" && (
                <div className="p-4">

                  {activeBreakdown && (
                    <div className="bg-slate-800 p-3 rounded mb-4">
                      <div>Base: {formatAmount(activeBreakdown.base, currency)}</div>
                      <div>Tax (10%): {formatAmount(activeBreakdown.tax, currency)}</div>
                      <div>Total: {formatAmount(activeBreakdown.total, currency)}</div>
                    </div>
                  )}

                  {loading && <Loader2 className="animate-spin" />}
                  {paypalError && <p className="text-red-400">{paypalError}</p>}

                  <div ref={containerRef} />

                  <button
                    onClick={() => setStep("form")}
                    className="mt-3 text-sm text-gray-400"
                  >
                    Back
                  </button>
                </div>
              )}

            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}