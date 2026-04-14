export const metadata = {
  title: "AI Search Optimization (AEO) & GEO Services | Starway Web Digital",
  description:
    "Rank where AI looks first. Dominate ChatGPT, Gemini, and Google AI Overviews with our cutting-edge semantic search, context mapping, and entity optimization strategies.",
  
  alternates: {
    canonical: "https://starwaywebdigital.com/services/ai-search-optimization",
  },

  openGraph: {
    title: "AI Search Optimization (AEO) & GEO Services | Starway Web Digital",
    description:
      "Rank where AI looks first. Dominate ChatGPT, Gemini, and Google AI Overviews with our cutting-edge semantic search, context mapping, and entity optimization strategies.",
    url: "https://starwaywebdigital.com/services/ai-search-optimization",
    type: "website",
    siteName: "Starway Web Digital",
    images: [
      {
        url: "/og-image.jpg", // Update with a specific AEO graphic if you have one
        width: 1200,
        height: 630,
        alt: "AI Search Optimization (AEO) & GEO Services | Starway Web Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Search Optimization (AEO) & GEO Services | Starway Web Digital",
    description:
      "Rank where AI looks first. Dominate ChatGPT, Gemini, and Google AI Overviews with our cutting-edge semantic search, context mapping, and entity optimization strategies.",
    images: ["/og-image.jpg"], 
  },
};

export default function AISearchOptimizationLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}