import { ReactElement, useEffect } from "react";

import Button from "components/button/default/Button";
import Header from "components/header/Header";

import commonStyles from "sections/common/section.module.css";
import styles from "./landing.module.css";

const Landing: React.FC = (): ReactElement => {
  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = 0.7;
      video.play();
    }
  }, []);

  return (
    <section className={commonStyles.section}>
      <video className={styles.landing} loop muted>
        <source src="/waves.mp4" />
      </video>

      <Header isLandingPage />

      <main className={styles.main}>
        <h1 className={styles.titleMain}>Gestalt Thérapie en Pays Royannais</h1>
        <Button className={styles.buttonMain} href="#gestalt">
          En savoir plus
        </Button>

        <p className={styles.citation}>
          <q>
            L’homme ne peut découvrir de nouveaux océans tant qu’il n’a pas le
            courage de perdre de vue la côte.
          </q>
          <span className={styles.author}>André Gide</span>
        </p>
      </main>
    </section>
  );
};

export default Landing;
