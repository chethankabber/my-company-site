import React, { useState, useEffect } from "react";

export default function Counter({ end, suffix = "", label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="py-8 px-4 text-center">
      <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-gray-300">{label}</div>
    </div>
  );
}
