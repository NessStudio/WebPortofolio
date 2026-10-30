import type { CSSProperties } from "react";

/** Ubah string style inline ("a: b; c: d") menjadi objek style React. */
export function css(input: string): CSSProperties {
  const out: Record<string, string> = {};
  let buf = "";
  let depth = 0;
  let quote = "";
  const parts: string[] = [];
  for (const ch of input) {
    if (quote) {
      if (ch === quote) quote = "";
    } else if (ch === '"' || ch === "'") quote = ch;
    else if (ch === "(") depth++;
    else if (ch === ")") depth--;
    if (ch === ";" && depth === 0 && !quote) {
      parts.push(buf);
      buf = "";
    } else buf += ch;
  }
  if (buf.trim()) parts.push(buf);
  for (const part of parts) {
    const i = part.indexOf(":");
    if (i < 0) continue;
    const prop = part.slice(0, i).trim();
    const val = part.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith("--")
      ? prop
      : prop.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = val;
  }
  return out as CSSProperties;
}
