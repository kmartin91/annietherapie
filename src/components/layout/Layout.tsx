import { ReactElement, ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import MobileBar from "./MobileBar";

import styles from "./Layout.module.css";

const Layout = ({ children }: { children: ReactNode }): ReactElement => (
  <div className={styles.layout}>
    <a className="skip-link" href="#contenu">
      Aller au contenu
    </a>
    <Header />
    <main id="contenu" tabIndex={-1} className={styles.main}>
      {children}
    </main>
    <Footer />
    <MobileBar />
  </div>
);

export default Layout;
