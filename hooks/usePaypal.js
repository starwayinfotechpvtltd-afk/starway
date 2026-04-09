"use client";

import { useState, useCallback, useRef } from "react";

const API_URL   = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

// ─── Script management ────────────────────────────────────────────────────────

const removePaypalScript = () => {
  const existing = document.getElementById("paypal-sdk");
  if (existing) existing.remove();
  // Must delete window.paypal so PayPal re-initialises cleanly
  try { delete window.paypal; } catch (_) { window.paypal = undefined; }
};

const loadPaypalScript = (currency = "USD") =>
  new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);

    const existing = document.getElementById("paypal-sdk");

    // Reuse if same currency already loaded
    if (existing && window.paypal && existing.src.includes(`currency=${currency}`)) {
      return resolve(true);
    }

    // Different currency — must remove and reload (PayPal SDK is currency-scoped)
    if (existing) removePaypalScript();

    const script  = document.createElement("script");
    script.id     = "paypal-sdk";
    // components=buttons limits what loads — faster + fixes currency issues
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
    promo_code     = null,    // ← promo code support added
    customer_name  = "",
    customer_email = "",
    onSuccess,
    onFailure,
    onCancel,
  }) => {
    setLoading(true);
    setError(null);

    try {
      if (!CLIENT_ID) {
        throw new Error("NEXT_PUBLIC_PAYPAL_CLIENT_ID is not set in .env.local");
      }

      // Load SDK — reloads if currency changed
      const loaded = await loadPaypalScript(currency);
      if (!loaded || !window.paypal) {
        throw new Error("Failed to load PayPal SDK. Check your internet connection.");
      }

      if (!containerRef.current) {
        throw new Error("PayPal container ref is not attached to a DOM element");
      }

      // Clear any previously rendered buttons
      containerRef.current.innerHTML = "";
      setLoading(false);

      window.paypal.Buttons({
        style: {
          layout: "vertical",
          color:  "gold",
          shape:  "rect",
          label:  "pay",
          height: 48,
        },

        // ── Step 1: Create order on YOUR server ──────────────────────────────
        // Server applies 5% tax + validates promo code
        createOrder: async () => {
          const res = await fetch(`${API_URL}/api/paypal/create-order`, {
            method:  "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount,
              currency,
              description,
              promo_code:     promo_code || undefined,
              customer_name,
              customer_email,
            }),
          });

          const data = await res.json();

          if (!res.ok || !data.success) {
            throw new Error(data.message || "Failed to create PayPal order");
          }

          console.log(`✅ PayPal order created: ${data.data.order_id}`);
          return data.data.order_id; // PayPal SDK needs just the order ID
        },

        // ── Step 2: Capture payment after user approves ───────────────────────
        onApprove: async (approveData) => {
          setLoading(true);
          try {
            const res = await fetch(`${API_URL}/api/paypal/capture-order`, {
              method:  "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ order_id: approveData.orderID }),
            });

            const data = await res.json();

            // ── Verify capture was truly successful ───────────────────────────
            if (!res.ok || !data.success) {
              throw new Error(data.message || "Payment capture failed");
            }

            // Double-check status from server response
            if (data.data?.status !== "captured") {
              throw new Error(`Payment status: ${data.data?.status || "unknown"} — not captured`);
            }

            console.log(`✅ PayPal payment captured: ${data.data.capture_id}`);
            onSuccess?.(data.data);

          } catch (captureErr) {
            console.error("❌ PayPal capture error:", captureErr.message);
            setError(captureErr.message);
            onFailure?.(captureErr);
          } finally {
            setLoading(false);
          }
        },

        onCancel: () => {
          setLoading(false);
          onCancel?.();
        },

        onError: (err) => {
          setLoading(false);
          const msg = err?.message || "PayPal encountered an error";
          console.error("❌ PayPal SDK error:", msg);
          setError(msg);
          onFailure?.(new Error(msg));
        },

      }).render(containerRef.current);

    } catch (err) {
      console.error("❌ usePaypal error:", err.message);
      setError(err.message);
      setLoading(false);
      onFailure?.(err);
    }
  }, []);

  return { renderButtons, containerRef, loading, error };
};

export default usePaypal;