import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const reports = [
  {
    title: "Idosos LGBTQIA+ são empurrados de volta para o armário",
    description:
      "Investigação sobre envelhecimento, invisibilidade e exclusão social na população LGBTQIA+.",
    image: "/repertorio/genero-numero-idosos.jpg",
    vehicle: "Gênero & Número",
    year: "2025",
    href: "/repertorio/pdfs/genero-numero-idosos.pdf",
    featured: true,
  },
  {
    title: "Brasil quer seguir exemplo do G20",
    description:
      "COP30, financiamento climático e o papel do Brasil nas negociações internacionais.",
    image: "/repertorio/cop30.jpg",
    vehicle: "Valor Econômico",
    year: "2024",
    href: "/repertorio/pdfs/cop30.pdf",
  },
  {
    title: "Clima encarece prêmios e muda lógica do resseguro",
    description:
      "Como a crise climática vem alterando preços, cobertura e percepção de risco.",
    image: "/repertorio/seguros-clima.jpg",
    vehicle: "Valor Econômico",
    year: "2025",
    href: "/repertorio/pdfs/seguros-clima.pdf",
  },
  {
    title: "Ritmo para cumprir meta de universalização é insuficiente",
    description:
      "Os desafios do saneamento básico e os entraves da infraestrutura no Brasil.",
    image: "/repertorio/saneamento.jpg",
    vehicle: "Valor Econômico",
    year: "2025",
    href: "/repertorio/pdfs/saneamento.pdf",
  },
  {
    title: "Demanda aquecida impulsiona bioinsumos",
    description:
      "Mercado cresce acima da média global e amplia investimentos no Brasil.",
    image: "/repertorio/bioinsumos.jpg",
    vehicle: "Valor Econômico",
    year: "2024",
    href: "/repertorio/pdfs/bioinsumos.pdf",
  },
  {
    title: "Turismo é desafio futuro para o clima",
    description:
      "O impacto ambiental do turismo e as transformações do setor.",
    image: "/repertorio/turismo-clima.jpg",
    vehicle: "Valor Econômico",
    year: "2024",
    href: "/repertorio/pdfs/turismo-clima.pdf",
  },
  {
    title: "Produção de etanol pode ter volume inédito",
    description:
      "Expansão do etanol e os movimentos da transição energética brasileira.",
    image: "/repertorio/etanol.jpg",
    vehicle: "Valor Econômico",
    year: "2024",
    href: "/repertorio/pdfs/etanol.pdf",
  },
  {
    title: "Todo mundo mais velho",
    description:
      "O envelhecimento da frota e os desafios da logística brasileira.",
    image: "/repertorio/logistica.jpg",
    vehicle: "Valor Setorial",
    year: "2025",
    href: "/repertorio/pdfs/logistica.pdf",
  },
];

export default function RepertorioPage() {
  const featured = reports.find((report) => report.featured);
  const others = reports.filter((report) => !report.featured);

  return (
    <>
      <Header />

      <main className="bg-[#f7f7f5] min-h-screen">
        {/* HERO */}
        <section className="border-b border-neutral-200">
          <div className="container py-24">
            <div className="max-w-4xl">
              <span className="text-sm uppercase tracking-[0.18em] text-[#FF4D00] font-medium">
                Repertório
              </span>

              <h1 className="mt-5 text-5xl md:text-6xl leading-[1.02] font-bold text-[#0f172a] max-w-5xl">
                Reportagens, investigações e projetos editoriais sobre temas complexos.
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-neutral-700 max-w-3xl">
                Produção de conteúdo e apuração jornalística em áreas como clima,
                infraestrutura, economia, diversidade, agronegócio e transformação social.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Valor Econômico",
                  "Valor Setorial",
                  "Gênero & Número",
                  "O Globo",
                  "Revista Logística",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border border-neutral-300 text-sm text-neutral-700 bg-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        {featured && (
          <section className="py-24">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-14 items-center">
                <div className="relative aspect-[1.25/1] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 text-sm text-neutral-700">
                    <span>✦</span>
                    Reportagem em destaque
                  </div>

                  <h2 className="mt-8 text-4xl leading-tight font-bold text-[#0f172a]">
                    {featured.title}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-neutral-700">
                    {featured.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-sm text-neutral-500">
                    <span>•</span>
                    {featured.vehicle} • {featured.year}
                  </div>

                  <Link
                    href={featured.href}
                    target="_blank"
                    className="mt-10 inline-flex items-center gap-2 bg-[#FF4D00] hover:opacity-90 transition text-white px-6 py-4 rounded-2xl font-medium"
                  >
                    Ler reportagem
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* GRID */}
        <section className="pb-28">
          <div className="container">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-[#FF4D00] text-xl">✦</span>

              <h2 className="text-3xl font-bold text-[#0f172a]">
                Reportagens selecionadas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {others.map((report) => (
                <Link
                  key={report.title}
                  href={report.href}
                  target="_blank"
                  className="group bg-white rounded-[1.75rem] overflow-hidden border border-neutral-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  <div className="relative aspect-[1.45/1] overflow-hidden">
                    <Image
                      src={report.image}
                      alt={report.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition duration-500"
                    />
                  </div>

                  <div className="p-7">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <span>•</span>
                      {report.vehicle} • {report.year}
                    </div>

                    <h3 className="mt-4 text-2xl leading-snug font-bold text-[#0f172a]">
                      {report.title}
                    </h3>

                    <p className="mt-4 text-neutral-700 leading-relaxed">
                      {report.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-[#FF4D00] font-medium">
                      Ver matéria
                      <span>↗</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
