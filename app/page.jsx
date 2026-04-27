export default function Home() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="w-full max-w-5xl mx-auto px-4 pt-20 pb-12">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Comunicação sob medida, para você ou seu negócio.
        </h1>

        <p className="mt-6 text-base md:text-lg text-neutral-700 max-w-2xl">
          Estrutura, clareza e direção para transformar o que você faz em uma comunicação que faz sentido e funciona.
        </p>
      </section>

      {/* BLOCO DESTACADO - NOVO SERVIÇO */}
      <section className="w-full max-w-5xl mx-auto px-4 mt-8">
        <div className="bg-neutral-100 rounded-2xl p-8 md:p-10 flex flex-col gap-6">

          <span className="text-xs uppercase tracking-wide text-neutral-500">
            Comece por aqui
          </span>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Sistema de Posicionamento Estratégico
            </h2>

            <p className="mt-3 text-base md:text-lg text-neutral-700 max-w-2xl">
              Estruturo o que sua empresa faz em uma comunicação clara, consistente e aplicável, com direção estratégica e uso inteligente de IA.
            </p>
          </div>

          <div>
            <a
              href="/sistema-de-posicionamento-estrategico"
              className="inline-block bg-[#FF4D00] text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:opacity-90 transition"
            >
              Ver como funciona
            </a>
          </div>

        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="w-full max-w-5xl mx-auto px-4 mt-16">
        <div className="grid md:grid-cols-3 gap-6">

          {/* Serviço 1 */}
          <div className="border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">
              Estratégia e Posicionamento
            </h3>
            <p className="text-sm text-neutral-700">
              Organização da comunicação e definição de direção estratégica para fortalecer a presença e a narrativa.
            </p>
          </div>

          {/* Serviço 2 */}
          <div className="border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">
              Conteúdo e Relacionamento
            </h3>
            <p className="text-sm text-neutral-700">
              Produção de conteúdo e construção de relacionamento com públicos estratégicos.
            </p>
          </div>

          {/* Serviço 3 */}
          <div className="border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">
              Engajamento e Cultura
            </h3>
            <p className="text-sm text-neutral-700">
              Comunicação interna e iniciativas para fortalecer cultura e engajamento.
            </p>
          </div>

        </div>
      </section>

      {/* CTA FINAL (opcional, mas recomendado) */}
      <section className="w-full max-w-5xl mx-auto px-4 mt-20 pb-20">
        <div className="flex flex-col gap-4">
          <p className="text-base md:text-lg max-w-2xl">
            Se fizer sentido para o momento da sua empresa, podemos conversar.
          </p>

          <a
            href="/contato"
            className="text-[#FF4D00] font-medium hover:underline"
          >
            Entrar em contato
          </a>
        </div>
      </section>

    </main>
  );
}
