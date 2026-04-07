"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { User } from "lucide-react";

/* ---------------- DATA ---------------- */

const testimonials = [
  {
    text: "Our online leads increased within weeks. Their strategy-driven digital marketing truly delivers measurable results. 🚀",
    name: "Ananya Roy",
    username: "@ananyaroy03",
  },
  {
    text: "We struggled with ad performance earlier, but their paid marketing expertise significantly reduced our cost per lead. 😊",
    name: "Amanpreet Singh",
    username: "@ritwiklearns",
  },
  {
    text: "Their SEO approach improved our website visibility and organic traffic beyond expectations. Highly recommended.",
    name: "Rahul Das",
    username: "@rahul_studies",
  },
  {
    text: "From campaign planning to execution, everything was smooth, transparent, and ROI-focused. 🤩",
    name: "Ayan Kumar",
    username: "@ayan_edu",
  },
  {
    text: "Our brand presence on social media improved dramatically. Engagement and reach grew consistently ❤️",
    name: "Megha Ganguly",
    username: "@megha_speaks",
  },
  {
    text: "Thanks to their performance marketing, our conversion rates improved and sales became predictable.",
    name: "Arpan Mukherjee",
    username: "@arpan_studies",
  },
  {
    text: "😊As a business owner, I finally feel confident about my marketing investments. The reporting is clear and honest ❤️",
    name: "Ipsita Banerjee",
    username: "@ipsitalearns",
  },
  {
    text: "Their team understands growth. Data-driven decisions helped us scale faster without wasting budget.",
    name: "Neel Kapoor",
    username: "@neel_eduhub",
  },
  {
    text: "😊This is not just a digital marketing agency — it’s a growth partner we truly trust.",
    name: "Shristi Sharma",
    username: "@shristi_topper",
  },
];

/* ---------------- CARD (FROM FIRST UI) ---------------- */

function TestimonialCard({ item }) {
  return (
    <div className="p-8 bg-white border rounded-3xl shadow-lg max-w-sm">
      <p className="text-gray-800 mb-5">{item.text}</p>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="h-5 w-5 text-gray-600" />
        </div>

        <div>
          <div className="font-medium text-gray-900">{item.name}</div>
          <div className="text-sm text-gray-600">{item.username}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- AUTO SCROLL COLUMN (FROM SECOND) ---------------- */

function AutoScrollColumn({
  items,
  direction = "up",
  speed = 30,
  className = "",
}) {
  const containerRef = useRef(null);
  const y = useMotionValue(0);
  const heightRef = useRef(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      heightRef.current = containerRef.current.scrollHeight / 2;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (paused || !heightRef.current) return;

    const move = ((direction === "up" ? -1 : 1) * (speed * delta)) / 1000;

    let next = y.get() + move;

    if (direction === "up" && Math.abs(next) >= heightRef.current) {
      next = 0;
    }

    if (direction === "down" && next >= 0) {
      next = -heightRef.current;
    }

    y.set(next);
  });

  return (
    <motion.div
      ref={containerRef}
      style={{ y }}
      className={`flex flex-col gap-6 will-change-transform ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {[...items, ...items].map((item, index) => (
        <TestimonialCard key={index} item={item} />
      ))}
    </motion.div>
  );
}

/* ---------------- MAIN SECTION ---------------- */

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading (from first UI) */}
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 mb-4 text-sm font-medium
               rounded-full bg-blue-100 text-blue-600"
          >
            Testimonials
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            What Our Clients Say
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-200 max-w-2xl mx-auto"
          >
            Honest feedback from brands we’ve helped grow digitally.
          </motion.p>
        </motion.div>

        {/* Auto scrolling columns */}
        <div
          className="relative flex justify-center gap-6 h-[600px] overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
        >
          <AutoScrollColumn
            items={testimonials.slice(0, 3)}
            direction="up"
            speed={30}
          />

          <AutoScrollColumn
            items={testimonials.slice(3, 6)}
            direction="down"
            speed={25}
            className="hidden md:flex"
          />

          <AutoScrollColumn
            items={testimonials.slice(6, 9)}
            direction="up"
            speed={20}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
}
