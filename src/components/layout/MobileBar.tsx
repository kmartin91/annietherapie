import Link from "next/link";
import { ReactElement } from "react";

import Icon from "components/ui/Icon";
import { APPOINTMENT_HREF, PHONE, telHref } from "@/lib/site";

import styles from "./MobileBar.module.css";

// Sur téléphone : appeler ou prendre rendez-vous, toujours à portée de pouce.
const MobileBar = (): ReactElement => (
  <div className={styles.bar}>
    <a href={telHref} className={styles.call} aria-label={`Appeler le ${PHONE.display}`}>
      <Icon name="phone" size={20} />
    </a>
    <Link href={APPOINTMENT_HREF} className={`btn btn--primary ${styles.book}`}>
      Prendre rendez-vous
    </Link>
  </div>
);

export default MobileBar;
