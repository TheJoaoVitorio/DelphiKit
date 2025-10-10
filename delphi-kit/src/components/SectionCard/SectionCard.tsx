import React from 'react';
// 1. Importe o arquivo CSS Module
import styles from './SectionCard.module.css';

export function SectionCard({title, description}: {title?: string, description?: string}) {
  return (
    <div className={styles.card}>
      <div className={styles.card__border} />
      <div className={styles.card_title__container}>
        <span className={styles.card_title}>{title}</span>
        <p className={styles.card_paragraph}>
            {description}
        </p>
      </div>
    </div>
  );
}