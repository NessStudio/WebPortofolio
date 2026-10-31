/**
 * Efek halus per panel (desktop & HP):
 *  1. Animasi kemunculan konten di desktop: tiap kali panel masuk layar, teks/kartu muncul bertahap (kelas .rv/.rvp).
 *  2. Shape dekoratif: tiap panel punya bentuk berbeda yang HANYA sesekali muncul, bergerak pelan, lalu menghilang
 *     (tidak melayang terus). Letaknya di belakang konten, transparan. Mati bila prefers-reduced-motion.
 */
const IDS = ["home", "about", "skills", "experience", "certificates", "projects", "english-task", "contact"];

const S = 'viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"';
/** Satu bentuk per panel, urut sesuai IDS. `mv` = gerak: [x, y, rotasi, skala akhir] relatif ukuran. */
const KINDS: Array<{ svg: string; mv: (r: () => number) => [number, number, number, number] }> = [
  { svg: `<svg ${S}><circle cx="50" cy="50" r="42"/></svg>`, mv: () => [0, 0, 0, 1.5] }, // home: cincin membesar
  { svg: `<svg ${S}><path d="M50 12v76M12 50h76"/></svg>`, mv: (r) => [r() * 0.4, r() * 0.4, 90, 1] }, // about: plus berputar
  { svg: `<svg ${S}><path d="M50 14L90 84H10z"/></svg>`, mv: (r) => [r() * 0.3, -0.8, 25 * r(), 1] }, // skills: segitiga naik
  { svg: `<svg ${S}><rect x="20" y="20" width="60" height="60" rx="10"/></svg>`, mv: () => [0, 0, 135, 1.1] }, // experience: kotak berputar
  { svg: `<svg viewBox="0 0 100 100" fill="currentColor"><path d="M50 4C54 34 66 46 96 50C66 54 54 66 50 96C46 66 34 54 4 50C34 46 46 34 50 4Z"/></svg>`, mv: () => [0, 0, 45, 1.25] }, // certificates: kilau
  { svg: `<svg ${S}><path d="M8 62a42 42 0 0 1 84 0z"/></svg>`, mv: (r) => [r() > 0 ? 0.9 : -0.9, 0, 0, 1] }, // projects: setengah lingkaran bergeser
  { svg: `<svg ${S}><path d="M6 50q11-24 22 0t22 0t22 0t22 0"/></svg>`, mv: (r) => [r() > 0 ? 1 : -1, 0.15, 0, 1] }, // english: gelombang
  { svg: `<svg viewBox="0 0 100 100" fill="currentColor">${[16, 50, 84].flatMap((y) => [16, 50, 84].map((x) => `<circle cx="${x}" cy="${y}" r="6"/>`)).join("")}</svg>`, mv: () => [0, 0.5, 0, 1] }, // contact: titik-titik
];
const COLORS = ["#ffffff", "#ffe53b", "#ffffff", "#14122b", "#2ee6ff"];

const rand = (a: number, b: number): number => a + Math.random() * (b - a);
const sgn = (): number => Math.random() - 0.5 > 0 ? 1 : -1;

function spawn(host: HTMLElement, idx: number, max: number): void {
  if (host.childElementCount >= max) return;
  const k = KINDS[idx];
  if (!k) return;
  const W = host.offsetWidth, H = host.offsetHeight;
  if (!W || !H) return;
  const rect = host.getBoundingClientRect();
  const sc = rect.width / W || 1;
  const lo = Math.max(0, -rect.top / sc);
  const hi = Math.min(H, (window.innerHeight - rect.top) / sc);
  const size = rand(46, 110) * (W < 600 ? 0.8 : 1);
  if (hi - lo < size * 1.5) return;
  const el = document.createElement("span");
  el.className = "fx-s";
  el.innerHTML = k.svg;
  el.style.cssText = `width:${size}px;height:${size}px;left:${rand(0, W - size)}px;top:${lo + rand(0, hi - lo - size)}px;color:${COLORS[Math.floor(rand(0, COLORS.length))]}`;
  host.appendChild(el);
  const [mx, my, rot, sc2] = k.mv(sgn);
  const a = rand(0.22, 0.38);
  const dur = rand(6500, 9500);
  const r0 = rand(-20, 20);
  const anim = el.animate(
    [
      { opacity: 0, transform: `translate(0,0) rotate(${r0}deg) scale(.7)` },
      { opacity: a, offset: 0.28 },
      { opacity: a, offset: 0.7 },
      { opacity: 0, transform: `translate(${mx * size}px,${my * size}px) rotate(${r0 + rot}deg) scale(${sc2})` },
    ],
    { duration: dur, easing: "ease-in-out", fill: "both" }
  );
  anim.onfinish = () => el.remove();
}

export function initFx(): () => void {
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return () => undefined;

  const cleanups: Array<() => void> = [];
  const pageIdx = (el: HTMLElement): number => Math.max(0, IDS.indexOf(el.dataset.section || el.id));

  /* ── 1. Animasi kemunculan (desktop) ── */
  const kids = (el: Element): HTMLElement[] => Array.from(el.children).filter((c): c is HTMLElement => c instanceof HTMLElement && !c.classList.contains("fx"));
  const hasContent = (el: HTMLElement): boolean => el.textContent!.trim().length > 0 || !!el.querySelector("img");
  const mark = (el: HTMLElement, n: number): void => {
    if (el.classList.contains("hb")) return; // jangan menimpa animasi tombol melayang
    el.classList.add(hasContent(el) ? "rv" : "rvp");
    el.style.setProperty("--d", String(n));
  };
  const panels = Array.from(document.querySelectorAll<HTMLElement>("#app .ks"));
  panels.forEach((ks) => {
    let n = 0;
    kids(ks).forEach((top) => {
      if (!hasContent(top)) return mark(top, n++); // dekorasi latar
      const flex = /display:\s*flex/.test(top.getAttribute("style") || "");
      if (!flex) {
        // pembungkus mutlak (home/contact): tiap anak muncul bertahap
        kids(top).forEach((c) => mark(c, n++));
        return;
      }
      // pembungkus dua kolom: judul dulu, lalu kartu satu per satu
      kids(top).forEach((col) => {
        kids(col).forEach((c) => {
          const cards = kids(c);
          if (cards.length >= 3 && cards.every(hasContent)) cards.forEach((cd) => mark(cd, n++));
          else mark(c, n++);
        });
      });
    });
  });
  root.classList.add("rv-on");
  // Sekali saja: setelah panel pernah tampil, animasinya tidak diulang (termasuk saat scroll naik / ganti tema)
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.intersectionRatio < 0.5) return;
      const id = (e.target as HTMLElement).dataset.section;
      panels.filter((p) => p.dataset.section === id).forEach((p) => p.classList.add("in"));
      io.unobserve(e.target);
    }),
    { threshold: [0.5] }
  );
  panels.forEach((p) => io.observe(p));
  cleanups.push(() => { io.disconnect(); root.classList.remove("rv-on"); });

  /* ── 2. Shape sesekali ── */
  const hosts = [
    ...panels,
    ...Array.from(document.querySelectorAll<HTMLElement>("#m-app .m-sec")),
  ];
  const timers = new Map<HTMLElement, number>();
  const stopHost = (h: HTMLElement): void => { window.clearTimeout(timers.get(h)); timers.delete(h); };
  const tick = (h: HTMLElement, fx: HTMLElement, first: boolean): void => {
    const delay = first ? rand(600, 1400) : rand(2600, 6500);
    timers.set(h, window.setTimeout(() => {
      if (!document.hidden && !root.classList.contains("is-loading")) spawn(fx, pageIdx(h), h.matches(".m-sec") ? 2 : 3);
      tick(h, fx, false);
    }, delay));
  };
  const hio = new IntersectionObserver((entries) => entries.forEach((e) => {
    const h = e.target as HTMLElement;
    const fx = h.querySelector<HTMLElement>(":scope > .fx");
    if (!fx) return;
    if (e.isIntersecting) { if (!timers.has(h)) tick(h, fx, true); } else stopHost(h);
  }), { threshold: [0, 0.4] });
  hosts.forEach((h) => {
    const fx = document.createElement("i");
    fx.className = "fx";
    fx.setAttribute("aria-hidden", "true");
    h.insertBefore(fx, h.firstChild);
    hio.observe(h);
  });
  cleanups.push(() => {
    hio.disconnect();
    hosts.forEach((h) => { stopHost(h); h.querySelector(":scope > .fx")?.remove(); });
  });

  return () => cleanups.forEach((fn) => fn());
}
