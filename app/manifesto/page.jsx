"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Manifesto() {
  return (
    <div>
    
      {/* ✅ CORREÇÃO AQUI */}
      <main className="bg-white pt-[110px] md:pt-[130px]">
        
        {/* Intro */}
        <section className="container py-12 md:py-16">
          <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">
            Nosso Manifesto
          </p>

          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
            COMUNICAÇÃO COM PROPÓSITO. ESTRATÉGIA COM CONSCIÊNCIA.
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-prose">
            A comunicação é uma ferramenta poderosa para transformar o mundo.
            Mas transformação de verdade só acontece quando há espaço para
            diferentes vozes, experiências e perspectivas. Por isso, nossa
            atuação é guiada por valores que fazem sentido para nós e para quem
            compartilha dessa visão.
          </p>
        </section>

        {/* BLOCO 1 */}
        <section className="container grid md:grid-cols-12 gap-10 items-start">

          {/* Texto */}
          <div className="md:col-span-7 order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">O que defendemos</h2>

            <ul className="space-y-4 text-gray-800 leading-relaxed">

              <li>
                <strong>🌍 Justiça social e equidade</strong><br />
                Um mundo melhor depende de acesso real a oportunidades,
                distribuição de riqueza e redução das desigualdades.
              </li>

              <li>
                <strong>🌈 Diversidade e inclusão</strong><br />
                Diferenças fazem parte da vida. Respeito, representatividade e
                inclusão são condições básicas para uma sociedade saudável.
              </li>

              <li>
                <strong>🕊️ Direitos humanos e liberdade</strong><br />
                Todas as pessoas merecem dignidade, respeito e liberdade para
                viver sua identidade, cultura e crença.
              </li>

              <li>
                <strong>🎓 Educação e saúde de qualidade</strong><br />
                Educação e saúde são pilares de qualquer sociedade que deseja
                se desenvolver de forma justa e sustentável.
              </li>

              <li>
                <strong>🤝 Conexões reais</strong><br />
                Comunicação não é apenas visibilidade. É construção de relações
                verdadeiras, confiança e diálogo entre pessoas.
              </li>

              <li>
                <strong>🧠 Saúde mental</strong><br />
                Cuidar da mente deveria ser tão comum quanto cuidar do corpo.
                Equilíbrio emocional também é parte de uma vida digna.
              </li>

            </ul>
          </div>

          {/* Imagem */}
          <div className="md:col-span-5 order-1 md:order-2 mb-10 md:mb-0 mt-10 md:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-card relative h-[320px] md:h-[520px] lg:h-[560px]">
              <Image
                src="/manifesto-hands.webp"
                alt="Mãos erguidas representando diversidade e união"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

        </section>

        <div className="container mt-12 md:mt-16" />

        {/* BLOCO 2 */}
        <section className="container grid md:grid-cols-12 gap-10 items-center">

          {/* Imagem */}
          <div className="md:col-span-6 mb-10 md:mb-0 mt-10 md:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-card relative h-[340px] md:h-[420px] lg:h-[440px]">
              <Image
                src="/manifesto-planet.webp"
                alt="Planeta simbolizando impacto e conexão global"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Não é só sobre comunicação. É sobre impacto.
            </h2>

            <p className="mt-4 text-gray-700">
              A Tomazela | Estratégia &amp; Comunicação nasceu para conectar
              marcas e projetos a públicos que compartilham valores reais. Aqui,
              a comunicação vai além do marketing: constrói narrativas,
              fortalece causas e amplia vozes que precisam ser ouvidas.
            </p>

            <p className="mt-3 text-gray-700">
              Se você compartilha essa visão, estamos no mesmo caminho.
            </p>

            <Link
              href="/#contato"
              className="inline-block mt-6 bg-[#FF4D00] text-white font-semibold py-2.5 px-5 rounded-2xl hover:opacity-90 transition"
            >
              Entre em contato
            </Link>
          </div>

        </section>

        <div className="h-10 md:h-12" />
      </main>

      <Footer />
    </div>
  );
}
