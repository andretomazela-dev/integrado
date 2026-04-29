import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const trabalhos = [
  {
    categoria: "Gênero & Número",
    ano: "2025",
    titulo: "Idosos LGBTQIA+ são empurrados de volta para o armário",
    descricao:
      "Reportagem sobre envelhecimento, invisibilidade e exclusão social da população LGBTQIA+.",
    link: "https://www.generonumero.media/reportagens/idosos-lgbtqia-empurrados-armario/",
  },
  {
    categoria: "Valor Econômico",
    ano: "2025",
    titulo: "Clima encarece prêmios e muda lógica do resseguro",
    descricao:
      "Especial sobre crise climática, perdas bilionárias e transformação do mercado de seguros.",
    link: "/repertorio/seguros-clima-resseguro.jpg",
  },
  {
    categoria: "Infraestrutura & Logística",
    ano: "2025",
    titulo: "Adaptação urgente",
    descricao:
      "Infraestrutura resiliente, eventos extremos e os desafios de adaptação diante do avanço da crise climática.",
    link: "/repertorio/mudancas-climaticas.pdf",
  },
];

export default function RepertorioPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f4f6f8] text-[#0f172a]">
        {/* HERO */}
        <section className="container pt-28 pb-24">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#ff4d00] font-semibold">
            Repertório
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl md:text-7xl leading-[0.95] font-black tracking-[-0.04em] text-[#0b132b]">
            Comunicação, estratégia e repertório construídos ao longo de mais
            de 20 anos.
          </h1>

          <p className="mt-10 max-w-3xl text-[22px] leading-[1.7] text-[#334155]">
            Meu repertório reúne mais de 20 anos de experiência em comunicação,
            entre empresas, agências e o trabalho como repórter. Aqui, alguns
            trabalhos publicados e relatos de pessoas com quem já trabalhei.
          </p>

          <div className="mt-20 flex flex-wrap gap-x-10 gap-y-6 text-[12px] uppercase tracking-[0.18em] text-[#64748b] font-semibold">
            <span>Valor Econômico</span>
            <span>Gênero & Número</span>
            <span>O Globo</span>
            <span>Comunicação institucional</span>
            <span>Projetos especiais</span>
          </div>
        </section>

        {/* PUBLICAÇÕES */}
        <section className="container pt-8 pb-40">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#ff4d00] text-xl">✦</span>

            <h2 className="text-4xl font-black tracking-[-0.03em] text-[#0b132b]">
              Publicações
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {trabalhos.map((item, index) => (
              <article
                key={index}
                className="border border-[#d6dce5] rounded-[2rem] p-9 bg-white hover:shadow-xl transition-all duration-300 min-h-[320px] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#64748b] font-semibold">
                    {item.categoria} • {item.ano}
                  </span>

                  <h3 className="mt-6 text-[34px] leading-[1.05] tracking-[-0.04em] font-black text-[#0b132b]">
                    {item.titulo}
                  </h3>

                  <p className="mt-6 text-[18px] leading-[1.8] text-[#334155]">
                    {item.descricao}
                  </p>
                </div>

                <Link
                  href={item.link}
                  target="_blank"
                  className="mt-10 inline-flex items-center gap-2 text-[#ff4d00] font-bold hover:opacity-80 transition-opacity"
                >
                  Ler trabalho
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="bg-[#f8fafc] border-y border-[#dbe1e8] mt-32">
          <div className="container py-32">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-[#ff4d00] text-xl">✦</span>

              <h2 className="text-4xl font-black tracking-[-0.03em] text-[#0b132b]">
                Experiência
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              <div className="bg-white border border-[#d6dce5] rounded-[1.75rem] p-8">
                <h3 className="text-[30px] leading-[1.1] tracking-[-0.03em] font-black text-[#0b132b]">
                  Comunicação institucional
                </h3>

                <p className="mt-6 text-[17px] leading-[1.9] text-[#334155]">
                  Atuação em empresas e organizações com foco em comunicação
                  corporativa, conteúdo institucional, relacionamento com
                  públicos estratégicos e posicionamento.
                </p>
              </div>

              <div className="bg-white border border-[#d6dce5] rounded-[1.75rem] p-8">
                <h3 className="text-[30px] leading-[1.1] tracking-[-0.03em] font-black text-[#0b132b]">
                  Jornalismo e conteúdo
                </h3>

                <p className="mt-6 text-[17px] leading-[1.9] text-[#334155]">
                  Produção de reportagens, especiais e conteúdos sobre temas
                  complexos ligados a economia, clima, diversidade,
                  infraestrutura e transformação social.
                </p>
              </div>

              <div className="bg-white border border-[#d6dce5] rounded-[1.75rem] p-8">
                <h3 className="text-[30px] leading-[1.1] tracking-[-0.03em] font-black text-[#0b132b]">
                  Estratégia e posicionamento
                </h3>

                <p className="mt-6 text-[17px] leading-[1.9] text-[#334155]">
                  Estruturação de narrativas, clareza de comunicação e direção
                  estratégica para negócios, profissionais e organizações.
                </p>
              </div>

              <div className="bg-white border border-[#d6dce5] rounded-[1.75rem] p-8">
                <h3 className="text-[30px] leading-[1.1] tracking-[-0.03em] font-black text-[#0b132b]">
                  Comunicação digital
                </h3>

                <p className="mt-6 text-[17px] leading-[1.9] text-[#334155]">
                  Experiência com conteúdo multiplataforma, redes sociais,
                  newsletters, sites institucionais e projetos digitais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="container pt-32 pb-40">
          <div className="flex items-center gap-4 mb-20">
            <span className="text-[#ff4d00] text-xl">✦</span>

            <h2 className="text-4xl font-black tracking-[-0.03em] text-[#0b132b]">
              Depoimentos
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="bg-white border border-[#d6dce5] rounded-[2rem] p-11 min-h-[300px] flex flex-col justify-between">
              <p className="text-[20px] leading-[1.9] text-[#334155]">
                “André alia visão estratégica, clareza de comunicação e
                profundidade editorial. Um profissional raro.”
              </p>

              <div className="mt-10">
                <strong className="block text-[#0b132b] text-lg">
                  Nome do depoimento
                </strong>

                <span className="text-[#64748b]">
                  Empresa ou organização
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#d6dce5] rounded-[2rem] p-11 min-h-[300px] flex flex-col justify-between">
              <p className="text-[20px] leading-[1.9] text-[#334155]">
                “Tem facilidade para transformar temas complexos em comunicação
                acessível e consistente.”
              </p>

              <div className="mt-10">
                <strong className="block text-[#0b132b] text-lg">
                  Nome do depoimento
                </strong>

                <span className="text-[#64748b]">
                  Empresa ou organização
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#d6dce5] rounded-[2rem] p-11 min-h-[300px] flex flex-col justify-between">
              <p className="text-[20px] leading-[1.9] text-[#334155]">
                “Consegue unir pensamento estratégico, repertório jornalístico e
                sensibilidade institucional.”
              </p>

              <div className="mt-10">
                <strong className="block text-[#0b132b] text-lg">
                  Nome do depoimento
                </strong>

                <span className="text-[#64748b]">
                  Empresa ou organização
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container pb-40">
          <div className="rounded-[2.5rem] border border-[#d6dce5] bg-[#f8fafc] px-12 py-14 md:px-20 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-6xl leading-[1] tracking-[-0.04em] font-black text-[#0b132b]">
                Precisa organizar a comunicação do seu negócio, projeto ou marca
                pessoal?
              </h2>

              <p className="mt-8 text-[22px] leading-[1.8] text-[#334155]">
                Posso ajudar com posicionamento, clareza de comunicação,
                conteúdo estratégico e estruturação narrativa.
              </p>

              <Link
                href="/contato"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-[#ff4d00] px-8 py-4 text-white font-bold hover:opacity-90 transition-opacity"
              >
                Vamos conversar
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
