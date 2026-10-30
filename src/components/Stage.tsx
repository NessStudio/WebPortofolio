import { css } from "../lib/css";
import { SHELL } from "../content/shell";
import { BLOBS } from "../content/blobs";
import { CHROME } from "../content/chrome";
import { SECTIONS } from "../content/sections";
import { fillSlots } from "../lib/slots";

interface StageProps {
  /** "l" = tema terang, "d" = tema gelap */
  theme: "l" | "d";
}

/**
 * Satu panggung 1440×900 (di-scale mengikuti layar oleh lib/portfolio.ts).
 * Susunan: latar luar → bingkai putih → panel berwarna → [daftar panel yang di-scroll] + navigasi tetap.
 */
export default function Stage({ theme }: StageProps) {
  const t = theme === "l" ? "light" : "dark";
  const shell = SHELL[t];

  return (
    <div className={`stg ${theme}`}>
      <div data-dc-tpl="3" style={css(shell.root)}>
        {/* Blob latar luar: satu lapis per panel, saling memudar saat scroll */}
        {BLOBS[t].map((html, i) => (
          <div key={i} className="obl" dangerouslySetInnerHTML={{ __html: html }} />
        ))}

        <div data-dc-tpl="6" style={css(shell.frame)}>
          <div data-dc-tpl="7" style={css(shell.panel)}>
            {/* Daftar panel: 7 bagian dalam satu halaman scroll */}
            <div className="sc">
              {SECTIONS.map((s) => (
                <div
                  key={s.id}
                  className="ks"
                  data-section={s.id}
                  dangerouslySetInnerHTML={{ __html: fillSlots(s[t]) }}
                />
              ))}
            </div>

            {/* Navigasi tetap: logo, navbar, sidebar, tombol tema/kontak */}
            <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: CHROME[t] }} />
          </div>
        </div>
      </div>
    </div>
  );
}
