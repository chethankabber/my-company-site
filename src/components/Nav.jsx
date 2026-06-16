import React, { useState, useEffect } from "react";

export default function Nav({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Home", "About", "Services", "Projects", "Testimonials", "Contact"];

  const scroll = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
      style={{
        background: scrolled ? "rgba(5,2,20,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(168,85,247,0.12)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scroll("home")}>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm"
            style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              boxShadow: "0 0 20px rgba(168,85,247,0.5)",
            }}
          >
            <img src="/ck_logo1.png" alt="Chethan M" className="w-full h-full object-cover rounded-1xl" />
          </div>
          <span
            className="font-bold text-white tracking-wide"
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "0.85rem" }}
          >
            CHETHAN M
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scroll(l)}
              className={`px-4 py-2 rounded-lg text-sm tracking-wide transition-all duration-300 ${
                active === l ? "text-purple-300" : "text-white/60 hover:text-white"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scroll("Contact")}
            className="ml-4 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              boxShadow: "0 0 20px rgba(168,85,247,0.4)",
            }}
          >
            Free Consultation
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-6 h-0.5 bg-white rounded" />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 mx-4 rounded-2xl p-4 space-y-1"
          style={{
            background: "rgba(10,5,30,0.95)",
            border: "1px solid rgba(168,85,247,0.2)",
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scroll(l)}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-white/70 hover:text-white hover:bg-purple-900/30 transition-all text-sm"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}