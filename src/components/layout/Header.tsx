import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

import Icon from "components/ui/Icon";
import { APPOINTMENT_HREF, NAV, PHONE, telHref } from "@/lib/site";

import styles from "./Header.module.css";

const Header = (): ReactElement => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isHome = router.pathname === "/";
  // Accueil : en-tête transparent au-dessus de la vidéo, blanc une fois passé.
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    if (!isHome) {
      return undefined;
    }
    const update = () => setOverHero(window.scrollY < window.innerHeight - 90);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  const overlay = isHome && overHero && !open;

  useEffect(() => {
    const close = () => setOpen(false);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    router.events.on("routeChangeStart", close);
    router.events.on("hashChangeStart", close);
    document.addEventListener("keydown", onKey);
    return () => {
      router.events.off("routeChangeStart", close);
      router.events.off("hashChangeStart", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [router.events]);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
  }, [open]);

  const isCurrent = (href: string) => router.pathname === href;

  return (
    <header className={`${styles.header} ${overlay ? styles.overlay : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Annie Maquet, psychopraticienne à Royan : accueil">
          <span className={styles.name}>
            Annie <span className={styles.surname}>Maquet</span>
          </span>
          <span className={styles.tagline}>
            Psychopraticienne<span className={styles.taglineLong}> · Gestalt thérapie</span> · Royan
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href={APPOINTMENT_HREF} className={`btn btn--primary btn--sm ${styles.cta}`}>
          Prendre rendez-vous
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>

      <div id="menu-mobile" className={styles.mobile} hidden={!open}>
        <nav aria-label="Menu" className={styles.mobileNav}>
          <Link href="/">Accueil</Link>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileActions}>
          <Link href={APPOINTMENT_HREF} className="btn btn--primary">
            Prendre rendez-vous
          </Link>
          <a href={telHref} className="btn btn--outline">
            <Icon name="phone" size={18} />
            {PHONE.display}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
