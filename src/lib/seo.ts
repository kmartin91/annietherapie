import { ADDRESS, NEARBY_TOWNS, OPENING_HOURS, PHONE, PRACTITIONER, SESSION } from "@/lib/site";

export const SITE_URL = "https://psy-charente-maritime.fr";

export const SITE_NAME = "Annie Maquet, psychopraticienne à Royan";

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/media/og-annie-maquet.jpg`,
  width: 1200,
  height: 630,
  alt: "Annie Maquet, psychopraticienne en Gestalt thérapie à Royan",
};

export const buildCanonicalUrl = (path = "/"): string => {
  const clean = path.split("#")[0].split("?")[0] || "/";
  return `${SITE_URL}${clean === "/" ? "/" : clean}`;
};

const BUSINESS_ID = `${SITE_URL}/#cabinet`;
const PERSON_ID = `${SITE_URL}/#annie-maquet`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLdNode = Record<string, unknown>;

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Cabinet, praticienne et site : sur toutes les pages.
export const siteJsonLd = (): JsonLdNode => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: "Annie Maquet, cabinet de Gestalt thérapie",
      alternateName: "Annie Maquet Psychopraticienne",
      description:
        "Cabinet de Gestalt thérapie au centre-ville de Royan, en Charente-Maritime. Annie Maquet, psychopraticienne, accompagne les adultes en séance individuelle.",
      url: SITE_URL,
      telephone: PHONE.e164,
      image: DEFAULT_OG_IMAGE.url,
      priceRange: `${SESSION.price} €`,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        postalCode: ADDRESS.postalCode,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.region,
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: ADDRESS.geo.latitude,
        longitude: ADDRESS.geo.longitude,
      },
      areaServed: NEARBY_TOWNS.map((town) => ({ "@type": "City", name: town })),
      // Un créneau par plage horaire, avec les jours qui la partagent.
      openingHoursSpecification: Object.values(
        OPENING_HOURS.filter((day) => day.opens).reduce<Record<string, { opens: string; closes: string; days: string[] }>>(
          (slots, day) => {
            const key = `${day.opens}-${day.closes}`;
            slots[key] = slots[key] || { opens: day.opens as string, closes: day.closes as string, days: [] };
            slots[key].days.push(DAY_NAMES[day.day]);
            return slots;
          },
          {},
        ),
      ).map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: slot.days,
        opens: slot.opens,
        closes: slot.closes,
      })),
      founder: { "@id": PERSON_ID },
      sameAs: ["https://www.annuaire-therapeutes.com/therapeute/180593-annie-maquet-royan"],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: PRACTITIONER.name,
      jobTitle: `${PRACTITIONER.title}, ${PRACTITIONER.certification}`,
      worksFor: { "@id": BUSINESS_ID },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: PRACTITIONER.school.name,
        url: PRACTITIONER.school.url,
      },
      knowsAbout: ["Gestalt thérapie", "Thérapie psychocorporelle", "Accompagnement des adultes"],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "fr-FR",
      publisher: { "@id": BUSINESS_ID },
    },
  ],
});

export const webPageJsonLd = (path: string, title: string, description: string): JsonLdNode => ({
  "@type": "WebPage",
  "@id": `${buildCanonicalUrl(path)}#webpage`,
  url: buildCanonicalUrl(path),
  name: title,
  description,
  inLanguage: "fr-FR",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": BUSINESS_ID },
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]): JsonLdNode => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: buildCanonicalUrl(item.path),
  })),
});

export const faqJsonLd = (items: { q: string; a: string }[]): JsonLdNode => ({
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

export const graph = (...nodes: JsonLdNode[]): JsonLdNode => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
