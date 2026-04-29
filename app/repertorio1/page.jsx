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
        "Atuação em posicionamento, conteúdo institucional e relacionamento com públicos estratégicos.",
    },
    {
      titulo: "Jornalismo e conteúdo",
      texto:
        "Produção de reportagens e conteúdos sobre economia, clima e transformação social.",
    },
    {
      titulo: "Estratégia e posicionamento",
      texto:
        "Estruturação de narrativas e direção de comunicação para marcas e profissionais.",
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
        <section className="container pt-16 pb-14 md:pt-20 md:pb-16">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#FF4D00] font-semibold">
            Repertório
          </span>

          <div className="mt-5 max-w-3xl">
            <h1 className="text-[36px] md:text-[54px] leading-[1.02] tracking-[-0.05em] font-[750] text-[#0F172A]">
              Reportagens, projetos e repertório em comunicação
            </h1>

            <p className="mt-7 max-w-2xl text-[17px] leading-[1.9] text-[#475569]">
              Meu repertório reúne mais de 20 anos de experiência em
              comunicação, entre empresas, agências e o trabalho como
              repórter. Aqui, alguns trabalhos publicados e relatos de
              pessoas com quem já trabalhei.
            </p>
          </div>

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
                  border border-[#D9DDE3]
                  bg-white
                  px-5 py-2.5
                  text-[11px]
                  uppercase
                  tracking-[0.08em]
                  text-[#64748B]
                  transition
                  hover:border-[#FF4D00]
                  hover:text-[#FF4D00]
                "
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        {/* PUBLICAÇÕES */}
        <section className="border-t border-[#E7E8EA] py-20">
          <div className="container">
            <div className="mb-10 flex items-center gap-3">
              <span className="text-[#FF4D00] text-sm">✦</span>

              <h2 className="text-[28px] tracking-[-0.03em] font-[750] text-[#0F172A]">
                Publicações
              </h2>
            </div>

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {trabalhos.map((item, index) => (
                <article
                  key={index}
                  id={item.id}
                  className="
                    rounded-[28px]
                    border border-[#E7E8EA]
                    bg-white
                    p-8
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                    {item.categoria} • {item.ano}
                  </span>

                  <h3 className="mt-5 text-[18px] md:text-[20px] leading-[1.15] tracking-[-0.03em] font-[720] text-[#0F172A]">
                    {item.titulo}
                  </h3>

                  <p className="mt-5 text-[15px] leading-[1.85] text-[#475569]">
                    {item.descricao}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    className="mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-[#FF4D00] hover:opacity-80"
                  >
                    Ler trabalho ↗
                  </a>
                </article>
              ))}

              {/* PORTFÓLIO */}
              <article className="rounded-[28px] bg-[#FF4D00] p-8 text-white shadow-lg">
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                  Portfólio completo
                </span>

                <h3 className="mt-5 text-[24px] leading-[1.12] tracking-[-0.03em] font-[720]">
                  Quer ver mais projetos desenvolvidos ao longo da carreira?
                </h3>

                <a
                  href="https://drive.google.com/drive/folders/1ZSttp2dvNJzzaAQVb8IXh6YnRX-i0CcB?usp=sharing"
                  target="_blank"
                  className="mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-white"
                >
                  Acessar portfólio completo ↗
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="bg-white py-20">
          <div className="container">
            <div className="mb-10 flex items-center gap-3">
              <span className="text-[#FF4D00] text-sm">✦</span>

              <h2 className="text-[28px] tracking-[-0.03em] font-[750] text-[#0F172A]">
                Experiência
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {experiencias.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-[24px]
                    border border-[#E7E8EA]
                    bg-[#FAFAF8]
                    p-7
                    transition
                    hover:border-[#D6DADF]
                  "
                >
                  <h3 className="text-[18px] leading-[1.25] tracking-[-0.03em] font-[700] text-[#0F172A]">
                    {item.titulo}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.9] text-[#64748B]">
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
            <div className="mb-10">
              <div className="flex items-center gap-3">
                <span className="text-[#FF4D00] text-sm">✦</span>

                <h2 className="text-[28px] tracking-[-0.03em] font-[750] text-[#0F172A]">
                  Depoimentos
                </h2>
              </div>

              <p className="mt-4 max-w-2xl text-[15px] leading-[1.9] text-[#64748B]">
                Recomendações de profissionais que acompanharam meu
                trabalho em comunicação corporativa, conteúdo e
                posicionamento institucional.
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-3">
              {depoimentos.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-[28px]
                    bg-white
                    p-8
                    border border-[#E7E8EA]
                  "
                >
                  <p className="text-[16px] leading-[1.95] text-[#334155]">
                    “{item.texto}”
                  </p>

                  <div className="mt-7 border-t border-[#E7E8EA] pt-5">
                    <strong className="block text-[15px] font-semibold text-[#0F172A]">
                      {item.nome}
                    </strong>

                    <span className="mt-1 block text-[13px] text-[#64748B]">
                      {item.cargo}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/tomazela/details/recommendations/"
              target="_blank"
              className="
                mt-8 inline-flex items-center gap-2
                rounded-full
                border border-[#FFD7C2]
                bg-white
                px-5 py-2.5
                text-[13px]
                font-medium
                text-[#FF4D00]
                transition
                hover:bg-[#FFF4EE]
              "
            >
              Ver recomendações no LinkedIn ↗
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container">
            <div className="rounded-[36px] border border-[#E7E8EA] bg-[#FBFBFA] px-10 py-14 md:px-14">
              <div className="max-w-3xl">
                <h2 className="text-[34px] md:text-[46px] leading-[1.03] tracking-[-0.05em] font-[750] text-[#0F172A]">
                  Precisa organizar a comunicação do seu negócio, projeto ou marca pessoal?
                </h2>

                <p className="mt-6 text-[17px] leading-[1.9] text-[#475569]">
                  Posso ajudar com posicionamento, clareza de comunicação,
                  conteúdo estratégico e estruturação narrativa.
                </p>

                <a
                  href="/#contato"
                  className="
                    mt-9 inline-flex
                    rounded-full
                    bg-[#FF4D00]
                    px-7 py-3.5
                    text-[14px]
                    font-medium
                    text-white
                    transition
                    hover:opacity-90
                  "
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
