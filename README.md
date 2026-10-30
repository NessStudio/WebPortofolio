# Portofolio · Next.js + TypeScript

Desain portofolio satu halaman (scroll) dengan transisi gradien halus antar panel,
navigasi tetap, tema terang/gelap, dan tombol melayang. Tampilannya sama dengan desain awal.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Deploy ke Vercel

1. Push folder ini ke GitHub.
2. Di vercel.com pilih **Add New → Project**, impor repositori. Framework terdeteksi otomatis (Next.js).
3. Tekan **Deploy**. Tidak ada variabel lingkungan yang wajib.

## Struktur

```
src/
  app/
    layout.tsx        # <html>, metadata, skrip tema (anti-berkedip)
    page.tsx          # menyusun halaman
    globals.css       # font, panel, kotak navigasi, tombol, hover
  components/
    Stage.tsx         # panggung 1440×900: bingkai, panel, navigasi (server component)
    Portfolio.tsx     # pembungkus client: menyalakan perilaku
  lib/
    portfolio.ts      # scroll, gradien antar panel, tema, routing, animasi tombol
    css.ts            # string style → objek style React
  content/
    sections/*.ts     # isi 8 panel (terang + gelap) — ganti teks [placeholder] di sini
    gradients.ts      # warna tiap panel (dasar transisi gradien)
    images.ts         # ★ daftar gambar untuk semua slot (foto, logo, thumbnail proyek)
    chrome.ts         # logo, navbar, sidebar, tombol tema/kontak
    blobs.ts          # blob latar luar tiap panel
    shell.ts          # style bingkai tiap tema
public/fonts/         # Anton, JetBrains Mono, Space Grotesk
public/images/        # taruh foto/logo Anda di sini
```

## Mengubah isi

Teks `[placeholder]` ada di `src/content/sections/<panel>.ts (home, about, skills, experience, certificates, projects, english, contact)`.
Tiap elemen HTML ditulis **satu per baris, turun ke bawah** (blok `light` untuk tema terang, blok `dark` untuk gelap),
jadi cukup cari teksnya lalu ganti barisnya. Ganti di kedua blok agar kedua tema konsisten.
Warna gradien tiap panel ada di `src/content/gradients.ts`.

## Mengganti gambar (slot gambar)

Semua tempat gambar sudah berupa *slot*: bentuknya mengikuti latar (lingkaran, rounded, atau pil)
dan gambar otomatis terpotong rapi mengikuti bentuk itu. Cukup:

1. Simpan gambar di `public/images/`.
2. Buka `src/content/images.ts`, hapus tanda `//` pada baris yang diinginkan, lalu isi path-nya, mis. `"home-photo": "/images/foto.jpg"`.

| Kunci | Lokasi | Bentuk | Ukuran saran |
|---|---|---|---|
| `home-photo` | Home, foto profil | lingkaran | 700×700 |
| `about-photo` | About, foto | rounded | 1100×800 |
| `skill-<kategori>-<baris>` (mis. `skill-1-1`) | Skills, ikon tiap skill | lingkaran kecil | 128×128 (PNG/SVG) |
| `cert-1` … `cert-6` | Certificates, logo penerbit | lingkaran / rounded, tidak dipotong | 256×256 |
| `certificate-1` … `certificate-6` | Certificates, gambar sertifikat lengkap untuk popup tombol **View certificate** (tombol **View all certificates** menampilkan semuanya dalam galeri) | bebas rasio | ±1600 px lebar |
| `project-1` … `project-3` | Projects, gambar kartu | rounded | 800×460 |

Slot yang dikosongkan tetap menampilkan placeholder berwarna. Titik fokus crop bisa diatur:
`"home-photo": { src: "/images/foto.jpg", alt: "Foto saya", position: "50% 20%" }`.

## English Task (otomatis)

Buka `src/content/sections/english.ts` dan tambah satu objek di daftar `TASKS`:

```ts
{ title: "Essay Writing", desc: "Deskripsi singkat.", tags: ["Writing"], link: "https://drive.google.com/..." },
```

Kartu, nomor, warna, dan kedua tema dibuat otomatis. Tiap halaman memuat 3 kartu; jika lebih dari 3, panah + penunjuk halaman muncul di kanan atas.

## Langkah berikutnya (opsional)

- Form kontak: simpan pesan ke Postgres (Neon via Vercel Marketplace) dan kirim email lewat Resend.
- Gambar dalam jumlah besar / diunggah dinamis: Vercel Blob (ganti path di `images.ts` dengan URL Blob).
- Pecah string HTML di `content/sections` menjadi komponen React bertahap saat Anda mulai mengubah tata letak.
