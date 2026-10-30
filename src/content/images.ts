/**
 * Gambar untuk semua slot di portofolio.
 *
 * Cara pakai:
 *  1. Taruh file gambar di folder `public/images/` (mis. `public/images/foto-profil.jpg`).
 *  2. Isi nilainya di bawah dengan path yang diawali `/images/...`.
 *  3. Selesai — gambar otomatis terpotong mengikuti bentuk slot (lingkaran / rounded / pil),
 *     placeholder berwarna otomatis hilang. Slot yang dikosongkan tetap menampilkan placeholder.
 *
 * Nilai boleh berupa string (path saja) atau objek { src, alt, position }:
 *  - position : titik fokus crop, mis. "50% 20%" (default "center")
 *
 * Saran ukuran (px) agar tajam:
 *  - home-photo    : 700×700 (tampil lingkaran 304)
 *  - about-photo   : 1100×800 (rounded, ±1.4:1)
 *  - skill-*-*     : ikon/logo 128×128 (PNG/SVG transparan, tampil lingkaran 28)
 *  - cert-*        : logo penerbit 256×256 (PNG/SVG, tampil 92, tidak dipotong — `contain`)
 *  - certificate-* : (1–14) GAMBAR SERTIFIKAT lengkap untuk popup "View certificate" & galeri "View all" (JPG/PNG, bebas rasio, ±1600px lebar)
 *  - project-*     : 800×460 (±1.7:1)
 */
export type ImageEntry = string | { src: string; alt?: string; position?: string };

export const IMAGES: Record<string, ImageEntry> = {
  // — Home & About —
  "home-photo": "/images/profile-img.png",
  "about-photo": "/images/about.jpg",

  // — Skills: "skill-<nomor kategori>-<nomor baris>" (kategori 1–4) —
  // "skill-1-1": "/images/skills/react.svg",
  // "skill-1-2": "/images/skills/nextjs.svg",

  // — Certificates: cert-1 … cert-6 (logo penerbit) —
  "cert-1": "/images/certs/LogoDicoding.png",
  "cert-2": "/images/certs/LogoGemini.jpeg",
  "cert-3": "/images/certs/LogoUad.png",
  "cert-4": "/images/certs/LogoUad.png",
  "cert-5": "/images/certs/LogoDicoding.png",
  "cert-6": "/images/certs/LogoDicoding.png",
  // — Popup & galeri sertifikat (View certificate / View all): certificate-1 … certificate-14 —
  "certificate-1": "/images/certs/sertifikat-1.jpg",
  "certificate-2": "/images/certs/sertifikat-2.jpg",
  "certificate-3": "/images/certs/sertifikat-3.jpg",
  "certificate-4": "/images/certs/sertifikat-4.jpg",
  "certificate-5": "/images/certs/sertifikat-5.jpg",
  "certificate-6": "/images/certs/sertifikat-6.jpg",
  "certificate-7": "/images/certs/sertifikat-7.jpg",
  "certificate-8": "/images/certs/sertifikat-8.jpg",
  "certificate-9": "/images/certs/sertifikat-9.jpg",
  "certificate-10": "/images/certs/sertifikat-10.jpg",
  "certificate-11": "/images/certs/sertifikat-11.jpg",
  "certificate-12": "/images/certs/sertifikat-12.jpg",
  "certificate-13": "/images/certs/sertifikat-13.jpg",
  "certificate-14": "/images/certs/sertifikat-14.jpg",

  // — Projects (kartu di panel Projects): project-1 … project-3 —
  "project-1": "/images/projects/proyek-1.png",
  "project-2": "/images/projects/proyek-2.png",
  "project-3": "/images/projects/proyek-3.png",
};
