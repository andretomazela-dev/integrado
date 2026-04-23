"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container flex items-center justify-between">
        
        {/* LOGO — NÃO ALTERADO */}
        <Link href="/" className="flex items-center">
          <div
            className={`relative transition-all duration-300 ${
              scrolled
                ? "h-[65px] sm:h-[75px]"
                : "h-[80px] sm:h-[95px]"
            } w-[240px] sm:w-[300px]`}
          >
            <Image
              src="/logo-tomazela.png"
              alt="Tomazela"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* MENU — CORRIGIDO */}
        <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium text-gray-800">
          <Link href="#servicos" className="hover:underline underline-offset-4">
            Serviços
          </Link>
          <Link href="/manifesto" className="hover:underline underline-offset-4">
            Manifesto
          </Link>
          <Link href="#conteudo" className="hover:underline underline-offset-4">
            Conteúdo
          </Link>
          <Link href="#sobre" className="hover:underline underline-offset-4">
            Sobre
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#contato"
            className="bg-[#FF4D00] text-white px-6 py-2.5 rounded-full text-[15px] font-semibold hover:opacity-90 transition"
          >
            Vamos conversar
          </Link>

          {/* Ícone */}
          <Link href="#" className="hidden sm:block text-[#FF4D00]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
