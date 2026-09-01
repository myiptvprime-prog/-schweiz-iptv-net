export const routePairs = [
  ["/fr/", "/"],
  ["/fr/abonnement-iptv-suisse/", "/iptv-abo-schweiz/"],
  ["/fr/chaines/", "/sender/"],
  ["/fr/installation-iptv-smart-tv/", "/iptv-installation-smart-tv/"],
  ["/fr/box-iptv-suisse/", "/iptv-box-schweiz/"],
  ["/fr/iptv-smart-tv/", "/iptv-smart-tv/"],
  ["/fr/iptv-android/", "/iptv-android/"],
  ["/fr/iptv-ios/", "/iptv-ios/"],
  ["/fr/iptv-fire-tv/", "/iptv-fire-tv/"],
  ["/fr/iptv-windows/", "/iptv-windows/"],
  ["/fr/iptv-suisse-romande/", "/iptv-deutschschweiz/"],
  ["/fr/iptv-legal-suisse/", "/iptv-legal-schweiz/"],
  ["/fr/meilleur-iptv-suisse/", "/bester-iptv-schweiz/"],
  ["/fr/faq/", "/faq/"],
  ["/fr/contact/", "/kontakt/"],
  ["/fr/mentions-legales/", "/impressum/"],
  ["/fr/confidentialite/", "/datenschutz/"],
  ["/fr/conditions/", "/agb/"],
];

export const frToDe = new Map(routePairs);
export const deToFr = new Map(routePairs.map(([fr, de]) => [de, fr]));

export const localizedPath = (pathname: string, locale: "fr" | "de") => {
  if (locale === "de") return frToDe.get(pathname) || "/";
  return deToFr.get(pathname) || "/fr/";
};

export const alternateLinksFor = (pathname: string) => {
  const isFr = pathname.startsWith("/fr/");
  const fr = isFr ? pathname : localizedPath(pathname, "fr");
  const de = isFr ? localizedPath(pathname, "de") : pathname;
  return [
    { lang: "fr-CH", href: fr },
    { lang: "de-CH", href: de },
    { lang: "x-default", href: de },
  ];
};
