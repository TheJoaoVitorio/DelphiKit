import React from "react";
import styles from "./CardDescription.module.css";

type CardDescriptionProps = {
    img: string;
    name: string;
    description: string;
    link: string;
    tags: string[];
};

export function CardDescription({ img, name, description, tags } : CardDescriptionProps) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.cardBg}>
                    <div className={styles.cardGradient}></div>
                    <div className={styles.cardCircle}></div>
                    <div className={styles.cardPulse1}></div>
                    <div className={styles.cardPulse2}></div>
                    <div className={styles.cardSheen}></div>
                </div>

                <div className={styles.cardContent}>
                    <div className={styles.cardCenter}>
                        <div className={styles.cardIconWrapper}>
                            <div className={styles.cardIconBorder}></div>
                            <div className={styles.cardIconBorder2}></div>
                            <div className={styles.cardIcon}>
                                <div className={styles.cardIconInner}>
                                    <img src={img} alt={name} />
                                </div>
                            </div>
                        </div>

                        <div className={styles.cardTitle}>
                            <p>{name}</p>
                        </div>

                        <div className={styles.cardText}>
                            <p>{description}</p>
                        </div>

                        <div className={styles.cardDivider}></div>

                        <div className={styles.cardDots}>
                            {tags && tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`${styles.cardCorner} ${styles.tl}`}></div>
                <div className={`${styles.cardCorner} ${styles.br}`}></div>
            </div>
        </div>
    );
}
