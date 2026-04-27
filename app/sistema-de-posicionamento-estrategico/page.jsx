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
        <section className="container pt-16 pb-12 grid md:grid-cols-2 gap-12 items-center">

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

          {/* IMAGEM SEM BORDA */}
          <div className="rounded-2xl overflow-hidden shadow-md relative h-[320px] md:h-[420px]">
            <Image
              src="/hero-posicionamento.png"
              alt="Clareza e direção estratégica"
              fill
              className="object-cover"
            />
          </div>

        </section>

        {/* PROBLEMA + QUANDO */}
        <section className="container grid md:grid-cols-2 gap-14 mt-12">

          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#FF4D00] text-[#FF4D00] text-sm">?</span>
              O problema
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Muitas empresas sabem o que fazem, mas não conseguem transformar isso em uma comunicação clara.
              Isso gera ruído, perda de oportunidades e dificuldade de posicionamento.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#FF4D00] text-[#FF4D00] text-sm">✓</span>
              Quando isso faz sentido
            </h2>

            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-2"><span className="text-[#FF4D00]">✓</span> Sua empresa tem uma boa solução, mas dificuldade de explicar</li>
              <li className="flex gap-2"><span className="text-[#FF4D00]">✓</span> A comunicação é dispersa ou inconsistente</li>
              <li className="flex gap-2"><span className="text-[#FF4D00]">✓</span> O negócio depende demais do fundador</li>
              <li className="flex gap-2"><span className="text-[#FF4D00]">✓</span> O conteúdo existe, mas não sustenta posicionamento</li>
            </ul>
          </div>

        </section>

        {/* TRANSFORMAÇÃO */}
        <section className="container mt-20">

          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#FF4D00] text-[#FF4D00] text-sm">→</span>
            O que muda com o trabalho
          </h2>

          <p className="mt-5 text-gray-700 max-w-2xl leading-relaxed">
            A comunicação deixa de ser pontual e passa a ter direção.
            O que sua empresa faz se torna compreensível, consistente e aplicável em diferentes contextos.
          </p>

        </section>

        {/* ENTREGA (CORRIGIDO) */}
        <section className="container mt-12">

          <div className="bg-gray-100 rounded-2xl p-10 mt-6">

            <h3 className="text-xl font-semibold mb-10 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#FF4D00] text-[#FF4D00] text-sm">★</span>
              Você sai com isso estruturado
            </h3>

            <div className="grid md:grid-cols-4 gap-8">

              {/* ITEM */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 mb-4 text-[#FF4D00]">
                  🎯
                </div>
                <h4 className="font-semibold">Posicionamento claro</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Definição do que torna sua empresa relevante.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 mb-4 text-[#FF4D00]">
                  💬
                </div>
                <h4 className="font-semibold">Mensagens-chave</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Narrativas alinhadas ao público e objetivos.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 mb-4 text-[#FF4D00]">
                  📄
                </div>
                <h4 className="font-semibold">Forma consistente</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Discursos e conteúdos conectados ao posicionamento.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 mb-4 text-[#FF4D00]">
                  🧩
                </div>
                <h4 className="font-semibold">Aplicações práticas</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Materiais prontos para uso no dia a dia.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="container pt-16 pb-20">

          <div className="bg-orange-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-4">
              <div className="bg-[#FF4D00] text-white rounded-full w-14 h-14 flex items-center justify-center text-xl">
                💬
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Próximo passo
                </h2>

                <p className="text-gray-700 text-sm mt-1 max-w-md">
                  Posso fazer uma leitura inicial da sua comunicação e estruturar um caminho possível de trabalho.
                </p>
              </div>
            </div>

            <Link
              href="/#contato"
              className="bg-[#FF4D00] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Solicitar análise inicial →
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
