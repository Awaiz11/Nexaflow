import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ROI calculators & plan builder",
  description: "Estimate missed inquiry revenue and build a transparent monthly website plan with NexaFlow’s interactive tools.",
  alternates: { canonical: "/tools" },
};

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return children;
}
