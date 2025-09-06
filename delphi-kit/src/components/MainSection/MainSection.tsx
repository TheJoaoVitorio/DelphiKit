import styles from './MainSection.module.css';

const ArrowIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.66669 3.3335L13.3334 8.00016L8.66669 12.6668"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.66663 8H13.3333"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export function MainSection() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {/* Título Principal */}
                <h1 className={styles.title}>
                    Delphi<span className={styles.titleRed} >Kit</span>
                </h1>

                <br></br>
                 
                <h2 className={styles.titleSmall} >Preview <span className={styles.pixelText}>before installing</span></h2>


                {/* Subtítulo */}
                <p className={styles.subtitle}>
                    Component and resource hub for your Delphi projects.
                </p>

                {/* Botões de Ação */}
                <div className={styles.buttonWrapper}>
                    <a href="/ui" className={styles.primaryButton}>
                        Components <ArrowIcon />
                    </a>
                    <a href="/frameworks" className={styles.secondaryButton}>
                        Frameworks
                    </a>
                </div>

                {/* Grid de Features */}
                <div className={styles.featuresGrid}>
                    <a href="https://github.com/TheJoaoVitorio/DelphiKit" className={styles.featureCard}>
                        <div>
                            <h3>Contribute to the repository</h3>
                            <p>Help the Delphi community by submitting new components, frameworks, and improvements to make this collection even more complete</p>
                        </div>
                        <ArrowIcon />
                    </a>
                    <a href="/docs" className={styles.featureCard}>
                        <div>
                            <h3>How to Contribute</h3>
                            <p>Contributing is easy! Just fill out a simple JSON file with the repository path, images, title, description, and tags. Your submission will help others discover great Delphi tools and resources.</p>
                        </div>
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </section>
    );
}