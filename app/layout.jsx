import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import MobileBottomTab from "@/components/Common/MobileBottomTab";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export const metadata = {

  title: "Leading Digital Marketing & AI SEO Agency | Starway Web Digital",
  description:
    "Drive aggressive growth with Starway Web Digital. We specialize in AI search optimization (AEO), SEO, high-ROI PPC, and web development. Get your free AI visibility audit today!",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "digital marketing agency",
    "SEO services",
    "PPC management",
    "social media marketing",
    "growth marketing agency",
    "US digital marketing agency",
    "UK digital marketing services",
    "Australia SEO agency",
    "Canada marketing agency",
    "New Zealand digital marketing"
  ],

  icons: {
    icon: "/logo.svg",
  },

  openGraph: {
    title: "Leading Digital Marketing & AI SEO Agency | Starway Web Digital",
    description:
      "Drive aggressive growth with Starway Web Digital. We specialize in AI search optimization (AEO), SEO, high-ROI PPC, and web development. Get your free AI visibility audit today!",
    url: "https://starwaywebdigital.com",
    siteName: "Starway Digital",
    images: [
      {
        url: "https://starwaywebdigital.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Starway Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Leading Digital Marketing & AI SEO Agency | Starway Web Digital",
    description:
      "Drive aggressive growth with Starway Web Digital. We specialize in AI search optimization (AEO), SEO, high-ROI PPC, and web development. Get your free AI visibility audit today!.",
    images: ["https://starwaywebdigital.com/og-image.jpg"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="moUR4_0t9O9bkPzp9wT3O4u4ergJSm-mFHRUV9C3ONU"
        />
      </head>
      <body className="font-inter" style={{ backgroundColor: "#255EC8" }}>
        <Header />
        {children}
        <MobileBottomTab />
        <Footer />
        <GoogleAnalytics gaId="G-1M2RMMXMZP" />
      </body>
    </html>
  );
}
