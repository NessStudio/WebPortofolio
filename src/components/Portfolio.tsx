"use client";

import { useEffect, type ReactNode } from "react";
import { initPortfolio } from "../lib/portfolio";

/**
 * Pembungkus client: hanya menyalakan perilaku (scroll, gradien, tema, tombol).
 * Seluruh markup dirender di server dan dikirim lewat `children`.
 */
export default function Portfolio({ children }: { children: ReactNode }) {
  useEffect(() => initPortfolio(), []);
  return <>{children}</>;
}
