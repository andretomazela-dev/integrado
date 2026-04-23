"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="container flex items-center justify-between h-[88px]">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-tomazela.png"
            alt="Tomazela"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800">
          
          <Link href="/#servicos" className="hover:text-[#FF4D00] transition">
            Serviços
          </Link>

          <Link href="/manifesto" className="hover:text-[#FF4D00] transition">
            Manifesto
          </Link>

          {/* ✅ CORRIGIDO AQUI */}
          <Link href="/lab" className="hover:text-[#FF4D00] transition">
            Conteúdo
          </Link>

          <Link href="/#sobre" className="hover:text-[#FF4D00] transition">
            Sobre
          </Link>

        </nav>

        {/* CTA + SOCIAL */}
        <div className="flex items-center gap-4">

          <Link
            href="/#contato"
            className="bg-[#FF4D00] text-white px-5 py-2.5 rounded-2xl text-sm font-semibold hover:opacity-90 transition"
          >
            Vamos conversar
          </Link>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF4D00] text-lg"
          >
            ⭘
          </a>

        </div>

      </div>
    </header>
  );
}
