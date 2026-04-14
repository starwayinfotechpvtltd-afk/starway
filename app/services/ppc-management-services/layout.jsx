export const metadata = {
  title: "High-ROI PPC Advertising & Campaign Management | Starway",
  description:
    "Maximize your ad spend with data-driven PPC campaigns. We optimize Google Ads to deliver hyper-targeted traffic, skyrocket your ROAS, and drive measurable business growth.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/services/ppc-management-services",
  },

  openGraph: {
    title: "High-ROI PPC Advertising & Campaign Management | Starway",
    description:
      "Maximize your ad spend with data-driven PPC campaigns. We optimize Google Ads to deliver hyper-targeted traffic, skyrocket your ROAS, and drive measurable business growth.",
    url: "https://starwaywebdigital.com/services/ppc-management-services",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a specific PPC graphic if you have one
        width: 1200,
        height: 630,
        alt: "High-ROI PPC Advertising & Campaign Management | Starway",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "High-ROI PPC Advertising & Campaign Management | Starway",
    description:
      "Maximize your ad spend with data-driven PPC campaigns. We optimize Google Ads to deliver hyper-targeted traffic, skyrocket your ROAS, and drive measurable business growth.",
    images: ["/og-image.jpg"], 
  },
};

export default function PPCManagementLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}