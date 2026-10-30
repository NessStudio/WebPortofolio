import { GRADIENTS } from "../content/gradients";
import { openCertificates, closeCertificates } from "./certModal";

type ThemeKey = "l" | "d";

const IDS = ["home", "about", "skills", "experience", "certificates", "projects", "english-task", "contact"];
const LAST = IDS.length - 1;
const TITLES = ["Home", "About", "Skills", "Experience", "Certificates", "Projects", "English Task", "Contact"];

interface StageRefs {
  g: HTMLElement;
  p: HTMLElement;
  sc: HTMLElement;
  ob: HTMLElement[];
  sb: HTMLElement[];
  nv: HTMLElement[];
  sa: string;
  si: string;
  na: string;
  ni: string;
}



const all = (parent: ParentNode, sel: string): HTMLElement[] =>
  Array.from(parent.querySelectorAll<HTMLElement>(sel));

const one = (parent: ParentNode, sel: string): HTMLElement => {
  const el = parent.querySelector<HTMLElement>(sel);
  if (!el) throw new Error("Element not found: " + sel);
  return el;
};

/** Simpan style awal sekali saja (aman untuk React StrictMode yang menjalankan effect dua kali). */
const stash = (el: HTMLElement, key: string): string => {
  if (el.dataset[key] === undefined) el.dataset[key] = el.getAttribute("style") ?? "";
  return el.dataset[key] as string;
};

const mix = (a: number, b: number, t: number): number => a + (b - a) * t;

/**
 * Menyalakan seluruh perilaku halaman: scroll satu halaman, transisi gradien antar panel,
 * navigasi tetap, tema terang/gelap, routing #anchor antar panel, dan animasi tombol.
 * Mengembalikan fungsi cleanup.
 */
export function initPortfolio(): () => void {
  const root = document.documentElement;
  const app = document.getElementById("app");
  if (!app) return () => undefined;

  const cleanups: Array<() => void> = [];
  const listen = <K extends keyof DocumentEventMap>(
    target: Document | Window | HTMLElement,
    type: string,
    handler: (e: Event) => void,
    opts?: AddEventListenerOptions
  ): void => {
    target.addEventListener(type, handler, opts);
    cleanups.push(() => target.removeEventListener(type, handler, opts));
  };

  let theme: "dark" | "light" = root.getAttribute("data-theme") === "light" ? "light" : "dark";
  root.setAttribute("data-theme", theme);

  const build = (k: ThemeKey): StageRefs => {
    const g = one(app, ".stg." + k);
    const p = one(g, '[data-dc-tpl="7"]');
    const sb = all(g, ".sb-i");
    const nv = all(g, "nav a");
    const o: StageRefs = {
      g,
      p,
      sc: one(g, ".sc"),
      ob: all(g, ".obl"),
      sb,
      nv,
      sa: stash(sb[0], "sa"),
      si: stash(sb[1], "si"),
      na: stash(nv[0], "na"),
      ni: stash(nv[1], "ni"),
    };

    // Kotak navigasi (dock): kotak utama + sudut cekung
    all(p, "[data-chrome]").forEach((r) => {
      r.classList.add("dkroot");
      Array.from(r.children).forEach((c) => c.classList.add(c.querySelector("a,button") ? "dkbox" : "ntc"));
    });
    g.style.setProperty("--halo", getComputedStyle(one(g, ".dkbox")).backgroundColor);


    // Tombol melayang
    let n = 0;
    all(g, ".dkroot a, .dkroot button").forEach((b) => {
      b.classList.add("hb");
      b.style.setProperty("--i", String(n++));
    });
    all(g, "nav a").forEach((b) => b.classList.add("wt"));
    all(g, ".sc a, .sc button").forEach((b) => {
      const s = b.getAttribute("style") ?? "";
      if (/border-radius: (999px|50%)/.test(s) && !/position: absolute/.test(s)) {
        b.classList.add("hb");
        b.style.setProperty("--i", String(n++));
        const c = getComputedStyle(b);
        const m = c.color.match(/\d+/g);
        if (
          c.backgroundColor === "rgba(0, 0, 0, 0)" &&
          c.backgroundImage === "none" &&
          m &&
          +m[0] > 230 &&
          +m[1] > 230 &&
          +m[2] > 230
        ) {
          b.classList.add("wt");
        }
      }
    });
    return o;
  };

  const st: Record<ThemeKey, StageRefs> = { l: build("l"), d: build("d") };
  const keys: ThemeKey[] = ["l", "d"];
  const cs = (): StageRefs => (theme === "dark" ? st.d : st.l);
  let cur = -1;

  const title = (i: number): void => {
    document.title = TITLES[i] + " \u00b7 Portfolio";
  };

  const setAct = (a: number): void => {
    keys.forEach((k) => {
      const o = st[k];
      o.sb.forEach((e, i) => e.setAttribute("style", i === a ? o.sa : o.si));
      o.nv.forEach((e, i) => {
        e.setAttribute("style", i === a ? o.na : o.ni);
        e.classList.toggle("act", i === a);
      });
    });
  };

  /** Hitung gradien panel dari posisi scroll: campuran dua panel yang bersebelahan. */
  const upd = (): void => {
    const sc = cs().sc;
    const p = Math.max(0, Math.min(LAST, sc.scrollTop / (sc.clientHeight || 1)));
    const i = Math.min(LAST, Math.floor(p));
    const j = Math.min(LAST, i + 1);
    const f = p - i;
    const t = f * f * (3 - 2 * f);
    const A = GRADIENTS[i];
    const B = GRADIENTS[j];
    const stops = [0, 1, 2].map((k) => {
      const rgb = A.c[k].map((v, q) => Math.round(mix(v, B.c[k][q], t))).join(",");
      return `rgb(${rgb}) ${mix(A.p[k], B.p[k], t).toFixed(1)}%`;
    });
    const bg = `linear-gradient(${mix(A.a, B.a, t)}deg,${stops.join(",")})`;
    keys.forEach((k) => {
      const o = st[k];
      o.p.style.background = bg;
      o.ob.forEach((e, q) => {
        e.style.opacity = String(q === i ? 1 - t : q === j ? t : 0);
      });
    });
    const a = Math.round(p);
    if (a !== cur) {
      cur = a;
      setAct(a);
      title(a);
    }
  };

  /**
   * Panggung mengisi seluruh layar (tanpa ruang kosong): skala desain mengikuti sisi yang lebih sempit,
   * lalu sisi yang lebih lega diperluas, sehingga bingkai dan panel ikut melebar.
   *
   * Di portrait mobile (lebar < 768px), scale berdasarkan LEBAR saja agar konten mengisi
   * layar penuh secara horizontal — tidak zoom out ekstrem seperti di portrait.
   */
  const place = (g: HTMLElement, w: number, h: number): void => {
    const isMobilePortrait = w < 768 && h > w;
    const s = isMobilePortrait ? w / 1440 : Math.min(w / 1440, h / 900);
    g.style.width = w / s + "px";
    g.style.height = h / s + "px";
    g.style.transform = `scale(${s})`;
    g.style.left = "0px";
    g.style.top = "0px";
  };

  const fit = (): void => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const sc = cs().sc;
    const oldH = sc.clientHeight;
    const idx = oldH ? Math.round(sc.scrollTop / oldH) : 0;
    keys.forEach((k) => place(st[k].g, w, h));
    // tetap berada di panel yang sama setelah ukuran berubah
    if (oldH) sc.scrollTo({ top: idx * sc.clientHeight, behavior: "instant" as ScrollBehavior });
  };

  const goto = (id: string, smooth: boolean): void => {
    const i = Math.max(0, IDS.indexOf(id));
    cs().sc.scrollTo({ top: i * cs().sc.clientHeight, behavior: smooth ? "smooth" : ("instant" as ScrollBehavior) });
  };

  const route = (smooth: boolean): void => {
    const h = (location.hash || "#home").slice(1);
    goto(h, smooth);
  };

  // Projects & English Task: pindah halaman kartu (3 kartu per halaman), per panel, kedua tema ikut berubah
  const showTaskPage = (sectionId: string, delta: number): void => {
    const wraps = all(document, `.ks[data-section="${sectionId}"] [data-task-pages]`);
    if (!wraps.length) return;
    const first = all(wraps[0], "[data-task-page]");
    if (!first.length) return;
    const cur = Math.max(0, first.findIndex((p) => p.style.display !== "none"));
    const next = (cur + delta + first.length) % first.length;
    wraps.forEach((wrap) => {
      all(wrap, "[data-task-page]").forEach((p, i) => {
        p.style.display = i === next ? "flex" : "none";
      });
      const sec = wrap.closest(".ks");
      if (sec) all(sec, "[data-task-count]").forEach((e) => (e.textContent = next + 1 + " / " + first.length));
    });
  };

  // Klik: tema + semua tautan #anchor
  listen(document, "click", (e) => {
    const target = e.target as Element | null;
    if (!target || !target.closest) return;
    if (target.closest('[aria-label="Toggle theme"]')) {
      const top = cs().sc.scrollTop;
      theme = theme === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", theme);
      try {
        localStorage.setItem("pf-theme", theme);
      } catch {
        /* abaikan */
      }
      cs().sc.scrollTo({ top, behavior: "instant" as ScrollBehavior });
      return;
    }
    const tn = target.closest<HTMLElement>("[data-task-nav]");
    if (tn) {
      e.preventDefault();
      const secId = tn.closest<HTMLElement>(".ks")?.dataset.section;
      if (secId) showTaskPage(secId, Number(tn.dataset.taskNav));
      return;
    }
    const cert = target.closest<HTMLElement>("[data-cert],[data-cert-all]");
    if (cert) {
      e.preventDefault();
      openCertificates(cs().g, cert.dataset.cert ? Number(cert.dataset.cert) : "all");
      return;
    }
    const a = target.closest('a[href^="#"]');
    if (!a) return;
    e.preventDefault();
    const h = (a.getAttribute("href") ?? "#home").slice(1);
    if (location.hash.slice(1) === h) {
      route(true);
      return;
    }
    history.pushState(null, "", "#" + h);
    route(true);
  });

  // Scroll tiap panel
  let tm: number | undefined;
  keys.forEach((k) => {
    listen(st[k].sc, "scroll", () => {
      if (st[k] !== cs()) return;
      upd();
      window.clearTimeout(tm);
      tm = window.setTimeout(() => {
        const i = Math.min(LAST, Math.round(st[k].sc.scrollTop / (st[k].sc.clientHeight || 1)));
        history.replaceState(null, "", "#" + IDS[i]);
      }, 150);
    }, { passive: true });
  });
  cleanups.push(() => window.clearTimeout(tm));

  // Animasi tekan (pop) pada tombol. Navbar & sidebar tetap satu kotak utuh saat diklik.
  listen(document, "pointerdown", (e) => {
    const b = (e.target as Element | null)?.closest(".hb");
    if (!b) return;
    b.classList.add("pop");
    window.setTimeout(() => b.classList.remove("pop"), 450);
  });

  listen(window, "popstate", () => route(false));
  listen(window, "resize", fit);
  listen(document, "submit", (e) => e.preventDefault());

  fit();
  route(false);
  upd();

  cleanups.push(closeCertificates);
  return () => cleanups.forEach((fn) => fn());
}
