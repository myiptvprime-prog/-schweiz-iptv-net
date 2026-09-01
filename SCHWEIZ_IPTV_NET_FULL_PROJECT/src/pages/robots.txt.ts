export function GET() {
  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Sitemap: https://schweiz-iptv.net/sitemap-index.xml",
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
