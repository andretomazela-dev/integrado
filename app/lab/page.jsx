"use client";
import { useMemo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { labPosts } from "@/content/lab-posts";

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

const PAGE_SIZE = 9;

export default function Page() {
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const [qLocal, setQLocal] = useState(searchParams.get("q") || "");
  const [tagLocal, setTagLocal] = useState(searchParams.get("tag") || "");
  const [pageLocal, setPageLocal] = useState(parseInt(searchParams.get("page") || "1", 10));

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setQLocal(sp.get("q") || "");
    setTagLocal(sp.get("tag") || "");
    setPageLocal(parseInt(sp.get("page") || "1", 10));
  }, []);

  const filtered = useMemo(() => {
    let arr = [...labPosts];
    if (tagLocal) {
      arr = arr.filter(p => (p.tags || []).includes(tagLocal));
    }
    if (qLocal) {
      const q = qLocal.toLowerCase();
      arr = arr.filter(p =>
        p.title.toLowerCase().includes(q) ||
        (p.excerpt || "").toLowerCase().includes(q) ||
        (p.tags || []).some(t => t.toLowerCase().includes(q))
      );
    }
    return arr.sort((a,b) => new Date(b.date) - new Date(a.date));
  }, [qLocal, tagLocal]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(totalPages, Math.max(1, pageLocal));
  const paginated = filtered.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE);

  const updateQuery = (params) => {
    const sp = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([k,v]) => {
      if (v === "" || v == null) sp.delete(k); else sp.set(k,String(v));
    });
    const qs = sp.toString();
    window.history.replaceState(null, "", qs ? `/lab?${qs}` : "/lab");
  };

  return (
    <div>
      <Header />

      <main className="bg-white">
        <section className="container py-14 md:py-16">
          <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">LAB</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
            Ideias, aprendizados e bastidores.
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-prose">
            Um espaço para testar, documentar e compartilhar o que funciona em comunicação,
            jornalismo e projetos digitais. Conteúdos objetivos, exemplos práticos e bastidores.
          </p>

          {/* filtros */}
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <input
              type="search"
              placeholder="Pesquisar por título, tag…"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={qLocal}
              onChange={(e) => { setQLocal(e.target.value); updateQuery({ q: e.target.value, page: 1 }); }}
            />
            <input
              type="text"
              placeholder="Filtrar por tag (ex.: acessibilidade)"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={tagLocal}
              onChange={(e) => { setTagLocal(e.target.value); updateQuery({ tag: e.target.value, page: 1 }); }}
            />
            <div className="flex items-center justify-end text-sm text-gray-500">
              {filtered.length} resultado(s){tagLocal?` com #${tagLocal}`:""}
            </div>
          </div>

          {/* grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginated.map(post => (
              <Link key={post.slug} href={`/lab/${post.slug}`} className="card hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border border-gray-200">
                <div className="relative h-44">
                  <Image src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs uppercase tracking-wide text-gray-500">{formatDate(post.date)}</div>
                  <h3 className="mt-1 font-semibold text-lg leading-snug">{post.title}</h3>
                  {post.excerpt ? <p className="mt-2 text-gray-600 text-sm line-clamp-3">{post.excerpt}</p> : null}
                  {post.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map(t => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">#{t}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>

          {/* paginação */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                className="btn btn-outline rounded-xl"
                disabled={page<=1}
                onClick={() => { const p = Math.max(1,page-1); setPageLocal(p); updateQuery({ page: p }); }}
              >Anterior</button>
              <span className="text-sm text-gray-600">Página {page} de {totalPages}</span>
              <button
                className="btn btn-outline rounded-xl"
                disabled={page>=totalPages}
                onClick={() => { const p = Math.min(totalPages,page+1); setPageLocal(p); updateQuery({ page: p }); }}
              >Próxima</button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}