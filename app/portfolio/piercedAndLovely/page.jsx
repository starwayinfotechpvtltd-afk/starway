import PiercedLovelyClient from "./PiercedLovelyClient";

export const metadata = {
  title: "Pierced & Lovely Case Study | 4.1X ROAS with Google Ads",

  description:
    "See how Pierced & Lovely generated $1,430 in sales with just $348 ad spend using smart Google Ads strategy, targeted audiences, and high-converting landing pages.",

  keywords: [
    "Google Ads case study",
    "ecommerce advertising strategy",
    "ROAS improvement",
    "PPC campaign optimization",
    "jewelry ecommerce marketing",
    "conversion rate optimization",
    "shopping ads strategy",
  ],

  alternates: {
    canonical: "https://yourdomain.com/portfolio/pierced-lovely",
  },

  openGraph: {
    title: "Pierced & Lovely Case Study | Google Ads Success",
    description:
      "A data-driven Google Ads campaign delivering 4.1X ROAS and strong revenue growth for an eCommerce brand.",
    url: "https://yourdomain.com/portfolio/pierced-lovely",
    siteName: "Your Brand Name",
    images: [
      {
        url: "/images/portfolio/peacedLovelyportfolio01.webp",
        width: 1200,
        height: 630,
        alt: "Pierced & Lovely Google Ads Campaign Results",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pierced & Lovely Google Ads Case Study",
    description:
      "From $348 ad spend to $1,430 sales — discover how this campaign achieved 4.1X ROAS.",
    images: ["/images/portfolio/peacedLovelyportfolio01.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PiercedLovelyClient />;
}