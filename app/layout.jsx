import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tomazela | Estratégia & Comunicação",
  description: "Comunicação sob medida para marcas e organizações de impacto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">

        <Header />

        {/* ✅ CORREÇÃO GLOBAL (resolve manifesto, lab e tudo mais) */}
        <main className="pt-[110px] md:pt-[130px]">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
