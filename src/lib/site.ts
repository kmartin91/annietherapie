// Informations du cabinet, reprises partout (en-tête, pied de page, pages,
// données structurées) pour rester cohérentes.

export const PRACTITIONER = {
  name: "Annie Maquet",
  title: "Psychopraticienne",
  approach: "Gestalt thérapie",
  certification: "Gestalt praticienne certifiée",
  school: {
    name: "Institut Français de Formation Psychocorporelle (IFFP)",
    shortName: "IFFP",
    url: "https://gestalt-iffp.fr/",
  },
};

export const PHONE = {
  display: "06 95 34 76 31",
  e164: "+33695347631",
};

export const telHref = `tel:${PHONE.e164}`;

export const ADDRESS = {
  street: "48 rue Alsace Lorraine",
  postalCode: "17200",
  city: "Royan",
  region: "Charente-Maritime",
  access: "Premier étage avec ascenseur, conforme aux normes PMR",
  geo: { latitude: 45.625596340538095, longitude: -1.0313358446687353 },
};

export const SESSION = {
  price: 60,
  duration: "une heure",
  audience: "adultes, en séance individuelle",
};

// Jour : 0 = dimanche … 6 = samedi (comme Date#getDay).
export const OPENING_HOURS = [
  { day: 1, label: "Lundi", hours: "10 h – 19 h", opens: "10:00", closes: "19:00" },
  { day: 2, label: "Mardi", hours: "10 h – 19 h", opens: "10:00", closes: "19:00" },
  { day: 3, label: "Mercredi", hours: "10 h – 19 h", opens: "10:00", closes: "19:00" },
  { day: 4, label: "Jeudi", hours: "10 h – 19 h", opens: "10:00", closes: "19:00" },
  { day: 5, label: "Vendredi", hours: null, opens: null, closes: null },
  { day: 6, label: "Samedi", hours: null, opens: null, closes: null },
  { day: 0, label: "Dimanche", hours: null, opens: null, closes: null },
] as const;

export const BUS_LINES = [
  { line: "1", stops: "De Gaulle" },
  { line: "2", stops: "Chevalier" },
  { line: "3", stops: "Loti, Font Cherves, Notre-Dame" },
  { line: "5", stops: "Saint-Pierre" },
];

export const NEARBY_TOWNS = [
  "Royan",
  "Vaux-sur-Mer",
  "Saint-Georges-de-Didonne",
  "Saint-Palais-sur-Mer",
  "Saujon",
];

// À compléter avant la mise en ligne (mentions légales).
export const LEGAL = {
  siret: "[SIRET à compléter]",
  host: "Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis",
};

export const NAV = [
  { href: "/gestalt-therapie-royan", label: "La Gestalt thérapie" },
  { href: "/#consulter", label: "Pourquoi consulter" },
  { href: "/#seances", label: "Les séances" },
  { href: "/#annie", label: "Qui suis-je" },
  { href: "/informations", label: "Infos pratiques" },
];

export const APPOINTMENT_HREF = "/informations#rendez-vous";
