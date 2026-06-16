import React from "react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-xs"
            style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}
          >
            <img src="/ck_logo1.png" alt="Chethan M" className="w-full h-full object-cover rounded-lg" />
          </div>
          <span
            className="text-white/60 text-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            CHETHAN M — Website Development
          </span>
        </div>
        <p
          className="text-white/30 text-xs"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          © {new Date().getFullYear()} Chethan M. All rights reserved. · Davanagere, Karnataka
        </p>
      </div>
    </footer>
  );
}