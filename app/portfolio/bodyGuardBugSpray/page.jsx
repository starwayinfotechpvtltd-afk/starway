import BodyGuardClient from "./BodyGuardClient";

export const metadata = {
  title: "BodyGuardBugSpray Case Study | 650% Growth with SMO Strategy",
  description:
    "Discover how BodyGuardBugSpray achieved 650% website traffic growth using data-driven social media optimization, influencer marketing, and targeted paid ads in the USA.",

  keywords: [
    "SMO case study",
    "social media marketing strategy",
    "Instagram growth case study",
    "Facebook marketing results",
    "eco-friendly brand marketing",
    "paid social ads strategy",
  ],

  alternates: {
    canonical:
      "https://yourdomain.com/portfolio/bodyGuardBugSpray",
  },

  openGraph: {
    title:
      "BodyGuardBugSpray Case Study | Social Media Growth Strategy",
    description:
      "A powerful SMO strategy that boosted engagement, traffic, and conversions by 650%.",
    url: "https://yourdomain.com/portfolio/bodyGuardBugSpray",
    siteName: "Your Brand Name",
    images: [
      {
        url: "/images/portfolio/bodyguard_paid_ads.webp",
        width: 1200,
        height: 630,
        alt: "BodyGuardBugSpray Social Media Campaign",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "BodyGuardBugSpray SMO Case Study",
    description:
      "See how strategic SMO generated massive traffic and engagement growth.",
    images: ["/images/portfolio/bodyguard_paid_ads.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <BodyGuardClient />;
}