import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingConcierge } from "@/components/FloatingConcierge";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexaflow-brown.vercel.app"),
  title: "NexaFlow | Website-as-a-Service for Local Businesses",
  description: "Turn Google Maps & local searches into booked revenue automatically. Zero upfront cost, $0 down. Get a custom, high-converting website managed for you.",
  openGraph: {
    title: "NexaFlow | Website-as-a-Service",
    description: "Turn Google Maps & local searches into booked revenue automatically. Zero upfront cost.",
    url: "https://nexaflow-brown.vercel.app", // update this later when you get a custom domain
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
    title: "NexaFlow | Website-as-a-Service",
    description: "Zero upfront cost, $0 down. Get a custom, high-converting website managed for you.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const themeInitScript = `(() => {
  try {
    const saved = localStorage.getItem("shiftline-theme");
    const theme = saved === "light" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.classList.add("dark");
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${jakarta.className} min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)] antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <FloatingConcierge />
        </ThemeProvider>
      </body>
    </html>
  );
}
