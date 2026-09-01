# Same-Day Launch Checklist

## Build

1. Install dependencies: `pnpm install`
2. Build: `pnpm build`
3. Deploy `dist/` through Vercel or Cloudflare Pages.

## Domain

1. Point `schweiz-iptv.net` DNS to the hosting platform.
2. Force HTTPS.
3. Confirm both `https://schweiz-iptv.net/robots.txt` and `https://schweiz-iptv.net/sitemap-index.xml` return 200.

## Indexing

1. Add `schweiz-iptv.net` to Google Search Console.
2. Submit `https://schweiz-iptv.net/sitemap-index.xml`.
3. Request indexing for:
   - `/`
   - `/iptv-abo-schweiz/`
   - `/chaines/`
   - `/iptv-deutschschweiz/`
   - `/iptv-legal-suisse/`
   - `/bester-iptv-schweiz/`
4. Add Semrush Position Tracking for the priority keywords in `Semrush keyword map for schweiz-IPTV.net`.

## Before Publishing

Complete official legal company details in `/mentions-legales/`. Confirm which channel names can be promoted before adding logos or exact channel lists.
