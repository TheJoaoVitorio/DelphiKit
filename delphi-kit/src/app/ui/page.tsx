import { Card } from '../../components/Card/Card';
import styles from './page.module.css';

export default function UiPage() {
    const cardItems = [
        {
            "id": 1,
            "name": "shadcn/ui",
            "img": "https://res.cloudinary.com/cosmocloudinary/image/upload/freesets/components/shadcn",
            "link": "https://ui.shadcn.com",
            "tags": ["React", "Tailwind", "Chart"]
        },
        {
            "id": 2,
            "name": "NextUI",
            "img": "https://res.cloudinary.com/cosmocloudinary/image/upload/freesets/components/nextui",
            "link": "https://nextui.org",
            "tags": ["React", "Next.js", "Vercel"]
        },
    ];

    return (
        <div className={styles.pageContainer}>
            <div>
                <h1 className="text-3xl font-bold mb-4">UI Library</h1>
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