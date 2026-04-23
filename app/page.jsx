"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { labPosts } from "@/content/lab-posts";

export default function Home() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");

  const scrollToId = (hash) => {
    const id = hash.startsWith("#") ? hash : `#${hash}`;
    const el = document.querySelector(id);
    if (!el) return;
    const header = document.querySelector("header");
    const offset = header?.offsetHeight ? header.offsetHeight + 12 : 80;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      setTimeout(() => scrollToId(window.location.hash), 0);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErr("");
    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      if ((fd.get("website") || "").toString().trim()) {
        setSent(true);
        form.reset();
        return;
      }

      const res = await fetch("https://formspree.io/f/meorrlvp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        setErr(j.error || "Não foi possível enviar.");
      }
    } catch {
      setErr("Falha de rede.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 " +
    "px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500";

  const latestLabPost = Array.isArray(labPosts)
    ? [...labPosts].sort((a, b) => new Date(b.date) - new Date(a.date))[0]
    : null;

  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="container py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Comunicação estratégica para quem gera impacto real.
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Desenvolvo estratégias e narrativas para marcas e lideranças 
            que buscam relevância, não apenas visibilidade.
          </p>

          <p className="mt-3 text-sm text-gray-600">
            André Tomazela · jornalista e consultor
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#servicos");
              }}
              className="btn btn-primary"
            >
              Como eu trabalho
            </a>

            <Link href="/manifesto" className="btn btn-outline">
              O manifesto
            </Link>
          </div>
        </div>

        <div className="rounded-2xl shadow-card overflow-hidden bg-white flex items-center justify-center p-6">
          <img
            src="/Ilustracao_estrategia_comunicacao.png"
            className="w-full h-auto object-contain max-h-[420px]"
          />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-gray-50 py-14 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold">
            O que posso fazer por você
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="card">
              <h3 className="font-semibold">Posicionamento</h3>
              <p className="text-sm text-gray-600 mt-2">
                Construção de narrativa clara e consistente.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold">Imprensa</h3>
              <p className="text-sm text-gray-600 mt-2">
                Relações estratégicas com mídia.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold">Conteúdo</h3>
              <p className="text-sm text-gray-600 mt-2">
                Produção com rigor e posicionamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE — NOVO DESIGN */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">

          {/* FOTO COM FUNDO */}
          <div className="relative flex justify-center md:justify-start">

            {/* FUNDO DECORATIVO */}
            <div className="absolute w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

            {/* FOTO */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/andretomazelafoto.png"
                alt="André Tomazela"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Sobre André Tomazela
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Há mais de 20 anos atuo na comunicação corporativa, com passagem por setores complexos 
              como Saúde, Indústria Farmacêutica e Terceiro Setor.
              Como jornalista e consultor, desenvolvo estratégias que transformam informação em posicionamento.
              Meu trabalho não é gerar ruído — é construir clareza, consistência e relevância.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://www.linkedin.com/in/tomazela"
                target="_blank"
                className="btn btn-primary"
              >
                Ver LinkedIn
              </Link>

              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("#contato");
                }}
                className="btn btn-outline"
              >
                Fale comigo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-14 bg-orange-50">
        <div className="container">
          <h2 className="text-2xl font-bold">Vamos conversar?</h2>

          {!sent ? (
            <form onSubmit={handleSubmit} className="grid gap-3 mt-6">
              <input name="nome" placeholder="Nome" className={inputCls} />
              <input name="email" placeholder="Email" className={inputCls} />
              <textarea name="mensagem" placeholder="Mensagem" className={inputCls} />

              <button className="btn btn-primary">
                {sending ? "Enviando..." : "Enviar"}
              </button>
            </form>
          ) : (
            <div>Mensagem enviada!</div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
