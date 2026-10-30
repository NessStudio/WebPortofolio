import type { SectionContent } from "./types";

/**
 * Panel 06 · Projects  (OTOMATIS — sama seperti English Task)
 *
 * Untuk menambah proyek, cukup tambah SATU objek baru di daftar PROJECTS di bawah ini.
 * Kartu, warna, bentuk sudut, dan halaman dibuat otomatis untuk tema terang & gelap.
 * Tiap halaman memuat 3 kartu; jika proyek lebih dari 3, muncul tombol panah + penunjuk halaman
 * di kanan atas panel.
 *
 *   title    : judul proyek
 *   desc     : deskripsi singkat (1–3 kalimat)
 *   meta     : keterangan kecil di kanan status, mis. "Website · 2026"
 *   tags     : daftar tag (maks. ±3 agar muat satu baris)
 *   links    : daftar tombol { label, href }. Tombol pertama berwarna penuh, berikutnya outline
 *   status   : (opsional) label status, default "DONE"
 *   featured : (opsional) true → lencana "★ FEATURED" di gambar
 *   image    : (opsional) path gambar, mis. "/images/projects/proyek-4.png" (taruh file di public/images/projects/).
 *              Tanpa ini, dipakai slot "project-<nomor>" dari content/images.ts; jika kosong → placeholder.
 */
export interface Project {
  title: string;
  desc: string;
  meta: string;
  tags: string[];
  links: { label: string; href: string }[];
  status?: string;
  featured?: boolean;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Redesign & maintenance of the SMK Muhammadiyah 1 Playen website",
    desc: "Upgraded and maintained SMK Muhammadiyah 1 Playen's web presence with a modern UI design, optimized performance, and seamless access to school announcements and student services.",
    meta: "Website · 2026",
    tags: ["WordPress", "PHP", "UI/UX Design"],
    links: [
      { label: "Visit Web ↗", href: "https://muspla.sch.id/" },
      { label: "GitHub", href: "https://github.com/NessStudio" },
    ],
    featured: true,
    image: "/images/projects/proyek-1.png",
  },
  {
    title: "Pathora Dashboard",
    desc: "An analytical dashboard developed using Streamlit and Python to simplify complex data exploration and visualization.",
    meta: "Data Science · 2026",
    tags: ["Streamlit", "Python", "Data Analytics"],
    links: [{ label: "GitHub ↗", href: "https://github.com/NessStudio" }],
    image: "/images/projects/proyek-2.png",
  },
  {
    title: "Vroomy UI/UX Design",
    desc: "An intuitive and sleek user interface designed in Figma for Vroomy, a conceptual luxury car rental platform.",
    meta: "UI/UX Design · 2024",
    tags: ["Figma", "UI/UX Design", "Prototyping"],
    links: [
      {
        label: "Prototype ↗",
        href: "https://www.figma.com/proto/kcEly3r0vFax5UAlp87gYz/Responsi-APPl?node-id=49-627&p=f&t=9u4Yb1BKxj0xxVIA-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=38%3A186&show-proto-sidebar=1",
      },
    ],
    image: "/images/projects/proyek-3.png",
  },
];

/** Tombol "View all projects" di kanan atas */
const VIEW_ALL = "https://github.com/NessStudio";

// ───────────────────────── Pembangun HTML (tidak perlu diubah) ─────────────────────────
const PER_PAGE = 3;
const CARD_RADIUS = ["36px 36px 36px 100px", "100px 36px 36px", "100px 36px"];
const IMG_RADIUS = ["22px 22px 22px 82px", "82px 22px 22px", "22px 82px 22px 22px"];

const STRIPES =
  "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 10px, rgba(255, 255, 255, 0.32) 10px, rgba(255, 255, 255, 0.32) 11px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 10px, rgba(255, 255, 255, 0.32) 10px, rgba(255, 255, 255, 0.32) 11px)";

const LIGHT_TXT = "rgb(243, 241, 255)";

interface Tone {
  card: string; // background (+ border) kartu
  cardShadow: string;
  text: string; // warna teks dasar kartu ("" = warisan)
  imgBg: string;
  chip: string; // gaya chip placeholder
  status: string;
  meta: string;
  title: string;
  desc: string;
  tag: string;
  btn: string;
  btnOut: string;
}

const SHADOW = "rgba(20, 18, 80, 0.25) 0px 22px 50px";

const TONES: Record<"light" | "dark", Tone[]> = {
  light: [
    {
      card: "background: rgb(255, 255, 255)",
      cardShadow: SHADOW,
      text: "",
      imgBg: "linear-gradient(145deg, rgb(124, 92, 255), rgb(75, 107, 255))",
      chip: "background: rgba(255, 255, 255, 0.5); border: 1.5px solid rgba(255, 255, 255, 0.85)",
      status: "background: rgb(29, 224, 160)",
      meta: "color: rgb(75, 79, 110)",
      title: "",
      desc: "color: rgb(75, 79, 110)",
      tag: "background: rgb(241, 244, 251)",
      btn: "background: rgb(20, 18, 43); color: rgb(255, 255, 255)",
      btnOut: "border: 2px solid rgb(20, 18, 43)",
    },
    {
      card: "background: rgb(255, 229, 59)",
      cardShadow: SHADOW,
      text: "",
      imgBg: "rgb(255, 255, 255)",
      chip: "background: rgba(255, 255, 255, 0.55); border: 1.5px solid rgba(255, 255, 255, 0.85)",
      status: "background: rgb(255, 255, 255)",
      meta: "",
      title: "",
      desc: "",
      tag: "background: rgba(255, 255, 255, 0.8)",
      btn: "background: rgb(20, 18, 43); color: rgb(255, 229, 59)",
      btnOut: "border: 2px solid rgb(20, 18, 43)",
    },
    {
      card: "background: " + STRIPES + ", rgba(255, 255, 255, 0.3); backdrop-filter: blur(24px) saturate(180%); border: 1.5px solid rgba(255, 255, 255, 0.85)",
      cardShadow: SHADOW + ", rgba(255, 255, 255, 0.9) 0px 1px 0px inset",
      text: "",
      imgBg: "rgba(255, 255, 255, 0.5)",
      chip: "background: rgba(255, 255, 255, 0.55); border: 1.5px solid rgba(255, 255, 255, 0.85)",
      status: "background: rgb(255, 255, 255)",
      meta: "",
      title: "",
      desc: "color: rgb(30, 28, 58)",
      tag: "background: rgba(255, 255, 255, 0.8)",
      btn: "background: rgb(20, 18, 43); color: rgb(255, 255, 255)",
      btnOut: "border: 2px solid rgb(20, 18, 43)",
    },
  ],
  dark: [
    {
      card: "background: rgb(33, 30, 58)",
      cardShadow: SHADOW,
      text: "color: " + LIGHT_TXT,
      imgBg: "linear-gradient(145deg, rgb(124, 92, 255), rgb(75, 107, 255))",
      chip: "background: rgba(20, 18, 43, 0.6); border: 1.5px solid rgba(255, 255, 255, 0.22); color: " + LIGHT_TXT,
      status: "background: rgb(29, 224, 160)",
      meta: "color: rgb(169, 174, 201)",
      title: "color: " + LIGHT_TXT,
      desc: "color: rgb(169, 174, 201)",
      tag: "background: rgb(48, 44, 84); color: " + LIGHT_TXT,
      btn: "background: rgb(12, 10, 26); color: rgb(255, 255, 255)",
      btnOut: "border: 2px solid rgba(243, 241, 255, 0.8); color: " + LIGHT_TXT,
    },
    {
      card: "background: rgb(255, 229, 59)",
      cardShadow: SHADOW,
      text: "",
      imgBg: "rgb(33, 30, 58); color: " + LIGHT_TXT,
      chip: "background: rgba(20, 18, 43, 0.62); border: 1.5px solid rgba(255, 255, 255, 0.22); color: " + LIGHT_TXT,
      status: "background: rgb(33, 30, 58); color: " + LIGHT_TXT,
      meta: "",
      title: "",
      desc: "",
      tag: "background: rgba(20, 18, 43, 0.75); color: " + LIGHT_TXT,
      btn: "background: rgb(20, 18, 43); color: rgb(255, 229, 59)",
      btnOut: "border: 2px solid rgb(20, 18, 43)",
    },
    {
      card: "background: " + STRIPES + ", rgba(20, 18, 43, 0.5); backdrop-filter: blur(24px) saturate(180%); border: 1.5px solid rgba(255, 255, 255, 0.22)",
      cardShadow: SHADOW + ", rgba(255, 255, 255, 0.2) 0px 1px 0px inset",
      text: "color: " + LIGHT_TXT,
      imgBg: "rgba(20, 18, 43, 0.6); color: " + LIGHT_TXT,
      chip: "background: rgba(20, 18, 43, 0.62); border: 1.5px solid rgba(255, 255, 255, 0.22); color: " + LIGHT_TXT,
      status: "background: rgb(33, 30, 58); color: " + LIGHT_TXT,
      meta: "",
      title: "color: " + LIGHT_TXT,
      desc: "color: rgb(228, 226, 250)",
      tag: "background: rgba(20, 18, 43, 0.75); color: " + LIGHT_TXT,
      btn: "background: rgb(12, 10, 26); color: rgb(255, 255, 255)",
      btnOut: "border: 2px solid rgba(243, 241, 255, 0.8); color: " + LIGHT_TXT,
    },
  ],
};

/** Tiga ilustrasi placeholder (dipakai bergantian bila proyek belum punya gambar). */
const placeholder = (c: number, t: "light" | "dark"): string => {
  const line = t === "light" ? "#14122B" : "#F3F1FF";
  const inner = [
    '<circle cx="120" cy="110" fill="#2EE6FF" r="76"></circle><circle cx="200" cy="110" fill="#FFE53B" fill-opacity="0.92" r="76"></circle><rect fill="#FF3D9A" height="140" rx="40" width="80" x="270" y="30"></rect>',
    '<path d="M0 170 C 80 90 160 200 260 110 C 320 60 360 90 380 70 L380 220 L0 220Z" fill="#FF3D9A"></path><circle cx="110" cy="80" fill="#7C5CFF" r="44"></circle><circle cx="290" cy="60" fill="#2EE6FF" r="26"></circle>',
    '<rect fill="#FFE53B" height="130" rx="65" width="130" x="40" y="40"></rect><circle cx="240" cy="120" fill="#FF3D9A" r="60"></circle><path d="M20 190 H360" stroke="' + line + '" stroke-linecap="round" stroke-width="6"></path>',
  ][c];
  return '<svg class="slot-ph" height="100%" preserveaspectratio="xMidYMid slice" style="position: absolute; inset: 0px;" viewbox="0 0 380 220" width="100%">' + inner + "</svg>";
};

const esc = (s: string): string => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s: string): string => esc(s).replace(/"/g, "&quot;");
const MONO = "font-family: &quot;JetBrains Mono&quot;, monospace";

function build(t: "light" | "dark"): string {
  const tones = TONES[t];
  const pages = Math.max(1, Math.ceil(PROJECTS.length / PER_PAGE));
  const white = t === "light" ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.22)";
  const h: string[] = [];

  // Hiasan latar panel
  h.push('<div style="position: absolute; top: -160px; left: auto; width: 280px; height: 280px; border-radius: 50%; background: rgb(255, 229, 59); right: 60px"></div>');
  h.push('<div style="position: absolute; bottom: -90px; left: 640px; width: 380px; height: 380px; border-radius: 55% 45% 60% 40% / 42% 58%; background: rgb(255, 61, 154)"></div>');
  h.push('<div style="position: absolute; top: 300px; right: -80px; width: 200px; height: 200px; border-radius: 50%; border: 38px solid ' + white + '; box-sizing: border-box"></div>');

  // Kontainer + header
  h.push('<div style="position: absolute; inset: 120px 48px 44px 132px; display: flex; flex-direction: column; gap: 22px">');
  h.push('<div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 24px">');
  h.push('<div style="display: flex; align-items: flex-end; gap: 18px">');
  h.push('<span style="font-family: Anton, sans-serif; font-style: italic; font-size: 40px; line-height: 1; color: rgb(255, 229, 59); padding-bottom: 6px; white-space: nowrap; flex: 0 0 auto">06 »»</span>');
  h.push('<h2 style="margin: 0px; font-family: Anton, sans-serif; font-size: 96px; line-height: 0.9; text-transform: uppercase; color: rgb(255, 255, 255)">Projects</h2>');
  h.push("</div>");

  // kanan atas: [panah + penunjuk halaman jika > 1 halaman] + "View all projects"
  h.push('<div style="display: flex; align-items: center; gap: 22px; margin-bottom: 6px">');
  if (pages > 1) {
    const btn = "width: 52px; height: 52px; border-radius: 50%; border: none; background: rgb(20, 18, 43); display: flex; align-items: center; justify-content: center; cursor: pointer";
    const svg = (d: string): string => '<svg fill="none" height="22" stroke="#FFE53B" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" width="22"><path d="' + d + '"></path></svg>';
    h.push('<div style="display: flex; align-items: center; gap: 14px">');
    h.push('<button type="button" aria-label="Previous projects" data-task-nav="-1" style="' + btn + '">' + svg("M19 12H5M11 6l-6 6 6 6") + "</button>");
    h.push("<span data-task-count style='font-family: \"JetBrains Mono\", monospace; font-size: 14px; font-weight: 700; color: rgb(255, 255, 255); min-width: 52px; text-align: center'>1 / " + pages + "</span>");
    h.push('<button type="button" aria-label="Next projects" data-task-nav="1" style="' + btn + '">' + svg("M5 12h14M13 6l6 6-6 6") + "</button>");
    h.push("</div>");
  }
  h.push(
    '<a href="' + escAttr(VIEW_ALL) + '" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background: rgb(20, 18, 43); color: rgb(255, 229, 59); border-radius: 999px; padding: 14px 26px; ' +
      MONO + '; font-size: 14px; font-weight: 700; white-space: nowrap">View all projects ↗</a>'
  );
  h.push("</div>"); // kanan atas
  h.push("</div>"); // baris header

  // Halaman kartu
  h.push('<div data-task-pages style="flex: 1 1 auto; min-height: 0px; display: flex; flex-direction: column">');
  for (let p = 0; p < pages; p++) {
    h.push('<div data-task-page="' + p + '" style="flex: 1 1 auto; min-height: 0px; display: ' + (p === 0 ? "flex" : "none") + '; gap: 24px; align-items: stretch">');
    for (let k = 0; k < PER_PAGE; k++) {
      const i = p * PER_PAGE + k;
      const pr = PROJECTS[i];
      if (!pr) {
        h.push('<div style="flex: 1 1 0px; min-width: 0px"></div>');
        continue;
      }
      const c = i % 3;
      const T = tones[c];
      const n = i + 1;

      h.push(
        '<div style="flex: 1 1 0px; min-width: 0px; position: relative; box-sizing: border-box; ' + T.card + "; border-radius: " + CARD_RADIUS[c] +
          "; padding: 18px 18px 24px; display: flex; flex-direction: column; gap: 14px; box-shadow: " + T.cardShadow + "; " + (T.text ? T.text + "; " : "") + 'overflow: hidden">'
      );

      // gambar
      h.push('<div class="slot" style="position: relative; height: 220px; border-radius: ' + IMG_RADIUS[c] + "; overflow: hidden; background: " + T.imgBg + '">');
      h.push(placeholder(c, t));
      if (pr.featured) {
        h.push("<span style='position: absolute; top: 14px; left: 14px; background: rgb(255, 229, 59); border-radius: 999px; padding: 6px 14px; font-family: \"JetBrains Mono\", monospace; font-weight: 700; font-size: 12px; z-index: 3; color: rgb(20, 18, 43)'>★ FEATURED</span>");
      }
      h.push("<span class=\"slot-ph\" style='position: absolute; right: 14px; bottom: " + (c === 2 ? 30 : 14) + "px; " + T.chip + "; backdrop-filter: blur(14px); border-radius: 999px; padding: 7px 14px; font-family: \"JetBrains Mono\", monospace; font-weight: 700; font-size: 12px'>[PROJECT IMAGE]</span>");
      h.push('<img alt="' + escAttr(pr.title) + '" class="slot-img" data-slot="project-' + n + '"' + (pr.image ? ' src="' + escAttr(pr.image) + '"' : "") + "/>");
      h.push("</div>");

      // status + meta
      h.push("<div style='display: flex; align-items: center; justify-content: space-between; padding: 0px 6px; font-family: \"JetBrains Mono\", monospace; font-size: 12px; font-weight: 700; gap: 10px'>");
      h.push('<span style="' + T.status + '; border-radius: 999px; padding: 5px 12px; white-space: nowrap; flex: 0 0 auto">' + esc(pr.status ?? "DONE") + "</span>");
      h.push('<span style="' + (T.meta ? T.meta + "; " : "") + 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; text-align: right">' + esc(pr.meta) + "</span>");
      h.push("</div>");

      // judul + deskripsi
      h.push('<div style="display: flex; flex-direction: column; gap: 8px; padding: 0px 6px">');
      h.push('<span style="font-family: Anton, sans-serif; font-size: 24px; line-height: 1.05; text-transform: uppercase; ' + (T.title ? T.title + "; " : "") + 'display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; min-width: 0; min-height: 50px">' + esc(pr.title) + "</span>");
      h.push('<span style="font-size: 14px; line-height: 1.45; ' + (T.desc ? T.desc + "; " : "") + 'display: -webkit-box; overflow: hidden; -webkit-line-clamp: 4; -webkit-box-orient: vertical; min-height: 81px">' + esc(pr.desc) + "</span>");
      h.push("</div>");

      // tag
      h.push("<div style='display: flex; flex-wrap: wrap; gap: 6px; padding: 0px 6px; font-family: \"JetBrains Mono\", monospace; font-size: 12px; font-weight: 700; " + (T.text ? T.text + "; " : "") + "max-height: 30px; overflow: hidden'>");
      pr.tags.forEach((tag) => h.push('<span style="' + T.tag + '; border-radius: 999px; padding: 6px 12px">' + esc(tag) + "</span>"));
      h.push("</div>");

      // tombol
      h.push('<div style="display: flex; gap: 10px; padding: 0px 6px; margin-top: auto; font-size: 14px; font-weight: 700; ' + (T.text ? T.text + "; " : "") + 'flex: 0 0 auto">');
      pr.links.forEach((l, j) => {
        const st = j === 0 ? T.btn + "; padding: 12px 22px" : T.btnOut + "; padding: 10px 22px";
        h.push('<a href="' + escAttr(l.href) + '" target="_blank" rel="noopener noreferrer" style="display: inline-flex; border-radius: 999px; ' + st + '">' + esc(l.label) + "</a>");
      });
      h.push("</div>");

      h.push("</div>"); // kartu
    }
    h.push("</div>"); // halaman
  }
  h.push("</div>"); // data-task-pages
  h.push("</div>"); // kontainer panel
  return h.join("");
}

export const projects: SectionContent = {
  id: "projects",
  title: "Projects",
  light: build("light"),
  dark: build("dark"),
};
