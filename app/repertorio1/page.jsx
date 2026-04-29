"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const trabalhos = [
  {
    id: "genero",
    categoria: "Gênero & Número",
    ano: "2025",
    titulo: "Idosos LGBTQIA+ são empurrados de volta para o armário",
    descricao:
      "Reportagem sobre envelhecimento, invisibilidade e exclusão social da população LGBTQIA+.",
    link: "https://www.generonumero.media/reportagens/idosos-lgbtqia-empurrados-armario/",
  },
  {
    id: "valor",
    categoria: "Valor Econômico",
    ano: "2025",
    titulo: "Clima encarece prêmios e muda lógica do resseguro",
    descricao:
      "Especial sobre crise climática, perdas bilionárias e transformação do mercado de seguros.",
    link: "/repertorio/seguros-clima-resseguro.jpg",
  },
  {
    id: "valor",
    categoria: "Valor Econômico",
    ano: "2025",
    titulo: "Adaptação urgente",
    descricao:
      "Infraestrutura resiliente, eventos extremos e adaptação diante do avanço da crise climática.",
    link: "/repertorio/mudancas-climaticas.pdf",
  },
];

{
  id: "oglobo",
  categoria: "O Globo",
  ano: "2024",
  titulo: "Brasil quer seguir exemplo do G20",
  descricao:
    "COP30, financiamento climático e o papel do Brasil nas negociações internacionais.",
  link: "/repertorio/turismo-clima-oglobo.jpg",
},

{
  id: "valor",
  categoria: "Valor Econômico",
  ano: "2023",
  titulo: "Caem os alertas de desmatamento",
  descricao:
    "Queda do desmatamento na Amazônia, fiscalização ambiental e ações dos governos federal e estaduais.",
  link: "/repertorio/sustentabilidade-valor-2023.pdf",
},

const experiencias = [
  {
    titulo: "Comunicação institucional",
    texto:
      "Atuação em empresas e organizações com foco em posicionamento, conteúdo institucional e relacionamento com públicos estratégicos.",
  },
  {
    titulo: "Jornalismo e conteúdo",
    texto:
      "Produção de reportagens, especiais e conteúdos sobre economia, clima, diversidade e transformação social.",
  },
  {
    titulo: "Estratégia e posicionamento",
    texto:
      "Estruturação de narrativas, clareza de comunicação e direção estratégica para marcas e profissionais.",
  },
  {
    titulo: "Comunicação digital",
    texto:
      "Experiência com redes sociais, newsletters, sites institucionais e conteúdo multiplataforma.",
  },
];

const depoimentos = [
  {
    texto:
      "André alia visão estratégica, clareza de comunicação e profundidade editorial.",
  },
  {
    texto:
      "Tem facilidade para transformar temas complexos em comunicação acessível.",
  },
  {
    texto:
      "Une pensamento estratégico, repertório jornalístico e visão institucional.",
  },
];

export default function RepertorioPage() {
  return (
    <div className="bg-[#F7F7F5] text-[#0F172A]">
      <Header />

      {/* HERO */}
      <section className="container pt-14 pb-12 md:pt-20 md:pb-14">
        <span className="text-[11px] uppercase tracking-[0.22em] text-[#FF4D00] font-semibold">
          Repertório
        </span>

        <h1 className="mt-5 max-w-4xl text-4xl md:text-6xl font-extrabold leading-[1.02] tracking-[-0.03em]">
          Reportagens, projetos e experiências em comunicação
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-700 leading-relaxed">
          Meu repertório reúne mais de 20 anos de experiência em comunicação,
          entre empresas, agências e o trabalho como repórter. Aqui, alguns
          trabalhos publicados e relatos de pessoas com quem já trabalhei.
        </p>

        {/* FILTROS */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            { label: "Valor Econômico", id: "valor" },
            { label: "Gênero & Número", id: "genero" },
            { label: "O Globo", id: "oglobo" },
            { label: "Comunicação institucional", id: "institucional" },
            { label: "Projetos especiais", id: "projetos" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                inline-flex items-center
                rounded-full
                border border-gray-300
                bg-white
                px-4 py-2
                text-[11px]
                uppercase
                tracking-wide
                text-gray-600
                hover:border-[#FF4D00]
                hover:text-[#FF4D00]
                transition
              "
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* PUBLICAÇÕES */}
      <section className="py-14 md:py-16 border-t border-gray-200 bg-[#FAFAF8]">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[#FF4D00]">✦</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Publicações
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trabalhos.map((item, index) => (
              <article
                key={index}
                id={item.id}
                className="scroll-mt-32 bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-md transition"
              >
                <span className="text-[10px] uppercase tracking-wide text-gray-500 font-medium">
                  {item.categoria} • {item.ano}
                </span>

                <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.02em]">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
                  {item.descricao}
                </p>

                <Link
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center mt-6 text-sm font-semibold text-[#FF4D00] hover:opacity-80 transition"
                >
                  Ler trabalho ↗
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section
        id="institucional"
        className="py-14 md:py-16 bg-[#F2F3F5] border-t border-gray-200 scroll-mt-32"
      >
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[#FF4D00]">✦</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Experiência
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {experiencias.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-bold leading-snug">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-14 md:py-16 bg-[#FAFAF8] border-t border-gray-200">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[#FF4D00]">✦</span>

            <h2 className="text-2xl md:text-3xl font-bold">
              Depoimentos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200 p-8"
              >
                <p className="text-gray-700 leading-relaxed">
                  “{item.texto}”
                </p>

                <div className="mt-6">
                  <strong className="block text-sm">
                    Nome do depoimento
                  </strong>

                  <span className="text-sm text-gray-500">
                    Empresa ou organização
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16">
        <div className="container">
          <div className="bg-[#F2F3F5] border border-gray-200 rounded-[32px] p-8 md:p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#0F172A]">
                Precisa organizar a comunicação do seu negócio, projeto ou marca
                pessoal?
              </h2>

              <p className="mt-5 text-base md:text-lg text-gray-700 leading-relaxed">
                Posso ajudar com posicionamento, clareza de comunicação,
                conteúdo estratégico e estruturação narrativa.
              </p>

              <Link
                href="/#contato"
                className="inline-flex items-center rounded-2xl px-6 py-3 mt-7 text-sm font-medium bg-[#FF4D00] text-white hover:opacity-90 transition"
              >
                Vamos conversar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
