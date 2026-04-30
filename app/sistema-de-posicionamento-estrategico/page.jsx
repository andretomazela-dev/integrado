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

              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-[1.02] tracking-[-0.04em]">
                Sistema de Posicionamento Estratégico
              </h1>

              <p className="mt-5 text-lg text-gray-700 leading-[1.8] max-w-xl">
                Organizo a comunicação do seu negócio para que o mercado
                entenda, confie e reconheça o valor do que você faz.
              </p>

              <p className="mt-6 font-semibold border-l-4 border-[#FF4D00] pl-4 text-[#1E293B] leading-[1.7]">
                Se o mercado não entende o que você faz,
                você está perdendo oportunidade.
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
              <h2 className="font-bold mb-4 flex items-center gap-2 text-[22px]">
                <span className="text-orange-600">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="8"></circle>
                    <path d="M12 8v2"></path>
                    <circle cx="12" cy="15" r="1"></circle>
                  </svg>
                </span>
                O problema
              </h2>

              <p className="text-gray-700 leading-[1.9]">
                Muitas empresas sabem o que fazem, mas não conseguem
                transformar isso em uma comunicação clara.
                Isso gera ruído, perda de oportunidades
                e dificuldade de posicionamento.
              </p>
            </div>

            {/* QUANDO */}
            <div>
              <h2 className="font-bold mb-4 flex items-center gap-2 text-[22px]">
                <span className="text-orange-600">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12l4 4 8-8"></path>
                  </svg>
                </span>
                Quando isso faz sentido
              </h2>

              <ul className="space-y-3 text-gray-800 leading-[1.8]">
                <li>• Sua empresa tem uma boa solução, mas dificuldade de explicar</li>
                <li>• A comunicação é dispersa ou inconsistente</li>
                <li>• O negócio depende demais do fundador</li>
                <li>• O conteúdo existe, mas não sustenta posicionamento</li>
              </ul>
            </div>

          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="section-sm pt-0">
          <div className="container">

            <div className="rounded-[32px] border border-[#E7E8EA] bg-[#F8FAFC] p-8 md:p-10">

              <div className="max-w-2xl">
                <p className="uppercase text-[11px] tracking-[0.18em] text-[#94A3B8]">
                  Como funciona
                </p>

                <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#0F172A]">
                  Um processo consultivo, estratégico e aplicável
                </h2>

                <p className="mt-5 text-[16px] leading-[1.9] text-[#475569]">
                  O trabalho é conduzido de forma remota,
                  em encontros estratégicos e etapas práticas de construção,
                  alinhadas ao momento e às necessidades de cada negócio.
                </p>
              </div>

              <div className="mt-10 grid md:grid-cols-4 gap-6">

                <div className="bg-white rounded-2xl p-6 border border-[#E7E8EA]">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#FF4D00] font-semibold">
                    Etapa 1
                  </span>

                  <h3 className="mt-3 font-semibold text-[#0F172A]">
                    Diagnóstico e escuta
                  </h3>

                  <p className="mt-3 text-sm leading-[1.8] text-[#64748B]">
                    Entendimento do negócio,
                    desafios, posicionamento atual e objetivos.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#E7E8EA]">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#FF4D00] font-semibold">
                    Etapa 2
                  </span>

                  <h3 className="mt-3 font-semibold text-[#0F172A]">
                    Organização da comunicação
                  </h3>

                  <p className="mt-3 text-sm leading-[1.8] text-[#64748B]">
                    Definição de narrativa,
                    diferenciais, mensagens-chave e direcionamentos.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#E7E8EA]">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#FF4D00] font-semibold">
                    Etapa 3
                  </span>

                  <h3 className="mt-3 font-semibold text-[#0F172A]">
                    Materiais e direcionamentos
                  </h3>

                  <p className="mt-3 text-sm leading-[1.8] text-[#64748B]">
                    Organização da comunicação em formatos,
                    canais e materiais utilizáveis.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#E7E8EA]">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#FF4D00] font-semibold">
                    Formato
                  </span>

                  <h3 className="mt-3 font-semibold text-[#0F172A]">
                    Processo consultivo
                  </h3>

                  <p className="mt-3 text-sm leading-[1.8] text-[#64748B]">
                    Projetos geralmente desenvolvidos
                    ao longo de 4 a 6 semanas.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* TRANSFORMAÇÃO + ENTREGA */}
        <section className="section-sm">
          <div className="container">

            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <span className="text-orange-600">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"></path>
                  <path d="M13 6l6 6-6 6"></path>
                </svg>
              </span>
              O que muda com o trabalho
            </h2>

            <p className="text-gray-700 mb-10 max-w-2xl leading-[1.9]">
              A comunicação deixa de depender de improviso
              e passa a sustentar posicionamento, percepção e crescimento.
            </p>

            <div className="card-soft">

              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-[-0.03em]">
                  Ao final do processo, você terá em mãos:
                </h3>

                <p className="text-gray-600 max-w-xl leading-[1.8]">
                  Comunicação mais organizada, consistente
                  e alinhada aos objetivos do negócio.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">

                {/* 1 */}
                <div>
                  <div className="mb-3 text-orange-600">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="8"></circle>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>

                  <h4 className="font-semibold mb-2">
                    Posicionamento claro
                  </h4>

                  <p className="text-sm text-gray-600 leading-[1.8]">
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

                  <h4 className="font-semibold mb-2">
                    Mensagens-chave
                  </h4>

                  <p className="text-sm text-gray-600 leading-[1.8]">
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

                  <h4 className="font-semibold mb-2">
                    Comunicação alinhada
                  </h4>

                  <p className="text-sm text-gray-600 leading-[1.8]">
                    Conteúdos, discurso e presença conectados ao posicionamento.
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

                  <h4 className="font-semibold mb-2">
                    Aplicações práticas
                  </h4>

                  <p className="text-sm text-gray-600 leading-[1.8]">
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

            <div className="rounded-[32px] bg-[#0F172A] p-8 md:p-10 text-white">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                <div className="max-w-2xl">
                  <p className="uppercase text-[11px] tracking-[0.16em] text-white/50">
                    Próximo passo
                  </p>

                  <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-[-0.03em]">
                    Vamos entender o momento do seu negócio e organizar a comunicação a partir disso.
                  </h2>

                  <p className="mt-5 text-white/70 leading-[1.9]">
                    O primeiro passo é entender o momento,
                    os desafios e os objetivos do negócio.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">

                  <Link
                    href="https://wiry-ironclad-70b.notion.site/ae99670c396f4122abe80725faa36792?pvs=105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center
                      rounded-full
                      bg-[#FF4D00]
                      px-6 py-3
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:opacity-90
                    "
                  >
                    Solicitar análise inicial →
                  </Link>

                  <Link
                    href="/repertorio"
                    className="
                      inline-flex items-center justify-center
                      rounded-full
                      border border-white/20
                      px-6 py-3
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:bg-white/10
                    "
                  >
                    Ver repertório
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
