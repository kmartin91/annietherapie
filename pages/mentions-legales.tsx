import Breadcrumbs from "components/ui/Breadcrumbs";
import Seo from "components/ui/Seo";
import { breadcrumbJsonLd, graph } from "@/lib/seo";
import { ADDRESS, LEGAL, PHONE, PRACTITIONER } from "@/lib/site";

import styles from "styles/pages/legal.module.css";

const PATH = "/mentions-legales";
const crumbs = [
  { name: "Accueil", path: "/" },
  { name: "Mentions légales", path: PATH },
];

export default function MentionsLegales() {
  return (
    <>
      <Seo
        title="Mentions légales | Annie Maquet, psychopraticienne à Royan"
        description="Mentions légales et données personnelles du site d’Annie Maquet, psychopraticienne en Gestalt thérapie à Royan."
        path={PATH}
        jsonLd={graph(breadcrumbJsonLd(crumbs))}
      />
      <section className={`container ${styles.page}`} aria-labelledby="page-title">
        <Breadcrumbs items={crumbs} />
        <h1 id="page-title" className="title-xl">
          Mentions légales
        </h1>

        <h2 className="title-m">Éditrice du site</h2>
        <p>
          {PRACTITIONER.name}, {PRACTITIONER.title.toLowerCase()}
          <br />
          {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
          <br />
          Téléphone : {PHONE.display}
          <br />
          SIRET : {LEGAL.siret}
          <br />
          Directrice de la publication : {PRACTITIONER.name}
        </p>

        <h2 className="title-m">Hébergement</h2>
        <p>{LEGAL.host}</p>

        <h2 className="title-m">Données personnelles</h2>
        <p>
          Les informations envoyées par le formulaire de contact (nom, téléphone, e-mail, message) servent uniquement à
          répondre à votre demande. Elles sont transmises par e-mail via le service EmailJS et ne sont ni revendues ni
          utilisées à d’autres fins. Le formulaire est protégé contre les envois automatisés par hCaptcha.
        </p>
        <p>
          Vous pouvez demander l’accès, la rectification ou la suppression de vos données en contactant {PRACTITIONER.name}{" "}
          par téléphone ou par le formulaire.
        </p>

        <h2 className="title-m">Mesure d’audience</h2>
        <p>
          Le site utilise Plausible, un outil de mesure d’audience sans cookie qui ne collecte aucune donnée personnelle
          et ne suit pas les visiteurs d’un site à l’autre.
        </p>

        <h2 className="title-m">Conception</h2>
        <p>
          Site conçu et réalisé par{" "}
          <a href="https://kma.studio" target="_blank" rel="noopener">
            kma.studio
          </a>
          .
        </p>
      </section>
    </>
  );
}
