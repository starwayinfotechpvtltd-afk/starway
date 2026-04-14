import { Metadata } from 'next';

export const metadata = {
  title: "Creative Brand Identity & Strategy Services | Starway Web Digital",
  description:
    "Build a memorable, timeless brand identity. Our creative branding services craft distinctive visual designs and strategic messaging that deeply resonate with your target audience.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/services/brand-identity-design",
  },

  openGraph: {
    title: "Creative Brand Identity & Strategy Services | Starway Web Digital",
    description:
      "Build a memorable, timeless brand identity. Our creative branding services craft distinctive visual designs and strategic messaging that deeply resonate with your target audience.",
    url: "https://starwaywebdigital.com/services/brand-identity-design",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Make sure this image exists in your /public folder or use a full URL
        width: 1200,
        height: 630,
        alt: "Creative Brand Identity & Strategy Services | Starway Web Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Creative Brand Identity & Strategy Services | Starway Web Digital",
    description:
      "Build a memorable, timeless brand identity. Our creative branding services craft distinctive visual designs and strategic messaging that deeply resonate with your target audience.",
    images: ["/og-image.jpg"], 
  },
};

export default function BrandIdentityDesignLayout({ children }) {
  return (
    <>
      {/* If you have any specific wrapper elements for this page, add them here */}
      {children}
    </>
  );
}