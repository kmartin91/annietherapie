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
        <meta
          name="description"
          content="Prenez rendez-vous au cabinet de gestalt thérapie à Royan (Charente-Maritime) en ligne ou par téléphone. Grande plage horaire disponible."
        />
      </Head>

      <div className={`${cormorant.className} ${styles.container}`}>
        <section className={`${styles.section} ${styles.sectionAlternate}`}>
          <Header />

          <div className={styles.main}>
            <h2>Demande de rendez-vous</h2>
            <h3>Consultation sur rendez-vous</h3>
            <div itemScope itemType="https://schema.org/LocalBusiness">
              <p
                itemScope
                itemType="https://schema.org/ContactPoint"
                className={styles.phone}
              >
                <a href="tel:0695347631">
                  Par téléphone au :
                  <span itemProp="telephone" className={styles.phoneNumber}>
                    0695347631
                  </span>
                </a>
              </p>
            </div>

            <p className={styles.email}> ou par Email via le formulaire:</p>

            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
