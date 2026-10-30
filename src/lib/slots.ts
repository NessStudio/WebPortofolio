import { IMAGES } from "../content/images";

const esc = (s: string): string => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const attr = (tag: string, name: string): string => new RegExp(`${name}="([^"]*)"`).exec(tag)?.[1] ?? "";

/**
 * Isi slot gambar: `<img class="slot-img" data-slot="KEY" alt="...">` mendapat `src`
 * bila KEY ada di content/images.ts. Tanpa `src`, <img> disembunyikan oleh CSS dan
 * placeholder tetap tampil.
 */
export function fillSlots(html: string): string {
  const withCerts = html.replace(/<a\b[^>]*\bdata-cert="(\d+)"[^>]*>/g, (tag: string, n: string) => {
    const e = IMAGES[`certificate-${n}`];
    if (!e) return tag;
    const o = typeof e === "string" ? { src: e } : e;
    return `${tag.slice(0, -1)} data-cert-src="${esc(o.src)}">`;
  });
  return withCerts.replace(/<img\b[^>]*\bclass="slot-img"[^>]*>/g, (tag: string) => {
    const key = attr(tag, "data-slot");
    const e = IMAGES[key];
    if (!e) return tag;
    const o = typeof e === "string" ? { src: e } : e;
    const style = o.position ? ` style="object-position:${esc(o.position)}"` : "";
    return `<img class="slot-img" data-slot="${key}" src="${esc(o.src)}" alt="${esc(o.alt ?? attr(tag, "alt"))}" draggable="false"${style}>`;
  });
}
