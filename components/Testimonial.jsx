"use client";
import React, { useRef, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";

const testimonials1 = [
  { user: "Rehan Ahmed", time: "a month ago", text: "Starway did an amazing job! They understood my needs, delivered on time, and the results were beyond my expectations. It’s rare to find a team that’s both skilled and genuinely cares about client satisfaction. Thank you, Starway—I truly appreciate your work!" },
  { user: "SHUBHAM BHADRA", time: "a month ago", text: "Working with Starway was a great experience. Their honest communication built trust right away, and they handled everything with care. Fast delivery, top quality, and attention to detail—couldn’t have asked for more. Thank you, Starway!" },
  { user: "Aman Uddin", time: "a month ago", text: "Working with Starwaywebdigital was an excellent experience. The team is highly skilled, attentive to requirements, and delivers on time. Their post-project support is equally impressive, making them a reliable and professional partner." },
  { user: "Tahir Tashqeen", time: "a month ago", text: "Big thanks to the Starway team for their hard work, honesty, and support. They delivered great results and built trust with ease. I really admire their work ethic and client care." },
  { user: "Binay P Singh", time: "3 month ago", text: "We are using the services and we are very happy and satisfied so far; the people there are prompt and responsible to resolute." },
  { user: "Mohammad Asif", time: "a year ago", text: "I have done seo from this company and got very good response on my business and also customer service available for 24/7 so I love that also" },
  { user: "Nathan Bowman", time: "a year ago", text: "Abdullah has helped us a lot with our website and marketing, I highly recommend him." },
  { user: "Atif Ahmad", time: "3 years ago", text: "One of the best place to get your website design and management. Hard working team along with visionary leadership is a good mix.. way to go.. thanks a ton" },
  { user: "Elke Podlasek", time: "2 years ago", text: "Fantastic communication, fast response would recommend, worked with Abdullah, and he is absolutely fantastic" },
];

const testimonials2=[
  { user: "zishan ali", time: "3 years ago", text: "Great skill for web designing and advertisement in kolkata I recommend starway web degital for ecommerce business advertisement"},
  { user: "PROTIK HAZRA", time: "3 years ago", text: "Really talented, passionate, hardworking and dedicated trustworthy people are working here... You are in GOOD HANDS"},
  { user: "Ronnie Das", time: "3 years ago", text: "Abdullah is by far one of the best people in the field to work with. He helped out my business when we were in a bind. He is always quick to respond and looking forward to new and innovative marketing strategies. I would like to thank Abdullah and the entire team of Starway Webdigital for their excellent service and great behaviour."},
  { user: "Veronica Gomes", time: "6 month ago", text: "Excellent Company with Outstanding Service I've had a great experience with starway web digital. The team is professional, responsive, and clearly committed to delivering high-quality service. From start to finish, everything was handled efficiently and with great attention to detail. What stood out the most was their dedication to customer satisfaction and their willingness to go above and beyond. I highly recommend (starway web digital) to anyone looking for reliable and trustworthy service."},
  { user: "Honey Singh", time: "a month ago", text: "This company is a true example of how customer service should be done. They are not only knowledgeable but also genuinely care about their clients. Every interaction was pleasant, and they consistently went above and beyond to meet my expectations. I was impressed with their attention to detail, and the final results were flawless. I can confidently say that this is one of the best Company"},
  { user: "Nayab Khan", time: "a month ago", text: "I had a really good experience working with this team. From the very beginning, they were clear, responsive, and professional in handling my queries. What stood out to me was the way they explained everything in detail and made sure I understood each step before moving forward. The service was completed on time without any hassle, and the quality definitely matched what was promised. It’s not easy these days to find people like Kabir(the Director in Company) who actually deliver what they say, but here I felt my project was in safe hands. I would definitely recommend them to anyone who is looking for reliable and trustworthy service. Kindly connect with Starwaywebdigital"},
  { user: "OC Consultants", time: "3 years ago", text: "Starway Web Digital has always delivered what promised and within set timeline. One of the good thing about Starway is they give inputs and suggestions for your website as they are experienced in what they are doing. We have been a long time client of them. Best of Luck team!!"},
  { user: "Lost My Key Locksmith", time: "8 months ago", text: "So far so good, Abdullah and Team are doing grate help to grow my business to next level. Thank you Team Starway"},
  { user: "Imran Khan", time: "3 years ago", text: "Very professional, listen to your needs and then fullfill them... Their services are one of the best in the market indeed. And most importantly when you buy Starway web's services you don't spend you invest your money on the right place for your business."}
]

export default function InfiniteTestimonialSlider() {
  const speed = 50; // pixels per second

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const topX = useRef(0);
  const bottomX = useRef(0);

  // initialize bottom slider position to left offset
  useEffect(() => {
    if (bottomRef.current) {
      const width = bottomRef.current.scrollWidth / 2;
      bottomX.current = -width;
      bottomRef.current.style.transform = `translateX(${bottomX.current}px)`;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!topRef.current || !bottomRef.current) return;

    const moveLeft = (ref, positionRef) => {
      const width = ref.scrollWidth / 2;
      positionRef.current -= (speed * delta) / 1000;
      if (Math.abs(positionRef.current) >= width) positionRef.current = 0;
      ref.style.transform = `translateX(${positionRef.current}px)`;
    };

    const moveRight = (ref, positionRef) => {
      const width = ref.scrollWidth / 2;
      positionRef.current += (speed * delta) / 1000;
      if (positionRef.current >= 0) positionRef.current = -width;
      ref.style.transform = `translateX(${positionRef.current}px)`;
    };

    // top → moves left
    moveLeft(topRef.current, topX);

    // bottom → moves right
    moveRight(bottomRef.current, bottomX);
  });

  return (
    <div className="relative overflow-hidden mt-10 w-full">
      {/* --- Top testimonial slider (← left) --- */}
      <div className="overflow-hidden w-full">
        <div ref={topRef} className="flex gap-6 w-max">
          {[...testimonials1, ...testimonials1].map((t, i) => (
            <div
              key={i}
              className="w-56 h-56 flex-shrink-0 bg-white/30 backdrop-blur-sm border border-white/30 rounded-4xl p-4 text-white shadow-lg"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
                <div>
                  <h3 className="text-sm font-bold">{t.user}</h3>
                  <p className="text-xs text-gray-200">{t.time}</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-gray-100">{t.text.toString().length > 150? t.text.toString().substring(0, 150)+"...":t.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Bottom testimonial slider (→ right) --- */}
      <div className="overflow-hidden w-full relative -top-10">
        <div ref={bottomRef} className="flex gap-6 w-max">
          {[...testimonials2, ...testimonials2].map((t, i) => (
            <div
              key={i}
              className="w-56 h-56 flex-shrink-0 bg-white/30 backdrop-blur-sm border border-white/30 rounded-4xl p-4 text-white shadow-lg"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
                <div>
                  <h3 className="text-sm font-bold">{t.user}</h3>
                  <p className="text-xs text-gray-200">{t.time}</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-gray-100">{t.text.toString().length > 200? t.text.toString().substring(0, 200)+"...":t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
