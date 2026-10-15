import dynamic from "next/dynamic";
import Image from "next/image";

import ContactForm from "components/contact-form/ContactForm";
import Breadcrumbs from "components/ui/Breadcrumbs";
import Hours from "components/ui/Hours";
import Icon from "components/ui/Icon";
import Seo from "components/ui/Seo";
import { breadcrumbJsonLd, graph, webPageJsonLd } from "@/lib/seo";
import { ADDRESS, BUS_LINES, PHONE, SESSION, telHref } from "@/lib/site";

import styles from "styles/pages/informations.module.css";

// Leaflet a besoin du navigateur : la carte est chargée côté client.
const OpenStreetMap = dynamic(() => import("components/map/Map"), {
  ssr: false,
  loading: () => <div className={styles.mapPlaceholder} aria-hidden="true" />,
});

const PATH = "/informations";
const TITLE = "Infos pratiques et rendez-vous à Royan | Annie Maquet";
const DESCRIPTION =
  "Tarif, horaires, adresse et accès du cabinet de Gestalt thérapie d’Annie Maquet à Royan : 48 rue Alsace Lorraine, ascenseur, accès PMR. Prise de rendez-vous.";

const crumbs = [
  { name: "Accueil", path: "/" },
  { name: "Infos pratiques", path: PATH },
];

const jsonLd = graph(webPageJsonLd(PATH, TITLE, DESCRIPTION), breadcrumbJsonLd(crumbs));

export default function Informations() {
  return (
    <>
      <Seo title={TITLE} description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />

      <section className={styles.hero} aria-labelledby="page-title">
        <div className={`container ${styles.heroInner}`}>
          <Breadcrumbs items={crumbs} />
          <h1 id="page-title" className="title-xl rise">
            Infos pratiques et rendez-vous
          </h1>
          <p className="lead rise" style={{ animationDelay: "100ms", maxWidth: "40em" }}>
            Le cabinet se trouve au centre-ville de Royan, au premier étage avec ascenseur. Les séances ont lieu sur
            rendez-vous, du lundi au jeudi.
          </p>
        </div>
      </section>

      <section className={styles.main}>
        <div className={`container ${styles.layout}`}>
          <div className={styles.infos}>
            <div className={styles.pair}>
              <div className={styles.card}>
                <h2 className="label">Tarif</h2>
                <p className={styles.price}>{SESSION.price} €</p>
                <p>la séance individuelle d’une heure</p>
                <p className={styles.small}>
                  Non remboursée par l’Assurance maladie ; certaines mutuelles prévoient un forfait.
                </p>
              </div>
              <div className={styles.card}>
                <h2 className="label">Horaires</h2>
                <Hours />
              </div>
            </div>

            <div className={styles.card}>
              <h2 className="label">Adresse et accès</h2>
              <address className={styles.address}>
                <strong>
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.postalCode} {ADDRESS.city}
                </strong>
                {ADDRESS.access}
              </address>
              <div className={styles.map}>
                <OpenStreetMap />
              </div>
              <div className={styles.bus}>
                <h3>En bus Cara’Bus</h3>
                <ul>
                  {BUS_LINES.map((bus) => (
                    <li key={bus.line}>
                      <span className={styles.line} aria-label={`Ligne ${bus.line}`}>
                        {bus.line}
                      </span>
                      {bus.stops}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.photos}>
              <Image
                src="/images/cabinet1.jpg"
                alt="Le cabinet : canapé, fauteuil et table basse sur un tapis aux couleurs douces"
                width={614}
                height={472}
                sizes="(max-width: 900px) 46vw, 300px"
              />
              <Image
                src="/images/cabinet2.jpg"
                alt="Le coin fauteuil du cabinet, près de la fenêtre"
                width={614}
                height={480}
                sizes="(max-width: 900px) 46vw, 300px"
              />
            </div>
          </div>

          <div id="rendez-vous" className={styles.booking}>
            <h2 className="title-m">Demander un rendez-vous</h2>
            <a href={telHref} className={styles.phone}>
              <span className={styles.phoneIcon}>
                <Icon name="phone" size={20} />
              </span>
              <span>
                <span className={styles.phoneLabel}>Par téléphone</span>
                <span className={styles.phoneNumber}>{PHONE.display}</span>
              </span>
            </a>
            <p className="muted">Ou écrivez-moi, je vous réponds rapidement :</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
