import Link from "next/link";
import { ReactElement } from "react";

import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ items }: { items: { name: string; path: string }[] }): ReactElement => (
  <nav aria-label="Fil d’Ariane" className={styles.crumbs}>
    <ol>
      {items.map((item, index) =>
        index < items.length - 1 ? (
          <li key={item.path}>
            <Link href={item.path}>{item.name}</Link>
            <span aria-hidden="true">›</span>
          </li>
        ) : (
          <li key={item.path} aria-current="page">
            {item.name}
          </li>
        ),
      )}
    </ol>
  </nav>
);

export default Breadcrumbs;
