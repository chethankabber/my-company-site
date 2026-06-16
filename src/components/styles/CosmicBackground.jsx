import React, { useEffect, useRef } from "react";

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      speed: Math.random() * 0.18 + 0.04,
      alpha: Math.random() * 0.7 + 0.3,
      twinkle: Math.random() * Math.PI * 2,
    }));

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5,
      hue: Math.random() > 0.5 ? 300 : 260,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let frame = 0;
    let raf;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);

      const bg = ctx.createRadialGradient(W * 0.5, H * 0.4, 0, W * 0.5, H * 0.4, Math.max(W, H));
      bg.addColorStop(0, "rgba(20,5,40,1)");
      bg.addColorStop(0.5, "rgba(5,2,20,1)");
      bg.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      const nebulae = [
        { x: W * 0.15, y: H * 0.25, rx: 320, ry: 200, h: 290, s: 0.45 },
        { x: W * 0.82, y: H * 0.6, rx: 280, ry: 180, h: 260, s: 0.35 },
        { x: W * 0.5, y: H * 0.85, rx: 380, ry: 150, h: 280, s: 0.25 },
      ];
      nebulae.forEach((n) => {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.rx);
        g.addColorStop(0, `hsla(${n.h},80%,55%,${n.s})`);
        g.addColorStop(0.5, `hsla(${n.h},60%,30%,${n.s * 0.4})`);
        g.addColorStop(1, "transparent");
        ctx.save();
        ctx.scale(1, n.ry / n.rx);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y * (n.rx / n.ry), n.rx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      const t = frame * 0.003;
      const planets = [
        { bx: W * 0.88, by: H * 0.12, r: 38, drift: 12, speed: 0.4, h: 280 },
        { bx: W * 0.06, by: H * 0.7, r: 22, drift: 8, speed: 0.55, h: 310 },
        { bx: W * 0.5, by: H * 0.08, r: 14, drift: 6, speed: 0.7, h: 200 },
      ];
      planets.forEach((p) => {
        const px = p.bx + Math.sin(t * p.speed) * p.drift;
        const py = p.by + Math.cos(t * p.speed * 0.7) * p.drift * 0.5;
        const pg = ctx.createRadialGradient(px - p.r * 0.3, py - p.r * 0.3, p.r * 0.1, px, py, p.r);
        pg.addColorStop(0, `hsla(${p.h},80%,80%,0.95)`);
        pg.addColorStop(0.5, `hsla(${p.h},70%,50%,0.9)`);
        pg.addColorStop(1, `hsla(${p.h},60%,20%,0.8)`);
        ctx.save();
        ctx.shadowColor = `hsla(${p.h},80%,60%,0.6)`;
        ctx.shadowBlur = p.r * 1.5;
        ctx.fillStyle = pg;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      stars.forEach((s) => {
        s.y += s.speed * 0.15;
        if (s.y > H) { s.y = 0; s.x = Math.random() * W; }
        s.twinkle += 0.03;
        const a = s.alpha * (0.6 + 0.4 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fill();
      });

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.save();
        ctx.shadowColor = `hsla(${p.hue},100%,70%,0.8)`;
        ctx.shadowBlur = 8;
        ctx.fillStyle = `hsla(${p.hue},100%,70%,${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}