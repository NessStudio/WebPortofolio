"use client";

import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; r: number; c: number; ph: number };

/**
 * Animasi partikel latar: titik melayang pelan, saling tersambung garis tipis bila berdekatan,
 * dan menjauh dari kursor / sentuhan. Ringan (jumlah mengikuti luas layar), berhenti saat tab tersembunyi,
 * mengikuti tema terang/gelap, dan dimatikan bila pengguna memilih prefers-reduced-motion.
 */
const PALETTE = {
  dark: ["255,255,255", "255,229,59", "46,230,255", "255,61,154"],
  light: ["20,18,43", "255,61,154", "124,92,255", "0,150,180"],
};

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, dpr = 1, raf = 0, parts: P[] = [];
    const mouse = { x: -9999, y: -9999 };
    const isDark = (): boolean => document.documentElement.getAttribute("data-theme") !== "light";

    const build = (): void => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(26, Math.min(w < 820 ? 46 : 90, Math.round((w * h) / (w < 820 ? 13000 : 17000))));
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 2.2,
        c: Math.floor(Math.random() * 4),
        ph: Math.random() * 6.28,
      }));
    };

    const LINK = () => (w < 820 ? 95 : 130);
    const draw = (t: number, step: boolean): void => {
      ctx.clearRect(0, 0, w, h);
      const pal = isDark() ? PALETTE.dark : PALETTE.light;
      const link = LINK();
      for (const p of parts) {
        if (step) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < 150 * 150 && d2 > 1) {
            const d = Math.sqrt(d2), f = (150 - d) / 150;
            p.vx += (dx / d) * f * 0.25;
            p.vy += (dy / d) * f * 0.25;
          }
          p.vx *= 0.985; p.vy *= 0.985;
          // dorongan halus agar tidak pernah diam
          p.vx += Math.cos(t / 3000 + p.ph) * 0.002;
          p.vy += Math.sin(t / 3400 + p.ph) * 0.002;
          p.x += p.vx; p.y += p.vy;
          if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
        }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i];
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < link * link) {
            ctx.strokeStyle = `rgba(${pal[a.c]},${(1 - Math.sqrt(d2) / link) * 0.28})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of parts) {
        const tw = 0.55 + 0.35 * Math.sin(t / 900 + p.ph);
        ctx.fillStyle = `rgba(${pal[p.c]},${tw})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
      }
    };

    const loop = (t: number): void => { draw(t, true); raf = requestAnimationFrame(loop); };
    const start = (): void => { if (!raf && !reduce) raf = requestAnimationFrame(loop); };
    const stop = (): void => { cancelAnimationFrame(raf); raf = 0; };

    const onMove = (e: PointerEvent): void => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = (): void => { mouse.x = mouse.y = -9999; };
    const onVis = (): void => (document.hidden ? stop() : start());
    let rt = 0;
    const onResize = (): void => { window.clearTimeout(rt); rt = window.setTimeout(() => { build(); if (reduce) draw(0, false); }, 150); };

    build();
    if (reduce) draw(0, false); else start();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    window.addEventListener("pointerup", onLeave, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      window.clearTimeout(rt);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerup", onLeave);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}
