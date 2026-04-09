"use client";

import { useState, useCallback, useRef } from "react";

const API_URL   = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;


// ─── Script management ────────────────────────────────────────────────────────

const removePaypalScript = () => {
  const existing = document.getElementById("paypal-sdk");
  if (existing) existing.remove();
  try { delete window.paypal; } catch (_) { window.paypal = undefined; }
};

const loadPaypalScript = (currency = "USD") =>
  new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);

    const existing = document.getElementById("paypal-sdk");

    if (existing && window.paypal && existing.src.includes(`currency=${currency}`)) {
      return resolve(true);
    }

    if (existing) removePaypalScript();

    const script  = document.createElement("script");
    script.id     = "paypal-sdk";
    script.src    = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=${currency}&intent=capture&components=buttons`;

    script.onload  = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });


// ─── Hook ─────────────────────────────────────────────────────────────────────

const usePaypal = () => {
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);
  const containerRef = useRef(null);

  const renderButtons = useCallback(async ({
    amount,
    currency       = "USD",
    description    = "Payment",
    promo_code     = null,
    customer_name  = "",
    customer_email = "",
    onSuccess,
    onFailure,
    onCancel,
  }) => {

    setLoading(true);
    setError(null);

    try {
      const safeAmount = parseFloat(amount || 0);

      if (!CLIENT_ID) {
        throw new Error("NEXT_PUBLIC_PAYPAL_CLIENT_ID missing");
      }

      const loaded = await loadPaypalScript(currency);

      if (!loaded || !window.paypal) {
        throw new Error("Failed to load PayPal SDK");
      }

      if (!containerRef.current) {
        throw new Error("PayPal container not mounted");
      }

      containerRef.current.innerHTML = "";
      setLoading(false);

      window.paypal.Buttons({

        style: {
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "pay",
          height: 48,
        },

        // ─────────────────────────────────────────
        // CREATE ORDER
        // ─────────────────────────────────────────
        createOrder: async () => {

          const res = await fetch(`${API_URL}/api/paypal/create-order`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: safeAmount,
              currency,
              description,
              promo_code: promo_code || undefined,
              customer_name,
              customer_email,
            }),
          });

          const data = await res.json();

          if (!res.ok || !data.success) {
            throw new Error(data.message || "Create order failed");
          }

          return data.data.order_id;
        },


        // ─────────────────────────────────────────
        // CAPTURE ORDER
        // ─────────────────────────────────────────
        onApprove: async (approveData) => {
          setLoading(true);

          try {
            const res = await fetch(`${API_URL}/api/paypal/capture-order`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                order_id: approveData.orderID
              }),
            });

            const data = await res.json();

            console.log("PAYPAL CAPTURE RESPONSE:", data);

            if (!res.ok || !data.success) {
              throw new Error(data.message || "Capture failed");
            }

            const capture = data.data;

            // Normalize response for UI
            const formatted = {
              capture_id: capture?.id,
              status: capture?.status,
              amount: capture?.amount?.value
            };

            onSuccess?.(formatted);

          } catch (err) {
            console.error("PayPal capture error:", err);
            setError(err.message);
            onFailure?.(err);
          } finally {
            setLoading(false);
          }
        },


        onCancel: () => {
          setLoading(false);
          onCancel?.();
        },

        onError: (err) => {
          const msg = err?.message || "PayPal error";
          console.error("PayPal SDK error:", msg);
          setError(msg);
          setLoading(false);
          onFailure?.(new Error(msg));
        },

      }).render(containerRef.current);

    } catch (err) {
      console.error("usePaypal error:", err);
      setError(err.message);
      setLoading(false);
      onFailure?.(err);
    }

  }, []);

  return {
    renderButtons,
    containerRef,
    loading,
    error
  };
};

export default usePaypal;