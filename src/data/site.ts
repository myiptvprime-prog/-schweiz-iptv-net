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

const planFeatures = [
  "Des milliers de chaînes en direct (CH/FR/DE/AT)",
  "HD, FHD et 4K selon disponibilité",
  "Films, séries et replay selon le forfait",
  "99% de disponibilité serveur",
  "Chaînes sport VIP incluses",
  "Smart TV, Android, iOS, Fire TV, Windows",
  "Aide à l'installation via WhatsApp",
  "Aucun renouvellement automatique",
];

export const singleScreenPlans = [
  {
    id: "iptv-abo-3-months",
    name: "IPTV ABO 3 Months",
    price: "25 CHF",
    priceChf: 25,
    includedMonths: 3,
    discount: "CHF",
    badge: "Découverte",
    channels: "Des milliers de chaînes en direct (CH/FR/DE/AT)",
    duration: "3 months",
    popular: false,
    features: planFeatures,
  },
  {
    id: "iptv-abo-6-months",
    name: "IPTV ABO 6 Months",
    price: "35 CHF",
    priceChf: 35,
    includedMonths: 6,
    discount: "CHF",
    badge: "Populaire",
    channels: "Des milliers de chaînes en direct (CH/FR/DE/AT)",
    duration: "6 months",
    popular: true,
    features: planFeatures,
  },
  {
    id: "iptv-abo-12-months",
    name: "IPTV ABO 12 Months",
    price: "49 CHF",
    priceChf: 49,
    includedMonths: 12,
    discount: "CHF",
    badge: "Meilleur prix",
    channels: "Des milliers de chaînes en direct (CH/FR/DE/AT)",
    duration: "12 months",
    popular: false,
    features: planFeatures,
  },
];

export const multiScreenPlans = singleScreenPlans;

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
    text: "Les prix en CHF sont clairs et les trois durées sont faciles à comparer avant de commander.",
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
    a: "Choisissez selon la durée souhaitée: 3 mois, 6 mois ou 12 mois. Les trois abonnements incluent les mêmes avantages; seuls la durée et le prix changent.",
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
