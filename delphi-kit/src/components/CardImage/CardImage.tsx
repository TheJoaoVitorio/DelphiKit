import React from 'react';
import styles from '../CardImage/CardImage.module.css';
import { StaticImageData } from 'next/image';

type CardImageProps = {
    name: string;
    imageUrl: string;
    link: string;
}

export function CardImage({ name, imageUrl, link }: CardImageProps) {
    return (
        <a
            href={link}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >

            <div className={styles.card_container}>
                <img
                    src={imageUrl}
                    alt={`Logo for ${name}`}
                    className={styles.image}
                />
            </div>

            <div className={`${styles.subCard} ${styles.named}`}>
                <span className={styles.text_span}>{name}</span>
            </div>
        </a>
    );
}