import React from "react";
import GlassCard from "./shared/GlassCard";
import Counter from "./shared/Counter";

const STATS = [
  { end: 12, suffix: "+", label: "Websites Delivered" },
  { end: 10, suffix: "+", label: "Happy Clients" },
  { end: 11, suffix: "+", label: "Technologies Used" },
  { end: 21, suffix: "+", label: "Business Solutions Created" },
];

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <GlassCard hover={false} className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
            {STATS.map((s, i) => (
              <Counter key={i} {...s} />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}