import MenswearrClient from "./MenswearrClient";

export const metadata = {
  title: "Menswearr Case Study | 4.6X ROAS with Google Ads Strategy",

  description:
    "Learn how Menswearr generated £5.16K in sales with just £1.12K ad spend using precision-targeted Google Ads, smart bidding, and high-converting landing pages.",

  keywords: [
    "Google Ads case study",
    "ROAS case study",
    "ecommerce advertising strategy",
    "PPC campaign results",
    "conversion rate optimization",
    "remarketing strategy",
  ],

  alternates: {
    canonical: "https://yourdomain.com/portfolio/menswearr",
  },

  openGraph: {
    title: "Menswearr Case Study | Google Ads Success Story",
    description:
      "See how a data-driven Google Ads strategy delivered 4.6X ROAS and high conversion rates for an eCommerce brand.",
    url: "https://yourdomain.com/portfolio/menswearr",
    siteName: "Your Brand Name",
    images: [
      {
        url: "/images/portfolio/menswearrPortfolio02.webp",
        width: 1200,
        height: 630,
        alt: "Menswearr Google Ads Campaign Results",
      },
    ],
    locale: "en_GB",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Menswearr Google Ads Case Study",
    description:
      "From £1.12K ad spend to £5.16K sales — discover the strategy behind this success.",
    images: ["/images/portfolio/menswearrPortfolio02.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <MenswearrClient />;
}