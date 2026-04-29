"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const trabalhos = [
  {
    veiculo: "Gênero & Número",
    ano: "2025",
    titulo: "Idosos LGBTQIA+ são empurrados de volta para o armário",
    descricao:
      "Reportagem sobre envelhecimento, invisibilidade e exclusão social da população LGBTQIA+.",
    link: "https://www.generonumero.media/reportagens/idosos-lgbtqia-empurrados-armario/",
  },

  {
    veiculo: "Valor Econômico",
    ano: "2025",
    titulo: "Clima encarece prêmios e muda lógica do resseguro",
    descricao:
      "Especial sobre crise climática, perdas bilionárias e transformação do mercado de seguros.",
    link: "/repertorio/seguros-clima-resseguro.jpg",
  },

  {
    veiculo: "Valor Econômico",
    ano: "2024",
    titulo: "Brasil quer seguir exemplo do G20",
    descricao:
      "COP30, financiamento climático e o papel do Brasil nas negociações internacionais.",
    link: "/repertorio/mudancas-climaticas.pdf",
  },
];

const depoimentos = [
  {
    texto:
      "André alia visão estratégica, clareza de comunicação e profundidade editorial. Um profissional raro.",
    autor: "Nome do depoimento",
    cargo: "Empresa ou organização",
  },

  {
    texto:
      "Tem facilidade para transformar temas complexos em comunicação acessível e consistente.",
    autor: "Nome do depoimento",
    cargo: "Empresa ou organização",
  },

  {
    texto:
      "Consegue unir pensamento estratégico, repertório jornalístico e sensibilidade institucional.",
    autor: "Nome do depoimento",
    cargo: "Empresa ou organização",
  },
];

export default function Page() {
  return (
    <div>
      <Header />

      <main className="bg-white">

        {/* HERO */}

        <section className="container py-20 md:py-32">

          <p className="uppercase tracking-[0.2em] text-sm text-orange-600 font-semibold">
            REPERTÓRIO
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight max-w-5xl text-[#111827]">
            Comunicação, estratégia e repertório construídos ao longo de mais de 20 anos.
          </h1>

          <p className="mt-10 text-xl text-gray-700 leading-relaxed max-w-3xl">
            Meu repertório reúne mais de 20 anos de experiência em comunicação,
            entre empresas, agências e o trabalho como repórter. Aqui, alguns
            trabalhos publicados e relatos de pessoas com quem já trabalhei.
          </p>

          {/* Logos / áreas */}

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-gray-300 text-sm tracking-wide uppercase">

            <span>Valor Econômico</span>
            <span>Gênero & Número</span>
            <span>O Globo</span>
            <span>Comunicação institucional</span>
            <span>Projetos especiais</span>

          </div>

        </section>

        {/* PUBLICAÇÕES */}

        <section className="container pb-28">

          <div className="flex items-center gap-3 mb-12">

            <span className="text-orange-500">✦</span>

            <h2 className="text-3xl font-bold text-[#111827]">
              Publicações
            </h2>

          </div>

          <div className="space-y-8">

            {trabalhos.map((item) => (

              <article
                key={item.titulo}
                className="border border-gray-200 rounded-[2rem] p-10 hover:shadow-lg transition-all duration-300 bg-white"
              >

                <div className="text-sm uppercase tracking-wide text-gray-400">
                  {item.veiculo} • {item.ano}
                </div>

                <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-tight text-[#111827]">
                  {item.titulo}
                </h3>

                <p className="mt-5 text-lg text-gray-700 leading-relaxed max-w-3xl">
                  {item.descricao}
                </p>

                <Link
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-8 text-orange-600 font-medium hover:opacity-80 transition-opacity"
                >
                  Ler trabalho ↗
                </Link>

              </article>

            ))}

          </div>

        </section>

        {/* EXPERIÊNCIA */}

        <section className="bg-[#f7f7f5] border-y border-gray-200 mt-10">

          <div className="container py-28">

            <div className="flex items-center gap-3 mb-14">

              <span className="text-orange-500">✦</span>

              <h2 className="text-3xl font-bold text-[#111827]">
                Experiência
              </h2>

            </div>

            <div className="grid gap-8 md:grid-cols-2">

              <div className="bg-white border border-gray-200 rounded-[2rem] p-8">

                <h3 className="text-2xl font-bold text-[#111827]">
                  Comunicação institucional
                </h3>

                <p className="mt-5 text-gray-700 leading-relaxed">
                  Atuação em empresas e organizações com foco em comunicação
                  corporativa, conteúdo institucional, relacionamento com públicos
                  estratégicos e posicionamento.
                </p>

              </div>

              <div className="bg-white border border-gray-200 rounded-[2rem] p-8">

                <h3 className="text-2xl font-bold text-[#111827]">
                  Jornalismo e conteúdo
                </h3>

                <p className="mt-5 text-gray-700 leading-relaxed">
                  Produção de reportagens, especiais e conteúdos sobre temas
                  complexos ligados a economia, clima, diversidade,
                  infraestrutura e transformação social.
                </p>

              </div>

              <div className="bg-white border border-gray-200 rounded-[2rem] p-8">

                <h3 className="text-2xl font-bold text-[#111827]">
                  Estratégia e posicionamento
                </h3>

                <p className="mt-5 text-gray-700 leading-relaxed">
                  Estruturação de narrativas, clareza de comunicação e direção
                  estratégica para negócios, profissionais e organizações.
                </p>

              </div>

              <div className="bg-white border border-gray-200 rounded-[2rem] p-8">

                <h3 className="text-2xl font-bold text-[#111827]">
                  Comunicação digital
                </h3>

                <p className="mt-5 text-gray-700 leading-relaxed">
                  Experiência com conteúdo multiplataforma, redes sociais,
                  newsletters, sites institucionais e projetos digitais.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* DEPOIMENTOS */}

        <section className="container py-28">

          <div className="flex items-center gap-3 mb-14">

            <span className="text-orange-500">✦</span>

            <h2 className="text-3xl font-bold text-[#111827]">
              Depoimentos
            </h2>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {depoimentos.map((item) => (

              <article
                key={item.texto}
                className="bg-white border border-gray-200 rounded-[2rem] p-10"
              >

                <p className="text-lg text-gray-700 leading-relaxed">
                  “{item.texto}”
                </p>

                <div className="mt-8">

                  <p className="font-semibold text-[#111827]">
                    {item.autor}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.cargo}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="container pb-28">

          <div className="rounded-[2.5rem] border border-gray-200 bg-[#f7f7f5] p-10 md:p-16">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#111827] max-w-4xl">
              Precisa organizar a comunicação do seu negócio, projeto ou marca pessoal?
            </h2>

            <p className="mt-6 text-xl text-gray-700 max-w-2xl leading-relaxed">
              Posso ajudar com posicionamento, clareza de comunicação,
              conteúdo estratégico e estruturação narrativa.
            </p>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center mt-10 bg-[#FF4D00] hover:opacity-90 text-white font-semibold px-7 py-4 rounded-2xl transition-all"
            >
              Vamos conversar
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
