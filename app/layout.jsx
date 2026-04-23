import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">

        <Header />

        {/* ✅ SÓ ISSO resolve o problema */}
        <main className="pt-[110px] md:pt-[130px]">
          {children}
        </main>

      </body>
    </html>
  );
}
