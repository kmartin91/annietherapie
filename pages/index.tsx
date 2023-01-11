import { Cormorant_Garamond } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";

import Girl from "images/girl-beach.jpeg";
import Annie from "images/annie.jpeg";
import Hands from "images/hands.jpeg";
import Conclusion from "images/conclusion.jpeg";

import Landing from "sections/landing/Landing";
import Content from "sections/content/Content";

import styles from "styles/pages/home.module.css";
import commonStyles from "sections/common/section.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Annie MAQUET - Psychopraticienne / Gestalt Thérapie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Cabinet de gestalt thérapie dans le centre ville de Royan, accompagnement et soutien via une thérapie psychocorporelle."
        />
      </Head>

      <div className={`${cormorant.className} ${styles.container}`}>
        <Landing />

        <Content
          image={{
            src: Girl,
            alt: "Annie MAQUET - Psychopraticienne / Gestalt Thérapie",
          }}
          id="gestalt"
          nextId="#pourquoi"
          nextButtonLabel="Pourquoi consulter ?"
          isAlternate
          isCenter
          titleContent="Qu'est-ce que la Gestalt Thérapie ?"
        >
          <p className={commonStyles.text}>
            La Gestalt thérapie a été théorisée par le psychiatre et
            psychothérapeute Fritz Perls dans les années 50. C’est une thérapie
            psychocorporelle, relationnelle, existentielle et holistique. Le
            terme allemand « Gestalt», se traduit par forme, au sens de
            « prendre forme » : au fil des séances, le client se sculpte, se
            construit, s’organise.
          </p>
          <p className={commonStyles.text}>
            Cette psychothérapie porte un regard attentif sur la manière dont le
            client rentre en contact avec son environnement. Elle s’attarde donc
            sur les modalités de contact utilisées, sur la façon d’être en
            relation avec le monde dans l’ici et maintenant.
          </p>
        </Content>
        <Content
          image={{
            src: Conclusion,
            alt: "Annie MAQUET - Psychopraticienne / Gestalt Thérapie",
          }}
          isCenter
          titleContent="Pour quelles raisons consulter ?"
          nextButtonLabel="Déroulement d'une séance"
          nextId="#seance"
          id="pourquoi"
        >
          <p className={commonStyles.text}>
            Les clients viennent consulter pour des souffrances qui peuvent être
            psychiques et/ou psychosomatiques.
          </p>
          <div className={commonStyles.text}>
            Voici une liste non exhaustive des problématiques rencontrées au
            cours de la vie, qui peuvent amener à consulter :
            <ul className={commonStyles.listSeance}>
              <li>
                deuil, dépression, crise d&apos;angoisse, angoisse et anxiété,
                burn-out, stress,
              </li>
              <li>
                addictions, troubles du comportement alimentaire (boulimie,
                anorexie, hyperphagie, ...), troubles sexuels, phobies
              </li>
              <li>
                manque de confiance en soi et d&apos;estime de soi, difficultés
                relationnelles, insomnie, solitude,
              </li>
              <li> traumatismes, abus </li>
              <li>
                difficultés à s&apos;engager, jalousie, gestion des émotions,
                rupture amoureuse,
              </li>
              <li>changement de vie, quête de sens</li>
            </ul>
          </div>
        </Content>
        <Content
          image={{
            src: Hands,
            alt: "Annie MAQUET - Psychopraticienne / Gestalt Thérapie",
          }}
          id="seance"
          isAlternate
          nextId="#presentation"
          nextButtonLabel="Présentation"
          titleContent="Déroulement d'une séance"
          hasBigContent
        >
          <p className={commonStyles.text}>
            Suivre une psychothérapie, c’est s’engager pour soi-même. Les
            séances sont des rendez-vous avec vous-même dans un espace de
            liberté d&apos;expression où je vous accueille sans jugement et en
            toute confidentialité et bienveillance. Ensemble nous co-créons une
            alliance thérapeutique qui va soutenir votre évolution.
          </p>
          <p className={commonStyles.text}>
            En séance j’utilise fréquemment des médias créatifs. Le corps lui
            aussi est mis en mouvement, ce qui permet d’ancrer les expériences
            plus profondément qu’en passant uniquement par le mental (la
            parole).
          </p>
          <p className={commonStyles.text}>
            Au fils des séances, nous cheminerons ensemble à travers les mots
            déposés, et les expérimentations, tout en considérant
            l&apos;expression de votre corps et son implicite. Nous remettrons
            du mouvement là où des blocages se sont installés.
          </p>
          <p className={commonStyles.text}>
            Nous élargirons l&apos;horizon afin de vous aider à trouver un
            équilibre de vie plus en adéquation avec vos désirs. Cet équilibre
            résultant de la transformation de votre souffrance.
          </p>
        </Content>

        <Content
          image={{
            src: Annie,
            alt: "Annie MAQUET - Psychopraticienne / Gestalt Thérapie",
          }}
          titleContent="Présentation"
          id="presentation"
          hasBigContent
          nextId="#landing"
          nextButtonLabel="Revenir en haut"
        >
          <p className={commonStyles.text}>
            Fascinée par la complexité de l’être humain, tant par la mécanique
            du corps, que par celle du psychisme, mon premier métier a été celui
            d’infirmière, en Île-de-France.
          </p>
          <p className={commonStyles.text}>
            Mes expériences professionnelles, personnelles et notamment les
            psychothérapies que j’ai suivies, m’ont permis d&apos;évoluer vers
            le métier de psychopraticien.
          </p>
          <p className={commonStyles.text}>
            Sportive et passionnée par la danse, je me suis naturellement
            tournée vers des psychothérapies holistiques qui prennent autant en
            compte le corps que l’esprit. Après avoir expérimenté différentes
            pratiques psychocorporelles, j&apos;ai choisi d&apos;approfondir la
            Gestalt thérapie.
          </p>
          <p className={commonStyles.text}>
            Certifiée Gestalt praticienne, c’est à l’IFFP (l’Institut Français
            de Formation Psychocorporelle), que je me suis formée.
          </p>
          <p className={commonStyles.text}>
            J&apos;accompagne les clients adultes, en séance individuelle
            d&apos;une heure. Mon cabinet est situé dans{" "}
            <Link href="/informations/">le centre ville de Royan</Link>.
          </p>
          <p className={commonStyles.text}>
            Je suis engagée dans un processus de supervision et de formation
            continue. Cela me permet de maintenir un regard ouvert et critique
            sur ma pratique.
          </p>
        </Content>
      </div>
    </>
  );
}
