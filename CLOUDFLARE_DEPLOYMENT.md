# Cloudflare Pages Deployment

Use these settings to host the Astro website on Cloudflare Pages.

## Project

- Platform: Cloudflare Pages
- Repository: `myiptvprime-prog/schweiz-iptv-net`
- Project name: `schweiz-iptv-net`
- Production branch: `main`
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js version: `20` or newer

## Domain

The website canonical domain is:

```txt
https://schweiz-iptv.net
```

Add these custom domains in Cloudflare Pages:

```txt
schweiz-iptv.net
www.schweiz-iptv.net
```

The included `_redirects` file redirects `www.schweiz-iptv.net` to `schweiz-iptv.net` for cleaner SEO.

## Important DNS Note

Cloudflare Pages can publish the website to a temporary `*.pages.dev` URL immediately.

For `schweiz-iptv.net` to work on Cloudflare Pages, the domain must either:

- use Cloudflare nameservers, or
- have DNS records at the active DNS provider pointing to the Cloudflare Pages custom domain target.

If Hostinger blocks changing nameservers, keep using Hostinger DNS until the domain is fully active/unlocked.
