export const metadata = {
  title: "Strategic Content Marketing & Copywriting Services | Starway Web Digital",
  description:
    "Engage your audience and boost rankings with intent-driven content marketing. We create authoritative, SEO-optimized content designed to convert casual visitors into buyers.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/services/content-marketing-services",
  },

  openGraph: {
    title: "Strategic Content Marketing & Copywriting Services | Starway Web Digital",
    description:
      "Engage your audience and boost rankings with intent-driven content marketing. We create authoritative, SEO-optimized content designed to convert casual visitors into buyers.",
    url: "https://starwaywebdigital.com/services/content-marketing-services",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a specific content marketing graphic if you have one
        width: 1200,
        height: 630,
        alt: "Strategic Content Marketing & Copywriting Services | Starway Web Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Strategic Content Marketing & Copywriting Services | Starway Web Digital",
    description:
      "Engage your audience and boost rankings with intent-driven content marketing. We create authoritative, SEO-optimized content designed to convert casual visitors into buyers.",
    images: ["/og-image.jpg"], 
  },
};

export default function ContentMarketingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}