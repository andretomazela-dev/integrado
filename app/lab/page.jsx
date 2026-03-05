import { notFound } from "next/navigation";
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

export default function LabPost({ params }) {
  const post = labPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  const index = labPosts.findIndex((p) => p.slug === params.slug);
  const prev = labPosts[index - 1];
  const next = labPosts[index + 1];

  return (
    <div>
      <Header />

      <main className="bg-white">
        <article className="container py-14 md:py-16 max-w-3xl">

          {/* label */}
          <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">
            LAB
          </p>

          {/* título */}
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
            {post.title}
          </h1>

          {/* data */}
          <p className="mt-3 text-gray-500 text-sm">
            {formatDate(post.date)}
          </p>

          {/* imagem */}
          {post.cover && (
            <div className="mt-8 relative aspect-video rounded-2xl overflow-hidden bg-[#f3e9dd]">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>
          )}

          {/* conteúdo */}
          <div
            className="prose prose-lg mt-10 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* navegação */}
          <div className="mt-12 flex flex-wrap gap-3">

            <Link
              href="/lab"
              className="btn btn-outline rounded-xl"
            >
              ← Voltar ao LAB
            </Link>

            <Link
              href="/"
              className="btn btn-primary rounded-xl"
            >
              Ir para a Home
            </Link>

            {next && (
              <Link
                href={`/lab/${next.slug}`}
                className="ml-auto text-sm text-gray-600 hover:text-black border border-gray-200 rounded-xl px-4 py-2"
              >
                {next.title} →
              </Link>
            )}

          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
