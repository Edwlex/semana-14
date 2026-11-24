const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mi-proyecto-seo.vercel.app";

// Simula una consulta a una base de datos o CMS (puedes cambiarlo por fetch() a tu API/CMS o consulta a BD)
async function obtenerArticulosDesdeCMS() {
  return [
    { slug: "guia-seo-nextjs", updatedAt: "2026-11-01" },
    { slug: "sitemap-dinamico", updatedAt: "2026-11-15" },
  ];
}

export async function GET() {
  const staticRoutes = [
    { path: "/", lastmod: "2026-11-24" },
    { path: "/blog", lastmod: "2026-11-24" },
    { path: "/contacto", lastmod: "2026-11-24" },
  ];

  const articulos = await obtenerArticulosDesdeCMS();

  const dynamicRoutes = articulos.map((post) => ({
    path: `/blog/${post.slug}`,
    lastmod: post.updatedAt,
  }));

  const allUrls = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${BASE_URL}${item.path}</loc>
    <lastmod>${item.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}