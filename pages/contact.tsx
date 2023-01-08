import { Cormorant_Garamond } from "@next/font/google";
import Head from "next/head";

import ContactForm from "components/contact-form/ContactForm";
import Header from "components/header/Header";

import styles from "styles/pages/contact.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export default function Contact() {
  return (
    <>
      <Head>
        <title>
          Annie MAQUET - Psychopraticienne / Gestalt Thérapie | Contact
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Prenez rendez-vous au cabinet de gestalt thérapie à Royan en ligne ou par téléphone. Grande plage horaire disponible."
        />
        <meta
          name="keywords"
          content="gestalt,thérapie,royan,annie,maquet,gestalt thérapie,psychopraticien,psychopraticienne,psychothérapeute,psychocorporelle,psychothérapie,accompagnement,saujon,vaux-sur-mer,saint-palais-sur-mer,saint-augustin,saint-georges-de-didonne"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="French" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${cormorant.className} ${styles.container}`}>
        <section className={`${styles.section} ${styles.sectionAlternate}`}>
          <Header />

          <main className={styles.main}>
            <h1>Demande de rendez-vous</h1>
            <h3>Consultation sur rendez-vous</h3>
            <p className={styles.phone}>
              <a href="tel:0695347631">
                Par Téléphone au :
                <span className={styles.phoneNumber}>0695347631</span>
              </a>
            </p>

            <p className={styles.email}> ou par Email via le formulaire:</p>

            <ContactForm />
          </main>
        </section>
      </div>
    </>
  );
}
