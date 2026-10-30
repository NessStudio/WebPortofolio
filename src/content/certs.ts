/**
 * Data teks untuk sertifikat TAMBAHAN (nomor 7 dst) yang tidak punya kartu di halaman utama.
 * Muncul di galeri "View all certificates". Gambarnya diatur di `images.ts` (kunci `certificate-<nomor>`).
 * Sertifikat 1–6 mengambil teksnya langsung dari kartu di `content/sections/certificates.ts`.
 * Judul & tanggal diambil dari gambar sertifikat masing-masing.
 */
export interface CertMeta {
  issuer: string;
  name: string;
  date: string;
}

export const CERTS_EXTRA: Record<number, CertMeta> = {
  7: { issuer: "DICODING INDONESIA", name: "Belajar Matematika untuk Data Science", date: "25 May 2026" },
  8: { issuer: "DICODING INDONESIA", name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", date: "11 Feb 2026" },
  9: { issuer: "DICODING INDONESIA", name: "Belajar Dasar Visualisasi Data", date: "20 Feb 2026" },
  10: { issuer: "DICODING INDONESIA", name: "Belajar Fundamental Analisis Data", date: "25 Apr 2026" },
  11: { issuer: "DICODING INDONESIA", name: "Belajar Fundamental Pemrosesan Data", date: "18 May 2026" },
  12: { issuer: "DICODING INDONESIA", name: "Belajar Dasar Git dengan GitHub", date: "12 Feb 2026" },
  13: { issuer: "DICODING INDONESIA", name: "Pengenalan ke Logika Pemrograman (Programming Logic 101)", date: "11 Feb 2026" },
  14: { issuer: "DICODING INDONESIA", name: "Memulai Pemrograman dengan Python", date: "25 Feb 2026" },
};
