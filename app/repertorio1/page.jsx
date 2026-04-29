import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      "Infraestrutura resiliente, eventos extremos e adaptação diante da crise climática.",
    link: "/repertorio/mudancas-climaticas.pdf",
  },
];

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

export default function RepertorioPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f5f5f3] text-[#0f172a]">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-28 pb-24">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#ff4d00] font-semibold">
            Repertório
          </span>

          <h1 className="mt-8 max-w-4xl text-[56px] leading-[0.98] tracking-[-0.05em] font-black text-[#0b132b]">
            Comunicação, estratégia e repertório construídos ao longo de mais
            de 20 anos.
          </h1>

          <p className="mt-10 max-w-3xl text-[22px] leading-[1.7] text-[#475569]">
            Meu repertório reúne mais de 20 anos de experiência em comunicação,
            entre empresas, agências e o trabalho como repórter. Aqui, alguns
            trabalhos publicados e relatos de pessoas com quem já trabalhei.
          </p>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.18em] text-[#64748b] font-medium">
            <span>Valor Econômico</span>
            <span>Gênero & Número</span>
            <span>O Globo</span>
            <span>Comunicação institucional</span>
            <span>Projetos especiais</span>
          </div>
        </section>

        {/* PUBLICAÇÕES */}
        <section className="max-w-6xl mx-auto px-6 pb-28">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[#ff4d00]">✦</span>

            <h2 className="text-[38px] tracking-[-0.04em] font-black text-[#0b132b]">
              Publicações
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trabalhos.map((item, index) => (
              <article
                key={index}
                className="bg-white border border-[#e5e7eb] rounded-[28px] p-8 hover:shadow-md transition-all duration-300"
              >
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#64748b] font-semibold">
                  {item.categoria} • {item.ano}
                </span>

                <h3 className="mt-5 text-[34px] leading-[1.02] tracking-[-0.04em] font-black text-[#0b132b]">
                  {item.titulo}
                </h3>

                <p className="mt-5 text-[17px] leading-[1.8] text-[#475569]">
                  {item.descricao}
                </p>

                <Link
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-8 text-[#ff4d00] font-semibold text-[15px]"
                >
                  Ler trabalho ↗
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="border-t border-[#e5e7eb]">
          <div className="max-w-6xl mx-auto px-6 py-28">
            <div className="flex items-center gap-3 mb-14">
              <span className="text-[#ff4d00]">✦</span>

              <h2 className="text-[38px] tracking-[-0.04em] font-black text-[#0b132b]">
                Experiência
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {experiencias.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#e5e7eb] rounded-[24px] p-7"
                >
                  <h3 className="text-[24px] leading-[1.1] tracking-[-0.03em] font-black text-[#0b132b]">
                    {item.titulo}
                  </h3>

                  <p className="mt-5 text-[15px] leading-[1.8] text-[#475569]">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="max-w-6xl mx-auto px-6 py-28">
          <div className="flex items-center gap-3 mb-14">
            <span className="text-[#ff4d00]">✦</span>

            <h2 className="text-[38px] tracking-[-0.04em] font-black text-[#0b132b]">
              Depoimentos
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-[#e5e7eb] rounded-[28px] p-9">
              <p className="text-[18px] leading-[1.9] text-[#334155]">
                “André alia visão estratégica, clareza de comunicação e
                profundidade editorial.”
              </p>

              <div className="mt-8">
                <strong className="block text-[#0b132b]">
                  Nome do depoimento
                </strong>

                <span className="text-[#64748b] text-sm">
                  Empresa ou organização
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#e5e7eb] rounded-[28px] p-9">
              <p className="text-[18px] leading-[1.9] text-[#334155]">
                “Tem facilidade para transformar temas complexos em comunicação
                acessível.”
              </p>

              <div className="mt-8">
                <strong className="block text-[#0b132b]">
                  Nome do depoimento
                </strong>

                <span className="text-[#64748b] text-sm">
                  Empresa ou organização
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#e5e7eb] rounded-[28px] p-9">
              <p className="text-[18px] leading-[1.9] text-[#334155]">
                “Une pensamento estratégico, repertório jornalístico e visão
                institucional.”
              </p>

              <div className="mt-8">
                <strong className="block text-[#0b132b]">
                  Nome do depoimento
                </strong>

                <span className="text-[#64748b] text-sm">
                  Empresa ou organização
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-[36px] px-10 py-14 md:px-16 md:py-16">
            <div className="max-w-3xl">
              <h2 className="text-[54px] leading-[0.98] tracking-[-0.05em] font-black text-[#0b132b]">
                Precisa organizar a comunicação do seu negócio, projeto ou marca
                pessoal?
              </h2>

              <p className="mt-8 text-[20px] leading-[1.8] text-[#475569]">
                Posso ajudar com posicionamento, clareza de comunicação,
                conteúdo estratégico e estruturação narrativa.
              </p>

              <Link
                href="/contato"
                className="inline-flex items-center justify-center mt-10 rounded-full bg-[#ff4d00] px-7 py-4 text-white font-semibold hover:opacity-90 transition-opacity"
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
