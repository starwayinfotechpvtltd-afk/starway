/**
 * CURRENCIES — shared config for Razorpay + PayPal
 * Place at: lib/currencies.js  (Next.js project)
 *           utils/currencies.js (server)

 */

export const CURRENCIES = [
  { code: "INR", symbol: "₹",   name: "Indian Rupee",       flag: "🇮🇳", razorpay: true,  paypal: false  },
  { code: "USD", symbol: "$",   name: "US Dollar",           flag: "🇺🇸", razorpay: true,  paypal: true  },
  { code: "AUD", symbol: "A$",  name: "Australian Dollar",   flag: "🇦🇺", razorpay: true,  paypal: true  },
  { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar",  flag: "🇳🇿", razorpay: true, paypal: true  },
  { code: "CAD", symbol: "C$",  name: "Canadian Dollar",     flag: "🇨🇦", razorpay: true,  paypal: true  },
  { code: "EUR", symbol: "€",   name: "Euro",                flag: "🇪🇺", razorpay: true,  paypal: true  },
  { code: "GBP", symbol: "£",   name: "British Pound",       flag: "🇬🇧", razorpay: true,  paypal: true  },
];

// Filtered subsets
export const RAZORPAY_CURRENCIES = CURRENCIES.filter((c) => c.razorpay);
export const PAYPAL_CURRENCIES   = CURRENCIES.filter((c) => c.paypal);

// Quick lookup helpers
export const getCurrency  = (code) => CURRENCIES.find((c) => c.code === code);
export const getSymbol    = (code) => getCurrency(code)?.symbol ?? code;
export const formatAmount = (amount, code) =>
  `${getSymbol(code)}${parseFloat(amount).toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;