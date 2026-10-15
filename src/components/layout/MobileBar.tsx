import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

import Icon from "components/ui/Icon";
import { APPOINTMENT_HREF, PHONE, telHref } from "@/lib/site";

import styles from "./MobileBar.module.css";

// Sur téléphone : appeler ou prendre rendez-vous, toujours à portée de pouce.
// Sur l'accueil, la barre n'apparaît qu'une fois la vidéo passée (le hero a
// déjà ses boutons).
const MobileBar = (): ReactElement => {
  const isHome = useRouter().pathname === "/";
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) {
      return undefined;
    }
    const update = () => setPastHero(window.scrollY > window.innerHeight * 0.7);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isHome]);

  const hidden = isHome && !pastHero;

  return (
    <div className={`${styles.bar} ${hidden ? styles.hidden : ""}`} aria-hidden={hidden || undefined}>
      <a href={telHref} className={styles.call} aria-label={`Appeler le ${PHONE.display}`} tabIndex={hidden ? -1 : undefined}>
        <Icon name="phone" size={20} />
      </a>
      <Link href={APPOINTMENT_HREF} className={`btn btn--primary ${styles.book}`} tabIndex={hidden ? -1 : undefined}>
        Prendre rendez-vous
      </Link>
    </div>
  );
};

export default MobileBar;
