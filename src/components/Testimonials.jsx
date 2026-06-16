import React from "react";
import GlassCard from "./shared/GlassCard";

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Owner, KR Electronics",
    rating: 5,
    text: "Chethan delivered an outstanding website for my electronics shop. Sales inquiries have doubled since we launched. Highly professional and reliable.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Director, CityMed Hospital",
    rating: 5,
    text: "The hospital portal he built is exactly what we needed. Patients can book appointments online easily. Excellent work and great support.",
  },
  {
    name: "Arjun Nair",
    role: "Founder, EduPath Startup",
    rating: 5,
    text: "Our startup's website looks world-class. Chethan understood our vision perfectly and delivered beyond expectations. Truly a trusted partner.",
  },
  {
    name: "Meena Gowda",
    role: "CEO, FreshBite Restaurant",
    rating: 5,
    text: "The restaurant website is beautiful and works flawlessly on mobile. We've seen a 40% increase in table bookings. Couldn't be happier!",
  },
  {
    name: "Suresh Reddy",
    role: "Principal, Sunrise Academy",
    rating: 5,
    text: "He built our school website with a student portal and it works perfectly. Very affordable pricing and excellent communication throughout.",
  },
  {
    name: "Kiran Patel",
    role: "MD, BuildRight Construction",
    rating: 5,
    text: "Professional, fast, and responsive. The website reflects our brand perfectly. I recommend Chethan to anyone who needs a premium web presence.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-purple-400 text-xs tracking-widest uppercase mb-3">Social Proof</p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Client Testimonials
          </h2>
          <p
            className="text-white/45 max-w-xl mx-auto"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Words from businesses we've helped build their digital presence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <GlassCard key={i} className="p-7">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p
                className="text-white/65 text-sm leading-relaxed mb-6 italic"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-purple-400/60 text-xs">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}