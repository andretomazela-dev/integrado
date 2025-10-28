import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { labPosts } from "@/content/lab-posts";

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Page({ params }) {
  const post = labPosts.find(p => p.slug === params.slug);
  if (!post) {
    return (
      <div>
        <Header />
        <main className="container py-24">
          <h1 className="text-2xl font-bold">Post não encontrado</h1>
          <p className="mt-4"><Link href="/lab" className="text-orange-600 underline">Voltar ao LAB</Link></p>
        {/* Navegação entre posts */}
<section className="container pb-12">
  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="flex gap-3">
      <a href="/lab" className="btn btn-outline rounded-2xl hover:bg-orange-50">← Voltar ao LAB</a>
      <a href="/" className="btn btn-primary rounded-2xl">Ir para a Home</a>
    </div>
    <div className="flex gap-3">
      {prev && (
        <a href={`/lab/${prev.slug}`} className="btn btn-outline rounded-2xl hover:bg-orange-50">← {prev.title}</a>
      )}
      {next && (
        <a href={`/lab/${next.slug}`} className="btn btn-outline rounded-2xl hover:bg-orange-50">{next.title} →</a>
      )}
    </div>
  </div>
</section>

      </main>
        <Footer />
      </div>
    );
  }

  const related = labPosts
    .filter(p => p.slug !== post.slug && (p.tags || []).some(t => (post.tags || []).includes(t)))
    .slice(0, 3);

  // Navegação prev/next baseada na ordem cronológica (mais recente primeiro)
  const sortedPosts = [...labPosts].sort((a,b) => new Date(b.date) - new Date(a.date));
  const currentIndex = sortedPosts.findIndex(p => p.slug === post.slug);
  const prev = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const next = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  return (
    <div>
      <Header />

      <main className="bg-white">
        <section className="container py-8 md:py-10">
          <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">LAB</p>
          <h1 className="mt-1 text-3xl md:text-5xl font-extrabold leading-tight">{post.title}</h1>
          <div className="mt-2 text-sm text-gray-500">{formatDate(post.date)}</div>

          <div className="mt-6 rounded-2xl overflow-hidden shadow-card relative h-[300px] md:h-[420px]">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="100vw"
              priority
              className="object-top object-cover"
            />
          </div>
        </section>

        <section className="container pb-10 md:pb-14">
          <article className="content text-gray-800 text-lg leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {related.length ? (
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Você também pode curtir</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map(p => (
                  <Link key={p.slug} href={`/lab/${p.slug}`} className="card rounded-2xl overflow-hidden border border-gray-200">
                    <div className="relative h-36">
                      <Image src={p.cover} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="text-xs uppercase tracking-wide text-gray-500">{formatDate(p.date)}</div>
                      <h3 className="mt-1 font-semibold leading-snug">{p.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      {/* Navegação entre posts */}
<section className="container pb-12">
  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="flex gap-3">
      <a href="/lab" className="btn btn-outline rounded-2xl hover:bg-orange-50">← Voltar ao LAB</a>
      <a href="/" className="btn btn-primary rounded-2xl">Ir para a Home</a>
    </div>
    <div className="flex gap-3">
      {prev && (
        <a href={`/lab/${prev.slug}`} className="btn btn-outline rounded-2xl hover:bg-orange-50">← {prev.title}</a>
      )}
      {next && (
        <a href={`/lab/${next.slug}`} className="btn btn-outline rounded-2xl hover:bg-orange-50">{next.title} →</a>
      )}
    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return labPosts.map(p => ({ slug: p.slug }));
}

export const dynamicParams = false;
