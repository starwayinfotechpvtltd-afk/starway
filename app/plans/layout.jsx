export const metadata = {
  title: "Digital Marketing Pricing & Service Plans | Starway Web Digital",
  description:
    "Transparent, scalable digital marketing plans for businesses of all sizes. Choose the right package for SEO, PPC, and AI visibility to perfectly align with your growth goals.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/plans",
  },

  openGraph: {
    title: "Digital Marketing Pricing & Service Plans | Starway Web Digital",
    description:
      "Transparent, scalable digital marketing plans for businesses of all sizes. Choose the right package for SEO, PPC, and AI visibility to perfectly align with your growth goals.",
    url: "https://starwaywebdigital.com/plans",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a pricing-specific graphic if you have one
        width: 1200,
        height: 630,
        alt: "Digital Marketing Pricing & Service Plans | Starway Web Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Pricing & Service Plans | Starway Web Digital",
    description:
      "Transparent, scalable digital marketing plans for businesses of all sizes. Choose the right package for SEO, PPC, and AI visibility to perfectly align with your growth goals.",
    images: ["/og-image.jpg"], 
  },
};

export default function PlansLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}