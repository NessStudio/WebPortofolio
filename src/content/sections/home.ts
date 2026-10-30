import type { SectionContent } from "./types";

/**
 * Panel 01 · Home
 *
 * Cara mengedit: tiap elemen HTML ditulis satu per baris (turun ke bawah).
 * Cari teks yang ingin diganti (mis. [placeholder]) lalu ubah barisnya saja.
 * Ganti di KEDUA blok: `light` (tema terang) dan `dark` (tema gelap).
 * Jangan menambah spasi/baris kosong di antara tag; satu item = satu baris.
 * Slot gambar: lihat src/content/images.ts
 */
export const home: SectionContent = {
  id: "home",
  title: "Home",

  // ───────────── TEMA TERANG ─────────────
  light: [
    `<div
      style="position: absolute;
        top: 0px;
        bottom: 0px;
        left: 268px;
        right: 268px">`,
    `<div
        data-dc-tpl="8"
        style="position: absolute;
          top: 110px;
          right: -148px;
          width: 560px;
          height: 560px;
          border-radius: 62% 38% 54% 46% / 48% 56% 44% 52%;
          background: rgb(46, 230, 255)">`,
    `</div>`,
    `<div
        data-dc-tpl="9"
        style="position: absolute;
          top: auto;
          right: 302px;
          width: 200px;
          height: 100px;
          border-radius: 200px 200px 0px 0px;
          background: rgb(255, 229, 59);
          bottom: 0px">`,
    `</div>`,
    `<div
        data-dc-tpl="10"
        style="position: absolute;
          bottom: 30px;
          right: 0px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 28px solid rgb(124, 92, 255);
          box-sizing: border-box">`,
    `</div>`,
    `<div
        data-dc-tpl="11"
        style="position: absolute;
          top: 0px;
          left: 100px;
          width: 20px;
          height: 230px;
          background: rgb(255, 255, 255);
          border-radius: 0px 0px 14px 14px">`,
    `</div>`,
    `<div
        data-dc-tpl="12"
        style="position: absolute;
          top: 0px;
          left: 136px;
          width: 20px;
          height: 150px;
          background: rgb(255, 255, 255);
          border-radius: 0px 0px 14px 14px">`,
    `</div>`,
    `<div
        data-dc-tpl="13"
        style="position: absolute;
          top: 150px;
          left: 198px;
          width: 120px;
          height: 120px;
          background-image: radial-gradient(rgba(255, 255, 255, 0.9) 2.5px, transparent 2.5px);
          background-size: 20px 20px">`,
    `</div>`,
    `<svg
        data-dc-tpl="14"
        fill="#FFE53B"
        height="70"
        style="position: absolute;
          top: 108px;
          right: -8px"
        viewbox="0 0 64 64"
        width="70">`,
    `<path
          d="M32 2 C34 22 42 30 62 32 C42 34 34 42 32 62 C30 42 22 34 2 32 C22 30 30 22 32 2Z"
          data-dc-tpl="15">`,
    `</path>`,
    `</svg>`,
    `<div
        data-dc-tpl="16"
        style="position: absolute;
          top: 120px;
          right: 50px;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: rgb(255, 255, 255);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(20, 18, 43, 0.25) 0px 24px 60px">`,
    `<div
          class="slot slot-dashed"
          data-dc-tpl="17"
          style='width: 304px;
            height: 304px;
            border-radius: 50%;
            border: 3px dashed rgb(255, 61, 154);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "JetBrains Mono", monospace;
            font-weight: 700;
            font-size: 16px;
            flex: 0 0 auto'>`,
    `<span class="slot-ph">`,
    `[YOUR PROFILE PHOTO]`,
    `</span>`,
    `<img
            alt="Profile photo"
            class="slot-img"
            data-slot="home-photo"/>`,
    `</div>`,
    `</div>`,
    `<span
        data-dc-tpl="18"
        style='position: absolute;
          top: 150px;
          right: 352px;
          background: rgb(255, 229, 59);
          border-radius: 999px;
          padding: 10px 20px;
          font-family: "JetBrains Mono", monospace;
          font-weight: 700;
          font-size: 14px;
          transform: rotate(-8deg);
          z-index: 3'>`,
    `Tech Enthusiast`,
    `</span>`,
    `<span
        data-dc-tpl="19"
        style='position: absolute;
          top: 330px;
          right: -32px;
          background: rgb(20, 18, 43);
          color: rgb(255, 255, 255);
          border-radius: 999px;
          padding: 10px 20px;
          font-family: "JetBrains Mono", monospace;
          font-weight: 700;
          font-size: 14px;
          transform: rotate(7deg);
          z-index: 3'>`,
    `Available for Work`,
    `</span>`,
    `<div
        style="position: absolute;
          top: 496px;
          right: 0px;
          width: 440px;
          display: flex;
          gap: 16px;
          align-items: stretch;
          z-index: 2">`,
    `<div
          data-dc-tpl="20"
          style="position: static;
            width: auto;
            box-sizing: border-box;
            background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 12px, rgba(255, 255, 255, 0.28) 12px, rgba(255, 255, 255, 0.28) 14px), rgba(255, 255, 255, 0.34);
            backdrop-filter: blur(22px) saturate(170%);
            border: 1.5px solid rgba(255, 255, 255, 0.75);
            border-radius: 80px 28px;
            padding: 20px 22px;
            box-shadow: rgba(120, 20, 80, 0.25) 0px 14px 44px, rgba(255, 255, 255, 0.9) 0px 1px 0px inset;
            display: flex;
            flex-direction: column;
            gap: 4px;
            flex: 1 1 0px;
            min-width: 0px">`,
    `<span
            data-dc-tpl="21"
            style="font-family: Anton, sans-serif;
              font-size: 50px;
              line-height: 1">`,
    `3+ Years`,
    `</span>`,
    `<span
            data-dc-tpl="22"
            style='font-family: "JetBrains Mono", monospace;
              font-size: 13px;
              font-weight: 700;
              line-height: 1.35'>`,
    `Learning &amp; Build`,
    `</span>`,
    `</div>`,
    `<div
          data-dc-tpl="23"
          style="position: static;
            width: auto;
            box-sizing: border-box;
            background: radial-gradient(rgba(255, 255, 255, 0.75) 2px, transparent 2.5px) 0px 0px / 18px 18px, rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(22px) saturate(170%);
            border: 1.5px solid rgba(255, 255, 255, 0.75);
            border-radius: 36px 90px;
            padding: 20px 22px;
            box-shadow: rgba(120, 20, 80, 0.25) 0px 14px 44px, rgba(255, 255, 255, 0.9) 0px 1px 0px inset;
            display: flex;
            flex-direction: column;
            gap: 4px;
            flex: 1 1 0px;
            min-width: 0px">`,
    `<span
            data-dc-tpl="24"
            style="font-family: Anton, sans-serif;
              font-size: 50px;
              line-height: 1">`,
    `5+ Projects`,
    `</span>`,
    `<span
            data-dc-tpl="25"
            style='font-family: "JetBrains Mono", monospace;
              font-size: 13px;
              font-weight: 700;
              line-height: 1.35'>`,
    `Have Been Complete`,
    `</span>`,
    `</div>`,
    `</div>`,
    `<div
        data-dc-tpl="96"
        style="position: absolute;
          left: 0px;
          bottom: 44px;
          display: flex;
          flex-direction: column;
          gap: 18px">`,
    `<div
          data-dc-tpl="97"
          style="font-family: Anton, sans-serif;
            font-style: italic;
            font-size: 40px;
            color: rgb(255, 255, 255);
            line-height: 1;
            white-space: nowrap;
            flex: 0 0 auto">`,
    `01 `,
    `<span
            data-dc-tpl="98"
            style="color: rgb(255, 229, 59);">`,
    `»»`,
    `</span>`,
    `</div>`,
    `<div
          data-dc-tpl="99"
          style='display: flex;
            align-items: center;
            gap: 14px;
            font-family: "JetBrains Mono", monospace;
            font-size: 15px;
            font-weight: 700;'>`,
    `<span
            data-dc-tpl="100"
            style="background: rgba(255, 255, 255, 0.35);
              border-radius: 999px;
              padding: 12px 22px;
              white-space: nowrap;">`,
    `Hi, I'm`,
    `</span>`,
    `<span
            data-dc-tpl="101"
            style="background: rgb(255, 255, 255);
              border-radius: 999px;
              padding: 12px 22px;
              white-space: nowrap;">`,
    `✦ Informatics Student`,
    `<span
              data-dc-tpl="102"
              style="display: inline-block;
                width: 3px;
                height: 16px;
                background: rgb(20, 18, 43);
                margin-left: 6px;
                vertical-align: -2px;">`,
    `</span>`,
    `</span>`,
    `</div>`,
    `<div
          data-dc-tpl="103"
          style="font-family: Anton, sans-serif;
            font-size: 172px;
            line-height: 0.86;
            text-transform: uppercase;
            color: rgb(255, 255, 255);
            letter-spacing: 1px">`,
    `<div
            data-dc-tpl="104"
            style="white-space: nowrap">`,
    `NENDI B.`,
    `</div>`,
    `<div
            data-dc-tpl="105"
            style="white-space: nowrap">`,
    `SETIAWAN`,
    `</div>`,
    `</div>`,
    `<div
          data-dc-tpl="106"
          style="display: flex;
            flex-direction: column;
            gap: 6px;
            max-width: 560px">`,
    `<span
            data-dc-tpl="107"
            style="font-size: 17px;
              font-weight: 500;
              line-height: 1.5;">`,
    `Data Science, Machine Learning &amp; AI Enthusiast`,
    `</span>`,
    `<span
            data-dc-tpl="108"
            style='font-family: "JetBrains Mono", monospace;
              font-size: 14px;
              font-weight: 700;'>`,
    `Universitas Ahmad Dahlan · Yogyakarta`,
    `</span>`,
    `</div>`,
    `<div
          data-dc-tpl="109"
          style="display: flex;
            align-items: center;
            gap: 16px;">`,
    `<a
            data-dc-tpl="110"
            href="#projects"
            style="display: inline-flex;
              align-items: center;
              gap: 14px;
              background: rgb(20, 18, 43);
              color: rgb(255, 255, 255);
              border-radius: 999px;
              padding: 8px 8px 8px 32px;
              font-weight: 700;
              font-size: 17px;">`,
    `View Projects
`,
    `<span
              data-dc-tpl="111"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                color: rgb(20, 18, 43);
                display: flex;
                align-items: center;
                justify-content: center;">`,
    `<svg
                data-dc-tpl="112"
                fill="none"
                height="22"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                viewbox="0 0 24 24"
                width="22">`,
    `<path
                  d="M5 12h14M13 6l6 6-6 6"
                  data-dc-tpl="113">`,
    `</path>`,
    `</svg>`,
    `</span>`,
    `</a>`,
    `<a
            data-dc-tpl="114"
            href="#contact"
            style="display: inline-flex;
              align-items: center;
              border: 2px solid rgb(255, 255, 255);
              color: rgb(255, 255, 255);
              border-radius: 999px;
              padding: 0px 30px;
              height: 64px;
              box-sizing: border-box;
              font-weight: 700;
              font-size: 17px;">`,
    `Download CV`,
    `</a>`,
    `<div
            data-dc-tpl="115"
            style="display: flex;
              gap: 10px;
              margin-left: 8px;">`,
    `<a
              aria-label="GitHub"
              data-dc-tpl="116"
              href="https://github.com/NessStudio"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(14px);
                border: 1.5px solid rgba(255, 255, 255, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;">`,
    `<svg
                data-dc-tpl="117"
                fill="none"
                height="22"
                stroke="#14122B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.4"
                viewbox="0 0 24 24"
                width="22">`,
    `<path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  data-dc-tpl="118">`,
    `</path>`,
    `</svg>`,
    `</a>`,
    `<a
              aria-label="LinkedIn"
              data-dc-tpl="119"
              href="https://www.linkedin.com/in/nendisetiawan/"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(14px);
                border: 1.5px solid rgba(255, 255, 255, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: Anton, sans-serif;
                font-size: 20px;">`,
    `in`,
    `</a>`,
    `<a
              aria-label="Instagram"
              data-dc-tpl="120"
              href="https://www.instagram.com/nendistwn_/"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(14px);
                border: 1.5px solid rgba(255, 255, 255, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;">`,
    `<svg
                data-dc-tpl="121"
                fill="none"
                height="22"
                stroke="#14122B"
                stroke-linecap="round"
                stroke-width="2.4"
                viewbox="0 0 24 24"
                width="22">`,
    `<rect
                  data-dc-tpl="122"
                  height="18"
                  rx="5"
                  width="18"
                  x="3"
                  y="3">`,
    `</rect>`,
    `<circle
                  cx="12"
                  cy="12"
                  data-dc-tpl="123"
                  r="4">`,
    `</circle>`,
    `<circle
                  cx="17.5"
                  cy="6.5"
                  data-dc-tpl="124"
                  fill="#14122B"
                  r="1">`,
    `</circle>`,
    `</svg>`,
    `</a>`,
    `<a
              aria-label="Email"
              data-dc-tpl="125"
              href="mailto:nendisetiawan10@gmail.com"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(14px);
                border: 1.5px solid rgba(255, 255, 255, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;">`,
    `<svg
                data-dc-tpl="126"
                fill="none"
                height="22"
                stroke="#14122B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.4"
                viewbox="0 0 24 24"
                width="22">`,
    `<rect
                  data-dc-tpl="127"
                  height="14"
                  rx="3"
                  width="18"
                  x="3"
                  y="5">`,
    `</rect>`,
    `<path
                  d="M3 8l9 6 9-6"
                  data-dc-tpl="128">`,
    `</path>`,
    `</svg>`,
    `</a>`,
    `</div>`,
    `</div>`,
    `</div>`,
    `</div>`,
  ].join(""),

  // ───────────── TEMA GELAP ─────────────
  dark: [
    `<div
      style="position: absolute;
        top: 0px;
        bottom: 0px;
        left: 268px;
        right: 268px">`,
    `<div
        data-dc-tpl="8"
        style="position: absolute;
          top: 110px;
          right: -148px;
          width: 560px;
          height: 560px;
          border-radius: 62% 38% 54% 46% / 48% 56% 44% 52%;
          background: rgb(46, 230, 255)">`,
    `</div>`,
    `<div
        data-dc-tpl="9"
        style="position: absolute;
          top: auto;
          right: 302px;
          width: 200px;
          height: 100px;
          border-radius: 200px 200px 0px 0px;
          background: rgb(255, 229, 59);
          bottom: 0px">`,
    `</div>`,
    `<div
        data-dc-tpl="10"
        style="position: absolute;
          bottom: 30px;
          right: 0px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 28px solid rgb(124, 92, 255);
          box-sizing: border-box">`,
    `</div>`,
    `<div
        data-dc-tpl="11"
        style="position: absolute;
          top: 0px;
          left: 100px;
          width: 20px;
          height: 230px;
          background: rgb(33, 30, 58);
          border-radius: 0px 0px 14px 14px;
          color: rgb(243, 241, 255)">`,
    `</div>`,
    `<div
        data-dc-tpl="12"
        style="position: absolute;
          top: 0px;
          left: 136px;
          width: 20px;
          height: 150px;
          background: rgb(33, 30, 58);
          border-radius: 0px 0px 14px 14px;
          color: rgb(243, 241, 255)">`,
    `</div>`,
    `<div
        data-dc-tpl="13"
        style="position: absolute;
          top: 150px;
          left: 198px;
          width: 120px;
          height: 120px;
          background-image: radial-gradient(rgba(255, 255, 255, 0.9) 2.5px, transparent 2.5px);
          background-size: 20px 20px">`,
    `</div>`,
    `<svg
        data-dc-tpl="14"
        fill="#FFE53B"
        height="70"
        style="position: absolute;
          top: 108px;
          right: -8px"
        viewbox="0 0 64 64"
        width="70">`,
    `<path
          d="M32 2 C34 22 42 30 62 32 C42 34 34 42 32 62 C30 42 22 34 2 32 C22 30 30 22 32 2Z"
          data-dc-tpl="15">`,
    `</path>`,
    `</svg>`,
    `<div
        data-dc-tpl="16"
        style="position: absolute;
          top: 120px;
          right: 50px;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: rgb(33, 30, 58);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(20, 18, 43, 0.25) 0px 24px 60px;
          color: rgb(243, 241, 255)">`,
    `<div
          class="slot slot-dashed"
          data-dc-tpl="17"
          style='width: 304px;
            height: 304px;
            border-radius: 50%;
            border: 3px dashed rgb(255, 61, 154);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "JetBrains Mono", monospace;
            font-weight: 700;
            font-size: 16px;
            color: rgb(243, 241, 255);
            flex: 0 0 auto'>`,
    `<span class="slot-ph">`,
    `[YOUR PROFILE PHOTO]`,
    `</span>`,
    `<img
            alt="Profile photo"
            class="slot-img"
            data-slot="home-photo"/>`,
    `</div>`,
    `</div>`,
    `<span
        data-dc-tpl="18"
        style='position: absolute;
          top: 150px;
          right: 352px;
          background: rgb(255, 229, 59);
          border-radius: 999px;
          padding: 10px 20px;
          font-family: "JetBrains Mono", monospace;
          font-weight: 700;
          font-size: 14px;
          transform: rotate(-8deg);
          z-index: 3'>`,
    `Tech Enthusiast`,
    `</span>`,
    `<span
        data-dc-tpl="19"
        style='position: absolute;
          top: 330px;
          right: -32px;
          background: rgb(20, 18, 43);
          color: rgb(255, 255, 255);
          border-radius: 999px;
          padding: 10px 20px;
          font-family: "JetBrains Mono", monospace;
          font-weight: 700;
          font-size: 14px;
          transform: rotate(7deg);
          z-index: 3'>`,
    `Available for Work`,
    `</span>`,
    `<div
        style="position: absolute;
          top: 496px;
          right: 0px;
          width: 440px;
          display: flex;
          gap: 16px;
          align-items: stretch;
          z-index: 2">`,
    `<div
          data-dc-tpl="20"
          style="position: static;
            width: auto;
            box-sizing: border-box;
            background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 12px, rgba(255, 255, 255, 0.28) 12px, rgba(255, 255, 255, 0.28) 14px), rgba(20, 18, 43, 0.52);
            backdrop-filter: blur(22px) saturate(170%);
            border: 1.5px solid rgba(255, 255, 255, 0.22);
            border-radius: 80px 28px;
            padding: 20px 22px;
            box-shadow: rgba(120, 20, 80, 0.25) 0px 14px 44px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset;
            display: flex;
            flex-direction: column;
            gap: 4px;
            color: rgb(243, 241, 255);
            flex: 1 1 0px;
            min-width: 0px">`,
    `<span
            data-dc-tpl="21"
            style="font-family: Anton, sans-serif;
              font-size: 50px;
              line-height: 1;
              color: rgb(243, 241, 255)">`,
    `3+ Years`,
    `</span>`,
    `<span
            data-dc-tpl="22"
            style='font-family: "JetBrains Mono", monospace;
              font-size: 13px;
              font-weight: 700;
              color: rgb(243, 241, 255);
              line-height: 1.35'>`,
    `Learning &amp; Build`,
    `</span>`,
    `</div>`,
    `<div
          data-dc-tpl="23"
          style="position: static;
            width: auto;
            box-sizing: border-box;
            background: radial-gradient(rgba(255, 255, 255, 0.75) 2px, transparent 2.5px) 0px 0px / 18px 18px, rgba(20, 18, 43, 0.5);
            backdrop-filter: blur(22px) saturate(170%);
            border: 1.5px solid rgba(255, 255, 255, 0.22);
            border-radius: 36px 90px;
            padding: 20px 22px;
            box-shadow: rgba(120, 20, 80, 0.25) 0px 14px 44px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset;
            display: flex;
            flex-direction: column;
            gap: 4px;
            color: rgb(243, 241, 255);
            flex: 1 1 0px;
            min-width: 0px">`,
    `<span
            data-dc-tpl="24"
            style="font-family: Anton, sans-serif;
              font-size: 50px;
              line-height: 1;
              color: rgb(243, 241, 255)">`,
    `5+ Projects`,
    `</span>`,
    `<span
            data-dc-tpl="25"
            style='font-family: "JetBrains Mono", monospace;
              font-size: 13px;
              font-weight: 700;
              color: rgb(243, 241, 255);
              line-height: 1.35'>`,
    `Have Been Complete`,
    `</span>`,
    `</div>`,
    `</div>`,
    `<div
        data-dc-tpl="96"
        style="position: absolute;
          left: 0px;
          bottom: 44px;
          display: flex;
          flex-direction: column;
          gap: 18px">`,
    `<div
          data-dc-tpl="97"
          style="font-family: Anton, sans-serif;
            font-style: italic;
            font-size: 40px;
            color: rgb(255, 255, 255);
            line-height: 1;
            white-space: nowrap;
            flex: 0 0 auto">`,
    `01 `,
    `<span
            data-dc-tpl="98"
            style="color: rgb(255, 229, 59)">`,
    `»»`,
    `</span>`,
    `</div>`,
    `<div
          data-dc-tpl="99"
          style='display: flex;
            align-items: center;
            gap: 14px;
            font-family: "JetBrains Mono", monospace;
            font-size: 15px;
            font-weight: 700'>`,
    `<span
            data-dc-tpl="100"
            style="background: rgba(20, 18, 43, 0.52);
              border-radius: 999px;
              padding: 12px 22px;
              white-space: nowrap;
              color: rgb(243, 241, 255)">`,
    `Hi, I'm`,
    `</span>`,
    `<span
            data-dc-tpl="101"
            style="background: rgb(33, 30, 58);
              border-radius: 999px;
              padding: 12px 22px;
              white-space: nowrap;
              color: rgb(243, 241, 255)">`,
    `✦ Informatics Student`,
    `<span
              data-dc-tpl="102"
              style="display: inline-block;
                width: 3px;
                height: 16px;
                background: rgb(255, 229, 59);
                margin-left: 6px;
                vertical-align: -2px;
                color: rgb(243, 241, 255)">`,
    `</span>`,
    `</span>`,
    `</div>`,
    `<div
          data-dc-tpl="103"
          style="font-family: Anton, sans-serif;
            font-size: 172px;
            line-height: 0.86;
            text-transform: uppercase;
            color: rgb(255, 255, 255);
            letter-spacing: 1px">`,
    `<div
            data-dc-tpl="104"
            style="white-space: nowrap">`,
    `NENDI B.`,
    `</div>`,
    `<div
            data-dc-tpl="105"
            style="white-space: nowrap">`,
    `SETIAWAN`,
    `</div>`,
    `</div>`,
    `<div
          data-dc-tpl="106"
          style="display: flex;
            flex-direction: column;
            gap: 6px;
            max-width: 560px">`,
    `<span
            data-dc-tpl="107"
            style="font-size: 17px;
              font-weight: 500;
              line-height: 1.5">`,
    `Data Science, Machine Learning &amp; AI Enthusiast`,
    `</span>`,
    `<span
            data-dc-tpl="108"
            style='font-family: "JetBrains Mono", monospace;
              font-size: 14px;
              font-weight: 700'>`,
    `Universitas Ahmad Dahlan · Yogyakarta`,
    `</span>`,
    `</div>`,
    `<div
          data-dc-tpl="109"
          style="display: flex;
            align-items: center;
            gap: 16px">`,
    `<a
            data-dc-tpl="110"
            href="#projects"
            style="display: inline-flex;
              align-items: center;
              gap: 14px;
              background: rgb(20, 18, 43);
              color: rgb(255, 255, 255);
              border-radius: 999px;
              padding: 8px 8px 8px 32px;
              font-weight: 700;
              font-size: 17px">`,
    `View Projects
`,
    `<span
              data-dc-tpl="111"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                color: rgb(20, 18, 43);
                display: flex;
                align-items: center;
                justify-content: center">`,
    `<svg
                data-dc-tpl="112"
                fill="none"
                height="22"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                viewbox="0 0 24 24"
                width="22">`,
    `<path
                  d="M5 12h14M13 6l6 6-6 6"
                  data-dc-tpl="113">`,
    `</path>`,
    `</svg>`,
    `</span>`,
    `</a>`,
    `<a
            data-dc-tpl="114"
            href="#contact"
            style="display: inline-flex;
              align-items: center;
              border: 2px solid rgba(255, 255, 255, 0.22);
              color: rgb(255, 255, 255);
              border-radius: 999px;
              padding: 0px 30px;
              height: 64px;
              box-sizing: border-box;
              font-weight: 700;
              font-size: 17px">`,
    `Download CV`,
    `</a>`,
    `<div
            data-dc-tpl="115"
            style="display: flex;
              gap: 10px;
              margin-left: 8px">`,
    `<a
              aria-label="GitHub"
              data-dc-tpl="116"
              href="https://github.com/NessStudio"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgba(20, 18, 43, 0.55);
                backdrop-filter: blur(14px);
                border: 1.5px solid rgba(255, 255, 255, 0.22);
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgb(243, 241, 255)">`,
    `<svg
                data-dc-tpl="117"
                fill="none"
                height="22"
                stroke="#F3F1FF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.4"
                viewbox="0 0 24 24"
                width="22">`,
    `<path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  data-dc-tpl="118">`,
    `</path>`,
    `</svg>`,
    `</a>`,
    `<a
              aria-label="LinkedIn"
              data-dc-tpl="119"
              href="https://www.linkedin.com/in/nendisetiawan/"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgba(20, 18, 43, 0.55);
                backdrop-filter: blur(14px);
                border: 1.5px solid rgba(255, 255, 255, 0.22);
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: Anton, sans-serif;
                font-size: 20px;
                color: rgb(243, 241, 255)">`,
    `in`,
    `</a>`,
    `<a
              aria-label="Instagram"
              data-dc-tpl="120"
              href="https://www.instagram.com/nendistwn_/"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgba(20, 18, 43, 0.55);
                backdrop-filter: blur(14px);
                border: 1.5px solid rgba(255, 255, 255, 0.22);
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgb(243, 241, 255)">`,
    `<svg
                data-dc-tpl="121"
                fill="none"
                height="22"
                stroke="#F3F1FF"
                stroke-linecap="round"
                stroke-width="2.4"
                viewbox="0 0 24 24"
                width="22">`,
    `<rect
                  data-dc-tpl="122"
                  height="18"
                  rx="5"
                  width="18"
                  x="3"
                  y="3">`,
    `</rect>`,
    `<circle
                  cx="12"
                  cy="12"
                  data-dc-tpl="123"
                  r="4">`,
    `</circle>`,
    `<circle
                  cx="17.5"
                  cy="6.5"
                  data-dc-tpl="124"
                  fill="#F3F1FF"
                  r="1">`,
    `</circle>`,
    `</svg>`,
    `</a>`,
    `<a
              aria-label="Email"
              data-dc-tpl="125"
              href="mailto:nendisetiawan10@gmail.com"
              style="width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgba(20, 18, 43, 0.55);
                backdrop-filter: blur(14px);
                border: 1.5px solid rgba(255, 255, 255, 0.22);
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgb(243, 241, 255)">`,
    `<svg
                data-dc-tpl="126"
                fill="none"
                height="22"
                stroke="#F3F1FF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.4"
                viewbox="0 0 24 24"
                width="22">`,
    `<rect
                  data-dc-tpl="127"
                  height="14"
                  rx="3"
                  width="18"
                  x="3"
                  y="5">`,
    `</rect>`,
    `<path
                  d="M3 8l9 6 9-6"
                  data-dc-tpl="128">`,
    `</path>`,
    `</svg>`,
    `</a>`,
    `</div>`,
    `</div>`,
    `</div>`,
    `</div>`,
  ].join(""),
};
