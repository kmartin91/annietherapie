import { ReactElement } from "react";

import Icon from "components/ui/Icon";

import styles from "./Faq.module.css";

export interface FaqItem {
  q: string;
  a: string;
}

// Questions fréquentes (les données structurées FAQPage sont ajoutées par la page).
const Faq = ({ items, openFirst = false }: { items: FaqItem[]; openFirst?: boolean }): ReactElement => (
  <div className={styles.list}>
    {items.map((item, index) => (
      <details key={item.q} className={styles.item} open={openFirst && index === 0}>
        <summary className={styles.summary}>
          <h3 className={styles.question}>{item.q}</h3>
          <Icon name="chevron" size={22} className={styles.chevron} />
        </summary>
        <p className={styles.answer}>{item.a}</p>
      </details>
    ))}
  </div>
);

export default Faq;
