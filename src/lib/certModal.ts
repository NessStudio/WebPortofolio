import { CERTS_EXTRA } from "../content/certs";
import { IMAGES } from "../content/images";

/**
 * Popup sertifikat (vanilla DOM, dipakai oleh lib/portfolio.ts).
 * Data dibaca dari kartu sertifikat di panggung yang sedang tampil:
 *  - [data-cert-card] kartu, [data-f=issuer|name|date] teks, [data-cert][data-cert-src] gambar besar.
 * Sertifikat tambahan (nomor 7 dst, tanpa kartu di halaman utama) diambil dari content/certs.ts.
 * Gambar sertifikat diisi di src/content/images.ts (kunci certificate-1 … certificate-14).
 */
interface Cert {
  n: number;
  src: string;
  issuer: string;
  name: string;
  date: string;
}

const txt = (root: Element, f: string): string => root.querySelector(`[data-f="${f}"]`)?.textContent?.trim() ?? "";

const imgSrc = (n: number): string => {
  const e = IMAGES[`certificate-${n}`];
  return !e ? "" : typeof e === "string" ? e : e.src;
};

/**
 * Semua sertifikat: kartu di halaman utama (teks dibaca dari DOM) + sertifikat tambahan
 * dari CERTS_EXTRA yang belum punya kartu. Hasil diurutkan menurut nomor.
 */
function collect(stage: HTMLElement): Cert[] {
  const fromCards: Cert[] = Array.from(stage.querySelectorAll<HTMLElement>("[data-cert-card]")).map((card) => {
    const a = card.querySelector<HTMLElement>("[data-cert]");
    const n = Number(card.dataset.certCard);
    return {
      n,
      src: a?.dataset.certSrc || imgSrc(n),
      issuer: txt(card, "issuer"),
      name: txt(card, "name"),
      date: txt(card, "date"),
    };
  });
  const have = new Set(fromCards.map((c) => c.n));
  const extras: Cert[] = Object.entries(CERTS_EXTRA)
    .map(([k, m]) => ({ n: Number(k), src: imgSrc(Number(k)), issuer: m.issuer, name: m.name, date: m.date }))
    .filter((c) => !have.has(c.n));
  return [...fromCards, ...extras].sort((a, b) => a.n - b.n);
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls: string, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

let close: (() => void) | null = null;

export function openCertificates(stage: HTMLElement, mode: "all" | number): void {
  close?.();
  const certs = collect(stage);
  if (!certs.length) return;
  const opener = document.activeElement as HTMLElement | null;
  let view: "grid" | "single" = mode === "all" ? "grid" : "single";
  let idx = mode === "all" ? 0 : Math.max(0, certs.findIndex((c) => c.n === mode));
  let fromGrid = mode === "all";

  const root = el("div", "cm");
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-label", "Certificates");
  const box = el("div", "cm-box");
  root.appendChild(box);

  const btn = (cls: string, label: string, text: string, fn: () => void): HTMLButtonElement => {
    const b = el("button", cls, text);
    b.type = "button";
    b.setAttribute("aria-label", label);
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      fn();
    });
    return b;
  };

  const frame = (c: Cert, cls: string): HTMLElement => {
    const f = el("div", cls);
    if (c.src) {
      const im = document.createElement("img");
      im.src = c.src;
      im.alt = `${c.name} — ${c.issuer}`;
      im.draggable = false;
      f.appendChild(im);
    } else {
      f.classList.add("cm-empty");
      f.appendChild(el("span", "", "[CERTIFICATE IMAGE]"));
    }
    return f;
  };

  const render = (): void => {
    box.replaceChildren();
    const head = el("div", "cm-head");
    const titles = el("div", "cm-titles");
    if (view === "grid") {
      titles.append(el("span", "cm-kicker", "ALL CERTIFICATES"), el("span", "cm-title", `${certs.length} certificates`));
    } else {
      const c = certs[idx];
      titles.append(el("span", "cm-kicker", c.issuer), el("span", "cm-title", c.name));
    }
    const actions = el("div", "cm-actions");
    if (view === "single" && fromGrid) actions.appendChild(btn("cm-btn", "Back to all", "← All", () => ((view = "grid"), render())));
    actions.appendChild(btn("cm-btn cm-x", "Close", "✕", () => close?.()));
    head.append(titles, actions);
    box.appendChild(head);

    if (view === "grid") {
      const grid = el("div", "cm-grid");
      certs.forEach((c, i) => {
        const item = el("button", "cm-item");
        item.type = "button";
        item.append(frame(c, "cm-thumb"), el("span", "cm-cap", c.name), el("span", "cm-sub", c.issuer));
        item.addEventListener("click", (e) => {
          e.stopPropagation();
          idx = i;
          view = "single";
          fromGrid = true;
          render();
        });
        grid.appendChild(item);
      });
      box.appendChild(grid);
    } else {
      const c = certs[idx];
      const stageEl = el("div", "cm-stage");
      if (certs.length > 1) stageEl.appendChild(btn("cm-nav cm-prev", "Previous", "‹", () => step(-1)));
      stageEl.appendChild(frame(c, "cm-main"));
      if (certs.length > 1) stageEl.appendChild(btn("cm-nav cm-next", "Next", "›", () => step(1)));
      box.appendChild(stageEl);
      const foot = el("div", "cm-foot");
      foot.append(el("span", "", c.date), el("span", "", `${idx + 1} / ${certs.length}`));
      box.appendChild(foot);
    }
    box.querySelector<HTMLElement>(".cm-x")?.focus({ preventScroll: true });
  };

  const step = (d: number): void => {
    idx = (idx + d + certs.length) % certs.length;
    render();
  };

  const onKey = (e: KeyboardEvent): void => {
    if (e.key === "Escape") close?.();
    else if (view === "single" && e.key === "ArrowLeft") step(-1);
    else if (view === "single" && e.key === "ArrowRight") step(1);
  };

  root.addEventListener("click", () => close?.());
  box.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("keydown", onKey);
  document.body.appendChild(root);
  requestAnimationFrame(() => root.classList.add("open"));
  render();

  close = () => {
    document.removeEventListener("keydown", onKey);
    root.classList.remove("open");
    window.setTimeout(() => root.remove(), 200);
    close = null;
    opener?.focus?.({ preventScroll: true });
  };
}

export function closeCertificates(): void {
  close?.();
}
