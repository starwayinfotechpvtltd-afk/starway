export const metadata = {
  title: "Advanced SEO & Local Ranking Services | Starway Web Digital",
  description:
    "Rank higher and capture highly qualified traffic. Our expert SEO services cover technical, on-page, and local search strategies to drive sustainable organic growth worldwide.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/services/search-engine-optimization",
  },

  openGraph: {
    title: "Advanced SEO & Local Ranking Services | Starway Web Digital",
    description:
      "Rank higher and capture highly qualified traffic. Our expert SEO services cover technical, on-page, and local search strategies to drive sustainable organic growth worldwide.",
    url: "https://starwaywebdigital.com/services/search-engine-optimization",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a specific SEO graphic if you have one
        width: 1200,
        height: 630,
        alt: "Advanced SEO & Local Ranking Services | Starway Web Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Advanced SEO & Local Ranking Services | Starway Web Digital",
    description:
      "Rank higher and capture highly qualified traffic. Our expert SEO services cover technical, on-page, and local search strategies to drive sustainable organic growth worldwide.",
    images: ["/og-image.jpg"], 
  },
};

export default function SearchEngineOptimizationLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}