const MAX_WAIT = 8000; // batas aman: setelah ini loader tetap ditutup walau ada yang belum selesai

/** Gambar yang dimuat lebih dulu agar halaman pertama langsung terlihat utuh. */
const PRELOAD = ["/images/profile-img.png", "/images/about.jpg"];

/**
 * Animasi loading pertama kali masuk.
 * Progres = min(progres waktu, batas siap): naik halus sampai ±88%, lalu menyelesaikan 100%
 * setelah font + gambar utama + event `load` selesai. Minimal tampil ±1.6 detik agar animasinya terbaca.
 */
export function initLoader(): () => void {
  const root = document.documentElement;
  const el = document.getElementById("ld");
  if (!el || el.dataset.done === "1") {
    root.classList.remove("is-loading");
    return () => undefined;
  }

  const num = el.querySelector<HTMLElement>("[data-ld-pct]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MIN = reduce ? 350 : 1700;
  const t0 = performance.now();

  let alive = true;
  let loaded = document.readyState === "complete";
  let fonts = false;
  let imgs = 0;
  let p = 0;
  let raf = 0;
  let closing = false;
  const timers: number[] = [];

  const onLoad = (): void => {
    loaded = true;
  };
  window.addEventListener("load", onLoad);

  const f = document.fonts?.ready;
  if (f) f.then(() => (fonts = true)).catch(() => (fonts = true));
  else fonts = true;

  PRELOAD.forEach((src) => {
    const im = new Image();
    const done = (): void => {
      imgs++;
    };
    im.onload = done;
    im.onerror = done;
    im.src = src;
  });

  const finish = (): void => {
    if (closing) return;
    closing = true;
    el.classList.add("out");
    let ended = false;
    const end = (): void => {
      if (ended) return;
      ended = true;
      el.dataset.done = "1";
      el.classList.add("ld-gone");
      root.classList.remove("is-loading");
      document.dispatchEvent(new Event("pf:loaded"));
    };
    el.addEventListener("transitionend", (e) => {
      // hanya transisi tirai itu sendiri (bukan transisi elemen anak yang ikut "menggelembung")
      if (e.target === el && ((e as TransitionEvent).propertyName === "transform" || (e as TransitionEvent).propertyName === "opacity")) end();
    });
    timers.push(window.setTimeout(end, reduce ? 450 : 1500)); // cadangan bila transitionend tidak terpicu
  };

  const tick = (): void => {
    if (!alive) return;
    const elapsed = performance.now() - t0;
    const ready = (loaded && fonts && imgs >= PRELOAD.length) || elapsed > MAX_WAIT;
    const timeP = 1 - Math.pow(1 - Math.min(1, elapsed / MIN), 3); // easeOutCubic
    const goal = Math.min(timeP * 100, ready ? 100 : 88);
    p += (goal - p) * 0.14;
    if (goal >= 100 && p > 99.3) p = 100;
    const shown = Math.round(p);
    if (num) num.textContent = String(shown);
    el.style.setProperty("--p", p.toFixed(2));
    if (p >= 100) {
      timers.push(window.setTimeout(finish, 260));
      return;
    }
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return () => {
    alive = false;
    cancelAnimationFrame(raf);
    timers.forEach((t) => window.clearTimeout(t));
    window.removeEventListener("load", onLoad);
  };
}
