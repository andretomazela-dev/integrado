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

        <section className="container py-16 md:py-24">

          <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">
            REPERTÓRIO
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight max-w-5xl text-[#111827]">
            Comunicação, estratégia e repertório construídos ao longo de mais de 20 anos.
          </h1>

          <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-3xl">
            Meu repertório reúne mais de 20 anos de experiência em comunicação,
            entre empresas, agências e o trabalho como repórter. Aqui, alguns
            trabalhos publicados e relatos de pessoas com quem já trabalhei.
          </p>

          {/* logos */}

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-gray-400 text-sm tracking-wide uppercase">

            <span>Valor Econômico</span>
            <span>Gênero & Número</span>
            <span>O Globo</span>
            <span>Comunicação institucional</span>
            <span>Projetos especiais</span>

          </div>

        </section>

        {/* TRABALHOS */}

        <section className="container pb-20">

          <div className="flex items-center gap-3 mb-10">

            <span className="text-orange-500">✦</span>

            <h2 className="text-3xl font-bold text-[#111827]">
              Trabalhos publicados
            </h2>

          </div>

          <div className="space-y-6">

            {trabalhos.map((item) => (

              <article
                key={item.titulo}
                className="border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow bg-white"
              >

                <div className="text-sm uppercase tracking-wide text-gray-500">
                  {item.veiculo} • {item.ano}
                </div>

                <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-tight text-[#111827]">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
                  {item.descricao}
                </p>

                <Link
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-6 text-orange-600 font-medium"
                >
                  Ler trabalho ↗
                </Link>

              </article>

            ))}

          </div>

        </section>

        {/* EXPERIÊNCIA */}

        <section className="bg-[#f7f7f5] border-y border-gray-200">

          <div className="container py-20">

            <div className="flex items-center gap-3 mb-12">

              <span className="text-orange-500">✦</span>

              <h2 className="text-3xl font-bold text-[#111827]">
                Experiência
              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div className="card rounded-3xl">
                <h3 className="text-2xl font-bold text-[#111827]">
                  Comunicação institucional
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Atuação em empresas e organizações com foco em comunicação
                  corporativa, conteúdo institucional, relacionamento com públicos
                  estratégicos e posicionamento.
                </p>
              </div>

              <div className="card rounded-3xl">
                <h3 className="text-2xl font-bold text-[#111827]">
                  Jornalismo e conteúdo
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Produção de reportagens, especiais e conteúdos sobre temas
                  complexos ligados a economia, clima, diversidade,
                  infraestrutura e transformação social.
                </p>
              </div>

              <div className="card rounded-3xl">
                <h3 className="text-2xl font-bold text-[#111827]">
                  Estratégia e posicionamento
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Estruturação de narrativas, clareza de comunicação e direção
                  estratégica para negócios, profissionais e organizações.
                </p>
              </div>

              <div className="card rounded-3xl">
                <h3 className="text-2xl font-bold text-[#111827]">
                  Comunicação digital
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Experiência com conteúdo multiplataforma, redes sociais,
                  newsletters, sites institucionais e projetos digitais.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* DEPOIMENTOS */}

        <section className="container py-20">

          <div className="flex items-center gap-3 mb-12">

            <span className="text-orange-500">✦</span>

            <h2 className="text-3xl font-bold text-[#111827]">
              Depoimentos
            </h2>

          </div>

          <div className="grid gap-6 lg:grid-cols-3">

            {depoimentos.map((item) => (

              <article
                key={item.texto}
                className="card rounded-3xl"
              >

                <p className="text-gray-700 leading-relaxed">
                  “{item.texto}”
                </p>

                <div className="mt-6">

                  <p className="font-semibold text-[#111827]">
                    {item.autor}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.cargo}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="container pb-24">

          <div className="rounded-[2rem] border border-gray-200 bg-[#f7f7f5] p-10 md:p-14">

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111827] max-w-3xl">
              Precisa organizar a comunicação do seu negócio, projeto ou marca pessoal?
            </h2>

            <p className="mt-5 text-lg text-gray-700 max-w-2xl leading-relaxed">
              Posso ajudar com posicionamento, clareza de comunicação,
              conteúdo estratégico e estruturação narrativa.
            </p>

            <Link
              href="/contato"
              className="btn btn-primary rounded-2xl mt-8"
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
