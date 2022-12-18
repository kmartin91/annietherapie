import { Cormorant_Garamond } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Button from "../src/components/button/default/Button";
import Header from "../src/components/header/Header";
/* import bg from "../assets/bg/homepage.jpg"; */
import Girl from "../src/assets/bg/girl-beach.jpg";
import Annie from "../src/assets/bg/annie.jpeg";
import Hands from "../src/assets/bg/hands.jpg";
import Sand from "../src/assets/bg/sand2.jpg";
import Conclusion from "../src/assets/bg/conclusion.jpg";
import styles from "../src/styles/Home.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = 0.7;
      video.play();
    }
  }, []);
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

      <div className={`${cormorant.className} ${styles.container}`}>
        <section className={styles.section}>
          <video className={styles.landing} loop muted>
            <source src="/waves.mp4" />
          </video>

          <Header />

          <main className={styles.main}>
            <h1 className={styles.titleMain}>
              Gestalt Thérapie en Pays Royannais
            </h1>
            <Button className={styles.buttonMain} href="#gestalt">
              En savoir plus
            </Button>

            <p className={styles.citation}>
              <q>
                L’homme ne peut découvrir de nouveaux océans tant qu’il n’a pas
                le courage de perdre de vue la côte.
              </q>
              <span className={styles.author}>André Gide</span>
            </p>
          </main>
        </section>

        <section
          id="gestalt"
          className={`${styles.section} ${styles.sectionAlternate}`}
        >
          <Button className={styles.buttonContact} alternate href="/contact">
            Contact
          </Button>
          <div className={styles.content}>
            <h2 className={styles.titleContent}>La Gestalt Thérapie</h2>
            <div
              className={`${styles.textWithImageWrapper} ${styles.textWithImageWrapperAlternate} ${styles.textWithImageWrapperCenter}`}
            >
              <Image
                src={Girl}
                alt="Annie MAQUET - Psychopraticienne / Gestalt Thérapie"
                className={styles.image}
              />
              <div className={styles.texts}>
                <p className={styles.text}>
                  La Gestalt thérapie a été théorisée par le psychiatre et
                  psychothérapeute Fritz Perls dans les années 50. C’est une
                  thérapie relationnelle, existentielle et holistique. Le terme
                  allemand « Gestalt», se traduit par forme, au sens de
                  « prendre forme» :au fils des séances, le client se sculpte,
                  se construit, s’organise.
                </p>
                <p className={styles.text}>
                  Cette psychothérapie porte un regard attentif sur la manière
                  dont le client rentre en contact avec son environnement. Elle
                  s’attarde donc sur les modalités de contact utilisées, sur la
                  façon d’être en relation avec le monde dans l’ici et
                  maintenant.
                </p>
              </div>
            </div>
            <Button href="#seance" className={styles.sectionButton}>
              Déroulement d&apos;une séance
            </Button>
          </div>
        </section>
        <section
          id="seance"
          className={`${styles.section} ${styles.sectionClassic}`}
        >
          <Button className={styles.buttonContact} href="/contact">
            Contact
          </Button>
          <div className={styles.content}>
            <h2 className={styles.titleContent}>
              Déroullement d&apos;une séance
            </h2>
            <div className={styles.textWithImageWrapper}>
              <Image
                src={Hands}
                alt="Annie MAQUET - Psychopraticienne / Gestalt Thérapie"
                className={styles.image}
              />
              <div className={styles.texts}>
                <p className={styles.text}>
                  Suivre une psychothérapie, c’est s’engager pour soi même. Les
                  séances sont des rendez-vous avec vous même dans un espace de
                  liberté d&apos;expression où je vous accueille sans jugement
                  et en toute confidentialité et bienveillance. Ensemble nous
                  co-créons une alliance thérapeutique qui va soutenir votre
                  évolution.
                </p>
                <p className={styles.text}>
                  En séance j’utilise fréquemment des médias créatifs. Le corps
                  lui aussi est mis en mouvement, ce qui permet d’ancrer les
                  expériences plus profondément qu’en passant uniquement par le
                  mental (la parole).
                </p>
                <p className={styles.text}>
                  Les clients viennent consulter pour des souffrances qui
                  peuvent être psychiques et/ou psychosomatiques.
                </p>
                <div className={styles.text}>
                  Voici une liste non exhaustives des problématiques rencontrées
                  au cours de la vie, qui peuvent amener à consulter:
                  <ul className={styles.listSeance}>
                    <li>
                      Deuil, dépression, crise d&apos;angoisse, angoisse et
                      anxiété, burn-out, stress,
                    </li>
                    <li>
                      addictions, troubles du comportement alimentaires
                      (boulimie, anorexie, hyperphagie, ...), troubles sexuels,
                      phobies
                    </li>
                    <li>
                      manque de confiance en soi et d&apos;estime de soi,
                      difficultés relationnelles, insomnie, solitude,
                    </li>
                    <li> traumatismes, abus </li>
                    <li>
                      difficultés à s&apos;engager, jalousie, gestion des
                      émotions, rupture amoureuse,
                    </li>
                    <li>changement de vie, quête de sens</li>
                  </ul>
                </div>
                <Button href="#conclusion" className={styles.sectionButton}>
                  A définir
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="conclusion"
          className={`${styles.section} ${styles.sectionAlternate}`}
        >
          <Button className={styles.buttonContact} alternate href="/contact">
            Contact
          </Button>
          <div className={`${styles.content} ${styles.contentWithoutImage}`}>
            <div
              className={`${styles.textWithImageWrapper} ${styles.textWithImageWrapperAlternate} ${styles.textWithImageWrapperCenter}`}
            >
              <Image
                src={Conclusion}
                alt="Annie MAQUET - Psychopraticienne / Gestalt Thérapie"
                className={styles.image}
              />
              <div className={styles.texts}>
                <p className={styles.text}>
                  Au fils des séances, nous cheminerons ensemble à travers les
                  mots déposés, et les expérimentions, tout en considérant
                  l&apos;expression de votre corps et son implicite. Nous
                  remettrons du mouvement là ou le figement s&apos;est installé.
                </p>
                <p className={styles.text}>
                  Nous élargirons l&apos;horizon afin de trouver un équilibre de
                  vie plus en adéquation avec vos désirs, où la souffrance est
                  transcendée.
                </p>
              </div>
            </div>

            <Button
              href="#presentation"
              alternate
              className={styles.sectionButton}
            >
              Présentation
            </Button>
          </div>
        </section>
        <section
          id="presentation"
          className={`${styles.section} ${styles.sectionClassic}`}
        >
          <Button className={styles.buttonContact} href="/contact">
            Contact
          </Button>
          <div className={`${styles.content} ${cormorant.className}`}>
            <h2 className={styles.titleContent}>Présentation</h2>
            <div className={styles.textWithImageWrapper}>
              <Image
                src={Annie}
                alt="Annie MAQUET - Psychopraticienne / Gestalt Thérapie"
                className={styles.image}
              />
              <div className={styles.texts}>
                <p className={styles.text}>
                  Fascinée par la complexité de l’être humain, tant par la
                  mécanique du corps, que par celle de la psychée, mon premier
                  métier a était celui d’infirmière, en Ile de France.
                </p>
                <p className={styles.text}>
                  Mes expériences professionnelles, personnelles et notamment
                  les psychothérapies que j’ai suivi, m’ont permis d’oser
                  évoluer vers le métier de psychopraticien.
                </p>
                <p className={styles.text}>
                  Sportive et passionnée par la dance, j’ai été ravie de
                  découvrir des psychothérapies hollistiques qui considèrent
                  autant le corps que l’esprit. Après avoir expérimenté
                  différentes pratiques psychocorporelles, je me suis tournée
                  vers la Gestalt thérapie.
                </p>
                <p className={styles.text}>
                  Certifiée Gestalt praticienne, c’est à l’IFFP (l’Institut
                  Français de Formation Psychocorporelle), que j’ai été formée.
                </p>
                <div className={styles.text}>
                  Aujourd&apos;hui, j&apos;accompagne les jeunes adultes,
                  adultes et seniors, en séance individuelle d&apos;une heure.
                  Mon cabinet est situé dans le pays Royannais.
                  <p>
                    Ma pratique est supervisée, ce qui me permet de garder un
                    regard ouvert et critique sur mon travail et de
                    l&apos;enrichir des conseils avisés de mes pairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
