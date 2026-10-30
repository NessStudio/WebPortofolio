import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio · Nendi B. Setiawan",
  description: "One-page portfolio with smooth gradient transitions between panels.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Atur tema sebelum halaman tampil agar tidak berkedip (default: gelap).
const themeScript = `(function(){try{var t=localStorage.getItem('pf-theme')||'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`;

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
