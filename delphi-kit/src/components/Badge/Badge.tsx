import styles from '../Badge/Badge.module.css';

type BadgeProps = {
    text: string
}

export default function Badge({text} : BadgeProps) {
    return (
        <span className={styles.bagdeSytle} >{text}</span>
    )
}