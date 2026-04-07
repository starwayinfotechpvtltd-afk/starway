"use client";

/**
 * useRazorpay hook
 * Place at: hooks/useRazorpay.js
 */

import { useState, useCallback } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (document.getElementById("razorpay-script")) return resolve(true);
    const script   = document.createElement("script");
    script.id      = "razorpay-script";
    script.src     = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload  = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const useRazorpay = () => {
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);

  const initiatePayment = useCallback(async ({
    amount,
    currency       = "INR",   // ← now passed from modal
    customer_name  = "",
    customer_email = "",
    customer_phone = "",
    description    = "Payment",
    notes          = {},
    onSuccess,
    onFailure,
  }) => {
    setLoading(true);
    setError(null);

    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) throw new Error("Could not load Razorpay. Check your internet connection.");

      // Create order on server — server applies 5% tax + validates currency
      const orderRes = await fetch(`${API_URL}/api/razorpay/create-order`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency,
          customer_name,
          customer_email,
          customer_phone,
          notes,
        }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.message || "Failed to create order");

      const { order_id, amount: totalPaise, currency: orderCurrency, key_id, breakdown, prefill } =
        orderData.data;

      // Open Razorpay modal
      const options = {
        key:         key_id,
        amount:      totalPaise,
        currency:    orderCurrency,
        name:        "Starway Web Digital",
        description,
        image:       "/images/logo.svg",
        order_id,
        prefill,
        notes: {
          "Base Amount": `${orderCurrency} ${breakdown.base_amount}`,
          "Tax (5%)":    `${orderCurrency} ${breakdown.tax_amount}`,
          "Total":       `${orderCurrency} ${breakdown.total_amount}`,
        },
        theme: { color: "#f97316" },   // orange brand colour

        handler: async (response) => {
          try {
            const verifyRes = await fetch(`${API_URL}/api/razorpay/verify-payment`, {
              method:  "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id:   response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature:  response.razorpay_signature,
              }),
            });
            const verifyData = await verifyRes.json();
            if (!verifyRes.ok || !verifyData.success) throw new Error(verifyData.message || "Verification failed");
            onSuccess?.({ ...verifyData.data, breakdown });
          } catch (verifyErr) {
            setError(verifyErr.message);
            onFailure?.(verifyErr);
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
            onFailure?.(new Error("Payment cancelled"));
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        setLoading(false);
        onFailure?.(new Error(response.error?.description || "Payment failed"));
      });
      rzp.open();

    } catch (err) {
      setError(err.message);
      setLoading(false);
      onFailure?.(err);
    }
  }, []);

  return { initiatePayment, loading, error };
};

export default useRazorpay;