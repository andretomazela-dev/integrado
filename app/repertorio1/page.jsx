import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RepertorioPage() {
  const trabalhos = [
    {
      categoria: "Gênero & Número",
      ano: "2025",
      titulo: "Idosos LGBTQIA+ são empurrados de volta para o armário",
      descricao:
        "Reportagem sobre envelhecimento, invisibilidade e exclusão social da população LGBTQIA+.",
      link: "https://www.generonumero.media/reportagens/idosos-lgbtqia-empurrados-armario/",
      id: "genero",
    },
    {
      categoria: "Valor Econômico",
      ano: "2025",
      titulo: "Clima encarece prêmios e muda lógica do resseguro",
      descricao:
        "Especial sobre crise climática, perdas bilionárias e transformação do mercado de seguros.",
      link: "/repertorio/seguros-clima-resseguro.jpg",
      id: "valor",
    },
    {
      categoria: "Infraestrutura & Logística",
      ano: "2024",
      titulo: "Adaptação urgente",
      descricao:
        "Infraestrutura resiliente, eventos extremos e adaptação diante do avanço da crise climática.",
      link: "/repertorio/adaptacao-urgente.jpg",
      id: "projetos",
    },
    {
      categoria: "O Globo",
      ano: "2024",
      titulo: "Brasil quer seguir exemplo do G20",
      descricao:
        "COP30, financiamento climático e o papel do Brasil nas negociações internacionais.",
      link: "/repertorio/turismo-clima-oglobo.jpg",
      id: "oglobo",
    },
    {
      categoria: "Valor Econômico",
      ano: "2023",
      titulo: "Caem os alertas de desmatamento",
      descricao:
        "Queda do desmatamento na Amazônia, fiscalização ambiental e ações dos governos federal e estaduais.",
      link: "/repertorio/sustentabilidade-valor-2023.pdf",
      id: "valor",
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
        "Estruturação de narrativas, clareza estratégica e direção de comunicação para marcas e profissionais.",
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
        "Profissional competente, ágil e estratégico, com forte capacidade de integrar comunicação, conteúdo e relacionamento.",
      nome: "Erika Martins de Figueiredo",
      cargo: "Gerente de Comunicação & Relacionamento",
    },
    {
      texto:
        "Extremamente competente, ágil e determinado. Um profissional colaborativo e muito respeitado no trabalho em equipe.",
      nome: "Elaine Nishiwaki",
      cargo: "Diretora de Comunicação Corporativa",
    },
    {
      texto:
        "Profissional proativo, criativo e comprometido, com visão sistêmica, excelente texto e forte responsabilidade com prazos.",
      nome: "Silvia Alves Paz",
      cargo: "Marketing e Comunicação em Saúde",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#F7F7F5] text-[#0F172A]">
        {/* HERO */}
        <section className="container pt-14 pb-12 md:pt-20 md:pb-14">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#FF4D00] font-semibold">
            Repertório
          </span>

          <h1 className="mt-5 max-w-4xl text-[40px] md:text-[58px] font-black leading-[1.02] tracking-[-0.045em] text-[#0F172A]">
            Reportagens, projetos e repertório em comunicação
          </h1>

          <p className="mt-6 max-w-2xl text-[17px] leading-[1.85] text-[#475569]">
            Meu repertório reúne mais de 20 anos de experiência em
            comunicação, entre empresas, agências e o trabalho como
            repórter. Aqui, alguns trabalhos publicados e relatos de
            pessoas com quem já trabalhei.
          </p>

          {/* FILTROS */}
          <div className="mt-9 flex flex-wrap gap-3">
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
                  px-5 py-3
                  text-[12px]
                  uppercase
                  tracking-[0.08em]
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
        <section className="border-t border-gray-200 py-20">
          <div className="container">
            <div className="mb-10 flex items-center gap-3">
              <span className="text-[#FF4D00] text-xl">✦</span>
              <h2 className="text-[32px] font-black tracking-[-0.03em]">
                Publicações
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {trabalhos.map((item, index) => (
                <article
                  key={index}
                  id={item.id}
                  className="rounded-[30px] border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-[11px] uppercase tracking-[0.14em] text-gray-500">
                    {item.categoria} • {item.ano}
                  </span>

                  <h3 className="mt-5 text-[24px] md:text-[26px] leading-[1.1] font-black tracking-[-0.04em]">
                    {item.titulo}
                  </h3>

                  <p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">
                    {item.descricao}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-[#FF4D00] hover:opacity-80"
                  >
                    Ler trabalho ↗
                  </a>
                </article>
              ))}

              {/* CARD PORTFÓLIO */}
              <article className="rounded-[30px] bg-[#FF4D00] p-8 text-white shadow-xl">
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                  Portfólio completo
                </span>

                <h3 className="mt-5 text-[20px] md:text-[24px] leading-[1.15] font-bold tracking-[-0.03em]">
                  Quer ver mais projetos desenvolvidos ao longo da carreira?
                </h3>

                <a
                  href="https://drive.google.com/drive/folders/1ZSttp2dvNJzzaAQVb8IXh6YnRX-i0CcB?usp=sharing"
                  target="_blank"
                  className="mt-10 inline-flex items-center gap-2 text-[15px] font-semibold text-white"
                >
                  Acessar portfólio completo ↗
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="mb-10 flex items-center gap-3">
              <span className="text-[#FF4D00] text-xl">✦</span>
              <h2 className="text-[32px] font-black tracking-[-0.03em]">
                Experiência
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {experiencias.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[24px] border border-gray-200 bg-[#FAFAF8] p-7"
                >
                  <h3 className="text-[22px] leading-[1.15] font-black tracking-[-0.03em]">
                    {item.titulo}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.8] text-[#475569]">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="bg-[#EEF2F5] py-20">
          <div className="container">
            <div className="mb-10 flex items-center gap-3">
              <span className="text-[#FF4D00] text-xl">✦</span>

              <div>
                <h2 className="text-[32px] font-black tracking-[-0.03em]">
                  Depoimentos
                </h2>

                <p className="mt-3 max-w-3xl text-[16px] leading-[1.8] text-[#475569]">
                  Recomendações de profissionais que acompanharam meu
                  trabalho em comunicação corporativa, conteúdo e
                  posicionamento institucional.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {depoimentos.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[28px] bg-white p-10 shadow-sm"
                >
                  <p className="text-[18px] leading-[1.9] text-[#0F172A]">
                    “{item.texto}”
                  </p>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <strong className="block text-[18px]">
                      {item.nome}
                    </strong>

                    <span className="mt-1 block text-[15px] text-[#64748B]">
                      {item.cargo}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/tomazela/details/recommendations/"
              target="_blank"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#FF4D00]/20 bg-white px-5 py-3 text-[15px] font-semibold text-[#FF4D00] transition hover:bg-[#FFF1E8]"
            >
              Ver recomendações no LinkedIn ↗
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container">
            <div className="rounded-[36px] border border-gray-200 bg-[#FBFBFA] px-10 py-14 md:px-16">
              <div className="max-w-3xl">
                <h2 className="text-[40px] md:text-[52px] leading-[1.02] tracking-[-0.045em] font-black text-[#0F172A]">
                  Precisa organizar a comunicação do seu negócio, projeto ou marca pessoal?
                </h2>

                <p className="mt-6 text-[18px] leading-[1.9] text-[#475569]">
                  Posso ajudar com posicionamento, clareza de comunicação,
                  conteúdo estratégico e estruturação narrativa.
                </p>

                <a
                  href="/#contato"
                  className="mt-10 inline-flex rounded-full bg-[#FF4D00] px-7 py-4 text-[15px] font-semibold text-white transition hover:opacity-90"
                >
                  Vamos conversar
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
