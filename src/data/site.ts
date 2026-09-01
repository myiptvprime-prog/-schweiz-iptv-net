export const site = {
  name: "Schweiz IPTV",
  domain: "schweiz-iptv.net",
  displayDomain: "schweiz-IPTV.net",
  url: "https://schweiz-iptv.net",
  email: "myiptvprime@gmail.com",
  whatsapp: "+447450624717",
  whatsappUrl:
    "https://wa.me/447450624717?text=Hello%2C%20Schweiz%20IPTV.%20Ich%20interessiere%20mich%20fuer%20ein%20IPTV%20Abo%20Schweiz.",
};

export const singleScreenPlans = [
  {
    id: "offre-iptv-12-mois",
    name: "Abonnement IPTV 12 mois",
    price: "69 CHF",
    priceChf: 69,
    includedMonths: 12,
    discount: "-20%",
    badge: "Prix découverte",
    channels: "jusqu'à 19'000+ chaînes",
    duration: "12 mois",
    popular: false,
    features: [
      "Serveur Premium",
      "Qualité HD, FHD et 4K",
      "Replay et VOD inclus",
      "Tous les appareils",
      "Support 24/7",
      "Mises à jour gratuites",
    ],
  },
  {
    id: "offre-iptv-12-mois-2-mois-gratuit",
    name: "Abonnement IPTV 12 mois + 2 mois gratuit",
    price: "79 CHF",
    priceChf: 79,
    includedMonths: 14,
    discount: "-30%",
    badge: "Plus populaire",
    channels: "jusqu'à 39'000+ chaînes",
    duration: "14 mois",
    popular: true,
    features: [
      "Serveur Premium",
      "Qualité HD, FHD et 4K",
      "Replay et VOD inclus",
      "Tous les appareils",
      "Support 24/7",
      "Mises à jour gratuites",
    ],
  },
  {
    id: "offre-iptv-12-mois-3-mois-gratuit",
    name: "Abonnement IPTV 12 mois + 3 mois gratuit",
    price: "89 CHF",
    priceChf: 89,
    includedMonths: 15,
    discount: "-35%",
    badge: "Max catalogue",
    channels: "jusqu'à 39'000+ chaînes",
    duration: "15 mois",
    popular: false,
    features: [
      "Serveur Premium",
      "Qualité HD, FHD et 4K",
      "Replay et VOD inclus",
      "Tous les appareils",
      "Support 24/7",
      "Option adulte disponible sur demande pour utilisateurs majeurs",
      "Mises à jour gratuites",
    ],
  },
];

export const multiScreenPlans = [
  {
    id: "multi-iptv-12-mois-2-ecrans",
    name: "Abonnement IPTV 12 mois - 2 écrans",
    price: "89 CHF",
    priceChf: 89,
    includedMonths: 12,
    discount: "-20%",
    channels: "jusqu'à 19'000+ chaînes",
    duration: "12 mois",
    popular: false,
  },
  {
    id: "multi-iptv-12-mois-2-mois-gratuit-2-ecrans",
    name: "Abonnement IPTV 12 mois + 2 mois gratuit - 2 écrans",
    price: "99 CHF",
    priceChf: 99,
    includedMonths: 14,
    discount: "-30%",
    channels: "jusqu'à 39'000+ chaînes",
    duration: "14 mois",
    popular: true,
  },
  {
    id: "multi-iptv-12-mois-3-mois-gratuit-2-ecrans",
    name: "Abonnement IPTV 12 mois + 3 mois gratuit - 2 écrans",
    price: "119 CHF",
    priceChf: 119,
    includedMonths: 15,
    discount: "-35%",
    channels: "jusqu'à 39'000+ chaînes",
    duration: "15 mois",
    popular: false,
  },
];

export const features = [
  {
    icon: "channels",
    title: "+39,000 chaînes",
    text: "Catalogue large organisé par pays, langues et catégories selon l'abonnement.",
  },
  {
    icon: "films",
    title: "+40,000 films",
    text: "VOD et replay inclus pour profiter de vos contenus compatibles.",
  },
  {
    icon: "support",
    title: "Support 24/7",
    text: "Assistance disponible tous les jours, y compris les jours fériés.",
  },
  {
    icon: "guarantee",
    title: "Garantie 48 heures",
    text: "Satisfait ou remboursé pendant 48h après activation.",
  },
];

export const reviews = [
  {
    name: "Marc D.",
    date: "Il y a 5 jours",
    text: "Installation rapide sur Smart TV Samsung. Le serveur est stable et le support a répondu en quelques minutes.",
  },
  {
    name: "Nadia B.",
    date: "Il y a 1 semaine",
    text: "Très bonne qualité en FHD et 4K. J'ai surtout apprécié l'aide par WhatsApp pour configurer l'application.",
  },
  {
    name: "Julien R.",
    date: "Il y a 1 semaine",
    text: "Service fluide sur Android TV, peu de coupures et un catalogue bien organise pour toute la famille.",
  },
  {
    name: "Sophie M.",
    date: "Il y a 2 semaines",
    text: "Le replay fonctionne bien et l'equipe m'a guidee jusqu'au premier lancement. Experience tres claire.",
  },
  {
    name: "Karim A.",
    date: "Il y a 2 semaines",
    text: "Bon rapport qualité-prix pour un abonnement en Suisse. Le forfait 12 mois + 2 mois est pratique.",
  },
  {
    name: "Laura G.",
    date: "Il y a 3 semaines",
    text: "Activation rapide sur Fire TV. Support disponible tard le soir, ce qui m'a vraiment aidé.",
  },
];

export const devices = [
  "Smart TV",
  "Android",
  "iOS / tvOS",
  "Windows",
  "Fire TV",
  "Boîtier IPTV",
];

export const deviceLinks = [
  ["Smart TV", "/iptv-smart-tv/"],
  ["Android", "/iptv-android/"],
  ["iOS / tvOS", "/iptv-ios/"],
  ["Windows", "/iptv-windows/"],
  ["Fire TV", "/iptv-fire-tv/"],
  ["Boîtier IPTV", "/box-iptv-suisse/"],
];

export const channelGroups = [
  ["Suisse romande", "chaînes régionales et francophones"],
  ["Suisse alémanique", "chaînes germanophones selon catalogue"],
  ["Suisse italienne", "sélection italophone"],
  ["France", "chaînes françaises et généralistes"],
  ["Sport", "événements disponibles selon droits de diffusion"],
  ["Cinéma et séries", "VOD et catégories cinéma selon abonnement"],
  ["Enfants", "programmes familiaux et jeunesse"],
  ["Documentaires", "nature, histoire, science et decouverte"],
  ["Info", "actualites suisses et internationales"],
];

export const faq = [
  {
    q: "Quel est le meilleur abonnement IPTV Suisse pour commencer ?",
    a: "Pour la plupart des clients, l'offre 12 mois + 2 mois gratuits offre le meilleur équilibre entre prix, durée et catalogue. Un test de compatibilité reste recommandé avant activation.",
  },
  {
    q: "L'abonnement fonctionne-t-il sur Smart TV, Android et iPhone ?",
    a: "Oui, le service est prévu pour Smart TV, Android, iOS/tvOS, Windows, Fire TV et boîtiers IPTV compatibles.",
  },
  {
    q: "Le support est-il disponible en français ?",
    a: "Oui, le support est disponible en français 24h/24 et 7j/7, y compris les jours fériés.",
  },
  {
    q: "Puis-je être remboursé si cela ne fonctionne pas ?",
    a: "Oui, une garantie satisfait ou remboursé de 48h est prévue si le service n'est pas compatible ou ne répond pas à vos attentes.",
  },
  {
    q: "Les chaînes sont-elles toujours les mêmes ?",
    a: "Le catalogue peut évoluer. Certaines chaînes, options de replay ou contenus VOD dépendent de la disponibilité technique et des droits de diffusion applicables.",
  },
];

export const nav = [
  ["Abonnements", "#les-offres"],
  ["Chaînes", "#chaines"],
  ["Installation", "#installation"],
  ["IPTV légal", "#legal"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];
