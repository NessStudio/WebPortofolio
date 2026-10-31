import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./mobile.css";
import "./loader.css";

export const metadata: Metadata = {
  title: "Portfolio · Nendi B. Setiawan",
  description: "One-page portfolio with smooth gradient transitions between panels.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#110f22" },
  ],
};

// Atur tema sebelum halaman tampil agar tidak berkedip (default: gelap), dan kunci scroll selama loading.
// Kunci scroll otomatis dilepas oleh lib/loader.ts; timer 9 dtk hanya jaga-jaga bila skrip gagal berjalan.
const themeScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('pf-theme')||'dark';d.setAttribute('data-theme',t)}catch(e){}d.classList.add('is-loading');setTimeout(function(){d.classList.remove('is-loading')},9000)})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
