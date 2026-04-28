import Image from "next/image";
import Link from "next/link";

const materias = [
  {
    titulo: "Idosos LGBTQIA+ são empurrados de volta para o armário",
    veiculo: "Gênero & Número",
    ano: "2025",
    descricao:
      "Investigação sobre envelhecimento, invisibilidade e exclusão social na população LGBTQIA+.",
    imagem: "/repertorio/genero-numero-idosos-lgbtqia.png",
    link: "https://www.generonumero.media/reportagens/idosos-lgbtqia-armario/",
    destaque: true,
  },

  {
    titulo: "Brasil quer seguir exemplo do G20",
    veiculo: "Valor Econômico",
    ano: "2024",
    descricao:
      "COP30, financiamento climático e o papel do Brasil nas negociações internacionais.",
    imagem: "/repertorio/cop30-g20-clima.jpg",
    pdf: "/repertorio/mudancas-climaticas.pdf",
  },

  {
    titulo: "Clima encarece prêmios e muda lógica do resseguro",
    veiculo: "Valor Econômico",
    ano: "2025",
    descricao:
      "Como a crise climática vem alterando preços, cobertura e percepção de risco.",
    imagem: "/repertorio/seguros-clima-resseguro.jpg",
  },

  {
    titulo: "Ritmo para cumprir meta de universalização é insuficiente",
    veiculo: "Valor Econômico",
    ano: "2025",
    descricao:
      "Os desafios do saneamento básico e os entraves da infraestrutura no Brasil.",
    imagem: "/repertorio/saneamento-universalizacao.jpg",
  },

  {
    titulo: "Demanda aquecida impulsiona bioinsumos",
    veiculo: "Valor Econômico",
    ano: "2024",
    descricao:
      "Mercado cresce acima da média global e amplia investimentos no Brasil.",
    imagem: "/repertorio/bioinsumos-mercado.jpg",
  },

  {
    titulo: "Produção de etanol pode ter volume inédito",
    veiculo: "Valor Econômico",
    ano: "2024",
    descricao:
      "Expansão do etanol e os movimentos da transição energética brasileira.",
    imagem: "/repertorio/etanol-volume-recorde.jpg",
  },

  {
    titulo: "Todo mundo mais velho",
    veiculo: "Revista Logística",
    ano: "2025",
    descricao:
      "O envelhecimento da frota e os desafios da logística brasileira.",
    imagem: "/repertorio/logistica-envelhecimento-frota.png",
  },

  {
    titulo: "Turismo é desafio futuro para o clima",
    veiculo: "O Globo",
    ano: "2024",
    descricao:
      "O impacto ambiental do turismo e as transformações do setor.",
    imagem: "/repertorio/turismo-clima-oglobo.jpg",
  },
];

export default function RepertorioPage() {
  const destaque = materias.find((m) => m.destaque);
  const restantes = materias.filter((m) => !m.destaque);

  return (
    <main className="bg-white text-[#0f172a]">
      <section className="border-b border-neutral-200">
        <div className="container py-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#FF4D00] mb-4">
            Repertório
          </p>

          <h1 className="max-w-4xl text-5xl md:text-6xl font-semibold leading-[0.95] tracking-tight">
            Reportagens investigativas, matérias e projetos editoriais sobre
            temas complexos.
          </h1>

          <p className="max-w-2xl mt-6 text-lg text-neutral-600 leading-relaxed">
            Produção de conteúdo e apuração jornalística em áreas como clima,
            infraestrutura, economia, diversidade, agronegócio e transformação
            social.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {[
              "Valor Econômico",
              "Valor Setorial",
              "Gênero & Número",
              "O Globo",
              "Revista Logística",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {destaque && (
        <section className="py-20">
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200">
              <Image
                src={destaque.imagem}
                alt={destaque.titulo}
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-sm text-neutral-500 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
                Reportagem em destaque
              </div>

              <h2 className="text-4xl font-semibold leading-tight">
                {destaque.titulo}
              </h2>

              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                {destaque.descricao}
              </p>

              <p className="mt-6 text-sm text-neutral-500">
                {destaque.veiculo} • {destaque.ano}
              </p>

              <Link
                href={destaque.link}
                target="_blank"
                className="inline-flex items-center gap-2 mt-8 px-6 py-4 rounded-2xl bg-[#FF4D00] text-white font-medium hover:opacity-90 transition"
              >
                Ler reportagem ↗
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="pb-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[#FF4D00]">✦</span>

            <h2 className="text-3xl font-semibold">
              Reportagens selecionadas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {restantes.map((materia) => (
              <article
                key={materia.titulo}
                className="group rounded-[2rem] overflow-hidden border border-neutral-200 bg-white hover:shadow-xl transition duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={materia.imagem}
                    alt={materia.titulo}
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm text-neutral-500">
                    {materia.veiculo} • {materia.ano}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight">
                    {materia.titulo}
                  </h3>

                  <p className="mt-4 text-neutral-600 leading-relaxed">
                    {materia.descricao}
                  </p>

                  {materia.link ? (
                    <Link
                      href={materia.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 mt-6 text-[#FF4D00] font-medium"
                    >
                      Ver matéria ↗
                    </Link>
                  ) : materia.pdf ? (
                    <Link
                      href={materia.pdf}
                      target="_blank"
                      className="inline-flex items-center gap-2 mt-6 text-[#FF4D00] font-medium"
                    >
                      Abrir PDF ↗
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
