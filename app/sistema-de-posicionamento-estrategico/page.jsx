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
        <section className="container pt-12 pb-8 md:pt-16 md:pb-10 grid md:grid-cols-2 gap-12 items-center">

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

            <p className="mt-6 text-lg font-semibold text-gray-900">
              Se o mercado não entende o que você faz, você está perdendo oportunidade.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-card relative h-[300px] md:h-[400px] bg-gray-100 p-6">
            <Image
              src="/hero-posicionamento.png"
              alt="Clareza e direção estratégica"
              fill
              className="object-contain"
            />
          </div>

        </section>

        {/* PROBLEMA + QUANDO */}
        <section className="container grid md:grid-cols-2 gap-12 mt-12">

          <div>
            <h2 className="text-xl font-bold mb-3">
              O problema
            </h2>

            <p className="text-gray-700">
              Muitas empresas sabem o que fazem, mas não conseguem transformar isso em uma comunicação clara.
              Isso gera ruído, perda de oportunidades e dificuldade de posicionamento.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">
              Quando isso faz sentido
            </h2>

            <ul className="space-y-3 text-gray-800">
              <li>✔ Sua empresa tem uma boa solução, mas dificuldade de explicar</li>
              <li>✔ A comunicação é dispersa ou inconsistente</li>
              <li>✔ O negócio depende demais do fundador</li>
              <li>✔ O conteúdo existe, mas não sustenta posicionamento</li>
            </ul>
          </div>

        </section>

        {/* TRANSFORMAÇÃO */}
        <section className="container mt-16">

          <h2 className="text-2xl md:text-3xl font-bold">
            O que muda com o trabalho
          </h2>

          <p className="mt-4 text-gray-700 max-w-2xl">
            A comunicação deixa de ser pontual e passa a ter direção.
            O que sua empresa faz se torna compreensível, consistente e aplicável em diferentes contextos.
          </p>

        </section>

        {/* ENTREGA */}
        <section className="container mt-12">

          <div className="bg-gray-100 rounded-2xl p-8">

            <h3 className="text-xl font-semibold mb-6">
              Você sai com isso estruturado
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <h4 className="font-semibold">Posicionamento claro da empresa</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Definição do que torna sua empresa relevante.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Mensagens-chave organizadas</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Narrativas alinhadas ao seu público e objetivos.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Forma consistente de apresentar o negócio</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Discursos e conteúdos conectados ao posicionamento.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Aplicações práticas prontas para uso</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Materiais e direcionamentos aplicáveis no dia a dia.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="container pt-12 pb-16 md:pt-14 md:pb-20">

          <div className="bg-orange-50 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>
              <h2 className="text-2xl font-bold">
                Próximo passo
              </h2>

              <p className="mt-2 text-gray-700 max-w-md">
                Posso fazer uma leitura inicial da sua comunicação e estruturar um caminho possível de trabalho.
              </p>
            </div>

            <Link
              href="/#contato"
              className="bg-[#FF4D00] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Solicitar análise inicial
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
