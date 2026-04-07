import SameysCaterClient from "./SameysCaterClient";

export const metadata = {
  title: "Sammy’s Catering Case Study | 19.9X ROAS with Google Ads",

  description:
    "Discover how Sammy’s Catering generated $14,000 revenue with just $702 ad spend using smart Google Ads strategy, high-intent keywords, and remarketing.",

  keywords: [
    "Google Ads case study",
    "ROAS case study",
    "catering marketing strategy",
    "PPC campaign success",
    "remarketing strategy",
    "conversion rate optimization",
    "local business advertising",
  ],

  alternates: {
    canonical: "https://yourdomain.com/portfolio/sammys-catering",
  },

  openGraph: {
    title: "Sammy’s Catering Case Study | Google Ads Success",
    description:
      "A powerful Google Ads strategy delivering 19.9X ROAS and $14K revenue from a $702 budget.",
    url: "https://yourdomain.com/portfolio/sammys-catering",
    siteName: "Your Brand Name",
    images: [
      {
        url: "/images/portfolio/sammyCateringPortfolio01.webp",
        width: 1200,
        height: 630,
        alt: "Sammy’s Catering Google Ads Campaign Results",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sammy’s Catering Google Ads Case Study",
    description:
      "From $702 ad spend to $14K revenue — see how this campaign achieved 19.9X ROAS.",
    images: ["/images/portfolio/sammyCateringPortfolio01.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SameysCaterClient />;
}