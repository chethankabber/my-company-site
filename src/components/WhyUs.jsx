import React from "react";
import GlassCard from "./shared/GlassCard";

const WHY = [
  "Modern Premium Designs",
  "Mobile Responsive Websites",
  "Fast Performance",
  "SEO-Friendly Development",
  "Secure & Reliable Solutions",
  "Transparent Communication",
  "Affordable Pricing",
  "Long-Term Support",
  "Customer-Focused Approach",
];

export default function WhyUs() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <GlassCard hover={false} className="p-10 md:p-16">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-xs tracking-widest uppercase mb-3">Our Advantage</p>
            <h2
              className="text-3xl md:text-4xl font-black text-white"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Why Clients Choose Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {WHY.map((w, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:bg-purple-900/20 group"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}
                >
                  ✓
                </div>
                <span
                  className="text-white/75 text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {w}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}