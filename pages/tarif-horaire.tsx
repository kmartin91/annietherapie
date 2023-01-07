import { Cormorant_Garamond } from "@next/font/google";
import dynamic from "next/dynamic";
import Head from "next/head";

import Button from "components/button/default/Button";
import Header from "components/header/Header";

import commonStyles from "sections/common/section.module.css";
import styles from "styles/pages/tarif.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
});

export default function Tarif() {
  const OpenStreetMap = dynamic(() => import("components/map/Map"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Annie MAQUET - Psychopraticienne / Gestalt Thérapie</title>
        <meta
          name="description"
          content="Annie MAQUET - Psychopraticienne / Gestalt Thérapie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${cormorant.className} ${commonStyles.container}`}>
        <section className={styles.section}>
          <Header />

          <main className={styles.main}>
            <h2>
              Horaire: Du lundi au vendredi de 9h à 19h le samedi de 9h à 12h
            </h2>
            <h2>Tarif: 60€ la séance (une heure)</h2>
            <p>48 rue alsace lorraine 17200 Royan</p>

            <OpenStreetMap />

            <Button className={commonStyles.buttonMain} href="/contact">
              Contact
            </Button>
          </main>
        </section>
      </div>
    </>
  );
}
