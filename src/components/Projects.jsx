import React from "react";
import GlassCard from "./shared/GlassCard";

const PROJECTS = [
  {
    title: "MedCare Hospital Portal",
    type: "Healthcare",
    desc: "Complete patient management portal with appointment booking, doctor profiles, and responsive design.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#a855f7",
  },
  {
    title: "EduLearn Platform",
    type: "Education",
    desc: "Modern e-learning website with course listings, student dashboards, and interactive UI.",
    tags: ["React", "Tailwind", "Firebase"],
    color: "#7c3aed",
  },
  {
    title: "ShopVibe E-Commerce",
    type: "Retail",
    desc: "Full-featured e-commerce store with product catalog, cart, and payment integration.",
    tags: ["Next.js", "Stripe", "Postgres"],
    color: "#9333ea",
  },
  {
    title: "GreenBuild Construction",
    type: "Business",
    desc: "Premium construction company website with project showcase and client inquiry system.",
    tags: ["HTML/CSS", "JS", "PHP"],
    color: "#a855f7",
  },
  {
    title: "StartupX Landing Page",
    type: "Startup",
    desc: "High-converting SaaS landing page with animations, pricing, and lead capture forms.",
    tags: ["React", "GSAP", "Tailwind"],
    color: "#7c3aed",
  },
  {
    title: "Chef's Table Restaurant",
    type: "Restaurant",
    desc: "Elegant restaurant website with menu showcase, reservations, and mobile-first design.",
    tags: ["React", "Node.js", "MySQL"],
    color: "#9333ea",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-purple-400 text-xs tracking-widest uppercase mb-3">Portfolio</p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Recent Projects
          </h2>
          <p
            className="text-white/45 max-w-xl mx-auto"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A selection of websites and web applications delivered across diverse industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <GlassCard key={i} className="p-7 group overflow-hidden relative">
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${p.color}10, transparent 70%)`,
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: `${p.color}20`,
                      color: p.color,
                      border: `1px solid ${p.color}30`,
                    }}
                  >
                    {p.type}
                  </span>
                  {/* <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 group-hover:text-purple-400 transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    ↗
                  </div> */}
                </div>
                <h3
                  className="text-white font-bold mb-3"
                  style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "0.9rem" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-white/50 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 rounded text-xs text-white/50"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}