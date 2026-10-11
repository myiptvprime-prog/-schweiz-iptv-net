export const deNav = [
  ["Abonnement", "#les-offres"],
  ["Sender", "#chaines"],
  ["Installation", "#installation"],
  ["IPTV legal", "#legal"],
  ["FAQ", "#faq"],
  ["Kontakt", "#contact"],
];

const dePlanFeatures = [
  "Tausende Live-Sender (CH/FR/DE/AT)",
  "HD, FHD und 4K je nach Verfügbarkeit",
  "Filme, Serien und Replay je nach Paket",
  "99% Server-Uptime",
  "VIP-Sportkanäle inklusive",
  "Smart TV, Android, iOS, Fire TV, Windows",
  "Einrichtungshilfe per WhatsApp",
  "Keine automatische Verlängerung",
];

export const deSingleScreenPlans = [
  {
    id: "iptv-abo-3-months",
    name: "IPTV Abo 3 Monate",
    price: "25 CHF",
    priceChf: 25,
    includedMonths: 3,
    discount: "CHF",
    badge: "Einstieg",
    channels: "Tausende Live-Sender (CH/FR/DE/AT)",
    duration: "3 Monate",
    popular: false,
    features: dePlanFeatures,
  },
  {
    id: "iptv-abo-6-months",
    name: "IPTV Abo 6 Monate",
    price: "35 CHF",
    priceChf: 35,
    includedMonths: 6,
    discount: "CHF",
    badge: "Beliebt",
    channels: "Tausende Live-Sender (CH/FR/DE/AT)",
    duration: "6 Monate",
    popular: true,
    features: dePlanFeatures,
  },
  {
    id: "iptv-abo-12-months",
    name: "IPTV Abo 12 Monate",
    price: "49 CHF",
    priceChf: 49,
    includedMonths: 12,
    discount: "CHF",
    badge: "Bester Preis",
    channels: "Tausende Live-Sender (CH/FR/DE/AT)",
    duration: "12 Monate",
    popular: false,
    features: dePlanFeatures,
  },
];

export const deMultiScreenPlans = deSingleScreenPlans;

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
    text: "Gutes Preis-Leistungs-Verhältnis für ein IPTV Abo in der Schweiz. Die CHF-Preise sind klar und einfach zu vergleichen.",
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
    a: "Wählen Sie je nach gewünschter Laufzeit: 3 Monate, 6 Monate oder 12 Monate. Alle drei Abos enthalten dieselben Vorteile; nur Dauer und Preis unterscheiden sich.",
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
    a: "Das hängt vom gewählten Angebot und der technischen Freigabe ab. Der Support prüft vor der Aktivierung, welche Nutzung für Ihr Gerät passt.",
  },
  {
    q: "Ist IPTV in der Schweiz legal?",
    a: "Das hängt von den angebotenen Inhalten, den Rechten und den Bedingungen des Dienstes ab. Prüfen Sie vor einem Abo die Angaben zu Verfügbarkeit und Nutzungsbedingungen.",
  },
];
