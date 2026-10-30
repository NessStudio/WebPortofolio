import type { SectionContent } from "./types";

/**
 * Panel 03 · Skills
 *
 * Cara mengedit: tiap elemen HTML ditulis satu per baris (turun ke bawah).
 * Cari teks yang ingin diganti (mis. [placeholder]) lalu ubah barisnya saja.
 * Ganti di KEDUA blok: `light` (tema terang) dan `dark` (tema gelap).
 * Jangan menambah spasi/baris kosong di antara tag; satu item = satu baris.
 * Slot gambar: lihat src/content/images.ts
 */
export const skills: SectionContent = {
  id: "skills",
  title: "Skills",

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
        background: rgb(46, 230, 255)">`,
    `</div>`,
    `<div
      data-dc-tpl="9"
      style="position: absolute;
        bottom: -120px;
        left: 300px;
        width: 420px;
        height: 420px;
        border-radius: 55% 45% 60% 40% / 42% 58%;
        background: rgb(255, 229, 59);">`,
    `</div>`,
    `<div
      data-dc-tpl="10"
      style="position: absolute;
        top: 300px;
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
              color: rgb(255, 229, 59);
              padding-bottom: 6px;
              white-space: nowrap;
              flex: 0 0 auto">`,
            `03 »»`,
          `</span>`,
          `<h2
            data-dc-tpl="85"
            style="margin: 0px;
              font-family: Anton, sans-serif;
              font-size: 96px;
              line-height: 0.9;
              text-transform: uppercase;
              color: rgb(255, 255, 255);">`,
            `Skills`,
          `</h2>`,
        `</div>`,
        `<p
          data-dc-tpl="86"
          style="margin: 0px 0px 8px;
            max-width: 420px;
            font-size: 17px;
            line-height: 1.5;
            color: rgb(255, 255, 255);
            font-weight: 500;">`,
          `Versatile developer specializing in Data Science, Web Development, and UI/UX Design`,
        `</p>`,
      `</div>`,
      `<div
        data-dc-tpl="87"
        style="flex: 1 1 auto;
          min-height: 0px;
          display: flex;
          gap: 20px;
          align-items: stretch;">`,
        `<div
          data-dc-tpl="88"
          style="flex: 1 1 0px;
            min-width: 0px;
            box-sizing: border-box;
            background: linear-gradient(rgba(20, 18, 43, 0.07) 1px, transparent 1px) 0px 0px / 24px 24px, linear-gradient(90deg, rgba(20, 18, 43, 0.07) 1px, transparent 1px) 0px 0px / 24px 24px, rgba(255, 255, 255, 0.46);
            backdrop-filter: blur(24px) saturate(180%);
            border: 1.5px dashed rgba(20, 18, 43, 0.35);
            border-radius: 36px 90px 36px 36px;
            padding: 26px 22px 22px;
            box-shadow: rgba(40, 20, 120, 0.25) 0px 18px 50px, rgba(255, 255, 255, 0.9) 0px 1px 0px inset;
            display: flex;
            flex-direction: column;
            gap: 8px">`,
          `<div
            data-dc-tpl="89"
            style="display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0px 4px 6px;
              gap: 10px">`,
            `<span
              data-dc-tpl="90"
              style="font-family: Anton, sans-serif;
                font-size: 24px;
                text-transform: uppercase;
                line-height: 1;
                min-width: 0;
                flex: 1 1 auto">`,
              `Programming Language`,
            `</span>`,
            `<span
              data-dc-tpl="91"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                background: rgb(20, 18, 43);
                color: rgb(255, 229, 59);
                border-radius: 999px;
                padding: 4px 12px;'>`,
              `06`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="92"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.8);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="93"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 229, 59);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-1"/>`,
            `</span>`,
            `<span
              data-dc-tpl="94"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Python`,
            `</span>`,
            `<span
              data-dc-tpl="95"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="96"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.8);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="97"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-2"/>`,
            `</span>`,
            `<span
              data-dc-tpl="98"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `C++`,
            `</span>`,
            `<span
              data-dc-tpl="99"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="100"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.8);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="101"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-3"/>`,
            `</span>`,
            `<span
              data-dc-tpl="102"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `JavaScript`,
            `</span>`,
            `<span
              data-dc-tpl="103"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="104"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.8);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="105"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-4"/>`,
            `</span>`,
            `<span
              data-dc-tpl="106"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Java`,
            `</span>`,
            `<span
              data-dc-tpl="107"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="108"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.8);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="109"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 229, 59);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-5"/>`,
            `</span>`,
            `<span
              data-dc-tpl="110"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `SQL`,
            `</span>`,
            `<span
              data-dc-tpl="111"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="112"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.8);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="113"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-6"/>`,
            `</span>`,
            `<span
              data-dc-tpl="114"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Kotlins`,
            `</span>`,
            `<span
              data-dc-tpl="115"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
        `</div>`,
        `<div
          data-dc-tpl="116"
          style="flex: 1 1 0px;
            min-width: 0px;
            box-sizing: border-box;
            background: rgb(255, 229, 59);
            border-radius: 90px 36px 36px;
            padding: 26px 22px 22px;
            box-shadow: rgba(40, 20, 120, 0.25) 0px 18px 50px;
            display: flex;
            flex-direction: column;
            gap: 8px">`,
          `<div
            data-dc-tpl="117"
            style="display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0px 4px 4px;
              gap: 10px">`,
            `<span
              data-dc-tpl="118"
              style="font-family: Anton, sans-serif;
                font-size: 24px;
                text-transform: uppercase;
                line-height: 1;
                min-width: 0;
                flex: 1 1 auto">`,
              `Hard Skills`,
            `</span>`,
            `<span
              data-dc-tpl="119"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                background: rgb(20, 18, 43);
                color: rgb(255, 229, 59);
                border-radius: 999px;
                padding: 4px 12px;'>`,
              `08`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="120"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="121"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-1"/>`,
            `</span>`,
            `<span
              data-dc-tpl="122"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `NumPy &amp; Pandas`,
            `</span>`,
            `<span
              data-dc-tpl="123"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="124"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="125"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-2"/>`,
            `</span>`,
            `<span
              data-dc-tpl="126"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `TensorFlow`,
            `</span>`,
            `<span
              data-dc-tpl="127"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `0.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="128"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="129"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-3"/>`,
            `</span>`,
            `<span
              data-dc-tpl="130"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Scikit-Learn`,
            `</span>`,
            `<span
              data-dc-tpl="131"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="132"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="133"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-4"/>`,
            `</span>`,
            `<span
              data-dc-tpl="134"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Data Cleaning`,
            `</span>`,
            `<span
              data-dc-tpl="135"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="136"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="137"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-5"/>`,
            `</span>`,
            `<span
              data-dc-tpl="138"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Data Visualization`,
            `</span>`,
            `<span
              data-dc-tpl="139"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="140"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="141"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-6"/>`,
            `</span>`,
            `<span
              data-dc-tpl="142"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Motion Graphic`,
            `</span>`,
            `<span
              data-dc-tpl="143"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="144"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="145"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-7"/>`,
            `</span>`,
            `<span
              data-dc-tpl="146"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Typography`,
            `</span>`,
            `<span
              data-dc-tpl="147"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="148"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="149"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-8"/>`,
            `</span>`,
            `<span
              data-dc-tpl="150"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `UI/UX Design`,
            `</span>`,
            `<span
              data-dc-tpl="151"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
        `</div>`,
        `<div
          data-dc-tpl="152"
          style="flex: 1 1 0px;
            min-width: 0px;
            box-sizing: border-box;
            background: rgb(46, 230, 255);
            border-radius: 36px 36px 90px;
            padding: 26px 22px 22px;
            box-shadow: rgba(40, 20, 120, 0.25) 0px 18px 50px;
            display: flex;
            flex-direction: column;
            gap: 8px">`,
          `<div
            data-dc-tpl="153"
            style="display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0px 4px 6px;
              gap: 10px">`,
            `<span
              data-dc-tpl="154"
              style="font-family: Anton, sans-serif;
                font-size: 24px;
                text-transform: uppercase;
                line-height: 1;
                min-width: 0;
                flex: 1 1 auto">`,
              `Tools`,
            `</span>`,
            `<span
              data-dc-tpl="155"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                background: rgb(20, 18, 43);
                color: rgb(46, 230, 255);
                border-radius: 999px;
                padding: 4px 12px;'>`,
              `06`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="156"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="157"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 229, 59);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-1"/>`,
            `</span>`,
            `<span
              data-dc-tpl="158"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Git &amp; GitHub`,
            `</span>`,
            `<span
              data-dc-tpl="159"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="160"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="161"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-2"/>`,
            `</span>`,
            `<span
              data-dc-tpl="162"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Google Colab`,
            `</span>`,
            `<span
              data-dc-tpl="163"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="164"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="165"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-3"/>`,
            `</span>`,
            `<span
              data-dc-tpl="166"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `React`,
            `</span>`,
            `<span
              data-dc-tpl="167"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `0.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="168"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="169"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 229, 59);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-4"/>`,
            `</span>`,
            `<span
              data-dc-tpl="170"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Jupyter Notebook`,
            `</span>`,
            `<span
              data-dc-tpl="171"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="172"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="173"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-5"/>`,
            `</span>`,
            `<span
              data-dc-tpl="174"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Canva`,
            `</span>`,
            `<span
              data-dc-tpl="175"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `4 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="176"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(255, 255, 255, 0.85);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="177"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-6"/>`,
            `</span>`,
            `<span
              data-dc-tpl="178"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Figma`,
            `</span>`,
            `<span
              data-dc-tpl="179"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
        `</div>`,
        `<div
          data-dc-tpl="180"
          style="flex: 1 1 0px;
            min-width: 0px;
            box-sizing: border-box;
            background: rgb(255, 255, 255);
            border-radius: 90px 36px;
            padding: 26px 22px 22px;
            box-shadow: rgba(40, 20, 120, 0.25) 0px 18px 50px;
            display: flex;
            flex-direction: column;
            gap: 8px">`,
          `<div
            data-dc-tpl="181"
            style="display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0px 4px 6px;
              gap: 10px">`,
            `<span
              data-dc-tpl="182"
              style="font-family: Anton, sans-serif;
                font-size: 24px;
                text-transform: uppercase;
                line-height: 1;
                min-width: 0;
                flex: 1 1 auto">`,
              `Soft Skills`,
            `</span>`,
            `<span
              data-dc-tpl="183"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                background: rgb(20, 18, 43);
                color: rgb(255, 61, 154);
                border-radius: 999px;
                padding: 4px 12px;'>`,
              `05`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="184"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgb(241, 244, 251);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="185"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-4-1"/>`,
            `</span>`,
            `<span
              data-dc-tpl="186"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Problem Solving`,
            `</span>`,
            `<span
              data-dc-tpl="187"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `3 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="188"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgb(241, 244, 251);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="189"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 229, 59);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-4-2"/>`,
            `</span>`,
            `<span
              data-dc-tpl="190"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Analysis`,
            `</span>`,
            `<span
              data-dc-tpl="191"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="192"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgb(241, 244, 251);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="193"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-4-3"/>`,
            `</span>`,
            `<span
              data-dc-tpl="194"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 13px;
                line-height: 1.05;
                white-space: normal;
                min-width: 0">`,
              `Team Collaboration`,
            `</span>`,
            `<span
              data-dc-tpl="195"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `3 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="196"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgb(241, 244, 251);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="197"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-4-4"/>`,
            `</span>`,
            `<span
              data-dc-tpl="198"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Adaptibility`,
            `</span>`,
            `<span
              data-dc-tpl="199"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `3 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="200"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgb(241, 244, 251);
              border-radius: 999px;
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="201"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-4-5"/>`,
            `</span>`,
            `<span
              data-dc-tpl="202"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Data Storytelling`,
            `</span>`,
            `<span
              data-dc-tpl="203"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
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
        background: rgb(46, 230, 255)">`,
    `</div>`,
    `<div
      data-dc-tpl="9"
      style="position: absolute;
        bottom: -120px;
        left: 300px;
        width: 420px;
        height: 420px;
        border-radius: 55% 45% 60% 40% / 42% 58%;
        background: rgb(255, 229, 59)">`,
    `</div>`,
    `<div
      data-dc-tpl="10"
      style="position: absolute;
        top: 300px;
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
              color: rgb(255, 229, 59);
              padding-bottom: 6px;
              white-space: nowrap;
              flex: 0 0 auto">`,
            `03 »»`,
          `</span>`,
          `<h2
            data-dc-tpl="85"
            style="margin: 0px;
              font-family: Anton, sans-serif;
              font-size: 96px;
              line-height: 0.9;
              text-transform: uppercase;
              color: rgb(255, 255, 255)">`,
            `Skills`,
          `</h2>`,
        `</div>`,
        `<p
          data-dc-tpl="86"
          style="margin: 0px 0px 8px;
            max-width: 420px;
            font-size: 17px;
            line-height: 1.5;
            color: rgb(255, 255, 255);
            font-weight: 500">`,
          `Versatile developer specializing in Data Science, Web Development, and UI/UX Design`,
        `</p>`,
      `</div>`,
      `<div
        data-dc-tpl="87"
        style="flex: 1 1 auto;
          min-height: 0px;
          display: flex;
          gap: 20px;
          align-items: stretch">`,
        `<div
          data-dc-tpl="88"
          style="flex: 1 1 0px;
            min-width: 0px;
            box-sizing: border-box;
            background: linear-gradient(rgba(255, 255, 255, 0.09) 1px, transparent 1px) 0px 0px / 24px 24px, linear-gradient(90deg, rgba(255, 255, 255, 0.09) 1px, transparent 1px) 0px 0px / 24px 24px, rgba(20, 18, 43, 0.58);
            backdrop-filter: blur(24px) saturate(180%);
            border: 1.5px dashed rgba(243, 241, 255, 0.35);
            border-radius: 36px 90px 36px 36px;
            padding: 26px 22px 22px;
            box-shadow: rgba(40, 20, 120, 0.25) 0px 18px 50px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset;
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: rgb(243, 241, 255)">`,
          `<div
            data-dc-tpl="89"
            style="display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0px 4px 6px;
              color: rgb(243, 241, 255);
              gap: 10px">`,
            `<span
              data-dc-tpl="90"
              style="font-family: Anton, sans-serif;
                font-size: 24px;
                text-transform: uppercase;
                color: rgb(243, 241, 255);
                line-height: 1;
                min-width: 0;
                flex: 1 1 auto">`,
              `Programming Language`,
            `</span>`,
            `<span
              data-dc-tpl="91"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                background: rgb(12, 10, 26);
                color: rgb(255, 229, 59);
                border-radius: 999px;
                padding: 4px 12px'>`,
              `06`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="92"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.75);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="93"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 229, 59);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-1"/>`,
            `</span>`,
            `<span
              data-dc-tpl="94"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Python`,
            `</span>`,
            `<span
              data-dc-tpl="95"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="96"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.75);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="97"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-2"/>`,
            `</span>`,
            `<span
              data-dc-tpl="98"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `C++`,
            `</span>`,
            `<span
              data-dc-tpl="99"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="100"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.75);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="101"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-3"/>`,
            `</span>`,
            `<span
              data-dc-tpl="102"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `JavaScript`,
            `</span>`,
            `<span
              data-dc-tpl="103"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="104"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.75);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="105"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-4"/>`,
            `</span>`,
            `<span
              data-dc-tpl="106"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Java`,
            `</span>`,
            `<span
              data-dc-tpl="107"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="108"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.75);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="109"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 229, 59);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-5"/>`,
            `</span>`,
            `<span
              data-dc-tpl="110"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `SQL`,
            `</span>`,
            `<span
              data-dc-tpl="111"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="112"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.75);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="113"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-1-6"/>`,
            `</span>`,
            `<span
              data-dc-tpl="114"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Kotlins`,
            `</span>`,
            `<span
              data-dc-tpl="115"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
        `</div>`,
        `<div
          data-dc-tpl="116"
          style="flex: 1 1 0px;
            min-width: 0px;
            box-sizing: border-box;
            background: rgb(255, 229, 59);
            border-radius: 90px 36px 36px;
            padding: 26px 22px 22px;
            box-shadow: rgba(40, 20, 120, 0.25) 0px 18px 50px;
            display: flex;
            flex-direction: column;
            gap: 8px">`,
          `<div
            data-dc-tpl="117"
            style="display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0px 4px 4px;
              gap: 10px">`,
            `<span
              data-dc-tpl="118"
              style="font-family: Anton, sans-serif;
                font-size: 24px;
                text-transform: uppercase;
                line-height: 1;
                min-width: 0;
                flex: 1 1 auto">`,
              `Hard Skills`,
            `</span>`,
            `<span
              data-dc-tpl="119"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                background: rgb(20, 18, 43);
                color: rgb(255, 229, 59);
                border-radius: 999px;
                padding: 4px 12px'>`,
              `08`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="120"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="121"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-1"/>`,
            `</span>`,
            `<span
              data-dc-tpl="122"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `NumPy &amp; Pandas`,
            `</span>`,
            `<span
              data-dc-tpl="123"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="124"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="125"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-2"/>`,
            `</span>`,
            `<span
              data-dc-tpl="126"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `TensorFlow`,
            `</span>`,
            `<span
              data-dc-tpl="127"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `0.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="128"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="129"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-3"/>`,
            `</span>`,
            `<span
              data-dc-tpl="130"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Scikit-Learn`,
            `</span>`,
            `<span
              data-dc-tpl="131"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="132"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="133"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-4"/>`,
            `</span>`,
            `<span
              data-dc-tpl="134"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Data Cleaning`,
            `</span>`,
            `<span
              data-dc-tpl="135"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="136"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="137"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-5"/>`,
            `</span>`,
            `<span
              data-dc-tpl="138"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Data Visualization`,
            `</span>`,
            `<span
              data-dc-tpl="139"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="140"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="141"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-6"/>`,
            `</span>`,
            `<span
              data-dc-tpl="142"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Motion Graphic`,
            `</span>`,
            `<span
              data-dc-tpl="143"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="144"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="145"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-7"/>`,
            `</span>`,
            `<span
              data-dc-tpl="146"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Typography`,
            `</span>`,
            `<span
              data-dc-tpl="147"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="148"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="149"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-2-8"/>`,
            `</span>`,
            `<span
              data-dc-tpl="150"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `UI/UX Design`,
            `</span>`,
            `<span
              data-dc-tpl="151"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
        `</div>`,
        `<div
          data-dc-tpl="152"
          style="flex: 1 1 0px;
            min-width: 0px;
            box-sizing: border-box;
            background: rgb(46, 230, 255);
            border-radius: 36px 36px 90px;
            padding: 26px 22px 22px;
            box-shadow: rgba(40, 20, 120, 0.25) 0px 18px 50px;
            display: flex;
            flex-direction: column;
            gap: 8px">`,
          `<div
            data-dc-tpl="153"
            style="display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0px 4px 6px;
              gap: 10px">`,
            `<span
              data-dc-tpl="154"
              style="font-family: Anton, sans-serif;
                font-size: 24px;
                text-transform: uppercase;
                line-height: 1;
                min-width: 0;
                flex: 1 1 auto">`,
              `Tools`,
            `</span>`,
            `<span
              data-dc-tpl="155"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                background: rgb(20, 18, 43);
                color: rgb(46, 230, 255);
                border-radius: 999px;
                padding: 4px 12px'>`,
              `06`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="156"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="157"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 229, 59);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-1"/>`,
            `</span>`,
            `<span
              data-dc-tpl="158"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Git &amp; GitHub`,
            `</span>`,
            `<span
              data-dc-tpl="159"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="160"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="161"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-2"/>`,
            `</span>`,
            `<span
              data-dc-tpl="162"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Google Colab`,
            `</span>`,
            `<span
              data-dc-tpl="163"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="164"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="165"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-3"/>`,
            `</span>`,
            `<span
              data-dc-tpl="166"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `React`,
            `</span>`,
            `<span
              data-dc-tpl="167"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `0.5 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="168"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="169"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 229, 59);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-4"/>`,
            `</span>`,
            `<span
              data-dc-tpl="170"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Jupyter Notebook`,
            `</span>`,
            `<span
              data-dc-tpl="171"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="172"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="173"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-5"/>`,
            `</span>`,
            `<span
              data-dc-tpl="174"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Canva`,
            `</span>`,
            `<span
              data-dc-tpl="175"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `4 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="176"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgba(20, 18, 43, 0.77);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="177"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-3-6"/>`,
            `</span>`,
            `<span
              data-dc-tpl="178"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Figma`,
            `</span>`,
            `<span
              data-dc-tpl="179"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
        `</div>`,
        `<div
          data-dc-tpl="180"
          style="flex: 1 1 0px;
            min-width: 0px;
            box-sizing: border-box;
            background: rgb(33, 30, 58);
            border-radius: 90px 36px;
            padding: 26px 22px 22px;
            box-shadow: rgba(40, 20, 120, 0.25) 0px 18px 50px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: rgb(243, 241, 255)">`,
          `<div
            data-dc-tpl="181"
            style="display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0px 4px 6px;
              color: rgb(243, 241, 255);
              gap: 10px">`,
            `<span
              data-dc-tpl="182"
              style="font-family: Anton, sans-serif;
                font-size: 24px;
                text-transform: uppercase;
                color: rgb(243, 241, 255);
                line-height: 1;
                min-width: 0;
                flex: 1 1 auto">`,
              `Soft Skills`,
            `</span>`,
            `<span
              data-dc-tpl="183"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                background: rgb(12, 10, 26);
                color: rgb(255, 61, 154);
                border-radius: 999px;
                padding: 4px 12px'>`,
              `05`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="184"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgb(48, 44, 84);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="185"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-4-1"/>`,
            `</span>`,
            `<span
              data-dc-tpl="186"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Problem Solving`,
            `</span>`,
            `<span
              data-dc-tpl="187"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `3 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="188"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgb(48, 44, 84);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="189"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 229, 59);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-4-2"/>`,
            `</span>`,
            `<span
              data-dc-tpl="190"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Analysis`,
            `</span>`,
            `<span
              data-dc-tpl="191"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `2 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="192"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgb(48, 44, 84);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="193"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(46, 230, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-4-3"/>`,
            `</span>`,
            `<span
              data-dc-tpl="194"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 13px;
                line-height: 1.05;
                color: rgb(243, 241, 255);
                white-space: normal;
                min-width: 0">`,
              `Team Collaboration`,
            `</span>`,
            `<span
              data-dc-tpl="195"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `3 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="196"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgb(48, 44, 84);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="197"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(124, 92, 255);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-4-4"/>`,
            `</span>`,
            `<span
              data-dc-tpl="198"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Adaptibility`,
            `</span>`,
            `<span
              data-dc-tpl="199"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `3 yrs`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="200"
            style="display: flex;
              align-items: center;
              gap: 10px;
              height: 42px;
              padding: 0px 14px 0px 7px;
              background: rgb(48, 44, 84);
              border-radius: 999px;
              color: rgb(243, 241, 255);
              flex: 0 0 auto">`,
            `<span
              class="slot"
              data-dc-tpl="201"
              data-fit="contain"
              style="width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgb(255, 61, 154);
                flex: 0 0 auto">`,
              `<img
                alt="Skill icon"
                class="slot-img"
                data-slot="skill-4-5"/>`,
            `</span>`,
            `<span
              data-dc-tpl="202"
              style="flex: 1 1 0%;
                font-weight: 700;
                font-size: 15px;
                color: rgb(243, 241, 255);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Data Storytelling`,
            `</span>`,
            `<span
              data-dc-tpl="203"
              style='font-family: "JetBrains Mono", monospace;
                font-size: 13px;
                font-weight: 700;
                color: rgb(243, 241, 255);
                flex: 0 0 auto;
                white-space: nowrap'>`,
              `1 yr`,
            `</span>`,
          `</div>`,
        `</div>`,
      `</div>`,
    `</div>`,
  ].join(""),
};
