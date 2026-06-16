import React from "react";

export default function ShootingStars() {
  const stars = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((_, index) => (
        <span
          key={index}
          className="shooting-star"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}