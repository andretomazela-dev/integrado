// app/layout.jsx
import "./globals.css";
import Analytics from "./analytics";

export const metadata = {
  title: "Tomazela | Estratégia & Comunicação",

  description:
    "Comunicação sob medida para marcas e organizações de impacto.",

  icons: {
    icon: [
      {
        url: "/favicon/tomazela-favicon.ico",
      },
      {
        url: "/favicon/tomazela-favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/tomazela-favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/favicon/tomazela-favicon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  themeColor: "#FF4D00",
};
