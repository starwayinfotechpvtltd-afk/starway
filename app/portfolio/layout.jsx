export const metadata = {
  title: "Digital Marketing & Web Development Portfolio | Starway Web Digital",
  description:
    "View our success stories. See how Starway Web Digital has generated over $15M in revenue for global clients through expert SEO, high-converting PPC, and modern web design.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/portfolio",
  },

  openGraph: {
    title: "Digital Marketing & Web Development Portfolio | Starway Web Digital",
    description:
      "View our success stories. See how Starway Web Digital has generated over $15M in revenue for global clients through expert SEO, high-converting PPC, and modern web design.",
    url: "https://starwaywebdigital.com/portfolio",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a portfolio-specific graphic if you have one
        width: 1200,
        height: 630,
        alt: "Digital Marketing & Web Development Portfolio | Starway Web Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Web Development Portfolio | Starway Web Digital",
    description:
      "View our success stories. See how Starway Web Digital has generated over $15M in revenue for global clients through expert SEO, high-converting PPC, and modern web design.",
    images: ["/og-image.jpg"], 
  },
};

export default function PortfolioLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}