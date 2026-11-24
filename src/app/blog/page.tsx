export const metadata = {
  title: "Blog de Desarrollo y SEO | Mi Sitio Optimizado",
  description: "Artículos, guías prácticas y tutoriales sobre SEO técnico, sitemaps y optimización en Next.js.",
  keywords: ["blog SEO", "artículos Next.js", "sitemap XML", "optimización"],
  openGraph: {
    title: "Blog de Desarrollo y SEO - Mi Sitio Optimizado",
    description: "Lee nuestras últimas guías sobre posicionamiento web y rendimiento en Next.js.",
    url: "https://mi-sitio.com/blog",
    siteName: "Mi Sitio Optimizado",
    images: ["/images/seo-image.png"],
    locale: "es_PE",
    type: "website",
  },
};

const posts = [
  { slug: "guia-seo-nextjs", titulo: "Guía práctica de SEO en Next.js" },
  { slug: "sitemap-dinamico", titulo: "Cómo generar un sitemap dinámico en XML" },
];

export default function BlogPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <p className="mb-4">Artículos sobre SEO y desarrollo web.</p>
      <ul className="list-disc pl-5 space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>{post.titulo}</li>
        ))}
      </ul>
    </main>
  );
}