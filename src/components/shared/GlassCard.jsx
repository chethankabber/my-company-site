import React from "react";

export default function GlassCard({ children, className = "", hover = true }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-500 
        ${hover ? "hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)] hover:-translate-y-1" : ""} 
        ${className}`}
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      {children}
    </div>
  );
}