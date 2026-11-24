export const metadata = {
  title: "Contacto | Mi Sitio Optimizado",
  description: "Ponte en contacto con nosotros para consultas sobre desarrollo web, rendimiento y SEO.",
  keywords: ["contacto", "soporte web", "consultoría SEO"],
  openGraph: {
    title: "Contacto - Mi Sitio Optimizado",
    description: "Escríbenos para resolver tus dudas sobre optimización web y desarrollo.",
    url: "https://mi-sitio.com/contacto",
    siteName: "Mi Sitio Optimizado",
    images: ["/images/seo-image.png"],
    locale: "es_PE",
    type: "website",
  },
};

export default function ContactoPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <p>Escríbenos a contacto@mi-sitio.com para más información.</p>
    </main>
  );
}