import Image from "next/image";
import {
  MapPin,
} from "lucide-react";
import ContactForm from "@/components/Contact/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

const contactFaqs = [
  {
    question: "How long until I see results?",
    answer:
      "Most clients see initial AI visibility improvements within 4-6 weeks. Full optimization typically takes 3 months as AI models learn and recognize your enhanced brand signals.",
  },
  {
    question: "Is this different from traditional SEO?",
    answer:
      "Yes. While SEO focuses on Google's algorithm, AI Optimization prepares your brand for conversational AI, entity recognition, and the trust signals that AI assistants prioritize.",
  },
  {
    question: "Do you work with international businesses?",
    answer:
      "Absolutely! We optimize for global AI platforms with strategies tailored to different languages, cultural contexts, and regional AI assistant preferences.",
  },
  {
    question: "What's included in the free AI audit?",
    answer:
      "Our comprehensive audit includes analysis of your current AI visibility, competitor benchmarking, platform-specific recommendations, and a personalized roadmap for improvement.",
  },

  // ✅ New 7 FAQs Added Below
  {
    question: "How can I book a consultation with your team?",
    answer:
      "You can book a consultation by filling out our contact form or reaching out directly via email. Our team will respond quickly to schedule a call at your convenience.",
  },
  {
    question: "How soon will you reply after I submit the form?",
    answer:
      "We typically respond within 24 hours on business days. If your request is urgent, please mention it in your message for faster assistance.",
  },
  {
    question: "Do you offer customized AI optimization packages?",
    answer:
      "Yes, every business is unique. We create custom AI optimization plans based on your industry, competition, current visibility, and growth goals.",
  },
  {
    question: "What information should I share when contacting you?",
    answer:
      "To help us assist you faster, share your website URL, your business goals, target audience, and the main challenges you're facing with AI visibility or SEO.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <ContactForm />
      {/* Main Content */}
      <div className="mx-auto pt-20">
        {/* Office Locations */}
        <div className="px-3 md:px-4">
          <div className="max-w-7xl mx-auto bg-white rounded-2xl my-20  p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-red-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Our Offices</h3>
            </div>

            <div className="w-full h-[400px] rounded-xl overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.091221239338!2d88.4326456!3d22.5756913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275af84e94b71%3A0xffdab16f56baffe1!2sPrimarc%20Tower!5e0!3m2!1sen!2sin!4v1774250082995!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <FaqAccordion
          title="Contact FAQs"
          subtitle="Everything you need to know before getting in touch with our team. "
          linkText="We’re here to help."
          linkHref="/contact"
          faqs={contactFaqs}
          defaultOpenIndex={0}
        />
      </div>
    </div>
  );
}
