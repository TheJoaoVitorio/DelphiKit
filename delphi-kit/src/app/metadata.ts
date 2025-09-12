import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DelphiKit",
  description: "Link aggregator featuring Delphi repositories, visual components, and frameworks. Discover and share projects to streamline development and enhance your applications",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.ico", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
};