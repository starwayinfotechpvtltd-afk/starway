export const metadata = {
  title: "Digital Marketing, AI SEO & Web Dev Services | Starway",
  description:
    "Explore our complete suite of results-driven digital marketing services. From cutting-edge AI SEO and PPC to custom web development and UI/UX design, we scale brands globally.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/services",
  },

  openGraph: {
    title: "Digital Marketing, AI SEO & Web Dev Services | Starway",
    description:
      "Explore our complete suite of results-driven digital marketing services. From cutting-edge AI SEO and PPC to custom web development and UI/UX design, we scale brands globally.",
    url: "https://starwaywebdigital.com/services",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a services-specific graphic if you have one
        width: 1200,
        height: 630,
        alt: "Digital Marketing, AI SEO & Web Dev Services | Starway",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, AI SEO & Web Dev Services | Starway",
    description:
      "Explore our complete suite of results-driven digital marketing services. From cutting-edge AI SEO and PPC to custom web development and UI/UX design, we scale brands globally.",
    images: ["/og-image.jpg"], 
  },
};

export default function ServicesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}