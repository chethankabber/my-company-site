import React, { useState } from "react";
import GlassCard from "./shared/GlassCard";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", business: "", requirement: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  const inputCls =
    "w-full px-4 py-3.5 rounded-xl text-white/85 text-sm outline-none transition-all duration-300 focus:border-purple-400/60 placeholder-white/25";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    fontFamily: "'Space Grotesk', sans-serif",
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-xs tracking-widest uppercase mb-3">Let's Talk</p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Get In Touch
          </h2>
          <p className="text-white/45" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <GlassCard hover={false} className="p-8 md:p-12">
          {sent ? (
            /* Success State */
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6"
                style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}
              >
                ✓
              </div>
              <h3
                className="text-white text-xl font-bold mb-3"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Message Sent!
              </h3>
              <p className="text-white/50" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                We'll respond within 24 hours. Looking forward to working with you.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-purple-400 text-sm hover:text-purple-300 transition-colors"
              >
                Send another →
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                    Full Name *
                  </label>
                  <input
                    name="name" value={form.name} onChange={handle} required
                    placeholder="Your full name"
                    className={inputCls} style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                    Phone Number *
                  </label>
                  <input
                    name="phone" value={form.phone} onChange={handle} required
                    placeholder="+91 XXXXX XXXXX"
                    className={inputCls} style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                  Email Address *
                </label>
                <input
                  name="email" type="email" value={form.email} onChange={handle} required
                  placeholder="your@email.com"
                  className={inputCls} style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                  Business Name
                </label>
                <input
                  name="business" value={form.business} onChange={handle}
                  placeholder="Your company or business name"
                  className={inputCls} style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                  Project Requirement *
                </label>
                <textarea
                  name="requirement" value={form.requirement} onChange={handle} required rows={4}
                  placeholder="Tell us about your website requirements, goals, and timeline..."
                  className={inputCls} style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] mt-2"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                Request Free Consultation →
              </button>
            </form>
          )}
        </GlassCard>

        {/* Direct Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <a
            href="mailto:chethankabber@gmail.com"
            className="flex items-center gap-2 text-white/45 hover:text-purple-300 transition-colors text-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span>✉</span> chethankabber@gmail.com
          </a>
          <span
            className="flex items-center gap-2 text-white/45 text-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span>📍</span> Davanagere, Karnataka
          </span>
        </div>
      </div>
    </section>
  );
}