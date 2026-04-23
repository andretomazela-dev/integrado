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
      // Honeypot
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

  
// Post mais recente do LAB (ordem por data desc)
const latestLabPost = Array.isArray(labPosts)
  ? [...labPosts].sort((a, b) => new Date(b.date) - new Date(a.date))[0]
  : null;
return (
    <div>
      <Header />

      {/* HERO */}
      <section
        id="home"
        className="container py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center scroll-mt-28"
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Comunicação estratégica para quem gera impacto real.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Desenvolvo estratégias e narrativas para marcas e lideranças 
            que buscam relevância, não apenas visibilidade. Com método e verdade.
          </p>
          <p className="mt-3 text-sm text-gray-600">
         André Tomazela · jornalista e consultor em comunicação estratégica
         </p>
        <div className="mt-6 flex flex-wrap gap-3">
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

            <Link href="/manifesto" className="btn btn-outline" aria-label="Leia nosso manifesto">
              O manifesto
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            São Paulo • Brasil •{" "}
            <a className="underline" href="mailto:andre@andretomazela.com.br">
              andre@andretomazela.com.br
            </a>
          </p>
        </div>

       <div className="rounded-2xl shadow-card overflow-hidden bg-white flex items-center justify-center p-6">
  <img
    src="/Ilustracao_estrategia_comunicacao.png"
    alt="Estratégia de comunicação"
    className="w-full h-auto object-contain max-h-[420px]"
    loading="lazy"
  />
</div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-gray-50 py-14 md:py-16 scroll-mt-28">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold">
            O que posso fazer por você
          </h2>
          <p className="mt-2 text-gray-600 max-w-prose">
            Serviços desenhados para marcas que buscam relevância 
            em um cenário de excesso de ruído. O objetivo é transformar 
            propósito em autoridade e presença institucional consistente.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* 1 */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Posicionamento e narrativa de marca</h3>
              <p className="text-sm text-gray-600 mt-2">
                Definição de uma voz única e coerente. Ajudo a marca a encontrar 
                seu lugar no mercado sem recorrer a fórmulas prontas ou clichês de setor.
              </p>
            </div>

            {/* 2 */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11v2a4 4 0 0 0 4 4h1"></path>
                  <path d="M21 8v8"></path>
                  <path d="M7 15v-6"></path>
                  <path d="M21 8l-13 4"></path>
                  <path d="M21 16l-13-4"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Relações com a imprensa</h3>
              <p className="text-sm text-gray-600 mt-2">
                Curadoria de pautas e gestão de relacionamentos. 
                O foco não é apenas o volume de menções, mas a construção 
                de uma reputação sólida junto a formadores de opinião.
              </p>
            </div>

            {/* 3 */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z"></path>
                  <path d="M12 8l1.2 2.4 2.6.4-1.9 1.9.5 2.7L12 14.5 9.6 15.4l.5-2.7-1.9-1.9 2.6-.4L12 8Z"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Conselho e reputação</h3>
              <p className="text-sm text-gray-600 mt-2">
                Acompanhamento estratégico para lideranças. 
                Um olhar externo e experiente para antecipar crises e 
                proteger o valor institucional da organização.
              </p>
            </div>

            {/* 4 */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1-4-4h10a4 4 0 0 1 4 4z"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Presença digital</h3>
              <p className="text-sm text-gray-600 mt-2">
                Estratégias de presença digital que privilegiam a qualidade da interação e 
                a autoridade do discurso em vez do volume vazio de postagens.
              </p>
            </div>

            {/* 5 */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Comunicação interna e cultura</h3>
              <p className="text-sm text-gray-600 mt-2">
                Alinhamento entre o discurso externo e a prática interna. 
                Narrativas que engajam equipes e consolidam 
                a identidade da empresa de dentro para fora.
              </p>
            </div>

            {/* 6 */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3Z"></path>
                  <path d="M19 14l.8 1.8L22 16l-1.8.8L19 19l-.8-2.2L16 16l2.2-.2L19 14Z"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Criação de conteúdo</h3>
              <p className="text-sm text-gray-600 mt-2">
                Produção de material com rigor e ponto de vista, de artigos de opinião 
                a relatórios anuais, desenhados para reforçar a credibilidade da marca.
              </p>
            </div>
                                
            {/* 7 — CTA invertido */}
            <div
              className="rounded-2xl p-6 bg-[#FF4D00] text-white shadow-lg hover:opacity-90 transition cursor-pointer ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4D00]"
              role="button"
              tabIndex={0}
              onClick={() => scrollToId("#contato")}
              onKeyDown={(e) => e.key === "Enter" && scrollToId("#contato")}
              aria-label="Montamos um pacote sob medida — fale com a gente"
            >
              <div className="mb-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </div>
              <h3 className="font-semibold">O que mais você precisa?</h3>
              <p className="text-sm mt-2 opacity-95">
                Desenvolvemos soluções sob medida e projetos especiais de acordo com o seu desafio atual.
              </p>
              <span className="mt-3 inline-block text-xs font-semibold bg-white/15 rounded-full px-3 py-1">
                Clique para falar com a gente
              </span>
            </div>
          </div>

          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("#contato");
            }}
            className="inline-block mt-8 btn btn-primary"
          >
            Falar sobre meu projeto
          </a>
        </div>
      </section>


{/* Destaque do LAB (post mais recente) */}
{latestLabPost ? (
  <section className="bg-[#FFF4EF] pt-20 pb-28">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
          LAB
        </h2>
        <p className="text-gray-600 mb-6 text-lg md:text-base">
        Ideias e visão crítica sobre comunicação e sociedade.
        </p>
        <h3 className="text-xl font-semibold mb-2">
          {latestLabPost.title}
        </h3>
        {latestLabPost.excerpt ? (
          <p className="text-gray-700 mb-6">{latestLabPost.excerpt}</p>
        ) : null}
        <a
          href={`/lab/${latestLabPost.slug}`}
          className="inline-block bg-[#FF4D00] text-white px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition"
          aria-label="Ler mais no LAB"
        >
          Acessar o LAB →
        </a>
      </div>

      <div className="order-1 md:order-2">
        <img
          src={latestLabPost.cover}
          alt={latestLabPost.title}
          className="rounded-2xl shadow-lg object-cover w-full h-72 transition-transform duration-300 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    </div>
  </section>
) : null}


      {/* SOBRE */}
      <section id="sobre" className="py-14 md:py-16 bg-white scroll-mt-28">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          {/* FOTO – mobile 1:1 com foco no topo; desktop com alturas e foco no topo */}
         <div className="flex justify-center md:justify-start">
  <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-card border-4 border-white">
    <Image
      src="/andretomazelafoto.png"
      alt="André Tomazela"
      fill
      priority
      className="object-cover object-top"
      sizes="(max-width: 768px) 192px, 256px"
    />
  </div>
</div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Sobre André Tomazela</h2>

 <div className="text-gray-700 space-y-5">
  <p>
    Construí minha trajetória ao longo de 20 anos na comunicação corporativa, 
    atuando na linha de frente de setores complexos como Saúde, Indústria Farmacêutica e Terceiro Setor. 
    Como jornalista e consultor, utilizo o rigor da apuração para desenvolver estratégias 
    que transformam informações densas em narrativas claras e com autoridade.     
    Acredito que estratégia sem verdade é apenas ruído. Por isso, minha entrega foca 
    em ajudar marcas e lideranças a consolidarem um posicionamento 
    que não apenas informa, mas que forma opinião e sustenta legados.
  </p>
</div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="https://www.linkedin.com/in/tomazela"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium bg-orange-600 text-white hover:bg-orange-700 transition"
              >
                Ver LinkedIn
              </Link>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("#contato");
                }}
                className="inline-block btn btn-outline"
              >
                Fale comigo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="py-14 md:py-16 bg-gradient-to-t from-orange-50 to-white border-t scroll-mt-28"
      >
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold">Vamos conversar?</h2>
          <p className="mt-2 mb-6 text-gray-700 max-w-prose">
             Sua marca tem uma história que precisa de clareza?
            Vamos entender o seu momento e definir o que vem a seguir.
          </p>

          {!sent ? (
            <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-3">
              <input
                name="nome"
                placeholder="Nome"
                required
                className={`md:col-span-1 ${inputCls}`}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className={`md:col-span-1 ${inputCls}`}
              />
              <input
                name="telefone"
                placeholder="Telefone (opcional)"
                className={`md:col-span-1 ${inputCls}`}
              />
              <textarea
                name="mensagem"
                placeholder="Como posso ajudar?"
                rows={5}
                className={`md:col-span-3 ${inputCls}`}
              />

              {/* Honeypot invisível */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="md:col-span-3 flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary rounded-2xl px-6"
                  disabled={sending}
                >
                  {sending ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          ) : (
            <div className="p-4 rounded-xl border border-green-200 bg-green-50 text-green-700">
              Mensagem enviada! Eu te respondo em breve 😉
            </div>
          )}

          {err && (
            <div className="mt-3 p-3 rounded-md border border-red-200 bg-red-50 text-red-700">
              {err}
            </div>
          )}

          <div className="mt-6 text-sm text-gray-600 flex flex-wrap gap-2 items-center">
  <span>Prefere falar direto?</span>
  <a className="underline" href="https://wa.me/message/TUNCL3KFQIECM1">
    WhatsApp
  </a>
  <span>•</span>
  <a className="underline" href="https://www.linkedin.com/in/tomazela/">
    LinkedIn
  </a>
  <span>•</span>
  <a className="underline" href="mailto:andre@andretomazela.com.br">
    E-mail
  </a>
</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
