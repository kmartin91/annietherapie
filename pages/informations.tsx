import { Cormorant_Garamond } from "@next/font/google";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { ReactElement, Fragment } from "react";

import Button from "components/button/default/Button";
import Header from "components/header/Header";

import Cabinet1 from "images/cabinet1.jpg";
import Cabinet2 from "images/cabinet2.jpg";

import commonStyles from "sections/common/section.module.css";
import styles from "styles/pages/informations.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const images = [
  <Image
    key="image1"
    src={Cabinet1}
    alt="Cabinet de Psychothérapie - Royan - Charente-Maritime"
    className={styles.image}
  />,
  <Image
    key="image2"
    src={Cabinet2}
    alt="Cabinet de Psychothérapie - Royan - Charente-Maritime"
    className={styles.image}
  />,
];

const Tarif: React.FC = (): ReactElement => {
  const OpenStreetMap = dynamic(() => import("components/map/Map"), {
    ssr: false,
  });

  const currentDay = new Date().getDay();
  const isSaturday = currentDay === 6;
  const isSunday = currentDay === 0;
  const isFriday = currentDay === 5;
  const isThursday = currentDay === 4;

  return (
    <>
      <Head>
        <title>
          Annie MAQUET - Psychopraticienne / Gestalt Thérapie | Informations
          Pratiques
        </title>
        <meta
          name="description"
          content="Trouvez nos horaires, tarifs, et informations de contact pour prendre rendez-vous au cabinet de psychothérapie, gestalt thérapie à Royan."
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
              <div itemProp="openingHours" className={styles.openingHours}>
                {["lundi", "mardi", "mercredi"].map((day, index) => {
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
                      <div className={styles.value}>10h - 19h00</div>
                    </div>
                  );
                })}

                <div
                  className={[
                    styles.row,
                    styles.rowCalendar,
                    isThursday && styles.today,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className={styles.label}>jeudi</div>
                  <div className={styles.value}>13h - 19h00</div>
                </div>
                <div
                  className={[
                    styles.row,
                    styles.rowCalendar,
                    isFriday && styles.today,
                    styles.sunday,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className={styles.label}>vendredi</div>
                  <div className={styles.value}>fermé</div>
                </div>
                <div
                  className={[
                    styles.row,
                    styles.rowCalendar,
                    isSaturday && styles.today,
                    styles.sunday,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className={styles.label}>samedi</div>
                  <div className={styles.value}>fermé</div>
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
            <div className={styles.slider}>
              {images.map((src) => (
                <Fragment key={src.key}>{src}</Fragment>
              ))}
            </div>
            <div
              className={styles.group}
              itemScope
              itemType="https://schema.org/Place"
            >
              <h3>Se rendre au cabinet de Psychothérapie</h3>
              <div className={`${styles.row} ${styles.rowAddress}`}>
                <div className={styles.label} />
                <div className={styles.value} itemProp="address">
                  <p>48 rue Alsace Lorraine</p>
                  <p>17200 Royan</p>
                  <p>Charente-Maritime</p>
                </div>
              </div>
              <div className={styles.row}>
                Premier étage avec ascenseur
                <br />
                Conforme aux normes PMR ♿
              </div>

              <h4>Accès transport en commun Cara&apos;Bus</h4>

              <div className={styles.busInfo}>
                <div className={`${styles.row} ${styles.rowBus}`}>
                  <div className={`${styles.label} ${styles.labelNum}`}>1</div>
                  <div className={styles.value}>Arrêt De Gaulle</div>
                </div>
                <div className={`${styles.row} ${styles.rowBus}`}>
                  <div
                    className={`${styles.label} ${styles.labelNum} ${styles.labelNum2}`}
                  >
                    2
                  </div>

                  <div className={styles.value}>Arrêt Chevalier</div>
                </div>
                <div className={`${styles.row} ${styles.rowBus}`}>
                  <div
                    className={`${styles.label} ${styles.labelNum} ${styles.labelNum3}`}
                  >
                    3
                  </div>
                  <div className={styles.value}>Arrêt Loti</div>
                </div>
                <div className={`${styles.row} ${styles.rowBus}`}>
                  <div
                    className={`${styles.label} ${styles.labelNum} ${styles.labelNum3}`}
                  >
                    3
                  </div>
                  <div className={styles.value}>Arrêt Font Cherves</div>
                </div>
                <div className={`${styles.row} ${styles.rowBus}`}>
                  <div
                    className={`${styles.label} ${styles.labelNum} ${styles.labelNum3}`}
                  >
                    3
                  </div>
                  <div className={styles.value}>Arrêt Notre Dame</div>
                </div>
                <div className={`${styles.row} ${styles.rowBus}`}>
                  <div
                    className={`${styles.label} ${styles.labelNum} ${styles.labelNum5}`}
                  >
                    5
                  </div>
                  <div className={styles.value}>Arrêt St-Pierre</div>
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
