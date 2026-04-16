
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import StatsGrid from "@/components/Home/StatsGrid";
import PortfolioSection from "@/components/Home/PortfoiloSection";
import TestimonialsSection from "@/components/Home/Testimonials";
import AboutUs from "@/components/Home/AboutUs";
import ScrollOverlayFramer from "@/components/Home/ScrollOverlayFramer";
import FinalCTA from "@/components/Common/FinalCTA";
import TestimonialSection from "@/components/Home/Testimonial";
import FaqAccordion from "@/components/FaqAccordion";
import OurWorkSection from "@/components/Home/OurWorkSection";
const digitalMarketingFaqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We provide a full range of digital marketing services including SEO, PPC advertising, social media marketing, content marketing, conversion optimization, and analytics tracking to help businesses grow online."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Paid campaigns like Google Ads can generate results within days, while SEO and organic growth typically take 3–6 months to show strong and sustainable results."
  },
  {
    question: "Do you create custom marketing strategies for each business?",
    answer:
      "Yes. We analyze your industry, competitors, target audience, and business goals to build a customized marketing strategy designed to maximize ROI."
  },
  {
    question: "How do you track marketing performance?",
    answer:
      "We use advanced analytics tools like Google Analytics, Search Console, and ad platform dashboards to track traffic, leads, conversions, and campaign performance."
  },
  {
    question: "Will I receive regular reports on campaign performance?",
    answer:
      "Yes. We provide detailed performance reports and insights so you can clearly understand how your campaigns are performing and where growth opportunities exist."
  },
  {
    question: "Can digital marketing help my local business grow?",
    answer:
      "Absolutely. Local SEO, Google Business optimization, and targeted advertising can significantly increase visibility, drive local traffic, and attract more customers in your area."
  }
];
export default function Home() {



  return (
    <div className="w-full mx-auto pt-25">
      <HeroSection />
      {/* Services Section */}
      <ServicesSection />

      {/* About Us Section */}
      <AboutUs />

      <OurWorkSection />
      {/* AI Optimization Section */}
      <ScrollOverlayFramer />

      {/* Portfolio Section */}

      <PortfolioSection />
      {/* Testimonials */}

      <StatsGrid />

      {/* Clients Section */}
      <TestimonialSection />
      {/* <FAQ /> */}
      <FaqAccordion
        title="Digital Marketing FAQs"
        subtitle="Find answers to common questions about our digital marketing services, including SEO, paid ads, social media growth, content marketing, and performance tracking."
        linkText="Still have questions? Talk with our digital marketing experts."
        linkHref="/contact"
        faqs={digitalMarketingFaqs}
      />
      {/* Bottom section */}
      <div className="w-[80%] mx-auto"></div>
      <FinalCTA />
    </div>
  );
}
