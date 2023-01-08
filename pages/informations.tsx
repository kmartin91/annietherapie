import { Cormorant_Garamond } from "@next/font/google";
import { ReactElement } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import Button from "components/button/default/Button";
import Header from "components/header/Header";

import commonStyles from "sections/common/section.module.css";
import styles from "styles/pages/informations.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const Tarif: React.FC = (): ReactElement => {
  const OpenStreetMap = dynamic(() => import("components/map/Map"), {
    ssr: false,
  });

  const currentDay = new Date().getDay();
  const isSaturday = currentDay === 6;

  return (
    <>
      <Head>
        <title>
          Annie MAQUET - Psychopraticienne / Gestalt Thérapie | Informations
          Pratiques
        </title>
        <meta
          name="description"
          content="Trouvez nos horaires, tarifs, et informations de contact pour prendre rendez-vous au cabinet de gestalt thérapie à Royan."
        />
        <meta
          name="keywords"
          content="gestalt,thérapie,royan,annie,maquet,gestalt thérapie,psychopraticien,psychopraticienne,psychothérapeute,psychocorporelle,psychothérapie,accompagnement,saujon,vaux-sur-mer,saint-palais-sur-mer,saint-augustin,saint-georges-de-didonne"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="French" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${cormorant.className} ${commonStyles.container}`}>
        <section className={styles.section}>
          <Header />

          <main className={styles.main}>
            <h1>Informations pratiques</h1>
            <div className={styles.group}>
              <h2>Tarif</h2>
              <div className={styles.row}>
                <div className={styles.label}>Séance individuelle (1h)</div>
                <div className={styles.value}>60€</div>
              </div>
            </div>
            <div className={styles.group}>
              <h2>Horaires</h2>
              {["lundi", "mardi", "mercredi", "jeudi", "vendredi"].map(
                (day, index) => {
                  const isCurrentDay = index + 1 === currentDay;
                  const rowClassName = [
                    styles.row,
                    styles.rowCalendar,
                    isCurrentDay && styles.today,
                  ]
                    .filter(Boolean)
                    .join(" ");
                  return (
                    <div key={day} className={rowClassName}>
                      <div className={styles.label}>{day}</div>
                      <div className={styles.value}>9h - 19h30</div>
                    </div>
                  );
                }
              )}
              <div
                className={[
                  styles.row,
                  styles.rowCalendar,
                  isSaturday && styles.today,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={styles.label}>samedi</div>
                <div className={styles.value}>9h - 12h30</div>
              </div>
            </div>
            <div className={styles.group}>
              <h2>Adresse</h2>
              <div className={`${styles.row} ${styles.rowAddress}`}>
                <div className={styles.label} />
                <div className={styles.value}>
                  48 rue Alsace Lorraine 17200 Royan
                </div>
              </div>

              <OpenStreetMap />
            </div>
            <Button className={commonStyles.buttonMain} href="/contact">
              Contact
            </Button>
          </main>
        </section>
      </div>
    </>
  );
};

export default Tarif;
