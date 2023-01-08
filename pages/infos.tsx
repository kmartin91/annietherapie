import { Cormorant_Garamond } from "@next/font/google";
import dynamic from "next/dynamic";
import Head from "next/head";

import Button from "components/button/default/Button";
import Header from "components/header/Header";

import commonStyles from "sections/common/section.module.css";
import styles from "styles/pages/infos.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
});

export default function Tarif() {
  const OpenStreetMap = dynamic(() => import("components/map/Map"), {
    ssr: false,
  });

  const currentDay = new Date().getDay();
  const isSaturday = currentDay === 6;

  return (
    <>
      <Head>
        <title>Annie MAQUET - Psychopraticienne / Gestalt Thérapie</title>
        <meta
          name="description"
          content="Annie MAQUET - Psychopraticienne / Gestalt Thérapie | Informations Pratiques"
        />
        <meta
          name="description"
          content="Cabinet de gestalt thérapie dans le centre ville de Royan, accompagnement et soutien via une thérapie psychocorporelle."
        />
        <meta
          name="keywords"
          content="gestalt,thérapie,royan,annie,maquet,gestalt thérapie,psychopraticien,psychopraticienne,psychothérapeute, psychocorporelle,psychothérapie,accompagnement,saujon,vaux-sur-mer,saint-palais-sur-mer,saint-augustin,saint-georges-de-didonne,étaules,le gua,les mathes "
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
            <div className={styles.group}>
              <h2>Tarif</h2>
              <div className={styles.row}>
                <div className={styles.label}>Séance individuelle (1h)</div>
                <div className={styles.value}>60€</div>
              </div>
            </div>
            <div className={styles.group}>
              <h2>Horaire</h2>
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
                  48 rue alsace lorraine 17200 Royan
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
}
