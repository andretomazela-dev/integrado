"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function SistemaPosicionamento() {
  return (
    <div>
      <Header />

      <main className="bg-white">

        {/* HERO */}
        <section className="section-hero">
          <div className="container grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="uppercase text-sm text-orange-600 font-semibold">
                Serviço
              </p>

              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold">
                Sistema de Posicionamento Estratégico
              </h1>

              <p className="mt-5 text-lg text-gray-700">
                Transformo o que sua empresa faz em uma comunicação clara, consistente e aplicável.
              </p>

              <p className="mt-5 font-semibold border-l-4 border-[#FF4D00] pl-4">
                Se o mercado não entende o que você faz, você está perdendo oportunidade.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md relative h-[340px] md:h-[420px]">
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
        <section className="section-sm">
          <div className="container grid md:grid-cols-2 gap-12">

            {/* PROBLEMA */}
            <div>
              <h2 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-orange-600">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="8"></circle>
                    <path d="M12 8v2"></path>
                    <circle cx="12" cy="15" r="1"></circle>
                  </svg>
                </span>
                O problema
              </h2>

              <p className="text-gray-700">
                Muitas empresas sabem o que fazem, mas não conseguem transformar isso em uma comunicação clara.
                Isso gera ruído, perda de oportunidades e dificuldade de posicionamento.
              </p>
            </div>

            {/* QUANDO */}
            <div>
              <h2 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-orange-600">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12l4 4 8-8"></path>
                  </svg>
                </span>
                Quando isso faz sentido
              </h2>

              <ul className="space-y-2 text-gray-800">
                <li>• Sua empresa tem uma boa solução, mas dificuldade de explicar</li>
                <li>• A comunicação é dispersa ou inconsistente</li>
                <li>• O negócio depende demais do fundador</li>
                <li>• O conteúdo existe, mas não sustenta posicionamento</li>
              </ul>
            </div>

          </div>
        </section>

        {/* TRANSFORMAÇÃO + ENTREGA */}
        <section className="section-sm">
          <div className="container">

            {/* TÍTULO */}
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <span className="text-orange-600">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"></path>
                  <path d="M13 6l6 6-6 6"></path>
                </svg>
              </span>
              O que muda com o trabalho
            </h2>

            <p className="text-gray-700 mb-10 max-w-2xl">
              A comunicação deixa de ser pontual e passa a ter direção.
              O que sua empresa faz se torna compreensível, consistente e aplicável.
            </p>

            {/* BLOCO ENTREGA */}
            <div className="card-soft">

              {/* HEADER COM HIERARQUIA */}
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Você sai com isso estruturado
                </h3>
                <p className="text-gray-600 max-w-xl">
                  Clareza estratégica aplicada ao seu negócio, com direcionamento e execução.
                </p>
              </div>

              {/* GRID */}
              <div className="grid md:grid-cols-4 gap-8">

                {/* 1 */}
                <div>
                  <div className="mb-3 text-orange-600">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="8"></circle>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Posicionamento claro</h4>
                  <p className="text-sm text-gray-600">
                    Definição do que torna sua empresa relevante.
                  </p>
                </div>

                {/* 2 */}
                <div>
                  <div className="mb-3 text-orange-600">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Mensagens-chave</h4>
                  <p className="text-sm text-gray-600">
                    Narrativas alinhadas ao público e objetivos.
                  </p>
                </div>

                {/* 3 */}
                <div>
                  <div className="mb-3 text-orange-600">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2h9l5 5v15H6z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Forma consistente</h4>
                  <p className="text-sm text-gray-600">
                    Discursos e conteúdos conectados ao posicionamento.
                  </p>
                </div>

                {/* 4 */}
                <div>
                  <div className="mb-3 text-orange-600">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l4 4-4 4-4-4 4-4z"></path>
                      <path d="M2 12l4-4 4 4-4 4-4-4z"></path>
                      <path d="M12 22l4-4-4-4-4 4 4 4z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Aplicações práticas</h4>
                  <p className="text-sm text-gray-600">
                    Materiais prontos para uso no dia a dia.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">

            <div className="bg-orange-50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-4">

              <div>
                <h2 className="font-bold">Próximo passo</h2>
                <p className="text-gray-600 text-sm">
                  Posso estruturar um caminho possível de trabalho.
                </p>
              </div>

              <Link href="/#contato" className="btn btn-primary">
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
