import NearMeClient from "./NearMeClient";

export const metadata = {
  title: "NearMeInteriors Case Study | 380% Traffic Growth with SEO",

  description:
    "See how NearMeInteriors dominated Kolkata search results with a data-driven SEO strategy, achieving 380% traffic growth, 20+ page-one keywords, and higher conversions.",

  keywords: [
    "SEO case study",
    "local SEO Kolkata",
    "interior design SEO",
    "organic traffic growth",
    "keyword ranking strategy",
    "technical SEO optimization",
    "Google ranking improvement",
  ],

  alternates: {
    canonical: "https://yourdomain.com/portfolio/nearme-interiors",
  },

  openGraph: {
    title: "NearMeInteriors SEO Case Study | Kolkata Search Domination",
    description:
      "A powerful SEO campaign delivering 380% traffic growth, top keyword rankings, and improved conversions.",
    url: "https://yourdomain.com/portfolio/nearme-interiors",
    siteName: "Your Brand Name",
    images: [
      {
        url: "/images/portfolio/nearmeIntePortfolio01.webp",
        width: 1200,
        height: 630,
        alt: "NearMeInteriors SEO Campaign Results",
      },
    ],
    locale: "en_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "NearMeInteriors SEO Case Study",
    description:
      "380% traffic growth and top rankings with a smart SEO strategy.",
    images: ["/images/portfolio/nearmeIntePortfolio01.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <NearMeClient />;
}