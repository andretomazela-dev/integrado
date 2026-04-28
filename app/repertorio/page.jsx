import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RepertorioPage() {
  const reportagens = [
    {
      titulo: "Idosos LGBTQIA+ são empurrados de volta para o armário",
      veiculo: "Gênero & Número",
      ano: "2025",
      descricao:
        "Investigação sobre envelhecimento, invisibilidade e exclusão social na população LGBTQIA+.",
      imagem: "/repertorio/genero-numero-idosos.jpg",
      link:
        "https://www.generonumero.media/reportagens/idosos-lgbtqia-armario/",
      destaque: true,
    },

    {
      titulo: "Brasil quer seguir exemplo do G20",
      veiculo: "Valor Econômico",
      ano: "2024",
      descricao:
        "COP30, financiamento climático e o papel do Brasil nas negociações internacionais.",
      imagem: "/repertorio/cop30.jpg",
      link: "/repertorio/cop30-clima.pdf",
    },

    {
      titulo: "Clima encarece prêmios e muda lógica do resseguro",
      veiculo: "Valor Econômico",
      ano: "2025",
      descricao:
        "Como a crise climática vem alterando preços, cobertura e percepção de risco.",
      imagem: "/repertorio/seguros-clima.jpg",
      link: "/repertorio/seguros-clima.jpg",
    },

    {
      titulo: "Demanda aquecida impulsiona bioinsumos",
      veiculo: "Valor Econômico",
      ano: "2024",
      descricao:
        "Mercado cresce acima da média global e amplia investimentos no Brasil.",
      imagem: "/repertorio/bioinsumos.jpg",
      link: "/repertorio/bioinsumos.jpg",
    },

    {
      titulo: "Turismo é desafio futuro para o clima",
      veiculo: "O Globo",
      ano: "2024",
      descricao:
        "O impacto ambiental do turismo e as transformações do setor.",
      imagem: "/repertorio/turismo-clima.jpg",
      link: "/repertorio/turismo-clima.jpg",
    },

    {
      titulo: "Produção de etanol pode ter volume inédito",
      veiculo: "Valor Econômico",
      ano: "2024",
      descricao:
        "Expansão do etanol e os movimentos da transição energética brasileira.",
      imagem: "/repertorio/etanol.jpg",
      link: "/repertorio/etanol.jpg",
    },

    {
      titulo: "Todo mundo mais velho",
      veiculo: "Valor Setorial",
      ano: "2025",
      descricao:
        "O envelhecimento da frota e os desafios da logística brasileira.",
      imagem: "/repertorio/logistica.jpg",
      link: "/repertorio/logistica.jpg",
    },
  ];

  const destaque = reportagens.find((r) => r.destaque);
  const cards = reportagens.filter((r) => !r.destaque);

  return (
    <>
      <Header />

      <main className="bg-white">
        {/* HERO */}

        <section className="border-b border-zinc-200">
          <div className="container py-20">
            <p className="text-xs uppercase tracking-[0.25em] text-[#FF4D00] font-semibold mb-6">
              Repertório
            </p>

            <h1 className="max-w-5xl text-5xl md:text-6xl leading-[0.95] font-bold tracking-tight text-[#0f172a]">
              Reportagens investigativas, matérias e projetos editoriais sobre
              temas complexos.
            </h1>

            <p className="max-w-3xl mt-8 text-xl leading-relaxed text-zinc-600">
              Produção de conteúdo e apuração jornalística em áreas como clima,
              infraestrutura, economia, diversidade, agronegócio e transformação
              social.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {[
                "Valor Econômico",
                "Valor Setorial",
                "Gênero & Número",
                "O Globo",
                "Revista Logística",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-zinc-200 text-sm text-zinc-600 bg-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* DESTAQUE */}

        <section className="container py-20">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
            <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-zinc-100">
              <img
                src={destaque.imagem}
                alt={destaque.titulo}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
                Reportagem em destaque
              </div>

              <h2 className="text-4xl leading-tight font-bold text-[#0f172a]">
                {destaque.titulo}
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                {destaque.descricao}
              </p>

              <p className="mt-6 text-sm text-zinc-400">
                {destaque.veiculo} • {destaque.ano}
              </p>

              <a
                href={destaque.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-10 bg-[#FF4D00] hover:opacity-90 transition text-white font-medium px-6 py-4 rounded-2xl"
              >
                Ler reportagem ↗
              </a>
            </div>
          </div>
        </section>

        {/* GRID */}

        <section className="container pb-28">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[#FF4D00] text-xl">✦</span>

            <h2 className="text-3xl font-bold text-[#0f172a]">
              Reportagens selecionadas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {cards.map((item) => (
              <a
                key={item.titulo}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[2rem] overflow-hidden border border-zinc-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm text-zinc-400 mb-4">
                    {item.veiculo} • {item.ano}
                  </p>

                  <h3 className="text-2xl leading-tight font-bold text-[#0f172a]">
                    {item.titulo}
                  </h3>

                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    {item.descricao}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-[#FF4D00] font-medium">
                    Ver matéria ↗
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
