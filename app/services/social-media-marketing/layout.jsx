export const metadata = {
  title: "Social Media Marketing & SMO Agency | Starway Web Digital",
  description:
    "Boost brand engagement and dominate the SMO game. Our targeted social media marketing strategies drive traffic, grow your community, and build fierce brand loyalty.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/services/social-media-marketing",
  },

  openGraph: {
    title: "Social Media Marketing & SMO Agency | Starway Web Digital",
    description:
      "Boost brand engagement and dominate the SMO game. Our targeted social media marketing strategies drive traffic, grow your community, and build fierce brand loyalty.",
    url: "https://starwaywebdigital.com/services/social-media-marketing",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a specific social media graphic if you have one
        width: 1200,
        height: 630,
        alt: "Social Media Marketing & SMO Agency | Starway Web Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing & SMO Agency | Starway Web Digital",
    description:
      "Boost brand engagement and dominate the SMO game. Our targeted social media marketing strategies drive traffic, grow your community, and build fierce brand loyalty.",
    images: ["/og-image.jpg"], 
  },
};

export default function SocialMediaMarketingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}