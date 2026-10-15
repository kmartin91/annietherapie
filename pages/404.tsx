import Link from "next/link";

import Icon from "components/ui/Icon";
import Seo from "components/ui/Seo";
import { APPOINTMENT_HREF, PHONE, telHref } from "@/lib/site";

import styles from "styles/pages/legal.module.css";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page introuvable | Annie Maquet, psychopraticienne à Royan"
        description="Cette page n’existe pas ou a été déplacée."
        path="/404"
        noindex
      />
      <section className={`container ${styles.page}`} aria-labelledby="page-title">
        <p className="label">Erreur 404</p>
        <h1 id="page-title" className="title-xl">
          Cette page n’existe pas
        </h1>
        <p className="lead">Le lien est peut-être ancien ou mal saisi.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Link href="/" className="btn btn--primary">
            Retour à l’accueil
            <Icon name="arrow" size={18} className="arrow" />
          </Link>
          <Link href={APPOINTMENT_HREF} className="btn btn--outline">
            Prendre rendez-vous
          </Link>
          <a href={telHref} className="btn btn--outline">
            {PHONE.display}
          </a>
        </div>
      </section>
    </>
  );
}
