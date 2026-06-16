import React from "react";
import GlassCard from "./shared/GlassCard";

const SERVICES = [
  {
    icon: "🏢",
    title: "Business Website Development",
    desc: "Professional, credible websites tailored for companies and local businesses to establish authority online.",
    color: "#a855f7",
  },
  {
    icon: "🚀",
    title: "Startup Websites",
    desc: "Modern, bold websites for startups and growing brands that need to make a powerful first impression.",
    color: "#7c3aed",
  },
  {
    icon: "🎨",
    title: "Portfolio Websites",
    desc: "Personal branding and portfolio solutions that showcase your work and attract new opportunities.",
    color: "#9333ea",
  },
  {
    icon: "📈",
    title: "Landing Pages",
    desc: "High-converting landing pages engineered for marketing campaigns and lead generation.",
    color: "#a855f7",
  },
  {
    icon: "⚙️",
    title: "Web Applications",
    desc: "Custom web application development with modern tech stacks, built to scale with your business.",
    color: "#7c3aed",
  },
  {
    icon: "🛡️",
    title: "Website Maintenance",
    desc: "Regular updates, security patches, performance optimization, and reliable technical support.",
    color: "#9333ea",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-purple-400 text-xs tracking-widest uppercase mb-3">What We Offer</p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Our Services
          </h2>
          <p
            className="text-white/45 max-w-xl mx-auto"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            End-to-end web solutions crafted to elevate your business in the digital space.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <GlassCard key={i} className="p-8 group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${s.color}20`,
                  border: `1px solid ${s.color}40`,
                }}
              >
                {s.icon}
              </div>
              <h3
                className="text-white font-bold mb-3"
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "0.95rem" }}
              >
                {s.title}
              </h3>
              <p
                className="text-white/50 text-sm leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {s.desc}
              </p>
              {/* <div className="mt-6 flex items-center gap-2 text-purple-400 text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300">
                Learn More <span>→</span>
              </div> */}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}