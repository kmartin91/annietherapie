import { Cormorant_Garamond } from "@next/font/google";
import Head from "next/head";

import ContactForm from "components/contact-form/ContactForm";
import Header from "components/header/Header";

import styles from "styles/pages/contact.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <>
      <Head>
        <title>
          Annie MAQUET - Psychopraticienne / Gestalt Thérapie | Contact
        </title>
        <meta
          name="description"
          content="Annie MAQUET - Psychopraticienne / Gestalt Thérapie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${cormorant.className} ${styles.container}`}>
        <section className={`${styles.section} ${styles.sectionAlternate}`}>
          <Header />

          <main className={styles.main}>
            <h2>Contact</h2>
            <p className={styles.phone}>
              <a href="tel:0695347631">Téléphone: 06.95.34.76.31</a>
            </p>

            <ContactForm />
          </main>
        </section>
      </div>
    </>
  );
}
