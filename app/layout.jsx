import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import MobileBottomTab from "@/components/Common/MobileBottomTab";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export const metadata = {
  metadataBase: new URL("https://starwaywebdigital.com"),

  title: "Global Digital Marketing Agency | SEO, PPC & Performance Marketing",

  description:
    "Results-driven digital marketing agency helping businesses across the US, UK, Australia, Canada, and New Zealand grow with data-driven SEO, high-converting PPC campaigns, social media marketing, and performance-focused web design.",

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
    title: "Global Digital Marketing Agency | SEO, PPC & Performance Marketing",
    description:
      "Results-driven digital marketing agency helping businesses across the US, UK, Australia, Canada, and New Zealand grow with data-driven SEO, PPC campaigns, and social media marketing.",
    url: "https://starwaywebdigital.com",
    siteName: "Starway Digital",
    images: [
      {
        url: "/og-image.jpg",
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
    title: "Global Digital Marketing Agency | SEO, PPC & Performance Marketing",
    description:
      "Data-driven SEO, PPC campaigns, and social media marketing for global businesses.",
    images: ["/og-image.jpg"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter" style={{ backgroundColor: "#255EC8" }}>
        <Header />
        {children}
        <MobileBottomTab />
        <Footer />
      </body>
    </html>
  );
}