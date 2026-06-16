import React, { useState, useEffect } from "react";
import CosmicBackground from "./components/styles/CosmicBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import TrustStrip from "./components/TrustStrip";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import FloatingPlanet from "./components/styles/FloatingPlanet";
import ShootingStars from "./components/styles/ShootingStars";
import MouseRipple from "./components/styles/MouseRipple";


function App() {
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Space+Grotesk:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
  return (
    <div className="min-h-screen" style={{ background: "#000000" }}>
      <CosmicBackground />
       <ShootingStars />
        <div className="fixed inset-0 z-5">
         <MouseRipple />
         </div>
       <FloatingPlanet />
      <div className="relative z-10">
        <Nav active={active} setActive={setActive} />
        <Hero setActive={setActive} />
        <About />
        <Services />
        <WhyUs />
        <Stats />
        <Projects />
        <Testimonials />
        <TrustStrip />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default App;