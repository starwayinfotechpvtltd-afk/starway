export const metadata = {
  title: "Contact Starway Web Digital | Get a Free Consultation",
  description:
    "Ready to scale your brand? Contact Starway Web Digital today for a free consultation and personalized AI visibility audit. Let's discuss your marketing and development needs.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/contact",
  },

  openGraph: {
    title: "Contact Starway Web Digital | Get a Free Consultation",
    description:
      "Ready to scale your brand? Contact Starway Web Digital today for a free consultation and personalized AI visibility audit. Let's discuss your marketing and development needs.",
    url: "https://starwaywebdigital.com/contact",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a contact-specific graphic if you have one
        width: 1200,
        height: 630,
        alt: "Contact Starway Web Digital | Get a Free Consultation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Starway Web Digital | Get a Free Consultation",
    description:
      "Ready to scale your brand? Contact Starway Web Digital today for a free consultation and personalized AI visibility audit. Let's discuss your marketing and development needs.",
    images: ["/og-image.jpg"], 
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}