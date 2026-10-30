import type { SectionContent } from "./types";

/**
 * Panel 07 · English Task  (OTOMATIS)
 *
 * Untuk menambah tugas, cukup tambah SATU objek baru di daftar TASKS di bawah ini.
 * Kartu, nomor urut, warna, dan halaman dibuat otomatis untuk tema terang & gelap.
 * Tiap halaman memuat 3 kartu; jika tugas lebih dari 3, muncul tombol panah + penunjuk halaman
 * di kanan atas panel.
 *
 *   title : judul tugas
 *   desc  : deskripsi singkat (1–2 kalimat)
 *   tags  : daftar tag (maks. ±3 agar muat satu baris)
 *   link  : link Google Drive (dibuka di tab baru)
 */
export interface EnglishTask {
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export const TASKS: EnglishTask[] = [
  { title: "Professional Writing for Online Shopping", desc: "A professional assignment document containing an analysis of online shopping texts and a detailed personal experience with e-commerce platforms.", tags: ["[Text]", "[Professional Writting]", "[E-commerce]"], link: "https://docs.google.com/document/d/1jNAPgyHsLfljDtuGPxuHcXc9WxA9IzWHP0jr07YyC0A/edit?usp=sharing" },
  { title: "Self Introduction", desc: "A personal video presentation introducing my background, academic journey, skills, and future career goals in English.", tags: ["[Video]", "[Self Introduction]", "[English Presentation]"], link: "https://drive.google.com/file/d/1LLDPHp3WTW-8kg8ImRazxjdTl6lOcbBv/view?usp=sharing" },
  { title: "Thesis Background & English Journal", desc: "A video presentation explaining the research background and critical analysis of an international English academic journal", tags: ["[Video]", "[Thesis Background]", "[Journal Review]"], link: "https://drive.google.com/drive/folders/1utei0Wj6463enp-YNolrCYk7zseVwszs?usp=sharing" },
];

// ───────────────────────── Pembangun HTML (tidak perlu diubah) ─────────────────────────
const PER_PAGE = 3;
const RADIUS = ["22px 22px 22px 82px", "82px 22px 22px", "22px 82px 22px 22px"];
const THEME = {
  "light": {
    "head": [
      "<div data-dc-tpl=\"8\" style=\"position: absolute; top: -160px; left: auto; width: 280px; height: 280px; border-radius: 50%; background: rgb(255, 229, 59); right: 60px\">",
      "</div>",
      "<div data-dc-tpl=\"9\" style=\"position: absolute; bottom: -90px; left: 640px; width: 380px; height: 380px; border-radius: 55% 45% 60% 40% / 42% 58%; background: rgb(255, 61, 154);\">",
      "</div>",
      "<div data-dc-tpl=\"10\" style=\"position: absolute; top: 300px; right: -80px; width: 200px; height: 200px; border-radius: 50%; border: 38px solid rgba(255, 255, 255, 0.85); box-sizing: border-box\">",
      "</div>",
      "<div data-dc-tpl=\"81\" style=\"position: absolute; inset: 120px 48px 44px 132px; display: flex; flex-direction: column; gap: 22px;\">",
      "<div data-dc-tpl=\"82\" style=\"display: flex; align-items: flex-end; justify-content: space-between; gap: 24px;\">",
      "<div data-dc-tpl=\"83\" style=\"display: flex; align-items: flex-end; gap: 18px;\">",
      "<span data-dc-tpl=\"84\" style=\"font-family: Anton, sans-serif; font-style: italic; font-size: 40px; line-height: 1; color: rgb(255, 229, 59); padding-bottom: 6px; white-space: nowrap; flex: 0 0 auto\">",
      "07 »»",
      "</span>",
      "<h2 data-dc-tpl=\"85\" style=\"margin: 0px; font-family: Anton, sans-serif; font-size: 96px; line-height: 0.9; text-transform: uppercase; color: rgb(255, 255, 255);\">",
      "English Task",
      "</h2>",
      "</div>"
    ],
    "cont": [
      "flex: 1 1 0px; min-width: 0px; position: relative; box-sizing: border-box; background: rgb(255, 255, 255); border-radius: 36px 36px 36px 100px; padding: 18px 18px 24px; display: flex; flex-direction: column; gap: 14px; box-shadow: rgba(20, 18, 80, 0.25) 0px 22px 50px; overflow: hidden",
      "flex: 1 1 0px; min-width: 0px; position: relative; box-sizing: border-box; background: rgb(255, 229, 59); border-radius: 100px 36px 36px; padding: 18px 18px 24px; display: flex; flex-direction: column; gap: 14px; box-shadow: rgba(20, 18, 80, 0.25) 0px 22px 50px; overflow: hidden",
      "flex: 1 1 0px; min-width: 0px; position: relative; box-sizing: border-box; background: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 10px, rgba(255, 255, 255, 0.32) 10px, rgba(255, 255, 255, 0.32) 11px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 10px, rgba(255, 255, 255, 0.32) 10px, rgba(255, 255, 255, 0.32) 11px), rgba(255, 255, 255, 0.3); backdrop-filter: blur(24px) saturate(180%); border: 1.5px solid rgba(255, 255, 255, 0.85); border-radius: 100px 36px; padding: 18px 18px 24px; display: flex; flex-direction: column; gap: 14px; box-shadow: rgba(20, 18, 80, 0.25) 0px 22px 50px, rgba(255, 255, 255, 0.9) 0px 1px 0px inset; overflow: hidden"
    ],
    "tagWrap": [
      "display: flex; flex-wrap: wrap; gap: 6px; padding: 0px 6px; font-family: \"JetBrains Mono\", monospace; font-size: 12px; font-weight: 700; max-height: 30px; overflow: hidden",
      "display: flex; flex-wrap: wrap; gap: 6px; padding: 0px 6px; font-family: \"JetBrains Mono\", monospace; font-size: 12px; font-weight: 700; max-height: 30px; overflow: hidden",
      "display: flex; flex-wrap: wrap; gap: 6px; padding: 0px 6px; font-family: \"JetBrains Mono\", monospace; font-size: 12px; font-weight: 700; max-height: 30px; overflow: hidden"
    ],
    "tag": [
      "background: rgb(241, 244, 251); border-radius: 999px; padding: 6px 12px;",
      "background: rgba(255, 255, 255, 0.8); border-radius: 999px; padding: 6px 12px;",
      "background: rgba(255, 255, 255, 0.8); border-radius: 999px; padding: 6px 12px;"
    ],
    "btnWrap": [
      "display: flex; gap: 10px; padding: 0px 6px; margin-top: auto; font-size: 14px; font-weight: 700; flex: 0 0 auto",
      "display: flex; gap: 10px; padding: 0px 6px; margin-top: auto; font-size: 14px; font-weight: 700; flex: 0 0 auto",
      "display: flex; gap: 10px; padding: 0px 6px; margin-top: auto; font-size: 14px; font-weight: 700; flex: 0 0 auto"
    ],
    "btn": [
      "display: inline-flex; background: rgb(20, 18, 43); color: rgb(255, 255, 255); border-radius: 999px; padding: 12px 22px;",
      "display: inline-flex; background: rgb(20, 18, 43); color: rgb(255, 229, 59); border-radius: 999px; padding: 12px 22px;",
      "display: inline-flex; background: rgb(20, 18, 43); color: rgb(255, 255, 255); border-radius: 999px; padding: 12px 22px;"
    ],
    "bg": [
      "linear-gradient(145deg, rgb(124, 92, 255), rgb(75, 107, 255))",
      "rgb(255, 255, 255)",
      "rgba(255, 255, 255, 0.5)"
    ],
    "num": [
      "rgb(255, 229, 59)",
      "rgb(255, 61, 154)",
      "rgb(20, 18, 43)"
    ],
    "dot": [
      "rgba(255, 255, 255, 0.18)",
      "rgba(255, 229, 59, 0.9)",
      "rgba(255, 61, 154, 0.35)"
    ],
    "title": [
      "",
      "",
      ""
    ],
    "desc": [
      "color: rgb(75, 79, 110)",
      "",
      "color: rgb(30, 28, 58)"
    ]
  },
  "dark": {
    "head": [
      "<div data-dc-tpl=\"8\" style=\"position: absolute; top: -160px; left: auto; width: 280px; height: 280px; border-radius: 50%; background: rgb(255, 229, 59); right: 60px\">",
      "</div>",
      "<div data-dc-tpl=\"9\" style=\"position: absolute; bottom: -90px; left: 640px; width: 380px; height: 380px; border-radius: 55% 45% 60% 40% / 42% 58%; background: rgb(255, 61, 154)\">",
      "</div>",
      "<div data-dc-tpl=\"10\" style=\"position: absolute; top: 300px; right: -80px; width: 200px; height: 200px; border-radius: 50%; border: 38px solid rgba(255, 255, 255, 0.22); box-sizing: border-box\">",
      "</div>",
      "<div data-dc-tpl=\"81\" style=\"position: absolute; inset: 120px 48px 44px 132px; display: flex; flex-direction: column; gap: 22px\">",
      "<div data-dc-tpl=\"82\" style=\"display: flex; align-items: flex-end; justify-content: space-between; gap: 24px\">",
      "<div data-dc-tpl=\"83\" style=\"display: flex; align-items: flex-end; gap: 18px\">",
      "<span data-dc-tpl=\"84\" style=\"font-family: Anton, sans-serif; font-style: italic; font-size: 40px; line-height: 1; color: rgb(255, 229, 59); padding-bottom: 6px; white-space: nowrap; flex: 0 0 auto\">",
      "07 »»",
      "</span>",
      "<h2 data-dc-tpl=\"85\" style=\"margin: 0px; font-family: Anton, sans-serif; font-size: 96px; line-height: 0.9; text-transform: uppercase; color: rgb(255, 255, 255)\">",
      "English Task",
      "</h2>",
      "</div>"
    ],
    "cont": [
      "flex: 1 1 0px; min-width: 0px; position: relative; box-sizing: border-box; background: rgb(33, 30, 58); border-radius: 36px 36px 36px 100px; padding: 18px 18px 24px; display: flex; flex-direction: column; gap: 14px; box-shadow: rgba(20, 18, 80, 0.25) 0px 22px 50px; color: rgb(243, 241, 255); overflow: hidden",
      "flex: 1 1 0px; min-width: 0px; position: relative; box-sizing: border-box; background: rgb(255, 229, 59); border-radius: 100px 36px 36px; padding: 18px 18px 24px; display: flex; flex-direction: column; gap: 14px; box-shadow: rgba(20, 18, 80, 0.25) 0px 22px 50px; overflow: hidden",
      "flex: 1 1 0px; min-width: 0px; position: relative; box-sizing: border-box; background: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 10px, rgba(255, 255, 255, 0.32) 10px, rgba(255, 255, 255, 0.32) 11px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 10px, rgba(255, 255, 255, 0.32) 10px, rgba(255, 255, 255, 0.32) 11px), rgba(20, 18, 43, 0.5); backdrop-filter: blur(24px) saturate(180%); border: 1.5px solid rgba(255, 255, 255, 0.22); border-radius: 100px 36px; padding: 18px 18px 24px; display: flex; flex-direction: column; gap: 14px; box-shadow: rgba(20, 18, 80, 0.25) 0px 22px 50px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset; color: rgb(243, 241, 255); overflow: hidden"
    ],
    "tagWrap": [
      "display: flex; flex-wrap: wrap; gap: 6px; padding: 0px 6px; font-family: \"JetBrains Mono\", monospace; font-size: 12px; font-weight: 700; color: rgb(243, 241, 255); max-height: 30px; overflow: hidden",
      "display: flex; flex-wrap: wrap; gap: 6px; padding: 0px 6px; font-family: \"JetBrains Mono\", monospace; font-size: 12px; font-weight: 700; max-height: 30px; overflow: hidden",
      "display: flex; flex-wrap: wrap; gap: 6px; padding: 0px 6px; font-family: \"JetBrains Mono\", monospace; font-size: 12px; font-weight: 700; color: rgb(243, 241, 255); max-height: 30px; overflow: hidden"
    ],
    "tag": [
      "background: rgb(48, 44, 84); border-radius: 999px; padding: 6px 12px; color: rgb(243, 241, 255)",
      "background: rgba(20, 18, 43, 0.75); border-radius: 999px; padding: 6px 12px; color: rgb(243, 241, 255)",
      "background: rgba(20, 18, 43, 0.75); border-radius: 999px; padding: 6px 12px; color: rgb(243, 241, 255)"
    ],
    "btnWrap": [
      "display: flex; gap: 10px; padding: 0px 6px; margin-top: auto; font-size: 14px; font-weight: 700; color: rgb(243, 241, 255); flex: 0 0 auto",
      "display: flex; gap: 10px; padding: 0px 6px; margin-top: auto; font-size: 14px; font-weight: 700; flex: 0 0 auto",
      "display: flex; gap: 10px; padding: 0px 6px; margin-top: auto; font-size: 14px; font-weight: 700; color: rgb(243, 241, 255); flex: 0 0 auto"
    ],
    "btn": [
      "display: inline-flex; background: rgb(12, 10, 26); color: rgb(255, 255, 255); border-radius: 999px; padding: 12px 22px",
      "display: inline-flex; background: rgb(20, 18, 43); color: rgb(255, 229, 59); border-radius: 999px; padding: 12px 22px",
      "display: inline-flex; background: rgb(12, 10, 26); color: rgb(255, 255, 255); border-radius: 999px; padding: 12px 22px"
    ],
    "bg": [
      "linear-gradient(145deg, rgb(124, 92, 255), rgb(75, 107, 255))",
      "rgb(33, 30, 58)",
      "rgba(20, 18, 43, 0.6)"
    ],
    "num": [
      "rgb(255, 229, 59)",
      "rgb(255, 61, 154)",
      "rgb(243, 241, 255)"
    ],
    "dot": [
      "rgba(255, 255, 255, 0.18)",
      "rgba(255, 229, 59, 0.25)",
      "rgba(255, 61, 154, 0.35)"
    ],
    "title": [
      "color: rgb(243, 241, 255)",
      "",
      "color: rgb(243, 241, 255)"
    ],
    "desc": [
      "color: rgb(169, 174, 201)",
      "",
      "color: rgb(228, 226, 250)"
    ]
  }
};

const esc = (s: string): string => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const attr = (style: string): string => (style.includes('"') ? "style='" + style + "'" : 'style="' + style + '"');

function build(t: "light" | "dark"): string {
  const T = THEME[t];
  const pages = Math.max(1, Math.ceil(TASKS.length / PER_PAGE));
  const h: string[] = [...T.head];

  // kanan atas: panah + penunjuk halaman (hanya jika lebih dari 1 halaman)
  if (pages > 1) {
    const btn = 'width: 52px; height: 52px; border-radius: 50%; border: none; background: rgb(20, 18, 43); display: flex; align-items: center; justify-content: center; cursor: pointer';
    const svg = (d: string): string => '<svg fill="none" height="22" stroke="#FFE53B" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" width="22"><path d="' + d + '"></path></svg>';
    h.push('<div style="display: flex; align-items: center; gap: 14px; margin-bottom: 6px;">');
    h.push('<button type="button" aria-label="Previous tasks" data-task-nav="-1" style="' + btn + '">' + svg("M19 12H5M11 6l-6 6 6 6") + "</button>");
    h.push('<span data-task-count style=\'font-family: "JetBrains Mono", monospace; font-size: 14px; font-weight: 700; color: rgb(255, 255, 255); min-width: 52px; text-align: center\'>1 / ' + pages + "</span>");
    h.push('<button type="button" aria-label="Next tasks" data-task-nav="1" style="' + btn + '">' + svg("M5 12h14M13 6l6 6-6 6") + "</button>");
    h.push("</div>");
  }
  h.push("</div>"); // tutup baris header

  h.push('<div data-task-pages style="flex: 1 1 auto; min-height: 0px; display: flex; flex-direction: column;">');
  for (let p = 0; p < pages; p++) {
    h.push('<div data-task-page="' + p + '" style="flex: 1 1 auto; min-height: 0px; display: ' + (p === 0 ? "flex" : "none") + '; gap: 24px; align-items: stretch;">');
    for (let k = 0; k < PER_PAGE; k++) {
      const i = p * PER_PAGE + k;
      const task = TASKS[i];
      if (!task) {
        h.push('<div style="flex: 1 1 0px; min-width: 0px"></div>');
        continue;
      }
      const c = i % 3;
      h.push("<div " + attr(T.cont[c]) + ">");
      h.push("<div " + attr("position: relative; height: 150px; border-radius: " + RADIUS[c] + "; overflow: hidden; background: " + T.bg[c] + "; display: flex; align-items: center; padding: 0px 28px; box-sizing: border-box; flex: 0 0 auto") + ">");
      h.push("<div " + attr("position: absolute; right: -34px; top: -34px; width: 150px; height: 150px; border-radius: 50%; background: " + T.dot[c]) + "></div>");
      h.push("<span " + attr("position: relative; font-family: Anton, sans-serif; font-style: italic; font-size: 112px; line-height: 1; color: " + T.num[c]) + ">" + String(i + 1).padStart(2, "0") + "</span>");
      h.push("</div>");
      h.push('<div style="display: flex; flex-direction: column; gap: 8px; padding: 0px 6px;">');
      h.push("<span " + attr("font-family: Anton, sans-serif; font-size: 26px; line-height: 1.05; text-transform: uppercase; " + (T.title[c] ? T.title[c] + "; " : "") + "display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; min-width: 0; min-height: 55px") + ">" + esc(task.title) + "</span>");
      h.push("<span " + attr("font-size: 14px; line-height: 1.45; " + (T.desc[c] ? T.desc[c] + "; " : "") + "display: -webkit-box; overflow: hidden; -webkit-line-clamp: 4; -webkit-box-orient: vertical; min-height: 81px") + ">" + esc(task.desc) + "</span>");
      h.push("</div>");
      h.push("<div " + attr(T.tagWrap[c]) + ">");
      task.tags.forEach((tag) => h.push("<span " + attr(T.tag[c]) + ">" + esc(tag) + "</span>"));
      h.push("</div>");
      h.push("<div " + attr(T.btnWrap[c]) + ">");
      h.push('<a data-task="' + (i + 1) + '" href="' + esc(task.link).replace(/"/g, "&quot;") + '" target="_blank" rel="noopener noreferrer" ' + attr(T.btn[c]) + ">Open Task ↗</a>");
      h.push("</div>");
      h.push("</div>");
    }
    h.push("</div>");
  }
  h.push("</div>"); // tutup data-task-pages
  h.push("</div>"); // tutup kontainer panel
  return h.join("");
}

export const english: SectionContent = {
  id: "english-task",
  title: "English Task",
  light: build("light"),
  dark: build("dark"),
};
