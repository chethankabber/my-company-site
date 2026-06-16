import React from "react";
import GlassCard from "./shared/GlassCard";

const MESSAGES = [
  "Helping Businesses Build Their Digital Presence",
  "Modern Solutions for Modern Businesses",
  "Your Trusted Partner for Website Development",
  "Turning Business Ideas into Powerful Digital Experiences",
];

export default function TrustStrip() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-5">
          {MESSAGES.map((m, i) => (
            <GlassCard key={i} hover={false} className="p-7 flex items-center gap-5">
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}
              >
                ✦
              </div>
              <p
                className="text-white/75 font-medium leading-snug"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {m}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}