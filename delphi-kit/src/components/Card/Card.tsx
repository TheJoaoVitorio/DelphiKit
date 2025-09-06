import React from 'react';
import styles from './Card.module.css';

type CardProps = {
    img: string;
    name: string;
    tags: string[];
};

export function Card({ img, name, tags }: CardProps) {
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <div className={styles.card_content}>
                    <div
                        className={styles.card_image}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                </div>
                <div className={styles.card_back}></div>
            </div>

            <div className={styles.data}>
                <div className={styles.text}>
                    <div className={styles.text_m}>{name}</div>
                </div>
            </div>

            <div className={styles.btns}>
                {tags && tags.map((tag, index) => (
                    <div key={index} className={styles.tag}>
                        <span>{tag}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}