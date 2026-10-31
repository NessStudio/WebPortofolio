import { MOBILE_QUERY } from "../content/mobile";

export const isMobile = (): boolean => window.matchMedia(MOBILE_QUERY).matches;

const IDS = ["home", "about", "skills", "experience", "certificates", "projects", "english-task", "contact"];
const TITLES = ["Home", "About", "Skills", "Experience", "Certificates", "Projects", "English Task", "Contact"];

/** Scroll ke satu section di layout mobile (scroll halaman biasa). */
export function mobileGoto(id: string, smooth: boolean): void {
  const el = document.getElementById(IDS.includes(id) ? id : "home");
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - parseFloat(getComputedStyle(el).scrollMarginTop || "0");
  window.scrollTo({ top: Math.max(0, top), behavior: smooth ? "smooth" : ("instant" as ScrollBehavior) });
}

/**
 * Perilaku layout mobile: penanda section aktif (navigasi bawah + judul bar atas),
 * hash URL mengikuti scroll, dan animasi muncul saat elemen masuk layar.
 */
export function initMobile(): () => void {
  const app = document.getElementById("m-app");
  if (!app) return () => undefined;

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
    navs.forEach((a, k) => {
      a.classList.toggle("act", k === i);
      if (k === i) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
    if (curN) curN.textContent = String(i + 1).padStart(2, "0");
    if (curT) curT.textContent = TITLES[i];
    if (isMobile()) document.title = TITLES[i] + " · Portfolio";
  };

  const spy = (): void => {
    raf = 0;
    if (!isMobile()) return;
    const line = window.innerHeight * 0.4;
    let idx = 0;
    secs.forEach((s, i) => {
      if (s.getBoundingClientRect().top <= line) idx = i;
    });
    // di dasar halaman, section terakhir selalu aktif
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) idx = secs.length - 1;
    setActive(idx);
    window.clearTimeout(hashTm);
    hashTm = window.setTimeout(() => history.replaceState(null, "", "#" + IDS[idx]), 150);
  };
  const onScroll = (): void => {
    if (!raf) raf = requestAnimationFrame(spy);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  cleanups.push(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    cancelAnimationFrame(raf);
    window.clearTimeout(hashTm);
  });

  // Animasi muncul (fade + naik) — aktif setelah loader selesai
  const rv = Array.from(app.querySelectorAll<HTMLElement>(".m-rv"));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    rv.forEach((el) => io.observe(el));
    document.documentElement.classList.add("m-anim");
    cleanups.push(() => {
      io.disconnect();
      document.documentElement.classList.remove("m-anim");
    });
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
