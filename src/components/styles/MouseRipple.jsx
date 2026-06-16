import { useEffect, useState } from "react";

export default function MouseRipple() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((r) => r.id !== newRipple.id)
        );
      }, 1000);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="mouse-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </>
  );
}