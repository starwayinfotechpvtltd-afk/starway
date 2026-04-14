export const metadata = {
  title: "Google Maps & GMB Optimization Services | Local SEO by Starway",
  description:
    "Dominate local search and attract ready-to-buy nearby customers. We expertly optimize your Google My Business profile and Maps listings for maximum local foot traffic.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/services/local-seo",
  },

  openGraph: {
    title: "Google Maps & GMB Optimization Services | Local SEO by Starway",
    description:
      "Dominate local search and attract ready-to-buy nearby customers. We expertly optimize your Google My Business profile and Maps listings for maximum local foot traffic.",
    url: "https://starwaywebdigital.com/services/local-seo",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a specific Local SEO graphic if you have one
        width: 1200,
        height: 630,
        alt: "Google Maps & GMB Optimization Services | Local SEO by Starway",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Google Maps & GMB Optimization Services | Local SEO by Starway",
    description:
      "Dominate local search and attract ready-to-buy nearby customers. We expertly optimize your Google My Business profile and Maps listings for maximum local foot traffic.",
    images: ["/og-image.jpg"], 
  },
};

export default function LocalSEOLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}