'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';
import Image from 'next/image';
import logoPath from '../../assets/logo.png';

const GitHubIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.githubIcon}
    >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'UI library', href: '/ui' },
    { name: 'Frameworks', href: '/frameworks' },
];

export function Header() {
    const navRef = useRef<HTMLElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const activeIndex = navLinks.findIndex(link => link.href === pathname);

    useEffect(() => {
        if (navRef.current && indicatorRef.current && activeIndex !== -1) {
            const activeLink = navRef.current.children[activeIndex] as HTMLElement;
            if (activeLink) {
                indicatorRef.current.style.width = `${activeLink.offsetWidth}px`;
                indicatorRef.current.style.left = `${activeLink.offsetLeft}px`;
            }
        }
    }, [activeIndex, pathname, isMobile]);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {!isMobile && (
                    <Link href="/" className={styles.logo}>
                        <Image
                            src={logoPath}
                            alt="DelphiKit"
                            width={64}
                            height={64}
                            className={styles.logoImage}
                        />
                    </Link>
                )}

                <nav className={styles.nav} ref={navRef}>
                    {navLinks.map((link, index) => (
                        <button
                            key={link.href}
                            className={`${styles.navLink} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => router.push(link.href)}
                            type="button"
                        >
                            {(isMobile && link.href === '/') ? (
                                <Image
                                    src={logoPath}
                                    alt="DelphiKit Home"
                                    width={32}
                                    height={32}
                                    className={styles.logoImage}
                                />
                            ) : (
                                link.name
                            )}
                        </button>
                    ))}
                    {/* <div ref={indicatorRef} className={styles.navIndicator}></div> */}
                </nav>

                {!isMobile && (
                    <div className={styles.actions}>
                        <a
                            href="https://github.com/TheJoaoVitorio/DelphiKit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.actionButton}
                        >
                            <GitHubIcon />
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}