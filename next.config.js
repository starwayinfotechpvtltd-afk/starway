// /** @type {import('next').NextConfig} */
// const nextConfig = {

//   // ─── Generate a unique build ID on every deploy ───────────────────────────
//   generateBuildId: async () => {
//     return `build-${Date.now()}`;
//   },

//   // ─── Cache Headers ────────────────────────────────────────────────────────
//   async headers() {
//     return [
//       // HTML pages — NEVER cache (CDN must always fetch fresh HTML)
//       {
//         source: "/((?!_next/static|_next/image|favicon.ico).*)",
//         headers: [
//           { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
//           { key: "Pragma",        value: "no-cache" },
//           { key: "Expires",       value: "0" },
//           { key: "Surrogate-Control", value: "no-store" }, // CDN-specific
//         ],
//       },

//       // Static JS/CSS chunks — cache forever (hash guarantees uniqueness)
//       {
//         source: "/_next/static/(.*)",
//         headers: [
//           { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;


const nextConfig = {
  generateBuildId: async () => `build-${Date.now()}`,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;