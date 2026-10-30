import type { SectionContent } from "./types";

/**
 * Panel 04 · Experience
 *
 * Cara mengedit: tiap elemen HTML ditulis satu per baris (turun ke bawah).
 * Cari teks yang ingin diganti (mis. [placeholder]) lalu ubah barisnya saja.
 * Ganti di KEDUA blok: `light` (tema terang) dan `dark` (tema gelap).
 * Jangan menambah spasi/baris kosong di antara tag; satu item = satu baris.
 * Slot gambar: lihat src/content/images.ts
 */
export const experience: SectionContent = {
  id: "experience",
  title: "Experience",

  // ───────────── TEMA TERANG ─────────────
  light: [
    `<div
      data-dc-tpl="8"
      style="position: absolute;
        top: -160px;
        left: auto;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        background: rgb(46, 230, 255);
        right: 60px">`,
    `</div>`,
    `<div
      data-dc-tpl="9"
      style="position: absolute;
        bottom: -120px;
        left: 100px;
        width: 400px;
        height: 400px;
        border-radius: 55% 45% 60% 40% / 42% 58%;
        background: rgb(255, 61, 154);">`,
    `</div>`,
    `<div
      data-dc-tpl="10"
      style="position: absolute;
        top: auto;
        left: 410px;
        width: 130px;
        height: 65px;
        border-radius: 130px 130px 0px 0px;
        background: rgb(124, 92, 255);
        bottom: 0px">`,
    `</div>`,
    `<div
      data-dc-tpl="81"
      style="position: absolute;
        inset: 124px 48px 44px 132px;
        display: flex;
        gap: 48px;">`,
      `<div
        data-dc-tpl="82"
        style="flex: 0 0 auto;
          width: 380px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 8px 0px;">`,
        `<div
          data-dc-tpl="83"
          style="display: flex;
            flex-direction: column;
            gap: 14px;">`,
          `<span
            data-dc-tpl="84"
            style="font-family: Anton, sans-serif;
              font-style: italic;
              font-size: 40px;
              line-height: 1;
              color: rgb(255, 61, 154);
              white-space: nowrap;
              flex: 0 0 auto">`,
            `04 »»`,
          `</span>`,
          `<h2
            data-dc-tpl="85"
            style="margin: 0px;
              font-family: Anton, sans-serif;
              font-size: 96px;
              line-height: 0.9;
              text-transform: uppercase;">`,
            `Expe­rience`,
          `</h2>`,
          `<p
            data-dc-tpl="86"
            style="margin: 8px 0px 0px;
              font-size: 17px;
              line-height: 1.55;
              font-weight: 500;">`,
            `Driven by continuous learning, my experience spans leading end-to-end web projects, analyzing complex system needs, and guiding students in programming and computational logic.`,
          `</p>`,
        `</div>`,
        `<div
          data-dc-tpl="87"
          style="display: flex;
            align-items: center;
            gap: 14px;">`,
          `<span
            data-dc-tpl="88"
            style="font-family: Anton, sans-serif;
              font-size: 64px;
              line-height: 1;">`,
            `04`,
          `</span>`,
          `<span
            data-dc-tpl="89"
            style='font-family: "JetBrains Mono", monospace;
              font-size: 13px;
              font-weight: 700;
              background: rgb(20, 18, 43);
              color: rgb(255, 229, 59);
              border-radius: 999px;
              padding: 8px 16px;'>`,
            `TOTAL EXPERIENCE`,
          `</span>`,
        `</div>`,
      `</div>`,
      `<div
        data-dc-tpl="90"
        style="position: relative;
          flex: 1 1 0px;
          min-width: 0px;
          padding-left: 52px;
          display: flex;
          flex-direction: column;
          gap: 18px;">`,
        `<div
          data-dc-tpl="91"
          style="position: absolute;
            left: 14px;
            top: 20px;
            bottom: 20px;
            border-left: 4px dashed rgb(20, 18, 43);">`,
        `</div>`,
        `<div
          data-dc-tpl="92"
          style="position: relative;
            flex: 1 1 0px;
            min-height: 0px;
            box-sizing: border-box;
            background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 14px, rgba(255, 229, 59, 0.28) 14px, rgba(255, 229, 59, 0.28) 16px), rgba(255, 255, 255, 0.58);
            backdrop-filter: blur(24px) saturate(170%);
            border: 1.5px solid rgba(255, 255, 255, 0.85);
            border-radius: 28px 90px;
            padding: 0px 36px;
            display: flex;
            align-items: center;
            gap: 24px;
            box-shadow: rgba(120, 100, 0, 0.2) 0px 16px 40px, rgba(255, 255, 255, 0.9) 0px 1px 0px inset;">`,
          `<span
            data-dc-tpl="93"
            style="position: absolute;
              left: -50px;
              top: 50%;
              margin-top: -18px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: rgb(46, 230, 255);
              border: 6px solid rgb(255, 229, 59);
              box-sizing: border-box;
              box-shadow: rgb(20, 18, 43) 0px 0px 0px 3px;">`,
          `</span>`,
          `<div
            data-dc-tpl="94"
            style="flex: 0 0 auto;
              width: 170px;
              display: flex;
              flex-direction: column;
              gap: 8px;
              align-items: flex-start;">`,
            `<span
              data-dc-tpl="95"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 13px;
                background: rgb(20, 18, 43);
                color: rgb(255, 229, 59);
                border-radius: 999px;
                padding: 8px 14px;
                white-space: nowrap;'>`,
              `22 Sep – 02 Feb 2026`,
            `</span>`,
            `<span
              data-dc-tpl="96"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 12px;
                color: rgb(75, 79, 110);'>`,
              `6 Months`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="97"
            style="flex: 1 1 0px;
              min-width: 0px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              justify-content: center">`,
            `<span
              data-dc-tpl="98"
              style="font-family: Anton, sans-serif;
                font-size: 17px;
                line-height: 1.05;
                text-transform: uppercase;
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-width: 0">`,
              `Laboratory Assistant of Data Structures &amp; Programming Fundamentals`,
            `</span>`,
            `<span
              data-dc-tpl="99"
              style="font-size: 15px;
                font-weight: 700;
                color: rgb(75, 79, 110);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Universitas Ahmad Dahlan · Yogyakarta`,
            `</span>`,
            `<span
              data-dc-tpl="100"
              style="font-size: 12px;
                line-height: 1.3;
                color: rgb(30, 28, 58);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical">`,
              `Mentored students in programming fundamentals and data structures (Arrays, Linked Lists, Stacks, Queues, and Trees). Conducted code reviews, lab grading, and debugging support.`,
            `</span>`,
          `</div>`,
          `<span
            data-dc-tpl="101"
            style='flex: 0 0 auto;
              font-family: "JetBrains Mono", monospace;
              font-weight: 700;
              font-size: 13px;
              background: rgb(255, 61, 154);
              color: rgb(255, 255, 255);
              border-radius: 999px;
              padding: 8px 16px;
              white-space: nowrap'>`,
            `Academic`,
          `</span>`,
        `</div>`,
        `<div
          data-dc-tpl="102"
          style="position: relative;
            flex: 1 1 0px;
            min-height: 0px;
            box-sizing: border-box;
            background: rgb(255, 255, 255);
            border-radius: 28px 72px;
            padding: 0px 36px;
            display: flex;
            align-items: center;
            gap: 24px;
            box-shadow: rgba(120, 100, 0, 0.2) 0px 16px 40px;">`,
          `<span
            data-dc-tpl="103"
            style="position: absolute;
              left: -50px;
              top: 50%;
              margin-top: -18px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: rgb(255, 61, 154);
              border: 6px solid rgb(255, 229, 59);
              box-sizing: border-box;
              box-shadow: rgb(20, 18, 43) 0px 0px 0px 3px;">`,
          `</span>`,
          `<div
            data-dc-tpl="104"
            style="flex: 0 0 auto;
              width: 170px;
              display: flex;
              flex-direction: column;
              gap: 8px;
              align-items: flex-start;">`,
            `<span
              data-dc-tpl="105"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 13px;
                background: rgb(46, 230, 255);
                border-radius: 999px;
                padding: 8px 14px;
                white-space: nowrap;'>`,
              `10 Mar – 04 Aug 2025`,
            `</span>`,
            `<span
              data-dc-tpl="106"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 12px;
                color: rgb(75, 79, 110);'>`,
              `6 Months`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="107"
            style="flex: 1 1 0px;
              min-width: 0px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              justify-content: center">`,
            `<span
              data-dc-tpl="108"
              style="font-family: Anton, sans-serif;
                font-size: 17px;
                line-height: 1.05;
                text-transform: uppercase;
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-width: 0">`,
              `Laboratory Assistant of Algorithms &amp; Web Development`,
            `</span>`,
            `<span
              data-dc-tpl="109"
              style="font-size: 15px;
                font-weight: 700;
                color: rgb(75, 79, 110);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Universitas Ahmad Dahlan · Yogyakarta`,
            `</span>`,
            `<span
              data-dc-tpl="110"
              style="font-size: 12px;
                line-height: 1.3;
                color: rgb(30, 28, 58);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical">`,
              `Guided algorithmic problem-solving, complexity analysis, and web application development (Frontend &amp; Backend). Evaluated practical assignments and semester projects.`,
            `</span>`,
          `</div>`,
          `<span
            data-dc-tpl="111"
            style='flex: 0 0 auto;
              font-family: "JetBrains Mono", monospace;
              font-weight: 700;
              font-size: 13px;
              background: rgb(124, 92, 255);
              color: rgb(255, 255, 255);
              border-radius: 999px;
              padding: 8px 16px;
              white-space: nowrap'>`,
            `Academic`,
          `</span>`,
        `</div>`,
        `<div
          data-dc-tpl="112"
          style="position: relative;
            flex: 1 1 0px;
            min-height: 0px;
            box-sizing: border-box;
            background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 14px, rgba(255, 229, 59, 0.28) 14px, rgba(255, 229, 59, 0.28) 16px), rgba(255, 255, 255, 0.58);
            backdrop-filter: blur(24px) saturate(170%);
            border: 1.5px solid rgba(255, 255, 255, 0.85);
            border-radius: 28px 90px;
            padding: 0px 36px;
            display: flex;
            align-items: center;
            gap: 24px;
            box-shadow: rgba(120, 100, 0, 0.2) 0px 16px 40px, rgba(255, 255, 255, 0.9) 0px 1px 0px inset;">`,
          `<span
            data-dc-tpl="113"
            style="position: absolute;
              left: -50px;
              top: 50%;
              margin-top: -18px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: rgb(124, 92, 255);
              border: 6px solid rgb(255, 229, 59);
              box-sizing: border-box;
              box-shadow: rgb(20, 18, 43) 0px 0px 0px 3px;">`,
          `</span>`,
          `<div
            data-dc-tpl="114"
            style="flex: 0 0 auto;
              width: 170px;
              display: flex;
              flex-direction: column;
              gap: 8px;
              align-items: flex-start;">`,
            `<span
              data-dc-tpl="115"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 13px;
                background: rgb(20, 18, 43);
                color: rgb(255, 229, 59);
                border-radius: 999px;
                padding: 8px 14px;
                white-space: nowrap;'>`,
              `10 Mar – 04 Aug 2025`,
            `</span>`,
            `<span
              data-dc-tpl="116"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 12px;
                color: rgb(75, 79, 110);'>`,
              `6 Months`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="117"
            style="flex: 1 1 0px;
              min-width: 0px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              justify-content: center">`,
            `<span
              data-dc-tpl="118"
              style="font-family: Anton, sans-serif;
                font-size: 17px;
                line-height: 1.05;
                text-transform: uppercase;
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-width: 0">`,
              `Teaching Assistant of Discrete Mathematics`,
            `</span>`,
            `<span
              data-dc-tpl="119"
              style="font-size: 15px;
                font-weight: 700;
                color: rgb(75, 79, 110);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Universitas Ahmad Dahlan · Yogyakarta`,
            `</span>`,
            `<span
              data-dc-tpl="120"
              style="font-size: 12px;
                line-height: 1.3;
                color: rgb(30, 28, 58);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical">`,
              `Assisted teaching proposition logic, set theory, graph theory, and combinatorics. Designed practice problems and graded student evaluations.`,
            `</span>`,
          `</div>`,
          `<span
            data-dc-tpl="121"
            style='flex: 0 0 auto;
              font-family: "JetBrains Mono", monospace;
              font-weight: 700;
              font-size: 13px;
              background: rgb(46, 230, 255);
              border-radius: 999px;
              padding: 8px 16px;
              white-space: nowrap'>`,
            `Academic`,
          `</span>`,
        `</div>`,
        `<div
          data-dc-tpl="122"
          style="position: relative;
            flex: 1 1 0px;
            min-height: 0px;
            box-sizing: border-box;
            background: rgb(255, 255, 255);
            border-radius: 28px 72px;
            padding: 0px 36px;
            display: flex;
            align-items: center;
            gap: 24px;
            box-shadow: rgba(120, 100, 0, 0.2) 0px 16px 40px;">`,
          `<span
            data-dc-tpl="123"
            style="position: absolute;
              left: -50px;
              top: 50%;
              margin-top: -18px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: rgb(46, 230, 255);
              border: 6px solid rgb(255, 229, 59);
              box-sizing: border-box;
              box-shadow: rgb(20, 18, 43) 0px 0px 0px 3px;">`,
          `</span>`,
          `<div
            data-dc-tpl="124"
            style="flex: 0 0 auto;
              width: 170px;
              display: flex;
              flex-direction: column;
              gap: 8px;
              align-items: flex-start;">`,
            `<span
              data-dc-tpl="125"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 13px;
                background: rgb(255, 61, 154);
                color: rgb(255, 255, 255);
                border-radius: 999px;
                padding: 8px 14px;
                white-space: nowrap;'>`,
              `15 May – 17 Jul 2026`,
            `</span>`,
            `<span
              data-dc-tpl="126"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 12px;
                color: rgb(75, 79, 110);'>`,
              `3 Months`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="127"
            style="flex: 1 1 0px;
              min-width: 0px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              justify-content: center">`,
            `<span
              data-dc-tpl="128"
              style="font-family: Anton, sans-serif;
                font-size: 17px;
                line-height: 1.05;
                text-transform: uppercase;
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-width: 0">`,
              `Project Manager`,
            `</span>`,
            `<span
              data-dc-tpl="129"
              style="font-size: 15px;
                font-weight: 700;
                color: rgb(75, 79, 110);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `CodeBloom · Yogyakarta`,
            `</span>`,
            `<span
              data-dc-tpl="130"
              style="font-size: 12px;
                line-height: 1.3;
                color: rgb(30, 28, 58);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical">`,
              `Led a flower-shop web project, gathered requirements, designed UML/ERD, managed timelines, and coordinated the team.`,
            `</span>`,
          `</div>`,
          `<span
            data-dc-tpl="131"
            style='flex: 0 0 auto;
              font-family: "JetBrains Mono", monospace;
              font-weight: 700;
              font-size: 13px;
              background: rgb(255, 229, 59);
              border-radius: 999px;
              padding: 8px 16px;
              white-space: nowrap'>`,
            `Academic`,
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
        top: -160px;
        left: auto;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        background: rgb(46, 230, 255);
        right: 60px">`,
    `</div>`,
    `<div
      data-dc-tpl="9"
      style="position: absolute;
        bottom: -120px;
        left: 100px;
        width: 400px;
        height: 400px;
        border-radius: 55% 45% 60% 40% / 42% 58%;
        background: rgb(255, 61, 154)">`,
    `</div>`,
    `<div
      data-dc-tpl="10"
      style="position: absolute;
        top: auto;
        left: 410px;
        width: 130px;
        height: 65px;
        border-radius: 130px 130px 0px 0px;
        background: rgb(124, 92, 255);
        bottom: 0px">`,
    `</div>`,
    `<div
      data-dc-tpl="81"
      style="position: absolute;
        inset: 124px 48px 44px 132px;
        display: flex;
        gap: 48px">`,
      `<div
        data-dc-tpl="82"
        style="flex: 0 0 auto;
          width: 380px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 8px 0px">`,
        `<div
          data-dc-tpl="83"
          style="display: flex;
            flex-direction: column;
            gap: 14px">`,
          `<span
            data-dc-tpl="84"
            style="font-family: Anton, sans-serif;
              font-style: italic;
              font-size: 40px;
              line-height: 1;
              color: rgb(255, 61, 154);
              white-space: nowrap;
              flex: 0 0 auto">`,
            `04 »»`,
          `</span>`,
          `<h2
            data-dc-tpl="85"
            style="margin: 0px;
              font-family: Anton, sans-serif;
              font-size: 96px;
              line-height: 0.9;
              text-transform: uppercase">`,
            `Expe­rience`,
          `</h2>`,
          `<p
            data-dc-tpl="86"
            style="margin: 8px 0px 0px;
              font-size: 17px;
              line-height: 1.55;
              font-weight: 500">`,
            `Driven by continuous learning, my experience spans leading end-to-end web projects, analyzing complex system needs, and guiding students in programming and computational logic.`,
          `</p>`,
        `</div>`,
        `<div
          data-dc-tpl="87"
          style="display: flex;
            align-items: center;
            gap: 14px">`,
          `<span
            data-dc-tpl="88"
            style="font-family: Anton, sans-serif;
              font-size: 64px;
              line-height: 1">`,
            `04`,
          `</span>`,
          `<span
            data-dc-tpl="89"
            style='font-family: "JetBrains Mono", monospace;
              font-size: 13px;
              font-weight: 700;
              background: rgb(20, 18, 43);
              color: rgb(255, 229, 59);
              border-radius: 999px;
              padding: 8px 16px'>`,
            `TOTAL EXPERIENCE`,
          `</span>`,
        `</div>`,
      `</div>`,
      `<div
        data-dc-tpl="90"
        style="position: relative;
          flex: 1 1 0px;
          min-width: 0px;
          padding-left: 52px;
          display: flex;
          flex-direction: column;
          gap: 18px">`,
        `<div
          data-dc-tpl="91"
          style="position: absolute;
            left: 14px;
            top: 20px;
            bottom: 20px;
            border-left: 4px dashed rgb(20, 18, 43)">`,
        `</div>`,
        `<div
          data-dc-tpl="92"
          style="position: relative;
            flex: 1 1 0px;
            min-height: 0px;
            box-sizing: border-box;
            background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 14px, rgba(255, 229, 59, 0.28) 14px, rgba(255, 229, 59, 0.28) 16px), rgba(20, 18, 43, 0.64);
            backdrop-filter: blur(24px) saturate(170%);
            border: 1.5px solid rgba(255, 255, 255, 0.22);
            border-radius: 28px 90px;
            padding: 0px 36px;
            display: flex;
            align-items: center;
            gap: 24px;
            box-shadow: rgba(120, 100, 0, 0.2) 0px 16px 40px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset;
            color: rgb(243, 241, 255)">`,
          `<span
            data-dc-tpl="93"
            style="position: absolute;
              left: -50px;
              top: 50%;
              margin-top: -18px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: rgb(46, 230, 255);
              border: 6px solid rgb(255, 229, 59);
              box-sizing: border-box;
              box-shadow: rgb(20, 18, 43) 0px 0px 0px 3px">`,
          `</span>`,
          `<div
            data-dc-tpl="94"
            style="flex: 0 0 auto;
              width: 170px;
              display: flex;
              flex-direction: column;
              gap: 8px;
              align-items: flex-start;
              color: rgb(243, 241, 255)">`,
            `<span
              data-dc-tpl="95"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 13px;
                background: rgb(12, 10, 26);
                color: rgb(255, 229, 59);
                border-radius: 999px;
                padding: 8px 14px;
                white-space: nowrap'>`,
              `22 Sep – 02 Feb 2026`,
            `</span>`,
            `<span
              data-dc-tpl="96"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 12px;
                color: rgb(169, 174, 201)'>`,
              `6 Months`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="97"
            style="flex: 1 1 0px;
              min-width: 0px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              color: rgb(243, 241, 255);
              justify-content: center">`,
            `<span
              data-dc-tpl="98"
              style="font-family: Anton, sans-serif;
                font-size: 17px;
                line-height: 1.05;
                text-transform: uppercase;
                color: rgb(243, 241, 255);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-width: 0">`,
              `Laboratory Assistant of Data Structures &amp; Programming Fundamentals`,
            `</span>`,
            `<span
              data-dc-tpl="99"
              style="font-size: 15px;
                font-weight: 700;
                color: rgb(169, 174, 201);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Universitas Ahmad Dahlan · Yogyakarta`,
            `</span>`,
            `<span
              data-dc-tpl="100"
              style="font-size: 12px;
                line-height: 1.3;
                color: rgb(228, 226, 250);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical">`,
              `Mentored students in programming fundamentals and data structures (Arrays, Linked Lists, Stacks, Queues, and Trees). Conducted code reviews, lab grading, and debugging support.`,
            `</span>`,
          `</div>`,
          `<span
            data-dc-tpl="101"
            style='flex: 0 0 auto;
              font-family: "JetBrains Mono", monospace;
              font-weight: 700;
              font-size: 13px;
              background: rgb(255, 61, 154);
              color: rgb(255, 255, 255);
              border-radius: 999px;
              padding: 8px 16px;
              white-space: nowrap'>`,
            `Academic`,
          `</span>`,
        `</div>`,
        `<div
          data-dc-tpl="102"
          style="position: relative;
            flex: 1 1 0px;
            min-height: 0px;
            box-sizing: border-box;
            background: rgb(33, 30, 58);
            border-radius: 28px 72px;
            padding: 0px 36px;
            display: flex;
            align-items: center;
            gap: 24px;
            box-shadow: rgba(120, 100, 0, 0.2) 0px 16px 40px;
            color: rgb(243, 241, 255)">`,
          `<span
            data-dc-tpl="103"
            style="position: absolute;
              left: -50px;
              top: 50%;
              margin-top: -18px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: rgb(255, 61, 154);
              border: 6px solid rgb(255, 229, 59);
              box-sizing: border-box;
              box-shadow: rgb(20, 18, 43) 0px 0px 0px 3px">`,
          `</span>`,
          `<div
            data-dc-tpl="104"
            style="flex: 0 0 auto;
              width: 170px;
              display: flex;
              flex-direction: column;
              gap: 8px;
              align-items: flex-start;
              color: rgb(243, 241, 255)">`,
            `<span
              data-dc-tpl="105"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 13px;
                background: rgb(46, 230, 255);
                border-radius: 999px;
                padding: 8px 14px;
                white-space: nowrap'>`,
              `10 Mar – 04 Aug 2025`,
            `</span>`,
            `<span
              data-dc-tpl="106"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 12px;
                color: rgb(169, 174, 201)'>`,
              `6 Months`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="107"
            style="flex: 1 1 0px;
              min-width: 0px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              color: rgb(243, 241, 255);
              justify-content: center">`,
            `<span
              data-dc-tpl="108"
              style="font-family: Anton, sans-serif;
                font-size: 17px;
                line-height: 1.05;
                text-transform: uppercase;
                color: rgb(243, 241, 255);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-width: 0">`,
              `Laboratory Assistant of Algorithms &amp; Web Development`,
            `</span>`,
            `<span
              data-dc-tpl="109"
              style="font-size: 15px;
                font-weight: 700;
                color: rgb(169, 174, 201);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Universitas Ahmad Dahlan · Yogyakarta`,
            `</span>`,
            `<span
              data-dc-tpl="110"
              style="font-size: 12px;
                line-height: 1.3;
                color: rgb(228, 226, 250);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical">`,
              `Guided algorithmic problem-solving, complexity analysis, and web application development (Frontend &amp; Backend). Evaluated practical assignments and semester projects.`,
            `</span>`,
          `</div>`,
          `<span
            data-dc-tpl="111"
            style='flex: 0 0 auto;
              font-family: "JetBrains Mono", monospace;
              font-weight: 700;
              font-size: 13px;
              background: rgb(124, 92, 255);
              color: rgb(255, 255, 255);
              border-radius: 999px;
              padding: 8px 16px;
              white-space: nowrap'>`,
            `Academic`,
          `</span>`,
        `</div>`,
        `<div
          data-dc-tpl="112"
          style="position: relative;
            flex: 1 1 0px;
            min-height: 0px;
            box-sizing: border-box;
            background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 14px, rgba(255, 229, 59, 0.28) 14px, rgba(255, 229, 59, 0.28) 16px), rgba(20, 18, 43, 0.64);
            backdrop-filter: blur(24px) saturate(170%);
            border: 1.5px solid rgba(255, 255, 255, 0.22);
            border-radius: 28px 90px;
            padding: 0px 36px;
            display: flex;
            align-items: center;
            gap: 24px;
            box-shadow: rgba(120, 100, 0, 0.2) 0px 16px 40px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset;
            color: rgb(243, 241, 255)">`,
          `<span
            data-dc-tpl="113"
            style="position: absolute;
              left: -50px;
              top: 50%;
              margin-top: -18px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: rgb(124, 92, 255);
              border: 6px solid rgb(255, 229, 59);
              box-sizing: border-box;
              box-shadow: rgb(20, 18, 43) 0px 0px 0px 3px">`,
          `</span>`,
          `<div
            data-dc-tpl="114"
            style="flex: 0 0 auto;
              width: 170px;
              display: flex;
              flex-direction: column;
              gap: 8px;
              align-items: flex-start;
              color: rgb(243, 241, 255)">`,
            `<span
              data-dc-tpl="115"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 13px;
                background: rgb(12, 10, 26);
                color: rgb(255, 229, 59);
                border-radius: 999px;
                padding: 8px 14px;
                white-space: nowrap'>`,
              `10 Mar – 04 Aug 2025`,
            `</span>`,
            `<span
              data-dc-tpl="116"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 12px;
                color: rgb(169, 174, 201)'>`,
              `6 Months`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="117"
            style="flex: 1 1 0px;
              min-width: 0px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              color: rgb(243, 241, 255);
              justify-content: center">`,
            `<span
              data-dc-tpl="118"
              style="font-family: Anton, sans-serif;
                font-size: 17px;
                line-height: 1.05;
                text-transform: uppercase;
                color: rgb(243, 241, 255);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-width: 0">`,
              `Teaching Assistant of Discrete Mathematics`,
            `</span>`,
            `<span
              data-dc-tpl="119"
              style="font-size: 15px;
                font-weight: 700;
                color: rgb(169, 174, 201);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `Universitas Ahmad Dahlan · Yogyakarta`,
            `</span>`,
            `<span
              data-dc-tpl="120"
              style="font-size: 12px;
                line-height: 1.3;
                color: rgb(228, 226, 250);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical">`,
              `Assisted teaching proposition logic, set theory, graph theory, and combinatorics. Designed practice problems and graded student evaluations.`,
            `</span>`,
          `</div>`,
          `<span
            data-dc-tpl="121"
            style='flex: 0 0 auto;
              font-family: "JetBrains Mono", monospace;
              font-weight: 700;
              font-size: 13px;
              background: rgb(46, 230, 255);
              border-radius: 999px;
              padding: 8px 16px;
              white-space: nowrap'>`,
            `Academic`,
          `</span>`,
        `</div>`,
        `<div
          data-dc-tpl="122"
          style="position: relative;
            flex: 1 1 0px;
            min-height: 0px;
            box-sizing: border-box;
            background: rgb(33, 30, 58);
            border-radius: 28px 72px;
            padding: 0px 36px;
            display: flex;
            align-items: center;
            gap: 24px;
            box-shadow: rgba(120, 100, 0, 0.2) 0px 16px 40px;
            color: rgb(243, 241, 255)">`,
          `<span
            data-dc-tpl="123"
            style="position: absolute;
              left: -50px;
              top: 50%;
              margin-top: -18px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: rgb(46, 230, 255);
              border: 6px solid rgb(255, 229, 59);
              box-sizing: border-box;
              box-shadow: rgb(20, 18, 43) 0px 0px 0px 3px">`,
          `</span>`,
          `<div
            data-dc-tpl="124"
            style="flex: 0 0 auto;
              width: 170px;
              display: flex;
              flex-direction: column;
              gap: 8px;
              align-items: flex-start;
              color: rgb(243, 241, 255)">`,
            `<span
              data-dc-tpl="125"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 13px;
                background: rgb(255, 61, 154);
                color: rgb(255, 255, 255);
                border-radius: 999px;
                padding: 8px 14px;
                white-space: nowrap'>`,
              `15 May – 17 Jul 2026`,
            `</span>`,
            `<span
              data-dc-tpl="126"
              style='font-family: "JetBrains Mono", monospace;
                font-weight: 700;
                font-size: 12px;
                color: rgb(169, 174, 201)'>`,
              `3 Months`,
            `</span>`,
          `</div>`,
          `<div
            data-dc-tpl="127"
            style="flex: 1 1 0px;
              min-width: 0px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              color: rgb(243, 241, 255);
              justify-content: center">`,
            `<span
              data-dc-tpl="128"
              style="font-family: Anton, sans-serif;
                font-size: 17px;
                line-height: 1.05;
                text-transform: uppercase;
                color: rgb(243, 241, 255);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-width: 0">`,
              `Project Manager`,
            `</span>`,
            `<span
              data-dc-tpl="129"
              style="font-size: 15px;
                font-weight: 700;
                color: rgb(169, 174, 201);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0">`,
              `CodeBloom · Yogyakarta`,
            `</span>`,
            `<span
              data-dc-tpl="130"
              style="font-size: 12px;
                line-height: 1.3;
                color: rgb(228, 226, 250);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical">`,
              `Led a flower-shop web project, gathered requirements, designed UML/ERD, managed timelines, and coordinated the team.`,
            `</span>`,
          `</div>`,
          `<span
            data-dc-tpl="131"
            style='flex: 0 0 auto;
              font-family: "JetBrains Mono", monospace;
              font-weight: 700;
              font-size: 13px;
              background: rgb(255, 229, 59);
              border-radius: 999px;
              padding: 8px 16px;
              white-space: nowrap'>`,
            `Academic`,
          `</span>`,
        `</div>`,
      `</div>`,
    `</div>`,
  ].join(""),
};
