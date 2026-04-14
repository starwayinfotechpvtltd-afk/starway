export const metadata = {
  title: "About Starway Web Digital | Global Digital Marketing Experts",
  description:
    "Learn about the team behind Starway Web Digital. We are marketing, design, and tech experts dedicated to empowering global businesses through smart, data-driven digital solutions.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/about",
  },

  openGraph: {
    title: "About Starway Web Digital | Global Digital Marketing Experts",
    description:
      "Learn about the team behind Starway Web Digital. We are marketing, design, and tech experts dedicated to empowering global businesses through smart, data-driven digital solutions.",
    url: "https://starwaywebdigital.com/about",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with an about-specific graphic or team photo if you have one
        width: 1200,
        height: 630,
        alt: "About Starway Web Digital | Global Digital Marketing Experts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Starway Web Digital | Global Digital Marketing Experts",
    description:
      "Learn about the team behind Starway Web Digital. We are marketing, design, and tech experts dedicated to empowering global businesses through smart, data-driven digital solutions.",
    images: ["/og-image.jpg"], 
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}