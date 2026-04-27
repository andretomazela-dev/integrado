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

            <div>
              <h2 className="font-bold mb-3 flex items-center gap-2">
                <span className="icon text-orange-500">❓</span>
                O problema
              </h2>

              <p className="text-gray-700">
                Muitas empresas sabem o que fazem, mas não conseguem transformar isso em uma comunicação clara.
              </p>
            </div>

            <div>
              <h2 className="font-bold mb-3 flex items-center gap-2">
                <span className="icon text-orange-500">✔️</span>
                Quando isso faz sentido
              </h2>

              <ul className="space-y-2 text-gray-800">
                <li>✔ Sua empresa tem uma boa solução, mas dificuldade de explicar</li>
                <li>✔ Comunicação inconsistente</li>
                <li>✔ Dependência do fundador</li>
                <li>✔ Conteúdo sem posicionamento</li>
              </ul>
            </div>

          </div>
        </section>

        {/* TRANSFORMAÇÃO */}
        <section className="section-sm">
          <div className="container">

            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <span className="icon text-orange-500">🧭</span>
              O que muda com o trabalho
            </h2>

            <p className="text-gray-700 mb-8 max-w-2xl">
              A comunicação deixa de ser pontual e passa a ter direção.
            </p>

            <div className="card-soft">

              <h3 className="font-semibold mb-6 flex items-center gap-2">
                <span className="icon text-orange-500">🎁</span>
                Você sai com isso estruturado
              </h3>

              <div className="grid md:grid-cols-4 gap-6">

                <div>
                  <div className="text-orange-500 text-xl mb-2">🎯</div>
                  <h4 className="font-semibold">Posicionamento claro</h4>
                  <p className="text-sm text-gray-600">Definição do que torna sua empresa relevante.</p>
                </div>

                <div>
                  <div className="text-orange-500 text-xl mb-2">💬</div>
                  <h4 className="font-semibold">Mensagens-chave</h4>
                  <p className="text-sm text-gray-600">Narrativas alinhadas ao público e objetivos.</p>
                </div>

                <div>
                  <div className="text-orange-500 text-xl mb-2">📄</div>
                  <h4 className="font-semibold">Forma consistente</h4>
                  <p className="text-sm text-gray-600">Discursos e conteúdos conectados ao posicionamento.</p>
                </div>

                <div>
                  <div className="text-orange-500 text-xl mb-2">🧩</div>
                  <h4 className="font-semibold">Aplicações práticas</h4>
                  <p className="text-sm text-gray-600">Materiais prontos para uso no dia a dia.</p>
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
