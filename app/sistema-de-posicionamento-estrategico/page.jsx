"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const Icon = ({ children }) => (
  <div className="icon-circle">
    {children}
  </div>
);

export default function SistemaPosicionamento() {
  return (
    <div>
      <Header />

      <main className="bg-white">

        {/* HERO */}
        <section className="section-lg">
          <div className="container grid md:grid-cols-2 gap-14 items-center">

            <div>
              <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">
                Serviço
              </p>

              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
                Sistema de Posicionamento Estratégico
              </h1>

              <p className="mt-6 text-lg text-gray-700 max-w-prose">
                Transformo o que sua empresa faz em uma comunicação clara, consistente e aplicável.
              </p>

              <p className="mt-6 text-lg font-semibold text-gray-900 border-l-4 border-[#FF4D00] pl-4">
                Se o mercado não entende o que você faz, você está perdendo oportunidade.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md relative h-[360px] md:h-[460px]">
              <Image
                src="/hero-posicionamento.png"
                alt="Clareza e direção estratégica"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </section>

        {/* PROBLEMA + QUANDO */}
        <section className="section">
          <div className="container grid md:grid-cols-2 gap-16">

            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Icon>?</Icon>
                O problema
              </h2>

              <p className="text-gray-700">
                Muitas empresas sabem o que fazem, mas não conseguem transformar isso em uma comunicação clara.
                Isso gera ruído, perda de oportunidades e dificuldade de posicionamento.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Icon>✓</Icon>
                Quando isso faz sentido
              </h2>

              <ul className="space-y-3 text-gray-800">
                <li className="flex gap-2"><span className="text-[#FF4D00]">✓</span> Sua empresa tem uma boa solução, mas dificuldade de explicar</li>
                <li className="flex gap-2"><span className="text-[#FF4D00]">✓</span> A comunicação é dispersa ou inconsistente</li>
                <li className="flex gap-2"><span className="text-[#FF4D00]">✓</span> O negócio depende demais do fundador</li>
                <li className="flex gap-2"><span className="text-[#FF4D00]">✓</span> O conteúdo existe, mas não sustenta posicionamento</li>
              </ul>
            </div>

          </div>
        </section>

        {/* TRANSFORMAÇÃO */}
        <section className="section">
          <div className="container">

            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Icon>→</Icon>
              O que muda com o trabalho
            </h2>

            <p className="mt-4 text-gray-700 max-w-2xl">
              A comunicação deixa de ser pontual e passa a ter direção.
              O que sua empresa faz se torna compreensível, consistente e aplicável em diferentes contextos.
            </p>

          </div>
        </section>

        {/* ENTREGA */}
        <section className="section">
          <div className="container">

            <div className="card-soft">

              <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
                <Icon>★</Icon>
                Você sai com isso estruturado
              </h3>

              <div className="grid md:grid-cols-4 gap-8">

                <div>
                  <div className="icon-circle mb-4">●</div>
                  <h4 className="font-semibold">Posicionamento claro</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Definição do que torna sua empresa relevante.
                  </p>
                </div>

                <div>
                  <div className="icon-circle mb-4">●</div>
                  <h4 className="font-semibold">Mensagens-chave</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Narrativas alinhadas ao público e objetivos.
                  </p>
                </div>

                <div>
                  <div className="icon-circle mb-4">●</div>
                  <h4 className="font-semibold">Forma consistente</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Discursos e conteúdos conectados ao posicionamento.
                  </p>
                </div>

                <div>
                  <div className="icon-circle mb-4">●</div>
                  <h4 className="font-semibold">Aplicações práticas</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Materiais prontos para uso no dia a dia.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="section-lg">
          <div className="container">

            <div className="bg-orange-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

              <div>
                <h2 className="text-xl font-bold">
                  Próximo passo
                </h2>

                <p className="text-gray-700 text-sm mt-1 max-w-md">
                  Posso fazer uma leitura inicial da sua comunicação e estruturar um caminho possível de trabalho.
                </p>
              </div>

              <Link
                href="/#contato"
                className="bg-[#FF4D00] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Solicitar análise inicial →
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
