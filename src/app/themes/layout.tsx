import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Themes & live demos",
  description: "Explore responsive, booking-ready website directions for hospitality, salons, wellness, retail and creative businesses.",
  alternates: { canonical: "/themes" },
};

export default function ThemesLayout({ children }: { children: ReactNode }) {
  return children;
}
