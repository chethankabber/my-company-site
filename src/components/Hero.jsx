import React from "react";

export default function Hero({ setActive }) {
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id.charAt(0).toUpperCase() + id.slice(1));
  };

  const buttons = [
    { label: "View Services", id: "services", primary: true },
    { label: "View Projects", id: "projects", primary: false },
    // { label: "Get Free Consultation", id: "contact", primary: true },
  //   { label: "Contact Us", id: "contact", primary: false },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-8"
          style={{
            background: "rgba(168,85,247,0.12)",
            border: "1px solid rgba(168,85,247,0.3)",
            color: "#d8b4fe",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for New Projects
        </div>

        {/* Main Heading */}
        <h1
          className="font-black leading-[1.05] mb-6"
          style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
        >
          <span className="text-white">Professional Websites</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #f0abfc 0%, #a78bfa 50%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            That Help Businesses Grow
          </span>
        </h1>

        {/* Sub Heading */}
        <p
          className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-4 leading-relaxed"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          We Design and Develop Modern, Fast, and Scalable Websites for Businesses, Startups, and Entrepreneurs.
        </p>

        {/* Owner Tag */}
        {/* <div className="flex items-center justify-center gap-3 mb-12">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm"
            style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}
          >
            CK
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              CHETHAN M
            </p>
            <p className="text-purple-400/70 text-xs tracking-wide">
              Software Developer & Website Development Consultant
            </p>
          </div>
        </div> */}

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {buttons.map((b, i) => (
            <button
              key={i}
              onClick={() => scroll(b.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 ${
                b.primary ? "text-white" : "text-purple-300 hover:text-white"
              }`}
              style={
                b.primary
                  ? {
                      background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                      boxShadow: "0 0 25px rgba(168,85,247,0.4)",
                    }
                  : {
                      background: "rgba(168,85,247,0.08)",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }
              }
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        </div>

      </div>
    </section>
  );
}