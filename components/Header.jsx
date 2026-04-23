"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
        scrolled ? "h-[76px]" : "h-[92px]"
      }`}
    >
      <div className="container flex items-center justify-between h-full">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
  src="/logo-tomazela.png"
  alt="Tomazela"
  width={180}
  height={50}
  priority
  className={`object-contain transition-all duration-300 ${
    scrolled ? "h-[42px]" : "h-[50px]"
  } w-auto`}
/>
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium text-gray-800">
          
          <Link
            href="/#servicos"
            className="relative group transition-all duration-200 hover:text-[#FF4D00] hover:scale-[1.04]"
          >
            Serviços
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF4D00] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/manifesto"
            className="relative group transition-all duration-200 hover:text-[#FF4D00] hover:scale-[1.04]"
          >
            Manifesto
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF4D00] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/lab"
            className="relative group transition-all duration-200 hover:text-[#FF4D00] hover:scale-[1.04]"
          >
            Conteúdo
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF4D00] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/#sobre"
            className="relative group transition-all duration-200 hover:text-[#FF4D00] hover:scale-[1.04]"
          >
            Sobre
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF4D00] transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </nav>

        {/* CTA + SOCIAL */}
        <div className="flex items-center gap-4">

          <Link
            href="/#contato"
            className="bg-[#FF4D00] text-white px-6 py-2.5 rounded-2xl text-sm font-semibold hover:opacity-90 transition"
          >
            Vamos conversar
          </Link>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF4D00] hover:scale-110 transition"
          >
            <Instagram size={20} strokeWidth={2} />
          </a>

        </div>

      </div>
    </header>
  );
}
