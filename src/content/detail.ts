/**
 * Halaman detail proyek (tampil saat URL berisi #project-1, #project-2, dst).
 *
 * Format: tiap elemen HTML ditulis satu per baris (turun ke bawah, berindentasi),
 * sama seperti `src/content/sections/*.ts`. Potongan digabung dengan `.join("")`,
 * jadi spasi/baris di kode ini TIDAK ikut ke HTML hasil render.
 * Ganti teks [placeholder] di KEDUA blok: `light` (tema terang) dan `dark` (tema gelap).
 * Slot gambar (detail-main, detail-2..4): lihat src/content/images.ts
 */
export const DETAIL: { light: string; dark: string } = {
  // ───────────── TEMA TERANG ─────────────
  light: [
    `<div
      class="stg l">`,
      `\n`,
      `<div
        id="dc-root">`,
        `<div
          class="sc-host"
          data-sc-name="302845c9-ee95-4ee9-8a42-ebbce085801e">`,
          `<div
            data-dc-tpl="3"
            style='position: relative;
                   width: 1440px;
                   height: 900px;
                   overflow: hidden;
                   background: linear-gradient(160deg, rgb(234, 243, 255) 0%, rgb(246, 238, 255) 45%, rgb(255, 243, 248) 100%);
                   font-family: "Space Grotesk", sans-serif;
                   color: rgb(20, 18, 43);'>`,
            `<div
              data-dc-tpl="4"
              style="position: absolute;
                     top: -140px;
                     right: -120px;
                     width: 480px;
                     height: 480px;
                     border-radius: 58% 42% 51% 49% / 46% 55% 45% 54%;
                     background: rgba(255, 61, 154, 0.3);">`,
            `</div>`,
            `<div
              data-dc-tpl="5"
              style="position: absolute;
                     bottom: -160px;
                     left: -120px;
                     width: 480px;
                     height: 480px;
                     border-radius: 45% 55% 40% 60% / 55% 45%;
                     background: rgba(46, 230, 255, 0.45);">`,
            `</div>`,
            `<div
              data-dc-tpl="6"
              style="position: absolute;
                     inset: 20px;
                     box-sizing: border-box;
                     background: rgb(255, 255, 255);
                     border-radius: 56px;
                     padding: 20px;
                     box-shadow: rgba(40, 60, 160, 0.2) 0px 30px 80px;">`,
              `<div
                data-dc-tpl="7"
                style="position: relative;
                       width: 100%;
                       height: 100%;
                       overflow: hidden;
                       border-radius: 0px 0px 40px 40px;
                       background: linear-gradient(150deg, rgb(46, 230, 255) 0%, rgb(91, 140, 255) 55%, rgb(124, 92, 255) 100%);">`,
                `<div
                  data-dc-tpl="8"
                  style="position: absolute;
                         top: 90px;
                         left: 280px;
                         width: 280px;
                         height: 280px;
                         border-radius: 50%;
                         background: rgb(255, 229, 59);">`,
                `</div>`,
                `<div
                  data-dc-tpl="9"
                  style="position: absolute;
                         bottom: -90px;
                         left: 640px;
                         width: 380px;
                         height: 380px;
                         border-radius: 55% 45% 60% 40% / 42% 58%;
                         background: rgb(255, 61, 154);">`,
                `</div>`,
                `<div
                  data-dc-tpl="10"
                  style="position: absolute;
                         top: 140px;
                         right: -50px;
                         width: 210px;
                         height: 210px;
                         border-radius: 50%;
                         border: 38px solid rgba(255, 255, 255, 0.85);
                         box-sizing: border-box;">`,
                `</div>`,
                `<div
                  data-dc-tpl="11"
                  style="position: absolute;
                         left: 0px;
                         top: 50%;
                         transform: translateY(-46%);
                         z-index: 3;">`,
                  `<div
                    data-dc-tpl="12"
                    style="display: flex;
                           flex-direction: column;
                           align-items: center;
                           gap: 8px;
                           box-sizing: border-box;
                           background: rgb(255, 255, 255);
                           border-radius: 0px 36px 36px 0px;
                           padding: 18px 14px 18px 10px;">`,
                    `<a
                      aria-label="Home"
                      class="sb-i"
                      data-dc-tpl="13"
                      href="#home"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(20, 18, 43);
                             display: flex;
                             align-items: center;
                             justify-content: center;"
                      title="Home">`,
                      `<svg
                        data-dc-tpl="14"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<path
                          d="M3 11l9-8 9 8"
                          data-dc-tpl="15">`,
                        `</path>`,
                        `<path
                          d="M5 10v10h5v-6h4v6h5V10"
                          data-dc-tpl="16">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="About"
                      class="sb-i"
                      data-dc-tpl="17"
                      href="#about"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(20, 18, 43);
                             display: flex;
                             align-items: center;
                             justify-content: center;"
                      title="About">`,
                      `<svg
                        data-dc-tpl="18"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<circle
                          cx="12"
                          cy="8"
                          data-dc-tpl="19"
                          r="4">`,
                        `</circle>`,
                        `<path
                          d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"
                          data-dc-tpl="20">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="Skills"
                      class="sb-i"
                      data-dc-tpl="21"
                      href="#skills"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(20, 18, 43);
                             display: flex;
                             align-items: center;
                             justify-content: center;"
                      title="Skills">`,
                      `<svg
                        data-dc-tpl="22"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<path
                          d="M13 2L4 14h7l-1 8 9-12h-7z"
                          data-dc-tpl="23">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="Experience"
                      class="sb-i"
                      data-dc-tpl="24"
                      href="#experience"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(20, 18, 43);
                             display: flex;
                             align-items: center;
                             justify-content: center;"
                      title="Experience">`,
                      `<svg
                        data-dc-tpl="25"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<rect
                          data-dc-tpl="26"
                          height="13"
                          rx="3"
                          width="18"
                          x="3"
                          y="7">`,
                        `</rect>`,
                        `<path
                          d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"
                          data-dc-tpl="27">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="Certificates"
                      class="sb-i"
                      data-dc-tpl="28"
                      href="#certificates"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(20, 18, 43);
                             display: flex;
                             align-items: center;
                             justify-content: center;"
                      title="Certificates">`,
                      `<svg
                        data-dc-tpl="29"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<circle
                          cx="12"
                          cy="9"
                          data-dc-tpl="30"
                          r="6">`,
                        `</circle>`,
                        `<path
                          d="M8 14l-2 8 6-3 6 3-2-8"
                          data-dc-tpl="31">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="Projects"
                      class="sb-i"
                      data-dc-tpl="32"
                      href="#projects"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: rgb(20, 18, 43);
                             color: rgb(255, 229, 59);
                             display: flex;
                             align-items: center;
                             justify-content: center;"
                      title="Projects">`,
                      `<svg
                        data-dc-tpl="33"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<rect
                          data-dc-tpl="34"
                          height="7"
                          rx="2"
                          width="7"
                          x="3"
                          y="3">`,
                        `</rect>`,
                        `<rect
                          data-dc-tpl="35"
                          height="7"
                          rx="2"
                          width="7"
                          x="14"
                          y="3">`,
                        `</rect>`,
                        `<rect
                          data-dc-tpl="36"
                          height="7"
                          rx="2"
                          width="7"
                          x="3"
                          y="14">`,
                        `</rect>`,
                        `<rect
                          data-dc-tpl="37"
                          height="7"
                          rx="2"
                          width="7"
                          x="14"
                          y="14">`,
                        `</rect>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="Contact"
                      class="sb-i"
                      data-dc-tpl="38"
                      href="#contact"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(20, 18, 43);
                             display: flex;
                             align-items: center;
                             justify-content: center;"
                      title="Contact">`,
                      `<svg
                        data-dc-tpl="39"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<rect
                          data-dc-tpl="40"
                          height="14"
                          rx="3"
                          width="18"
                          x="3"
                          y="5">`,
                        `</rect>`,
                        `<path
                          d="M3 8l9 6 9-6"
                          data-dc-tpl="41">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                  `</div>`,
                  `<div
                    data-dc-tpl="42"
                    style="position: absolute;
                           left: 0px;
                           bottom: calc(100% - 1px);
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 100% 0px, transparent 29.5px, rgb(255, 255, 255) 30px);">`,
                  `</div>`,
                  `<div
                    data-dc-tpl="43"
                    style="position: absolute;
                           left: 0px;
                           top: calc(100% - 1px);
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 100% 100%, transparent 29.5px, rgb(255, 255, 255) 30px);">`,
                  `</div>`,
                `</div>`,
                `<div
                  data-dc-tpl="44"
                  style="position: absolute;
                         top: 0px;
                         left: 0px;
                         z-index: 3;">`,
                  `<div
                    data-dc-tpl="45"
                    style="width: 88px;
                           height: 88px;
                           box-sizing: border-box;
                           background: rgb(255, 255, 255);
                           border-radius: 0px 0px 30px;
                           padding: 12px;">`,
                    `<a
                      aria-label="Home"
                      data-dc-tpl="46"
                      href="#home"
                      style="width: 64px;
                             height: 64px;
                             border-radius: 50%;
                             background: rgb(20, 18, 43);
                             display: flex;
                             align-items: center;
                             justify-content: center;">`,
                      `<svg
                        data-dc-tpl="47"
                        fill="#FFE53B"
                        height="30"
                        viewbox="0 0 26 26"
                        width="30">`,
                        `<circle
                          cx="5"
                          cy="5"
                          data-dc-tpl="48"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="13"
                          cy="5"
                          data-dc-tpl="49"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="21"
                          cy="5"
                          data-dc-tpl="50"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="5"
                          cy="13"
                          data-dc-tpl="51"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="13"
                          cy="13"
                          data-dc-tpl="52"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="21"
                          cy="13"
                          data-dc-tpl="53"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="5"
                          cy="21"
                          data-dc-tpl="54"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="13"
                          cy="21"
                          data-dc-tpl="55"
                          r="2">`,
                        `</circle>`,
                      `</svg>`,
                    `</a>`,
                  `</div>`,
                  `<div
                    data-dc-tpl="56"
                    style="position: absolute;
                           left: calc(100% - 1px);
                           top: 0px;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 100% 100%, transparent 29.5px, rgb(255, 255, 255) 30px);">`,
                  `</div>`,
                  `<div
                    data-dc-tpl="57"
                    style="position: absolute;
                           top: calc(100% - 1px);
                           left: 0px;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 100% 100%, transparent 29.5px, rgb(255, 255, 255) 30px);">`,
                  `</div>`,
                `</div>`,
                `<div
                  data-dc-tpl="58"
                  style="position: absolute;
                         top: 0px;
                         left: 50%;
                         transform: translateX(-50%);
                         z-index: 3;
                         display: flex;
                         align-items: flex-start;">`,
                  `<div
                    data-dc-tpl="59"
                    style="flex: 0 0 auto;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 0px 100%, transparent 29.5px, rgb(255, 255, 255) 30px);">`,
                  `</div>`,
                  `<div
                    data-dc-tpl="60"
                    style="background: rgb(255, 255, 255);
                           border-radius: 0px 0px 36px 36px;
                           padding: 16px 20px 20px;">`,
                    `<nav
                      data-dc-tpl="61"
                      style="display: flex;
                             align-items: center;
                             gap: 2px;
                             background: rgb(20, 18, 43);
                             border-radius: 999px;
                             padding: 6px;
                             font-size: 14px;
                             font-weight: 500;
                             white-space: nowrap;">`,
                      `<a
                        data-dc-tpl="62"
                        href="#home"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255);">`,
                        `Home`,
                      `</a>`,
                      `<a
                        data-dc-tpl="63"
                        href="#about"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255);">`,
                        `About`,
                      `</a>`,
                      `<a
                        data-dc-tpl="64"
                        href="#skills"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255);">`,
                        `Skills`,
                      `</a>`,
                      `<a
                        data-dc-tpl="65"
                        href="#experience"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255);">`,
                        `Experience`,
                      `</a>`,
                      `<a
                        data-dc-tpl="66"
                        href="#certificates"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255);">`,
                        `Certificates`,
                      `</a>`,
                      `<a
                        data-dc-tpl="67"
                        href="#projects"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               background: rgb(255, 229, 59);
                               color: rgb(20, 18, 43);
                               font-weight: 700;">`,
                        `Projects`,
                      `</a>`,
                      `<a
                        data-dc-tpl="68"
                        href="#contact"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255);">`,
                        `Contact`,
                      `</a>`,
                    `</nav>`,
                  `</div>`,
                  `<div
                    data-dc-tpl="69"
                    style="flex: 0 0 auto;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 100% 100%, transparent 29.5px, rgb(255, 255, 255) 30px);">`,
                  `</div>`,
                `</div>`,
                `<div
                  data-dc-tpl="70"
                  style="position: absolute;
                         top: 0px;
                         right: 0px;
                         z-index: 3;">`,
                  `<div
                    data-dc-tpl="71"
                    style="background: rgb(255, 255, 255);
                           border-radius: 0px 0px 0px 30px;
                           padding: 16px 16px 20px 22px;
                           display: flex;
                           align-items: center;
                           gap: 10px;">`,
                    `<button
                      aria-label="Toggle theme"
                      data-dc-tpl="72"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             border: none;
                             background: rgb(241, 244, 251);
                             display: flex;
                             align-items: center;
                             justify-content: center;
                             cursor: pointer;"
                      type="button">`,
                      `<svg
                        data-dc-tpl="73"
                        fill="none"
                        height="22"
                        stroke="#14122B"
                        stroke-linecap="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<path
                          d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z">`,
                        `</path>`,
                      `</svg>`,
                    `</button>`,
                    `<a
                      aria-label="Contact"
                      data-dc-tpl="76"
                      href="#contact"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: rgb(255, 61, 154);
                             display: flex;
                             align-items: center;
                             justify-content: center;">`,
                      `<svg
                        data-dc-tpl="77"
                        fill="none"
                        height="20"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        viewbox="0 0 24 24"
                        width="20">`,
                        `<path
                          d="M7 17L17 7M8 7h9v9"
                          data-dc-tpl="78">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                  `</div>`,
                  `<div
                    data-dc-tpl="79"
                    style="position: absolute;
                           right: calc(100% - 1px);
                           top: 0px;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 0px 100%, transparent 29.5px, rgb(255, 255, 255) 30px);">`,
                  `</div>`,
                  `<div
                    data-dc-tpl="80"
                    style="position: absolute;
                           top: calc(100% - 1px);
                           right: 0px;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 0px 100%, transparent 29.5px, rgb(255, 255, 255) 30px);">`,
                  `</div>`,
                `</div>`,
                `<div
                  data-dc-tpl="81"
                  style="position: absolute;
                         inset: 120px 48px 44px 132px;
                         display: flex;
                         gap: 28px">`,
                  `<div
                    style="flex: 1 1 0;
                           min-width: 0;
                           display: flex;
                           flex-direction: column;
                           gap: 16px">`,
                    `<a
                      href="#projects"
                      style="align-self: flex-start;
                             display: inline-flex;
                             align-items: center;
                             gap: 12px;
                             background: rgba(255, 255, 255, 0.8);
                             border-radius: 999px;
                             padding: 6px 22px 6px 6px;
                             font-family: 'JetBrains Mono', monospace;
                             font-size: 13px;
                             font-weight: 700;
                             color: rgb(20, 18, 43)">`,
                      `<span
                        style="width: 36px;
                               height: 36px;
                               border-radius: 50%;
                               background: rgb(20, 18, 43);
                               color: rgb(255, 255, 255);
                               display: flex;
                               align-items: center;
                               justify-content: center">`,
                        `<svg
                          fill="none"
                          height="18"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          viewbox="0 0 24 24"
                          width="18">`,
                          `<path
                            d="M19 12H5M11 6l-6 6 6 6">`,
                          `</path>`,
                        `</svg>`,
                      `</span>`,
                      `BACK TO PROJECTS`,
                    `</a>`,
                    `\n`,
                    `<div
                      style="display: flex;
                             align-items: flex-end;
                             gap: 16px">`,
                      `<span
                        style="font-family: 'Anton', sans-serif;
                               font-style: italic;
                               font-size: 40px;
                               line-height: 1;
                               color: rgb(255, 229, 59);
                               padding-bottom: 6px;
                               white-space: nowrap">`,
                        `06 »»`,
                      `</span>`,
                      `\n`,
                      `<h2
                        style="margin: 0;
                               font-family: 'Anton', sans-serif;
                               font-size: 64px;
                               line-height: 0.95;
                               text-transform: uppercase;
                               color: rgb(255, 255, 255);
                               white-space: nowrap">`,
                        `[Project Title]`,
                      `</h2>`,
                    `</div>`,
                    `\n`,
                    `<div
                      style="display: flex;
                             align-items: center;
                             gap: 10px;
                             font-family: 'JetBrains Mono', monospace;
                             font-size: 12px;
                             font-weight: 700;
                             color: rgb(20, 18, 43)">`,
                      `<span
                        class="dnum"
                        style="background: rgb(20, 18, 43);
                               color: rgb(255, 229, 59);
                               border-radius: 999px;
                               padding: 7px 14px">`,
                        `PROJECT 01`,
                      `</span>`,
                      `<span
                        style="background: rgb(29, 224, 160);
                               border-radius: 999px;
                               padding: 7px 14px">`,
                        `[STATUS]`,
                      `</span>`,
                      `<span
                        style="background: rgba(255, 255, 255, 0.8);
                               border-radius: 999px;
                               padding: 7px 14px">`,
                        `[CATEGORY] · [YEAR]`,
                      `</span>`,
                    `</div>`,
                    `\n`,
                    `<div
                      style="flex: 1 1 auto;
                             min-height: 0;
                             box-sizing: border-box;
                             background: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 0 10px, rgba(255, 255, 255, 0.28) 10px 11px), rgba(255, 255, 255, 0.42);
                             -webkit-backdrop-filter: blur(24px) saturate(180%);
                             backdrop-filter: blur(24px) saturate(180%);
                             border: 1.5px solid rgba(255, 255, 255, 0.85);
                             border-radius: 100px 36px 36px 36px;
                             padding: 34px 36px 26px 44px;
                             display: flex;
                             flex-direction: column;
                             justify-content: space-between;
                             gap: 12px;
                             box-shadow: 0 18px 50px rgba(20, 18, 80, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9)">`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 4px">`,
                        `<span
                          style="font-family: 'Anton', sans-serif;
                                 font-size: 22px;
                                 text-transform: uppercase;
                                 color: rgb(20, 18, 43)">`,
                          `Background`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 line-height: 1.5;
                                 color: rgb(30, 28, 58)">`,
                          `[Describe the problem or need behind this project in two sentences.]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 4px">`,
                        `<span
                          style="font-family: 'Anton', sans-serif;
                                 font-size: 22px;
                                 text-transform: uppercase;
                                 color: rgb(20, 18, 43)">`,
                          `Solution &amp; your role`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 line-height: 1.5;
                                 color: rgb(30, 28, 58)">`,
                          `[Describe the approach, key features, and the part you built yourself.]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 4px">`,
                        `<span
                          style="font-family: 'Anton', sans-serif;
                                 font-size: 22px;
                                 text-transform: uppercase;
                                 color: rgb(20, 18, 43)">`,
                          `Results`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 line-height: 1.5;
                                 color: rgb(30, 28, 58)">`,
                          `[Impact or achievement: numbers, users, or key learnings.]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               gap: 10px;
                               font-size: 14px;
                               font-weight: 700">`,
                        `<a
                          href="#projects"
                          style="display: inline-flex;
                                 align-items: center;
                                 background: rgb(20, 18, 43);
                                 color: rgb(255, 255, 255);
                                 border-radius: 999px;
                                 padding: 13px 24px">`,
                          `Demo ↗`,
                        `</a>`,
                        `<a
                          href="#projects"
                          style="display: inline-flex;
                                 align-items: center;
                                 border: 2px solid rgb(20, 18, 43);
                                 color: rgb(20, 18, 43);
                                 border-radius: 999px;
                                 padding: 11px 24px">`,
                          `GitHub`,
                        `</a>`,
                      `</div>`,
                      `\n`,
                    `</div>`,
                  `</div>`,
                  `<div
                    style="flex: 1 1 0;
                           min-width: 0;
                           display: flex;
                           flex-direction: column;
                           gap: 18px;
                           padding-top: 4px">`,
                    `<div
                      class="slot"
                      style="position: relative;
                             flex: 1 1 auto;
                             min-height: 0;
                             border-radius: 140px 36px 140px 36px;
                             overflow: hidden;
                             background: linear-gradient(145deg, rgb(124, 92, 255), rgb(75, 107, 255));
                             box-shadow: 0 22px 50px rgba(20, 18, 80, 0.30)">`,
                      `\n`,
                      `<svg
                        class="slot-ph"
                        height="100%"
                        preserveaspectratio="xMidYMid slice"
                        style="position: absolute;
                               inset: 0"
                        viewbox="0 0 560 300"
                        width="100%">`,
                        `<circle
                          cx="150"
                          cy="150"
                          fill="rgb(46, 230, 255)"
                          r="105">`,
                        `</circle>`,
                        `<circle
                          cx="230"
                          cy="150"
                          fill="rgb(255, 229, 59)"
                          fill-opacity="0.85"
                          r="105">`,
                        `</circle>`,
                        `<rect
                          fill="rgb(255, 61, 154)"
                          height="220"
                          rx="45"
                          width="90"
                          x="380"
                          y="40">`,
                        `</rect>`,
                      `</svg>`,
                      `\n`,
                      `<span
                        class="slot-ph"
                        style="position: absolute;
                               left: 22px;
                               bottom: 20px;
                               background: rgba(255, 255, 255, 0.55);
                               -webkit-backdrop-filter: blur(14px);
                               backdrop-filter: blur(14px);
                               border: 1.5px solid rgba(255, 255, 255, 0.85);
                               border-radius: 999px;
                               padding: 8px 16px;
                               font-family: 'JetBrains Mono', monospace;
                               font-weight: 700;
                               font-size: 12px;
                               color: rgb(20, 18, 43)">`,
                        `[MAIN PROJECT IMAGE]`,
                      `</span>`,
                      `<img
                        alt="Main project image"
                        class="slot-img"
                        data-slot="detail-main"/>`,
                    `</div>`,
                    `\n`,
                    `<div
                      style="display: flex;
                             gap: 16px;
                             height: 112px;
                             flex: none">`,
                      `\n`,
                      `<div
                        class="slot"
                        style="flex: 1 1 0;
                               border-radius: 28px 28px 28px 70px;
                               background: rgb(255, 229, 59);
                               display: flex;
                               align-items: flex-end;
                               padding: 12px 14px;
                               box-sizing: border-box;
                               font-family: 'JetBrains Mono', monospace;
                               font-size: 11px;
                               font-weight: 700;
                               color: rgb(20, 18, 43)">`,
                        `<span
                          class="slot-ph">`,
                          `[IMAGE 2]`,
                        `</span>`,
                        `<img
                          alt="Project image"
                          class="slot-img"
                          data-slot="detail-2"/>`,
                      `</div>`,
                      `\n`,
                      `<div
                        class="slot"
                        style="flex: 1 1 0;
                               border-radius: 70px 28px 28px 28px;
                               background: rgb(255, 61, 154);
                               display: flex;
                               align-items: flex-end;
                               padding: 12px 14px;
                               box-sizing: border-box;
                               font-family: 'JetBrains Mono', monospace;
                               font-size: 11px;
                               font-weight: 700;
                               color: rgb(20, 18, 43)">`,
                        `<span
                          class="slot-ph">`,
                          `[IMAGE 3]`,
                        `</span>`,
                        `<img
                          alt="Project image"
                          class="slot-img"
                          data-slot="detail-3"/>`,
                      `</div>`,
                      `\n`,
                      `<div
                        class="slot"
                        style="flex: 1 1 0;
                               border-radius: 28px 70px 28px 28px;
                               background: rgb(255, 255, 255);
                               display: flex;
                               align-items: flex-end;
                               padding: 12px 14px;
                               box-sizing: border-box;
                               font-family: 'JetBrains Mono', monospace;
                               font-size: 11px;
                               font-weight: 700;
                               color: rgb(20, 18, 43)">`,
                        `<span
                          class="slot-ph">`,
                          `[IMAGE 4]`,
                        `</span>`,
                        `<img
                          alt="Project image"
                          class="slot-img"
                          data-slot="detail-4"/>`,
                      `</div>`,
                    `</div>`,
                    `\n`,
                    `<div
                      style="flex: none;
                             box-sizing: border-box;
                             background: rgb(20, 18, 43);
                             color: rgb(255, 255, 255);
                             border-radius: 36px 36px 90px 36px;
                             padding: 24px 36px 26px;
                             display: grid;
                             grid-template-columns: 1fr 1fr;
                             gap: 14px 24px">`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 3px">`,
                        `<span
                          style="font-family: 'JetBrains Mono', monospace;
                                 font-size: 12px;
                                 font-weight: 700;
                                 color: rgb(255, 229, 59)">`,
                          `ROLE`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 font-weight: 700;
                                 color: rgb(255, 255, 255)">`,
                          `[Your role]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 3px">`,
                        `<span
                          style="font-family: 'JetBrains Mono', monospace;
                                 font-size: 12px;
                                 font-weight: 700;
                                 color: rgb(255, 229, 59)">`,
                          `DURATION`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 font-weight: 700;
                                 color: rgb(255, 255, 255)">`,
                          `[Project duration]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 3px">`,
                        `<span
                          style="font-family: 'JetBrains Mono', monospace;
                                 font-size: 12px;
                                 font-weight: 700;
                                 color: rgb(46, 230, 255)">`,
                          `TEAM`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 font-weight: 700;
                                 color: rgb(255, 255, 255)">`,
                          `[Team size / members]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 3px">`,
                        `<span
                          style="font-family: 'JetBrains Mono', monospace;
                                 font-size: 12px;
                                 font-weight: 700;
                                 color: rgb(46, 230, 255)">`,
                          `TECH STACK`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 font-weight: 700;
                                 color: rgb(255, 255, 255)">`,
                          `[tag] · [tag] · [tag]`,
                        `</span>`,
                      `</div>`,
                    `</div>`,
                  `</div>`,
                `</div>`,
              `</div>`,
            `</div>`,
          `</div>`,
        `</div>`,
      `</div>`,
      `\n`,
    `</div>`,
  ].join(""),

  // ───────────── TEMA GELAP ─────────────
  dark: [
    `<div
      class="stg d">`,
      `\n`,
      `<div
        id="dc-root">`,
        `<div
          class="sc-host"
          data-sc-name="302845c9-ee95-4ee9-8a42-ebbce085801e">`,
          `<div
            data-dc-tpl="3"
            style='position: relative;
                   width: 1440px;
                   height: 900px;
                   overflow: hidden;
                   background: linear-gradient(160deg, #0E0D1E 0%, #18102E 45%, #1F0E24 100%);
                   font-family: "Space Grotesk", sans-serif;
                   color: rgb(20, 18, 43)'>`,
            `<div
              data-dc-tpl="4"
              style="position: absolute;
                     top: -140px;
                     right: -120px;
                     width: 480px;
                     height: 480px;
                     border-radius: 58% 42% 51% 49% / 46% 55% 45% 54%;
                     background: rgba(255, 61, 154, 0.3)">`,
            `</div>`,
            `<div
              data-dc-tpl="5"
              style="position: absolute;
                     bottom: -160px;
                     left: -120px;
                     width: 480px;
                     height: 480px;
                     border-radius: 45% 55% 40% 60% / 55% 45%;
                     background: rgba(46, 230, 255, 0.45)">`,
            `</div>`,
            `<div
              data-dc-tpl="6"
              style="position: absolute;
                     inset: 20px;
                     box-sizing: border-box;
                     background: rgb(17, 15, 34);
                     border-radius: 56px;
                     padding: 20px;
                     box-shadow: rgba(0, 0, 0, 0.55) 0px 30px 80px 0px">`,
              `<div
                data-dc-tpl="7"
                style="position: relative;
                       width: 100%;
                       height: 100%;
                       overflow: hidden;
                       border-radius: 0px 0px 40px 40px;
                       background: linear-gradient(150deg, rgb(46, 230, 255) 0%, rgb(91, 140, 255) 55%, rgb(124, 92, 255) 100%)">`,
                `<div
                  data-dc-tpl="8"
                  style="position: absolute;
                         top: 90px;
                         left: 280px;
                         width: 280px;
                         height: 280px;
                         border-radius: 50%;
                         background: rgb(255, 229, 59)">`,
                `</div>`,
                `<div
                  data-dc-tpl="9"
                  style="position: absolute;
                         bottom: -90px;
                         left: 640px;
                         width: 380px;
                         height: 380px;
                         border-radius: 55% 45% 60% 40% / 42% 58%;
                         background: rgb(255, 61, 154)">`,
                `</div>`,
                `<div
                  data-dc-tpl="10"
                  style="position: absolute;
                         top: 140px;
                         right: -50px;
                         width: 210px;
                         height: 210px;
                         border-radius: 50%;
                         border: 38px solid rgba(255, 255, 255, 0.22);
                         box-sizing: border-box">`,
                `</div>`,
                `<div
                  data-dc-tpl="11"
                  style="position: absolute;
                         left: 0px;
                         top: 50%;
                         transform: translateY(-46%);
                         z-index: 3">`,
                  `<div
                    data-dc-tpl="12"
                    style="display: flex;
                           flex-direction: column;
                           align-items: center;
                           gap: 8px;
                           box-sizing: border-box;
                           background: rgb(17, 15, 34);
                           border-radius: 0px 36px 36px 0px;
                           padding: 18px 14px 18px 10px;
                           color: rgb(243, 241, 255)">`,
                    `<a
                      aria-label="Home"
                      class="sb-i"
                      data-dc-tpl="13"
                      href="#home"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(243, 241, 255);
                             display: flex;
                             align-items: center;
                             justify-content: center"
                      title="Home">`,
                      `<svg
                        data-dc-tpl="14"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<path
                          d="M3 11l9-8 9 8"
                          data-dc-tpl="15">`,
                        `</path>`,
                        `<path
                          d="M5 10v10h5v-6h4v6h5V10"
                          data-dc-tpl="16">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="About"
                      class="sb-i"
                      data-dc-tpl="17"
                      href="#about"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(243, 241, 255);
                             display: flex;
                             align-items: center;
                             justify-content: center"
                      title="About">`,
                      `<svg
                        data-dc-tpl="18"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<circle
                          cx="12"
                          cy="8"
                          data-dc-tpl="19"
                          r="4">`,
                        `</circle>`,
                        `<path
                          d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"
                          data-dc-tpl="20">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="Skills"
                      class="sb-i"
                      data-dc-tpl="21"
                      href="#skills"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(243, 241, 255);
                             display: flex;
                             align-items: center;
                             justify-content: center"
                      title="Skills">`,
                      `<svg
                        data-dc-tpl="22"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<path
                          d="M13 2L4 14h7l-1 8 9-12h-7z"
                          data-dc-tpl="23">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="Experience"
                      class="sb-i"
                      data-dc-tpl="24"
                      href="#experience"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(243, 241, 255);
                             display: flex;
                             align-items: center;
                             justify-content: center"
                      title="Experience">`,
                      `<svg
                        data-dc-tpl="25"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<rect
                          data-dc-tpl="26"
                          height="13"
                          rx="3"
                          width="18"
                          x="3"
                          y="7">`,
                        `</rect>`,
                        `<path
                          d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"
                          data-dc-tpl="27">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="Certificates"
                      class="sb-i"
                      data-dc-tpl="28"
                      href="#certificates"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(243, 241, 255);
                             display: flex;
                             align-items: center;
                             justify-content: center"
                      title="Certificates">`,
                      `<svg
                        data-dc-tpl="29"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<circle
                          cx="12"
                          cy="9"
                          data-dc-tpl="30"
                          r="6">`,
                        `</circle>`,
                        `<path
                          d="M8 14l-2 8 6-3 6 3-2-8"
                          data-dc-tpl="31">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="Projects"
                      class="sb-i"
                      data-dc-tpl="32"
                      href="#projects"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: rgb(255, 229, 59);
                             color: rgb(20, 18, 43);
                             display: flex;
                             align-items: center;
                             justify-content: center"
                      title="Projects">`,
                      `<svg
                        data-dc-tpl="33"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<rect
                          data-dc-tpl="34"
                          height="7"
                          rx="2"
                          width="7"
                          x="3"
                          y="3">`,
                        `</rect>`,
                        `<rect
                          data-dc-tpl="35"
                          height="7"
                          rx="2"
                          width="7"
                          x="14"
                          y="3">`,
                        `</rect>`,
                        `<rect
                          data-dc-tpl="36"
                          height="7"
                          rx="2"
                          width="7"
                          x="3"
                          y="14">`,
                        `</rect>`,
                        `<rect
                          data-dc-tpl="37"
                          height="7"
                          rx="2"
                          width="7"
                          x="14"
                          y="14">`,
                        `</rect>`,
                      `</svg>`,
                    `</a>`,
                    `<a
                      aria-label="Contact"
                      class="sb-i"
                      data-dc-tpl="38"
                      href="#contact"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: transparent;
                             color: rgb(243, 241, 255);
                             display: flex;
                             align-items: center;
                             justify-content: center"
                      title="Contact">`,
                      `<svg
                        data-dc-tpl="39"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<rect
                          data-dc-tpl="40"
                          height="14"
                          rx="3"
                          width="18"
                          x="3"
                          y="5">`,
                        `</rect>`,
                        `<path
                          d="M3 8l9 6 9-6"
                          data-dc-tpl="41">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                  `</div>`,
                  `<div
                    data-dc-tpl="42"
                    style="position: absolute;
                           left: 0px;
                           bottom: calc(100% - 1px);
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 100% 0px, transparent 29.5px, rgb(17, 15, 34) 30px)">`,
                  `</div>`,
                  `<div
                    data-dc-tpl="43"
                    style="position: absolute;
                           left: 0px;
                           top: calc(100% - 1px);
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 100% 100%, transparent 29.5px, rgb(17, 15, 34) 30px)">`,
                  `</div>`,
                `</div>`,
                `<div
                  data-dc-tpl="44"
                  style="position: absolute;
                         top: 0px;
                         left: 0px;
                         z-index: 3">`,
                  `<div
                    data-dc-tpl="45"
                    style="width: 88px;
                           height: 88px;
                           box-sizing: border-box;
                           background: rgb(17, 15, 34);
                           border-radius: 0px 0px 30px;
                           padding: 12px;
                           color: rgb(243, 241, 255)">`,
                    `<a
                      aria-label="Home"
                      data-dc-tpl="46"
                      href="#home"
                      style="width: 64px;
                             height: 64px;
                             border-radius: 50%;
                             background: rgb(42, 38, 78);
                             display: flex;
                             align-items: center;
                             justify-content: center;
                             color: rgb(243, 241, 255)">`,
                      `<svg
                        data-dc-tpl="47"
                        fill="#FFE53B"
                        height="30"
                        viewbox="0 0 26 26"
                        width="30">`,
                        `<circle
                          cx="5"
                          cy="5"
                          data-dc-tpl="48"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="13"
                          cy="5"
                          data-dc-tpl="49"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="21"
                          cy="5"
                          data-dc-tpl="50"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="5"
                          cy="13"
                          data-dc-tpl="51"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="13"
                          cy="13"
                          data-dc-tpl="52"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="21"
                          cy="13"
                          data-dc-tpl="53"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="5"
                          cy="21"
                          data-dc-tpl="54"
                          r="2">`,
                        `</circle>`,
                        `<circle
                          cx="13"
                          cy="21"
                          data-dc-tpl="55"
                          r="2">`,
                        `</circle>`,
                      `</svg>`,
                    `</a>`,
                  `</div>`,
                  `<div
                    data-dc-tpl="56"
                    style="position: absolute;
                           left: calc(100% - 1px);
                           top: 0px;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 100% 100%, transparent 29.5px, rgb(17, 15, 34) 30px)">`,
                  `</div>`,
                  `<div
                    data-dc-tpl="57"
                    style="position: absolute;
                           top: calc(100% - 1px);
                           left: 0px;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 100% 100%, transparent 29.5px, rgb(17, 15, 34) 30px)">`,
                  `</div>`,
                `</div>`,
                `<div
                  data-dc-tpl="58"
                  style="position: absolute;
                         top: 0px;
                         left: 50%;
                         transform: translateX(-50%);
                         z-index: 3;
                         display: flex;
                         align-items: flex-start">`,
                  `<div
                    data-dc-tpl="59"
                    style="flex: 0 0 auto;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 0px 100%, transparent 29.5px, rgb(17, 15, 34) 30px)">`,
                  `</div>`,
                  `<div
                    data-dc-tpl="60"
                    style="background: rgb(17, 15, 34);
                           border-radius: 0px 0px 36px 36px;
                           padding: 16px 20px 20px;
                           color: rgb(243, 241, 255)">`,
                    `<nav
                      data-dc-tpl="61"
                      style="display: flex;
                             align-items: center;
                             gap: 2px;
                             background: rgb(42, 38, 78);
                             border-radius: 999px;
                             padding: 6px;
                             font-size: 14px;
                             font-weight: 500;
                             white-space: nowrap;
                             color: rgb(243, 241, 255)">`,
                      `<a
                        data-dc-tpl="62"
                        href="#home"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255)">`,
                        `Home`,
                      `</a>`,
                      `<a
                        data-dc-tpl="63"
                        href="#about"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255)">`,
                        `About`,
                      `</a>`,
                      `<a
                        data-dc-tpl="64"
                        href="#skills"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255)">`,
                        `Skills`,
                      `</a>`,
                      `<a
                        data-dc-tpl="65"
                        href="#experience"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255)">`,
                        `Experience`,
                      `</a>`,
                      `<a
                        data-dc-tpl="66"
                        href="#certificates"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255)">`,
                        `Certificates`,
                      `</a>`,
                      `<a
                        data-dc-tpl="67"
                        href="#projects"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               background: rgb(255, 229, 59);
                               color: rgb(20, 18, 43);
                               font-weight: 700">`,
                        `Projects`,
                      `</a>`,
                      `<a
                        data-dc-tpl="68"
                        href="#contact"
                        style="padding: 12px 16px;
                               border-radius: 999px;
                               color: rgb(255, 255, 255)">`,
                        `Contact`,
                      `</a>`,
                    `</nav>`,
                  `</div>`,
                  `<div
                    data-dc-tpl="69"
                    style="flex: 0 0 auto;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 100% 100%, transparent 29.5px, rgb(17, 15, 34) 30px)">`,
                  `</div>`,
                `</div>`,
                `<div
                  data-dc-tpl="70"
                  style="position: absolute;
                         top: 0px;
                         right: 0px;
                         z-index: 3">`,
                  `<div
                    data-dc-tpl="71"
                    style="background: rgb(17, 15, 34);
                           border-radius: 0px 0px 0px 30px;
                           padding: 16px 16px 20px 22px;
                           display: flex;
                           align-items: center;
                           gap: 10px;
                           color: rgb(243, 241, 255)">`,
                    `<button
                      aria-label="Toggle theme"
                      data-dc-tpl="72"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             border: none;
                             background: rgb(42, 38, 78);
                             display: flex;
                             align-items: center;
                             justify-content: center;
                             cursor: pointer;
                             color: rgb(243, 241, 255)"
                      type="button">`,
                      `<svg
                        data-dc-tpl="73"
                        fill="none"
                        height="22"
                        stroke="#F3F1FF"
                        stroke-linecap="round"
                        stroke-width="2.4"
                        viewbox="0 0 24 24"
                        width="22">`,
                        `<circle
                          cx="12"
                          cy="12"
                          data-dc-tpl="74"
                          r="4">`,
                        `</circle>`,
                        `<path
                          d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                          data-dc-tpl="75">`,
                        `</path>`,
                      `</svg>`,
                    `</button>`,
                    `<a
                      aria-label="Contact"
                      data-dc-tpl="76"
                      href="#contact"
                      style="width: 48px;
                             height: 48px;
                             border-radius: 50%;
                             background: rgb(255, 61, 154);
                             display: flex;
                             align-items: center;
                             justify-content: center">`,
                      `<svg
                        data-dc-tpl="77"
                        fill="none"
                        height="20"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        viewbox="0 0 24 24"
                        width="20">`,
                        `<path
                          d="M7 17L17 7M8 7h9v9"
                          data-dc-tpl="78">`,
                        `</path>`,
                      `</svg>`,
                    `</a>`,
                  `</div>`,
                  `<div
                    data-dc-tpl="79"
                    style="position: absolute;
                           right: calc(100% - 1px);
                           top: 0px;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 0px 100%, transparent 29.5px, rgb(17, 15, 34) 30px)">`,
                  `</div>`,
                  `<div
                    data-dc-tpl="80"
                    style="position: absolute;
                           top: calc(100% - 1px);
                           right: 0px;
                           width: 30px;
                           height: 30px;
                           background: radial-gradient(circle at 0px 100%, transparent 29.5px, rgb(17, 15, 34) 30px)">`,
                  `</div>`,
                `</div>`,
                `<div
                  data-dc-tpl="81"
                  style="position: absolute;
                         inset: 120px 48px 44px 132px;
                         display: flex;
                         gap: 28px">`,
                  `<div
                    style="flex: 1 1 0;
                           min-width: 0;
                           display: flex;
                           flex-direction: column;
                           gap: 16px">`,
                    `<a
                      href="#projects"
                      style="align-self: flex-start;
                             display: inline-flex;
                             align-items: center;
                             gap: 12px;
                             background: rgba(20, 18, 43, 0.75);
                             border-radius: 999px;
                             padding: 6px 22px 6px 6px;
                             font-family: 'JetBrains Mono', monospace;
                             font-size: 13px;
                             font-weight: 700;
                             color: rgb(243, 241, 255)">`,
                      `<span
                        style="width: 36px;
                               height: 36px;
                               border-radius: 50%;
                               background: rgb(12, 10, 26);
                               color: rgb(255, 255, 255);
                               display: flex;
                               align-items: center;
                               justify-content: center">`,
                        `<svg
                          fill="none"
                          height="18"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          viewbox="0 0 24 24"
                          width="18">`,
                          `<path
                            d="M19 12H5M11 6l-6 6 6 6">`,
                          `</path>`,
                        `</svg>`,
                      `</span>`,
                      `BACK TO PROJECTS`,
                    `</a>`,
                    `\n`,
                    `<div
                      style="display: flex;
                             align-items: flex-end;
                             gap: 16px">`,
                      `<span
                        style="font-family: 'Anton', sans-serif;
                               font-style: italic;
                               font-size: 40px;
                               line-height: 1;
                               color: rgb(255, 229, 59);
                               padding-bottom: 6px;
                               white-space: nowrap">`,
                        `06 »»`,
                      `</span>`,
                      `\n`,
                      `<h2
                        style="margin: 0;
                               font-family: 'Anton', sans-serif;
                               font-size: 64px;
                               line-height: 0.95;
                               text-transform: uppercase;
                               color: rgb(255, 255, 255);
                               white-space: nowrap">`,
                        `[Project Title]`,
                      `</h2>`,
                    `</div>`,
                    `\n`,
                    `<div
                      style="display: flex;
                             align-items: center;
                             gap: 10px;
                             font-family: 'JetBrains Mono', monospace;
                             font-size: 12px;
                             font-weight: 700;
                             color: rgb(20, 18, 43)">`,
                      `<span
                        class="dnum"
                        style="background: rgb(20, 18, 43);
                               color: rgb(255, 229, 59);
                               border-radius: 999px;
                               padding: 7px 14px">`,
                        `PROJECT 01`,
                      `</span>`,
                      `<span
                        style="background: rgb(29, 224, 160);
                               border-radius: 999px;
                               padding: 7px 14px">`,
                        `[STATUS]`,
                      `</span>`,
                      `<span
                        style="background: rgba(20, 18, 43, 0.75);
                               border-radius: 999px;
                               padding: 7px 14px;
                               color: rgb(243, 241, 255)">`,
                        `[CATEGORY] · [YEAR]`,
                      `</span>`,
                    `</div>`,
                    `\n`,
                    `<div
                      style="flex: 1 1 auto;
                             min-height: 0;
                             box-sizing: border-box;
                             background: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 0 10px, rgba(255, 255, 255, 0.28) 10px 11px), rgba(20, 18, 43, 0.56);
                             -webkit-backdrop-filter: blur(24px) saturate(180%);
                             backdrop-filter: blur(24px) saturate(180%);
                             border: 1.5px solid rgba(255, 255, 255, 0.22);
                             border-radius: 100px 36px 36px 36px;
                             padding: 34px 36px 26px 44px;
                             display: flex;
                             flex-direction: column;
                             justify-content: space-between;
                             gap: 12px;
                             box-shadow: 0 18px 50px rgba(20, 18, 80, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
                             color: rgb(243, 241, 255)">`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 4px;
                               color: rgb(243, 241, 255)">`,
                        `<span
                          style="font-family: 'Anton', sans-serif;
                                 font-size: 22px;
                                 text-transform: uppercase;
                                 color: rgb(243, 241, 255)">`,
                          `Background`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 line-height: 1.5;
                                 color: rgb(228, 226, 250)">`,
                          `[Describe the problem or need behind this project in two sentences.]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 4px;
                               color: rgb(243, 241, 255)">`,
                        `<span
                          style="font-family: 'Anton', sans-serif;
                                 font-size: 22px;
                                 text-transform: uppercase;
                                 color: rgb(243, 241, 255)">`,
                          `Solution &amp; your role`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 line-height: 1.5;
                                 color: rgb(228, 226, 250)">`,
                          `[Describe the approach, key features, and the part you built yourself.]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 4px;
                               color: rgb(243, 241, 255)">`,
                        `<span
                          style="font-family: 'Anton', sans-serif;
                                 font-size: 22px;
                                 text-transform: uppercase;
                                 color: rgb(243, 241, 255)">`,
                          `Results`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 line-height: 1.5;
                                 color: rgb(228, 226, 250)">`,
                          `[Impact or achievement: numbers, users, or key learnings.]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               gap: 10px;
                               font-size: 14px;
                               font-weight: 700;
                               color: rgb(243, 241, 255)">`,
                        `<a
                          href="#projects"
                          style="display: inline-flex;
                                 align-items: center;
                                 background: rgb(12, 10, 26);
                                 color: rgb(255, 255, 255);
                                 border-radius: 999px;
                                 padding: 13px 24px">`,
                          `Demo ↗`,
                        `</a>`,
                        `<a
                          href="#projects"
                          style="display: inline-flex;
                                 align-items: center;
                                 border: 2px solid rgba(243, 241, 255, 0.8);
                                 color: rgb(243, 241, 255);
                                 border-radius: 999px;
                                 padding: 11px 24px">`,
                          `GitHub`,
                        `</a>`,
                      `</div>`,
                      `\n`,
                    `</div>`,
                  `</div>`,
                  `<div
                    style="flex: 1 1 0;
                           min-width: 0;
                           display: flex;
                           flex-direction: column;
                           gap: 18px;
                           padding-top: 4px">`,
                    `<div
                      class="slot"
                      style="position: relative;
                             flex: 1 1 auto;
                             min-height: 0;
                             border-radius: 140px 36px 140px 36px;
                             overflow: hidden;
                             background: linear-gradient(145deg, rgb(124, 92, 255), rgb(75, 107, 255));
                             box-shadow: 0 22px 50px rgba(20, 18, 80, 0.30)">`,
                      `\n`,
                      `<svg
                        class="slot-ph"
                        height="100%"
                        preserveaspectratio="xMidYMid slice"
                        style="position: absolute;
                               inset: 0"
                        viewbox="0 0 560 300"
                        width="100%">`,
                        `<circle
                          cx="150"
                          cy="150"
                          fill="rgb(46, 230, 255)"
                          r="105">`,
                        `</circle>`,
                        `<circle
                          cx="230"
                          cy="150"
                          fill="rgb(255, 229, 59)"
                          fill-opacity="0.85"
                          r="105">`,
                        `</circle>`,
                        `<rect
                          fill="rgb(255, 61, 154)"
                          height="220"
                          rx="45"
                          width="90"
                          x="380"
                          y="40">`,
                        `</rect>`,
                      `</svg>`,
                      `\n`,
                      `<span
                        class="slot-ph"
                        style="position: absolute;
                               left: 22px;
                               bottom: 20px;
                               background: rgba(20, 18, 43, 0.62);
                               -webkit-backdrop-filter: blur(14px);
                               backdrop-filter: blur(14px);
                               border: 1.5px solid rgba(255, 255, 255, 0.22);
                               border-radius: 999px;
                               padding: 8px 16px;
                               font-family: 'JetBrains Mono', monospace;
                               font-weight: 700;
                               font-size: 12px;
                               color: rgb(243, 241, 255)">`,
                        `[MAIN PROJECT IMAGE]`,
                      `</span>`,
                      `<img
                        alt="Main project image"
                        class="slot-img"
                        data-slot="detail-main"/>`,
                    `</div>`,
                    `\n`,
                    `<div
                      style="display: flex;
                             gap: 16px;
                             height: 112px;
                             flex: none">`,
                      `\n`,
                      `<div
                        class="slot"
                        style="flex: 1 1 0;
                               border-radius: 28px 28px 28px 70px;
                               background: rgb(255, 229, 59);
                               display: flex;
                               align-items: flex-end;
                               padding: 12px 14px;
                               box-sizing: border-box;
                               font-family: 'JetBrains Mono', monospace;
                               font-size: 11px;
                               font-weight: 700;
                               color: rgb(20, 18, 43)">`,
                        `<span
                          class="slot-ph">`,
                          `[IMAGE 2]`,
                        `</span>`,
                        `<img
                          alt="Project image"
                          class="slot-img"
                          data-slot="detail-2"/>`,
                      `</div>`,
                      `\n`,
                      `<div
                        class="slot"
                        style="flex: 1 1 0;
                               border-radius: 70px 28px 28px 28px;
                               background: rgb(255, 61, 154);
                               display: flex;
                               align-items: flex-end;
                               padding: 12px 14px;
                               box-sizing: border-box;
                               font-family: 'JetBrains Mono', monospace;
                               font-size: 11px;
                               font-weight: 700;
                               color: rgb(20, 18, 43)">`,
                        `<span
                          class="slot-ph">`,
                          `[IMAGE 3]`,
                        `</span>`,
                        `<img
                          alt="Project image"
                          class="slot-img"
                          data-slot="detail-3"/>`,
                      `</div>`,
                      `\n`,
                      `<div
                        class="slot"
                        style="flex: 1 1 0;
                               border-radius: 28px 70px 28px 28px;
                               background: rgb(33, 30, 58);
                               display: flex;
                               align-items: flex-end;
                               padding: 12px 14px;
                               box-sizing: border-box;
                               font-family: 'JetBrains Mono', monospace;
                               font-size: 11px;
                               font-weight: 700;
                               color: rgb(243, 241, 255)">`,
                        `<span
                          class="slot-ph">`,
                          `[IMAGE 4]`,
                        `</span>`,
                        `<img
                          alt="Project image"
                          class="slot-img"
                          data-slot="detail-4"/>`,
                      `</div>`,
                    `</div>`,
                    `\n`,
                    `<div
                      style="flex: none;
                             box-sizing: border-box;
                             background: rgb(20, 18, 43);
                             color: rgb(255, 255, 255);
                             border-radius: 36px 36px 90px 36px;
                             padding: 24px 36px 26px;
                             display: grid;
                             grid-template-columns: 1fr 1fr;
                             gap: 14px 24px">`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 3px;
                               color: rgb(243, 241, 255)">`,
                        `<span
                          style="font-family: 'JetBrains Mono', monospace;
                                 font-size: 12px;
                                 font-weight: 700;
                                 color: rgb(255, 229, 59)">`,
                          `ROLE`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 font-weight: 700;
                                 color: rgb(255, 255, 255)">`,
                          `[Your role]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 3px;
                               color: rgb(243, 241, 255)">`,
                        `<span
                          style="font-family: 'JetBrains Mono', monospace;
                                 font-size: 12px;
                                 font-weight: 700;
                                 color: rgb(255, 229, 59)">`,
                          `DURATION`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 font-weight: 700;
                                 color: rgb(255, 255, 255)">`,
                          `[Project duration]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 3px;
                               color: rgb(243, 241, 255)">`,
                        `<span
                          style="font-family: 'JetBrains Mono', monospace;
                                 font-size: 12px;
                                 font-weight: 700;
                                 color: rgb(46, 230, 255)">`,
                          `TEAM`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 font-weight: 700;
                                 color: rgb(255, 255, 255)">`,
                          `[Team size / members]`,
                        `</span>`,
                      `</div>`,
                      `\n`,
                      `<div
                        style="display: flex;
                               flex-direction: column;
                               gap: 3px;
                               color: rgb(243, 241, 255)">`,
                        `<span
                          style="font-family: 'JetBrains Mono', monospace;
                                 font-size: 12px;
                                 font-weight: 700;
                                 color: rgb(46, 230, 255)">`,
                          `TECH STACK`,
                        `</span>`,
                        `<span
                          style="font-size: 15px;
                                 font-weight: 700;
                                 color: rgb(255, 255, 255)">`,
                          `[tag] · [tag] · [tag]`,
                        `</span>`,
                      `</div>`,
                    `</div>`,
                  `</div>`,
                `</div>`,
              `</div>`,
            `</div>`,
          `</div>`,
        `</div>`,
      `</div>`,
      `\n`,
    `</div>`,
  ].join(""),
};
