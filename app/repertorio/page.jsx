"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RepertorioPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FCFCFA] text-[#0F172A]">

        {/* HERO */}
        <section className="border-b border-[#ECECEC] pt-32 pb-20">
          <div className="container">

            <div className="max-w-4xl">
              <span className="text-[12px] uppercase tracking-[0.18em] text-[#94A3B8]">
                REPORTAGENS · PROJETOS · COMUNICAÇÃO
              </span>

              <h1 className="mt-6 text-[42px] leading-[0.95] tracking-[-0.06em] font-[750] md:text-[72px]">
                Repertório
              </h1>

              <p className="mt-8 max-w-2xl text-[18px] leading-[1.9] text-[#64748B]">
                Reportagens, projetos editoriais e trabalhos desenvolvidos ao
                longo da minha trajetória em comunicação.
              </p>
            </div>

          </div>
        </section>

        {/* PUBLICAÇÕES */}
        <section
          id="publicacoes"
          className="border-t border-[#EAEAEA] py-24"
        >
          <div className="container">

            <div className="mb-10">
              <h2 className="text-[28px] tracking-[-0.03em] font-[750] text-[#0F172A]">
                Publicações
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* CARD */}
              <article className="rounded-[28px] border border-[#E6E6E6] bg-white p-8">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#94A3B8]">
                  GÊNERO & NÚMERO • 2025
                </span>

                <h3 className="mt-5 text-[36px] leading-[0.95] tracking-[-0.05em] font-[750] text-[#0F172A]">
                  Idosos LGBTQIA+ são empurrados de volta para o armário
                </h3>

                <p className="mt-5 text-[15px] leading-[1.9] text-[#64748B]">
                  Reportagem sobre envelhecimento, invisibilidade e exclusão
                  social da população LGBTQIA+.
                </p>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[#FF4D00]"
                >
                  Ler trabalho ↗
                </a>
              </article>

              {/* CARD */}
              <article className="rounded-[28px] border border-[#E6E6E6] bg-white p-8">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#94A3B8]">
                  VALOR ECONÔMICO • 2025
                </span>

                <h3 className="mt-5 text-[36px] leading-[0.95] tracking-[-0.05em] font-[750] text-[#0F172A]">
                  Clima encarece prêmios e muda lógica do resseguro
                </h3>

                <p className="mt-5 text-[15px] leading-[1.9] text-[#64748B]">
                  Especial sobre crise climática, perdas bilionárias e
                  transformação do mercado de seguros.
                </p>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[#FF4D00]"
                >
                  Ler trabalho ↗
                </a>
              </article>

              {/* CARD */}
              <article className="rounded-[28px] border border-[#E6E6E6] bg-white p-8">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#94A3B8]">
                  INFRAESTRUTURA & LOGÍSTICA • 2024
                </span>

                <h3 className="mt-5 text-[36px] leading-[0.95] tracking-[-0.05em] font-[750] text-[#0F172A]">
                  Adaptação urgente
                </h3>

                <p className="mt-5 text-[15px] leading-[1.9] text-[#64748B]">
                  Infraestrutura resiliente, eventos extremos e adaptação diante
                  do avanço da crise climática.
                </p>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[#FF4D00]"
                >
                  Ler trabalho ↗
                </a>
              </article>

              {/* CARD */}
              <article className="rounded-[28px] border border-[#E6E6E6] bg-white p-8">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#94A3B8]">
                  O GLOBO • 2024
                </span>

                <h3 className="mt-5 text-[36px] leading-[0.95] tracking-[-0.05em] font-[750] text-[#0F172A]">
                  Brasil quer seguir exemplo do G20
                </h3>

                <p className="mt-5 text-[15px] leading-[1.9] text-[#64748B]">
                  COP30, financiamento climático e o papel do Brasil nas
                  negociações internacionais.
                </p>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[#FF4D00]"
                >
                  Ler trabalho ↗
                </a>
              </article>

              {/* CARD */}
              <article className="rounded-[28px] border border-[#E6E6E6] bg-white p-8">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#94A3B8]">
                  VALOR ECONÔMICO • 2023
                </span>

                <h3 className="mt-5 text-[36px] leading-[0.95] tracking-[-0.05em] font-[750] text-[#0F172A]">
                  Caem os alertas de desmatamento
                </h3>

                <p className="mt-5 text-[15px] leading-[1.9] text-[#64748B]">
                  Queda do desmatamento na Amazônia, fiscalização ambiental e
                  ações dos governos federal e estaduais.
                </p>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[#FF4D00]"
                >
                  Ler trabalho ↗
                </a>
              </article>

              {/* CTA CARD */}
              <article className="rounded-[28px] bg-[#FF4D00] p-8 text-white shadow-[0_18px_40px_rgba(255,77,0,0.18)]">
                <span className="text-[11px] uppercase tracking-[0.16em] text-white/70">
                  PORTFÓLIO COMPLETO
                </span>

                <h3 className="mt-5 text-[34px] leading-[1] tracking-[-0.05em] font-[720]">
                  Quer ver mais projetos desenvolvidos ao longo da carreira?
                </h3>

                <a
                  href="https://drive.google.com/drive/folders/1ZSttp2dvNJzzaAQVb8IXh6YnRX-i0CcB?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-white"
                >
                  Acessar portfólio completo ↗
                </a>
              </article>

            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section
          id="experiencia"
          className="py-24"
        >
          <div className="container">

            <div className="mb-10">
              <h2 className="text-[28px] tracking-[-0.03em] font-[750] text-[#0F172A]">
                Experiência
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              <article className="rounded-[24px] border border-[#ECECEC] bg-white p-7">
                <h3 className="text-[24px] leading-[1] tracking-[-0.04em] font-[720] text-[#0F172A]">
                  Comunicação institucional
                </h3>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#64748B]">
                  Atuação em empresas e organizações com foco em posicionamento,
                  conteúdo institucional e relacionamento com públicos estratégicos.
                </p>
              </article>

              <article className="rounded-[24px] border border-[#ECECEC] bg-white p-7">
                <h3 className="text-[24px] leading-[1] tracking-[-0.04em] font-[720] text-[#0F172A]">
                  Jornalismo e conteúdo
                </h3>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#64748B]">
                  Produção de reportagens, especiais e conteúdos sobre economia,
                  clima, diversidade e transformação social.
                </p>
              </article>

              <article className="rounded-[24px] border border-[#ECECEC] bg-white p-7">
                <h3 className="text-[24px] leading-[1] tracking-[-0.04em] font-[720] text-[#0F172A]">
                  Estratégia e posicionamento
                </h3>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#64748B]">
                  Estruturação de narrativas, clareza estratégica e direção de
                  comunicação para marcas e profissionais.
                </p>
              </article>

              <article className="rounded-[24px] border border-[#ECECEC] bg-white p-7">
                <h3 className="text-[24px] leading-[1] tracking-[-0.04em] font-[720] text-[#0F172A]">
                  Comunicação digital
                </h3>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#64748B]">
                  Experiência com redes sociais, newsletters, sites institucionais
                  e conteúdo multiplataforma.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="bg-[#F4F7FA] py-24">
          <div className="container">

            <div className="mb-12">
              <h2 className="text-[28px] tracking-[-0.03em] font-[750] text-[#0F172A]">
                Depoimentos
              </h2>

              <p className="mt-4 max-w-2xl text-[15px] leading-[1.9] text-[#64748B]">
                Recomendações de profissionais que acompanharam meu trabalho em
                comunicação corporativa, conteúdo e posicionamento institucional.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">

              <article className="rounded-[28px] bg-white border border-[#ECECEC] p-8">
                <p className="text-[18px] leading-[1.9] text-[#0F172A]">
                  “Profissional competente, ágil e estratégico, com forte capacidade
                  de integrar comunicação, conteúdo e relacionamento.”
                </p>

                <div className="mt-8 border-t border-[#ECECEC] pt-6">
                  <h3 className="text-[17px] font-semibold text-[#0F172A]">
                    Erika Martins de Figueiredo
                  </h3>

                  <p className="mt-1 text-[14px] text-[#64748B]">
                    Gerente de Comunicação & Relacionamento
                  </p>
                </div>
              </article>

              <article className="rounded-[28px] bg-white border border-[#ECECEC] p-8">
                <p className="text-[18px] leading-[1.9] text-[#0F172A]">
                  “Extremamente competente, ágil e determinado. Um profissional
                  colaborativo e muito respeitado no trabalho em equipe.”
                </p>

                <div className="mt-8 border-t border-[#ECECEC] pt-6">
                  <h3 className="text-[17px] font-semibold text-[#0F172A]">
                    Elaine Nishiwaki
                  </h3>

                  <p className="mt-1 text-[14px] text-[#64748B]">
                    Diretora de Comunicação Corporativa
                  </p>
                </div>
              </article>

              <article className="rounded-[28px] bg-white border border-[#ECECEC] p-8">
                <p className="text-[18px] leading-[1.9] text-[#0F172A]">
                  “Profissional proativo, criativo e comprometido, com visão sistêmica,
                  excelente texto e forte responsabilidade com prazos.”
                </p>

                <div className="mt-8 border-t border-[#ECECEC] pt-6">
                  <h3 className="text-[17px] font-semibold text-[#0F172A]">
                    Silvia Alves Paz
                  </h3>

                  <p className="mt-1 text-[14px] text-[#64748B]">
                    Marketing e Comunicação em Saúde
                  </p>
                </div>
              </article>

            </div>

            <div className="mt-10">
              <a
                href="https://www.linkedin.com/in/tomazela/details/recommendations/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D8DEE7] bg-white px-5 py-3 text-[14px] font-medium text-[#FF4D00] transition hover:border-[#FF4D00]"
              >
                Ver recomendações no LinkedIn ↗
              </a>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container">

            <div
              className="
                grid items-center gap-12
                rounded-[36px]
                border border-[#1E293B]
                bg-[#0F172A]
                px-8 py-10
                md:px-14 md:py-14
                lg:grid-cols-2
                overflow-hidden
              "
            >

              {/* TEXTO */}
              <div className="max-w-[620px]">
                <h2 className="text-[32px] md:text-[44px] leading-[1.04] tracking-[-0.045em] font-[720] text-white">
                  Precisa organizar a comunicação do seu negócio, projeto ou marca pessoal?
                </h2>

                <p className="mt-6 text-[17px] leading-[1.9] text-white/70 max-w-[540px]">
                  Posso ajudar com posicionamento, clareza de comunicação,
                  conteúdo estratégico e estruturação narrativa.
                </p>

                <a
                  href="/#contato"
                  className="
                    mt-9 inline-flex items-center justify-center
                    rounded-full
                    bg-[#FF4D00]
                    px-7 py-3.5
                    text-[14px]
                    font-medium
                    text-white
                    transition
                    hover:opacity-90
                  "
                >
                  Vamos conversar
                </a>
              </div>

              {/* IMAGEM */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/repertorio/cta-repertorio.png"
                  alt="Comunicação estratégica"
                  className="w-full max-w-[430px] h-auto object-contain"
                />
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
