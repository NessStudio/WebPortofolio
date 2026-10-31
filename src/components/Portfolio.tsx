"use client";

import { useEffect, type ReactNode } from "react";
import { initPortfolio } from "../lib/portfolio";
import { initMobile } from "../lib/mobile";
import { initLoader } from "../lib/loader";
import { initFx } from "../lib/fx";
import { initContact } from "../lib/contact";

/**
 * Pembungkus client: hanya menyalakan perilaku (loading, scroll, gradien, tema, tombol, layout mobile).
 * Seluruh markup dirender di server dan dikirim lewat `children`.
 */
export default function Portfolio({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stops = [initLoader(), initPortfolio(), initMobile(), initFx(), initContact()];
    return () => stops.forEach((stop) => stop());
  }, []);
  return <>{children}</>;
}
