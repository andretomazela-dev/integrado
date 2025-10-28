LAB integrado na App Router (Next.js):
- Rotas: /app/lab/page.jsx e /app/lab/[slug]/page.jsx
- Conteúdo dos posts em /content/lab-posts.js
- Imagens em /public/lab/*
- Estilos adicionais no final de app/globals.css (classe .content)

Caso queira adicionar o link no menu, inclua em components/Header.jsx um <Link href="/lab">LAB</Link> na navegação.