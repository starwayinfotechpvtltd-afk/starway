const nextConfig = {
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
