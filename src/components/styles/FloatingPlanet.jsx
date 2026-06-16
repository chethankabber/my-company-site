import { motion } from "framer-motion";

export default function FloatingPlanet() {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="fixed top-32 right-20 z-0"
    >
      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, #ff7ad9, #7b00ff 70%)",
          boxShadow:
            "0 0 40px rgba(123,0,255,0.6), 0 0 80px rgba(255,0,128,0.3)",
        }}
      />
    </motion.div>
  );
}