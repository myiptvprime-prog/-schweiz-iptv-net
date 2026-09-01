export const deNav = [
  ["Abonnement", "#les-offres"],
  ["Sender", "#chaines"],
  ["Installation", "#installation"],
  ["IPTV legal", "#legal"],
  ["FAQ", "#faq"],
  ["Kontakt", "#contact"],
];

export const deSingleScreenPlans = [
  {
    id: "iptv-abo-12-monate",
    name: "IPTV Abo 12 Monate",
    price: "69 CHF",
    priceChf: 69,
    includedMonths: 12,
    discount: "-20%",
    badge: "Einstiegspreis",
    channels: "bis zu 19'000+ Sender",
    duration: "12 Monate",
    popular: false,
    features: [
      "Premium-Server",
      "HD, FHD und 4K Qualität",
      "Replay und VOD inklusive",
      "Für kompatible Geräte",
      "Support 24/7",
      "Kostenlose Updates",
    ],
  },
  {
    id: "iptv-abo-12-monate-2-monate-gratis",
    name: "IPTV Abo 12 Monate + 2 Monate gratis",
    price: "79 CHF",
    priceChf: 79,
    includedMonths: 14,
    discount: "-30%",
    badge: "Beliebt",
    channels: "bis zu 39'000+ Sender",
    duration: "14 Monate",
    popular: true,
    features: [
      "Premium-Server",
      "HD, FHD und 4K Qualität",
      "Replay und VOD inklusive",
      "Für kompatible Geräte",
      "Support 24/7",
      "Kostenlose Updates",
    ],
  },
  {
    id: "iptv-abo-12-monate-3-monate-gratis",
    name: "IPTV Abo 12 Monate + 3 Monate gratis",
    price: "89 CHF",
    priceChf: 89,
    includedMonths: 15,
    discount: "-35%",
    badge: "Max. Katalog",
    channels: "bis zu 39'000+ Sender",
    duration: "15 Monate",
    popular: false,
    features: [
      "Premium-Server",
      "HD, FHD und 4K Qualität",
      "Replay und VOD inklusive",
      "Für kompatible Geräte",
      "Support 24/7",
      "Erwachsenenkanäle inklusive (ab 18 Jahren)",
      "Kostenlose Updates",
    ],
  },
];

export const deMultiScreenPlans = [
  {
    id: "multi-screen-iptv-12-monate",
    name: "IPTV Abo 12 Monate - 2 Bildschirme",
    price: "89 CHF",
    priceChf: 89,
    includedMonths: 12,
    discount: "-20%",
    channels: "bis zu 19'000+ Sender",
    duration: "12 Monate",
    popular: false,
  },
  {
    id: "multi-screen-iptv-12-monate-2-monate-gratis",
    name: "IPTV Abo 12 Monate + 2 Monate gratis - 2 Bildschirme",
    price: "99 CHF",
    priceChf: 99,
    includedMonths: 14,
    discount: "-30%",
    channels: "bis zu 39'000+ Sender",
    duration: "14 Monate",
    popular: true,
  },
  {
    id: "multi-screen-iptv-12-monate-3-monate-gratis",
    name: "IPTV Abo 12 Monate + 3 Monate gratis - 2 Bildschirme",
    price: "119 CHF",
    priceChf: 119,
    includedMonths: 15,
    discount: "-35%",
    channels: "bis zu 39'000+ Sender",
    duration: "15 Monate",
    note: "Erwachsenenkanäle inklusive (ab 18 Jahren)",
    popular: false,
  },
];

export const deFeatures = [
  {
    icon: "channels",
    title: "+39'000 Sender",
    text: "Grosser Katalog nach Ländern, Sprachen und Kategorien, je nach Abo.",
  },
  {
    icon: "films",
    title: "+40'000 Filme",
    text: "VOD und Replay für kompatible Geräte und passende Apps.",
  },
  {
    icon: "support",
    title: "Support 24/7",
    text: "Hilfe jeden Tag, auch an Wochenenden und Feiertagen.",
  },
  {
    icon: "guarantee",
    title: "48 Stunden Garantie",
    text: "Zufrieden oder Geld zurück innerhalb von 48 Stunden nach Aktivierung.",
  },
];

export const deReviews = [
  {
    name: "Lukas M.",
    date: "Vor 5 Tagen",
    text: "Die Einrichtung auf Samsung Smart TV war schnell. Der Server läuft stabil und der Support hat sofort geholfen.",
  },
  {
    name: "Miriam S.",
    date: "Vor 1 Woche",
    text: "Gute Bildqualität in FHD und 4K. Besonders praktisch war die Hilfe per WhatsApp bei der App-Konfiguration.",
  },
  {
    name: "Daniel K.",
    date: "Vor 1 Woche",
    text: "Auf Android TV funktioniert das Abo flüssig. Die Senderliste ist übersichtlich und gut sortiert.",
  },
  {
    name: "Sandra H.",
    date: "Vor 2 Wochen",
    text: "Replay und VOD sind leicht zu finden. Das Team hat mich Schritt für Schritt durch die Installation geführt.",
  },
  {
    name: "Kemal A.",
    date: "Vor 2 Wochen",
    text: "Gutes Preis-Leistungs-Verhältnis für ein IPTV Abo in der Schweiz. Das Angebot mit 2 Gratismonaten passt gut.",
  },
  {
    name: "Laura G.",
    date: "Vor 3 Wochen",
    text: "Aktivierung auf Fire TV war unkompliziert. Der Support war auch spät am Abend erreichbar.",
  },
];

export const deDevices = [
  "Smart TV",
  "Android",
  "iOS / tvOS",
  "Windows",
  "Fire TV",
  "IPTV Box",
];

export const deChannelGroups = [
  ["Deutschschweiz", "deutschsprachige Sender und regionale Inhalte"],
  ["Romandie", "französischsprachige Sender je nach Katalog"],
  ["Tessin", "italienischsprachige Auswahl"],
  ["Deutschland", "deutsche Sender und allgemeine Kategorien"],
  ["Sport", "verfügbare Events je nach Rechten und Angebot"],
  ["Filme und Serien", "VOD und Filmkategorien je nach Abo"],
  ["Kinder", "Familien- und Kinderprogramme"],
  ["Dokumentationen", "Natur, Geschichte, Wissen und Entdeckung"],
  ["Nachrichten", "Schweizer und internationale Nachrichten"],
];

export const deFaq = [
  {
    q: "Welches IPTV Abo Schweiz ist für den Start sinnvoll?",
    a: "Für viele Nutzer ist das Abo 12 Monate + 2 Monate gratis ein guter Kompromiss aus Preis, Laufzeit und Katalog. Vor der Aktivierung empfehlen wir eine Kompatibilitätsprüfung.",
  },
  {
    q: "Funktioniert das IPTV Abo auf Smart TV, Android und iPhone?",
    a: "Ja, der Dienst ist für kompatible Smart TVs, Android, iOS/tvOS, Windows, Fire TV und IPTV Boxen vorgesehen.",
  },
  {
    q: "Ist der Support auf Deutsch verfügbar?",
    a: "Ja, der Support ist auf Deutsch verfügbar und hilft bei Installation, App-Auswahl und Aktivierung.",
  },
  {
    q: "Kann ich mein Abo auf mehreren Geräten nutzen?",
    a: "Das hängt vom gewählten Angebot ab. Multi-Screen-Angebote sind für Haushalte gedacht, die auf mehreren Bildschirmen schauen möchten.",
  },
  {
    q: "Ist IPTV in der Schweiz legal?",
    a: "Das hängt von den angebotenen Inhalten, den Rechten und den Bedingungen des Dienstes ab. Prüfen Sie vor einem Abo die Angaben zu Verfügbarkeit und Nutzungsbedingungen.",
  },
];
