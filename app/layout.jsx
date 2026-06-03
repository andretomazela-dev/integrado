// app/layout.jsx

import "./globals.css";
import Analytics from "./analytics";

export const metadata = {
  title: "Tomazela | Estratégia & Comunicação",

  description:
    "Comunicação sob medida para marcas e organizações de impacto.",

  manifest: "/site.webmanifest",

  themeColor: "#FF4D00",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
