import React from "react";
import GlassCard from "./shared/GlassCard";


const details = [
  { icon: "👤", label: "Name", val: "Chethan M" },
  { icon: "📍", label: "Location", val: "Davanagere, Karnataka" },
  { icon: "🎓", label: "Education", val: "East West Institute of Technology (BE)" },
  { icon: "✉️", label: "Email", val: "chethankabber@gmail.com" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-purple-400 text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Meet Chethan M
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="w-56 h-56 md:w-72 md:h-72 rounded-3xl flex items-center justify-center font-black text-white text-6xl md:text-8xl"
                style={{
                  background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(124,58,237,0.2))",
                  border: "2px solid rgba(168,85,247,0.3)",
                  boxShadow: "0 0 80px rgba(168,85,247,0.2)",
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                <img src="/ck_logo1.png" alt="Chethan M" className="w-full h-full object-cover rounded-6xl" />
              </div>
              <div
                className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl text-xs font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                  boxShadow: "0 0 20px rgba(168,85,247,0.5)",
                }}
              >
                Software Developer
              </div>
              <div
                className="absolute -top-3 -left-3 w-6 h-6 rounded-full animate-ping"
                style={{ background: "rgba(168,85,247,0.4)" }}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p
              className="text-white/65 leading-relaxed mb-8 text-lg"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              I am a Software Developer based in Davanagere, Karnataka, specializing in modern website
              and web application development. I help businesses establish a strong online presence
              through professional, responsive, and high-performance websites.
            </p>
            <p
              className="text-white/50 leading-relaxed mb-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Whether you need a business website, portfolio, landing page, or custom web application,
              I focus on delivering solutions that are modern, user-friendly, and designed to support
              business growth.
            </p>

            {/* Detail Cards */}
            <div className="grid grid-cols-1 gap-3">
              {details.map((d, i) => (
                <GlassCard key={i} hover={false} className="p-4 flex items-center gap-4">
                  <span className="text-xl">{d.icon}</span>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">{d.label}</p>
                    <p className="text-white/85 text-sm font-medium">{d.val}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}