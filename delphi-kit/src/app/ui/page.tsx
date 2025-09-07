import libraryService from '@/src/services/libraryService';
import { Card } from '../../components/Card/Card';
import styles from './page.module.css';
import Badge from '@/src/components/Badge/Badge';

export default function UiPage() {
    const api = libraryService();
    const cardItems = api.getLibraryData();

    return (
        <div className={styles.pageContainer}>
            <div className={styles.titleRed} >
                <h1 className="text-3xl font-bold mb-4">
                    UI Library
                    <Badge text={cardItems.length.toString()} />
                </h1>
            </div>

            <p className={styles.headerText}>
                Discover a variety of UI packages and libraries for Delphi, designed to speed up the development of your applications.
            </p>

            <div className={styles.cardGrid}>
                {cardItems.map((item) => (
                    <Card
                        name={item.name}
                        img={item.img}
                        tags={item.tags}
                    />
                ))}
            </div>
        </div>
    );
}