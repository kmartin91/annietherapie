import Link from "next/link";
import { ReactElement } from "react";

import { ADDRESS, NAV, OPENING_HOURS, PHONE, PRACTITIONER, telHref } from "@/lib/site";

import styles from "./Footer.module.css";

const Footer = (): ReactElement => {
  const year = new Date().getFullYear();
  const openDays = OPENING_HOURS.filter((day) => day.hours);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <p className={styles.name}>
            Annie <span className={styles.surname}>Maquet</span>
          </p>
          <p>
            {PRACTITIONER.title} en {PRACTITIONER.approach}
            <br />
            {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
            <br />
            <a href={telHref}>{PHONE.display}</a>
          </p>
        </div>
        <nav className={styles.links} aria-label="Pied de page">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.hours}>
          <p className={styles.hoursTitle}>Horaires</p>
          <p>
            Lundi au jeudi · {openDays[0].hours}
            <br />
            Sur rendez-vous
          </p>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} {PRACTITIONER.name} · <Link href="/mentions-legales">Mentions légales</Link>
        </span>
        <span>
          Site réalisé par{" "}
          <a href="https://kma.studio" target="_blank" rel="noopener">
            kma.studio
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
