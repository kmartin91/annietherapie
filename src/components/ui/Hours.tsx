import { ReactElement, useSyncExternalStore } from "react";

import { OPENING_HOURS } from "@/lib/site";

import styles from "./Hours.module.css";

const subscribe = () => () => undefined;
const getDay = () => new Date().getDay();
const getServerDay = () => -1;

// Horaires de la semaine ; le jour courant est mis en avant (côté navigateur
// seulement, pour un HTML statique identique pour tous).
const Hours = ({ compact = false }: { compact?: boolean }): ReactElement => {
  const today = useSyncExternalStore(subscribe, getDay, getServerDay);

  if (compact) {
    return (
      <dl className={styles.list}>
        <dt className={styles.day}>Lundi au jeudi</dt>
        <dd className={styles.hours}>{OPENING_HOURS[0].hours}</dd>
        <dt className={`${styles.day} ${styles.closed}`}>Vendredi au dimanche</dt>
        <dd className={`${styles.hours} ${styles.closed}`}>fermé</dd>
      </dl>
    );
  }

  return (
    <dl className={styles.list}>
      {OPENING_HOURS.map((day) => {
        const isToday = day.day === today;
        const classes = [isToday && styles.today, !day.hours && styles.closed].filter(Boolean).join(" ");
        return (
          <div key={day.label} className={styles.row}>
            <dt className={`${styles.day} ${classes}`}>
              {day.label}
              {isToday && <span className={styles.todayTag}> · aujourd’hui</span>}
            </dt>
            <dd className={`${styles.hours} ${classes}`}>{day.hours || "fermé"}</dd>
          </div>
        );
      })}
    </dl>
  );
};

export default Hours;
