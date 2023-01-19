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
  const isSunday = currentDay === 0;

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
      </Head>

      <div className={`${cormorant.className} ${commonStyles.container}`}>
        <section className={styles.section}>
          <Header />

          <div className={styles.main}>
            <h2>Informations pratiques</h2>
            <div
              className={styles.group}
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <h3>Tarif</h3>
              <div className={styles.row} itemProp="priceRange">
                <div className={styles.label}>Séance individuelle (1h)</div>
                <div className={styles.value}>60€</div>
              </div>
            </div>
            <div
              itemScope
              itemType="https://schema.org/LocalBusiness"
              className={styles.group}
            >
              <h3>Horaires</h3>
              <div itemProp="openingHours">
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
                <div
                  className={[
                    styles.row,
                    styles.rowCalendar,
                    isSunday && styles.today,
                    styles.sunday,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className={styles.label}>dimanche</div>
                  <div className={styles.value}>fermé</div>
                </div>
              </div>
            </div>
            <div
              className={styles.group}
              itemScope
              itemType="https://schema.org/Place"
            >
              <h3>Adresse du cabinet</h3>
              <div className={`${styles.row} ${styles.rowAddress}`}>
                <div className={styles.label} />
                <div className={styles.value} itemProp="address">
                  <p>48 rue Alsace Lorraine</p>
                  <p>17200 Royan</p>
                </div>
              </div>
            </div>

            <OpenStreetMap />
            <Button className={commonStyles.buttonMain} href="/contact">
              Contact
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tarif;
