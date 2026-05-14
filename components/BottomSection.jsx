import FAQ from "@/components/Home/FAQ";
import Image from "next/image";

export default function BottomSection() {
  return (
    <section className="w-full px-4 md:px-10">
      {/* ================= Google Partner Section ================= */}
      <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#0A1E3F] via-[#0F2F5F] to-[#123A78] p-8 md:p-12 shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* LEFT – Logos */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start gap-8">
            <Image
              src="/images/logo.svg"
              height={120}
              width={260}
              alt="logo"
              className="bg-white rounded-2xl p-4 shadow-lg"
            />
            <Image
              src="/images/google.png"
              height={220}
              width={260}
              alt="google partner"
              className="opacity-90"
            />
          </div>

          {/* RIGHT – Details */}
          <div className="md:w-1/2 flex flex-col gap-6">
            {[
              {
                title: "Performance",
                desc: "Starway Web Digital maintains an optimization score of at least 70%.",
              },
              {
                title: "Spend",
                desc: "Managed over $10,000 USD in ad spend within the last 90 days.",
              },
              {
                title: "Certifications",
                desc: "Certified Google Ads strategists driving measurable results.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-white text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#00C8FF] text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FAQ Section ================= */}
      <div className="mt-24">
        <FAQ />
      </div>

      {/* ================= Final CTA ================= */}
    </section>
  );
}
