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

        {/* INTRO */}
        <section className="container py-12 md:py-16">
          <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">
            Serviço
          </p>

          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
            Sistema de Posicionamento Estratégico
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-prose">
            Transformo o que sua empresa faz em uma comunicação clara, consistente e aplicável.
          </p>

          <p className="mt-6 text-lg font-medium text-gray-900 max-w-prose">
            Se o mercado não entende o que você faz, você está perdendo oportunidade.
          </p>
        </section>

        {/* BLOCO PRINCIPAL */}
        <section className="container grid md:grid-cols-12 gap-10 items-start">

          {/* TEXTO */}
          <div className="md:col-span-7">

            {/* PROBLEMA */}
            <h2 className="text-2xl font-bold">
              O problema
            </h2>

            <p className="mt-4 text-gray-700">
              Muitas empresas sabem o que fazem, mas não conseguem transformar isso em uma comunicação clara.
              Isso gera ruído, perda de oportunidades e dificuldade de posicionamento.
            </p>

            {/* QUANDO FAZ SENTIDO */}
            <h2 className="text-2xl font-bold mt-10">
              Quando isso faz sentido
            </h2>

            <ul className="mt-4 space-y-3 text-gray-800">
              <li>Sua empresa tem uma boa solução, mas dificuldade de explicar</li>
              <li>A comunicação é dispersa ou inconsistente</li>
              <li>O negócio depende demais do fundador</li>
              <li>O conteúdo existe, mas não sustenta posicionamento</li>
            </ul>

          </div>

          {/* IMAGEM ÚNICA */}
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-card relative h-[320px] md:h-[420px]">
              <Image
                src="/Ilustracao_estrategia_comunicacao.png"
                alt="Estratégia de comunicação"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </section>

        {/* ESPAÇO */}
        <div className="container mt-12 md:mt-16" />

        {/* RESULTADO */}
        <section className="container max-w-3xl">

          <h2 className="text-2xl md:text-3xl font-bold">
            O que muda com o trabalho
          </h2>

          <p className="mt-4 text-gray-700">
            A comunicação deixa de ser pontual e passa a ter direção.
            O que sua empresa faz se torna compreensível, consistente e aplicável em diferentes contextos.
          </p>

          <h3 className="mt-8 font-semibold text-lg">
            Você sai com isso estruturado
          </h3>

          <ul className="mt-4 space-y-3 text-gray-800">
            <li>Posicionamento claro da empresa</li>
            <li>Mensagens-chave organizadas</li>
            <li>Forma consistente de apresentar o negócio</li>
            <li>Aplicações práticas prontas para uso</li>
          </ul>

        </section>

        {/* CTA */}
        <section className="container py-14 md:py-16">

          <div className="max-w-2xl">

            <h2 className="text-2xl md:text-3xl font-bold">
              Próximo passo
            </h2>

            <p className="mt-4 text-gray-700">
              Posso fazer uma leitura inicial da sua comunicação e estruturar um caminho possível de trabalho.
            </p>

            <Link
              href="/#contato"
              className="inline-block mt-6 bg-[#FF4D00] text-white font-semibold py-3 px-6 rounded-2xl hover:opacity-90 transition"
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
