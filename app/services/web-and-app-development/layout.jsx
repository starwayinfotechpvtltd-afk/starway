export const metadata = {
  title: "Custom Web & Mobile App Development Services | Starway Web Digital",
  description:
    "Transform ideas into scalable digital platforms. We build fast, secure, and modern websites, eCommerce stores, and mobile apps specifically tailored to accelerate your business.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/services/web-and-app-development",
  },

  openGraph: {
    title: "Custom Web & Mobile App Development Services | Starway Web Digital",
    description:
      "Transform ideas into scalable digital platforms. We build fast, secure, and modern websites, eCommerce stores, and mobile apps specifically tailored to accelerate your business.",
    url: "https://starwaywebdigital.com/services/web-and-app-development",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a specific web/app development graphic if you have one
        width: 1200,
        height: 630,
        alt: "Custom Web & Mobile App Development Services | Starway Web Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Web & Mobile App Development Services | Starway Web Digital",
    description:
      "Transform ideas into scalable digital platforms. We build fast, secure, and modern websites, eCommerce stores, and mobile apps specifically tailored to accelerate your business.",
    images: ["/og-image.jpg"], 
  },
};

export default function WebAndAppDevelopmentLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}