const pages = [
  "/",
  "/iptv-abo-schweiz/",
  "/sender/",
  "/iptv-installation-smart-tv/",
  "/iptv-box-schweiz/",
  "/iptv-smart-tv/",
  "/iptv-android/",
  "/iptv-ios/",
  "/iptv-fire-tv/",
  "/iptv-windows/",
  "/iptv-deutschschweiz/",
  "/iptv-legal-schweiz/",
  "/bester-iptv-schweiz/",
  "/faq/",
  "/kontakt/",
  "/impressum/",
  "/datenschutz/",
  "/agb/",
  "/fr/",
  "/fr/abonnement-iptv-suisse/",
  "/fr/chaines/",
  "/fr/installation-iptv-smart-tv/",
  "/fr/box-iptv-suisse/",
  "/fr/iptv-smart-tv/",
  "/fr/iptv-android/",
  "/fr/iptv-ios/",
  "/fr/iptv-fire-tv/",
  "/fr/iptv-windows/",
  "/fr/iptv-suisse-romande/",
  "/fr/iptv-legal-suisse/",
  "/fr/meilleur-iptv-suisse/",
  "/fr/faq/",
  "/fr/contact/",
  "/fr/mentions-legales/",
  "/fr/confidentialite/",
  "/fr/conditions/",
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>https://schweiz-iptv.net${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
