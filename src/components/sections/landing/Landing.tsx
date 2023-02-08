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
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.play();
    }
  }, []);

  return (
    <section id="landing" className={commonStyles.section}>
      <video className={styles.landing} loop muted>
        <source src="/waves.mp4" />
      </video>

      <Header isLandingPage />

      <div className={styles.main}>
        <h2 className={styles.titleMain}>
          Cabinet de psychothérapie <br />
          <span className={styles.small}>Gestalt thérapie</span>
          <br />
          Royan
        </h2>
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
      </div>
    </section>
  );
};

export default Landing;
