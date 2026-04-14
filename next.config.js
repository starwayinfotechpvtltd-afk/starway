// const nextConfig = {
//   generateBuildId: async () => `build-${Date.now()}`,

//   async headers() {
//     return [
//       {
//         source: "/:path*",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "no-store",
//           },
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

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.starwaywebdigital.com",
          },
        ],
        destination: "https://starwaywebdigital.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;