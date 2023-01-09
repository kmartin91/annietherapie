import { Cormorant_Garamond } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";

import Button from "components/button/default/Button";
import styles from "components/header/Header.module.css";

interface HeaderProps {
  isLandingPage?: boolean;
}

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
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

  const burgerIconClassName = [
    styles.burgerIcon,
    isOpenMenu && styles.burgerIconClose,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClassName}>
        <h1 className={styles.title}>
          <Link href={isLandingPage ? "#presentation" : "/#presentation"}>
            Annie MAQUET
          </Link>
          - Psychopraticienne
        </h1>
        <nav className={`${cormorant.className} ${styles.nav}`}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/" className={getLinkClass("/")}>
                Accueil
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/informations"
                className={getLinkClass("/informations")}
              >
                Informations pratiques
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
          className={burgerIconClassName}
          onClick={() => setIsOpenMenu(true)}
        />
      </header>
      <div className={mobileMenuClassName}>
        <h2 className={styles.title}>Annie MAQUET - Psychopraticienne</h2>

        <div
          className={burgerIconClassName}
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
                href="/informations"
                className={getLinkClass("/informations")}
              >
                Informations pratiques
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/contact" className={getLinkClass("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
