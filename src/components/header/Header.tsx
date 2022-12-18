import { Cormorant_Garamond } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Button from "../button/default/Button";

import styles from "./Header.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
});

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const router = useRouter();
  const getLinkClass = (path: string) =>
    `${styles.link} ${router.pathname === path ? `${styles.activeLink}` : ""}`;

  return (
    <>
      <header className={`${cormorant.className} ${styles.header}`}>
        <h2 className={styles.title}>Annie MAQUET - Psychopraticienne</h2>
        <nav className={`${cormorant.className} ${styles.nav}`}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/" className={getLinkClass("/")}>
                Accueil
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/tarif-horaire"
                className={getLinkClass("/tarif-horaire")}
              >
                Tarif / Horaire
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.buttonContainer}>
          <Button className={styles.buttonHeader} href="/contact" alternate>
            Contact
          </Button>
        </div>
        <div
          className={`${styles.burgerIcon} ${
            isOpenMenu && styles.burgerIconClose
          }`}
          onClick={() => setIsOpenMenu(true)}
        />
      </header>
      <div
        className={`${cormorant.className} ${styles.mobileMenu} ${
          isOpenMenu && styles.mobileMenuOpen
        }`}
      >
        <h2 className={styles.title}>Annie MAQUET - Psychopraticienne</h2>

        <div
          className={`${styles.burgerIcon} ${
            isOpenMenu && styles.burgerIconClose
          }`}
          onClick={() => setIsOpenMenu(false)}
        />
        <nav className={`${cormorant.className} ${styles.nav}`}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/" className={getLinkClass("/")}>
                Accueil
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/tarif-horaire"
                className={getLinkClass("/tarif-horaire")}
              >
                Tarif / Horaire
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.buttonContainer}>
          <Button className={styles.buttonHeader} href="/contact">
            Contact
          </Button>
        </div>
      </div>
    </>
  );
}
