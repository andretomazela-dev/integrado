"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const materias = [
  {
    titulo: "Idosos LGBTQIA+ são empurrados de volta para o armário",
    veiculo: "Gênero & Número",
    ano: "2025",
    descricao:
      "Investigação sobre envelhecimento, invisibilidade e exclusão social na população LGBTQIA+.",
    imagem: "/repertorio/genero-numero-idosos-lgbtqia.png",
    destaque: true,
    link: "https://www.generonumero.media/reportagens/idosos-lgbtqia-empurrados-armario/",
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

export default function Page() {
  const destaque = materias.find((m) => m.destaque);
  const restantes = materias.filter((m) => !m.destaque);

  return (
    <div>
      <Header />

      <main className="bg-white">

        <section className="container py-14 md:py-16">

          <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">
            REPERTÓRIO
          </p>

          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight max-w-5xl">
            Reportagens investigativas, matérias e projetos editoriais sobre temas complexos.
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl">
            Produção de conteúdo e apuração jornalística em áreas como clima,
            infraestrutura, economia, diversidade, agronegócio e transformação social.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Valor Econômico",
              "Valor Setorial",
              "Gênero & Número",
              "O Globo",
              "Revista Logística",
            ].map((item) => (
              <span
                key={item}
                className="text-sm px-4 py-2 rounded-full border border-gray-200 text-gray-700 bg-white"
              >
                {item}
              </span>
            ))}
          </div>

        </section>

        {/* destaque */}
        <section className="container pb-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200">

              <Image
                src={destaque.imagem}
                alt={destaque.titulo}
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
              />

            </div>

            <div>

              <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-5">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                Reportagem em destaque
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                {destaque.titulo}
              </h2>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                {destaque.descricao}
              </p>

              <p className="mt-6 text-sm text-gray-500">
                {destaque.veiculo} • {destaque.ano}
              </p>

              <Link
                href={destaque.link}
                target="_blank"
                className="btn btn-primary mt-8 rounded-2xl"
              >
                {destaque.botao}
              </Link>

            </div>

          </div>

        </section>

        {/* cards */}
        <section className="container pb-24">

          <div className="flex items-center gap-3 mb-10">

            <span className="text-orange-500">✦</span>

            <h2 className="text-3xl font-bold">
              Reportagens selecionadas
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {restantes.map((materia) => (

              <article
                key={materia.titulo}
                className="card hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border border-gray-200"
              >

                <Link href={materia.link} target="_blank">

                  <div className="relative h-56 bg-gray-100">

                    {materia.imagem.endsWith(".pdf") ? (

                      <div className="w-full h-full flex flex-col items-center justify-center">

                        <div className="w-16 h-16 rounded-2xl bg-[#FF4D00] text-white flex items-center justify-center font-bold text-lg">
                          PDF
                        </div>

                        <p className="mt-4 text-sm text-gray-500">
                          Clique para abrir
                        </p>

                      </div>

                    ) : (

                      <Image
                        src={materia.imagem}
                        alt={materia.titulo}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />

                    )}

                  </div>

                </Link>

                <div className="p-5">

                  <div className="text-xs uppercase tracking-wide text-gray-500">
                    {materia.veiculo} • {materia.ano}
                  </div>

                  <h3 className="mt-2 font-semibold text-2xl leading-snug">
                    {materia.titulo}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {materia.descricao}
                  </p>

                  <Link
                    href={materia.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 mt-5 text-orange-600 font-medium"
                  >
                    {materia.botao}
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
