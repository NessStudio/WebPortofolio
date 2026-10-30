import type { SectionContent } from "./types";

/**
 * Panel 05 · Certificates
 *
 * Cara mengedit: tiap elemen HTML ditulis satu per baris (turun ke bawah).
 * Cari teks yang ingin diganti (mis. [placeholder]) lalu ubah barisnya saja.
 * Ganti di KEDUA blok: `light` (tema terang) dan `dark` (tema gelap).
 * Jangan menambah spasi/baris kosong di antara tag; satu item = satu baris.
 * Slot gambar: lihat src/content/images.ts
 */
export const certificates: SectionContent = {
  id: "certificates",
  title: "Certificates",

  // ───────────── TEMA TERANG ─────────────
  light: [
    `<div
      data-dc-tpl="8"
      style="position: absolute;
        top: -160px;
        right: 60px;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        background: rgb(255, 229, 59)">`,
    `</div>`,
    `<div
      data-dc-tpl="9"
      style="position: absolute;
        bottom: -120px;
        left: 380px;
        width: 420px;
        height: 420px;
        border-radius: 55% 45% 60% 40% / 42% 58%;
        background: rgb(255, 61, 154);">`,
    `</div>`,
    `<div
      data-dc-tpl="10"
      style="position: absolute;
        top: 280px;
        left: -50px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 38px solid rgba(255, 255, 255, 0.85);
        box-sizing: border-box;">`,
    `</div>`,
    `<div
      data-dc-tpl="81"
      style="position: absolute;
        inset: 120px 48px 44px 132px;
        display: flex;
        flex-direction: column;
        gap: 22px;">`,
      `<div
        data-dc-tpl="82"
        style="display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;">`,
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
              color: rgb(255, 61, 154);
              padding-bottom: 6px;
              white-space: nowrap;
              flex: 0 0 auto">`,
            `05 »»`,
          `</span>`,
          `<h2
            data-dc-tpl="85"
            style="margin: 0px;
              font-family: Anton, sans-serif;
              font-size: 96px;
              line-height: 0.9;
              text-transform: uppercase;">`,
            `Certificates`,
          `</h2>`,
        `</div>`,
        `<div
          data-dc-tpl="86"
          style="display: flex;
            align-items: flex-end;
            gap: 10px;
            margin-bottom: 4px;
            flex-direction: column">`,
          `<p
            data-dc-tpl="87"
            style="margin: 0px;
              max-width: 400px;
              font-size: 16px;
              line-height: 1.5;
              font-weight: 500;
              text-align: right">`,
            `Verified credentials &amp; awards reflecting my technical growth.`,
          `</p>`,
          `<div
            style="display: flex;
              align-items: center;
              gap: 10px">`,
            `<span
              data-dc-tpl="88"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                background: rgb(20, 18, 43);
                color: rgb(255, 229, 59);
                border-radius: 999px;
                padding: 11px 18px;
                white-space: nowrap'>`,
              `10+ CERTIFICATES`,
            `</span>`,
            `<a
              data-cert-all="1"
              href="#certificates"
              style='display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgb(255, 229, 59);
                color: rgb(20, 18, 43);
                border-radius: 999px;
                padding: 11px 20px;
                font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                white-space: nowrap;
                box-shadow: 0 0 0 2px rgb(20, 18, 43)'>`,
              `View all certificates →`,
            `</a>`,
          `</div>`,
        `</div>`,
      `</div>`,
      `<div
        data-dc-tpl="89"
        style="flex: 1 1 auto;
          min-height: 0px;
          display: flex;
          flex-direction: column;
          gap: 20px;">`,
        `<div
          data-dc-tpl="90"
          style="flex: 1 1 0px;
            min-height: 0px;
            display: flex;
            gap: 20px;">`,
          `<div
            data-cert-card="1"
            data-dc-tpl="91"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: rgb(255, 255, 255);
              border-radius: 36px 90px 36px 36px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px;
              overflow: hidden">`,
            `<div
              data-dc-tpl="92"
              style="display: flex;
                align-items: center;
                gap: 16px;">`,
              `<div
                class="slot"
                data-dc-tpl="93"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 50%;
                  overflow: hidden;
                  background: rgb(241, 244, 251);
                  position: relative;">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="94"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="34"
                    cy="40"
                    data-dc-tpl="95"
                    fill="#FFE53B"
                    r="24">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="96"
                    fill="#FF3D9A"
                    fill-opacity="0.9"
                    height="38"
                    rx="19"
                    width="38"
                    x="42"
                    y="34">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-1"/>`,
              `</div>`,
              `<div
                data-dc-tpl="97"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="98"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    color: rgb(75, 79, 110);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `DICODING × DBS FOUNDATION`,
                `</span>`,
                `<span
                  data-dc-tpl="99"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Coding Camp 2026: Data Scientist`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="100"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px;">`,
              `<div
                data-dc-tpl="101"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="102"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `21 Jul 2026`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="1"
                data-dc-tpl="104"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
          `<div
            data-cert-card="2"
            data-dc-tpl="105"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: rgb(255, 229, 59);
              border-radius: 90px 36px 36px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px;
              overflow: hidden">`,
            `<div
              data-dc-tpl="106"
              style="display: flex;
                align-items: center;
                gap: 16px;">`,
              `<div
                class="slot"
                data-dc-tpl="107"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 30px 46px;
                  overflow: hidden;
                  background: rgb(255, 255, 255);
                  position: relative;">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="108"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="30"
                    cy="34"
                    data-dc-tpl="109"
                    fill="#7C5CFF"
                    r="22">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="110"
                    fill="#2EE6FF"
                    height="40"
                    rx="20"
                    width="40"
                    x="40"
                    y="40">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-2"/>`,
              `</div>`,
              `<div
                data-dc-tpl="111"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="112"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `GOOGLE FOR EDUCATION`,
                `</span>`,
                `<span
                  data-dc-tpl="113"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Siswa Tersertifikasi Gemini`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="114"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px;">`,
              `<div
                data-dc-tpl="115"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="116"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `—`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="2"
                data-dc-tpl="118"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 229, 59);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
          `<div
            data-cert-card="3"
            data-dc-tpl="119"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: repeating-radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 22px, rgba(255, 255, 255, 0.55) 22px, rgba(255, 255, 255, 0.55) 24px), rgba(255, 255, 255, 0.42);
              backdrop-filter: blur(24px) saturate(180%);
              border: 1.5px solid rgba(255, 255, 255, 0.85);
              border-radius: 36px 36px 90px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px, rgba(255, 255, 255, 0.9) 0px 1px 0px inset;
              overflow: hidden">`,
            `<div
              data-dc-tpl="120"
              style="display: flex;
                align-items: center;
                gap: 16px;">`,
              `<div
                class="slot"
                data-dc-tpl="121"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 50%;
                  overflow: hidden;
                  background: rgba(255, 255, 255, 0.6);
                  position: relative;">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="122"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="36"
                    cy="36"
                    data-dc-tpl="123"
                    fill="#FF3D9A"
                    r="24">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="124"
                    fill="#FFE53B"
                    height="34"
                    rx="17"
                    width="40"
                    x="38"
                    y="44">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-3"/>`,
              `</div>`,
              `<div
                data-dc-tpl="125"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="126"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `UNIVERSITAS AHMAD DAHLAN`,
                `</span>`,
                `<span
                  data-dc-tpl="127"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Asisten Praktikum 2025/2026`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="128"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px;">`,
              `<div
                data-dc-tpl="129"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="130"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `30 Jan 2026`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="3"
                data-dc-tpl="132"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
        `</div>`,
        `<div
          data-dc-tpl="133"
          style="flex: 1 1 0px;
            min-height: 0px;
            display: flex;
            gap: 20px;">`,
          `<div
            data-cert-card="4"
            data-dc-tpl="134"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: repeating-radial-gradient(circle at 0px 0px, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 22px, rgba(255, 255, 255, 0.55) 22px, rgba(255, 255, 255, 0.55) 24px), rgba(255, 255, 255, 0.42);
              backdrop-filter: blur(24px) saturate(180%);
              border: 1.5px solid rgba(255, 255, 255, 0.85);
              border-radius: 90px 36px 36px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px, rgba(255, 255, 255, 0.9) 0px 1px 0px inset;
              overflow: hidden">`,
            `<div
              data-dc-tpl="135"
              style="display: flex;
                align-items: center;
                gap: 16px;">`,
              `<div
                class="slot"
                data-dc-tpl="136"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 46px 30px;
                  overflow: hidden;
                  background: rgba(255, 255, 255, 0.6);
                  position: relative;">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="137"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="34"
                    cy="38"
                    data-dc-tpl="138"
                    fill="#7C5CFF"
                    r="24">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="139"
                    fill="#FFE53B"
                    height="40"
                    rx="20"
                    width="40"
                    x="40"
                    y="40">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-4"/>`,
              `</div>`,
              `<div
                data-dc-tpl="140"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="141"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `UNIVERSITAS AHMAD DAHLAN`,
                `</span>`,
                `<span
                  data-dc-tpl="142"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Asisten Praktikum 2024/2025`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="143"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px;">`,
              `<div
                data-dc-tpl="144"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="145"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `30 Aug 2025`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="4"
                data-dc-tpl="147"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
          `<div
            data-cert-card="5"
            data-dc-tpl="148"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: rgb(255, 255, 255);
              border-radius: 36px 36px 36px 90px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px;
              overflow: hidden">`,
            `<div
              data-dc-tpl="149"
              style="display: flex;
                align-items: center;
                gap: 16px;">`,
              `<div
                class="slot"
                data-dc-tpl="150"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 50%;
                  overflow: hidden;
                  background: rgb(241, 244, 251);
                  position: relative;">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="151"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="34"
                    cy="40"
                    data-dc-tpl="152"
                    fill="#2EE6FF"
                    r="24">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="153"
                    fill="#7C5CFF"
                    fill-opacity="0.9"
                    height="38"
                    rx="19"
                    width="38"
                    x="42"
                    y="34">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-5"/>`,
              `</div>`,
              `<div
                data-dc-tpl="154"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="155"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    color: rgb(75, 79, 110);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `DICODING INDONESIA`,
                `</span>`,
                `<span
                  data-dc-tpl="156"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Belajar Machine Learning untuk Pemula`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="157"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px;">`,
              `<div
                data-dc-tpl="158"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="159"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `3 Apr 2026`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="5"
                data-dc-tpl="161"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
          `<div
            data-cert-card="6"
            data-dc-tpl="162"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: rgb(255, 61, 154);
              border-radius: 36px 90px 36px 36px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px;
              overflow: hidden">`,
            `<div
              data-dc-tpl="163"
              style="display: flex;
                align-items: center;
                gap: 16px;">`,
              `<div
                class="slot"
                data-dc-tpl="164"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 30px 46px;
                  overflow: hidden;
                  background: rgb(255, 255, 255);
                  position: relative;">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="165"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="32"
                    cy="36"
                    data-dc-tpl="166"
                    fill="#FFE53B"
                    r="22">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="167"
                    fill="#2EE6FF"
                    height="38"
                    rx="19"
                    width="40"
                    x="40"
                    y="42">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-6"/>`,
              `</div>`,
              `<div
                data-dc-tpl="168"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="169"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `DICODING INDONESIA`,
                `</span>`,
                `<span
                  data-dc-tpl="170"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Belajar Dasar Data Science`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="171"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px;">`,
              `<div
                data-dc-tpl="172"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="173"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `18 Feb 2026`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="6"
                data-dc-tpl="175"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
        `</div>`,
      `</div>`,
    `</div>`,
  ].join(""),

  // ───────────── TEMA GELAP ─────────────
  dark: [
    `<div
      data-dc-tpl="8"
      style="position: absolute;
        top: -160px;
        right: 60px;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        background: rgb(255, 229, 59)">`,
    `</div>`,
    `<div
      data-dc-tpl="9"
      style="position: absolute;
        bottom: -120px;
        left: 380px;
        width: 420px;
        height: 420px;
        border-radius: 55% 45% 60% 40% / 42% 58%;
        background: rgb(255, 61, 154)">`,
    `</div>`,
    `<div
      data-dc-tpl="10"
      style="position: absolute;
        top: 280px;
        left: -50px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 38px solid rgba(255, 255, 255, 0.22);
        box-sizing: border-box">`,
    `</div>`,
    `<div
      data-dc-tpl="81"
      style="position: absolute;
        inset: 120px 48px 44px 132px;
        display: flex;
        flex-direction: column;
        gap: 22px">`,
      `<div
        data-dc-tpl="82"
        style="display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px">`,
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
              color: rgb(255, 61, 154);
              padding-bottom: 6px;
              white-space: nowrap;
              flex: 0 0 auto">`,
            `05 »»`,
          `</span>`,
          `<h2
            data-dc-tpl="85"
            style="margin: 0px;
              font-family: Anton, sans-serif;
              font-size: 96px;
              line-height: 0.9;
              text-transform: uppercase">`,
            `Certificates`,
          `</h2>`,
        `</div>`,
        `<div
          data-dc-tpl="86"
          style="display: flex;
            align-items: flex-end;
            gap: 10px;
            margin-bottom: 4px;
            flex-direction: column">`,
          `<p
            data-dc-tpl="87"
            style="margin: 0px;
              max-width: 400px;
              font-size: 16px;
              line-height: 1.5;
              font-weight: 500;
              text-align: right">`,
            `Verified credentials &amp; awards reflecting my technical growth.`,
          `</p>`,
          `<div
            style="display: flex;
              align-items: center;
              gap: 10px">`,
            `<span
              data-dc-tpl="88"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                background: rgb(20, 18, 43);
                color: rgb(255, 229, 59);
                border-radius: 999px;
                padding: 11px 18px;
                white-space: nowrap'>`,
              `10+ CERTIFICATES`,
            `</span>`,
            `<a
              data-cert-all="1"
              href="#certificates"
              style='display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgb(255, 229, 59);
                color: rgb(20, 18, 43);
                border-radius: 999px;
                padding: 11px 20px;
                font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                white-space: nowrap;
                box-shadow: 0 0 0 2px rgb(20, 18, 43)'>`,
              `View all certificates →`,
            `</a>`,
          `</div>`,
        `</div>`,
      `</div>`,
      `<div
        data-dc-tpl="89"
        style="flex: 1 1 auto;
          min-height: 0px;
          display: flex;
          flex-direction: column;
          gap: 20px">`,
        `<div
          data-dc-tpl="90"
          style="flex: 1 1 0px;
            min-height: 0px;
            display: flex;
            gap: 20px">`,
          `<div
            data-cert-card="1"
            data-dc-tpl="91"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: rgb(33, 30, 58);
              border-radius: 36px 90px 36px 36px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px;
              color: rgb(243, 241, 255);
              overflow: hidden">`,
            `<div
              data-dc-tpl="92"
              style="display: flex;
                align-items: center;
                gap: 16px;
                color: rgb(243, 241, 255)">`,
              `<div
                class="slot"
                data-dc-tpl="93"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 50%;
                  overflow: hidden;
                  background: rgb(48, 44, 84);
                  position: relative;
                  color: rgb(243, 241, 255)">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="94"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;
                    color: rgb(243, 241, 255)"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="34"
                    cy="40"
                    data-dc-tpl="95"
                    fill="#FFE53B"
                    r="24">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="96"
                    fill="#FF3D9A"
                    fill-opacity="0.9"
                    height="38"
                    rx="19"
                    width="38"
                    x="42"
                    y="34">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-1"/>`,
              `</div>`,
              `<div
                data-dc-tpl="97"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  color: rgb(243, 241, 255);
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="98"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    color: rgb(169, 174, 201);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `DICODING × DBS FOUNDATION`,
                `</span>`,
                `<span
                  data-dc-tpl="99"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    color: rgb(243, 241, 255);
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Coding Camp 2026: Data Scientist`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="100"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px;
                color: rgb(243, 241, 255)">`,
              `<div
                data-dc-tpl="101"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  color: rgb(243, 241, 255);
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="102"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `21 Jul 2026`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="1"
                data-dc-tpl="104"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(12, 10, 26);
                  color: rgb(255, 255, 255);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
          `<div
            data-cert-card="2"
            data-dc-tpl="105"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: rgb(255, 229, 59);
              border-radius: 90px 36px 36px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px;
              overflow: hidden">`,
            `<div
              data-dc-tpl="106"
              style="display: flex;
                align-items: center;
                gap: 16px">`,
              `<div
                class="slot"
                data-dc-tpl="107"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 30px 46px;
                  overflow: hidden;
                  background: rgb(33, 30, 58);
                  position: relative;
                  color: rgb(243, 241, 255)">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="108"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;
                    color: rgb(243, 241, 255)"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="30"
                    cy="34"
                    data-dc-tpl="109"
                    fill="#7C5CFF"
                    r="22">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="110"
                    fill="#2EE6FF"
                    height="40"
                    rx="20"
                    width="40"
                    x="40"
                    y="40">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-2"/>`,
              `</div>`,
              `<div
                data-dc-tpl="111"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="112"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `GOOGLE FOR EDUCATION`,
                `</span>`,
                `<span
                  data-dc-tpl="113"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Siswa Tersertifikasi Gemini`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="114"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px">`,
              `<div
                data-dc-tpl="115"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="116"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `—`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="2"
                data-dc-tpl="118"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 229, 59);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
          `<div
            data-cert-card="3"
            data-dc-tpl="119"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: repeating-radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 22px, rgba(255, 255, 255, 0.55) 22px, rgba(255, 255, 255, 0.55) 24px), rgba(20, 18, 43, 0.56);
              backdrop-filter: blur(24px) saturate(180%);
              border: 1.5px solid rgba(255, 255, 255, 0.22);
              border-radius: 36px 36px 90px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset;
              color: rgb(243, 241, 255);
              overflow: hidden">`,
            `<div
              data-dc-tpl="120"
              style="display: flex;
                align-items: center;
                gap: 16px;
                color: rgb(243, 241, 255)">`,
              `<div
                class="slot"
                data-dc-tpl="121"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 50%;
                  overflow: hidden;
                  background: rgba(20, 18, 43, 0.65);
                  position: relative;
                  color: rgb(243, 241, 255)">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="122"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;
                    color: rgb(243, 241, 255)"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="36"
                    cy="36"
                    data-dc-tpl="123"
                    fill="#FF3D9A"
                    r="24">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="124"
                    fill="#FFE53B"
                    height="34"
                    rx="17"
                    width="40"
                    x="38"
                    y="44">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-3"/>`,
              `</div>`,
              `<div
                data-dc-tpl="125"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  color: rgb(243, 241, 255);
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="126"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    color: rgb(243, 241, 255);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `UNIVERSITAS AHMAD DAHLAN`,
                `</span>`,
                `<span
                  data-dc-tpl="127"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    color: rgb(243, 241, 255);
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Asisten Praktikum 2025/2026`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="128"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px;
                color: rgb(243, 241, 255)">`,
              `<div
                data-dc-tpl="129"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  color: rgb(243, 241, 255);
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="130"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `30 Jan 2026`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="3"
                data-dc-tpl="132"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(12, 10, 26);
                  color: rgb(255, 255, 255);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
        `</div>`,
        `<div
          data-dc-tpl="133"
          style="flex: 1 1 0px;
            min-height: 0px;
            display: flex;
            gap: 20px">`,
          `<div
            data-cert-card="4"
            data-dc-tpl="134"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: repeating-radial-gradient(circle at 0px 0px, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 22px, rgba(255, 255, 255, 0.55) 22px, rgba(255, 255, 255, 0.55) 24px), rgba(20, 18, 43, 0.56);
              backdrop-filter: blur(24px) saturate(180%);
              border: 1.5px solid rgba(255, 255, 255, 0.22);
              border-radius: 90px 36px 36px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset;
              color: rgb(243, 241, 255);
              overflow: hidden">`,
            `<div
              data-dc-tpl="135"
              style="display: flex;
                align-items: center;
                gap: 16px;
                color: rgb(243, 241, 255)">`,
              `<div
                class="slot"
                data-dc-tpl="136"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 46px 30px;
                  overflow: hidden;
                  background: rgba(20, 18, 43, 0.65);
                  position: relative;
                  color: rgb(243, 241, 255)">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="137"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;
                    color: rgb(243, 241, 255)"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="34"
                    cy="38"
                    data-dc-tpl="138"
                    fill="#7C5CFF"
                    r="24">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="139"
                    fill="#FFE53B"
                    height="40"
                    rx="20"
                    width="40"
                    x="40"
                    y="40">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-4"/>`,
              `</div>`,
              `<div
                data-dc-tpl="140"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  color: rgb(243, 241, 255);
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="141"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    color: rgb(243, 241, 255);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `UNIVERSITAS AHMAD DAHLAN`,
                `</span>`,
                `<span
                  data-dc-tpl="142"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    color: rgb(243, 241, 255);
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Asisten Praktikum 2024/2025`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="143"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px;
                color: rgb(243, 241, 255)">`,
              `<div
                data-dc-tpl="144"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  color: rgb(243, 241, 255);
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="145"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `30 Aug 2025`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="4"
                data-dc-tpl="147"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(12, 10, 26);
                  color: rgb(255, 255, 255);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
          `<div
            data-cert-card="5"
            data-dc-tpl="148"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: rgb(33, 30, 58);
              border-radius: 36px 36px 36px 90px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px;
              color: rgb(243, 241, 255);
              overflow: hidden">`,
            `<div
              data-dc-tpl="149"
              style="display: flex;
                align-items: center;
                gap: 16px;
                color: rgb(243, 241, 255)">`,
              `<div
                class="slot"
                data-dc-tpl="150"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 50%;
                  overflow: hidden;
                  background: rgb(48, 44, 84);
                  position: relative;
                  color: rgb(243, 241, 255)">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="151"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;
                    color: rgb(243, 241, 255)"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="34"
                    cy="40"
                    data-dc-tpl="152"
                    fill="#2EE6FF"
                    r="24">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="153"
                    fill="#7C5CFF"
                    fill-opacity="0.9"
                    height="38"
                    rx="19"
                    width="38"
                    x="42"
                    y="34">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-5"/>`,
              `</div>`,
              `<div
                data-dc-tpl="154"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  color: rgb(243, 241, 255);
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="155"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    color: rgb(169, 174, 201);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `DICODING INDONESIA`,
                `</span>`,
                `<span
                  data-dc-tpl="156"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    color: rgb(243, 241, 255);
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Belajar Machine Learning untuk Pemula`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="157"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px;
                color: rgb(243, 241, 255)">`,
              `<div
                data-dc-tpl="158"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  color: rgb(243, 241, 255);
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="159"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `3 Apr 2026`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="5"
                data-dc-tpl="161"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(12, 10, 26);
                  color: rgb(255, 255, 255);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
          `<div
            data-cert-card="6"
            data-dc-tpl="162"
            style="flex: 1 1 0px;
              min-width: 0px;
              box-sizing: border-box;
              background: rgb(255, 61, 154);
              border-radius: 36px 90px 36px 36px;
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: rgba(0, 80, 80, 0.22) 0px 16px 44px;
              overflow: hidden">`,
            `<div
              data-dc-tpl="163"
              style="display: flex;
                align-items: center;
                gap: 16px">`,
              `<div
                class="slot"
                data-dc-tpl="164"
                data-fit="contain"
                style="flex: 0 0 auto;
                  width: 92px;
                  height: 92px;
                  border-radius: 30px 46px;
                  overflow: hidden;
                  background: rgb(33, 30, 58);
                  position: relative;
                  color: rgb(243, 241, 255)">`,
                `<svg
                  class="slot-ph"
                  data-dc-tpl="165"
                  height="100%"
                  style="position: absolute;
                    inset: 0px;
                    color: rgb(243, 241, 255)"
                  viewbox="0 0 92 92"
                  width="100%">`,
                  `<circle
                    cx="32"
                    cy="36"
                    data-dc-tpl="166"
                    fill="#FFE53B"
                    r="22">`,
                  `</circle>`,
                  `<rect
                    data-dc-tpl="167"
                    fill="#2EE6FF"
                    height="38"
                    rx="19"
                    width="40"
                    x="40"
                    y="42">`,
                  `</rect>`,
                `</svg>`,
                `<img
                  alt="Certificate logo"
                  class="slot-img"
                  data-slot="cert-6"/>`,
              `</div>`,
              `<div
                data-dc-tpl="168"
                style="display: flex;
                  flex-direction: column;
                  gap: 6px;
                  min-width: 0px;
                  flex: 1 1 auto">`,
                `<span
                  data-dc-tpl="169"
                  data-f="issuer"
                  style='font-family: "JetBrains Mono", monospace;
                    font-size: 12px;
                    font-weight: 700;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0'>`,
                  `DICODING INDONESIA`,
                `</span>`,
                `<span
                  data-dc-tpl="170"
                  data-f="name"
                  style="font-family: Anton, sans-serif;
                    font-size: 25px;
                    line-height: 1.05;
                    text-transform: uppercase;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical">`,
                  `Belajar Dasar Data Science`,
                `</span>`,
              `</div>`,
            `</div>`,
            `<div
              data-dc-tpl="171"
              style="display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 12px">`,
              `<div
                data-dc-tpl="172"
                style='display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-family: "JetBrains Mono", monospace;
                  font-size: 13px;
                  font-weight: 700;
                  min-width: 0px;
                  flex: 1 1 auto'>`,
                `<span
                  data-dc-tpl="173"
                  data-f="date"
                  style="overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    min-width: 0">`,
                  `18 Feb 2026`,
                `</span>`,
              `</div>`,
              `<a
                data-cert="6"
                data-dc-tpl="175"
                href="#certificates"
                style="display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgb(20, 18, 43);
                  color: rgb(255, 255, 255);
                  border-radius: 999px;
                  padding: 12px 20px;
                  font-size: 14px;
                  font-weight: 700;
                  flex: 0 0 auto;
                  white-space: nowrap">`,
                `View certificate ↗`,
              `</a>`,
            `</div>`,
          `</div>`,
        `</div>`,
      `</div>`,
    `</div>`,
  ].join(""),
};
