export const metadata = {
  title: "Custom UI/UX Design Services | Starway Web Digital",
  description:
    "Elevate your user experience with seamless, conversion-focused UI/UX design. We blend stunning aesthetics with intuitive functionality to create highly engaging digital products.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/services/ui-ux-design",
  },

  openGraph: {
    title: "Custom UI/UX Design Services | Starway Web Digital",
    description:
      "Elevate your user experience with seamless, conversion-focused UI/UX design. We blend stunning aesthetics with intuitive functionality to create highly engaging digital products.",
    url: "https://starwaywebdigital.com/services/ui-ux-design",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a specific UI/UX design graphic if you have one
        width: 1200,
        height: 630,
        alt: "Custom UI/UX Design Services | Starway Web Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom UI/UX Design Services | Starway Web Digital",
    description:
      "Elevate your user experience with seamless, conversion-focused UI/UX design. We blend stunning aesthetics with intuitive functionality to create highly engaging digital products.",
    images: ["/og-image.jpg"], 
  },
};

export default function UIUXDesignLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}