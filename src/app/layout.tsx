import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Newsreader, Schibsted_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingConcierge } from "@/components/FloatingConcierge";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE_URL } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sans = Schibsted_Grotesk({ subsets: ["latin"], variable: "--nf-sans" });
const display = Newsreader({ subsets: ["latin"], variable: "--nf-display", style: ["normal", "italic"], axes: ["opsz"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NexaFlow | Websites for local businesses",
  description: "NexaFlow designs, launches and looks after websites for restaurants, salons, studios and shops. See a free preview of yours in 48 hours. $0 down, cancel anytime.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "NexaFlow | Websites for local businesses",
    description: "Websites for local businesses, built and looked after for you. Free preview in 48 hours, $0 down.",
    url: SITE_URL,
    siteName: "NexaFlow",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexaFlow Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaFlow | Websites for local businesses",
    description: "Websites for local businesses, built and looked after for you. Free preview in 48 hours, $0 down.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

const themeInitScript = `(() => {
  try {
    const saved = localStorage.getItem("shiftline-theme");
    const theme = saved === "dark" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }

  if (typeof window !== "undefined") {
    const origError = console.error;
    console.error = function (...args) {
      const msg = typeof args[0] === "string" ? args[0] : "";
      if (
        msg.includes("hydration") ||
        msg.includes("hydrated") ||
        msg.includes("__processed_") ||
        msg.includes("did not match")
      ) {
        return;
      }
      origError.apply(console, args);
    };

    const cleanAttrs = () => {
      if (document.body) {
        for (const attr of Array.from(document.body.attributes)) {
          if (
            attr.name.startsWith("__processed_") ||
            attr.name.startsWith("data-gr-") ||
            attr.name.startsWith("data-lt-") ||
            attr.name.startsWith("bis_")
          ) {
            document.body.removeAttribute(attr.name);
          }
        }
      }
    };
    cleanAttrs();
    window.addEventListener("DOMContentLoaded", cleanAttrs);
  }
})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${sans.variable} ${display.variable} min-h-screen bg-paper font-sans text-ink antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <FloatingConcierge />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
