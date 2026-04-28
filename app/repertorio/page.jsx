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
    destaque: true,
    link: "https://www.generonumero.media/reportagens/idosos-lgbtqia-sao-empurrados-de-volta-para-o-armario/",
    botao: "Ler reportagem ↗",
  },

  {
    titulo: "Brasil quer seguir exemplo do G20",
    veiculo: "Valor Econômico",
    ano: "2024",
    descricao:
      "COP30, financiamento climático e o papel do Brasil nas negociações internacionais.",
    imagem: "/repertorio/mudancas-climaticas.pdf",
    link: "/repertorio/mudancas-climaticas.pdf",
    botao: "Abrir PDF ↗",
  },

  {
    titulo: "Clima encarece prêmios e muda lógica do resseguro",
    veiculo: "Valor Econômico",
    ano: "2025",
    descricao:
      "Como a crise climática vem alterando preços, cobertura e percepção de risco.",
    imagem: "/repertorio/seguros-clima-resseguro.jpg",
    link: "/repertorio/seguros-clima-resseguro.jpg",
    botao: "Abrir matéria ↗",
  },

  {
    titulo: "Ritmo para cumprir meta de universalização é insuficiente",
    veiculo: "Valor Econômico",
    ano: "2025",
    descricao:
      "Os desafios do saneamento básico e os entraves da infraestrutura no Brasil.",
    imagem: "/repertorio/saneamento-universalizacao.jpg",
    link: "/repertorio/saneamento-universalizacao.jpg",
    botao: "Abrir matéria ↗",
  },

  {
    titulo: "Demanda aquecida impulsiona bioinsumos",
    veiculo: "Valor Econômico",
    ano: "2024",
    descricao:
      "Mercado cresce acima da média global e amplia investimentos no Brasil.",
    imagem: "/repertorio/bioinsumos-mercado.jpg",
    link: "/repertorio/bioinsumos-mercado.jpg",
    botao: "Abrir matéria ↗",
  },

  {
    titulo: "Produção de etanol pode ter volume inédito",
    veiculo: "Valor Econômico",
    ano: "2024",
    descricao:
      "Expansão do etanol e os movimentos da transição energética brasileira.",
    imagem: "/repertorio/etanol-volume-recorde.jpg",
    link: "/repertorio/etanol-volume-recorde.jpg",
    botao: "Abrir matéria ↗",
  },

  {
    titulo: "Todo mundo mais velho",
    veiculo: "Revista Logística",
    ano: "2025",
    descricao:
      "O envelhecimento da frota e os desafios da logística brasileira.",
    imagem: "/repertorio/logistica-envelhecimento-frota.png",
    link: "/repertorio/logistica-envelhecimento-frota.png",
    botao: "Abrir matéria ↗",
  },

  {
    titulo: "Turismo é desafio futuro para o clima",
    veiculo: "O Globo",
    ano: "2024",
    descricao:
      "O impacto ambiental do turismo e as transformações do setor.",
    imagem: "/repertorio/turismo-clima-oglobo.jpg",
    link: "/repertorio/turismo-clima-oglobo.jpg",
    botao: "Abrir matéria ↗",
  },

  {
    titulo: "Especial Sustentabilidade",
    veiculo: "Valor Econômico",
    ano: "2023",
    descricao:
      "Reportagem especial sobre sustentabilidade, economia e transformação produtiva.",
    imagem: "/repertorio/sustentabilidade-valor-2023.pdf",
    link: "/repertorio/sustentabilidade-valor-2023.pdf",
    botao: "Abrir PDF ↗",
  },

  {
    titulo: "Economia circular",
    veiculo: "Valor Econômico",
    ano: "2023",
    descricao:
      "Transformações econômicas e desafios ligados à economia circular.",
    imagem: "/repertorio/economia-circular.pdf",
    link: "/repertorio/economia-circular.pdf",
    botao: "Abrir PDF ↗",
  },
];

export default function RepertorioPage() {
  const destaque = materias.find((m) => m.destaque);
  const restantes = materias.filter((m) => !m.destaque);

  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="container py-16 md:py-24">
          <p className="text-xs tracking-[0.2em] uppercase text-[#FF4D00] mb-5">
            Repertório
          </p>

          <h1 className="max-w-5xl text-5xl md:text-6xl font-semibold leading-[0.95] tracking-tight text-[#0f172a]">
            Reportagens investigativas, matérias e projetos editoriais sobre
            temas complexos.
          </h1>

          <p className="max-w-3xl mt-8 text-lg leading-relaxed text-neutral-600">
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
                className="px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-600 bg-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100">
            <Image
              src={destaque.imagem}
              alt={destaque.titulo}
              width={1600}
              height={1200}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-sm text-neutral-500 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
              Reportagem em destaque
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#0f172a]">
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
              className="btn btn-primary mt-8"
            >
              {destaque.botao}
            </Link>
          </div>
        </div>
      </section>

      <section className="section pb-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[#FF4D00]">✦</span>

            <h2 className="text-3xl font-semibold text-[#0f172a]">
              Reportagens selecionadas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {restantes.map((materia) => (
              <article
                key={materia.titulo}
                className="bg-white rounded-[2rem] overflow-hidden border border-neutral-200 hover:shadow-xl transition duration-300"
              >
                <Link href={materia.link} target="_blank">
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                    {materia.imagem.endsWith(".pdf") ? (
                      <div className="w-full h-full flex items-center justify-center bg-neutral-100 p-10">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-2xl bg-[#FF4D00] text-white flex items-center justify-center mx-auto text-2xl mb-4">
                            PDF
                          </div>

                          <p className="text-sm text-neutral-500">
                            Clique para abrir o arquivo
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={materia.imagem}
                        alt={materia.titulo}
                        width={1200}
                        height={900}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </Link>

                <div className="p-8">
                  <p className="text-sm text-neutral-500">
                    {materia.veiculo} • {materia.ano}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#0f172a]">
                    {materia.titulo}
                  </h3>

                  <p className="mt-4 text-neutral-600 leading-relaxed">
                    {materia.descricao}
                  </p>

                  <Link
                    href={materia.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 mt-6 text-[#FF4D00] font-medium"
                  >
                    {materia.botao}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
