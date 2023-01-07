import { Cormorant_Garamond } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";

import Button from "components/button/default/Button";
import styles from "components/header/header.module.css";

interface HeaderProps {
  isLandingPage?: boolean;
}

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
});

const Header: React.FC<HeaderProps> = ({
  isLandingPage,
}: HeaderProps): ReactElement => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const router = useRouter();
  const getLinkClass = (path: string) =>
    `${styles.link} ${router.pathname === path ? `${styles.activeLink}` : ""}`;

  const mobileMenuClassName = [
    cormorant.className,
    styles.mobileMenu,
    isOpenMenu && styles.mobileMenuOpen,
  ]
    .filter(Boolean)
    .join(" ");

  const headerClassName = [
    cormorant.className,
    styles.header,
    isLandingPage && styles.headerLanding,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClassName}>
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
      <div className={mobileMenuClassName}>
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
};

export default Header;
