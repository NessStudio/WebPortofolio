import { MOBILE_QUERY } from "../content/mobile";
import { GRADIENTS } from "../content/gradients";

const mix = (a: number, b: number, t: number): number => a + (b - a) * t;

export const isMobile = (): boolean => window.matchMedia(MOBILE_QUERY).matches;

const IDS = ["home", "about", "skills", "experience", "certificates", "projects", "english-task", "contact"];
const TITLES = ["Home", "About", "Skills", "Experience", "Certificates", "Projects", "English Task", "Contact"];

/** Panel tempat semua section ditumpuk (satu section = satu layar penuh di dalam bingkai). */
const panelEl = (): HTMLElement | null => document.querySelector<HTMLElement>("#m-app .m-main");

/** Pindah ke satu section di layout mobile (panel digeser, halaman itu sendiri tidak discroll). */
export function mobileGoto(id: string, smooth: boolean): void {
  const main = panelEl();
  const el = document.getElementById(IDS.includes(id) ? id : "home");
  if (!main || !el) return;
  const top = el.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop;
  main.scrollTo({ top: Math.max(0, top), behavior: smooth ? "smooth" : ("instant" as ScrollBehavior) });
}

/**
 * Perilaku layout mobile: penanda section aktif (navigasi bawah + judul bar atas),
 * hash URL mengikuti halaman, dan animasi muncul setiap halaman dibuka.
 */
export function initMobile(): () => void {
  const app = document.getElementById("m-app");
  const main = panelEl();
  if (!app || !main) return () => undefined;

  const cleanups: Array<() => void> = [];
  const secs = Array.from(app.querySelectorAll<HTMLElement>("[data-m-sec]"));
  const navs = Array.from(app.querySelectorAll<HTMLElement>("[data-m-nav]"));
  const curN = app.querySelector<HTMLElement>("[data-m-cur-n]");
  const curT = app.querySelector<HTMLElement>("[data-m-cur-t]");
  let active = -1;
  let raf = 0;
  let hashTm: number | undefined;

  const setActive = (i: number): void => {
    if (i === active) return;
    active = i;
    secs.forEach((s, k) => s.classList.toggle("on", k === i));
    navs.forEach((a, k) => {
      a.classList.toggle("act", k === i);
      if (k === i) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
    if (curN) curN.textContent = String(i + 1).padStart(2, "0");
    if (curT) curT.textContent = TITLES[i];
    if (isMobile()) document.title = TITLES[i] + " · Portfolio";
  };

  /** Gradien panel = campuran dua section bersebelahan menurut posisi scroll (sama seperti desktop). */
  const blend = (): void => {
    const mt = main.getBoundingClientRect().top;
    const tops = secs.map((e) => e.getBoundingClientRect().top - mt + main.scrollTop);
    const y = main.scrollTop;
    let i = 0;
    tops.forEach((t, k) => {
      if (t <= y + 0.5) i = k;
    });
    const j = Math.min(secs.length - 1, i + 1);
    const span = tops[j] - tops[i];
    const f = i === j || span <= 0 ? 0 : Math.max(0, Math.min(1, (y - tops[i]) / span));
    const t = f * f * (3 - 2 * f);
    const A = GRADIENTS[i];
    const B = GRADIENTS[j];
    const stops = [0, 1, 2].map((k) => {
      const rgb = A.c[k].map((v, q) => Math.round(mix(v, B.c[k][q], t))).join(",");
      return `rgb(${rgb}) ${mix(A.p[k], B.p[k], t).toFixed(1)}%`;
    });
    main.style.background = `linear-gradient(${mix(A.a, B.a, t)}deg,${stops.join(",")})`;
  };

  const spy = (): void => {
    raf = 0;
    if (!isMobile()) return;
    blend();
    const mt = main.getBoundingClientRect().top;
    const line = main.clientHeight * 0.5;
    let idx = 0;
    secs.forEach((s, i) => {
      if (s.getBoundingClientRect().top - mt <= line) idx = i;
    });
    // di dasar panel, section terakhir selalu aktif
    if (main.scrollTop + main.clientHeight >= main.scrollHeight - 4) idx = secs.length - 1;
    setActive(idx);
    window.clearTimeout(hashTm);
    hashTm = window.setTimeout(() => history.replaceState(null, "", "#" + IDS[idx]), 150);
  };
  const onScroll = (): void => {
    if (!raf) raf = requestAnimationFrame(spy);
  };
  main.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  cleanups.push(() => {
    main.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    cancelAnimationFrame(raf);
    window.clearTimeout(hashTm);
  });

  // Animasi muncul (fade + naik): diatur CSS lewat kelas .on pada section aktif
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("m-anim");
    cleanups.push(() => document.documentElement.classList.remove("m-anim"));
  }

  // Slider samping: titik penunjuk halaman mengikuti kartu yang terlihat
  app.querySelectorAll<HTMLElement>("[data-m-slider]").forEach((sl) => {
    const cards = Array.from(sl.children) as HTMLElement[];
    if (cards.length < 2) return;
    const dots = document.createElement("div");
    dots.className = "m-dots-nav";
    dots.setAttribute("aria-hidden", "true");
    cards.forEach((c, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.tabIndex = -1;
      b.addEventListener("click", () => sl.scrollTo({ left: c.offsetLeft - sl.offsetLeft - parseFloat(getComputedStyle(sl).paddingLeft), behavior: "smooth" }));
      dots.appendChild(b);
      if (i === 0) b.className = "on";
    });
    sl.after(dots);
    let r = 0;
    const upd = (): void => {
      r = 0;
      const mid = sl.scrollLeft + sl.clientWidth / 2;
      let best = 0, bd = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - sl.offsetLeft + c.offsetWidth / 2 - mid);
        if (d < bd) { bd = d; best = i; }
      });
      if (sl.scrollLeft + sl.clientWidth >= sl.scrollWidth - 4) best = cards.length - 1;
      Array.from(dots.children).forEach((d, i) => d.classList.toggle("on", i === best));
    };
    const on = (): void => { if (!r) r = requestAnimationFrame(upd); };
    sl.addEventListener("scroll", on, { passive: true });
    cleanups.push(() => { sl.removeEventListener("scroll", on); cancelAnimationFrame(r); dots.remove(); });
  });

  spy();
  return () => cleanups.forEach((fn) => fn());
}
