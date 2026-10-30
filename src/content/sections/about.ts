import type { SectionContent } from "./types";

/**
 * Panel 02 · About
 *
 * Cara mengedit: tiap elemen HTML ditulis satu per baris (turun ke bawah).
 * Cari teks yang ingin diganti (mis. [placeholder]) lalu ubah barisnya saja.
 * Ganti di KEDUA blok: `light` (tema terang) dan `dark` (tema gelap).
 * Jangan menambah spasi/baris kosong di antara tag; satu item = satu baris.
 * Slot gambar: lihat src/content/images.ts
 */
export const about: SectionContent = {
  id: "about",
  title: "About",

  // ───────────── TEMA TERANG ─────────────
  light: [
    `<div
      data-dc-tpl="8"
      style="position: absolute;
        top: 80px;
        right: 120px;
        width: 340px;
        height: 340px;
        border-radius: 50%;
        background: rgb(46, 230, 255);">`,
    `</div>`,
    `<div
      data-dc-tpl="9"
      style="position: absolute;
        bottom: -110px;
        left: 360px;
        width: 420px;
        height: 420px;
        border-radius: 55% 45% 60% 40% / 42% 58%;
        background: rgb(124, 92, 255);">`,
    `</div>`,
    `<div
      data-dc-tpl="10"
      style="position: absolute;
        bottom: 180px;
        left: -60px;
        width: 210px;
        height: 210px;
        border-radius: 50%;
        border: 40px solid rgba(255, 255, 255, 0.85);
        box-sizing: border-box;">`,
    `</div>`,
    `<div
      data-dc-tpl="81"
      style="position: absolute;
        inset: 124px 48px 44px 132px;
        display: flex;
        gap: 28px;">`,
      `<div
        data-dc-tpl="82"
        style="flex: 1.1 1 0px;
          min-width: 0px;
          display: flex;
          flex-direction: column;
          gap: 22px;">`,
        `<div
          data-dc-tpl="83"
          style="display: flex;
            align-items: flex-end;
            gap: 18px;">`,
          `<span
            data-dc-tpl="84"
            style="font-family: Anton, sans-serif;
              font-style: italic;
              font-size: 40px;
              line-height: 1;
              color: rgb(20, 18, 43);
              padding-bottom: 8px;
              white-space: nowrap;
              flex: 0 0 auto">`,
            `02 »»`,
          `</span>`,
          `<h2
            data-dc-tpl="85"
            style="margin: 0px;
              font-family: Anton, sans-serif;
              font-size: 104px;
              line-height: 0.9;
              text-transform: uppercase;
              color: rgb(255, 255, 255);">`,
            `About`,
          `</h2>`,
        `</div>`,
        `<div
          data-dc-tpl="86"
          style="flex: 1 1 auto;
            min-height: 0px;
            box-sizing: border-box;
            background: radial-gradient(rgba(124, 92, 255, 0.22) 2px, transparent 2.6px) 0px 0px / 22px 22px, linear-gradient(160deg, rgba(255, 255, 255, 0.62), rgba(255, 255, 255, 0.38));
            backdrop-filter: blur(26px) saturate(180%);
            border: 1.5px solid rgba(255, 255, 255, 0.8);
            border-radius: 120px 36px;
            padding: 32px 48px;
            box-shadow: rgba(40, 40, 140, 0.25) 0px 20px 60px, rgba(255, 255, 255, 0.9) 0px 1px 0px inset;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 18px;">`,
          `<p
            data-dc-tpl="87"
            style="margin: 0px;
              font-size: 15px;
              line-height: 1.55;
              color: rgb(30, 28, 58);">`,
            `I am an undergraduate Informatics student at Universitas Ahmad Dahlan with a strong interest in Artificial Intelligence, Machine Learning, and Data Science. I enjoy exploring how technology and data can be used to solve real-world problems.`,
          `</p>`,
          `<p
            data-dc-tpl="88"
            style="margin: 0px;
              font-size: 15px;
              line-height: 1.55;
              color: rgb(30, 28, 58);">`,
            `I have worked on various projects involving data analysis, data visualization, machine learning, and website development. Beyond technology, I am also passionate about graphic design, where I combine creativity and visual storytelling to create engaging and meaningful designs.`,
          `</p>`,
          `<div
            data-dc-tpl="89"
            style="display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 6px;">`,
            `<div
              data-dc-tpl="90"
              style="display: flex;
                align-items: center;
                gap: 14px;
                background: rgba(255, 255, 255, 0.75);
                border-radius: 999px;
                padding: 8px 24px 8px 8px;">`,
              `<span
                data-dc-tpl="91"
                style="width: 44px;
                  height: 44px;
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
                  `<path
                    d="M13 2L4 14h7l-1 8 9-12h-7z"
                    data-dc-tpl="93">`,
                  `</path>`,
                `</svg>`,
              `</span>`,
              `<span
                data-dc-tpl="94"
                style="font-size: 16px;
                  font-weight: 700;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  min-width: 0">`,
                `Multiple Projects Completed`,
              `</span>`,
            `</div>`,
            `<div
              data-dc-tpl="95"
              style="display: flex;
                align-items: center;
                gap: 14px;
                background: rgba(255, 255, 255, 0.75);
                border-radius: 999px;
                padding: 8px 24px 8px 8px;">`,
              `<span
                data-dc-tpl="96"
                style="width: 44px;
                  height: 44px;
                  border-radius: 50%;
                  background: rgb(46, 230, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center;">`,
                `<svg
                  data-dc-tpl="97"
                  fill="none"
                  height="22"
                  stroke="#14122B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
                  `<circle
                    cx="12"
                    cy="9"
                    data-dc-tpl="98"
                    r="6">`,
                  `</circle>`,
                  `<path
                    d="M8 14l-2 8 6-3 6 3-2-8"
                    data-dc-tpl="99">`,
                  `</path>`,
                `</svg>`,
              `</span>`,
              `<span
                data-dc-tpl="100"
                style="font-size: 16px;
                  font-weight: 700;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  min-width: 0">`,
                `Data Science &amp; AI Enthusiast`,
              `</span>`,
            `</div>`,
            `<div
              data-dc-tpl="101"
              style="display: flex;
                align-items: center;
                gap: 14px;
                background: rgba(255, 255, 255, 0.75);
                border-radius: 999px;
                padding: 8px 24px 8px 8px;">`,
              `<span
                data-dc-tpl="102"
                style="width: 44px;
                  height: 44px;
                  border-radius: 50%;
                  background: rgb(255, 61, 154);
                  display: flex;
                  align-items: center;
                  justify-content: center;">`,
                `<svg
                  data-dc-tpl="103"
                  fill="none"
                  height="22"
                  stroke="#FFFFFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
                  `<rect
                    data-dc-tpl="104"
                    height="7"
                    rx="2"
                    width="7"
                    x="3"
                    y="3">`,
                  `</rect>`,
                  `<rect
                    data-dc-tpl="105"
                    height="7"
                    rx="2"
                    width="7"
                    x="14"
                    y="3">`,
                  `</rect>`,
                  `<rect
                    data-dc-tpl="106"
                    height="7"
                    rx="2"
                    width="7"
                    x="3"
                    y="14">`,
                  `</rect>`,
                  `<rect
                    data-dc-tpl="107"
                    height="7"
                    rx="2"
                    width="7"
                    x="14"
                    y="14">`,
                  `</rect>`,
                `</svg>`,
              `</span>`,
              `<span
                data-dc-tpl="108"
                style="font-size: 16px;
                  font-weight: 700;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  min-width: 0">`,
                `Graphic Design &amp; Web Development`,
              `</span>`,
            `</div>`,
          `</div>`,
        `</div>`,
      `</div>`,
      `<div
        data-dc-tpl="109"
        style="flex: 1 1 0px;
          min-width: 0px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-top: 12px;">`,
        `<div
          class="slot"
          data-dc-tpl="110"
          style="position: relative;
            flex: 1 1 auto;
            min-height: 0px;
            border-radius: 140px 36px;
            overflow: hidden;
            background: rgb(255, 255, 255);
            box-shadow: rgba(40, 40, 140, 0.25) 0px 20px 50px;">`,
          `<svg
            class="slot-ph"
            data-dc-tpl="111"
            height="100%"
            preserveaspectratio="xMidYMid slice"
            style="position: absolute;
              inset: 0px;"
            viewbox="0 0 560 330"
            width="100%">`,
            `<rect
              data-dc-tpl="112"
              fill="#FFFFFF"
              height="330"
              width="560">`,
            `</rect>`,
            `<circle
              cx="170"
              cy="170"
              data-dc-tpl="113"
              fill="#FFE53B"
              r="110">`,
            `</circle>`,
            `<rect
              data-dc-tpl="114"
              fill="#FF3D9A"
              fill-opacity="0.9"
              height="250"
              rx="85"
              width="170"
              x="280"
              y="40">`,
            `</rect>`,
            `<circle
              cx="440"
              cy="250"
              data-dc-tpl="115"
              fill="#2EE6FF"
              r="52">`,
            `</circle>`,
          `</svg>`,
          `<span
            class="slot-ph"
            data-dc-tpl="116"
            style='position: absolute;
              left: 50%;
              bottom: 26px;
              transform: translateX(-50%);
              white-space: nowrap;
              background: rgba(255, 255, 255, 0.55);
              backdrop-filter: blur(16px);
              border: 1.5px solid rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              padding: 10px 22px;
              font-family: "JetBrains Mono", monospace;
              font-weight: 700;
              font-size: 14px;'>`,
            `[YOUR PHOTO]`,
          `</span>`,
          `<img
            alt="Photo"
            class="slot-img"
            data-slot="about-photo"/>`,
        `</div>`,
        `<div
          data-dc-tpl="117"
          style="flex: 0 0 auto;
            box-sizing: border-box;
            background: rgb(20, 18, 43);
            color: rgb(255, 255, 255);
            border-radius: 36px 36px 110px;
            padding: 32px 40px 36px;
            display: flex;
            flex-direction: column;
            gap: 10px;">`,
          `<div
            data-dc-tpl="118"
            style="display: flex;
              align-items: center;
              justify-content: space-between;">`,
            `<span
              data-dc-tpl="119"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(255, 229, 59);'>`,
              `EDUCATION`,
            `</span>`,
          `</div>`,
          `<span
            data-dc-tpl="121"
            style="font-family: Anton, sans-serif;
              font-size: 34px;
              line-height: 1.05;
              text-transform: uppercase;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap">`,
            `UNIVERSITAS AHMAD DAHLAN`,
          `</span>`,
          `<span
            data-dc-tpl="122"
            style="font-size: 16px;
              color: rgb(213, 218, 238);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap">`,
            `Bachelor's Degree · Informatics`,
          `</span>`,
          `<span
            data-dc-tpl="123"
            style='font-family: "JetBrains Mono", monospace;
              font-size: 14px;
              font-weight: 700;
              color: rgb(46, 230, 255);'>`,
            `2023 – Present`,
          `</span>`,
        `</div>`,
      `</div>`,
    `</div>`,
  ].join(""),

  // ───────────── TEMA GELAP ─────────────
  dark: [
    `<div
      data-dc-tpl="8"
      style="position: absolute;
        top: 80px;
        right: 120px;
        width: 340px;
        height: 340px;
        border-radius: 50%;
        background: rgb(46, 230, 255)">`,
    `</div>`,
    `<div
      data-dc-tpl="9"
      style="position: absolute;
        bottom: -110px;
        left: 360px;
        width: 420px;
        height: 420px;
        border-radius: 55% 45% 60% 40% / 42% 58%;
        background: rgb(124, 92, 255)">`,
    `</div>`,
    `<div
      data-dc-tpl="10"
      style="position: absolute;
        bottom: 180px;
        left: -60px;
        width: 210px;
        height: 210px;
        border-radius: 50%;
        border: 40px solid rgba(255, 255, 255, 0.22);
        box-sizing: border-box">`,
    `</div>`,
    `<div
      data-dc-tpl="81"
      style="position: absolute;
        inset: 124px 48px 44px 132px;
        display: flex;
        gap: 28px">`,
      `<div
        data-dc-tpl="82"
        style="flex: 1.1 1 0px;
          min-width: 0px;
          display: flex;
          flex-direction: column;
          gap: 22px">`,
        `<div
          data-dc-tpl="83"
          style="display: flex;
            align-items: flex-end;
            gap: 18px">`,
          `<span
            data-dc-tpl="84"
            style="font-family: Anton, sans-serif;
              font-style: italic;
              font-size: 40px;
              line-height: 1;
              color: rgb(20, 18, 43);
              padding-bottom: 8px;
              white-space: nowrap;
              flex: 0 0 auto">`,
            `02 »»`,
          `</span>`,
          `<h2
            data-dc-tpl="85"
            style="margin: 0px;
              font-family: Anton, sans-serif;
              font-size: 104px;
              line-height: 0.9;
              text-transform: uppercase;
              color: rgb(255, 255, 255)">`,
            `About`,
          `</h2>`,
        `</div>`,
        `<div
          data-dc-tpl="86"
          style="flex: 1 1 auto;
            min-height: 0px;
            box-sizing: border-box;
            background: radial-gradient(rgba(124, 92, 255, 0.22) 2px, transparent 2.6px) 0px 0px / 22px 22px, linear-gradient(160deg, rgba(20, 18, 43, 0.71), rgba(20, 18, 43, 0.44));
            backdrop-filter: blur(26px) saturate(180%);
            border: 1.5px solid rgba(255, 255, 255, 0.22);
            border-radius: 120px 36px;
            padding: 32px 48px;
            box-shadow: rgba(40, 40, 140, 0.25) 0px 20px 60px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 18px;
            color: rgb(243, 241, 255)">`,
          `<p
            data-dc-tpl="87"
            style="margin: 0px;
              font-size: 15px;
              line-height: 1.55;
              color: rgb(228, 226, 250)">`,
            `I am an undergraduate Informatics student at Universitas Ahmad Dahlan with a strong interest in Artificial Intelligence, Machine Learning, and Data Science. I enjoy exploring how technology and data can be used to solve real-world problems.`,
          `</p>`,
          `<p
            data-dc-tpl="88"
            style="margin: 0px;
              font-size: 15px;
              line-height: 1.55;
              color: rgb(228, 226, 250)">`,
            `I have worked on various projects involving data analysis, data visualization, machine learning, and website development. Beyond technology, I am also passionate about graphic design, where I combine creativity and visual storytelling to create engaging and meaningful designs.`,
          `</p>`,
          `<div
            data-dc-tpl="89"
            style="display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 6px;
              color: rgb(243, 241, 255)">`,
            `<div
              data-dc-tpl="90"
              style="display: flex;
                align-items: center;
                gap: 14px;
                background: rgba(20, 18, 43, 0.72);
                border-radius: 999px;
                padding: 8px 24px 8px 8px;
                color: rgb(243, 241, 255)">`,
              `<span
                data-dc-tpl="91"
                style="width: 44px;
                  height: 44px;
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
                  `<path
                    d="M13 2L4 14h7l-1 8 9-12h-7z"
                    data-dc-tpl="93">`,
                  `</path>`,
                `</svg>`,
              `</span>`,
              `<span
                data-dc-tpl="94"
                style="font-size: 16px;
                  font-weight: 700;
                  color: rgb(243, 241, 255);
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  min-width: 0">`,
                `Multiple Projects Completed`,
              `</span>`,
            `</div>`,
            `<div
              data-dc-tpl="95"
              style="display: flex;
                align-items: center;
                gap: 14px;
                background: rgba(20, 18, 43, 0.72);
                border-radius: 999px;
                padding: 8px 24px 8px 8px;
                color: rgb(243, 241, 255)">`,
              `<span
                data-dc-tpl="96"
                style="width: 44px;
                  height: 44px;
                  border-radius: 50%;
                  background: rgb(46, 230, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center">`,
                `<svg
                  data-dc-tpl="97"
                  fill="none"
                  height="22"
                  stroke="#14122B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
                  `<circle
                    cx="12"
                    cy="9"
                    data-dc-tpl="98"
                    r="6">`,
                  `</circle>`,
                  `<path
                    d="M8 14l-2 8 6-3 6 3-2-8"
                    data-dc-tpl="99">`,
                  `</path>`,
                `</svg>`,
              `</span>`,
              `<span
                data-dc-tpl="100"
                style="font-size: 16px;
                  font-weight: 700;
                  color: rgb(243, 241, 255);
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  min-width: 0">`,
                `Data Science &amp; AI Enthusiast`,
              `</span>`,
            `</div>`,
            `<div
              data-dc-tpl="101"
              style="display: flex;
                align-items: center;
                gap: 14px;
                background: rgba(20, 18, 43, 0.72);
                border-radius: 999px;
                padding: 8px 24px 8px 8px;
                color: rgb(243, 241, 255)">`,
              `<span
                data-dc-tpl="102"
                style="width: 44px;
                  height: 44px;
                  border-radius: 50%;
                  background: rgb(255, 61, 154);
                  display: flex;
                  align-items: center;
                  justify-content: center">`,
                `<svg
                  data-dc-tpl="103"
                  fill="none"
                  height="22"
                  stroke="#FFFFFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.4"
                  viewbox="0 0 24 24"
                  width="22">`,
                  `<rect
                    data-dc-tpl="104"
                    height="7"
                    rx="2"
                    width="7"
                    x="3"
                    y="3">`,
                  `</rect>`,
                  `<rect
                    data-dc-tpl="105"
                    height="7"
                    rx="2"
                    width="7"
                    x="14"
                    y="3">`,
                  `</rect>`,
                  `<rect
                    data-dc-tpl="106"
                    height="7"
                    rx="2"
                    width="7"
                    x="3"
                    y="14">`,
                  `</rect>`,
                  `<rect
                    data-dc-tpl="107"
                    height="7"
                    rx="2"
                    width="7"
                    x="14"
                    y="14">`,
                  `</rect>`,
                `</svg>`,
              `</span>`,
              `<span
                data-dc-tpl="108"
                style="font-size: 16px;
                  font-weight: 700;
                  color: rgb(243, 241, 255);
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  min-width: 0">`,
                `Graphic Design &amp; Web Development`,
              `</span>`,
            `</div>`,
          `</div>`,
        `</div>`,
      `</div>`,
      `<div
        data-dc-tpl="109"
        style="flex: 1 1 0px;
          min-width: 0px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-top: 12px">`,
        `<div
          class="slot"
          data-dc-tpl="110"
          style="position: relative;
            flex: 1 1 auto;
            min-height: 0px;
            border-radius: 140px 36px;
            overflow: hidden;
            background: rgb(33, 30, 58);
            box-shadow: rgba(40, 40, 140, 0.25) 0px 20px 50px;
            color: rgb(243, 241, 255)">`,
          `<svg
            class="slot-ph"
            data-dc-tpl="111"
            height="100%"
            preserveaspectratio="xMidYMid slice"
            style="position: absolute;
              inset: 0px;
              color: rgb(243, 241, 255)"
            viewbox="0 0 560 330"
            width="100%">`,
            `<rect
              data-dc-tpl="112"
              fill="#211E3A"
              height="330"
              width="560">`,
            `</rect>`,
            `<circle
              cx="170"
              cy="170"
              data-dc-tpl="113"
              fill="#FFE53B"
              r="110">`,
            `</circle>`,
            `<rect
              data-dc-tpl="114"
              fill="#FF3D9A"
              fill-opacity="0.9"
              height="250"
              rx="85"
              width="170"
              x="280"
              y="40">`,
            `</rect>`,
            `<circle
              cx="440"
              cy="250"
              data-dc-tpl="115"
              fill="#2EE6FF"
              r="52">`,
            `</circle>`,
          `</svg>`,
          `<span
            class="slot-ph"
            data-dc-tpl="116"
            style='position: absolute;
              left: 50%;
              bottom: 26px;
              transform: translateX(-50%);
              white-space: nowrap;
              background: rgba(20, 18, 43, 0.62);
              backdrop-filter: blur(16px);
              border: 1.5px solid rgba(255, 255, 255, 0.22);
              border-radius: 999px;
              padding: 10px 22px;
              font-family: "JetBrains Mono", monospace;
              font-weight: 700;
              font-size: 14px;
              color: rgb(243, 241, 255)'>`,
            `[YOUR PHOTO]`,
          `</span>`,
          `<img
            alt="Photo"
            class="slot-img"
            data-slot="about-photo"/>`,
        `</div>`,
        `<div
          data-dc-tpl="117"
          style="flex: 0 0 auto;
            box-sizing: border-box;
            background: rgb(20, 18, 43);
            color: rgb(255, 255, 255);
            border-radius: 36px 36px 110px;
            padding: 32px 40px 36px;
            display: flex;
            flex-direction: column;
            gap: 10px">`,
          `<div
            data-dc-tpl="118"
            style="display: flex;
              align-items: center;
              justify-content: space-between;
              color: rgb(243, 241, 255)">`,
            `<span
              data-dc-tpl="119"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(255, 229, 59)'>`,
              `EDUCATION`,
            `</span>`,
          `</div>`,
          `<span
            data-dc-tpl="121"
            style="font-family: Anton, sans-serif;
              font-size: 34px;
              line-height: 1.05;
              text-transform: uppercase;
              color: rgb(243, 241, 255);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap">`,
            `UNIVERSITAS AHMAD DAHLAN`,
          `</span>`,
          `<span
            data-dc-tpl="122"
            style="font-size: 16px;
              color: rgb(213, 218, 238);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap">`,
            `Bachelor's Degree · Informatics`,
          `</span>`,
          `<span
            data-dc-tpl="123"
            style='font-family: "JetBrains Mono", monospace;
              font-size: 14px;
              font-weight: 700;
              color: rgb(46, 230, 255)'>`,
            `2023 – Present`,
          `</span>`,
        `</div>`,
      `</div>`,
    `</div>`,
  ].join(""),
};
