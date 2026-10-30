import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Simple website pricing",
  description: "Choose a managed website plan from $49/month with $0 down, no long-term contract and ongoing care included.",
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return children;
}
