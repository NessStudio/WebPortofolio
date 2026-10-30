import type { SectionContent } from "./types";

/**
 * Panel 08 · Contact
 *
 * Cara mengedit: tiap elemen HTML ditulis satu per baris (turun ke bawah).
 * Cari teks yang ingin diganti (mis. [placeholder]) lalu ubah barisnya saja.
 * Ganti di KEDUA blok: `light` (tema terang) dan `dark` (tema gelap).
 * Jangan menambah spasi/baris kosong di antara tag; satu item = satu baris.
 * Slot gambar: lihat src/content/images.ts
 */
export const contact: SectionContent = {
  id: "contact",
  title: "Contact",

  // ───────────── TEMA TERANG ─────────────
  light: [
    `<div
      data-dc-tpl="8"
      style="position: absolute;
        top: 80px;
        right: -90px;
        width: 460px;
        height: 460px;
        border-radius: 58% 42% 51% 49% / 46% 55% 45% 54%;
        background: rgb(255, 61, 154);">`,
    `</div>`,
    `<div
      style="position: absolute;
        top: 0px;
        bottom: 0px;
        left: 268px;
        right: 268px">`,
    `<div
        data-dc-tpl="9"
        style="position: absolute;
          bottom: 0px;
          left: 460px;
          width: 220px;
          height: 110px;
          border-radius: 220px 220px 0px 0px;
          background: rgb(255, 229, 59)">`,
    `</div>`,
    `<div
        data-dc-tpl="10"
        style="position: absolute;
          top: 150px;
          left: 560px;
          width: 120px;
          height: 120px;
          background-image: radial-gradient(rgba(255, 255, 255, 0.9) 2.5px, transparent 2.5px);
          background-size: 20px 20px">`,
    `</div>`,
    `<div
        data-dc-tpl="82"
        style="position: absolute;
          display: flex;
          gap: 80px;
          top: 124px;
          bottom: 44px;
          left: 0px;
          right: 0px">`,
    `<div
          data-dc-tpl="83"
          style="flex: 1 1 0px;
            min-width: 0px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;">`,
    `<div
            data-dc-tpl="84"
            style="display: flex;
              flex-direction: column;
              gap: 16px;">`,
    `<span
              data-dc-tpl="85"
              style="font-family: Anton, sans-serif;
                font-style: italic;
                font-size: 40px;
                line-height: 1;
                color: rgb(255, 229, 59);
                white-space: nowrap;
                flex: 0 0 auto">`,
    `08 »»`,
    `</span>`,
    `<h2
              data-dc-tpl="86"
              style="margin: 0px;
                font-family: Anton, sans-serif;
                font-size: 118px;
                line-height: 0.9;
                text-transform: uppercase;
                color: rgb(255, 255, 255);">`,
    `Contact`,
    `<br data-dc-tpl="87"/>`,
    `Me`,
    `</h2>`,
    `<p
              data-dc-tpl="88"
              style="margin: 6px 0px 0px;
                max-width: 460px;
                font-size: 18px;
                line-height: 1.6;
                color: rgb(255, 255, 255);
                font-weight: 500;">`,
    `Got a project in mind, a job opportunity, or just want to say hi? My inbox is always open. Let's build something amazing together!`,
    `</p>`,
    `</div>`,
    `<div
            data-dc-tpl="89"
            style="display: flex;
              flex-direction: column;
              gap: 12px;
              max-width: 460px;">`,
    `<div
              data-dc-tpl="90"
              style="display: flex;
                align-items: center;
                gap: 14px;
                background: rgba(255, 255, 255, 0.35);
                backdrop-filter: blur(20px) saturate(170%);
                border: 1.5px solid rgba(255, 255, 255, 0.8);
                border-radius: 999px;
                padding: 8px 26px 8px 8px;
                box-shadow: rgba(40, 20, 140, 0.22) 0px 12px 30px;">`,
    `<span
                data-dc-tpl="91"
                style="width: 48px;
                  height: 48px;
                  border-radius: 50%;
                  background: rgb(255, 229, 59);
                  display: flex;
                  align-items: center;
                  justify-content: center;">`,
    `<svg
                  data-dc-tpl="92"
                  fill="none"
                  height="22"
                  stroke="#14122B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
    `<rect
                    data-dc-tpl="93"
                    height="14"
                    rx="3"
                    width="18"
                    x="3"
                    y="5">`,
    `</rect>`,
    `<path
                    d="M3 8l9 6 9-6"
                    data-dc-tpl="94">`,
    `</path>`,
    `</svg>`,
    `</span>`,
    `<span
                data-dc-tpl="95"
                style='font-family: "JetBrains Mono", monospace;
                  font-size: 15px;
                  font-weight: 700;'>`,
    `nendisetiawan10@gmail.com`,
    `</span>`,
    `</div>`,
    `<div
              data-dc-tpl="96"
              style="display: flex;
                align-items: center;
                gap: 14px;
                background: rgba(255, 255, 255, 0.35);
                backdrop-filter: blur(20px) saturate(170%);
                border: 1.5px solid rgba(255, 255, 255, 0.8);
                border-radius: 999px;
                padding: 8px 26px 8px 8px;
                box-shadow: rgba(40, 20, 140, 0.22) 0px 12px 30px;">`,
    `<span
                data-dc-tpl="97"
                style="width: 48px;
                  height: 48px;
                  border-radius: 50%;
                  background: rgb(46, 230, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center;">`,
    `<svg
                  data-dc-tpl="98"
                  fill="none"
                  height="22"
                  stroke="#14122B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
    `<path
                    d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"
                    data-dc-tpl="99">`,
    `</path>`,
    `<circle
                    cx="12"
                    cy="10"
                    data-dc-tpl="100"
                    r="2.5">`,
    `</circle>`,
    `</svg>`,
    `</span>`,
    `<span
                data-dc-tpl="101"
                style='font-family: "JetBrains Mono", monospace;
                  font-size: 15px;
                  font-weight: 700;'>`,
    `DIY, INDONESIA`,
    `</span>`,
    `</div>`,
    `<div
              data-dc-tpl="102"
              style="display: flex;
                gap: 10px;
                margin-top: 4px;">`,
    `<a
                aria-label="GitHub"
                data-dc-tpl="103"
                href="https://github.com/NessStudio"
                style="width: 52px;
                  height: 52px;
                  border-radius: 50%;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center;">`,
    `<svg
                  data-dc-tpl="104"
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
    `<path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    data-dc-tpl="105">`,
    `</path>`,
    `</svg>`,
    `</a>`,
    `<a
                aria-label="LinkedIn"
                data-dc-tpl="106"
                href="https://www.linkedin.com/in/nendisetiawan/"
                style="width: 52px;
                  height: 52px;
                  border-radius: 50%;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-family: Anton, sans-serif;
                  font-size: 21px;">`,
    `in`,
    `</a>`,
    `<a
                aria-label="Instagram"
                data-dc-tpl="107"
                href="https://www.instagram.com/nendistwn_/"
                style="width: 52px;
                  height: 52px;
                  border-radius: 50%;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center;">`,
    `<svg
                  data-dc-tpl="108"
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
    `<rect
                    data-dc-tpl="109"
                    height="18"
                    rx="5"
                    width="18"
                    x="3"
                    y="3">`,
    `</rect>`,
    `<circle
                    cx="12"
                    cy="12"
                    data-dc-tpl="110"
                    r="4">`,
    `</circle>`,
    `<circle
                    cx="17.5"
                    cy="6.5"
                    data-dc-tpl="111"
                    fill="currentColor"
                    r="1">`,
    `</circle>`,
    `</svg>`,
    `</a>`,
    `<a
                aria-label="Email"
                data-dc-tpl="112"
                href="mailto:nendisetiawan10@gmail.com"
                style="width: 52px;
                  height: 52px;
                  border-radius: 50%;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center;">`,
    `<svg
                  data-dc-tpl="113"
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
    `<rect
                    data-dc-tpl="114"
                    height="14"
                    rx="3"
                    width="18"
                    x="3"
                    y="5">`,
    `</rect>`,
    `<path
                    d="M3 8l9 6 9-6"
                    data-dc-tpl="115">`,
    `</path>`,
    `</svg>`,
    `</a>`,
    `</div>`,
    `</div>`,
    `</div>`,
    `<form
          data-dc-tpl="116"
          style="flex: 0 0 auto;
            width: 560px;
            box-sizing: border-box;
            align-self: stretch;
            background: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 31px, rgba(20, 18, 43, 0.08) 31px, rgba(20, 18, 43, 0.08) 32px), linear-gradient(200deg, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0.34));
            backdrop-filter: blur(26px) saturate(180%);
            border: 1.5px solid rgba(255, 255, 255, 0.85);
            border-radius: 36px 36px 36px 130px;
            padding: 44px 40px 36px;
            box-shadow: rgba(40, 20, 140, 0.28) 0px 22px 60px, rgba(255, 255, 255, 0.9) 0px 1px 0px inset;
            display: flex;
            flex-direction: column;
            gap: 14px;">`,
    `<span
            data-dc-tpl="117"
            style='align-self: flex-end;
              font-family: "JetBrains Mono", monospace;
              font-size: 13px;
              font-weight: 700;
              background: rgb(20, 18, 43);
              color: rgb(255, 229, 59);
              border-radius: 999px;
              padding: 8px 16px;'>`,
    `MESSAGE.FORM`,
    `</span>`,
    `<label
            data-dc-tpl="118"
            style='display: flex;
              flex-direction: column;
              gap: 6px;
              font-family: "JetBrains Mono", monospace;
              font-size: 12px;
              font-weight: 700;'>`,
    `NAME`,
    `<input
              data-dc-tpl="119"
              placeholder="[Your name]"
              style="height: 52px;
                box-sizing: border-box;
                border: none;
                border-radius: 999px;
                padding: 0px 24px;
                background: rgba(255, 255, 255, 0.9);"
              type="text"/>`,
    `</label>`,
    `<label
            data-dc-tpl="120"
            style='display: flex;
              flex-direction: column;
              gap: 6px;
              font-family: "JetBrains Mono", monospace;
              font-size: 12px;
              font-weight: 700;'>`,
    `EMAIL`,
    `<input
              data-dc-tpl="121"
              placeholder="[you@email.com]"
              style="height: 52px;
                box-sizing: border-box;
                border: none;
                border-radius: 999px;
                padding: 0px 24px;
                background: rgba(255, 255, 255, 0.9);"
              type="email"/>`,
    `</label>`,
    `<label
            data-dc-tpl="122"
            style='display: flex;
              flex-direction: column;
              gap: 6px;
              font-family: "JetBrains Mono", monospace;
              font-size: 12px;
              font-weight: 700;'>`,
    `SUBJECT`,
    `<input
              data-dc-tpl="123"
              placeholder="[Message subject]"
              style="height: 52px;
                box-sizing: border-box;
                border: none;
                border-radius: 999px;
                padding: 0px 24px;
                background: rgba(255, 255, 255, 0.9);"
              type="text"/>`,
    `</label>`,
    `<label
            data-dc-tpl="124"
            style='flex: 1 1 auto;
              min-height: 0px;
              display: flex;
              flex-direction: column;
              gap: 6px;
              font-family: "JetBrains Mono", monospace;
              font-size: 12px;
              font-weight: 700;'>`,
    `MESSAGE`,
    `<textarea
              data-dc-tpl="125"
              placeholder="[Write your message here…]"
              style="flex: 1 1 auto;
                min-height: 90px;
                box-sizing: border-box;
                border: none;
                border-radius: 28px 28px 28px 70px;
                padding: 18px 24px;
                background: rgba(255, 255, 255, 0.9);
                resize: none;">`,
    `</textarea>`,
    `</label>`,
    `<button
            data-dc-tpl="126"
            style='align-self: flex-start;
              display: inline-flex;
              align-items: center;
              gap: 14px;
              background: rgb(20, 18, 43);
              color: rgb(255, 255, 255);
              border: none;
              border-radius: 999px;
              padding: 8px 8px 8px 32px;
              font-family: "Space Grotesk", sans-serif;
              font-weight: 700;
              font-size: 17px;
              cursor: pointer;'
            type="submit">`,
    `Send message
`,
    `<span
              data-dc-tpl="127"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: linear-gradient(145deg, rgb(255, 61, 154), rgb(255, 229, 59));
                display: flex;
                align-items: center;
                justify-content: center;">`,
    `<svg
                data-dc-tpl="128"
                fill="none"
                height="22"
                stroke="#14122B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                viewbox="0 0 24 24"
                width="22">`,
    `<path
                  d="M5 12h14M13 6l6 6-6 6"
                  data-dc-tpl="129">`,
    `</path>`,
    `</svg>`,
    `</span>`,
    `</button>`,
    `</form>`,
    `</div>`,
    `</div>`,
    `<div
      data-dc-tpl="11"
      style="position: absolute;
        bottom: -60px;
        left: -40px;
        width: 260px;
        height: 260px;
        border-radius: 50%;
        background: rgb(46, 230, 255);">`,
    `</div>`,
  ].join(""),

  // ───────────── TEMA GELAP ─────────────
  dark: [
    `<div
      data-dc-tpl="8"
      style="position: absolute;
        top: 80px;
        right: -90px;
        width: 460px;
        height: 460px;
        border-radius: 58% 42% 51% 49% / 46% 55% 45% 54%;
        background: rgb(255, 61, 154)">`,
    `</div>`,
    `<div
      style="position: absolute;
        top: 0px;
        bottom: 0px;
        left: 268px;
        right: 268px">`,
    `<div
        data-dc-tpl="9"
        style="position: absolute;
          bottom: 0px;
          left: 460px;
          width: 220px;
          height: 110px;
          border-radius: 220px 220px 0px 0px;
          background: rgb(255, 229, 59)">`,
    `</div>`,
    `<div
        data-dc-tpl="10"
        style="position: absolute;
          top: 150px;
          left: 560px;
          width: 120px;
          height: 120px;
          background-image: radial-gradient(rgba(255, 255, 255, 0.9) 2.5px, transparent 2.5px);
          background-size: 20px 20px">`,
    `</div>`,
    `<div
        data-dc-tpl="82"
        style="position: absolute;
          display: flex;
          gap: 80px;
          top: 124px;
          bottom: 44px;
          left: 0px;
          right: 0px">`,
    `<div
          data-dc-tpl="83"
          style="flex: 1 1 0px;
            min-width: 0px;
            display: flex;
            flex-direction: column;
            justify-content: space-between">`,
    `<div
            data-dc-tpl="84"
            style="display: flex;
              flex-direction: column;
              gap: 16px">`,
    `<span
              data-dc-tpl="85"
              style="font-family: Anton, sans-serif;
                font-style: italic;
                font-size: 40px;
                line-height: 1;
                color: rgb(255, 229, 59);
                white-space: nowrap;
                flex: 0 0 auto">`,
    `08 »»`,
    `</span>`,
    `<h2
              data-dc-tpl="86"
              style="margin: 0px;
                font-family: Anton, sans-serif;
                font-size: 118px;
                line-height: 0.9;
                text-transform: uppercase;
                color: rgb(255, 255, 255)">`,
    `Contact`,
    `<br data-dc-tpl="87"/>`,
    `Me`,
    `</h2>`,
    `<p
              data-dc-tpl="88"
              style="margin: 6px 0px 0px;
                max-width: 460px;
                font-size: 18px;
                line-height: 1.6;
                color: rgb(255, 255, 255);
                font-weight: 500">`,
    `Got a project in mind, a job opportunity, or just want to say hi? My inbox is always open. Let's build something amazing together!`,
    `</p>`,
    `</div>`,
    `<div
            data-dc-tpl="89"
            style="display: flex;
              flex-direction: column;
              gap: 12px;
              max-width: 460px">`,
    `<div
              data-dc-tpl="90"
              style="display: flex;
                align-items: center;
                gap: 14px;
                background: rgba(20, 18, 43, 0.52);
                backdrop-filter: blur(20px) saturate(170%);
                border: 1.5px solid rgba(255, 255, 255, 0.22);
                border-radius: 999px;
                padding: 8px 26px 8px 8px;
                box-shadow: rgba(40, 20, 140, 0.22) 0px 12px 30px;
                color: rgb(243, 241, 255)">`,
    `<span
                data-dc-tpl="91"
                style="width: 48px;
                  height: 48px;
                  border-radius: 50%;
                  background: rgb(255, 229, 59);
                  display: flex;
                  align-items: center;
                  justify-content: center">`,
    `<svg
                  data-dc-tpl="92"
                  fill="none"
                  height="22"
                  stroke="#14122B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
    `<rect
                    data-dc-tpl="93"
                    height="14"
                    rx="3"
                    width="18"
                    x="3"
                    y="5">`,
    `</rect>`,
    `<path
                    d="M3 8l9 6 9-6"
                    data-dc-tpl="94">`,
    `</path>`,
    `</svg>`,
    `</span>`,
    `<span
                data-dc-tpl="95"
                style='font-family: "JetBrains Mono", monospace;
                  font-size: 15px;
                  font-weight: 700;
                  color: rgb(243, 241, 255)'>`,
    `nendisetiawan10@gmail.com`,
    `</span>`,
    `</div>`,
    `<div
              data-dc-tpl="96"
              style="display: flex;
                align-items: center;
                gap: 14px;
                background: rgba(20, 18, 43, 0.52);
                backdrop-filter: blur(20px) saturate(170%);
                border: 1.5px solid rgba(255, 255, 255, 0.22);
                border-radius: 999px;
                padding: 8px 26px 8px 8px;
                box-shadow: rgba(40, 20, 140, 0.22) 0px 12px 30px;
                color: rgb(243, 241, 255)">`,
    `<span
                data-dc-tpl="97"
                style="width: 48px;
                  height: 48px;
                  border-radius: 50%;
                  background: rgb(46, 230, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center">`,
    `<svg
                  data-dc-tpl="98"
                  fill="none"
                  height="22"
                  stroke="#14122B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
    `<path
                    d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"
                    data-dc-tpl="99">`,
    `</path>`,
    `<circle
                    cx="12"
                    cy="10"
                    data-dc-tpl="100"
                    r="2.5">`,
    `</circle>`,
    `</svg>`,
    `</span>`,
    `<span
                data-dc-tpl="101"
                style='font-family: "JetBrains Mono", monospace;
                  font-size: 15px;
                  font-weight: 700;
                  color: rgb(243, 241, 255)'>`,
    `DIY, INDONESIA`,
    `</span>`,
    `</div>`,
    `<div
              data-dc-tpl="102"
              style="display: flex;
                gap: 10px;
                margin-top: 4px">`,
    `<a
                aria-label="GitHub"
                data-dc-tpl="103"
                href="https://github.com/NessStudio"
                style="width: 52px;
                  height: 52px;
                  border-radius: 50%;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center">`,
    `<svg
                  data-dc-tpl="104"
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
    `<path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    data-dc-tpl="105">`,
    `</path>`,
    `</svg>`,
    `</a>`,
    `<a
                aria-label="LinkedIn"
                data-dc-tpl="106"
                href="https://www.linkedin.com/in/nendisetiawan/"
                style="width: 52px;
                  height: 52px;
                  border-radius: 50%;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-family: Anton, sans-serif;
                  font-size: 21px">`,
    `in`,
    `</a>`,
    `<a
                aria-label="Instagram"
                data-dc-tpl="107"
                href="https://www.instagram.com/nendistwn_/"
                style="width: 52px;
                  height: 52px;
                  border-radius: 50%;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center">`,
    `<svg
                  data-dc-tpl="108"
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
    `<rect
                    data-dc-tpl="109"
                    height="18"
                    rx="5"
                    width="18"
                    x="3"
                    y="3">`,
    `</rect>`,
    `<circle
                    cx="12"
                    cy="12"
                    data-dc-tpl="110"
                    r="4">`,
    `</circle>`,
    `<circle
                    cx="17.5"
                    cy="6.5"
                    data-dc-tpl="111"
                    fill="currentColor"
                    r="1">`,
    `</circle>`,
    `</svg>`,
    `</a>`,
    `<a
                aria-label="Email"
                data-dc-tpl="112"
                href="mailto:nendisetiawan10@gmail.com"
                style="width: 52px;
                  height: 52px;
                  border-radius: 50%;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center">`,
    `<svg
                  data-dc-tpl="113"
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
    `<rect
                    data-dc-tpl="114"
                    height="14"
                    rx="3"
                    width="18"
                    x="3"
                    y="5">`,
    `</rect>`,
    `<path
                    d="M3 8l9 6 9-6"
                    data-dc-tpl="115">`,
    `</path>`,
    `</svg>`,
    `</a>`,
    `</div>`,
    `</div>`,
    `</div>`,
    `<form
          data-dc-tpl="116"
          style="flex: 0 0 auto;
            width: 560px;
            box-sizing: border-box;
            align-self: stretch;
            background: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 31px, rgba(255, 255, 255, 0.07) 31px, rgba(255, 255, 255, 0.07) 32px), linear-gradient(200deg, rgba(20, 18, 43, 0.67), rgba(20, 18, 43, 0.39));
            backdrop-filter: blur(26px) saturate(180%);
            border: 1.5px solid rgba(255, 255, 255, 0.22);
            border-radius: 36px 36px 36px 130px;
            padding: 44px 40px 36px;
            box-shadow: rgba(40, 20, 140, 0.28) 0px 22px 60px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset;
            display: flex;
            flex-direction: column;
            gap: 14px;
            color: rgb(243, 241, 255)">`,
    `<span
            data-dc-tpl="117"
            style='align-self: flex-end;
              font-family: "JetBrains Mono", monospace;
              font-size: 13px;
              font-weight: 700;
              background: rgb(12, 10, 26);
              color: rgb(255, 229, 59);
              border-radius: 999px;
              padding: 8px 16px'>`,
    `MESSAGE.FORM`,
    `</span>`,
    `<label
            data-dc-tpl="118"
            style='display: flex;
              flex-direction: column;
              gap: 6px;
              font-family: "JetBrains Mono", monospace;
              font-size: 12px;
              font-weight: 700;
              color: rgb(243, 241, 255)'>`,
    `NAME`,
    `<input
              data-dc-tpl="119"
              placeholder="[Your name]"
              style="height: 52px;
                box-sizing: border-box;
                border: none;
                border-radius: 999px;
                padding: 0px 24px;
                background: rgba(20, 18, 43, 0.8);
                color: rgb(243, 241, 255)"
              type="text"/>`,
    `</label>`,
    `<label
            data-dc-tpl="120"
            style='display: flex;
              flex-direction: column;
              gap: 6px;
              font-family: "JetBrains Mono", monospace;
              font-size: 12px;
              font-weight: 700;
              color: rgb(243, 241, 255)'>`,
    `EMAIL`,
    `<input
              data-dc-tpl="121"
              placeholder="[you@email.com]"
              style="height: 52px;
                box-sizing: border-box;
                border: none;
                border-radius: 999px;
                padding: 0px 24px;
                background: rgba(20, 18, 43, 0.8);
                color: rgb(243, 241, 255)"
              type="email"/>`,
    `</label>`,
    `<label
            data-dc-tpl="122"
            style='display: flex;
              flex-direction: column;
              gap: 6px;
              font-family: "JetBrains Mono", monospace;
              font-size: 12px;
              font-weight: 700;
              color: rgb(243, 241, 255)'>`,
    `SUBJECT`,
    `<input
              data-dc-tpl="123"
              placeholder="[Message subject]"
              style="height: 52px;
                box-sizing: border-box;
                border: none;
                border-radius: 999px;
                padding: 0px 24px;
                background: rgba(20, 18, 43, 0.8);
                color: rgb(243, 241, 255)"
              type="text"/>`,
    `</label>`,
    `<label
            data-dc-tpl="124"
            style='flex: 1 1 auto;
              min-height: 0px;
              display: flex;
              flex-direction: column;
              gap: 6px;
              font-family: "JetBrains Mono", monospace;
              font-size: 12px;
              font-weight: 700;
              color: rgb(243, 241, 255)'>`,
    `MESSAGE`,
    `<textarea
              data-dc-tpl="125"
              placeholder="[Write your message here…]"
              style="flex: 1 1 auto;
                min-height: 90px;
                box-sizing: border-box;
                border: none;
                border-radius: 28px 28px 28px 70px;
                padding: 18px 24px;
                background: rgba(20, 18, 43, 0.8);
                resize: none;
                color: rgb(243, 241, 255)">`,
    `</textarea>`,
    `</label>`,
    `<button
            data-dc-tpl="126"
            style='align-self: flex-start;
              display: inline-flex;
              align-items: center;
              gap: 14px;
              background: rgb(12, 10, 26);
              color: rgb(255, 255, 255);
              border: none;
              border-radius: 999px;
              padding: 8px 8px 8px 32px;
              font-family: "Space Grotesk", sans-serif;
              font-weight: 700;
              font-size: 17px;
              cursor: pointer'
            type="submit">`,
    `Send message
`,
    `<span
              data-dc-tpl="127"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: linear-gradient(145deg, rgb(255, 61, 154), rgb(255, 229, 59));
                display: flex;
                align-items: center;
                justify-content: center">`,
    `<svg
                data-dc-tpl="128"
                fill="none"
                height="22"
                stroke="#14122B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                viewbox="0 0 24 24"
                width="22">`,
    `<path
                  d="M5 12h14M13 6l6 6-6 6"
                  data-dc-tpl="129">`,
    `</path>`,
    `</svg>`,
    `</span>`,
    `</button>`,
    `</form>`,
    `</div>`,
    `</div>`,
    `<div
      data-dc-tpl="11"
      style="position: absolute;
        bottom: -60px;
        left: -40px;
        width: 260px;
        height: 260px;
        border-radius: 50%;
        background: rgb(46, 230, 255)">`,
    `</div>`,
  ].join(""),
};
