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
    veiculo: "Infraestrutura & Logística",
    ano: "2025",
    titulo: "Adaptação urgente",
    descricao:
      "Infraestrutura resiliente, eventos extremos e os desafios de adaptação diante do avanço da crise climática.",
    link: "/repertorio/adaptacao-urgente.pdf",
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

export default function RepertorioPage() {
  return (
    <div className="bg-white text-[#111827]">

      <Header />

      <main>

        {/* HERO */}

        <section className="container py-24 md:py-36">

          <p className="uppercase tracking-[0.25em] text-xs text-[#FF4D00] font-bold">
            REPERTÓRIO
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[0.92] tracking-tight max-w-6xl text-[#0f172a]">
            Comunicação, estratégia e repertório construídos ao longo de mais de 20 anos.
          </h1>

          <p className="mt-10 text-xl md:text-2xl text-[#334155] leading-relaxed max-w-4xl">
            Meu repertório reúne mais de 20 anos de experiência em comunicação,
            entre empresas, agências e o trabalho como repórter. Aqui, alguns
            trabalhos publicados e relatos de pessoas com quem já trabalhei.
          </p>

          {/* Áreas / veículos */}

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 text-sm uppercase tracking-[0.15em] text-[#64748b] font-medium">

            <span>Valor Econômico</span>
            <span>Gênero & Número</span>
            <span>O Globo</span>
            <span>Comunicação institucional</span>
            <span>Projetos especiais</span>

          </div>

        </section>

        {/* PUBLICAÇÕES */}

        <section className="container pb-32">

          <div className="flex items-center gap-4 mb-14">

            <span className="text-[#FF4D00] text-xl">✦</span>

            <h2 className="text-4xl font-extrabold text-[#0f172a] leading-none">
              Publicações
            </h2>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {trabalhos.map((item) => (

              <article
                key={item.titulo}
                className="border border-[#dbe1e8] rounded-[2rem] p-8 bg-white hover:shadow-xl transition-all duration-300"
              >

                <div className="text-xs uppercase tracking-[0.15em] text-[#64748b] font-semibold">
                  {item.veiculo} • {item.ano}
                </div>

                <h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#0f172a]">
                  {item.titulo}
                </h3>

                <p className="mt-5 text-[17px] text-[#334155] leading-relaxed">
                  {item.descricao}
                </p>

                <Link
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-8 text-[#FF4D00] font-semibold hover:opacity-80 transition-opacity"
                >
                  Ler trabalho ↗
                </Link>

              </article>

            ))}

          </div>

        </section>

        {/* EXPERIÊNCIA */}

        <section className="bg-[#f8fafc] border-y border-[#dbe1e8] mt-24">

          <div className="container py-28">

            {/* título */}

            <div className="flex items-center gap-4 mb-20">

              <span className="text-[#FF4D00] text-xl">✦</span>

              <h2 className="text-4xl font-extrabold text-[#0f172a] leading-none">
                Experiência
              </h2>

            </div>

            {/* cards */}

            <div className="grid gap-6 lg:grid-cols-4">

              <div className="bg-white border border-[#dbe1e8] rounded-[1.75rem] p-7">

                <h3 className="text-2xl font-bold text-[#0f172a] leading-tight">
                  Comunicação institucional
                </h3>

                <p className="mt-5 text-[16px] text-[#334155] leading-relaxed">
                  Atuação em empresas e organizações com foco em comunicação corporativa,
                  conteúdo institucional, relacionamento com públicos estratégicos e posicionamento.
                </p>

              </div>

              <div className="bg-white border border-[#dbe1e8] rounded-[1.75rem] p-7">

                <h3 className="text-2xl font-bold text-[#0f172a] leading-tight">
                  Jornalismo e conteúdo
                </h3>

                <p className="mt-5 text-[16px] text-[#334155] leading-relaxed">
                  Produção de reportagens, especiais e conteúdos sobre temas complexos ligados
                  a economia, clima, diversidade, infraestrutura e transformação social.
                </p>

              </div>

              <div className="bg-white border border-[#dbe1e8] rounded-[1.75rem] p-7">

                <h3 className="text-2xl font-bold text-[#0f172a] leading-tight">
                  Estratégia e posicionamento
                </h3>

                <p className="mt-5 text-[16px] text-[#334155] leading-relaxed">
                  Estruturação de narrativas, clareza de comunicação e direção estratégica
                  para negócios, profissionais e organizações.
                </p>

              </div>

              <div className="bg-white border border-[#dbe1e8] rounded-[1.75rem] p-7">

                <h3 className="text-2xl font-bold text-[#0f172a] leading-tight">
                  Comunicação digital
                </h3>

                <p className="mt-5 text-[16px] text-[#334155] leading-relaxed">
                  Experiência com conteúdo multiplataforma, redes sociais, newsletters,
                  sites institucionais e projetos digitais.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* DEPOIMENTOS */}

        <section className="container py-32">

          {/* título */}

          <div className="flex items-center gap-4 mb-16">

            <span className="text-[#FF4D00] text-xl">✦</span>

            <h2 className="text-4xl font-extrabold text-[#0f172a] leading-none">
              Depoimentos
            </h2>

          </div>

          {/* cards */}

          <div className="grid gap-8 lg:grid-cols-3">

            {depoimentos.map((item) => (

              <article
                key={item.texto}
                className="bg-white border border-[#dbe1e8] rounded-[2rem] p-10"
              >

                <p className="text-lg text-[#334155] leading-loose">
                  “{item.texto}”
                </p>

                <div className="mt-10">

                  <p className="font-bold text-[#0f172a] text-lg">
                    {item.autor}
                  </p>

                  <p className="text-sm text-[#64748b] mt-2">
                    {item.cargo}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="container pb-32">

          <div className="rounded-[2.5rem] border border-[#dbe1e8] bg-[#f8fafc] p-12 md:p-20">

            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-[#0f172a] max-w-5xl">
              Precisa organizar a comunicação do seu negócio, projeto ou marca pessoal?
            </h2>

            <p className="mt-8 text-xl text-[#334155] max-w-3xl leading-relaxed">
              Posso ajudar com posicionamento, clareza de comunicação,
              conteúdo estratégico e estruturação narrativa.
            </p>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center mt-12 bg-[#FF4D00] hover:opacity-90 text-white font-bold px-8 py-5 rounded-2xl transition-all"
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
